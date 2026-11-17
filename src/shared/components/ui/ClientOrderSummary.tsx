import { createRoot, type Root } from 'react-dom/client';
import {
  formatCOP,
  getOrderForSummary,
  getTableNumber,
  subscribeCart,
  type OrderSnapshot,
} from '@/features/cart/state/store';

const INK = '#29241f';
const MUTED = '#82776e';
const BORDER = '#ebe4dc';

function OrderSummaryView({ order }: { order: OrderSnapshot }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        width: '100%',
      }}
    >
      <span
        style={{
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 16,
          lineHeight: '24px',
          color: INK,
        }}
      >
        Resumen
      </span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
        {order.items.length === 0 ? (
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 13,
              color: MUTED,
            }}
          >
            Sin productos
          </span>
        ) : (
          order.items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                width: '100%',
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: INK,
                  lineHeight: '20px',
                  minWidth: 0,
                }}
              >
                {item.qty} × {item.name} · {item.variant}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: INK,
                  lineHeight: '20px',
                  flexShrink: 0,
                }}
              >
                {formatCOP(item.unitPrice * item.qty)}
              </span>
            </div>
          ))
        )}

        {order.delivery > 0 ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 13.5,
                fontWeight: 500,
                color: INK,
                lineHeight: '20px',
              }}
            >
              Domicilio
            </span>
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 13.5,
                fontWeight: 600,
                color: INK,
                lineHeight: '20px',
              }}
            >
              {formatCOP(order.delivery)}
            </span>
          </div>
        ) : null}

        <div
          style={{
            borderTop: `1px solid ${BORDER}`,
            marginTop: 2,
            paddingTop: 10,
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 18,
              lineHeight: '28px',
              color: INK,
            }}
          >
            Total
          </span>
          <span
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 24,
              lineHeight: '32.784px',
              letterSpacing: '-0.6px',
              color: INK,
            }}
          >
            {formatCOP(order.total)}
          </span>
        </div>
      </div>
    </div>
  );
}

const mountAttr = 'data-proto-order-summary';

/** Sustituye el bloque estático «Resumen» por el pedido real del carrito. */
export function mountOrderSummary(root: HTMLElement): () => void {
  const title = Array.from(root.querySelectorAll('span')).find(
    (el) => (el.textContent || '').trim() === 'Resumen',
  );
  if (!title) return () => {};

  // Contenedor de la tarjeta Resumen (título + filas + total)
  let card: HTMLElement | null = title.parentElement;
  for (let i = 0; i < 6 && card; i++) {
    const text = card.textContent || '';
    if (/Resumen/i.test(text) && /Total/i.test(text) && /\$/.test(text)) break;
    card = card.parentElement;
  }
  if (!card) return () => {};

  if (card.getAttribute(mountAttr) === '1') return () => {};
  card.setAttribute(mountAttr, '1');
  card.style.height = 'auto';
  card.style.minHeight = '0';
  card.style.overflow = 'visible';

  const host = document.createElement('div');
  host.setAttribute(mountAttr, 'host');
  host.style.cssText = 'width:100%;position:relative;';

  Array.from(card.children).forEach((child) => {
    (child as HTMLElement).style.display = 'none';
  });
  card.appendChild(host);

  const patchMesaLabels = () => {
    const table = getTableNumber();
    const localLabel =
      table >= 1 ? `Mesa ${table} · Pedido en el local` : 'Pedido en el local';
    root.querySelectorAll('span').forEach((el) => {
      if (el.children.length > 0) return;
      const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (/^Mesa\s+\d+\s*·\s*Pedido en el local$/i.test(t) || t === 'Pedido en el local') {
        el.textContent = localLabel;
      }
      if (table >= 1 && (/Te lo llevamos\s*a la Mesa/i.test(t) || /a la Mesa\s+\d+/i.test(t))) {
        el.textContent = t.replace(/Mesa\s+\d+/i, `Mesa ${table}`);
      }
    });
  };

  const reactRoot: Root = createRoot(host);
  const render = () => {
    reactRoot.render(<OrderSummaryView order={getOrderForSummary()} />);
    patchMesaLabels();
  };
  render();
  const unsub = subscribeCart(render);

  return () => {
    unsub();
    reactRoot.unmount();
    host.remove();
    card.removeAttribute(mountAttr);
    Array.from(card.children).forEach((child) => {
      (child as HTMLElement).style.display = '';
    });
  };
}
