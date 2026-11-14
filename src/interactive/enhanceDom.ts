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

/** Botones solo-ícono (sin texto): resuelve por data-figma-id antes que por label. */
function resolveFromClick(
  target: HTMLElement,
  root: HTMLElement,
  screenId: string,
): NavTarget | null {
  let el: Element | null = target;
  while (el && el !== root) {
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
  input.style.cssText = [
    'width:100%',
    'height:100%',
    'min-height:1.2em',
    'border:none',
    'outline:none',
    'background:transparent',
    'font:inherit',
    'color:inherit',
    'text-align:inherit',
    'padding:0',
    'margin:0',
    'box-sizing:border-box',
  ].join(';');

  // Keep layout: replace text content
  el.textContent = '';
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

    if (isEditableLabel(text) && childElements.length <= 1) {
      makeEditable(el);
      return;
    }

    if (isButtonish(text) || resolveNav(screenId, text)) {
      markPressable(el);
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
