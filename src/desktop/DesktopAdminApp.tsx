import { useMemo, useState, type FormEvent } from 'react';
import { adminNavFor } from '../responsive';
import {
  getSelectedMovement,
  getSelectedOrder,
  getSelectedStock,
  MOVEMENTS,
  ORDERS,
  PROVIDERS,
  RECEIVERS,
  setSelectedMovement,
  setSelectedOrder,
  setSelectedStock,
  STATS_CHANNELS,
  STATS_INSUMOS_COST,
  STATS_NUMBERS,
  STATS_PLATES,
  STATS_PLATES_TOTAL_UNITS,
  STOCK,
  statusLabel,
  type StockStatus,
} from './adminCatalog';
import { PRODUCTS, RESTAURANT_LOGO, RESTAURANT_LOGO_LOCAL } from './catalog';
import './desktop.css';

function productImage(productId: string): string {
  return PRODUCTS.find((p) => p.id === productId)?.image ?? RESTAURANT_LOGO;
}

type NavFn = (id: string) => void;

type Props = {
  screenId: string;
  navigate: NavFn;
};

function Logo({ size = 36 }: { size?: number }) {
  return (
    <img
      className="dk-logo"
      src={RESTAURANT_LOGO}
      alt=""
      width={size}
      height={size}
      onError={(e) => {
        const el = e.currentTarget;
        if (el.src !== RESTAURANT_LOGO_LOCAL) el.src = RESTAURANT_LOGO_LOCAL;
      }}
    />
  );
}

function AdminTop({ screenId, navigate }: Props) {
  const active = adminNavFor(screenId);
  return (
    <header className="dk-top dk-top--admin">
      <button type="button" className="dk-brand" onClick={() => navigate('inventario')}>
        <Logo size={34} />
        <span className="dk-brand__text">
          <span className="dk-brand__name dk-brand__name--admin">Whopper King</span>
          <span className="dk-brand__tag">Panel · Admin</span>
        </span>
      </button>
      <nav className="dk-nav" aria-label="Admin">
        <button
          type="button"
          className={`dk-nav__btn${active === 'inventario' ? ' is-active' : ''}`}
          onClick={() => navigate('inventario')}
        >
          Inventario
        </button>
        <button
          type="button"
          className={`dk-nav__btn${active === 'historial' ? ' is-active' : ''}`}
          onClick={() => navigate('historial-movimientos')}
        >
          Historial
        </button>
        <button
          type="button"
          className={`dk-nav__btn${active === 'estadisticas' ? ' is-active' : ''}`}
          onClick={() => navigate('numeros-negocio')}
        >
          Estadísticas
        </button>
        <button
          type="button"
          className="dk-btn dk-btn--ghost dk-btn--admin-switch"
          onClick={() => navigate('whopper-inicio')}
        >
          Ir a cliente
        </button>
      </nav>
    </header>
  );
}

function statusClass(s: StockStatus): string {
  return `dk-status dk-status--${s}`;
}

