import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { enhanceFrame } from './interactive/enhanceDom';
import type { NavTarget } from './interactive/navMap';
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

function readHash(): string {
  const h = window.location.hash.replace(/^#\/?/, '').trim();
  return h && screenById[h] ? h : 'inventario';
}

function App() {
  const [currentId, setCurrentId] = useState(readHash);
  const [history, setHistory] = useState<string[]>(['inventario']);
  const frameRef = useRef<HTMLDivElement>(null);

  const current = screenById[currentId] ?? screens[0];
  const Screen = current.Component;
  const isSheet = SHEETS.has(current.id);

  const underId =
    isSheet
      ? [...history].reverse().find((id) => id !== current.id && !SHEETS.has(id)) ||
        'historial-movimientos'
      : null;
  const Under = underId ? screenById[underId]?.Component : null;

  const go = useCallback((id: string) => {
    if (!screenById[id]) return;
    setCurrentId(id);
    setHistory((h) => (h[h.length - 1] === id ? h : [...h, id]));
    window.location.hash = `/${id}`;
  }, []);

  const back = useCallback(() => {
    setHistory((h) => {
      if (h.length <= 1) {
        go('inventario');
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
      if (target === '__back__') back();
      else go(target);
    },
    [back, go],
  );

  useEffect(() => {
    const onHash = () => {
      const id = readHash();
      setCurrentId(id);
      setHistory((h) => (h[h.length - 1] === id ? h : [...h, id]));
    };
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) window.location.hash = '/inventario';
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useLayoutEffect(() => {
    const root = frameRef.current;
    if (!root) return;
    let cleanup: (() => void) | undefined;
    const t = window.setTimeout(() => {
      cleanup = enhanceFrame(root, current.id, navigate);
    }, 0);
    return () => {
      window.clearTimeout(t);
      cleanup?.();
    };
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
          overflowX: 'hidden',
          overflowY: 'auto',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
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
    </div>
  );
}

export default App;
