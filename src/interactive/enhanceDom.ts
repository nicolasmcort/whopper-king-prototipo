import {
  isButtonish,
  isEditableLabel,
  normalizeLabel,
  resolveFigmaNav,
  resolveNav,
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
  let el: Element | null = target;
  while (el && el !== root) {
    const action = el.getAttribute('data-proto-action');
    if (action) {
      const byAction = resolveNav(screenId, action);
      if (byAction) return byAction;
      if (action === 'volver') return '__back__';
    }
    const figmaId = el.getAttribute('data-figma-id');
    if (figmaId) {
      const byId = resolveFigmaNav(screenId, figmaId);
      if (byId) return byId;
    }
    el = el.parentElement;
  }

  // Subir el árbol: probar textos del nodo y títulos cortos hijos (todo el cuadro, no solo el label)
  el = target;
  while (el && el !== root) {
    for (const label of ownShortLabels(el)) {
      const dest = resolveNav(screenId, label);
      if (dest) return dest;
    }
    const t = leafText(el);
    if (t) {
      const dest = resolveNav(screenId, t);
      if (dest) return dest;
    }
    el = el.parentElement;
  }
  return null;
}

function makeEditable(el: HTMLElement) {
  if (el.getAttribute(MARK) === 'input') return;
  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;

  const text = (el.textContent || '').trim();
  const input = document.createElement('input');
  input.type = 'text';
  input.value = text;
  input.className = 'proto-field';
  input.setAttribute(MARK, 'input');
  input.placeholder = text;
  input.style.cssText = [
    'display:block',
    'width:100%',
    'min-width:0',
    'max-width:100%',
    'height:auto',
    'min-height:1.25em',
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
  ].join(';');

  // Keep layout: replace text content
  el.textContent = '';
  el.style.minWidth = '0';
  el.style.flex = el.style.flex || '1 1 0%';
  el.appendChild(input);
  el.style.cursor = 'text';
  el.setAttribute(MARK, 'field');
  el.addEventListener('click', (e) => e.stopPropagation());
}

function markPressable(el: HTMLElement) {
  if (el.getAttribute(MARK) === 'input' || el.getAttribute(MARK) === 'field') return;
  el.classList.add('proto-pressable');
  el.style.cursor = 'pointer';
  el.setAttribute(MARK, 'btn');
  if (!el.hasAttribute('tabindex')) el.tabIndex = 0;
  el.setAttribute('role', 'button');
}

/** Barra inferior Inicio / Buscar / Carrito / Mi cuenta — fija al phone-frame. */
function pinClientTabBar(root: HTMLElement) {
  const candidates = Array.from(root.querySelectorAll('div')).filter((el) => {
    const raw = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (!/\bInicio\b/.test(raw) || !/Mi cuenta/i.test(raw)) return false;
    if (!/\b(Buscar|Carrito)\b/i.test(raw)) return false;
    // Evitar el árbol completo de la pantalla
    if (raw.length > 80) return false;
    const h = el.offsetHeight;
    const w = el.offsetWidth;
    return h >= 55 && h <= 120 && w >= 280;
  }) as HTMLElement[];

  if (candidates.length === 0) return;

  // Preferir el contenedor blanco de la barra (no un ítem suelto)
  candidates.sort((a, b) => {
    const score = (el: HTMLElement) => el.offsetHeight + (el.children.length >= 3 ? 40 : 0);
    return score(b) - score(a);
  });

  let tab = candidates[0];
  const parent = tab.parentElement;
  // Subir al wrapper blanco de la tab bar si el match fue la fila interna
  if (
    parent &&
    parent !== root &&
    parent.offsetHeight >= 70 &&
    parent.offsetHeight <= 120 &&
    /Inicio/i.test(parent.textContent || '') &&
    /Mi cuenta/i.test(parent.textContent || '')
  ) {
    tab = parent;
  }

  const wasInFlow = getComputedStyle(tab).position !== 'absolute' && getComputedStyle(tab).position !== 'fixed';
  const barH = tab.offsetHeight || 79;

  tab.setAttribute('data-proto-fixed-tabbar', '1');
  tab.style.setProperty('position', 'fixed', 'important');
  tab.style.setProperty('left', '0', 'important');
  tab.style.setProperty('right', '0', 'important');
  tab.style.setProperty('bottom', '0', 'important');
  tab.style.setProperty('width', '100%', 'important');
  tab.style.setProperty('max-width', '100%', 'important');
  tab.style.setProperty('top', 'auto', 'important');
  tab.style.setProperty('z-index', '60', 'important');

  // Spacer para que el contenido no quede bajo la barra
  if (!root.querySelector('[data-proto-tabbar-spacer]')) {
    const spacer = document.createElement('div');
    spacer.setAttribute('data-proto-tabbar-spacer', '1');
    spacer.style.cssText = `height:${barH}px;flex-shrink:0;width:100%;pointer-events:none;`;
    if (wasInFlow && tab.parentElement) {
      tab.parentElement.insertBefore(spacer, tab);
    } else {
      // Tabbar absolute: añadir al final del contenido scrolleable
      const host = (root.firstElementChild as HTMLElement | null) || root;
      host.appendChild(spacer);
    }
  }
}

