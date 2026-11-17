const BRAND = '#2457c5';
const INK = '#29241f';
const MUTED = '#686561';

type NavId = 'inventario' | 'historial' | 'estadisticas';

type Props = {
  active?: NavId;
};

const items: { id: NavId; label: string; action: string }[] = [
  { id: 'inventario', label: 'Inventario', action: 'Inventario' },
  { id: 'historial', label: 'Historial', action: 'Historial' },
  { id: 'estadisticas', label: 'Estadísticas', action: 'Estadisticas' },
];

function Icon({ id, active }: { id: NavId; active: boolean }) {
  const color = active ? BRAND : MUTED;
  if (id === 'inventario') {
    return (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 7h16M4 12h16M4 17h10"
          stroke={color}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === 'historial') {
    return (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx={12} cy={12} r={8} stroke={color} strokeWidth={1.8} />
        <path d="M12 8v4l3 2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19V9l4 3 4-6 4 5 4-3v11H4Z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
        fill="transparent"
      />
    </svg>
  );
}

/** Sidebar admin (desktop ≥1024). */
export function AdminDesktopNav({ active = 'inventario' }: Props) {
  return (
    <aside className="app-sidebar app-sidebar--admin" aria-label="Navegación admin">
      <div className="app-sidebar__brand">
        <span className="app-sidebar__logo app-sidebar__logo--admin">Whopper King</span>
        <span className="app-sidebar__tag">Panel · Admin</span>
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
      <button
        type="button"
        data-proto-action="Cliente"
        className="app-sidebar__item app-sidebar__switch"
      >
        Ir a cliente
      </button>
    </aside>
  );
}

export default AdminDesktopNav;