function InventarioPage({ navigate }: { navigate: NavFn }) {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<'todos' | 'alerta'>('todos');

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return STOCK.filter((item) => {
      if (filter === 'alerta' && item.status === 'ok') return false;
      if (!needle) return true;
      return (
        item.name.toLowerCase().includes(needle) || item.code.toLowerCase().includes(needle)
      );
    });
  }, [q, filter]);

  return (
    <>
      <div className="dk-admin-head">
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">Stock</p>
          <h1>Inventario</h1>
          <p className="dk-hint">Consulta existencias, alertas y registra entradas o salidas.</p>
        </div>
        <div className="dk-admin-head__actions">
          <button type="button" className="dk-btn dk-btn--admin" onClick={() => navigate('agregar-existente')}>
            Agregar al inventario
          </button>
          <button type="button" className="dk-btn dk-btn--ghost" onClick={() => navigate('agregar-nuevo')}>
            Nuevo producto
          </button>
        </div>
      </div>

      <div className="dk-toolbar">
        <input
          className="dk-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar producto o código"
        />
        <div className="dk-pill-row" style={{ margin: 0 }}>
          <button
            type="button"
            className={`dk-pill${filter === 'todos' ? ' is-active-admin' : ''}`}
            onClick={() => setFilter('todos')}
          >
            Todos
          </button>
          <button
            type="button"
            className={`dk-pill${filter === 'alerta' ? ' is-active-admin' : ''}`}
            onClick={() => setFilter('alerta')}
          >
            En alerta
          </button>
        </div>
      </div>

      <div className="dk-banner-admin">
        El registro original se conserva para consultar su historial.
      </div>

      <div className="dk-table-wrap">
        <table className="dk-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Stock</th>
              <th>Mín.</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr
                key={item.id}
                className={`dk-table__row dk-table__row--${item.status}`}
                onClick={() => {
                  setSelectedStock(item.id);
                  navigate(item.detailScreen);
                }}
              >
                <td>
                  <strong>{item.name}</strong>
                  <small>{item.code}</small>
                </td>
                <td>{item.stock}</td>
                <td>{item.min}</td>
                <td>
                  <span className={statusClass(item.status)}>{statusLabel(item.status)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function DetallePage({ navigate }: { navigate: NavFn }) {
  const item = getSelectedStock();
  const [tab, setTab] = useState<'lotes' | 'movimientos'>('lotes');
  const itemMoves = MOVEMENTS.filter((m) => m.product === item.name);

  return (
    <>
      <button type="button" className="dk-link" onClick={() => navigate('inventario')}>
        ← Inventario
      </button>
      <div className="dk-admin-head" style={{ marginTop: 12 }}>
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">{item.code}</p>
          <h1>{item.name}</h1>
          <p className="dk-hint">Detalle del insumo · umbral mínimo {item.min}</p>
        </div>
        <span className={statusClass(item.status)}>{statusLabel(item.status)}</span>
      </div>

      <div className="dk-split">
        <div className="dk-panel">
          <div className="dk-detail-stock">
            <div className="dk-detail-stock__top">
              <strong>Stock disponible</strong>
              <span className={statusClass(item.status)}>{statusLabel(item.status)}</span>
            </div>
            <p className="dk-detail-stock__value">
              {item.stockValue} <span>{item.unit}</span>
            </p>
            {item.gapToMin ? <p className="dk-detail-stock__gap">{item.gapToMin}</p> : null}
            <button
              type="button"
              className="dk-btn dk-btn--admin"
              onClick={() => navigate('agregar-existente')}
            >
              Agregar
            </button>
          </div>

          <div className="dk-detail-fields">
            <label>
              Stock mínimo *
              <input readOnly value={item.minValue} />
            </label>
            <label>
              Unidad *
              <input readOnly value={item.unitLabel} />
            </label>
          </div>

          <button type="button" className="dk-btn dk-btn--admin dk-btn--block">
            Guardar alerta
          </button>
          <p className="dk-hint" style={{ marginTop: 12 }}>
            Se guardará con tu usuario: {item.savedBy}. Último cambio: {item.lastChange}.
          </p>
        </div>

        <div className="dk-panel">
          <div className="dk-pill-row" style={{ marginTop: 0 }}>
            <button
              type="button"
              className={`dk-pill${tab === 'lotes' ? ' is-active-admin' : ''}`}
              onClick={() => setTab('lotes')}
            >
              Lotes
            </button>
            <button
              type="button"
              className={`dk-pill${tab === 'movimientos' ? ' is-active-admin' : ''}`}
              onClick={() => setTab('movimientos')}
            >
              Movimientos
            </button>
          </div>

          {tab === 'lotes' ? (
            <div className="dk-lot-card">
              <div className="dk-detail-stock__top">
                <strong>{item.lot.code}</strong>
                {item.lot.badge ? (
                  <span className="dk-badge-admin">{item.lot.badge}</span>
                ) : null}
              </div>
              <div className="dk-lot-row">
                <span>Disponible / recibido</span>
                <strong>{item.lot.availableReceived}</strong>
              </div>
              <div className="dk-lot-row">
                <span>Recepción · vence</span>
                <strong>{item.lot.receptionExpires}</strong>
              </div>
              <div className="dk-lot-row">
                <span>Proveedor</span>
                <strong>{item.lot.provider}</strong>
              </div>
              <div className="dk-lot-row">
                <span>Recibió</span>
                <strong style={{ whiteSpace: 'pre-line', textAlign: 'right' }}>
                  {item.lot.receivedBy}
                </strong>
              </div>
            </div>
          ) : (
            <div className="dk-feature-list">
              {(itemMoves.length ? itemMoves : MOVEMENTS.slice(0, 3)).map((m) => (
                <div key={m.id} className="dk-feature-row" style={{ cursor: 'default' }}>
                  <span className="dk-feature-row__lead">
                    <span>
                      <strong>
                        {m.label} · {m.qty}
                      </strong>
                      <small>
                        {m.product} · {m.when}
                      </small>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="dk-page-hero__actions" style={{ marginTop: 18 }}>
            <button
              type="button"
              className="dk-btn dk-btn--admin"
              onClick={() => navigate('agregar-existente')}
            >
              Registrar movimiento
            </button>
            <button
              type="button"
              className="dk-btn dk-btn--ghost"
              onClick={() => navigate('historial-movimientos')}
            >
              Ver historial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AgregarPage({ screenId, navigate }: Props) {
  const isNuevo = screenId === 'agregar-nuevo';
  const [done, setDone] = useState(false);
  const [productId, setProductId] = useState(() => getSelectedStock().id);
  const item = STOCK.find((s) => s.id === productId) ?? STOCK[1];
  const stamp = useMemo(() => {
    const d = new Date();
    const months = [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ];
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${dd} ${months[d.getMonth()]} ${d.getFullYear()} - ${hh}:${mm}`;
  }, []);

  return (
    <>
      <button type="button" className="dk-link" onClick={() => navigate('inventario')}>
        ← Inventario
      </button>
      <div className="dk-admin-head" style={{ marginTop: 12 }}>
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">Inventario</p>
          <h1>{isNuevo ? 'Nuevo producto' : 'Agregar a existente'}</h1>
          <p className="dk-hint">
            {isNuevo
              ? 'Crea un insumo nuevo en el inventario.'
              : 'Suma stock a un producto que ya está registrado.'}
          </p>
        </div>
      </div>

      <div className="dk-pill-row">
        <button
          type="button"
          className={`dk-pill${!isNuevo ? ' is-active-admin' : ''}`}
          onClick={() => navigate('agregar-existente')}
        >
          Producto existente
        </button>
        <button
          type="button"
          className={`dk-pill${isNuevo ? ' is-active-admin' : ''}`}
          onClick={() => navigate('agregar-nuevo')}
        >
          Nuevo producto
        </button>
      </div>

      <form
        className="dk-panel dk-form dk-form--wide"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          setDone(true);
          setTimeout(() => navigate('inventario'), 700);
        }}
      >
        {isNuevo ? (
          <>
            <label>
              Nombre *
              <input required name="nombre" placeholder="Ej. Lechuga" />
            </label>
            <label>
              Código *
              <input required name="codigo" placeholder="INS-XX" />
            </label>
            <div className="dk-detail-fields" style={{ margin: 0 }}>
              <label>
                Categoría *
                <select name="categoria" defaultValue="Verduras">
                  <option>Carne</option>
                  <option>Lácteos</option>
                  <option>Panadería</option>
                  <option>Verduras</option>
                  <option>Abarrotes</option>
                </select>
              </label>
              <label>
                Unidad *
                <select name="unidad" defaultValue="kg">
                  <option value="kg">Kilogramos (kg)</option>
                  <option value="und">Unidades (und)</option>
                  <option value="lt">Litros (lt)</option>
                </select>
              </label>
            </div>
            <div className="dk-detail-fields" style={{ margin: 0 }}>
              <label>
                Stock inicial *
                <input required name="qty" type="number" step="0.1" min="0" placeholder="0" />
              </label>
              <label>
                Mínimo *
                <input required name="min" type="number" step="0.1" min="0" placeholder="0" />
              </label>
            </div>
            <label>
              Proveedor *
              <select name="proveedor" required defaultValue="">
                <option value="" disabled>
                  Seleccionar proveedor
                </option>
                {PROVIDERS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : (
          <>
            <label>
              Producto
              <select
                name="producto"
                value={productId}
                onChange={(e) => {
                  setProductId(e.target.value);
                  setSelectedStock(e.target.value);
                }}
              >
                {STOCK.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="dk-stock-summary">
              <strong>
                Categoría: {item.category} - Unidad: {item.unit}
              </strong>
              <span>
                Stock actual: {item.stock} - Mínimo: {item.min}
              </span>
            </div>

            <p className="dk-form-section">Datos de recepción</p>

            <div className="dk-detail-fields" style={{ margin: 0 }}>
              <label>
                Cantidad recibida *
                <input
                  required
                  name="qty"
                  type="number"
                  step="0.1"
                  min="0"
                  defaultValue={5}
                />
              </label>
              <label>
                Unidad *
                <select name="unidad" defaultValue={item.unit} key={`u-${item.id}`}>
                  <option value="kg">Kilogramos (kg)</option>
                  <option value="und">Unidades (und)</option>
                  <option value="lt">Litros (lt)</option>
                </select>
              </label>
            </div>

            <label>
              Lote
              <input name="lote" defaultValue="AAAAAAA-AAAAAAA-000000" />
            </label>

            <label>
              Proveedor *
              <select name="proveedor" required defaultValue="">
                <option value="" disabled>
                  Seleccionar proveedor
                </option>
                {PROVIDERS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Recibido por *
              <select name="recibidoPor" required defaultValue="Ana Torres">
                {RECEIVERS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>

            <div className="dk-detail-fields" style={{ margin: 0 }}>
              <label>
                Recibido el *
                <input required name="recibidoEl" defaultValue="06/05/2027" />
              </label>
              <label>
                Vencimiento *
                <input required name="vencimiento" defaultValue="06/05/2027" />
              </label>
            </div>

            <p className="dk-hint" style={{ margin: 0 }}>
              * Campos obligatorios.
            </p>

            <div className="dk-register-card">
              <div>
                <span>Registra</span>
                <strong>Ana Torres</strong>
              </div>
              <div>
                <span>Fecha y hora</span>
                <strong>{stamp}</strong>
              </div>
            </div>
          </>
        )}

        {done ? <p className="dk-toast">Movimiento registrado (prototipo).</p> : null}
        <div className="dk-page-hero__actions" style={{ marginTop: 4 }}>
          <button type="submit" className="dk-btn dk-btn--admin">
            Guardar
          </button>
          <button
            type="button"
            className="dk-btn dk-btn--ghost"
            onClick={() => navigate('inventario')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}

function HistorialPage({ screenId, navigate }: Props) {
  const isPedidos = screenId.includes('pedido') || screenId === 'historial-pedidos';
  return (
    <>
      <div className="dk-admin-head">
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">Registros</p>
          <h1>Historial</h1>
          <p className="dk-hint">Movimientos de inventario y pedidos del día.</p>
        </div>
      </div>
      <div className="dk-pill-row">
        <button
          type="button"
          className={`dk-pill${!isPedidos ? ' is-active-admin' : ''}`}
          onClick={() => navigate('historial-movimientos')}
        >
          Movimientos
        </button>
        <button
          type="button"
          className={`dk-pill${isPedidos ? ' is-active-admin' : ''}`}
          onClick={() => navigate('historial-pedidos')}
        >
          Pedidos
        </button>
      </div>

      {!isPedidos ? (
        <div className="dk-table-wrap">
          <table className="dk-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Cuándo</th>
              </tr>
            </thead>
            <tbody>
              {MOVEMENTS.map((m) => (
                <tr
                  key={m.id}
                  className="dk-table__row"
                  onClick={() => {
                    setSelectedMovement(m.id);
                    navigate('editar-movimiento');
                  }}
                >
                  <td>
                    <strong>{m.label}</strong>
                    <small>{m.type}</small>
                  </td>
                  <td>{m.product}</td>
                  <td>{m.qty}</td>
                  <td>{m.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="dk-table-wrap">
          <table className="dk-table">
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Canal</th>
                <th>Total</th>
                <th>Utilidad</th>
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((o) => (
                <tr
                  key={o.id}
                  className="dk-table__row"
                  onClick={() => {
                    setSelectedOrder(o.id);
                    navigate('editar-pedido');
                  }}
                >
                  <td>
                    <strong>{o.code}</strong>
                    <small>{o.when}</small>
                  </td>
                  <td>{o.channel}</td>
                  <td>{o.total}</td>
                  <td>{o.utilidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

function EditMovimientoPage({ navigate }: { navigate: NavFn }) {
  const m = getSelectedMovement();
  const stamp = useMemo(() => {
    const d = new Date();
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return `${String(d.getDate()).padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()} - ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }, []);

  return (
    <>
      <button type="button" className="dk-link" onClick={() => navigate('historial-movimientos')}>
        ← Historial · Movimientos
      </button>
      <div className="dk-admin-head" style={{ marginTop: 12 }}>
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">Movimientos</p>
          <h1>Editar {m.label}</h1>
          <p className="dk-hint">Corrige la cantidad; el registro original se conserva.</p>
        </div>
      </div>

      <div className="dk-split">
        <div className="dk-panel">
          <div className="dk-detail-stock__top">
            <strong>{m.label}</strong>
            <span className="dk-badge-admin">{m.badge}</span>
          </div>
          <p className="dk-edit-headline">{m.headline}</p>
          <div className="dk-lot-row">
            <span>Lote</span>
            <strong>{m.lot}</strong>
          </div>
          <div className="dk-lot-row">
            <span>Recibió</span>
            <strong>{m.receivedBy}</strong>
          </div>
          <div className="dk-lot-row">
            <span>Fecha original</span>
            <strong>{m.originalDate}</strong>
          </div>
        </div>

        <form
          className="dk-panel dk-form dk-form--wide"
          style={{ maxWidth: 'none' }}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            navigate('confirmar-correccion');
          }}
        >
          <p className="dk-form-section">Corregir cantidad</p>
          <div className="dk-detail-fields" style={{ margin: 0 }}>
            <div className="dk-stock-summary">
              <span>Actual</span>
              <strong>{m.currentValue}</strong>
            </div>
            <label>
              Nuevo valor ({m.unit}) *
              <input required name="nuevo" defaultValue={m.defaultNewValue} />
            </label>
          </div>
          <label>
            Motivo de la corrección *
            <input required name="motivo" defaultValue="Porque sí." />
          </label>
          <div className="dk-register-card">
            <div>
              <span>Registra</span>
              <strong>Ana Torres</strong>
            </div>
            <div>
              <span>Fecha y hora</span>
              <strong>{stamp}</strong>
            </div>
          </div>
          <div className="dk-info-banner">
            <span className="dk-info-banner__icon" aria-hidden>
              i
            </span>
            <p>El registro original se conserva para consultar su historial.</p>
          </div>
          <div className="dk-page-hero__actions" style={{ marginTop: 4 }}>
            <button type="submit" className="dk-btn dk-btn--admin">
              Revisar corrección
            </button>
            <button
              type="button"
              className="dk-btn dk-btn--ghost"
              onClick={() => navigate('historial-movimientos')}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function EditPedidoPage({ navigate }: { navigate: NavFn }) {
  const o = getSelectedOrder();
  const [qtys, setQtys] = useState(() => o.items.map((it) => it.qty));
  const stamp = useMemo(() => {
    const d = new Date();
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return `${String(d.getDate()).padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()} - ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }, []);

  return (
    <>
      <button type="button" className="dk-link" onClick={() => navigate('historial-pedidos')}>
        ← Historial · Pedidos
      </button>
      <div className="dk-admin-head" style={{ marginTop: 12 }}>
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">Pedidos</p>
          <h1>Editar pedido</h1>
          <p className="dk-hint">Ajusta productos y deja el motivo de la corrección.</p>
        </div>
      </div>

      <div className="dk-split">
        <div className="dk-panel">
          <div className="dk-detail-stock__top">
            <strong>#{o.code}</strong>
            <span className="dk-badge-admin">Pedido original</span>
          </div>
          <p className="dk-edit-headline">{o.headline}</p>
          <div className="dk-lot-row">
            <span>Total original</span>
            <strong>{o.originalTotal}</strong>
          </div>
          <div className="dk-lot-row">
            <span>Mesa</span>
            <strong>{o.mesa}</strong>
          </div>
          <div className="dk-lot-row">
            <span>Fecha original</span>
            <strong>{o.originalDate}</strong>
          </div>
        </div>

        <form
          className="dk-panel dk-form dk-form--wide"
          style={{ maxWidth: 'none' }}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            navigate('confirmar-pedido');
          }}
        >
          <p className="dk-form-section">Productos del pedido</p>
          {o.items.map((it, idx) => (
            <div key={it.name} className="dk-order-item">
              <div className="dk-order-item__top">
                <img src={productImage(it.productId)} alt="" width={64} height={64} />
                <div>
                  <strong>{it.name}</strong>
                  <small>{it.detail}</small>
                </div>
              </div>
              <div className="dk-order-item__row">
                <strong>{it.lineTotal}</strong>
                <div className="dk-qty">
                  <button
                    type="button"
                    aria-label="Menos"
                    onClick={() =>
                      setQtys((prev) => prev.map((q, i) => (i === idx ? Math.max(0, q - 1) : q)))
                    }
                  >
                    −
                  </button>
                  <span>{qtys[idx]}</span>
                  <button
                    type="button"
                    aria-label="Más"
                    onClick={() => setQtys((prev) => prev.map((q, i) => (i === idx ? q + 1 : q)))}
                  >
                    +
                  </button>
                </div>
              </div>
              <button type="button" className="dk-btn-remove">
                Quitar producto
              </button>
            </div>
          ))}
          <button type="button" className="dk-btn dk-btn--admin dk-btn--block">
            Agregar producto
          </button>
          <label>
            Motivo de la corrección *
            <input required name="motivo" defaultValue="Porque sí." />
          </label>
          <div className="dk-register-card">
            <div>
              <span>Registra</span>
              <strong>Ana Torres</strong>
            </div>
            <div>
              <span>Fecha y hora</span>
              <strong>{stamp}</strong>
            </div>
          </div>
          <div className="dk-page-hero__actions" style={{ marginTop: 4 }}>
            <button type="submit" className="dk-btn dk-btn--admin">
              Revisar pedido
            </button>
            <button
              type="button"
              className="dk-btn dk-btn--ghost"
              onClick={() => navigate('historial-pedidos')}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ConfirmPage({
  navigate,
  kind,
}: {
  navigate: NavFn;
  kind: 'movimiento' | 'pedido';
}) {
  const m = getSelectedMovement();
  const o = getSelectedOrder();
  const back = kind === 'movimiento' ? 'editar-movimiento' : 'editar-pedido';
  const list = kind === 'movimiento' ? 'historial-movimientos' : 'historial-pedidos';

  return (
    <>
      <button type="button" className="dk-link" onClick={() => navigate(back)}>
        ← Seguir editando
      </button>
      <div className="dk-admin-head" style={{ marginTop: 12 }}>
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">Confirmación</p>
          <h1>{kind === 'movimiento' ? '¿Guardar corrección?' : '¿Confirmar pedido?'}</h1>
        </div>
      </div>
      <div className="dk-panel dk-form--wide" style={{ maxWidth: 640 }}>
        {kind === 'movimiento' ? (
          <>
            <p className="dk-edit-headline">
              {m.label} - {m.product}
            </p>
            <div className="dk-lot-row">
              <span>Nuevo valor</span>
              <strong>
                {m.defaultNewValue} {m.unit}
              </strong>
            </div>
            <div className="dk-lot-row">
              <span>Diferencia</span>
              <strong>+2 {m.unit}</strong>
            </div>
            <div className="dk-lot-row">
              <span>Motivo</span>
              <strong>Porque sí.</strong>
            </div>
            <p className="dk-hint">
              El valor original se conserva. La corrección quedará vinculada a tu usuario.
            </p>
          </>
        ) : (
          <>
            <p className="dk-hint" style={{ whiteSpace: 'pre-line' }}>
              {o.items.map((it) => `${it.qty} × ${it.name} - ${it.lineTotal}`).join('\n')}
            </p>
            <div className="dk-lot-row">
              <span>Total original</span>
              <strong>{o.originalTotal}</strong>
            </div>
            <div className="dk-lot-row">
              <span>Nuevo total</span>
              <strong>{o.total}</strong>
            </div>
            <div className="dk-lot-row">
              <span>Motivo</span>
              <strong>Porque sí.</strong>
            </div>
            <p className="dk-hint">Los cambios quedarán registrados a nombre de Ana Torres.</p>
          </>
        )}
        <div className="dk-page-hero__actions">
          <button type="button" className="dk-btn dk-btn--admin" onClick={() => navigate(list)}>
            {kind === 'movimiento' ? 'Confirmar modificación' : 'Confirmar pedido'}
          </button>
          <button type="button" className="dk-btn dk-btn--ghost" onClick={() => navigate(back)}>
            Seguir editando
          </button>
        </div>
      </div>
    </>
  );
}

function StatsPage({ screenId, navigate }: Props) {
  const tab =
    screenId === 'ventas-canal' ? 'canal' : screenId === 'platos-insumos' ? 'platos' : 'numeros';
  const [metric, setMetric] = useState('Und vendidas');

  return (
    <>
      <div className="dk-admin-head">
        <div>
          <p className="dk-eyebrow dk-eyebrow--admin">Indicadores</p>
          <h1>Estadísticas</h1>
          <p className="dk-hint">Misma información que en la versión móvil, adaptada a escritorio.</p>
        </div>
        {tab !== 'numeros' ? (
          <span className="dk-badge-admin">EN TIEMPO REAL</span>
        ) : (
          <span className="dk-badge-admin">{STATS_NUMBERS.period}</span>
        )}
      </div>
      <div className="dk-pill-row">
        <button
          type="button"
          className={`dk-pill${tab === 'numeros' ? ' is-active-admin' : ''}`}
          onClick={() => navigate('numeros-negocio')}
        >
          Números del negocio
        </button>
        <button
          type="button"
          className={`dk-pill${tab === 'canal' ? ' is-active-admin' : ''}`}
          onClick={() => navigate('ventas-canal')}
        >
          Ventas por canal
        </button>
        <button
          type="button"
          className={`dk-pill${tab === 'platos' ? ' is-active-admin' : ''}`}
          onClick={() => navigate('platos-insumos')}
        >
          Platos e insumos
        </button>
      </div>

      {tab === 'numeros' ? (
        <div className="dk-stats-stack">
          <div className="dk-stat-grid">
            <div className="dk-stat-card dk-stat-card--accent">
              <span>Ventas netas totales</span>
              <strong>{STATS_NUMBERS.netSales}</strong>
              <small>Ayer al corte · {STATS_NUMBERS.yesterdayCut}</small>
            </div>
            <div className="dk-stat-card">
              <span>Utilidades brutas</span>
              <strong>{STATS_NUMBERS.grossProfit}</strong>
              <small>{STATS_NUMBERS.margin}</small>
            </div>
            <div className="dk-stat-card">
              <span>Variación neta vs ayer</span>
              <strong className="dk-stat-up">{STATS_NUMBERS.variation}</strong>
            </div>
            <div className="dk-stat-card">
              <span>Cantidad de pedidos</span>
              <strong>{STATS_NUMBERS.ordersCount}</strong>
              <small>{STATS_NUMBERS.pace}</small>
            </div>
          </div>

          <div className="dk-panel">
            <h2>Punto de equilibrio vs compras</h2>
            <p className="dk-hint">Relación ventas mínimas vs egresos de materias primas.</p>
            <div className="dk-detail-fields">
              <div className="dk-stock-summary">
                <span>Venta mínima requerida</span>
                <strong>{STATS_NUMBERS.minSale}</strong>
              </div>
              <div className="dk-stock-summary">
                <span>Faltante para el mínimo</span>
                <strong>{STATS_NUMBERS.missingMin}</strong>
              </div>
            </div>
            <div className="dk-lot-row" style={{ marginTop: 12 }}>
              <span>Completado</span>
              <strong>{STATS_NUMBERS.completedPct}%</strong>
            </div>
            <div className="dk-bar">
              <div style={{ width: `${STATS_NUMBERS.completedPct}%` }} />
            </div>
          </div>

          <div className="dk-split">
            <div className="dk-panel">
              <h2>Comparativa histórica</h2>
              <div className="dk-lot-row">
                <span>En curso</span>
                <strong>{STATS_NUMBERS.closedOrders}</strong>
              </div>
              <div className="dk-lot-row">
                <span>Acumulado</span>
                <strong>{STATS_NUMBERS.accumulated}</strong>
              </div>
              <div className="dk-lot-row">
                <span>Ventas 7 días</span>
                <strong>{STATS_NUMBERS.weekSales}</strong>
              </div>
            </div>
            <div className="dk-panel">
              <h2>Ventas por días (últimos 7 días)</h2>
              <p className="dk-hint">{STATS_NUMBERS.topDayNote}</p>
              <div className="dk-week-bars">
                {STATS_NUMBERS.weekBars.map((b) => (
                  <div key={b.day} className="dk-week-bars__col">
                    <div className="dk-week-bars__bar" style={{ height: `${b.pct}%` }} />
                    <span>{b.day}</span>
                  </div>
                ))}
              </div>
              <p className="dk-hint" style={{ marginTop: 12 }}>
                Pico: {STATS_NUMBERS.topDay} · {STATS_NUMBERS.topDaySales}
              </p>
            </div>
          </div>
          <button type="button" className="dk-btn dk-btn--ghost">
            Descargar datos y estadísticas
          </button>
        </div>
      ) : null}

      {tab === 'canal' ? (
        <div className="dk-stats-stack">
          <div className="dk-split">
            <div className="dk-panel">
              <p className="dk-eyebrow dk-eyebrow--admin">{STATS_CHANNELS.delivery.title}</p>
              <h2>{STATS_CHANNELS.delivery.subtitle}</h2>
              <div className="dk-stat-grid" style={{ marginTop: 16 }}>
                <div className="dk-stat-card">
                  <span>Ventas</span>
                  <strong>{STATS_CHANNELS.delivery.sales}</strong>
                </div>
                <div className="dk-stat-card">
                  <span>Utilidad bruta</span>
                  <strong>{STATS_CHANNELS.delivery.profit}</strong>
                </div>
              </div>
            </div>
            <div className="dk-panel">
              <p className="dk-eyebrow dk-eyebrow--admin">{STATS_CHANNELS.salon.title}</p>
              <h2>{STATS_CHANNELS.salon.subtitle}</h2>
              <div className="dk-stat-grid" style={{ marginTop: 16 }}>
                <div className="dk-stat-card">
                  <span>Ventas</span>
                  <strong>{STATS_CHANNELS.salon.sales}</strong>
                </div>
                <div className="dk-stat-card">
                  <span>Utilidades brutas</span>
                  <strong>{STATS_CHANNELS.salon.profit}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="dk-panel">
            <h2>Comparar canales</h2>
            <div className="dk-lot-row">
              <span>Domicilios {STATS_CHANNELS.delivery.share}%</span>
              <strong>Salón {STATS_CHANNELS.salon.share}%</strong>
            </div>
            <div className="dk-bar">
              <div style={{ width: `${STATS_CHANNELS.delivery.share}%` }} />
            </div>
            <div className="dk-lot-row" style={{ marginTop: 14 }}>
              <span>Diferencia entre ambos canales</span>
              <strong>{STATS_CHANNELS.difference}</strong>
            </div>
          </div>
          <button type="button" className="dk-btn dk-btn--ghost">
            Descargar datos y estadísticas
          </button>
        </div>
      ) : null}

      {tab === 'platos' ? (
        <div className="dk-stats-stack">
          <div className="dk-metric-fields" role="tablist" aria-label="Métrica">
            {['Und vendidas', 'Ventas netas', 'Utilidades'].map((label) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={metric === label}
                className={`dk-metric-tab${metric === label ? ' is-active' : ''}`}
                onClick={() => setMetric(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="dk-admin-head" style={{ marginTop: 0 }}>
            <div>
              <h2 style={{ margin: 0 }}>Top platos</h2>
              <p className="dk-hint">{STATS_PLATES_TOTAL_UNITS}</p>
            </div>
          </div>
          <div className="dk-plate-grid">
            {STATS_PLATES.map((p) => (
              <div key={p.name} className="dk-plate-card">
                <img src={productImage(p.productId)} alt="" width={72} height={72} />
                <div>
                  <strong>{p.name}</strong>
                  <small>{p.units}</small>
                  <div className="dk-lot-row">
                    <span>Ventas netas</span>
                    <strong>{p.sales}</strong>
                  </div>
                  <div className="dk-lot-row">
                    <span>Utilidades</span>
                    <strong>{p.profit}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="dk-panel">
            <h2>Insumos utilizados hoy</h2>
            <div className="dk-lot-row">
              <span>Costo total de insumos del día</span>
              <strong>{STATS_INSUMOS_COST}</strong>
            </div>
          </div>
          <button type="button" className="dk-btn dk-btn--ghost">
            Descargar datos y estadísticas
          </button>
        </div>
      ) : null}
    </>
  );
}

function AdminBody({ screenId, navigate }: Props) {
  if (screenId === 'inventario') return <InventarioPage navigate={navigate} />;
  if (screenId === 'detalle-carne') return <DetallePage navigate={navigate} />;
  if (screenId === 'agregar-existente' || screenId === 'agregar-nuevo') {
    return <AgregarPage screenId={screenId} navigate={navigate} />;
  }
  if (
    screenId.startsWith('historial') ||
    screenId.includes('movimiento') ||
    screenId.includes('ajuste') ||
    screenId.includes('eliminacion') ||
    screenId.includes('registro') ||
    screenId.startsWith('editar-pedido') ||
    screenId.startsWith('confirmar-pedido') ||
    screenId.startsWith('pedido-')
  ) {
    if (screenId === 'editar-movimiento' || screenId === 'ajuste-mov-184') {
      return <EditMovimientoPage navigate={navigate} />;
    }
    if (screenId === 'editar-pedido' || screenId === 'ajuste-ped-1048' || screenId === 'pedido-anadir') {
      return <EditPedidoPage navigate={navigate} />;
    }
    if (
      screenId === 'confirmar-correccion' ||
      (screenId.includes('confirm') && screenId.includes('mov'))
    ) {
      return <ConfirmPage navigate={navigate} kind="movimiento" />;
    }
    if (
      screenId === 'confirmar-pedido' ||
      (screenId.includes('confirm') && screenId.includes('ped'))
    ) {
      return <ConfirmPage navigate={navigate} kind="pedido" />;
    }
    if (screenId.includes('confirm') || screenId.includes('eliminacion') || screenId.includes('registro')) {
      return <ConfirmPage navigate={navigate} kind="movimiento" />;
    }
    return <HistorialPage screenId={screenId} navigate={navigate} />;
  }
  if (
    screenId === 'numeros-negocio' ||
    screenId === 'ventas-canal' ||
    screenId === 'platos-insumos'
  ) {
    return <StatsPage screenId={screenId} navigate={navigate} />;
  }
  if (screenId === 'no-implementada') {
    return (
      <div className="dk-empty-card">
        <h3>Función no implementada</h3>
        <p>Esta pantalla del admin aún no está en el prototipo desktop.</p>
        <button type="button" className="dk-btn dk-btn--admin" onClick={() => navigate('inventario')}>
          Volver a inventario
        </button>
      </div>
    );
  }
  return <InventarioPage navigate={navigate} />;
}

/** UI desktop del panel admin — layout web completo. */
export function DesktopAdminApp({ screenId, navigate }: Props) {
  return (
    <div className="dk dk--admin">
      <AdminTop screenId={screenId} navigate={navigate} />
      <main className="dk-main">
        <AdminBody screenId={screenId} navigate={navigate} />
      </main>
      <footer className="dk-footer">
        <span className="dk-footer__brand">
          <Logo size={26} />
          <span>Panel admin · Whopper King</span>
        </span>
        <button type="button" onClick={() => navigate('whopper-inicio')}>
          Salir a cliente
        </button>
      </footer>
    </div>
  );
}

export default DesktopAdminApp;
