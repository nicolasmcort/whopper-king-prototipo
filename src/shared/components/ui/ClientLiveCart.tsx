import { useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  cartTotals,
  decItem,
  DELIVERY_FEE,
  formatCOP,
  getCart,
  incItem,
  setFulfillment,
  subscribeCart,
  type CartItem,
  type Fulfillment,
} from '@/features/cart/state/store';
import { ClientUtensilsIcon } from '@/shared/components/ui/ClientUiIcons';

const CORAL = '#ed6047';
const CORAL_SOFT = '#fff1eb';
const CORAL_ICON_BG = '#ffe5da';
const INK = '#29241f';
const MUTED = '#82776e';
const PILL_BG = '#f7ebe7';
const BORDER = '#ebe4dc';
const DELIVERY_LABEL = '#bd412d';

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 4.5h9M6.5 4.5V3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1M5 4.5l.5 8.5a1 1 0 0 0 1 .9h3a1 1 0 0 0 1-.9L11 4.5"
        stroke={CORAL}
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScooterIcon({ color = CORAL }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6.5" cy="17.5" r="2.25" stroke={color} strokeWidth="1.5" />
      <circle cx="17.5" cy="17.5" r="2.25" stroke={color} strokeWidth="1.5" />
      <path
        d="M8.5 17.5h5.2L16 10.5h2.5M16 10.5l-1.8-4H11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 17.5 10 11h3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QtyPill({ item }: { item: CartItem }) {
  const isTrash = item.qty <= 1;
  return (
    <div
      style={{
        width: 122,
        height: 42,
        background: PILL_BG,
        borderRadius: 999,
        display: 'flex',
        alignItems: 'center',
        padding: '1px 5px',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      <button
        type="button"
        aria-label={isTrash ? 'Quitar' : 'Disminuir'}
        onClick={(e) => {
          e.stopPropagation();
          decItem(item.id);
        }}
        style={btnStyle}
      >
        {isTrash ? <TrashIcon /> : <span style={symStyle}>−</span>}
      </button>
      <span
        style={{
          flex: 1,
          textAlign: 'center',
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: INK,
        }}
      >
        {item.qty}
      </span>
      <button
        type="button"
        aria-label="Aumentar"
        onClick={(e) => {
          e.stopPropagation();
          incItem(item.id);
        }}
        style={btnStyle}
      >
        <span style={symStyle}>+</span>
      </button>
    </div>
  );
}

const btnStyle: CSSProperties = {
  width: 44,
  height: 44,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  color: CORAL,
};

const symStyle: CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: 18,
  color: CORAL,
  lineHeight: 1,
};

function CartRow({ item }: { item: CartItem }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: 1 }}>
        <div
          style={{
            width: 72,
            height: 79,
            borderRadius: 14,
            overflow: 'hidden',
            flexShrink: 0,
            backgroundImage: `url("${item.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, gap: 2 }}>
          <span
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: INK,
              lineHeight: '20.63px',
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 12.5,
              color: MUTED,
              lineHeight: '18.75px',
            }}
          >
            {item.variant} · {formatCOP(item.unitPrice)} c/u
          </span>
          <span
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 16,
              color: INK,
              lineHeight: '24px',
              marginTop: 2,
            }}
          >
            {formatCOP(item.unitPrice * item.qty)}
          </span>
        </div>
      </div>
      <QtyPill item={item} />
    </div>
  );
}

function FulfillmentCard({
  selected,
  title,
  subtitle,
  subtitleColor,
  icon,
  onSelect,
}: {
  selected: boolean;
  title: string;
  subtitle: string;
  subtitleColor?: string;
  icon: ReactNode;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      data-proto-fulfillment="1"
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect();
      }}
      style={{
        flex: 1,
        minWidth: 0,
        height: 104,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        background: selected ? CORAL_SOFT : '#ffffff',
        boxShadow: selected ? `inset 0 0 0 1px ${CORAL}` : `inset 0 0 0 1px ${BORDER}`,
        borderRadius: 16,
        filter: selected ? 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))' : undefined,
        padding: 12,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'relative',
        zIndex: 2,
        pointerEvents: 'auto',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9999,
            background: selected ? CORAL_ICON_BG : '#f5efeb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 9999,
            boxSizing: 'border-box',
            border: selected ? 'none' : `2px solid ${BORDER}`,
            boxShadow: selected ? `inset 0 0 0 2px ${CORAL}` : undefined,
            padding: selected ? 2 : 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selected ? (
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: CORAL }} />
          ) : null}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: INK,
            lineHeight: '17.5px',
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: selected && subtitleColor ? 500 : 400,
            fontSize: 11,
            color: subtitleColor ?? MUTED,
            lineHeight: '16.5px',
          }}
        >
          {subtitle}
        </span>
      </div>
    </button>
  );
}

function FulfillmentPicker({
  value,
  onChange,
}: {
  value: Fulfillment;
  onChange: (next: Fulfillment) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', marginTop: 8 }}>
      <span
        style={{
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 18,
          color: INK,
          lineHeight: '27px',
        }}
      >
        ¿Dónde quieres tu pedido?
      </span>
      <div style={{ display: 'flex', gap: 12, width: '100%' }}>
        <FulfillmentCard
          selected={value === 'local'}
          title="En el local"
          subtitle="Escanea el QR de tu mesa"
          icon={<ClientUtensilsIcon size={16} color={CORAL} />}
          onSelect={() => onChange('local')}
        />
        <FulfillmentCard
          selected={value === 'domicilio'}
          title="A domicilio"
          subtitle={
            value === 'domicilio'
              ? `Pasto · Envío ${formatCOP(DELIVERY_FEE)}`
              : 'Pasto'
          }
          subtitleColor={value === 'domicilio' ? DELIVERY_LABEL : undefined}
          icon={<ScooterIcon color={CORAL} />}
          onSelect={() => onChange('domicilio')}
        />
      </div>
    </div>
  );
}

function LiveCartBody({
  onAddMore,
  onFulfillment,
}: {
  onAddMore: () => void;
  onFulfillment: (next: Fulfillment) => void;
}) {
  const cart = useSyncExternalStore(subscribeCart, getCart, getCart);
  const { count } = cartTotals(cart.items, cart.fulfillment);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 20,
            color: INK,
            lineHeight: '30px',
          }}
        >
          Platos seleccionados
        </span>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            color: MUTED,
          }}
        >
          {count === 1 ? '1 producto' : `${count} productos`}
        </span>
      </div>

      {cart.items.length === 0 ? (
        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 14,
            color: MUTED,
            lineHeight: 1.4,
          }}
        >
          Tu carrito está vacío. Añade algo del menú.
        </p>
      ) : (
        cart.items.map((item) => <CartRow key={item.id} item={item} />)
      )}

      <button
        type="button"
        onClick={onAddMore}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '8px 0 0 28px',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          color: CORAL,
          alignSelf: 'flex-start',
        }}
      >
        <span>+</span>
        <span>Añadir algo más</span>
      </button>

      <FulfillmentPicker value={cart.fulfillment} onChange={onFulfillment} />
    </div>
  );
}

/** Monto ($) hermano del label en la misma fila space-between. */
function findAmountSibling(labelEl: HTMLElement): HTMLElement | null {
  let row: HTMLElement | null = labelEl.parentElement;
  for (let i = 0; i < 5 && row; i++) {
    const style = row.getAttribute('style') || '';
    const looksRow =
      style.includes('space-between') ||
      getComputedStyle(row).justifyContent === 'space-between';
    if (looksRow) {
      const moneys = Array.from(row.querySelectorAll('span')).filter((s) => {
        if (s === labelEl || labelEl.contains(s)) return false;
        // El monto no debe estar bajo el mismo wrapper inmediato del label
        if (labelEl.parentElement?.contains(s) && labelEl.parentElement !== row) return false;
        return /^\$\s*[\d.]+$/.test((s.textContent || '').trim());
      });
      if (moneys.length === 1) return moneys[0] as HTMLElement;
      if (moneys.length > 1) {
        // El más cercano al label en el DOM (después del label)
        const after = moneys.find((s) =>
          Boolean(labelEl.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING),
        );
        return (after || moneys[0]) as HTMLElement;
      }
    }
    row = row.parentElement;
  }
  return null;
}

function ensureDeliveryRow(root: HTMLElement, delivery: number) {
  const existing = root.querySelector('[data-proto-delivery-row]') as HTMLElement | null;
  const nativeDomicilioLabel = Array.from(root.querySelectorAll('span')).find(
    (el) =>
      (el.textContent || '').trim() === 'Domicilio' && !el.closest('[data-proto-delivery-row]'),
  );

  if (nativeDomicilioLabel) {
    existing?.remove();
    const money = findAmountSibling(nativeDomicilioLabel);
    const row =
      (nativeDomicilioLabel.closest('[style*="space-between"]') as HTMLElement | null) ||
      nativeDomicilioLabel.parentElement?.parentElement ||
      null;
    if (delivery > 0) {
      if (row) row.style.display = '';
      if (money) money.textContent = formatCOP(delivery);
    } else if (row) {
      row.style.display = 'none';
    }
    return;
  }

  if (delivery <= 0) {
    existing?.remove();
    return;
  }

  if (existing) {
    const money = existing.querySelector('[data-proto-delivery-amount]');
    if (money) money.textContent = formatCOP(delivery);
    return;
  }

  const subtotalLabel = Array.from(root.querySelectorAll('span')).find((el) =>
    /^Subtotal\s*\(/i.test((el.textContent || '').trim()),
  );
  const row: HTMLElement | null = subtotalLabel?.parentElement?.parentElement ?? null;
  if (!row) return;

  const deliveryRow = document.createElement('div');
  deliveryRow.setAttribute('data-proto-delivery-row', '1');
  deliveryRow.style.cssText = [
    'display:flex',
    'align-items:center',
    'justify-content:space-between',
    'width:100%',
    'min-width:0',
    'flex-shrink:0',
    'margin-top:6px',
  ].join(';');
  deliveryRow.innerHTML = `
    <span style="font-family:'Inter',system-ui,sans-serif;font-size:14px;font-weight:400;color:${MUTED};line-height:21px">Domicilio</span>
    <span data-proto-delivery-amount style="font-family:'Inter',system-ui,sans-serif;font-size:14px;font-weight:500;color:${INK};line-height:21px">${formatCOP(delivery)}</span>
  `;
  row.insertAdjacentElement('afterend', deliveryRow);
}

function patchCartFooter(root: HTMLElement) {
  const { count, subtotal, delivery, total } = cartTotals();
  const subMoney = formatCOP(subtotal);
  const grandMoney = formatCOP(total);
  const countLabel =
    count === 0
      ? 'Subtotal (0 productos)'
      : count === 1
        ? 'Subtotal (1 producto)'
        : `Subtotal (${count} productos)`;

  ensureDeliveryRow(root, delivery);

  // 1) Label Subtotal + su monto hermano
  const subtotalLabel = Array.from(root.querySelectorAll('span')).find((el) =>
    /^Subtotal\s*\(/i.test((el.textContent || '').replace(/\s+/g, ' ').trim()),
  );
  if (subtotalLabel) {
    subtotalLabel.textContent = countLabel;
    const money = findAmountSibling(subtotalLabel);
    if (money) money.textContent = subMoney;
  }

  // 2) Label Total a pagar + su monto hermano
  const totalLabel = Array.from(root.querySelectorAll('span')).find(
    (el) => (el.textContent || '').trim() === 'Total a pagar',
  );
  if (totalLabel) {
    const money = findAmountSibling(totalLabel);
    if (money) money.textContent = grandMoney;
  }

  // 3) Botón Continuar al pago / Comprar
  const ctaLabel = Array.from(root.querySelectorAll('span')).find((el) => {
    const t = (el.textContent || '').trim();
    return t === 'Continuar al pago' || t === 'Continuar a pago' || t === 'Comprar';
  });
  if (ctaLabel) {
    let node: HTMLElement | null = ctaLabel.parentElement;
    for (let i = 0; i < 5 && node; i++) {
      // Buscar el span de precio blanco del CTA (hermanos del label, no el total de arriba)
      const candidates = Array.from(node.querySelectorAll('span')).filter((s) =>
        /^\$\s*[\d.]+$/.test((s.textContent || '').trim()),
      );
      // Preferir el que esté dentro del botón coral
      const inButton = candidates.find((s) => {
        let p: HTMLElement | null = s.parentElement;
        for (let j = 0; j < 6 && p; j++) {
          const bg = (p.style.background || '').toLowerCase();
          if (bg.includes('#ed6047') || bg.includes('237, 96, 71')) return true;
          p = p.parentElement;
        }
        return false;
      });
      const money = inButton || candidates[candidates.length - 1];
      if (money) {
        money.textContent = grandMoney;
        break;
      }
      node = node.parentElement;
    }
  }

  // Fallback por figma-id conocidos (Tu carrito local)
  const byId = (id: string) => root.querySelector(`[data-figma-id="${id}"]`) as HTMLElement | null;
  const subAmt = byId('650:2887') || byId('650:2687');
  const totAmt = byId('650:2897') || byId('650:2697');
  const ctaAmt = byId('650:2903') || byId('650:2703');
  if (subAmt) subAmt.textContent = subMoney;
  if (totAmt) totAmt.textContent = grandMoney;
  if (ctaAmt) ctaAmt.textContent = grandMoney;
}

const mountAttr = 'data-proto-live-cart';

/** Sustituye la sección estática de platos por la lista viva del carrito. */
export function mountLiveCart(
  root: HTMLElement,
  navigate: (id: string) => void,
): () => void {
  const title = Array.from(root.querySelectorAll('span')).find(
    (el) => (el.textContent || '').trim() === 'Platos seleccionados',
  );
  if (!title) return () => {};

  let section: HTMLElement | null = title.parentElement;
  for (let i = 0; i < 6 && section; i++) {
    const hasAdd = /Añadir algo más/i.test(section.textContent || '');
    const hasWhopper = /Whopper|Texana|producto/i.test(section.textContent || '');
    if (hasAdd && hasWhopper && section.querySelectorAll('[data-figma-id]').length >= 5) {
      break;
    }
    section = section.parentElement;
  }
  if (!section) return () => {};

  if (section.getAttribute(mountAttr) === '1') return () => {};
  section.setAttribute(mountAttr, '1');
  section.style.height = 'auto';
  section.style.minHeight = '0';
  section.style.overflow = 'visible';
  section.style.flexShrink = '0';

  // Liberar ancestros Figma que recortan el selector local/domicilio.
  // NUNCA tocar el shell (.phone-frame / scroll / scaler): height:auto + absolute → pantalla en blanco.
  const isShellChrome = (el: HTMLElement) =>
    el.classList.contains('phone-frame') ||
    el.classList.contains('phone-scroll') ||
    el.classList.contains('app-shell__scaler') ||
    el.classList.contains('app-shell__stage') ||
    el.classList.contains('app-shell') ||
    el.hasAttribute('data-proto-scroll') ||
    el === root;

  let liberate: HTMLElement | null = section.parentElement;
  for (let i = 0; i < 8 && liberate && !isShellChrome(liberate); i++) {
    const h = liberate.style.height;
    if (h && h !== 'auto' && h !== 'max-content' && !h.includes('%') && !h.includes('dvh')) {
      liberate.style.height = 'auto';
    }
    if (liberate.style.overflow === 'hidden') {
      liberate.style.overflow = 'visible';
    }
    liberate = liberate.parentElement;
  }

  // Footer de totales/CTA: altura automática para no tapar Subtotal/Total
  root.querySelectorAll<HTMLElement>(
    '[data-figma-id="650:2802"], [data-figma-id="650:2681"], [data-figma-id="650:2881"], [data-figma-id="650:2882"], [data-figma-id="650:2682"], [data-figma-id="650:2713"], [data-figma-id="650:2725"], [data-figma-id="650:2726"]',
  ).forEach((el) => {
    el.style.height = 'auto';
    el.style.minHeight = '0';
    el.style.overflow = 'visible';
    el.style.flexGrow = '0';
    el.style.flexShrink = '0';
    if (el.getAttribute('data-figma-id') === '650:2802') {
      el.style.paddingTop = '20px';
    }
    // Si quedó absolute (export Figma), volver al flujo
    if (el.style.position === 'absolute') {
      el.style.position = 'relative';
      el.style.left = 'auto';
      el.style.right = 'auto';
      el.style.top = 'auto';
      el.style.bottom = 'auto';
    }
  });

  const host = document.createElement('div');
  host.setAttribute(mountAttr, 'host');
  host.style.cssText =
    'width:100%;position:relative;z-index:3;overflow:visible;pointer-events:auto;';

  Array.from(section.children).forEach((child) => {
    (child as HTMLElement).style.display = 'none';
  });
  section.appendChild(host);

  // Solo forzar domicilio si la URL ya es la pantalla de domicilio
  const hash = window.location.hash;
  if (/tu-carrito-domicilio|carrito-domicilio/.test(hash)) setFulfillment('domicilio');

  const syncStatusCard = () => {
    const card = root.querySelector('[data-figma-id="650:2727"]') as HTMLElement | null;
    if (!card) return;
    const { fulfillment } = getCart();
    // Con domicilio no mostrar el cuadro de «Pedido en el local»
    card.style.display = fulfillment === 'domicilio' ? 'none' : '';
  };

  const reactRoot: Root = createRoot(host);
  const render = () => {
    reactRoot.render(
      <LiveCartBody
        onAddMore={() => {
          navigate('whopper-inicio');
        }}
        onFulfillment={(next) => {
          // Solo cambia modo en sitio (sin remount) para que el clic responda
          setFulfillment(next);
        }}
      />,
    );
    patchCartFooter(root);
    syncStatusCard();
  };

  render();
  const unsub = subscribeCart(() => {
    render();
  });

  return () => {
    unsub();
    reactRoot.unmount();
    host.remove();
    root.querySelector('[data-proto-delivery-row]')?.remove();
    section.removeAttribute(mountAttr);
    Array.from(section.children).forEach((child) => {
      (child as HTMLElement).style.display = '';
    });
  };
}

/** Actualiza barras «Tu carrito…» en menús según el store (incluye clon fijo). */
export function syncMenuCartBars(root: HTMLElement) {
  const { count, total } = cartTotals();
  const label =
    count === 0
      ? 'Tu carrito está vacío'
      : count === 1
        ? '1 producto en tu carrito'
        : `${count} productos en tu carrito`;
  const money = formatCOP(total);

  const scopes = [
    root,
    ...Array.from(
      root.querySelectorAll<HTMLElement>(
        '[data-proto-cart-clone], [data-proto-end-cart], [data-proto-sticky-cart]',
      ),
    ),
  ];

  const seen = new Set<Element>();
  for (const scope of scopes) {
    scope.querySelectorAll('span, div').forEach((el) => {
      if (seen.has(el) || el.children.length > 0) return;
      seen.add(el);
      const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      if (
        t === 'tu carrito está vacío' ||
        t === 'tu carrito esta vacio' ||
        /productos? en tu carrito/.test(t)
      ) {
        el.textContent = label;
      }
    });
  }

  root
    .querySelectorAll(
      '[data-proto-cart-clone], [data-proto-end-cart], [data-proto-sticky-cart]',
    )
    .forEach((bar) => {
      const spans = Array.from(bar.querySelectorAll('span'));
      for (const s of spans) {
        const t = (s.textContent || '').trim();
        if (/^\d+$/.test(t) && t.length <= 3) {
          s.textContent = String(count);
          break;
        }
      }
      for (const s of spans) {
        const t = (s.textContent || '').trim();
        if (/^\$\s*[\d.]+$/.test(t)) {
          s.textContent = money;
          break;
        }
      }
    });
}

/** Badge numérico del ícono carrito en Inicio (y similares). */
export function syncHeaderCartBadge(root: HTMLElement) {
  const { count } = cartTotals();
  const label = String(count);

  const byId = root.querySelector<HTMLElement>('[data-figma-id="679:1643"]');
  if (byId) {
    byId.textContent = label;
  }

  // Badge coral del header (círculo rojo con número)
  root.querySelectorAll<HTMLElement>('div').forEach((el) => {
    const bg = (el.style.background || '').toLowerCase();
    const isBadge =
      (bg.includes('#ed6047') || bg.includes('237, 96, 71')) &&
      (el.style.borderRadius.includes('9999') ||
        el.style.borderRadius.includes('50%') ||
        el.style.borderRadius === '9999px');
    if (!isBadge) return;
    const w = el.offsetWidth || Number.parseFloat(el.style.width) || 0;
    const h = el.offsetHeight || Number.parseFloat(el.style.height) || 0;
    if (w > 28 || h > 28 || (w > 0 && w < 12)) return;
    const span = el.querySelector('span');
    if (!span || span.childElementCount > 0) return;
    const t = (span.textContent || '').trim();
    if (t && !/^\d{1,3}$/.test(t)) return;
    span.textContent = label;
    el.style.display = count === 0 ? 'none' : '';
  });
}
