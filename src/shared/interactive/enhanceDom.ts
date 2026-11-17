import {
  addProductFromScreen,
  commitOrder,
  getCart,
  payScreenForCart,
  PRODUCT_BY_SCREEN,
  subscribeCart,
} from '@/features/cart/state/store';
import {
  mountLiveCart,
  syncHeaderCartBadge,
  syncMenuCartBars,
} from '@/shared/components/ui/ClientLiveCart';
import { mountOrderSummary } from '@/shared/components/ui/ClientOrderSummary';
import { mountPaymentHeader } from '@/shared/components/ui/ClientPaymentHeader';
import { mountTableSelect } from '@/shared/components/ui/ClientTableSelect';
import {
  isButtonish,
  isEditableLabel,
  normalizeLabel,
  resolveFigmaNav,
  resolveNav,
  STATS_METRIC_LABELS,
  type NavTarget,
} from './navMap';

const MARK = 'data-proto';

function leafText(el: Element): string {
  const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
  // Prefer direct text if short
  if (t.length > 0 && t.length <= 80) return t;
  return '';
}

/** Textos cortos propios del nodo (sin concatenar todo el árbol). */
function ownShortLabels(el: Element): string[] {
  const out: string[] = [];
  for (const node of Array.from(el.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = (node.textContent || '').replace(/\s+/g, ' ').trim();
      if (t && t.length <= 40) out.push(t);
    }
  }
  for (const child of Array.from(el.children)) {
    const tag = child.tagName;
    if (tag === 'SPAN' || tag === 'P' || tag === 'LABEL' || tag === 'A' || tag === 'BUTTON') {
      const t = leafText(child);
      if (t && t.length <= 40) out.push(t);
    }
    // Título anidado un nivel (p. ej. span dentro de div de fila)
    if (tag === 'DIV') {
      for (const nested of Array.from(child.children)) {
        if (nested.tagName === 'SPAN' || nested.tagName === 'P') {
          const t = leafText(nested);
          if (t && t.length <= 40) out.push(t);
        }
      }
    }
  }
  return out;
}

/** Botones solo-ícono (sin texto): data-proto-action / data-figma-id antes que label. */
function resolveFromClick(
  target: HTMLElement,
  root: HTMLElement,
  screenId: string,
): NavTarget | null {
  // Zona muerta / inerte / status: no navegar (sí pueden recibir foco)
  if (target.closest('[data-proto-dead], [data-proto-inert], [data-proto-status-bar]')) {
    return null;
  }

  let el: Element | null = target;
  while (el && el !== root) {
    if (el.getAttribute('data-proto-dead') === '1') return null;
    if (el.getAttribute('data-proto-inert') === '1') return null;
    const action = el.getAttribute('data-proto-action');
    // Flecha atrás: destino del navMap si existe (p. ej. login→inicio, registro→login);
    // si no, historial.
    if (action === 'volver' || action === 'atras') {
      const mapped = resolveNav(screenId, action);
      return mapped || '__back__';
    }
    if (action) {
      const byAction = resolveNav(screenId, action);
      if (byAction) return byAction;
    }
    const figmaId = el.getAttribute('data-figma-id');
    if (figmaId) {
      const byId = resolveFigmaNav(screenId, figmaId);
      if (byId) return byId;
    }
    el = el.parentElement;
  }

  // Solo resolver por texto si el clic fue sobre un control marcado como interactivo.
  // Evita que un fondo vacío “herede” el label «Whopper King» del logo/tarjeta.
  const pressable = target.closest(
    `[${MARK}="btn"], .proto-pressable`,
  ) as HTMLElement | null;
  if (!pressable || pressable === root) return null;
  if (pressable.closest('[data-proto-dead], [data-proto-inert], [data-proto-status-bar]')) {
    return null;
  }

  const categoryTabs = new Set([
    'hamburguesas',
    'los favoritos',
    'favoritos',
    'whoppers',
  ]);
  const labels = ownShortLabels(pressable);
  let fallback: NavTarget | null = null;
  for (const label of labels) {
    const dest = resolveNav(screenId, label);
    if (!dest) continue;
    if (categoryTabs.has(normalizeLabel(label))) {
      fallback ??= dest;
      continue;
    }
    return dest;
  }
  if (fallback) return fallback;
  const t = leafText(pressable);
  if (t) {
    const dest = resolveNav(screenId, t);
    if (dest) return dest;
  }
  return null;
}

function isQtyStepperToken(text: string): boolean {
  const t = text.replace(/\s+/g, ' ').trim();
  return t === '+' || t === '-' || t === '−' || /^\d{1,3}$/.test(t);
}

function makeEditable(el: HTMLElement, opts?: { password?: boolean; multiline?: boolean }) {
  if (el.getAttribute(MARK) === 'input' || el.getAttribute(MARK) === 'field') return;
  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
  if (el.closest('[data-proto-status-bar], [data-proto-qty]')) return;
  const rawText = (el.textContent || '').trim();
  // Nunca convertir el stepper − / 1 / + en campos de texto
  if (isQtyStepperToken(rawText)) return;

  const text = rawText;
  const asPassword = opts?.password || /^\*+$/.test(text);
  const asMultiline = opts?.multiline || text.includes('\n') || text.length > 55;
  const input = document.createElement(asMultiline ? 'textarea' : 'input');
  if (!asMultiline) {
    (input as HTMLInputElement).type = asPassword ? 'password' : 'text';
  }
  input.value = asPassword ? '' : text.replace(/\n/g, ' ');
  input.className = 'proto-field';
  input.setAttribute(MARK, 'input');
  input.setAttribute('placeholder', asPassword ? '••••••••' : text.replace(/\n/g, ' '));
  if (asMultiline) {
    (input as HTMLTextAreaElement).rows = 3;
  }
  input.style.cssText = [
    'display:block',
    'width:100%',
    'min-width:0',
    'max-width:100%',
    'height:auto',
    asMultiline ? 'min-height:3.5em' : 'min-height:1.25em',
    'border:none',
    'outline:none',
    'background:transparent',
    'font:inherit',
    'font-size:inherit',
    'font-weight:inherit',
    'line-height:inherit',
    'letter-spacing:inherit',
    'color:inherit',
    'text-align:inherit',
    'padding:0',
    'margin:0',
    'box-sizing:border-box',
    'overflow:hidden',
    'text-overflow:ellipsis',
    'resize:none',
  ].join(';');

  // Keep layout: replace text content
  el.textContent = '';
  el.style.minWidth = '0';
  if (!el.closest('[data-proto-qty]')) {
    el.style.flex = el.style.flex || '1 1 0%';
  }
  el.appendChild(input);
  el.style.cursor = 'text';
  el.setAttribute(MARK, 'field');
  el.addEventListener('click', (e) => e.stopPropagation());
}

const ACTION_ARIA: Record<string, string> = {
  volver: 'Volver',
  atras: 'Volver',
  carrito: 'Carrito',
  agregar: 'Agregar al pedido',
  whopper: 'Whopper',
  'toggle-admin': 'Modo administrador',
  whoppers: 'Whoppers',
  bebidas: 'Bebidas',
  'almuerzos y menus': 'Almuerzos y menús',
  'pollo carne y pescado': 'Pollo, Carne y Pescado',
  inicio: 'Inicio',
  buscar: 'Buscar',
  'mi cuenta': 'Mi cuenta',
};

const FIGMA_ARIA: Record<string, string> = {
  '679:1635': 'Carrito',
  '679:1637': 'Carrito',
  '679:1638': 'Carrito',
  '679:1642': 'Carrito',
  '679:1643': 'Carrito',
  '818:3495': 'Carrito',
  '818:3496': 'Carrito',
  '342:1130': 'Notificaciones',
  '342:1131': 'Notificaciones',
};