/** Expande el hit area a la tarjeta/opción contenedora (pago, combo, etc.). */
function expandOptionHitArea(el: HTMLElement, actionLabel: string, root: HTMLElement) {
  let node: HTMLElement | null = el.parentElement;
  let card: HTMLElement | null = null;
  while (node && node !== root) {
    const h = node.offsetHeight;
    const style = node.style;
    const radius = style.borderRadius || '';
    const shadow = style.boxShadow || '';
    const looksRounded = /16px|12px|9999|1rem/.test(radius) || shadow.includes('inset');
    if (looksRounded && h >= 48 && h <= 140) {
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
  pinClientTabBar(root);

  // Barra "Tu carrito…" sticky al borde inferior
  root.querySelectorAll<HTMLElement>('span, div, p').forEach((el) => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (t !== 'tu carrito está vacío' && t !== 'tu carrito esta vacio') return;
    let node: HTMLElement | null = el.parentElement;
    while (node && node !== root) {
      const h = node.offsetHeight;
      const bg = (node.style.background || '').toLowerCase();
      if (h >= 80 && h <= 130 && (bg.includes('#fff') || bg.includes('ffffff') || getComputedStyle(node).backgroundColor !== 'rgba(0, 0, 0, 0)')) {
        node.setAttribute('data-proto-sticky-cart', '1');
        break;
      }
      if (h >= 90 && h <= 120) {
        node.setAttribute('data-proto-sticky-cart', '1');
        break;
      }
      node = node.parentElement;
    }
  });

  // data-proto-action: marcar hit area (flechas atrás y opciones de combo)
  root.querySelectorAll<HTMLElement>('[data-proto-action]').forEach((el) => {
    const action = el.getAttribute('data-proto-action');
    if (action === 'volver') {
      const hit =
        (el.closest('[data-figma-id]') as HTMLElement | null) ||
        (el.parentElement as HTMLElement | null);
      if (hit) markPressable(hit);
      return;
    }
    markPressable(el);
  });

  candidates.forEach((el) => {
    const figmaId = el.getAttribute('data-figma-id');
    if (figmaId && resolveFigmaNav(screenId, figmaId)) {
      markPressable(el);
      return;
    }

    // only relatively leaf-ish nodes
    const childElements = el.querySelectorAll('div, span, p, button');
    const text = leafText(el);
    if (!text) return;

    // Skip huge containers
    if (text.length > 70) return;
    if (childElements.length > 6) return;

    // Navegación gana sobre inputs: filas de inventario deben ir a detalle
    if (resolveNav(screenId, text) || isButtonish(text)) {
      markPressable(el);
      if (resolveNav(screenId, text) && text.length <= 40) {
        expandOptionHitArea(el, text, root);
      }
      return;
    }

    if (isEditableLabel(text, screenId) && childElements.length <= 1) {
      makeEditable(el);
    }
  });

  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest(`input, textarea, select, [${MARK}="field"], [${MARK}="input"]`)) {
      return;
    }

    const dest = resolveFromClick(target, root, screenId);
    if (!dest) {
      // still give press feedback for buttonish
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    navigate(dest);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const target = e.target as HTMLElement | null;
    if (!target || target.getAttribute(MARK) !== 'btn') return;
    const dest = resolveFromClick(target, root, screenId);
    if (!dest) return;
    e.preventDefault();
    navigate(dest);
  };

  root.addEventListener('click', onClick, true);
  root.addEventListener('keydown', onKey, true);

  return () => {
    root.removeEventListener('click', onClick, true);
    root.removeEventListener('keydown', onKey, true);
  };
}

export { normalizeLabel };
