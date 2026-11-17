import { ClientCartIconOutline } from '@/shared/components/ui/ClientCartIcon';

const BRAND = '#ed6047';
const INK = '#29241f';
const MUTED = '#82776e';
const BG = '#fffcf8';

type TabId = 'inicio' | 'buscar' | 'carrito' | 'cuenta';

type Props = {
  active?: TabId;
};

const items: { id: TabId; label: string; action: string }[] = [
  { id: 'inicio', label: 'Inicio', action: 'Inicio' },
  { id: 'buscar', label: 'Buscar', action: 'Buscar' },
  { id: 'carrito', label: 'Carrito', action: 'Carrito' },
  { id: 'cuenta', label: 'Mi cuenta', action: 'Mi cuenta' },
];

function Icon({ id, active }: { id: TabId; active: boolean }) {
  const color = active ? BRAND : MUTED;
  if (id === 'inicio') {
    return (
      <svg width={20} height={20} viewBox="0 0 18 19" fill="none" aria-hidden>
        <path
          d="M12 19L12 11C12 10.735 11.895 10.48 11.707 10.293C11.52 10.105 11.265 10 11 10L7 10C6.735 10 6.48 10.105 6.293 10.293C6.105 10.48 6 10.735 6 11L6 19M0 8C0 7.71 0.063 7.422 0.186 7.158C0.308 6.894 0.487 6.66 0.709 6.472L7.709 0.472C8.07 0.167 8.527 0 9 0C9.473 0 9.93 0.167 10.291 0.472L17.291 6.472C17.513 6.66 17.692 6.894 17.814 7.158C17.937 7.422 18 7.71 18 8L18 17C18 17.531 17.789 18.04 17.414 18.415C17.039 18.79 16.53 19 16 19L2 19C1.47 19 0.961 18.79 0.586 18.415C0.211 18.04 0 17.531 0 17L0 8Z"
          stroke={color}
          strokeWidth={1.8}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
    );
  }
  if (id === 'buscar') {
    return (
      <svg width={20} height={20} viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M18 18L13.66 13.66M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"
          stroke={color}
          strokeWidth={1.8}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
    );
  }
  if (id === 'carrito') {
    return <ClientCartIconOutline size={20} color={color} />;
  }
  return (
    <svg width={18} height={20} viewBox="0 0 16 18" fill="none" aria-hidden>
      <path
        d="M8 10C10.761 10 13 7.761 13 5C13 2.239 10.761 0 8 0C5.239 0 3 2.239 3 5C3 7.761 5.239 10 8 10C10.122 10 12.157 10.843 13.657 12.343C15.157 13.843 16 15.878 16 18M8 10C5.878 10 3.843 10.843 2.343 12.343C0.843 13.843 0 15.878 0 18"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        fill="transparent"
      />
    </svg>
  );
}

/** Sidebar cliente (desktop ≥1024). */
export function ClientDesktopNav({ active = 'inicio' }: Props) {
  return (
    <aside className="app-sidebar app-sidebar--client" aria-label="Navegación cliente">
      <div className="app-sidebar__brand">
        <span className="app-sidebar__logo">Whopper King</span>
        <span className="app-sidebar__tag">Pedido · Pasto</span>
      </div>
      <nav className="app-sidebar__nav">
        {items.map((item) => {
          const on = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              data-proto-action={item.action}
              className={`app-sidebar__item${on ? ' is-active' : ''}`}
              style={{ color: on ? BRAND : INK }}
            >
              <Icon id={item.id} active={on} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="app-sidebar__foot" style={{ color: MUTED, background: BG }}>
        Comida 100% hecha con amor
      </div>
    </aside>
  );
}

export default ClientDesktopNav;
