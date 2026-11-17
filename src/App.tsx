import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from 'react';
import { AdminDesktopNav } from '@/shared/components/layout/AdminDesktopNav';
import { ClientBottomTabBar } from '@/shared/components/layout/ClientBottomTabBar';
import { DesktopAdminApp } from './desktop/DesktopAdminApp';
import { DesktopClientApp } from './desktop/DesktopClientApp';
import { enhanceFrame } from '@/shared/interactive/enhanceDom';
import { shouldReplaceHistory, type NavTarget } from '@/shared/interactive/navMap';
import {
  adminNavFor,
  getBreakpoint,
  isAdminScreen,
  type Breakpoint,
} from './responsive';
import { screenById, screens } from './screens';
import { applyDocumentSeo, pageHeadingFor } from './seo';

/** Ancho de diseño Figma (no se estira; se escala). */
const DESIGN_W = 402;
/** Alto de referencia del viewport del prototipo. */
const DESIGN_H = 844;

const SHEETS = new Set([
  'confirmar-eliminacion',
  'ajuste-mov-184',
  'ajuste-ped-1048',
  'eliminacion-mov-184',
  'elim-cuenta',
  'sms-telefono',
  'correo-cambiar',
  'recuperar-contrasena',
]);

const CENTER_MODALS = new Set(['no-disponible']);

const BOTTOM_SHEETS = new Set([
  'elim-cuenta',
  'sms-telefono',
  'correo-cambiar',
  'recuperar-contrasena',
]);

const LIGHT_SCRIM_SHEETS = new Set([
  'sms-telefono',
  'correo-cambiar',
  'recuperar-contrasena',
]);

const OVERLAYS = new Set([...SHEETS, ...CENTER_MODALS]);

const INJECT_TAB_BAR = new Set<string>();

