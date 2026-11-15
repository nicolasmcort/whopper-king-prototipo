import { useSyncExternalStore } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  getCart,
  getTableNumber,
  setTableNumber,
  subscribeCart,
  TABLE_COUNT,
} from '../cart/store';

const INK = '#29241f';
const MUTED = '#82776e';

function TableSelectControl() {
  const table = useSyncExternalStore(
    subscribeCart,
    getTableNumber,
    getTableNumber,
  );

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: MUTED,
          flexShrink: 0,
        }}
      >
        Mesa
      </span>
      <select
        value={table}
        onChange={(e) => setTableNumber(Number(e.target.value))}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Número de mesa"
        style={{
          flex: 1,
          height: 40,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontSize: 20,
          fontWeight: 800,
          color: INK,
          cursor: 'pointer',
          appearance: 'auto',
        }}
      >
        {Array.from({ length: TABLE_COUNT }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </label>
  );
}

function patchQrChrome(root: HTMLElement, table: number) {
  root.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    const t = (el.textContent || '').trim();
    if (/Está en la placa/i.test(t) || /\(1 a \d+\)/.test(t)) {
      el.textContent = `Está en la placa del centro de tu mesa (1 a ${TABLE_COUNT}).`;
    }
    if (/^Continuar con la mesa/i.test(t) || /^Continuar$/i.test(t)) {
      el.textContent = `Continuar con la mesa ${table}`;
    }
  });

  const cta = Array.from(root.querySelectorAll('span')).find((el) =>
    /^Continuar con la mesa/i.test((el.textContent || '').trim()),
  );
  if (cta) {
    const btn =
      (cta.closest('[data-figma-id="646:2402"]') as HTMLElement | null) ||
      cta.parentElement;
    if (btn) {
      btn.setAttribute('data-proto-action', 'continuar');
      btn.style.cursor = 'pointer';
    }
  }
}

const mountAttr = 'data-proto-table-select';

/** Sustituye el campo fijo «7» por un desplegable de mesas 1–16. */
export function mountTableSelect(root: HTMLElement): () => void {
  const field =
    (root.querySelector('[data-figma-id="646:2383"]') as HTMLElement | null) ||
    (Array.from(root.querySelectorAll('span'))
      .find((el) => (el.textContent || '').trim() === '7')
      ?.closest('[style*="borderRadius"]') as HTMLElement | null);

  if (!field) {
    patchQrChrome(root, getCart().tableNumber);
    return () => {};
  }

  if (field.getAttribute(mountAttr) === '1') return () => {};
  field.setAttribute(mountAttr, '1');

  Array.from(field.children).forEach((child) => {
    (child as HTMLElement).style.display = 'none';
  });

  const host = document.createElement('div');
  host.setAttribute(mountAttr, 'host');
  host.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;';
  field.appendChild(host);

  const reactRoot: Root = createRoot(host);
  const render = () => {
    reactRoot.render(<TableSelectControl />);
    patchQrChrome(root, getTableNumber());
  };
  render();
  const unsub = subscribeCart(render);

  const backWrap = root.querySelector(
    '[data-figma-id="646:2373"]',
  ) as HTMLElement | null;
  if (backWrap) {
    backWrap.setAttribute('data-proto-action', 'volver');
    backWrap.style.cursor = 'pointer';
  }

  return () => {
    unsub();
    reactRoot.unmount();
    host.remove();
    field.removeAttribute(mountAttr);
    Array.from(field.children).forEach((child) => {
      (child as HTMLElement).style.display = '';
    });
  };
}
