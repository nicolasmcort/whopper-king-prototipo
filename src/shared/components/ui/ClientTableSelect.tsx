import { useEffect, useState, useSyncExternalStore } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  getTableNumber,
  getTablePlateCode,
  hasTableAssigned,
  payScreenForCart,
  plateCodeForTable,
  setTableFromPlateCode,
  subscribeCart,
} from '@/features/cart/state/store';

const INK = '#29241f';
const MUTED = '#82776e';
const ERR = '#a50d0d';
const BRAND = '#ed6047';
const LINE = '#e8e2da';
const DEMO_CODE = plateCodeForTable(1);

function PlateCodePanel({
  onResolved,
  forcedError = '',
  seedCode = '',
}: {
  onResolved: (table: number) => void;
  forcedError?: string;
  seedCode?: string;
}) {
  const plate = useSyncExternalStore(
    subscribeCart,
    getTablePlateCode,
    getTablePlateCode,
  );
  const [code, setCode] = useState(seedCode || plate || '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (forcedError) setError(forcedError);
  }, [forcedError]);

  useEffect(() => {
    if (seedCode) setCode(seedCode);
  }, [seedCode]);

  const tryApply = (raw: string) => {
    const ok = setTableFromPlateCode(raw);
    if (!ok) {
      setError('Código no válido. Revisa el texto junto al QR.');
      return false;
    }
    setError('');
    setCode(getTablePlateCode());
    onResolved(getTableNumber());
    return true;
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: INK,
        }}
      >
        Código de la placa
      </span>
      <div
        style={{
          background: '#fff',
          boxShadow: `inset 0 0 0 1.5px ${error ? ERR : BRAND}`,
          borderRadius: 14,
          padding: '12px 14px',
          minHeight: 48,
          boxSizing: 'border-box',
        }}
      >
        <input
          className="proto-field"
          value={code}
          autoComplete="off"
          spellCheck={false}
          placeholder={`Ej. ${DEMO_CODE}`}
          aria-label="Código de la placa junto al QR"
          onChange={(e) => {
            const next = e.target.value.toUpperCase();
            setCode(next);
            setError('');
            if (setTableFromPlateCode(next)) {
              setError('');
              onResolved(getTableNumber());
            }
          }}
          onBlur={() => {
            if (code.trim()) tryApply(code);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              tryApply(code);
            }
          }}
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: "'Manrope', system-ui, sans-serif",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: INK,
            textTransform: 'uppercase',
            padding: 0,
            margin: 0,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 12,
          color: MUTED,
          lineHeight: 1.35,
        }}
      >
        Está impreso junto al QR. Prueba:{' '}
        <button
          type="button"
          onClick={() => {
            setCode(DEMO_CODE);
            tryApply(DEMO_CODE);
          }}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            margin: 0,
            font: 'inherit',
            fontWeight: 700,
            color: BRAND,
            textDecoration: 'underline',
            cursor: 'pointer',
            letterSpacing: '0.03em',
          }}
        >
          {DEMO_CODE}
        </button>
        {hasTableAssigned() ? ` · Mesa ${getTableNumber()}` : ''}
      </span>
      {error ? (
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: ERR,
          }}
        >
          {error}
        </span>
      ) : null}
    </div>
  );
}

function patchContinueLabel(root: HTMLElement, table: number) {
  const label =
    table >= 1 ? `Continuar con la mesa ${table}` : 'Continuar';
  root.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    const t = (el.textContent || '').trim();
    if (
      /^Continuar con la mesa/i.test(t) ||
      /^Continuar$/i.test(t)
    ) {
      el.textContent = label;
    }
  });
  const cta = Array.from(root.querySelectorAll('span')).find((el) => {
    const t = (el.textContent || '').trim();
    return /^Continuar con la mesa/i.test(t) || /^Continuar$/i.test(t);
  });
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

/** Marca de montaje (no bloquear navegación del CTA Continuar). */
const mountedAttr = 'data-proto-table-select-mounted';
/** Solo el panel del input evita que enhanceDom robe el clic. */
const panelAttr = 'data-proto-table-select';

