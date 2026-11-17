/** Selector de categorías de Estadísticas — fiel a Figma 733:8243 (Ventanas de estadisticas). */
import type { CSSProperties, ReactNode } from 'react';

export type StatsTabId = 'ventas-hoy' | 'ventas-canal' | 'platos-insumos';

const BLUE = '#2457c5';
const GRAY = '#e6e8ea';
const INK = '#29241f';
const ICON = '#434655';

type Props = {
  active: StatsTabId;
};

const wrap: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 390,
  alignSelf: 'center',
  minWidth: 0,
  padding: '15px 25px',
  boxSizing: 'border-box',
  gap: 10,
  flexShrink: 0,
  background: '#ffffff',
  overflow: 'hidden',
};

const titleWrap: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 362,
  padding: '0 4px',
  boxSizing: 'border-box',
  overflow: 'hidden',
};

const title: CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontSize: 20,
  fontWeight: 800,
  lineHeight: '24px',
  color: INK,
  width: '100%',
};

const row: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: 362,
  padding: '0 30px',
  boxSizing: 'border-box',
  overflow: 'hidden',
};

const cell: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 65,
  gap: 7,
  flexShrink: 0,
  cursor: 'pointer',
};

const labelBox: CSSProperties = {
  width: 65,
  minHeight: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontSize: 12,
  fontWeight: 500,
  lineHeight: '15px',
  textAlign: 'center',
  color: INK,
  overflow: 'visible',
};

function IconBox({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <div
      style={{
        width: 54,
        height: 54,
        borderRadius: 12,
        background: active ? BLUE : GRAY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        filter: active ? 'drop-shadow(0px 1px 2px rgba(0,0,0,0.05))' : undefined,
      }}
    >
      {children}
    </div>
  );
}

function ChartIcon({ color }: { color: string }) {
  return (
    <svg width={16.5} height={16.5} viewBox="0 0 16.5 16.5" aria-hidden>
      <path
        d="M0 16.5L0 14.667L1.833 12.833L1.833 16.5L0 16.5ZM3.667 16.5L3.667 11L5.5 9.167L5.5 16.5L3.667 16.5ZM7.333 16.5L7.333 9.167L9.167 11.023L9.167 16.5L7.333 16.5ZM11 16.5L11 11.023L12.833 9.19L12.833 16.5L11 16.5ZM14.667 16.5L14.667 7.333L16.5 5.5L16.5 16.5L14.667 16.5ZM0 11.756L0 9.167L6.417 2.75L10.083 6.417L16.5 0L16.5 2.59L10.083 9.006L6.417 5.34L0 11.756Z"
        fill={color}
      />
    </svg>
  );
}

function CanalIcon({ color }: { color: string }) {
  return (
    <svg width={22} height={12.833} viewBox="0 0 22 12.833" aria-hidden>
      <path
        d="M3.667 12.833C2.658 12.833 1.795 12.474 1.077 11.756C0.359 11.038 0 10.175 0 9.167C0 8.296 0.279 7.524 0.836 6.852C1.394 6.18 2.108 5.76 2.979 5.592L2.338 5.042L0 5.042L0 3.667L4.125 3.667L6.417 5.042L10.083 3.667L12.971 3.667L11.55 1.833L9.167 1.833L9.167 0L12.421 0L14.346 2.475L17.417 0.917L17.417 3.667L15.308 3.667L16.913 5.775C17.142 5.683 17.375 5.615 17.611 5.569C17.848 5.523 18.089 5.5 18.333 5.5C19.342 5.5 20.205 5.859 20.923 6.577C21.641 7.295 22 8.158 22 9.167C22 10.175 21.641 11.038 20.923 11.756C20.205 12.474 19.342 12.833 18.333 12.833C17.325 12.833 16.462 12.474 15.744 11.756C15.026 11.038 14.667 10.175 14.667 9.167C14.667 8.754 14.739 8.353 14.884 7.964C15.03 7.574 15.232 7.211 15.492 6.875L15.033 6.325L11.917 11L9.167 11L7.333 9.396C7.257 10.358 6.867 11.172 6.165 11.836C5.462 12.501 4.629 12.833 3.667 12.833ZM3.667 11C4.171 11 4.602 10.82 4.961 10.461C5.32 10.102 5.5 9.671 5.5 9.167C5.5 8.663 5.32 8.231 4.961 7.872C4.602 7.513 4.171 7.333 3.667 7.333C3.163 7.333 2.731 7.513 2.372 7.872C2.013 8.231 1.833 8.663 1.833 9.167C1.833 9.671 2.013 10.102 2.372 10.461C2.731 10.82 3.163 11 3.667 11ZM18.333 11C18.838 11 19.269 10.82 19.628 10.461C19.987 10.102 20.167 9.671 20.167 9.167C20.167 8.663 19.987 8.231 19.628 7.872C19.269 7.513 18.838 7.333 18.333 7.333C17.829 7.333 17.398 7.513 17.039 7.872C16.68 8.231 16.5 8.663 16.5 9.167C16.5 9.671 16.68 10.102 17.039 10.461C17.398 10.82 17.829 11 18.333 11ZM10.404 5.5L7.104 6.738L10.404 5.5L13.383 5.5L10.404 5.5ZM10.954 9.167L13.383 5.5L10.404 5.5L7.104 6.738L9.854 9.167L10.954 9.167Z"
        fill={color}
      />
    </svg>
  );
}