function readHash(): string {
  const h = window.location.hash.replace(/^#\/?/, '').trim();
  return h && screenById[h] ? h : 'whopper-inicio';
}

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(() => getBreakpoint());
  useEffect(() => {
    const onResize = () => setBp(getBreakpoint());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return bp;
}

/**
 * Escala el marco 402×844 al stage.
 * - mobile: llena el ancho (altura del frame = 100dvh/scale → scroll interno)
 * - tablet/admin desktop: cabe entero en el área disponible
 */
function useFitScale(
  stageRef: RefObject<HTMLDivElement | null>,
  mode: 'mobile' | 'fit' | 'off',
) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    if (mode === 'off') {
      setScale(1);
      return;
    }
    const stage = stageRef.current;
    if (!stage) {
      setScale(1);
      return;
    }

    const measure = () => {
      if (mode === 'mobile') {
        const aw = Math.max(stage.clientWidth || window.innerWidth, 1);
        const next = aw / DESIGN_W;
        setScale(Number.isFinite(next) ? Math.min(Math.max(next, 0.5), 1.2) : 1);
        return;
      }
      const padX = 48;
      const padY = 24;
      const aw = Math.max(stage.clientWidth - padX, 120);
      const ah = Math.max(stage.clientHeight - padY, 120);
      const next = Math.min(aw / DESIGN_W, ah / DESIGN_H);
      setScale(Number.isFinite(next) ? Math.min(Math.max(next, 0.5), 1.35) : 1);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [stageRef, mode]);

  return scale;
}

function App() {
  const [currentId, setCurrentId] = useState(readHash);
  const [history, setHistory] = useState<string[]>(() => {
    const id = readHash();
    return id === 'whopper-inicio' ? ['whopper-inicio'] : ['whopper-inicio', id];
  });
  const bp = useBreakpoint();
  const isDesktop = bp === 'desktop';
  const isMobile = bp === 'mobile';
  const shellRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef(history);
  historyRef.current = history;
  const currentIdRef = useRef(currentId);
  currentIdRef.current = currentId;

  const current = screenById[currentId] ?? screens[0];
  const Screen = current.Component;
  const isCenterModal = CENTER_MODALS.has(current.id);
  const isBottomSheet = BOTTOM_SHEETS.has(current.id);
  const isFrameOverlay = isCenterModal || isBottomSheet;
  const isOverlay = OVERLAYS.has(current.id);
  const showInjectedTabBar = INJECT_TAB_BAR.has(current.id);
  const adminMode =
    isAdminScreen(current.id) ||
    (isOverlay && isAdminScreen(history[history.length - 2] || ''));
  const underForAdmin =
    isOverlay &&
    [...history].reverse().find((id) => id !== current.id && !OVERLAYS.has(id));
  const sidebarAdmin = adminMode || (underForAdmin ? isAdminScreen(underForAdmin) : false);

  /** PC: UI web nativa para cliente y admin (no marco móvil). */
  const useNativeClient = isDesktop && !sidebarAdmin;
  const useNativeAdmin = isDesktop && sidebarAdmin;
  const useNativeDesktop = useNativeClient || useNativeAdmin;

  const scale = useFitScale(
    stageRef,
    useNativeDesktop ? 'off' : isMobile ? 'mobile' : 'fit',
  );

  const underId =
    isOverlay
      ? [...history].reverse().find((id) => id !== current.id && !OVERLAYS.has(id)) ||
        (isCenterModal
          ? 'whopper-inicio'
          : current.id === 'elim-cuenta'
            ? 'privacidad'
            : LIGHT_SCRIM_SHEETS.has(current.id)
              ? 'login'
              : 'historial-movimientos')
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

  useEffect(() => {
    applyDocumentSeo(current.id, current.name);
  }, [current.id, current.name]);

  useLayoutEffect(() => {
    if (useNativeDesktop) return;
    const root = shellRef.current;
    if (!root) return;
    const cleanup = enhanceFrame(root, current.id, navigate);
    return () => cleanup();
  }, [current.id, navigate, bp, scale, useNativeDesktop]);

  const heading = pageHeadingFor(current.id, current.name);

  if (useNativeClient) {
    return (
      <div className="app-shell app-shell--desktop app-shell--native-desktop" data-breakpoint="desktop">
        <h1 className="sr-only">{heading}</h1>
        <main>
          <DesktopClientApp screenId={current.id} navigate={navigate} />
        </main>
      </div>
    );
  }

  if (useNativeAdmin) {
    return (
      <div
        className="app-shell app-shell--desktop app-shell--native-desktop app-shell--native-admin"
        data-breakpoint="desktop"
      >
        <h1 className="sr-only">{heading}</h1>
        <main>
          <DesktopAdminApp screenId={current.id} navigate={navigate} />
        </main>
      </div>
    );
  }

  const showSidebar = isDesktop && sidebarAdmin && !isCenterModal;
  const scaledW = DESIGN_W * scale;
  const scaledH = DESIGN_H * scale;

  return (
    <div
      ref={shellRef}
      className={`app-shell app-shell--${bp}${showSidebar ? ' app-shell--with-sidebar' : ''}${
        sidebarAdmin ? ' app-shell--admin' : ' app-shell--client'
      }`}
      data-breakpoint={bp}
    >
      {showSidebar ? (
        <AdminDesktopNav
          active={adminNavFor(underId && isAdminScreen(underId) ? underId : current.id)}
        />
      ) : null}

      <div ref={stageRef} className="app-shell__stage">
        <div
          className="app-shell__scaler"
          style={{
            width: isMobile ? '100%' : scaledW,
            height: isMobile ? '100dvh' : scaledH,
            position: 'relative',
          }}
        >
          <div
            key={current.id}
            className={`phone-frame app-main${isMobile ? ' app-main--mobile' : ''}`}
            style={{
              width: DESIGN_W,
              height: isMobile ? `calc(100dvh / ${scale})` : DESIGN_H,
              position: 'absolute',
              left: 0,
              top: 0,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              background: '#fffcf8',
              overflow: 'hidden',
              boxShadow: isMobile ? 'none' : '0 12px 40px rgba(0,0,0,0.28)',
              borderRadius: isMobile ? 0 : 16,
            }}
          >
            <h1 className="sr-only">{heading}</h1>
            <main
              className="phone-scroll"
              data-proto-scroll="1"
              data-proto-has-tabbar={showInjectedTabBar ? '1' : undefined}
              style={{
                position: 'absolute',
                inset: 0,
                overflowX: 'hidden',
                overflowY: isFrameOverlay ? 'hidden' : 'auto',
                paddingBottom: showInjectedTabBar ? 96 : undefined,
                boxSizing: 'border-box',
                pointerEvents: isFrameOverlay ? 'none' : undefined,
              }}
            >
              {isOverlay && Under ? (
                <>
                  <div
                    style={{
                      pointerEvents: 'none',
                      filter: isFrameOverlay ? undefined : 'brightness(0.72)',
                    }}
                  >
                    <Under />
                  </div>
                  {!isFrameOverlay ? (
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
                      <div style={{ width: '100%', maxWidth: DESIGN_W }}>
                        <Screen />
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <Screen />
              )}
            </main>
            {showInjectedTabBar ? <ClientBottomTabBar active="inicio" /> : null}
            {isFrameOverlay && Under ? (
              <div
                data-proto-frame-overlay="1"
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 120,
                  background: LIGHT_SCRIM_SHEETS.has(current.id)
                    ? 'rgba(0, 0, 0, 0.15)'
                    : 'rgba(12, 14, 20, 0.48)',
                  backdropFilter: LIGHT_SCRIM_SHEETS.has(current.id)
                    ? 'blur(1px)'
                    : 'blur(8px)',
                  WebkitBackdropFilter: LIGHT_SCRIM_SHEETS.has(current.id)
                    ? 'blur(1px)'
                    : 'blur(8px)',
                  display: 'flex',
                  alignItems: isBottomSheet ? 'flex-end' : 'center',
                  justifyContent: 'center',
                  padding: isBottomSheet ? 0 : 20,
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: isBottomSheet ? DESIGN_W : 362,
                  }}
                >
                  <Screen />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