/**
 * Móvil: el campo de código queda oculto tras un desplegable
 * «¿No pudiste escanear…?».
 */
export function mountTableSelect(
  root: HTMLElement,
  navigate?: (id: string) => void,
): () => void {
  const sheet = root.querySelector(
    '[data-figma-id="646:2378"]',
  ) as HTMLElement | null;
  const toggleRow = root.querySelector(
    '[data-figma-id="646:2396"]',
  ) as HTMLElement | null;
  const labelRow = root.querySelector(
    '[data-figma-id="646:2380"]',
  ) as HTMLElement | null;
  const field = root.querySelector(
    '[data-figma-id="646:2383"]',
  ) as HTMLElement | null;
  const hintRow = root.querySelector(
    '[data-figma-id="646:2391"]',
  ) as HTMLElement | null;
  const cta = root.querySelector(
    '[data-figma-id="646:2402"]',
  ) as HTMLElement | null;
  const help = root.querySelector(
    '[data-figma-id="646:2405"]',
  ) as HTMLElement | null;
  const helpText = root.querySelector(
    '[data-figma-id="646:2407"]',
  ) as HTMLElement | null;
  const homeBar = root.querySelector(
    '[data-figma-id="646:2394"]',
  ) as HTMLElement | null;

  if (!sheet || !field) {
    patchContinueLabel(root, hasTableAssigned() ? getTableNumber() : 0);
    return () => {};
  }

  if (sheet.getAttribute(mountedAttr) === '1') return () => {};
  sheet.setAttribute(mountedAttr, '1');

  // Anclar el sheet al borde inferior (al cambiar altura no queda hueco)
  sheet.style.top = 'auto';
  sheet.style.bottom = '0';

  // Ocultar UI fija de número/código; el panel React la sustituye
  [labelRow, field, hintRow].forEach((el) => {
    if (el) el.style.display = 'none';
  });

  // La barra home del export queda a top fijo y tapa «¿Necesitas ayuda?»
  if (homeBar) homeBar.style.display = 'none';

  // Color de ayuda = marca (no el rojo oscuro del export)
  if (helpText) {
    helpText.style.color = BRAND;
    helpText.style.fontWeight = '600';
  }

  // Toggle como chip/desplegable (texto + chevron)
  let chevronEl: HTMLSpanElement | null = null;
  if (toggleRow) {
    const inner = toggleRow.querySelector(
      '[data-figma-id="646:2397"]',
    ) as HTMLElement | null;
    if (inner) {
      inner.innerHTML = '';
      inner.style.cssText = [
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'gap:6px',
        'width:100%',
        'min-height:36px',
        'padding:8px 12px',
        'box-sizing:border-box',
        `border:1px solid ${LINE}`,
        'border-radius:999px',
        'background:#faf8f5',
      ].join(';');

      const label = document.createElement('span');
      label.textContent = '¿No pudiste escanear? Ingresa el código de la mesa';
      label.style.cssText = [
        "font-family:'Inter',system-ui,sans-serif",
        'font-size:12px',
        'font-weight:600',
        `color:${MUTED}`,
        'line-height:16px',
        'text-align:center',
        'flex:1 1 auto',
      ].join(';');

      chevronEl = document.createElement('span');
      chevronEl.setAttribute('aria-hidden', 'true');
      chevronEl.textContent = '▾';
      chevronEl.style.cssText = [
        "font-family:'Inter',system-ui,sans-serif",
        'font-size:14px',
        'font-weight:700',
        `color:${BRAND}`,
        'line-height:1',
        'flex:0 0 auto',
        'transition:transform 0.15s ease',
      ].join(';');

      inner.appendChild(label);
      inner.appendChild(chevronEl);
    }

    toggleRow.style.cssText = [
      'display:flex',
      'flex-direction:column',
      'position:absolute',
      'left:20px',
      'right:20px',
      'top:16px',
      'height:auto',
      'min-height:40px',
      'padding:0',
      'box-sizing:border-box',
      'cursor:pointer',
      'z-index:5',
    ].join(';');
    toggleRow.setAttribute('role', 'button');
    toggleRow.setAttribute('aria-expanded', 'false');
    toggleRow.setAttribute('tabindex', '0');
    toggleRow.setAttribute('data-proto-inert', '1');
  }

  const panelHost = document.createElement('div');
  panelHost.setAttribute(panelAttr, 'panel');
  panelHost.style.cssText = [
    'display:none',
    'position:absolute',
    'left:20px',
    'right:20px',
    'top:64px',
    'z-index:4',
  ].join(';');
  sheet.appendChild(panelHost);

  let open = false;
  let forcedError = '';
  let seedCode = '';
  const reactRoot: Root = createRoot(panelHost);

  const syncChevron = () => {
    if (!chevronEl) return;
    chevronEl.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
  };

  const layoutClosed = () => {
    if (cta) cta.style.top = '68px';
    if (help) {
      help.style.top = '132px';
      help.style.height = '36px';
      help.style.padding = '6px 0 0';
      help.style.zIndex = '3';
    }
    sheet.style.height = '180px';
  };

  const layoutOpen = () => {
    if (cta) cta.style.top = '200px';
    if (help) {
      help.style.top = '264px';
      help.style.height = '36px';
      help.style.padding = '6px 0 0';
      help.style.zIndex = '3';
    }
    sheet.style.height = '312px';
  };

  const currentTable = () => (hasTableAssigned() ? getTableNumber() : 0);

  const render = () => {
    if (open) {
      reactRoot.render(
        <PlateCodePanel
          forcedError={forcedError}
          seedCode={seedCode}
          onResolved={() => {
            forcedError = '';
            seedCode = '';
            patchContinueLabel(root, currentTable());
          }}
        />,
      );
    } else {
      reactRoot.render(null);
    }
    patchContinueLabel(root, currentTable());
  };

  const setOpen = (next: boolean) => {
    open = next;
    panelHost.style.display = open ? 'block' : 'none';
    toggleRow?.setAttribute('aria-expanded', open ? 'true' : 'false');
    syncChevron();
    if (open) layoutOpen();
    else layoutClosed();
    render();
  };

  layoutClosed();
  render();
  const unsub = subscribeCart(render);

  const onToggle = (e: Event) => {
    const t = e.target as HTMLElement | null;
    if (!t?.closest('[data-figma-id="646:2396"]')) return;
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };
  root.addEventListener('click', onToggle, true);

  const backWrap = root.querySelector(
    '[data-figma-id="646:2373"]',
  ) as HTMLElement | null;
  if (backWrap) {
    backWrap.setAttribute('data-proto-action', 'volver');
    backWrap.style.cursor = 'pointer';
  }

  if (cta) {
    cta.setAttribute('data-proto-action', 'continuar');
    cta.style.cursor = 'pointer';
  }

  const goPay = () => {
    navigate?.(payScreenForCart('nequi'));
  };

  const requireCode = () => {
    forcedError = 'Ingresa el código de la placa (prueba el ejemplo).';
    seedCode = '';
    setOpen(true);
    queueMicrotask(() => {
      panelHost.querySelector('input')?.focus();
    });
  };

  const onContinue = (e: Event) => {
    const t = e.target as HTMLElement | null;
    if (!t?.closest('[data-figma-id="646:2402"], [data-proto-action="continuar"]')) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();

    if (open) {
      const input = panelHost.querySelector('input');
      const raw = (input?.value || '').trim();
      if (raw) {
        if (!setTableFromPlateCode(raw)) {
          forcedError = 'Código no válido. Revisa el texto junto al QR.';
          render();
          input?.focus();
          return;
        }
        forcedError = '';
        patchContinueLabel(root, currentTable());
        goPay();
        return;
      }
    }

    if (!hasTableAssigned()) {
      requireCode();
      return;
    }

    goPay();
  };
  root.addEventListener('click', onContinue, true);

  return () => {
    root.removeEventListener('click', onToggle, true);
    root.removeEventListener('click', onContinue, true);
    unsub();
    reactRoot.unmount();
    panelHost.remove();
    sheet.removeAttribute(mountedAttr);
    [labelRow, field, hintRow].forEach((el) => {
      if (el) el.style.display = '';
    });
  };
}