function readableAction(action: string): string {
  const n = normalizeLabel(action);
  if (ACTION_ARIA[n]) return ACTION_ARIA[n];
  if (!action) return '';
  return action.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Nombre accesible para iconos / botones sin texto legible. */
function inferAccessibleName(el: HTMLElement): string {
  const existing = (el.getAttribute('aria-label') || '').trim();
  if (existing && !/^\d{1,3}$/.test(existing)) return existing;

  const action = el.getAttribute('data-proto-action');
  if (action) {
    const fromAction = readableAction(action);
    if (fromAction) return fromAction;
  }

  const selfId = el.getAttribute('data-figma-id');
  if (selfId && FIGMA_ARIA[selfId]) return FIGMA_ARIA[selfId];
  for (const [id, label] of Object.entries(FIGMA_ARIA)) {
    if (el.querySelector(`[data-figma-id="${id}"]`)) return label;
  }

  const labels = ownShortLabels(el).filter((t) => t && !/^\d{1,3}$/.test(t));
  if (labels.length) return labels.slice(0, 3).join(' ');

  const full = (el.textContent || '').replace(/\s+/g, ' ').trim();
  if (full && full.length <= 60 && !/^\d{1,3}$/.test(full)) return full;

  if (el.getAttribute('data-proto-inert') === '1') {
    if (el.getAttribute('data-figma-id') === '585:2376') return 'Mostrar contraseña';
    if (el.querySelector('svg') && /eye|ojo/i.test(el.innerHTML)) return 'Mostrar contraseña';
    return 'Información';
  }
  if (el.querySelector('svg')) return 'Botón';
  return 'Botón';
}

function ensureAccessibleName(el: HTMLElement) {
  const name = inferAccessibleName(el);
  if (name) el.setAttribute('aria-label', name);
}

function unmarkPressable(el: HTMLElement) {
  el.classList.remove('proto-pressable');
  if (el.getAttribute(MARK) === 'btn') el.removeAttribute(MARK);
  el.removeAttribute('tabindex');
  el.removeAttribute('role');
  // El hit real queda en el ancestro; hijos no deben anunciar botón
  if (!el.getAttribute('aria-label') || el.getAttribute('aria-label') === 'Botón') {
    el.removeAttribute('aria-label');
  }
}

/**
 * Lighthouse: un solo control interactivo por widget.
 * Quita role/tabindex de .proto-pressable anidados (deja el más externo).
 */
function flattenNestedPressables(root: HTMLElement) {
  const nodes = Array.from(
    root.querySelectorAll<HTMLElement>('.proto-pressable, [data-proto="btn"]'),
  );
  for (const el of nodes) {
    const parentBtn = el.parentElement?.closest(
      '.proto-pressable, [data-proto="btn"]',
    ) as HTMLElement | null;
    if (parentBtn && parentBtn !== el) {
      unmarkPressable(el);
    }
  }
  root.querySelectorAll<HTMLElement>('.proto-pressable, [data-proto="btn"]').forEach((el) => {
    ensureAccessibleName(el);
  });
}

function markPressable(el: HTMLElement) {
  if (el.getAttribute(MARK) === 'input' || el.getAttribute(MARK) === 'field') return;
  if (el.closest('[data-proto-status-bar]')) return;
  el.classList.add('proto-pressable');
  el.style.cursor = 'pointer';
  el.setAttribute(MARK, 'btn');
  el.tabIndex = 0;
  el.setAttribute('role', 'button');
  ensureAccessibleName(el);
}

/** Control visualmente interactivo sin navegación (campana, redes, etc.). */
function markInertPressable(el: HTMLElement | null) {
  if (!el) return;
  el.removeAttribute('data-proto-dead');
  el.setAttribute('data-proto-inert', '1');
  markPressable(el);
}

/** Contenedores con aspecto de input (borde inset / alto ~44). */
function looksLikeInputShell(el: HTMLElement): boolean {
  if (el.getAttribute('data-proto-qty') === '1' || el.closest('[data-proto-qty]')) {
    return false;
  }
  const h = el.offsetHeight || Number.parseFloat(el.style.height) || 0;
  if (h > 0 && (h < 34 || h > 72)) return false;
  const shadow = el.style.boxShadow || '';
  const bg = (el.style.background || el.style.backgroundColor || '').toLowerCase();
  const inset = shadow.includes('inset');
  const whiteish =
    bg.includes('#fff') ||
    bg.includes('ffffff') ||
    bg.includes('rgb(255') ||
    bg.includes('#fffcf8');
  // Stepper − 1 +: no es un campo de texto
  const txt = (el.textContent || '').replace(/\s+/g, ' ').trim();
  if (/^[+−\-]\s*\d+\s*[+]$/.test(txt) || /^[−\-]\s*\d+\s*\+$/.test(txt)) {
    return false;
  }
  return inset || (whiteish && shadow.length > 0 && h >= 34 && h <= 56);
}

/** Fuerza el stepper − 1 + a layout compacto y elimina inputs colados. */
function findQtyParts(box: HTMLElement): {
  minus: HTMLElement | null;
  value: HTMLElement | null;
  plus: HTMLElement | null;
} {
  let minus: HTMLElement | null = null;
  let value: HTMLElement | null = null;
  let plus: HTMLElement | null = null;

  const consider = (el: HTMLElement) => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if ((t === '−' || t === '-') && !minus) {
      minus = el;
      return;
    }
    if (t === '+' && !plus) {
      plus = el;
      return;
    }
    if (/^\d{1,3}$/.test(t) && !value) {
      value = el;
    }
  };

  // Preferir hijos directos (botones − / 1 / +)
  Array.from(box.children).forEach((child) => {
    if (child instanceof HTMLElement) consider(child);
  });
  if (!minus || !plus || !value) {
    box.querySelectorAll('span, div').forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      if (node === box) return;
      consider(node);
    });
  }
  return { minus, value, plus };
}

function lockQtySteppers(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-proto-qty]').forEach((box) => {
    if (box.getAttribute('data-proto-qty-ready') === '1') return;

    box.querySelectorAll('input, textarea').forEach((node) => {
      const parent = node.parentElement;
      const ph =
        (node as HTMLInputElement).placeholder ||
        (node as HTMLInputElement).value ||
        '';
      node.remove();
      if (parent && !(parent.textContent || '').trim() && ph) {
        parent.textContent = ph;
      }
      if (parent) {
        parent.removeAttribute(MARK);
        parent.style.flex = '';
        parent.style.cursor = '';
        parent.style.minWidth = '';
      }
    });

    box.style.cssText += [
      ';flex:0 0 96px',
      ';width:96px',
      ';min-width:96px',
      ';max-width:96px',
      ';height:36px',
      ';display:flex',
      ';flex-direction:row',
      ';align-items:center',
      ';justify-content:space-between',
      ';box-sizing:border-box',
      ';overflow:hidden',
      ';padding:0 10px',
      ';gap:0',
      ';position:absolute',
      ';right:0',
      ';top:50%',
      ';transform:translateY(-50%)',
      ';z-index:2',
    ].join('');

    Array.from(box.children).forEach((child) => {
      if (!(child instanceof HTMLElement)) return;
      child.style.flex = '0 0 auto';
      child.style.width = 'auto';
      child.style.minWidth = '0';
      child.style.maxWidth = '28px';
    });

    const row = box.parentElement;
    if (row) {
      row.setAttribute('data-proto-qty-row', '1');
      row.style.position = row.style.position || 'relative';
      row.style.width = '100%';
      row.style.maxWidth = '100%';
      row.style.minWidth = '0';
      row.style.overflow = 'hidden';
      row.style.boxSizing = 'border-box';
      Array.from(row.children).forEach((child) => {
        if (!(child instanceof HTMLElement) || child === box) return;
        child.setAttribute('data-proto-qty-label', '1');
        child.style.flex = '1 1 auto';
        child.style.minWidth = '0';
        child.style.maxWidth = 'calc(100% - 108px)';
        child.style.overflow = 'hidden';
        child.style.paddingRight = '8px';
      });
    }

    const { minus, value, plus } = findQtyParts(box);
    if (!minus || !value || !plus) {
      markInertPressable(box);
      box.setAttribute('data-proto-qty-ready', '1');
      return;
    }

    // Hit area: el contenedor del signo (hijo directo) si existe
    const minusHit =
      (minus.closest('[data-proto-qty] > *') as HTMLElement | null) || minus;
    const plusHit =
      (plus.closest('[data-proto-qty] > *') as HTMLElement | null) || plus;
    const valueEl =
      (value.closest('[data-proto-qty] > *') as HTMLElement | null)?.querySelector(
        'span',
      ) || value;

    const readQty = () => {
      const n = Number.parseInt((valueEl.textContent || '1').trim(), 10);
      return Number.isFinite(n) && n > 0 ? n : 1;
    };
    const writeQty = (n: number) => {
      const next = Math.max(1, Math.min(99, n));
      valueEl.textContent = String(next);
    };

    const onMinus = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      writeQty(readQty() - 1);
    };
    const onPlus = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      writeQty(readQty() + 1);
    };

    markInertPressable(minusHit);
    markInertPressable(plusHit);
    minusHit.setAttribute('data-proto-qty-btn', 'minus');
    plusHit.setAttribute('data-proto-qty-btn', 'plus');
    minusHit.setAttribute('aria-label', 'Quitar uno');
    plusHit.setAttribute('aria-label', 'Agregar uno');
    minusHit.addEventListener('click', onMinus, true);
    plusHit.addEventListener('click', onPlus, true);
    minusHit.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onMinus(e);
      }
    });
    plusHit.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onPlus(e);
      }
    });

    // La caja y el número no navegan
    box.setAttribute('data-proto-inert', '1');
    box.removeAttribute('tabindex');
    box.classList.remove('proto-pressable');
    box.style.cursor = 'default';
    box.setAttribute('data-proto-qty-ready', '1');
  });
}

