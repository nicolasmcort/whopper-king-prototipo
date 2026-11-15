import {
  addProductFromScreen,
  commitOrder,
  getCart,
  payScreenForCart,
  PRODUCT_BY_SCREEN,
  subscribeCart,
} from '../cart/store';
import {
  mountLiveCart,
  syncHeaderCartBadge,
  syncMenuCartBars,
} from '../components/ClientLiveCart';
import { mountOrderSummary } from '../components/ClientOrderSummary';
import { mountPaymentHeader } from '../components/ClientPaymentHeader';
import { mountTableSelect } from '../components/ClientTableSelect';
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
    // Flecha atrás siempre = pantalla anterior (historial), no un destino fijo
    if (action === 'volver' || action === 'atras') return '__back__';
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

  // Subir el árbol: preferir nombres de producto sobre pestañas de categoría
  // (p. ej. no elegir “Hamburguesas” del encabezado de sección al tocar una tarjeta).
  const categoryTabs = new Set(['hamburguesas', 'los favoritos', 'favoritos', 'whoppers']);
  el = target;
  while (el && el !== root) {
    const labels = ownShortLabels(el);
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

/**
 * Ancla la barra de carrito de categoría al borde inferior del phone-frame
 * (fuera del scroll), para que quede siempre visible aunque haya pocos platos.
 */
function pinCategoryCartBar(root: HTMLElement) {
  const bar = findCategoryCartBar(root);
  if (!bar || bar.hasAttribute('data-proto-cart-clone')) return;

  const scroll = root.querySelector<HTMLElement>('[data-proto-scroll]');
  const barH = Math.max(
    bar.offsetHeight || Number.parseFloat(bar.style.height) || 0,
    90,
  );

  let clone = root.querySelector<HTMLElement>(':scope > [data-proto-cart-clone]');
  if (!clone) {
    clone = bar.cloneNode(true) as HTMLElement;
    clone.removeAttribute('data-proto-cart-source');
    clone.setAttribute('data-proto-cart-clone', '1');
    clone.setAttribute('data-proto-sticky-cart', '1');
    root.appendChild(clone);
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
    const tabPad = root.querySelector('[data-proto-tabbar-clone]') ? 79 : 0;
    scroll.style.paddingBottom = `${barH + tabPad + 8}px`;
  }
}

/**
 * Clona la tab bar como hija directa del phone-frame (fuera del scroll).
 * El original se oculta para no pelear con React.
 */
function pinClientTabBar(root: HTMLElement) {
  const tab = findClientTabBar(root);
  if (!tab) return;

  const barH = tab.offsetHeight || Number.parseFloat(tab.style.height) || 79;
  const scroll = root.querySelector<HTMLElement>('[data-proto-scroll]');

  // Ocultar original (sigue en el árbol de React)
  tab.setAttribute('data-proto-tabbar-source', '1');
  tab.style.setProperty('visibility', 'hidden', 'important');
  tab.style.setProperty('pointer-events', 'none', 'important');

  let clone = root.querySelector<HTMLElement>(':scope > [data-proto-tabbar-clone]');
  if (!clone) {
    clone = tab.cloneNode(true) as HTMLElement;
    clone.removeAttribute('data-proto-tabbar-source');
    clone.setAttribute('data-proto-tabbar-clone', '1');
    clone.setAttribute('data-proto-fixed-tabbar', '1');
    root.appendChild(clone);
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

  if (scroll) {
    scroll.style.paddingBottom = `${barH}px`;
  }
}

/** Oculta la barra de estado del mockup (hora 9:41 + iconos de señal/batería). */
function hideStatusBars(root: HTMLElement) {
  const scope =
    root.querySelector<HTMLElement>('[data-proto-scroll]') || root;

  scope.querySelectorAll('span').forEach((el) => {
    if (el.childElementCount > 0) return;
    const t = (el.textContent || '').trim();
    if (!/^\d{1,2}:\d{2}$/.test(t)) return;

    let node: HTMLElement | null = el.parentElement;
    for (let i = 0; i < 6 && node && node !== root; i++) {
      const h =
        node.offsetHeight || Number.parseFloat(node.style.height) || 0;
      const top = node.style.top;
      const svgCount = node.querySelectorAll('svg').length;
      // Barra de status: fila corta con hora + ≥2 iconos (señal/wifi/batería)
      const looksStatus =
        svgCount >= 2 &&
        (h === 0 || h >= 36) &&
        (h === 0 || h <= 56) &&
        (top === '0px' ||
          top === '0' ||
          node.style.position === 'absolute' ||
          node.style.position === 'relative' ||
          !node.style.position);

      if (looksStatus) {
        node.setAttribute('data-proto-status-bar', '1');
        node.style.setProperty('display', 'none', 'important');

        const parent = node.parentElement;
        if (parent) {
          Array.from(parent.children).forEach((sib) => {
            if (!(sib instanceof HTMLElement) || sib === node) return;
            const sibTop = Number.parseFloat(sib.style.top || '');
            if (!Number.isNaN(sibTop) && sibTop >= 24 && sibTop <= 64) {
              sib.style.top = '8px';
            }
          });
        }
        break;
      }
      node = node.parentElement;
    }
  });
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

  root.querySelectorAll<HTMLElement>('[data-proto-action="volver"]').forEach((el) => {
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
    markBack(el);
  });
}

/** Expande el hit area a la tarjeta/opción contenedora (pago, combo, producto). */
function expandOptionHitArea(el: HTMLElement, actionLabel: string, root: HTMLElement) {
  let node: HTMLElement | null = el.parentElement;
  let card: HTMLElement | null = null;
  while (node && node !== root) {
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
  pinClientTabBar(root);

  // Barra «Tu carrito…» de menús de categoría → anclada al borde inferior
  pinCategoryCartBar(root);

  // Quitar status bar (hora / señal / batería) de todas las pantallas
  hideStatusBars(root);

  // Flechas atrás: hit area amplia + z-index para que no las tape el contenido
  pinBackButtons(root);

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
    const action = el.getAttribute('data-proto-action');
    if (action === 'volver' || action === 'atras') {
      const hit =
        (el.closest('[data-figma-id]') as HTMLElement | null) ||
        (el.parentElement as HTMLElement | null);
      if (hit) {
        hit.setAttribute('data-proto-action', 'volver');
        markPressable(hit);
      }
      markPressable(el);
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

    const norm = normalizeLabel(text);
    if (norm === 'agregar al pedido' || norm === 'agregar') {
      el.setAttribute('data-proto-action', 'agregar');
      markPressable(el);
      expandOptionHitArea(el, 'agregar', root);
      return;
    }

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

    // Flecha atrás gana siempre (aunque haya overlays / mismo screenId)
    if (
      target.closest('[data-proto-action="volver"]') ||
      target.closest('[data-proto-action="atras"]')
    ) {
      e.preventDefault();
      e.stopPropagation();
      navigate('__back__');
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

    const dest = resolveFromClick(target, root, screenId);
    if (!dest) {
      return;
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

  if (screenId === 'tu-carrito-local' || screenId === 'tu-carrito-domicilio') {
    cleanups.push(
      mountLiveCart(root, (id) => {
        navigate(id);
      }),
    );
  } else if (screenId === 'escaneo-qr') {
    cleanups.push(mountTableSelect(root));
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
