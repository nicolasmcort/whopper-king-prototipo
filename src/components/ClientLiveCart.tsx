import { useSyncExternalStore, type CSSProperties } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  cartTotals,
  decItem,
  formatCOP,
  getCart,
  incItem,
  subscribeCart,
  type CartItem,
} from '../cart/store';

const CORAL = '#ed6047';
const INK = '#29241f';
const MUTED = '#82776e';
const PILL_BG = '#f7ebe7';

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

function LiveCartBody({ onAddMore }: { onAddMore: () => void }) {
  const cart = useSyncExternalStore(subscribeCart, getCart, getCart);
  const { count } = cartTotals(cart.items);

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
    </div>
  );
}

function patchCartFooter(root: HTMLElement) {
  const { count, total } = cartTotals();
  const money = formatCOP(total);
  const countLabel =
    count === 0 ? 'Subtotal (0 productos)' : count === 1 ? 'Subtotal (1 producto)' : `Subtotal (${count} productos)`;

  root.querySelectorAll('span, div, p, button').forEach((el) => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (!t) return;

    // Solo nodos hoja (sin hijos elemento) para no romper contenedores
    if (el.children.length > 0 && el.tagName !== 'BUTTON') return;

    if (/^Subtotal\s*\(/i.test(t)) {
      el.textContent = countLabel;
      return;
    }
    if (/^Total a pagar$/i.test(t)) return;
    if (/^Continuar al pago$/i.test(t)) return;

    // Totales monetarios del footer (no precios unitarios de filas estáticas ya ocultas)
    const parentText = (el.parentElement?.textContent || '').replace(/\s+/g, ' ');
    if (
      /^\$\s*[\d.]+$/.test(t) &&
      (/Total a pagar/i.test(parentText) ||
        /Continuar al pago/i.test(parentText) ||
        /Subtotal/i.test(parentText))
    ) {
      el.textContent = money;
    }
  });

  // CTA compuesto: "Continuar al pago" + precio en spans hermanos
  root.querySelectorAll('span').forEach((el) => {
    const t = (el.textContent || '').trim();
    if (t === 'Continuar al pago' || t === 'Continuar a pago') {
      let node: HTMLElement | null = el.parentElement;
      for (let i = 0; i < 5 && node; i++) {
        const moneySpan = Array.from(node.querySelectorAll('span')).find((s) =>
          /^\$\s*[\d.]+$/.test((s.textContent || '').trim()),
        );
        if (moneySpan) {
          moneySpan.textContent = money;
          break;
        }
        node = node.parentElement;
      }
    }
  });
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

  // Contenedor de la sección (header + filas + añadir)
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

  // Ocultar contenido Figma y montar React encima
  const host = document.createElement('div');
  host.setAttribute(mountAttr, 'host');
  host.style.cssText = 'width:100%;position:relative;';

  Array.from(section.children).forEach((child) => {
    (child as HTMLElement).style.display = 'none';
  });
  section.appendChild(host);

  const reactRoot: Root = createRoot(host);
  const render = () => {
    reactRoot.render(
      <LiveCartBody
        onAddMore={() => {
          navigate('menu');
        }}
      />,
    );
    patchCartFooter(root);
  };

  render();
  const unsub = subscribeCart(() => {
    render();
  });

  return () => {
    unsub();
    reactRoot.unmount();
    host.remove();
    section.removeAttribute(mountAttr);
    Array.from(section.children).forEach((child) => {
      (child as HTMLElement).style.display = '';
    });
  };
}

/** Actualiza barras «Tu carrito…» en menús según el store. */
export function syncMenuCartBars(root: HTMLElement) {
  const { count, total } = cartTotals();
  const label =
    count === 0
      ? 'Tu carrito está vacío'
      : count === 1
        ? '1 producto en tu carrito'
        : `${count} productos en tu carrito`;
  const money = formatCOP(total);

  root.querySelectorAll('span, div').forEach((el) => {
    if (el.children.length > 0) return;
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (t === 'tu carrito está vacío' || t === 'tu carrito esta vacio' || /productos en tu carrito/.test(t)) {
      el.textContent = label;
    }
  });

  // Badge de cantidad a la izquierda de la barra
  root.querySelectorAll('[data-proto-end-cart], [data-proto-sticky-cart]').forEach((bar) => {
    const spans = Array.from(bar.querySelectorAll('span'));
    for (const s of spans) {
      const t = (s.textContent || '').trim();
      if (/^\d+$/.test(t) && t.length <= 2) {
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