/** Chip píldora de métrica (no la etiqueta «Ventas netas» dentro de una tarjeta). */
function looksLikeMetricChipShell(el: HTMLElement): boolean {
  const br = el.style.borderRadius || '';
  if (br === '90px' || br === '90') return true;
  const shadow = el.style.boxShadow || '';
  return (
    shadow.includes('inset') &&
    (shadow.includes('#2457c5') || shadow.includes('#93afeb') || shadow.includes('36, 87, 197'))
  );
}

/**
 * Estadísticas (móvil): chips «Und vendidas / Ventas netas / Utilidades»
 * son pestañas fijas (nunca campos de texto).
 */
function mountStatsMetricTabs(root: HTMLElement) {
  const hasPlatosChip = !!root.querySelector(
    '[data-figma-id="738:9004"], [data-figma-id="738:9004~2"]',
  );

  const labelForId = (id: string): string => {
    const base = id.replace(/~.*/, '');
    if (base === '738:9000') return hasPlatosChip ? 'Und vendidas' : 'Ventas';
    if (base === '738:9002') return hasPlatosChip ? 'Ventas netas' : 'Utilidades brutas';
    if (base === '738:9004') return 'Utilidades';
    return 'Utilidades';
  };

  const shellNodes = Array.from(
    root.querySelectorAll<HTMLElement>(
      '[data-figma-id="738:9000"], [data-figma-id="738:9002"], [data-figma-id="738:9004"], [data-figma-id="738:9000~2"], [data-figma-id="738:9002~2"], [data-figma-id="738:9004~2"]',
    ),
  );

  const shells =
    shellNodes.length > 0
      ? shellNodes
      : Array.from(root.querySelectorAll<HTMLElement>('div')).filter((el) => {
          if (!looksLikeMetricChipShell(el)) return false;
          const t = normalizeLabel((el.textContent || '').replace(/\s+/g, ' ').trim());
          return STATS_METRIC_LABELS.has(t);
        });

  if (shells.length === 0) return;

  const applySelected = (active: HTMLElement) => {
    shells.forEach((shell) => {
      const on = shell === active;
      shell.style.background = on ? '#eff1f5' : '#ffffff';
      shell.style.boxShadow = on
        ? 'inset 0 0 0 1px #2457c5'
        : 'inset 0 0 0 1px #93afeb';
      const labelEl =
        shell.querySelector<HTMLElement>('span') ||
        (shell.firstElementChild instanceof HTMLElement ? shell.firstElementChild : null);
      if (labelEl) {
        labelEl.style.color = on ? '#2457c5' : '#111827';
        labelEl.style.fontWeight = on ? '800' : '600';
      }
      shell.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  };

  shells.forEach((shell) => {
    const id = shell.getAttribute('data-figma-id') || '';
    const known = labelForId(id);

    // Quitar <input> si un pase anterior los convirtió en campos
    const input = shell.querySelector<HTMLInputElement | HTMLTextAreaElement>(
      'input, textarea',
    );
    if (input) {
      const host =
        (input.closest(`[${MARK}="field"]`) as HTMLElement | null) ||
        (input.parentElement as HTMLElement | null);
      const fromPh = (input.getAttribute('placeholder') || '').trim();
      const restore =
        fromPh && STATS_METRIC_LABELS.has(normalizeLabel(fromPh)) ? fromPh : known;
      if (host) {
        host.textContent = restore;
        host.removeAttribute(MARK);
        host.style.cursor = '';
      } else {
        input.replaceWith(document.createTextNode(restore));
      }
    }

    let span = shell.querySelector<HTMLElement>('span');
    if (!span) {
      span = document.createElement('span');
      span.textContent = known;
      shell.appendChild(span);
    } else {
      const t = (span.textContent || '').trim();
      if (!STATS_METRIC_LABELS.has(normalizeLabel(t))) {
        span.textContent = known;
      }
    }

    shell.setAttribute('data-proto-metric-tab', '1');
    shell.setAttribute('role', 'button');
    shell.tabIndex = 0;
    shell.style.cursor = 'pointer';
    markPressable(shell);
    shell.setAttribute('data-proto-inert', '1');
    shell.removeAttribute('data-proto-action');

    shell.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      applySelected(shell);
    };
  });

  applySelected(shells[0]);
}

/** Convierte placeholders dentro de shells de input en <input> reales. */
function enhanceFormFields(root: HTMLElement, screenId: string) {
  root.querySelectorAll<HTMLElement>('div').forEach((shell) => {
    if (!looksLikeInputShell(shell)) return;
    if (shell.closest('[data-proto-status-bar], [data-proto-qty]')) return;
    if (shell.getAttribute('data-proto-qty') === '1') return;
    // Shell que ya es un stepper (− 1 +)
    const shellTxt = (shell.textContent || '').replace(/\s+/g, ' ').trim();
    if (/^[−+\-]\s*\d+\s*[−+]$/.test(shellTxt) || /^[−\-]\s*\d+\s*\+$/.test(shellTxt)) {
      return;
    }
    if (shell.querySelector(`input, textarea, [${MARK}="input"]`)) return;

    const spans = Array.from(shell.querySelectorAll('span')).filter((s) => {
      if (!(s instanceof HTMLElement)) return false;
      if (s.childElementCount > 0) return false;
      if (s.closest(`[${MARK}="field"], [${MARK}="input"], [data-proto-qty]`)) return false;
      const t = (s.textContent || '').trim();
      return !!t && t.length <= 120;
    }) as HTMLElement[];

    for (const span of spans) {
      const t = (span.textContent || '').trim();
      // Nunca convertir el stepper − / 1 / + en inputs
      if (isQtyStepperToken(t)) continue;
      if (isButtonish(t)) continue;
      if (resolveNav(screenId, t)) continue;
      // Chips de métrica en Estadísticas: tabs, no inputs
      if (STATS_METRIC_LABELS.has(normalizeLabel(t))) continue;
      if (shell.getAttribute('data-proto-metric-tab') === '1') continue;
      if (looksLikeMetricChipShell(shell)) continue;
      // Dentro de un shell de input, el valor/placeholder es editable
      makeEditable(span, {
        password: /^\*+$/.test(t),
        multiline: t.length > 55 || /ind[ií]canos|detalle/i.test(t),
      });
    }
  });

  // OTP / cajas «X» sueltas
  root.querySelectorAll('span').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.getAttribute(MARK) === 'field' || el.querySelector('input')) return;
    if (el.closest('[data-proto-qty]')) return;
    const t = (el.textContent || '').trim();
    if (t !== 'X' && t !== 'x') return;
    const box = el.parentElement as HTMLElement | null;
    if (!box) return;
    const w = box.offsetWidth || Number.parseFloat(box.style.width) || 0;
    const h = box.offsetHeight || Number.parseFloat(box.style.height) || 0;
    if ((w > 0 && w < 28) || (w > 0 && w > 48)) return;
    if ((h > 0 && h < 28) || (h > 0 && h > 56)) return;
    makeEditable(el);
  });
}

