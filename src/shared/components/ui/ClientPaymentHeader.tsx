import {
  cartTotals,
  formatCOP,
  getCart,
  getTableNumber,
  subscribeCart,
} from '@/features/cart/state/store';

function setText(el: Element | null | undefined, value: string) {
  if (!el) return;
  if ((el.textContent || '') === value) return;
  el.textContent = value;
}

function isLeafSpan(el: Element): el is HTMLSpanElement {
  return el instanceof HTMLSpanElement && el.childElementCount === 0;
}

function norm(raw: string): string {
  return raw.replace(/\s+/g, ' ').trim();
}

function isMoney(t: string): boolean {
  return /^\$\s*[\d.]+$/.test(t);
}

/** Busca un monto `$ …` hermano en la misma fila (hasta 4 niveles). */
function findSiblingMoney(from: Element): HTMLSpanElement | null {
  let row: HTMLElement | null = from.parentElement;
  for (let i = 0; i < 5 && row; i++) {
    const moneys = Array.from(row.querySelectorAll('span')).filter(
      (s) => s !== from && !from.contains(s) && isLeafSpan(s) && isMoney(norm(s.textContent || '')),
    );
    if (moneys.length) return moneys[0];
    row = row.parentElement;
  }
  return null;
}

/** Actualiza mesa / totales en pantallas «Elige cómo pagar» (local y domicilio). */
export function mountPaymentHeader(root: HTMLElement): () => void {
  let scheduled = 0;
  let mo: MutationObserver | null = null;

  const apply = () => {
    mo?.disconnect();
    try {
      const cart = getCart();
      // Siempre carrito vivo en pago (no snapshot de un pedido anterior)
      const { count, subtotal, delivery, total } = cartTotals(
        cart.items,
        cart.fulfillment,
      );
      const table = getTableNumber();
      const tableLabel =
        table >= 1 ? `Mesa ${table} · Pedido en el local` : 'Pedido en el local';
      const countLabel = count === 1 ? '1 producto' : `${count} productos`;
      const money = formatCOP(total);
      const subMoney = formatCOP(subtotal);
      const deliveryMoney = formatCOP(delivery);

      root.querySelectorAll('span').forEach((el) => {
        if (!isLeafSpan(el)) return;
        const t = norm(el.textContent || '');
        if (!t) return;

        // Mesa N · Pedido en el local (cualquier número viejo del export)
        if (/^Mesa\s+\d+/i.test(t) && /Pedido en el local/i.test(t)) {
          setText(el, tableLabel);
          return;
        }
        if (t === 'Pedido en el local' && cart.fulfillment === 'local') {
          setText(el, tableLabel);
          return;
        }

        // Contador corto en tarjeta local: "3 productos"
        if (/^\d+\s+productos?$/i.test(t)) {
          setText(el, countLabel);
          return;
        }

        // Subtotal (N productos) — pantallas domicilio
        if (/^Subtotal\s*\(/i.test(t)) {
          setText(
            el,
            count === 1
              ? 'Subtotal (1 producto)'
              : `Subtotal (${count} productos)`,
          );
          const sib = findSiblingMoney(el);
          if (sib) setText(sib, subMoney);
          return;
        }

        // Total $ … (local: un solo span)
        if (/^Total\s*\$/i.test(t)) {
          setText(el, `Total ${money}`);
          return;
        }

        // Total (domicilio: label y monto en spans separados)
        if (/^Total$/i.test(t)) {
          const sib = findSiblingMoney(el);
          if (sib) setText(sib, money);
          return;
        }

        // Domicilio fee
        if (isMoney(t)) {
          const rowText = norm(
            el.parentElement?.parentElement?.textContent || '',
          );
          if (
            /\bDomicilio\b/i.test(rowText) &&
            !/Subtotal/i.test(rowText) &&
            !/\bTotal\b/i.test(rowText)
          ) {
            if (delivery > 0) setText(el, deliveryMoney);
          }
        }
      });

      // CTA «Pagar con …» + precio (local y domicilio)
      root.querySelectorAll('span').forEach((el) => {
        if (!isLeafSpan(el)) return;
        const t = norm(el.textContent || '');
        if (!/^Pagar con/i.test(t)) return;
        let node: HTMLElement | null = el.parentElement;
        for (let i = 0; i < 8 && node; i++) {
          const bg = (node.style.background || '').toLowerCase();
          const looksCta =
            bg.includes('#ed6047') ||
            bg.includes('237, 96, 71') ||
            node.getAttribute('data-figma-id')?.includes('650:') ||
            node.getAttribute('data-figma-id')?.includes('653:');
          if (looksCta || i >= 2) {
            const moneyEl = Array.from(node.querySelectorAll('span')).find(
              (s) => isLeafSpan(s) && isMoney(norm(s.textContent || '')),
            );
            if (moneyEl) {
              setText(moneyEl, money);
              break;
            }
          }
          node = node.parentElement;
        }
      });

      // Fallback por ids frecuentes (Nequi local)
      setText(
        root.querySelector('[data-figma-id="650:3369"]'),
        `Mesa ${table} · Pedido en el local`,
      );
      setText(root.querySelector('[data-figma-id="650:3380"]'), countLabel);
      setText(
        root.querySelector('[data-figma-id="650:3381"]'),
        `Total ${money}`,
      );

      // Fallback domicilio (Nequi y variantes cercanas)
      setText(
        root.querySelector('[data-figma-id="653:3727"]'),
        count === 1
          ? 'Subtotal (1 producto)'
          : `Subtotal (${count} productos)`,
      );
      setText(root.querySelector('[data-figma-id="653:3729"]'), subMoney);
      if (delivery > 0) {
        setText(root.querySelector('[data-figma-id="653:3734"]'), deliveryMoney);
      }
      setText(root.querySelector('[data-figma-id="653:3740"]'), money);
    } finally {
      mo?.observe(root, {
        subtree: true,
        childList: true,
        characterData: true,
      });
    }
  };

  const schedule = () => {
    if (scheduled) return;
    scheduled = window.setTimeout(() => {
      scheduled = 0;
      apply();
    }, 16);
  };

  mo = new MutationObserver(schedule);
  apply();
  const t1 = window.setTimeout(apply, 0);
  const t2 = window.setTimeout(apply, 50);
  const t3 = window.setTimeout(apply, 200);
  const unsub = subscribeCart(apply);

  return () => {
    window.clearTimeout(t1);
    window.clearTimeout(t2);
    window.clearTimeout(t3);
    if (scheduled) window.clearTimeout(scheduled);
    mo?.disconnect();
    unsub();
  };
}
