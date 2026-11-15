import {
  cartTotals,
  formatCOP,
  getCart,
  getOrderForSummary,
  getTableNumber,
  subscribeCart,
} from '../cart/store';

/** Actualiza mesa / totales en pantallas «Elige cómo pagar». */
export function mountPaymentHeader(root: HTMLElement): () => void {
  const apply = () => {
    const cart = getCart();
    const order = getOrderForSummary();
    const { count, total } = cartTotals(order.items, order.fulfillment);
    const table = getTableNumber();
    const countLabel = count === 1 ? '1 producto' : `${count} productos`;
    const totalLabel = `Total ${formatCOP(total)}`;

    root.querySelectorAll('span').forEach((el) => {
      if (el.children.length > 0) return;
      const t = (el.textContent || '').replace(/\s+/g, ' ').trim();

      // Mesa N · Pedido en el local
      if (/^Mesa\s+\d+\s*·\s*Pedido en el local$/i.test(t) || t === 'Mesa 7 · Pedido en el local') {
        el.textContent = `Mesa ${table} · Pedido en el local`;
        return;
      }
      if (/^Pedido en el local$/i.test(t) && cart.fulfillment === 'local') {
        el.textContent = `Mesa ${table} · Pedido en el local`;
        return;
      }

      // Contador de productos en la tarjeta resumen
      if (/^\d+\s+productos?$/i.test(t)) {
        el.textContent = countLabel;
        return;
      }

      // Total $ …
      if (/^Total\s*\$/i.test(t)) {
        el.textContent = totalLabel;
        return;
      }

      // Precio del CTA «Pagar con …»
      if (/^\$\s*[\d.]+$/.test(t)) {
        const parentText = (el.parentElement?.textContent || '').replace(/\s+/g, ' ');
        if (/Pagar con/i.test(parentText) || /Continuar/i.test(parentText)) {
          el.textContent = formatCOP(total);
        }
      }
    });

    // CTA: buscar precio dentro del botón coral
    root.querySelectorAll('span').forEach((el) => {
      const t = (el.textContent || '').trim();
      if (!/^Pagar con/i.test(t)) return;
      let node: HTMLElement | null = el.parentElement;
      for (let i = 0; i < 5 && node; i++) {
        const bg = (node.style.background || '').toLowerCase();
        if (bg.includes('#ed6047') || bg.includes('237, 96, 71')) {
          const money = Array.from(node.querySelectorAll('span')).find((s) =>
            /^\$\s*[\d.]+$/.test((s.textContent || '').trim()),
          );
          if (money) money.textContent = formatCOP(total);
          break;
        }
        node = node.parentElement;
      }
    });
  };

  apply();
  return subscribeCart(apply);
}