/** Encuentra la barra Inicio / Buscar / Carrito / Mi cuenta. */
function findClientTabBar(root: HTMLElement): HTMLElement | null {
  const byId = root.querySelector<HTMLElement>(
    '[data-proto-scroll] [data-figma-id="505:1853"], [data-proto-scroll] [data-figma-id="342:2208"], [data-proto-scroll] [data-figma-id="823:3706"], [data-proto-scroll] [data-figma-id="822:3630"], [data-proto-scroll] [data-proto-fixed-tabbar]:not([data-proto-tabbar-clone])',
  );
  if (byId) return byId;

  const candidates = Array.from(
    root.querySelectorAll<HTMLElement>('[data-proto-scroll] div'),
  ).filter((el) => {
    if (el.closest('[data-proto-tabbar-clone]')) return false;
    const raw = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (!/\bInicio\b/.test(raw) || !/Mi cuenta/i.test(raw)) return false;
    if (!/\b(Buscar|Carrito)\b/i.test(raw)) return false;
    if (raw.length > 80) return false;
    const h = el.offsetHeight || Number.parseFloat(el.style.height) || 0;
    const w = el.offsetWidth || Number.parseFloat(el.style.width) || 0;
    return (h === 0 || (h >= 55 && h <= 120)) && (w === 0 || w >= 280);
  });

  if (candidates.length === 0) return null;

  candidates.sort((a, b) => {
    const score = (el: HTMLElement) =>
      (el.offsetHeight || 70) + (el.children.length >= 3 ? 40 : 0);
    return score(b) - score(a);
  });

  let tab = candidates[0];
  const parent = tab.parentElement;
  if (
    parent &&
    parent !== root &&
    !parent.hasAttribute('data-proto-scroll') &&
    (parent.offsetHeight === 0 || (parent.offsetHeight >= 70 && parent.offsetHeight <= 120)) &&
    /Inicio/i.test(parent.textContent || '') &&
    /Mi cuenta/i.test(parent.textContent || '')
  ) {
    tab = parent;
  }
  return tab;
}

/** Localiza la barra naranja «Tu carrito…» de menús de categoría. */
function findCategoryCartBar(root: HTMLElement): HTMLElement | null {
  const scroll = root.querySelector<HTMLElement>('[data-proto-scroll]');
  const scope = scroll || root;
  const leaves = Array.from(scope.querySelectorAll<HTMLElement>('span, div, p')).filter(
    (el) => el.childElementCount === 0,
  );

  for (const el of leaves) {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (
      t !== 'tu carrito está vacío' &&
      t !== 'tu carrito esta vacio' &&
      !/^\d+\s+productos? en tu carrito$/.test(t)
    ) {
      continue;
    }

    let node: HTMLElement | null = el.parentElement;
    while (node && node !== root && node !== scroll) {
      if (node.hasAttribute('data-proto-cart-clone')) break;
      const h = node.offsetHeight || Number.parseFloat(node.style.height) || 0;
      const hasCoral = !!node.querySelector(
        '[style*="ed6047"], [style*="#ed6047"], [style*="237, 96, 71"]',
      );
      const bg = (node.style.background || '').toLowerCase();
      const isCoralSelf =
        bg.includes('#ed6047') ||
        bg.includes('237, 96, 71') ||
        bg.includes('ed6047');
      // Wrapper blanco (~98px) o el botón coral (~54px)
      if (hasCoral && h >= 50 && h <= 140) {
        // Preferir el wrapper con home indicator si existe
        const parent = node.parentElement;
        if (
          parent &&
          parent !== root &&
          parent !== scroll &&
          (parent.offsetHeight || Number.parseFloat(parent.style.height) || 0) >= 70 &&
          (parent.offsetHeight || 0) <= 140 &&
          parent.querySelector('[style*="ed6047"], [style*="#ed6047"]')
        ) {
          return parent;
        }
        return node;
      }
      if (isCoralSelf && h >= 48 && h <= 80) {
        const wrap = node.parentElement;
        if (wrap && wrap !== root && wrap !== scroll) return wrap;
        return node;
      }
      node = node.parentElement;
    }
  }
  return null;
}

/** Contenedor visual del frame (puede ser el root o `.phone-frame` dentro del shell). */
function phoneHost(root: HTMLElement): HTMLElement {
  return root.querySelector<HTMLElement>('.phone-frame') || root;
}

/**
 * Ancla la barra de carrito de categoría al borde inferior del phone-frame
 * (fuera del scroll), para que quede siempre visible aunque haya pocos platos.
 */
function pinCategoryCartBar(root: HTMLElement) {
  const bar = findCategoryCartBar(root);
  if (!bar || bar.hasAttribute('data-proto-cart-clone')) return;

  const host = phoneHost(root);
  const scroll = root.querySelector<HTMLElement>('[data-proto-scroll]');
  const barH = Math.max(
    bar.offsetHeight || Number.parseFloat(bar.style.height) || 0,
    90,
  );

  let clone = host.querySelector<HTMLElement>(':scope > [data-proto-cart-clone]');
  if (!clone) {
    clone = bar.cloneNode(true) as HTMLElement;
    clone.removeAttribute('data-proto-cart-source');
    clone.setAttribute('data-proto-cart-clone', '1');
    clone.setAttribute('data-proto-sticky-cart', '1');
    host.appendChild(clone);
  } else {
    clone.innerHTML = bar.innerHTML;
  }

  clone.style.setProperty('visibility', 'visible', 'important');
  clone.style.setProperty('pointer-events', 'auto', 'important');
  clone.style.setProperty('position', 'absolute', 'important');
  clone.style.setProperty('left', '0', 'important');
  clone.style.setProperty('right', '0', 'important');
  clone.style.setProperty('bottom', '0', 'important');
  clone.style.setProperty('top', 'auto', 'important');
  clone.style.setProperty('width', '100%', 'important');
  clone.style.setProperty('max-width', '100%', 'important');
  clone.style.setProperty('height', `${barH}px`, 'important');
  clone.style.setProperty('z-index', '55', 'important');
  clone.style.setProperty('margin', '0', 'important');
  clone.style.setProperty('flex-shrink', '0', 'important');

  // Clic → carrito aunque el texto diga «N productos…»
  clone.setAttribute('data-proto-action', 'carrito');
  markPressable(clone);
  const coralBtn = Array.from(clone.querySelectorAll<HTMLElement>('div')).find((d) => {
    const bg = (d.style.background || '').toLowerCase();
    return bg.includes('#ed6047') || bg.includes('237, 96, 71');
  });
  if (coralBtn) {
    coralBtn.setAttribute('data-proto-action', 'carrito');
    markPressable(coralBtn);
  }

  // Original en el flujo: colapsado (React lo sigue montando)
  bar.setAttribute('data-proto-cart-source', '1');
  bar.style.setProperty('visibility', 'hidden', 'important');
  bar.style.setProperty('pointer-events', 'none', 'important');
  bar.style.setProperty('height', '0', 'important');
  bar.style.setProperty('min-height', '0', 'important');
  bar.style.setProperty('overflow', 'hidden', 'important');
  bar.style.setProperty('padding', '0', 'important');
  bar.style.setProperty('margin', '0', 'important');
  bar.style.setProperty('border', 'none', 'important');
  bar.style.setProperty('box-shadow', 'none', 'important');

  if (scroll) {
    const tabPad = host.querySelector('[data-proto-tabbar-clone]') ? 79 : 0;
    scroll.style.paddingBottom = `${barH + tabPad + 8}px`;
  }
}

/**
 * Clona la tab bar como hija directa del phone-frame (fuera del scroll).
 * El original se oculta para no pelear con React.
 */
function pinClientTabBar(root: HTMLElement, screenId?: string) {
  const tab = findClientTabBar(root);
  if (!tab) return;

  const host = phoneHost(root);
  // En desktop la sidebar reemplaza la tab bar
  if (root.getAttribute('data-breakpoint') === 'desktop' || host.getAttribute('data-desktop-nav') === '1') {
    tab.setAttribute('data-proto-tabbar-source', '1');
    tab.style.setProperty('visibility', 'hidden', 'important');
    tab.style.setProperty('pointer-events', 'none', 'important');
    tab.style.setProperty('height', '0', 'important');
    tab.style.setProperty('overflow', 'hidden', 'important');
    host.querySelectorAll(':scope > [data-proto-tabbar-clone]').forEach((el) => el.remove());
    return;
  }

  const barH = tab.offsetHeight || Number.parseFloat(tab.style.height) || 79;
  const scroll = root.querySelector<HTMLElement>('[data-proto-scroll]');

  // Ocultar original (sigue en el árbol de React)
  tab.setAttribute('data-proto-tabbar-source', '1');
  tab.style.setProperty('visibility', 'hidden', 'important');
  tab.style.setProperty('pointer-events', 'none', 'important');
  // Sacarlo del flujo para no dejar hueco vacío bajo el contenido
  tab.style.setProperty('position', 'absolute', 'important');
  tab.style.setProperty('height', '0', 'important');
  tab.style.setProperty('overflow', 'hidden', 'important');
  tab.style.setProperty('bottom', '0', 'important');

  let clone = host.querySelector<HTMLElement>(':scope > [data-proto-tabbar-clone]');
  if (!clone) {
    clone = tab.cloneNode(true) as HTMLElement;
    clone.removeAttribute('data-proto-tabbar-source');
    clone.setAttribute('data-proto-tabbar-clone', '1');
    clone.setAttribute('data-proto-fixed-tabbar', '1');
    host.appendChild(clone);
  } else {
    // Refrescar contenido (p. ej. ícono activo) sin recrear el nodo
    clone.innerHTML = tab.innerHTML;
  }

  clone.style.setProperty('visibility', 'visible', 'important');
  clone.style.setProperty('pointer-events', 'auto', 'important');
  clone.style.setProperty('position', 'absolute', 'important');
  clone.style.setProperty('left', '0', 'important');
  clone.style.setProperty('right', '0', 'important');
  clone.style.setProperty('bottom', '0', 'important');
  clone.style.setProperty('width', '100%', 'important');
  clone.style.setProperty('max-width', '100%', 'important');
  clone.style.setProperty('top', 'auto', 'important');
  clone.style.setProperty('z-index', '60', 'important');
  clone.style.setProperty('height', `${barH}px`, 'important');
  clone.style.setProperty('overflow', 'visible', 'important');

  if (scroll) {
    // Padding para que el último contenido (p. ej. «Comida…») quede sobre la tab, no tapado
    scroll.style.paddingBottom = `${barH}px`;
  }
}

