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

function nearestLabel(start: Element, root: Element): string {
  let el: Element | null = start;
  while (el && el !== root) {
    const t = leafText(el);
    if (t && t.length <= 60) return t;
    el = el.parentElement;
  }
  return leafText(start);
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
  const label = nearestLabel(target, root);
  if (!label) return null;
  return resolveNav(screenId, label);
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

export function enhanceFrame(
  root: HTMLElement,
  screenId: string,
  navigate: (target: NavTarget) => void,
): () => void {
  const candidates = root.querySelectorAll<HTMLElement>('div, span, p, button, a, label');

  // Flechas atrás (SVG con data-proto-action): marcar el contenedor clickeable
  root.querySelectorAll<HTMLElement>('[data-proto-action="volver"]').forEach((svg) => {
    const hit = (svg.closest('[data-figma-id]') as HTMLElement | null) || (svg.parentElement as HTMLElement | null);
    if (hit) markPressable(hit);
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
