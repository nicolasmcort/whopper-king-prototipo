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

/** Menús de categoría: no traen tab bar en Figma; la inyectamos. */
const INJECT_TAB_BAR = new Set([
  'menu-burgers',
  'menu-burgers-00',
  'menu-hamburguesas',
  'menu-almuerzo',
  'menu-pollo',
  'menu-carne',
  'menu-pescado',
  'menu-bebidas',
]);

function readHash(): string {
  const h = window.location.hash.replace(/^#\/?/, '').trim();
  return h && screenById[h] ? h : 'whopper-inicio';
}

function App() {
  const [currentId, setCurrentId] = useState(readHash);
  const [history, setHistory] = useState<string[]>(['whopper-inicio']);
  const frameRef = useRef<HTMLDivElement>(null);

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

  const go = useCallback((id: string, replace = false) => {
    if (!screenById[id]) return;
    setCurrentId(id);
    setHistory((h) => {
      if (h[h.length - 1] === id) return h;
      if (replace && h.length > 0) return [...h.slice(0, -1), id];
      return [...h, id];
    });
    window.location.hash = `/${id}`;
  }, []);

  const back = useCallback(() => {
    setHistory((h) => {
      if (h.length <= 1) {
        go('whopper-inicio');
        return h;
      }
      const next = h.slice(0, -1);
      const id = next[next.length - 1];
      setCurrentId(id);
      window.location.hash = `/${id}`;
      return next;
    });
  }, [go]);

  const navigate = useCallback(
    (target: NavTarget) => {
      if (target === '__back__') {
        back();
        return;
      }
      // Misma pantalla (p. ej. − en carrito): no remount
      if (target === currentId) return;
      const replace = shouldReplaceHistory(currentId, target);
      go(target, replace);
    },
    [back, go, currentId],
  );

  useEffect(() => {
    const onHash = () => {
      const id = readHash();
      setCurrentId(id);
      setHistory((h) => (h[h.length - 1] === id ? h : [...h, id]));
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