/** Oculta la barra de estado del mockup (hora 9:41 + iconos de señal/batería). */
function hideStatusBars(root: HTMLElement) {
  const scope =
    root.querySelector<HTMLElement>('[data-proto-scroll]') || root;

  const hideBar = (node: HTMLElement) => {
    if (node.getAttribute('data-proto-status-bar') === '1') return;
    // No ocultar el header de navegación real (título + flecha circular grande)
    if (node.querySelector('[data-proto-top-chrome], [data-proto-action="volver"]')) {
      const realBack = Array.from(
        node.querySelectorAll<HTMLElement>('[data-proto-action="volver"]'),
      ).some((b) => {
        const w = b.offsetWidth || Number.parseFloat(b.style.width) || 0;
        return w >= 28;
      });
      // Si el único «volver» es el icono chico mal exportado dentro del status, sí ocultar
      if (realBack && (node.offsetHeight || 0) > 56) return;
    }

    node.setAttribute('data-proto-status-bar', '1');
    node.style.setProperty('display', 'none', 'important');

    const parent = node.parentElement;
    if (!parent) return;
    Array.from(parent.children).forEach((sib) => {
      if (!(sib instanceof HTMLElement) || sib === node) return;
      const sibTop = Number.parseFloat(sib.style.top || '');
      if (!Number.isNaN(sibTop) && sibTop >= 20 && sibTop <= 72) {
        sib.style.top = '8px';
      }
    });
  };

  scope.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    const t = (el.textContent || '').trim();
    // Solo hora tipo 9:41 / 09:41 (no fechas largas de admin)
    if (!/^\d{1,2}:\d{2}$/.test(t)) return;

    let best: HTMLElement | null = null;
    let node: HTMLElement | null = el.parentElement;
    for (let i = 0; i < 8 && node && node !== root && node !== scope; i++) {
      const h =
        node.offsetHeight || Number.parseFloat(node.style.height) || 0;
      const top = node.style.top;
      const svgCount = node.querySelectorAll('svg').length;
      const atTop =
        top === '0px' ||
        top === '0' ||
        (node.style.position === 'absolute' &&
          (top === '' || Number.parseFloat(top || '0') <= 4));
      // Filas cortas: status clásico (48px) o max-content (~30–40) en detalle producto
      const shortEnough = h === 0 || h <= 56;
      const hasStatusChrome = svgCount >= 1;

      if (shortEnough && hasStatusChrome && (atTop || svgCount >= 2 || i >= 1)) {
        best = node;
        // Preferir el contenedor fila completo (absolute top 0 o stretch)
        if (
          atTop ||
          node.style.alignSelf === 'stretch' ||
          node.style.justifyContent.includes('space') ||
          (node.offsetWidth || 0) >= 300
        ) {
          break;
        }
      }
      node = node.parentElement;
    }
    if (best) hideBar(best);
  });
}

/**
 * Controles sin destino aún: siguen siendo clickables/tabbables (para Tab del profe),
 * pero no navegan. Logo/copyright siguen no interactivos.
 */
function activateInertAndDeadControls(root: HTMLElement) {
  const markDead = (el: HTMLElement | null) => {
    if (!el) return;
    el.setAttribute('data-proto-dead', '1');
    el.classList.remove('proto-pressable');
    el.removeAttribute('role');
    el.removeAttribute('tabindex');
    el.style.cursor = 'default';
    el.style.pointerEvents = 'auto';
  };

  // Campana de notificaciones en Inicio → interactiva (sin función)
  markInertPressable(root.querySelector<HTMLElement>('[data-figma-id="342:1130"]'));
  markInertPressable(root.querySelector<HTMLElement>('[data-figma-id="342:1131"]'));
  markInertPressable(root.querySelector<HTMLElement>('[data-figma-id="342:1132"]'));

  // Logo de marca «Whopper King» (no es la tarjeta de producto)
  markDead(root.querySelector<HTMLElement>('[data-figma-id="342:1127"]'));
  // Título de categoría en header (p. ej. «Whoppers»): solo la flecha atrás es interactiva
  markDead(root.querySelector<HTMLElement>('[data-figma-id="711:1310"]'));
  root.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    if (el.closest('[data-proto-action="volver"]')) return;
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    const norm = normalizeLabel(t);
    // Título grande junto a la flecha (no tabs «Hamburguesas» / «Los Favoritos»)
    if (
      (norm === 'whoppers' ||
        norm === 'almuerzo' ||
        norm === 'pollo' ||
        norm === 'carne' ||
        norm === 'pescado' ||
        norm === 'bebidas') &&
      (Number.parseFloat(el.style.fontSize) || 0) >= 24
    ) {
      markDead(el);
      const wrap = el.parentElement as HTMLElement | null;
      if (wrap && !wrap.querySelector('[data-proto-action="volver"]')) markDead(wrap);
    }
  });
  // Footer copyright
  root.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (t.includes('©') || /^©/.test(t) || t.includes('pasto, nariño')) {
      markDead(el);
    }
  });

  // Iconos Contáctanos (WhatsApp / llamada / Instagram / ubicación) en Inicio
  [
    '596:2760',
    '596:2761',
    '596:2762',
    '720:2626',
    '720:2627',
    '720:2628',
    '720:2630',
    '720:2631',
    '720:2634',
    '720:2635',
    '720:2636',
    '802:4020',
  ].forEach((id) => {
    markInertPressable(root.querySelector<HTMLElement>(`[data-figma-id="${id}"]`));
  });

  // Título de sección: no es botón
  root.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (t === 'contáctanos por acá' || t === 'contactanos por aca') {
      markDead(el);
      const row = el.parentElement as HTMLElement | null;
      if (row) markDead(row);
    }
  });

  // Canales en Sobre nosotros: interactivos sin navegación externa
  ['464:1929', '464:1943', '464:1958', '464:1930', '464:1944', '464:1959'].forEach(
    (id) => markInertPressable(root.querySelector<HTMLElement>(`[data-figma-id="${id}"]`)),
  );

  // Mapa / pin de ubicación: no clickeable (el mapa real va por backend)
  [
    '464:1875',
    '464:1876',
    '464:1881',
    '464:1883',
    '464:1888',
    '464:1919',
  ].forEach((id) => {
    const el = root.querySelector<HTMLElement>(`[data-figma-id="${id}"]`);
    if (!el) return;
    markDead(el);
    el.style.cursor = 'default';
    el.querySelectorAll<HTMLElement>('.proto-pressable, [data-proto="btn"]').forEach((child) => {
      markDead(child);
      child.style.cursor = 'default';
    });
  });
  root.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (
      t.includes('como llegar con google maps') ||
      t.includes('cómo llegar con google maps') ||
      t === 'whopper king las cuadras'
    ) {
      markDead(el);
      const wrap = el.closest('[data-figma-id="464:1875"], [data-figma-id="464:1919"]') as HTMLElement | null;
      if (wrap) markDead(wrap);
    }
  });

  // Ojo de contraseña (login / registro)
  markInertPressable(root.querySelector<HTMLElement>('[data-figma-id="585:2376"]'));
  root.querySelectorAll<HTMLElement>('[data-figma-id]').forEach((el) => {
    if (el.querySelector('svg') && /eye|ojo/i.test(el.getAttribute('aria-label') || '')) {
      markInertPressable(el);
    }
  });
  // Contenedores 44×44 con ClientEyeIcon (sin figma-id propio en registro)
  root.querySelectorAll<HTMLElement>('div').forEach((el) => {
    const w = el.offsetWidth || Number.parseFloat(el.style.width) || 0;
    const h = el.offsetHeight || Number.parseFloat(el.style.height) || 0;
    if (w !== 44 || h !== 44) return;
    if (!el.querySelector('svg')) return;
    // Solo si está al lado de un campo password-like
    const shell = el.parentElement;
    if (!shell) return;
    if (!shell.querySelector(`[${MARK}="field"], input[type="password"], .proto-field`)) return;
    markInertPressable(el);
  });
}

