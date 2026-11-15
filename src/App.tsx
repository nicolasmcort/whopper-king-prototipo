import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ClientBottomTabBar } from './components/ClientBottomTabBar';
import { enhanceFrame } from './interactive/enhanceDom';
import { shouldReplaceHistory, type NavTarget } from './interactive/navMap';
import { screenById, screens } from './screens';

/** Ancho del frame en Figma/MagicPath (móvil). */
const PHONE_W = 402;

/** Exportaciones que son solo el sheet/modal (sin chrome completo). */
const SHEETS = new Set([
  'confirmar-eliminacion',
  'ajuste-mov-184',
  'ajuste-ped-1048',
  'eliminacion-mov-184',
]);

/**
 * Tab bar Inicio/Buscar/Carrito/Mi cuenta inyectada.
 * Menús de categoría (almuerzo, burgers, …) NO: solo «Tu carrito está vacío».
 * Inicio / Mi cuenta / Carrito ya la traen en su propio frame.
 */
const INJECT_TAB_BAR = new Set<string>();

function readHash(): string {
  const h = window.location.hash.replace(/^#\/?/, '').trim();
  return h && screenById[h] ? h : 'whopper-inicio';
}

function App() {
  const [currentId, setCurrentId] = useState(readHash);
  const [history, setHistory] = useState<string[]>(() => {
    const id = readHash();
    return id === 'whopper-inicio' ? ['whopper-inicio'] : ['whopper-inicio', id];
  });
  const frameRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef(history);
  historyRef.current = history;
  const currentIdRef = useRef(currentId);
  currentIdRef.current = currentId;

  const current = screenById[currentId] ?? screens[0];
  const Screen = current.Component;
  const isSheet = SHEETS.has(current.id);
  const showInjectedTabBar = INJECT_TAB_BAR.has(current.id);

  const underId =
    isSheet
      ? [...history].reverse().find((id) => id !== current.id && !SHEETS.has(id)) ||
        'historial-movimientos'
      : null;
  const Under = underId ? screenById[underId]?.Component : null;

  const skipHashPush = useRef(false);

  const applyScreen = useCallback((id: string, nextHistory: string[]) => {
    if (!screenById[id]) return;
    historyRef.current = nextHistory;
    currentIdRef.current = id;
    setHistory(nextHistory);
    setCurrentId(id);
    const nextHash = `/${id}`;
    if (window.location.hash.replace(/^#/, '') !== nextHash) {
      skipHashPush.current = true;
      window.location.hash = nextHash;
    }
  }, []);

  const go = useCallback(
    (id: string, replace = false) => {
      if (!screenById[id]) return;
      const h = historyRef.current;
      let next: string[];
      if (h[h.length - 1] === id) next = h;
      else if (replace && h.length > 0) next = [...h.slice(0, -1), id];
      else next = [...h, id];
      applyScreen(id, next);
    },
    [applyScreen],
  );

  const back = useCallback(() => {
    const here = currentIdRef.current;
    let stack = [...historyRef.current];
    if (stack[stack.length - 1] !== here) stack.push(here);
    // Quitar la pantalla actual (y duplicados)
    while (stack.length > 0 && stack[stack.length - 1] === here) {
      stack.pop();
    }
    const id = stack.length > 0 ? stack[stack.length - 1] : 'whopper-inicio';
    if (!stack.length) stack = ['whopper-inicio'];
    applyScreen(id, stack);
  }, [applyScreen]);

  const navigate = useCallback(
    (target: NavTarget) => {
      if (target === '__back__') {
        back();
        return;
      }
      // Misma pantalla (p. ej. − en carrito): no remount
      if (target === currentIdRef.current) return;
      const replace = shouldReplaceHistory(currentIdRef.current, target);
      go(target, replace);
    },
    [back, go],
  );

  useEffect(() => {
    const onHash = () => {
      const id = readHash();
      if (skipHashPush.current) {
        skipHashPush.current = false;
        currentIdRef.current = id;
        setCurrentId(id);
        return;
      }
      // Navegación externa / botón atrás del browser
      const h = historyRef.current;
      const next = h[h.length - 1] === id ? h : [...h, id];
      historyRef.current = next;
      currentIdRef.current = id;
      setHistory(next);
      setCurrentId(id);
    };
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) window.location.hash = '/whopper-inicio';
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useLayoutEffect(() => {
    const root = frameRef.current;
    if (!root) return;
    const cleanup = enhanceFrame(root, current.id, navigate);
    return () => cleanup();
  }, [current.id, navigate]);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#1a2330',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '16px 0 32px',
        boxSizing: 'border-box',
      }}
    >
      <div
        ref={frameRef}
        key={current.id}
        className="phone-frame"
        style={{
          width: PHONE_W,
          maxWidth: '100%',
          height: 'min(844px, calc(100vh - 32px))',
          background: '#f7f9fb',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        }}
      >
        {/* El scroll vive aquí; la tab bar se ancla al phone-frame (no scrollea) */}
        <div
          className="phone-scroll"
          data-proto-scroll="1"
          data-proto-has-tabbar={showInjectedTabBar ? '1' : undefined}
          style={{
            position: 'absolute',
            inset: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
            // Tab bar fija (~79): padding para poder scrollear hasta ver el carrito completo
            paddingBottom: showInjectedTabBar ? 96 : undefined,
            boxSizing: 'border-box',
          }}
        >
          {isSheet && Under ? (
            <>
              <div style={{ pointerEvents: 'none', filter: 'brightness(0.72)' }}>
                <Under />
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15, 23, 42, 0.45)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  padding: 16,
                  boxSizing: 'border-box',
                  zIndex: 5,
                }}
              >
                <div style={{ width: '100%', maxWidth: PHONE_W }}>
                  <Screen />
                </div>
              </div>
            </>
          ) : (
            <Screen />
          )}
        </div>
        {showInjectedTabBar ? <ClientBottomTabBar active="inicio" /> : null}
      </div>
    </div>
  );
}

export default App;