function PlatosIcon({ color }: { color: string }) {
  return (
    <svg width={19.5} height={15.6} viewBox="0 0 19.525 15.583" aria-hidden>
      <path
        d="M2.223 6.417C2.437 5.867 2.471 5.378 2.326 4.95C2.181 4.522 1.933 4.094 1.581 3.667C1.077 3.056 0.745 2.479 0.584 1.936C0.424 1.394 0.397 0.749 0.504 0L2.292 0C2.169 0.581 2.15 1.054 2.234 1.421C2.318 1.788 2.536 2.185 2.888 2.612C3.468 3.315 3.839 3.938 3.999 4.48C4.159 5.023 4.163 5.668 4.01 6.417L2.223 6.417ZM5.89 6.417C6.103 5.867 6.142 5.378 6.004 4.95C5.867 4.522 5.622 4.094 5.271 3.667C4.767 3.056 4.431 2.479 4.262 1.936C4.094 1.394 4.064 0.749 4.171 0L5.958 0C5.836 0.581 5.817 1.054 5.901 1.421C5.985 1.788 6.203 2.185 6.554 2.612C7.135 3.315 7.505 3.938 7.666 4.48C7.826 5.023 7.83 5.668 7.677 6.417L5.89 6.417ZM9.556 6.417C9.77 5.867 9.808 5.378 9.671 4.95C9.533 4.522 9.289 4.094 8.938 3.667C8.433 3.056 8.097 2.479 7.929 1.936C7.761 1.394 7.731 0.749 7.838 0L9.625 0C9.503 0.581 9.484 1.054 9.568 1.421C9.652 1.788 9.869 2.185 10.221 2.612C10.801 3.315 11.172 3.938 11.332 4.48C11.493 5.023 11.497 5.668 11.344 6.417L9.556 6.417ZM2.75 15.583C1.986 15.583 1.337 15.316 0.802 14.781C0.267 14.247 0 13.597 0 12.833L0 8.25L12.856 8.25C12.933 7.731 13.139 7.276 13.475 6.886C13.811 6.497 14.224 6.218 14.712 6.05L18.952 4.629L19.525 6.371L15.285 7.792C15.102 7.853 14.953 7.964 14.839 8.124C14.724 8.284 14.667 8.464 14.667 8.663L14.667 12.833C14.667 13.597 14.399 14.247 13.865 14.781C13.33 15.316 12.681 15.583 11.917 15.583L2.75 15.583ZM2.75 13.75L11.917 13.75C12.176 13.75 12.394 13.662 12.57 13.486C12.745 13.311 12.833 13.093 12.833 12.833L12.833 10.083L1.833 10.083L1.833 12.833C1.833 13.093 1.921 13.311 2.097 13.486C2.273 13.662 2.49 13.75 2.75 13.75Z"
        fill={color}
      />
    </svg>
  );
}

export function StatsCategoryTabs({ active }: Props) {
  const c = (on: boolean) => (on ? '#ffffff' : ICON);

  return (
    <div data-figma-id="733:8243" style={wrap}>
      <div style={titleWrap}>
        <div style={title}>¿Que estadisticas quiere ver?</div>
      </div>
      <div style={row}>
        <div style={cell} data-stats-tab="ventas-hoy">
          <IconBox active={active === 'ventas-hoy'}>
            <ChartIcon color={c(active === 'ventas-hoy')} />
          </IconBox>
          <div style={labelBox}>
            <span>Ventas hoy</span>
          </div>
        </div>

        <div style={cell} data-stats-tab="ventas-canal">
          <IconBox active={active === 'ventas-canal'}>
            <CanalIcon color={c(active === 'ventas-canal')} />
          </IconBox>
          <div style={labelBox}>
            <span>Ventas por</span>
            <span>canal</span>
          </div>
        </div>

        <div style={cell} data-stats-tab="platos-insumos">
          <IconBox active={active === 'platos-insumos'}>
            <PlatosIcon color={c(active === 'platos-insumos')} />
          </IconBox>
          <div style={labelBox}>
            <span>Platos e</span>
            <span>insumos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