/** Tabs de categoría (2 ítems): mismo ancho e indicador inferior uniforme. */
function equalizeSegmentTabs(root: HTMLElement) {
  const TAB_LABELS = new Set([
    'almuerzo',
    'menu',
    'menú',
    'los favoritos',
    'favoritos',
    'hamburguesas',
  ]);

  const isTabLabel = (el: HTMLElement) => {
    const t = normalizeLabel((el.textContent || '').replace(/\s+/g, ' ').trim());
    return TAB_LABELS.has(t);
  };

  // Buscar filas que contengan exactamente 2 tabs conocidos
  root.querySelectorAll<HTMLElement>('div').forEach((row) => {
    if (row.closest('[data-proto-qty], [data-proto-scroll] [data-proto-fixed-tabbar]')) return;
    const h = row.offsetHeight || Number.parseFloat(row.style.height) || 0;
    if (h > 0 && (h < 36 || h > 56)) return;

    const labeled = Array.from(row.querySelectorAll('span')).filter((s) => {
      if (!(s instanceof HTMLElement) || s.childElementCount > 0) return false;
      return isTabLabel(s);
    }) as HTMLElement[];
    if (labeled.length < 2) return;

    // Contenedores de tab: ancestro directo bajo la fila o con underline
    const tabs = new Set<HTMLElement>();
    for (const span of labeled) {
      let node: HTMLElement | null = span;
      let hit: HTMLElement | null = null;
      while (node && node !== row) {
        const shadow = node.style.boxShadow || '';
        const border = node.style.borderBottom || '';
        if (shadow.includes('inset 0 -3px') || border.includes('3px')) {
          hit = node;
          break;
        }
        if (node.parentElement === row) {
          hit = node;
          break;
        }
        node = node.parentElement;
      }
      if (hit) tabs.add(hit);
    }
    if (tabs.size < 2 || tabs.size > 4) return;

    row.setAttribute('data-proto-seg-tabs', '1');
    row.style.display = 'flex';
    row.style.flexDirection = 'row';
    row.style.alignItems = 'stretch';
    row.style.width = '100%';
    row.style.maxWidth = '100%';
    row.style.boxSizing = 'border-box';
    row.style.gap = '0';
    row.style.paddingLeft = row.style.paddingLeft || '20px';
    row.style.paddingRight = row.style.paddingRight || '20px';

    const list = Array.from(tabs);
    list.forEach((tab) => {
      tab.setAttribute('data-proto-seg-tab', '1');
      tab.style.position = 'relative';
      tab.style.left = 'auto';
      tab.style.right = 'auto';
      tab.style.top = 'auto';
      tab.style.flex = `1 1 ${100 / list.length}%`;
      tab.style.width = 'auto';
      tab.style.minWidth = '0';
      tab.style.maxWidth = 'none';
      tab.style.height = '45px';
      tab.style.display = 'flex';
      tab.style.alignItems = 'center';
      tab.style.justifyContent = 'center';
      tab.style.boxSizing = 'border-box';
    });
  });
}

/**
 * En menús de categoría, las tarjetas de producto no deben saltar a otra categoría
 * por palabras como «Pollo» en la descripción. Quedan inertes (clicables, sin nav).
 */
function neutralizeMenuProductCards(root: HTMLElement, screenId: string) {
  const menuScreens = new Set([
    'menu',
    'menu-almuerzo',
    'menu-pollo',
    'menu-carne',
    'menu-pescado',
    'menu-bebidas',
  ]);
  if (!menuScreens.has(screenId)) return;

  const TAB_ONLY = new Set([
    'pollo',
    'carne',
    'pescado',
    'almuerzo',
    'menu',
    'menú',
    'bebidas',
  ]);

  root.querySelectorAll<HTMLElement>('div').forEach((card) => {
    const h = card.offsetHeight || 0;
    const radius = card.style.borderRadius || '';
    const shadow = card.style.boxShadow || '';
    if (h < 160 || h > 280) return;
    if (!/10px|12px|14px|16px/.test(radius) && !shadow.includes('inset')) return;
    // Evitar tabs / chrome
    if (card.closest('[data-proto-seg-tabs], [data-proto-top-chrome]')) return;

    const title = Array.from(card.querySelectorAll('span')).find((s) => {
      if (!(s instanceof HTMLElement) || s.childElementCount > 0) return false;
      const t = (s.textContent || '').replace(/\s+/g, ' ').trim();
      return t.length >= 3 && t.length <= 40 && !/^\$/.test(t);
    }) as HTMLElement | undefined;
    if (!title) return;
    const norm = normalizeLabel(title.textContent || '');
    if (TAB_ONLY.has(norm)) return;

    // Si ya tiene destino de producto explícito (texana, whopper…), no tocar
    const action = card.getAttribute('data-proto-action') || '';
    if (action && resolveNav(screenId, action) && !TAB_ONLY.has(normalizeLabel(action))) {
      return;
    }

    // Quitar navegación accidental hacia categorías
    card.removeAttribute('data-proto-action');
    card.querySelectorAll<HTMLElement>('[data-proto-action]').forEach((el) => {
      const a = normalizeLabel(el.getAttribute('data-proto-action') || '');
      if (TAB_ONLY.has(a) || a.includes('pollo') || a.includes('carne') || a.includes('pescado')) {
        el.removeAttribute('data-proto-action');
      }
    });
    markInertPressable(card);
  });
}

/**
 * Login: la fila de hamburguesa azul solo selecciona modo admin;
 * «Iniciar Sesión» navega a inventario si está marcada, si no a mi-cuenta.
 */
function mountLoginAdminToggle(root: HTMLElement): () => void {
  const row = root.querySelector<HTMLElement>('[data-figma-id="585:2364"]');
  const radio = root.querySelector<HTMLElement>('[data-figma-id="585:2099"]');
  if (!row) return () => {};

  row.setAttribute('data-proto-action', 'toggle-admin');
  row.setAttribute('data-proto-admin-selected', '0');
  markPressable(row);
  // Evitar que el texto interno se marque como navegación a inventario
  row.querySelectorAll<HTMLElement>('[data-figma-id]').forEach((el) => {
    el.setAttribute('data-proto-dead', '0');
    el.style.pointerEvents = 'none';
  });
  row.style.pointerEvents = 'auto';
  row.style.cursor = 'pointer';

  const apply = (selected: boolean) => {
    row.setAttribute('data-proto-admin-selected', selected ? '1' : '0');
    if (selected) {
      row.style.background = '#fdeae6';
      row.style.boxShadow = 'inset 0 0 0 1.5px #ed6047';
      if (radio) {
        // Radio clásico: anillo fino + punto centrado (no disco sólido)
        radio.style.boxSizing = 'border-box';
        radio.style.background =
          'radial-gradient(circle, #ed6047 0 3.25px, #ffffff 3.5px 100%)';
        radio.style.border = '2px solid #ed6047';
        radio.style.boxShadow = 'none';
      }
    } else {
      row.style.background = '#ffffff';
      row.style.boxShadow = 'inset 0 0 0 1px #e0bfb9';
      if (radio) {
        radio.style.boxSizing = 'border-box';
        radio.style.background = '#ffffff';
        radio.style.border = '1.5px solid #d5ccc2';
        radio.style.boxShadow = 'none';
      }
    }
  };
  apply(false);

  const onToggle = (e: MouseEvent) => {
    const t = e.target as HTMLElement | null;
    if (!t || !t.closest('[data-figma-id="585:2364"]')) return;
    e.preventDefault();
    e.stopPropagation();
    apply(row.getAttribute('data-proto-admin-selected') !== '1');
  };
  root.addEventListener('click', onToggle, true);
  return () => root.removeEventListener('click', onToggle, true);
}

/**
 * Flechas atrás: hit area + z-index alto.
 * En carrito/pago el contenido en flujo tapa el header absolute y se come el clic.
 */
