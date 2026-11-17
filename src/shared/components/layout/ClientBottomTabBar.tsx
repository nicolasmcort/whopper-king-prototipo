import type { ReactNode } from 'react';
import { ClientCartIconOutline } from '@/shared/components/ui/ClientCartIcon';

const MUTED = '#82776e';
const ACTIVE = '#ed6047';

type TabId = 'inicio' | 'buscar' | 'carrito' | 'cuenta';

type Props = {
  active?: TabId;
};

function TabIcon({
  label,
  active,
  children,
}: {
  label: string;
  active: boolean;
  children: ReactNode;
}) {
  const color = active ? ACTIVE : MUTED;
  return (
    <div
      data-proto-action={label}
      style={{
        width: 78,
        height: 39,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          color,
          whiteSpace: 'pre',
          fontSize: 10,
          fontWeight: active ? 700 : 500,
          lineHeight: '12px',
        }}
      >
        {label}
      </span>
    </div>
  );
}

/** Barra inferior Inicio / Buscar / Carrito / Mi cuenta para pantallas de menú. */
export function ClientBottomTabBar({ active = 'inicio' }: Props) {
  return (
    <div
      data-proto-fixed-tabbar="1"
      data-proto-injected-tabbar="1"
      style={{
        background: '#ffffff',
        boxShadow: 'inset 0 1px 0 0 #ebe4dc',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 79,
        zIndex: 60,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 14px',
          boxSizing: 'border-box',
          height: 55,
          flexShrink: 0,
        }}
      >
        <TabIcon label="Inicio" active={active === 'inicio'}>
          <svg width={18} height={19} viewBox="0 0 18 19" fill="none" aria-hidden>
            <path
              d="M12 19L12 11C12 10.735 11.895 10.48 11.707 10.293C11.52 10.105 11.265 10 11 10L7 10C6.735 10 6.48 10.105 6.293 10.293C6.105 10.48 6 10.735 6 11L6 19M0 8C0 7.71 0.063 7.422 0.186 7.158C0.308 6.894 0.487 6.66 0.709 6.472L7.709 0.472C8.07 0.167 8.527 0 9 0C9.473 0 9.93 0.167 10.291 0.472L17.291 6.472C17.513 6.66 17.692 6.894 17.814 7.158C17.937 7.422 18 7.71 18 8L18 17C18 17.531 17.789 18.04 17.414 18.415C17.039 18.79 16.53 19 16 19L2 19C1.47 19 0.961 18.79 0.586 18.415C0.211 18.04 0 17.531 0 17L0 8Z"
              stroke={active === 'inicio' ? ACTIVE : MUTED}
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="transparent"
            />
          </svg>
        </TabIcon>
        <TabIcon label="Buscar" active={active === 'buscar'}>
          <svg width={18} height={18} viewBox="0 0 18 18" fill="none" aria-hidden>
            <path
              d="M18 18L13.66 13.66M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"
              stroke={active === 'buscar' ? ACTIVE : MUTED}
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="transparent"
            />
          </svg>
        </TabIcon>
        <TabIcon label="Carrito" active={active === 'carrito'}>
          <ClientCartIconOutline size={20} color={active === 'carrito' ? ACTIVE : MUTED} />
        </TabIcon>
        <TabIcon label="Mi cuenta" active={active === 'cuenta'}>
          <svg width={16} height={18} viewBox="0 0 16 18" fill="none" aria-hidden>
            <path
              d="M8 10C10.761 10 13 7.761 13 5C13 2.239 10.761 0 8 0C5.239 0 3 2.239 3 5C3 7.761 5.239 10 8 10C10.122 10 12.157 10.843 13.657 12.343C15.157 13.843 16 15.878 16 18M8 10C5.878 10 3.843 10.843 2.343 12.343C0.843 13.843 0 15.878 0 18"
              stroke={active === 'cuenta' ? ACTIVE : MUTED}
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="miter"
              fill="transparent"
            />
          </svg>
        </TabIcon>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 24,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 126,
            height: 4,
            background: '#29241f',
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
}

export default ClientBottomTabBar;