function pinBackButtons(root: HTMLElement) {
  const markBack = (hit: HTMLElement) => {
    hit.setAttribute('data-proto-action', 'volver');
    hit.style.setProperty('z-index', '50', 'important');
    hit.style.setProperty('pointer-events', 'auto', 'important');
    if (!hit.style.position || hit.style.position === 'static') {
      hit.style.position = 'relative';
    }
    markPressable(hit);

    // Subir el header absolute completo para que quede sobre el contenido
    let header: HTMLElement | null = hit.parentElement;
    for (let i = 0; i < 4 && header && header !== root; i++) {
      const pos = header.style.position;
      const top = header.style.top;
      if (
        (pos === 'absolute' || pos === 'fixed') &&
        (top === '0px' ||
          top === '0' ||
          (!!top && Number.parseFloat(top) >= 0 && Number.parseFloat(top) <= 80))
      ) {
        header.setAttribute('data-proto-top-chrome', '1');
        header.style.setProperty('z-index', '45', 'important');
        header.style.setProperty('pointer-events', 'auto', 'important');
        break;
      }
      header = header.parentElement;
    }
  };

  const nearClock = (el: Element) => {
    let n: Element | null = el;
    for (let i = 0; i < 5 && n; i++) {
      const text = (n.textContent || '').replace(/\s+/g, ' ');
      if (/\b\d{1,2}:\d{2}\b/.test(text) && n.querySelectorAll('svg').length >= 1) {
        // Fila tipo status bar (hora + iconos), no es la flecha real
        const h =
          (n as HTMLElement).offsetHeight ||
          Number.parseFloat((n as HTMLElement).style.height) ||
          0;
        if (h === 0 || h <= 56) return true;
      }
      n = n.parentElement;
    }
    return false;
  };

  root.querySelectorAll<HTMLElement>('[data-proto-action="volver"]').forEach((el) => {
    if (nearClock(el)) return; // chevron fantasma dentro del status bar
    let btn: HTMLElement | null = el.parentElement;
    let found: HTMLElement | null = null;
    while (btn && btn !== root) {
      const w = btn.offsetWidth || Number.parseFloat(btn.style.width) || 0;
      const h = btn.offsetHeight || Number.parseFloat(btn.style.height) || 0;
      if (w >= 32 && w <= 56 && h >= 32 && h <= 56) {
        found = btn;
        break;
      }
      btn = btn.parentElement;
    }
    markBack(found || (el.closest('[data-figma-id]') as HTMLElement) || el);
  });

  root.querySelectorAll<HTMLElement>('[data-figma-id]').forEach((el) => {
    const id = el.getAttribute('data-figma-id');
    if (!id) return;
    if (resolveFigmaNav('__any__', id) !== '__back__') return;
    if (nearClock(el)) return;
    markBack(el);
  });
}

/** Expande el hit area a la tarjeta/opción contenedora (pago, combo, producto). */
function expandOptionHitArea(el: HTMLElement, actionLabel: string, root: HTMLElement) {
  // No expandir − / + / cantidad del footer de personalizar (rompe el layout)
  const label = normalizeLabel(actionLabel);
  if (
    label === '+' ||
    label === '-' ||
    label === '−' ||
    /^\d+$/.test(label) ||
    el.closest('[data-proto-qty]')
  ) {
    return;
  }
  let node: HTMLElement | null = el.parentElement;
  let card: HTMLElement | null = null;
  while (node && node !== root) {
    if (node.getAttribute('data-proto-qty') === '1') return;
    const h = node.offsetHeight;
    const style = node.style;
    const radius = style.borderRadius || '';
    const shadow = style.boxShadow || '';
    // Incluye 10px (tarjetas de menú) además de 12/14/16
    const looksRounded =
      /10px|14px|16px|12px|9999|1rem/.test(radius) || shadow.includes('inset');
    // Opciones cortas (pago/combo) o tarjetas de producto del menú (~245px)
    if (looksRounded && h >= 48 && h <= 300) {
      card = node;
      break;
    }
    // Contenedor de opción un poco más alto (wrapper 88px con card 76px)
    if (h >= 70 && h <= 100 && node.querySelectorAll('span').length >= 1) {
      const inner = Array.from(node.children).find((c) => {
        const ch = c as HTMLElement;
        return ch.offsetHeight >= 48 && ch.offsetHeight <= 90;
      }) as HTMLElement | undefined;
      if (inner) {
        card = inner;
        break;
      }
    }
    node = node.parentElement;
  }
  if (!card) return;
  if (!card.getAttribute('data-proto-action')) {
    card.setAttribute('data-proto-action', actionLabel);
  }
  markPressable(card);
}

export function enhanceFrame(
  root: HTMLElement,
  screenId: string,
  navigate: (target: NavTarget) => void,
): () => void {
  const candidates = root.querySelectorAll<HTMLElement>('div, span, p, button, a, label');

  // Tab bar Inicio / Buscar / Carrito / Mi cuenta → fija al scrollear
  pinClientTabBar(root, screenId);

  // Overlays de frame (Buscar / confirmar eliminación): tab bar detrás del scrim
  if (screenId === 'no-disponible' || screenId === 'elim-cuenta') {
    root.querySelectorAll<HTMLElement>('[data-proto-fixed-tabbar], [data-proto-tabbar-clone]').forEach((el) => {
      el.style.setProperty('pointer-events', 'none', 'important');
    });
  }

  // Barra «Tu carrito…» de menús de categoría → anclada al borde inferior
  pinCategoryCartBar(root);

  // Tabs Almuerzo/Menú y Favoritos/Hamburguesas: indicadores del mismo ancho
  equalizeSegmentTabs(root);

  // Flechas atrás primero (para no confundir iconos chicos del status con la flecha real)
  pinBackButtons(root);

  // Quitar status bar (hora / señal / batería) de todas las pantallas
  hideStatusBars(root);

  // Contenido con padding-top bajo header absolute: el padding capturaba el clic de la flecha
  root.querySelectorAll<HTMLElement>('[data-proto-scroll] div').forEach((el) => {
    const pt = Number.parseFloat(el.style.paddingTop || '');
    if (Number.isNaN(pt) || pt < 60 || pt > 140) return;
    if (el.style.position === 'absolute' || el.style.position === 'fixed') return;
    el.style.pointerEvents = 'none';
    Array.from(el.children).forEach((child) => {
      (child as HTMLElement).style.pointerEvents = 'auto';
    });
  });

  // data-proto-action: marcar hit area (flechas atrás y opciones de combo)
  root.querySelectorAll<HTMLElement>('[data-proto-action]').forEach((el) => {
    if (el.closest('[data-proto-status-bar], [data-proto-dead]')) return;
    const action = el.getAttribute('data-proto-action');
    if (action === 'volver' || action === 'atras') {
      const hit =
        (el.closest('[data-figma-id]') as HTMLElement | null) ||
        (el.parentElement as HTMLElement | null);
      if (hit && !hit.closest('[data-proto-status-bar]')) {
        hit.setAttribute('data-proto-action', 'volver');
        markPressable(hit);
      }
      markPressable(el);
      return;
    }
    markPressable(el);
  });

  candidates.forEach((el) => {
    if (el.closest('[data-proto-dead], [data-proto-status-bar]')) return;
    const figmaId = el.getAttribute('data-figma-id');
    if (figmaId && resolveFigmaNav(screenId, figmaId)) {
      markPressable(el);
      // Tarjeta de producto: el contenedor completo es el hit area
      if (figmaId === '342:1172') {
        el.setAttribute('data-proto-action', 'whopper');
      }
      return;
    }

    // only relatively leaf-ish nodes
    const childElements = el.querySelectorAll('div, span, p, button');
    const text = leafText(el);
    if (!text) return;

    // Skip huge containers
    if (text.length > 70) return;
    if (childElements.length > 6) return;

    const norm = normalizeLabel(text);
    if (norm === 'agregar al pedido' || norm === 'agregar') {
      el.setAttribute('data-proto-action', 'agregar');
      markPressable(el);
      expandOptionHitArea(el, 'agregar', root);
      return;
    }

    // Chips de métrica / etiquetas iguales en tarjetas: nunca input
    if (STATS_METRIC_LABELS.has(norm)) {
      return;
    }

    // − / + / cantidad: hit local (lockQtySteppers cablea −/+)
    if (norm === '+' || norm === '-' || norm === '−' || /^\d+$/.test(norm)) {
      if (el.closest('[data-proto-qty]')) return;
      markInertPressable(el);
      return;
    }

    // Navegación gana sobre inputs: filas de inventario deben ir a detalle
    if (resolveNav(screenId, text) || isButtonish(text)) {
      markPressable(el);
      // No expandir «Whopper King» del logo de marca a todo el layout
      if (
        resolveNav(screenId, text) &&
        text.length <= 40 &&
        norm !== 'whopper king' &&
        !el.closest('[data-proto-qty]')
      ) {
        expandOptionHitArea(el, text, root);
      }
      // En inicio, la tarjeta favorita se marca por figma-id (342:1172)
      if (screenId === 'whopper-inicio' && (norm === 'whopper' || norm === 'whopper king')) {
        const card = el.closest(
          '[data-figma-id="342:1172"]',
        ) as HTMLElement | null;
        if (card) {
          card.setAttribute('data-proto-action', 'whopper');
          markPressable(card);
        } else {
          // Logo u otro «Whopper King» suelto: no navegable
          el.setAttribute('data-proto-dead', '1');
          el.classList.remove('proto-pressable');
          el.removeAttribute('tabindex');
          el.removeAttribute('role');
          el.style.cursor = 'default';
        }
        return;
      }
      return;
    }

    if (isEditableLabel(text, screenId) && childElements.length <= 1) {
      makeEditable(el, { password: /^\*+$/.test(text.trim()) });
    }
  });

  // Platos del menú: no navegar a categorías por texto en la descripción
  neutralizeMenuProductCards(root, screenId);

  // Campos de formulario (placeholders → <input>) aunque no matcheen la lista corta
  enhanceFormFields(root, screenId);

  // Estadísticas: chips de métrica → pestañas (no editables)
  mountStatsMetricTabs(root);

  // Stepper − 1 +: deshacer inputs accidentales y fijar layout
  lockQtySteppers(root);

  // Campana / redes / ojo: tabbables sin navegación; logo/copyright siguen muertos
  activateInertAndDeadControls(root);

  // Accesibilidad: sin botones anidados + aria-label en iconos
  flattenNestedPressables(root);

  // Inputs nativos (Agregar dirección, etc.): asegurar foco visible
  root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    'input:not([type="hidden"]), textarea, select',
  ).forEach((el) => {
    el.classList.add('proto-field');
    if (!el.hasAttribute('tabindex')) el.tabIndex = 0;
  });

  const goWithCart = (target: HTMLElement, dest: NavTarget) => {
    const addHit = target.closest('[data-proto-action="agregar"]');
    if (
      addHit &&
      typeof dest === 'string' &&
      dest.startsWith('tu-carrito') &&
      (PRODUCT_BY_SCREEN[screenId] || screenId.startsWith('personaliza-') || screenId.startsWith('desc-'))
    ) {
      addProductFromScreen(screenId);
    }

    let next: NavTarget = dest;

    // Desde carrito: local → QR/mesa; domicilio → pago directo
    if (
      typeof next === 'string' &&
      (next === 'escaneo-qr' || /^pago-/.test(next)) &&
      (screenId === 'tu-carrito-local' ||
        screenId === 'tu-carrito-domicilio' ||
        screenId === 'carrito-local' ||
        screenId === 'carrito-domicilio')
    ) {
      if (getCart().fulfillment === 'domicilio') {
        next = payScreenForCart('nequi');
      } else {
        next = 'escaneo-qr';
      }
    } else if (typeof next === 'string' && /^pago-(local|dom)-/.test(next)) {
      const method = next.replace(/^pago-(local|dom)-/, '') || 'nequi';
      next = payScreenForCart(method);
    }

    // Al confirmar pedido, congelar el carrito para el resumen
    if (typeof next === 'string' && next.startsWith('pedido-')) {
      commitOrder();
    }
    navigate(next);
  };

  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest(`input, textarea, select, [${MARK}="field"], [${MARK}="input"]`)) {
      return;
    }

    // Controles sin función / inertes (campana, redes…): absorben clic, no navegan.
    // Excepción: − / + del stepper (data-proto-qty-btn) manejan su propio click.
    if (target.closest('[data-proto-dead], [data-proto-inert]')) {
      if (target.closest('[data-proto-qty-btn]')) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Flecha atrás gana siempre (aunque haya overlays / mismo screenId)
    // Ignorar el chevron chico que a veces viene dentro del status bar
    const backHit = target.closest(
      '[data-proto-action="volver"], [data-proto-action="atras"]',
    ) as HTMLElement | null;
    if (backHit && !backHit.closest('[data-proto-status-bar]')) {
      e.preventDefault();
      e.stopPropagation();
      const mapped = resolveNav(screenId, 'volver');
      navigate(mapped || '__back__');
      return;
    }

    // Controles vivos del carrito / mesa manejan su propio click
    if (
      target.closest('[data-proto-live-cart="host"]') ||
      target.closest('[data-proto-fulfillment]') ||
      target.closest('[data-proto-table-select]') ||
      target.closest('select')
    ) {
      return;
    }

    // Escaneo QR: Continuar lo maneja mountTableSelect (valida código / mesa)
    if (
      screenId === 'escaneo-qr' &&
      root.querySelector('[data-proto-table-select-mounted="1"]') &&
      target.closest('[data-figma-id="646:2402"], [data-proto-action="continuar"]')
    ) {
      return;
    }

    // Login: fila admin solo hace toggle (no navega)
    if (
      screenId === 'login' &&
      target.closest('[data-figma-id="585:2364"], [data-proto-action="toggle-admin"]')
    ) {
      return;
    }

    let dest = resolveFromClick(target, root, screenId);
    if (!dest) {
      return;
    }
    // Login: con admin seleccionado, Iniciar Sesión → inventario
    if (
      screenId === 'login' &&
      dest === 'mi-cuenta' &&
      root.querySelector('[data-proto-admin-selected="1"]')
    ) {
      const label = normalizeLabel(
        (target.closest('[data-proto-action]') as HTMLElement | null)?.getAttribute(
          'data-proto-action',
        ) ||
          target.textContent ||
          '',
      );
      const figmaId =
        (target.closest('[data-figma-id]') as HTMLElement | null)?.getAttribute(
          'data-figma-id',
        ) || '';
      const isLoginBtn =
        label.includes('iniciar') ||
        figmaId === '585:2384' ||
        figmaId === '585:2385' ||
        figmaId === '585:2386' ||
        !!target.closest('[data-figma-id="585:2384"], [data-figma-id="585:2385"], [data-figma-id="585:2386"]');
      if (isLoginBtn) dest = 'inventario';
    }
    // Destino = misma pantalla: no es navegación útil (p. ej. título «Tu carrito»)
    if (dest === screenId) return;
    e.preventDefault();
    e.stopPropagation();
    goWithCart(target, dest);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const target = e.target as HTMLElement | null;
    if (!target || target.getAttribute(MARK) !== 'btn') return;
    if (target.closest('[data-proto-live-cart="host"]')) return;
    const dest = resolveFromClick(target, root, screenId);
    if (!dest) return;
    e.preventDefault();
    goWithCart(target, dest);
  };

  root.addEventListener('click', onClick, true);
  root.addEventListener('keydown', onKey, true);

  const cleanups: Array<() => void> = [
    () => {
      root.removeEventListener('click', onClick, true);
      root.removeEventListener('keydown', onKey, true);
    },
  ];

  if (screenId === 'login') {
    cleanups.push(mountLoginAdminToggle(root));
  }

  if (screenId === 'tu-carrito-local' || screenId === 'tu-carrito-domicilio') {
    cleanups.push(
      mountLiveCart(root, (id) => {
        navigate(id);
      }),
    );
  } else if (screenId === 'escaneo-qr') {
    cleanups.push(mountTableSelect(root, (id) => navigate(id)));
  } else if (screenId.startsWith('pago-')) {
    cleanups.push(mountPaymentHeader(root));
  } else if (
    screenId === 'pedido-exitoso-local' ||
    screenId === 'pedido-enviado-local' ||
    screenId === 'pedido-enviado-domicilio'
  ) {
    // Si llegan directo (hash), usa carrito vivo; si vinieron de pagar, ya hay snapshot
    cleanups.push(mountOrderSummary(root));
  } else {
    const syncChrome = () => {
      syncMenuCartBars(root);
      syncHeaderCartBadge(root);
    };
    syncChrome();
    cleanups.push(subscribeCart(syncChrome));
  }

  return () => {
    cleanups.forEach((fn) => fn());
  };
}

export { normalizeLabel };
