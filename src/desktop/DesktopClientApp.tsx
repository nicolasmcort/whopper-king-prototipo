import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { ClientCartIconOutline } from '@/shared/components/ui/ClientCartIcon';
import {
  ClientAdminModeIcon,
  ClientBagIcon,
  ClientBrebIcon,
  ClientBurgerIcon,
  ClientCardIcon,
  ClientCashIcon,
  ClientChevronRightIcon,
  ClientClockIcon,
  ClientDrinkCupIcon,
  ClientDrumstickIcon,
  ClientFacebookIcon,
  ClientHeadsetIcon,
  ClientHeadphonesIcon,
  ClientHomeIcon,
  ClientInstagramIcon,
  ClientLunchIcon,
  ClientNequiIcon,
  ClientPinIcon,
  ClientScheduleIcon,
  ClientShieldIcon,
  ClientStoreIcon,
  ClientTrashIcon,
  ClientUserIcon,
  ClientUtensilsIcon,
  ClientWhatsAppIcon,
} from '@/shared/components/ui/ClientUiIcons';
import {
  addProductFromScreen,
  cartTotals,
  commitOrder,
  decItem,
  formatCOP,
  getCart,
  getOrderForSummary,
  getTableNumber,
  getTablePlateCode,
  hasTableAssigned,
  incItem,
  payScreenForCart,
  plateCodeForTable,
  removeItem,
  setFulfillment,
  setTableFromPlateCode,
  setTableNumber,
  subscribeCart,
  TABLE_COUNT,
  type Fulfillment,
} from '@/features/cart/state/store';
import { clientTabFor } from '../responsive';
import {
  CATEGORIES,
  detailImageFor,
  FEATURED_IMG,
  productByScreen,
  PRODUCTS,
  productsForScreen,
  RESTAURANT_LOGO,
  RESTAURANT_LOGO_LOCAL,
  type DeskCategory,
} from './catalog';
import './desktop.css';

type NavFn = (id: string) => void;

type Props = {
  screenId: string;
  navigate: NavFn;
};

function useLiveCart() {
  const [cart, setCart] = useState(getCart);
  useEffect(() => subscribeCart(() => setCart(getCart())), []);
  return cart;
}

function BrandMark({ size = 36 }: { size?: number }) {
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

function openProduct(navigate: NavFn, productId: string, screen: string) {
  try {
    sessionStorage.setItem('dk-product', productId);
  } catch {
    /* ignore */
  }
  navigate(screen);
}

function CatIcon({ icon, size = 22 }: { icon: DeskCategory['icon']; size?: number }) {
  const color = '#29241f';
  switch (icon) {
    case 'lunch':
      return <ClientLunchIcon size={size} color={color} />;
    case 'chicken':
    case 'meat':
    case 'fish':
      return <ClientDrumstickIcon size={size} color={color} />;
    case 'drink':
      return <ClientDrinkCupIcon size={size} color={color} />;
    default:
      return <ClientBurgerIcon size={size} color={color} />;
  }
}

function CategoryButtons({
  activeId,
  navigate,
}: {
  activeId?: string;
  navigate: NavFn;
}) {
  return (
    <div className="dk-cats">
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`dk-cat${c.id === activeId ? ' is-active' : ''}`}
          onClick={() => navigate(c.id)}
        >
          <span className="dk-cat__icon">
            <CatIcon icon={c.icon} />
          </span>
          <span className="dk-cat__label">{c.label}</span>
          <span className="dk-cat__hint">{c.hint}</span>
        </button>
      ))}
    </div>
  );
}

function PageHero({
  eyebrow,
  title,
  sub,
  actions,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="dk-page-hero">
      {eyebrow ? <p className="dk-eyebrow">{eyebrow}</p> : null}
      <h1 className="dk-page-hero__title">{title}</h1>
      {sub ? <p className="dk-page-hero__sub">{sub}</p> : null}
      {actions ? <div className="dk-page-hero__actions">{actions}</div> : null}
    </section>
  );
}

function TopBar({ screenId, navigate }: Props) {
  const cart = useLiveCart();
  const { count } = cartTotals(cart.items, cart.fulfillment);
  const tab = clientTabFor(screenId);
  const ink = (on: boolean) => (on ? '#ed6047' : '#29241f');

  return (
    <header className="dk-top">
      <button type="button" className="dk-brand" onClick={() => navigate('whopper-inicio')}>
        <BrandMark size={34} />
        <span className="dk-brand__text">
          <span className="dk-brand__name">Whopper King</span>
          <span className="dk-brand__tag">Pasto · Nariño</span>
        </span>
      </button>
      <nav className="dk-nav" aria-label="Principal">
        <button
          type="button"
          className={`dk-nav__btn${tab === 'inicio' ? ' is-active' : ''}`}
          onClick={() => navigate('whopper-inicio')}
        >
          <ClientHomeIcon size={18} color={ink(tab === 'inicio')} />
          Inicio
        </button>
        <button
          type="button"
          className={`dk-nav__btn${tab === 'menu' ? ' is-active' : ''}`}
          onClick={() => navigate('menu-burgers')}
        >
          <ClientBagIcon size={18} color={ink(tab === 'menu')} />
          Menú
        </button>
        <button
          type="button"
          className={`dk-nav__btn dk-nav__cart${tab === 'carrito' ? ' is-active' : ''}`}
          onClick={() => navigate('tu-carrito-local')}
        >
          <ClientCartIconOutline size={18} color={ink(tab === 'carrito')} />
          Carrito
          {count > 0 ? <span className="dk-nav__badge">{count}</span> : null}
        </button>
        <button
          type="button"
          className={`dk-nav__btn${tab === 'cuenta' ? ' is-active' : ''}`}
          onClick={() => navigate('mi-cuenta')}
        >
          <ClientUserIcon size={18} color={ink(tab === 'cuenta')} />
          Mi cuenta
        </button>
      </nav>
    </header>
  );
}

function Home({ navigate }: { navigate: NavFn }) {
  const featured = PRODUCTS[0];
  const highlights = PRODUCTS.filter((p) => p.category === 'menu-burgers').slice(0, 4);

  return (
    <>
      <section className="dk-hero">
        <div>
          <div className="dk-hero__kicker">
            <BrandMark size={72} />
            <div>
              <p className="dk-eyebrow">Barrio Las Cuadras · Pasto</p>
              <h1 className="dk-hero__title">Sabor a la parrilla, desde Pasto</h1>
            </div>
          </div>
          <p className="dk-hero__sub">
            Hamburguesas artesanales a la parrilla. Pide en el local o a domicilio, del mismo menú
            que ya conoces.
          </p>
          <div className="dk-page-hero__actions">
            <button type="button" className="dk-btn" onClick={() => navigate('menu-burgers')}>
              Ver menú
            </button>
            <button
              type="button"
              className="dk-btn dk-btn--ghost"
              onClick={() => navigate('sobre-nosotros')}
            >
              Conócenos
            </button>
          </div>
        </div>
        <button
          type="button"
          className="dk-card dk-card--featured"
          onClick={() => openProduct(navigate, featured.id, featured.screen)}
        >
          <img className="dk-card__img" src={FEATURED_IMG} alt={featured.name} />
          <div className="dk-card__body">
            <span className="dk-badge">Favorito</span>
            <span className="dk-card__name">{featured.name}</span>
            <span className="dk-card__desc">{featured.desc}</span>
            <span className="dk-card__price">{formatCOP(featured.price)}</span>
          </div>
        </button>
      </section>

      <div className="dk-section__head">
        <h2>¿Qué se te antoja hoy?</h2>
      </div>
      <CategoryButtons navigate={navigate} />

      <div className="dk-section__head">
        <h2>Enamórate de nuestra #1</h2>
        <button type="button" className="dk-link" onClick={() => navigate('menu-hamburguesas')}>
          Ver todos
        </button>
      </div>
      <div className="dk-grid">
        {highlights.map((p) => (
          <button
            key={p.id}
            type="button"
            className="dk-card"
            onClick={() => openProduct(navigate, p.id, p.screen)}
          >
            <img className="dk-card__img" src={p.image} alt={p.name} />
            <div className="dk-card__body">
              <span className="dk-card__name">{p.name}</span>
              <span className="dk-card__desc">{p.desc}</span>
              <span className="dk-card__price">{formatCOP(p.price)}</span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

function MenuPage({ screenId, navigate }: Props) {
  const items = productsForScreen(screenId);
  const activeCat = CATEGORIES.find((c) => c.id === screenId) ?? CATEGORIES[0];

  return (
    <>
      <PageHero
        eyebrow="Carta"
        title={activeCat.label}
        sub={`${activeCat.hint} · Elige un plato y personaliza tu combo.`}
        actions={
          <button type="button" className="dk-btn dk-btn--ghost" onClick={() => navigate('whopper-inicio')}>
            Volver al inicio
          </button>
        }
      />
      <CategoryButtons activeId={activeCat.id} navigate={navigate} />
      {items.length === 0 ? (
        <div className="dk-empty-card">
          <h3>Pronto más platos</h3>
          <p>Esta categoría se está armando. Mientras tanto, prueba nuestras Whoppers.</p>
          <button type="button" className="dk-btn" onClick={() => navigate('menu-burgers')}>
            Ver hamburguesas
          </button>
        </div>
      ) : (
        <div className="dk-grid">
          {items.map((p) => (
            <button
              key={p.id}
              type="button"
              className="dk-card"
              onClick={() => openProduct(navigate, p.id, p.screen)}
            >
              <img className="dk-card__img" src={p.image} alt={p.name} />
              <div className="dk-card__body">
                <span className="dk-card__name">{p.name}</span>
                <span className="dk-card__desc">{p.desc}</span>
                <span className="dk-card__price">{formatCOP(p.price)}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function ProductPage({ screenId, navigate }: Props) {
  const storedId =
    typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('dk-product') : null;
  const product =
    (storedId ? PRODUCTS.find((p) => p.id === storedId) : undefined) || productByScreen(screenId);
  const [qty, setQty] = useState(1);
  const variants = useMemo(() => {
    if (screenId.includes('texana') || screenId === 'desc-texana') {
      return [
        { id: 'desc-texana', label: 'Sencilla', hint: 'Solo la hamburguesa', price: 23500 },
        { id: 'personaliza-texana-mini', label: 'Mini Combo', hint: '+ papas + bebida', price: 30200 },
        { id: 'personaliza-texana-maxi', label: 'Maxi Combo', hint: '+ papas grandes + bebida', price: 32700 },
      ];
    }
    return [
      { id: 'personaliza-whopper', label: 'Sencilla', hint: 'Solo la hamburguesa', price: 10400 },
      { id: 'personaliza-whopper-mini', label: 'Mini Combo', hint: '+ papas + bebida', price: 17100 },
      { id: 'personaliza-whopper-maxi', label: 'Maxi Combo', hint: '+ papas grandes + bebida', price: 19600 },
    ];
  }, [screenId]);
  const active = variants.find((v) => v.id === screenId) ?? variants[0];

  if (!product) {
    return (
      <div className="dk-empty-card">
        <h3>Producto no encontrado</h3>
        <button type="button" className="dk-btn" onClick={() => navigate('menu-burgers')}>
          Ir al menú
        </button>
      </div>
    );
  }

  return (
    <div className="dk-product">
      <div className="dk-product__media">
        <img
          src={
            product.category === 'menu-burgers' || product.id === 'texana'
              ? detailImageFor(screenId, product.image)
              : product.image
          }
          alt={product.name}
        />
        <span className="dk-badge dk-badge--on-media">A la parrilla</span>
      </div>
      <div className="dk-product__info">
        <button type="button" className="dk-link" onClick={() => navigate('menu-burgers')}>
          ← Volver al menú
        </button>
        <h1>{product.name}</h1>
        <p className="dk-product__desc">{product.desc}</p>
        <p className="dk-product__price-lead">{formatCOP(active.price)}</p>

        <h3 className="dk-label">Elige tu presentación</h3>
        <div className="dk-variants">
          {variants.map((v) => (
            <button
              key={v.id}
              type="button"
              className={`dk-variant${v.id === active.id ? ' is-active' : ''}`}
              onClick={() => navigate(v.id)}
            >
              <span>
                <strong>{v.label}</strong>
                <small>{v.hint}</small>
              </span>
              <strong>{formatCOP(v.price)}</strong>
            </button>
          ))}
        </div>

        <h3 className="dk-label">Cantidad</h3>
        <div className="dk-qty">
          <button type="button" aria-label="Quitar" onClick={() => setQty((q) => Math.max(1, q - 1))}>
            −
          </button>
          <strong>{qty}</strong>
          <button type="button" aria-label="Agregar" onClick={() => setQty((q) => q + 1)}>
            +
          </button>
        </div>

        <button
          type="button"
          className="dk-btn dk-btn--block"
          onClick={() => {
            addProductFromScreen(active.id, qty);
            navigate('tu-carrito-local');
          }}
        >
          Agregar al pedido · {formatCOP(active.price * qty)}
        </button>
      </div>
    </div>
  );
}

function CartPage({ navigate }: { navigate: NavFn }) {
  const cart = useLiveCart();
  const { subtotal, delivery, total, count } = cartTotals(cart.items, cart.fulfillment);
  const table = getTableNumber();

  return (
    <>
      <PageHero
        eyebrow="Pedido"
        title="Tu carrito"
        sub="Revisa cantidades, elige local o domicilio y continúa al pago."
      />
      <div className="dk-split">
        <div className="dk-panel">
          <div className="dk-pill-row">
            <button
              type="button"
              className={`dk-pill${cart.fulfillment === 'local' ? ' is-active' : ''}`}
              onClick={() => setFulfillment('local' as Fulfillment)}
            >
              En el local
            </button>
            <button
              type="button"
              className={`dk-pill${cart.fulfillment === 'domicilio' ? ' is-active' : ''}`}
              onClick={() => setFulfillment('domicilio')}
            >
              A domicilio
            </button>
          </div>

          {cart.fulfillment === 'local' ? (
            <div className="dk-table-pick">
              <span className="dk-label">Mesa</span>
              <div className="dk-table-grid">
                {Array.from({ length: TABLE_COUNT }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`dk-table-btn${table === n ? ' is-active' : ''}`}
                    onClick={() => setTableNumber(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <p className="dk-hint">Domicilio en Las Cuadras y alrededores · {formatCOP(4000)} de envío.</p>
          )}

          {cart.items.length === 0 ? (
            <div className="dk-empty-card dk-empty-card--inset">
              <h3>Tu carrito está vacío</h3>
              <p>Agrega algo del menú para continuar.</p>
              <button type="button" className="dk-btn" onClick={() => navigate('menu-burgers')}>
                Ver menú
              </button>
            </div>
          ) : (
            cart.items.map((item) => (
              <div key={item.id} className="dk-line-item">
                <img src={item.image} alt="" />
                <div>
                  <strong>
                    {item.name} · {item.variant}
                  </strong>
                  <div className="dk-qty" style={{ margin: '8px 0 0' }}>
                    <button type="button" onClick={() => decItem(item.id)}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => incItem(item.id)}>
                      +
                    </button>
                    <button
                      type="button"
                      className="dk-qty__remove"
                      aria-label="Quitar"
                      onClick={() => removeItem(item.id)}
                    >
                      <ClientTrashIcon size={16} />
                    </button>
                  </div>
                </div>
                <strong>{formatCOP(item.unitPrice * item.qty)}</strong>
              </div>
            ))
          )}
        </div>

        <aside className="dk-panel dk-panel--sticky">
          <h2>Resumen</h2>
          <div className="dk-totals">
            <div className="dk-totals__row">
              <span>{count} productos</span>
              <span>{formatCOP(subtotal)}</span>
            </div>
            {cart.fulfillment === 'domicilio' ? (
              <div className="dk-totals__row">
                <span>Domicilio</span>
                <span>{formatCOP(delivery)}</span>
              </div>
            ) : (
              <div className="dk-totals__row">
                <span>Mesa {table}</span>
                <span>Sin envío</span>
              </div>
            )}
            <div className="dk-totals__row dk-totals__row--total">
              <span>Total</span>
              <span>{formatCOP(total)}</span>
            </div>
          </div>
          <button
            type="button"
            className="dk-btn dk-btn--block"
            disabled={cart.items.length === 0}
            onClick={() => {
              if (cart.fulfillment === 'local') navigate('escaneo-qr');
              else navigate(payScreenForCart('nequi'));
            }}
          >
            Continuar
          </button>
          <button
            type="button"
            className="dk-btn dk-btn--soft dk-btn--block"
            style={{ marginTop: 10 }}
            onClick={() => navigate('menu-burgers')}
          >
            Añadir algo más
          </button>
        </aside>
      </div>
    </>
  );
}

function QrPage({ navigate }: { navigate: NavFn }) {
  const cart = useLiveCart();
  const table = cart.tableNumber;
  const demo = plateCodeForTable(1);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const applyCode = (raw = code) => {
    const ok = setTableFromPlateCode(raw);
    if (!ok) {
      setError('Código no válido. Revisa el texto impreso junto al QR de la placa.');
      return false;
    }
    setError('');
    setCode(getTablePlateCode());
    return true;
  };

  return (
    <div className="dk-center-stage">
      <div className="dk-panel dk-panel--narrow dk-panel--center">
        <p className="dk-eyebrow">En el local</p>
        <h1>Ingresa el código de tu mesa</h1>
        <p>
          En el computador no se escanea QR. Escribe el <strong>código de la placa</strong> que
          está impreso junto al QR en el centro de tu mesa.
        </p>

        <div className="dk-qr-manual" style={{ marginTop: 18 }}>
          <label className="dk-qr-manual__label">
            Código de la placa
            <input
              autoComplete="off"
              spellCheck={false}
              value={code}
              onChange={(e) => {
                const next = e.target.value.toUpperCase();
                setCode(next);
                setError('');
                if (setTableFromPlateCode(next)) setError('');
              }}
              placeholder={`Ej. ${demo}`}
              aria-label="Código de la placa de la mesa"
            />
          </label>
          <p className="dk-hint" style={{ marginTop: 10, marginBottom: 0 }}>
            Ejemplo de prueba:{' '}
            <button
              type="button"
              className="dk-link-inline"
              onClick={() => {
                setCode(demo);
                applyCode(demo);
              }}
            >
              {demo}
            </button>
            {hasTableAssigned() ? ` · Mesa ${table}` : ''}
          </p>
          {error ? <p className="dk-qr-manual__error">{error}</p> : null}
        </div>

        <button
          type="button"
          className="dk-btn dk-btn--block"
          style={{ marginTop: 14 }}
          onClick={() => {
            if (!applyCode()) return;
            navigate(payScreenForCart('nequi'));
          }}
        >
          {hasTableAssigned() ? `Continuar con la mesa ${table}` : 'Continuar'}
        </button>
        <button
          type="button"
          className="dk-btn dk-btn--ghost dk-btn--block"
          style={{ marginTop: 10 }}
          onClick={() => navigate('tu-carrito-local')}
        >
          Volver al carrito
        </button>
      </div>
    </div>
  );
}

function PayPage({ screenId, navigate }: Props) {
  const methods = [
    {
      id: 'nequi',
      label: 'Nequi',
      hint: 'Paga desde tu app Nequi',
      icon: <ClientNequiIcon size={22} color="#ed6047" />,
    },
    {
      id: 'breb',
      label: 'Bre-B',
      hint: 'Transferencia con tu llave Bre-B',
      icon: <ClientBrebIcon size={22} color="#ed6047" />,
    },
    {
      id: 'efectivo',
      label: 'Efectivo',
      hint: 'Paga al recibir o en caja',
      icon: <ClientCashIcon size={22} color="#ed6047" />,
    },
    {
      id: 'tarjeta',
      label: 'Tarjeta',
      hint: 'Débito o crédito',
      icon: <ClientCardIcon size={22} color="#ed6047" />,
    },
  ];
  const cart = useLiveCart();
  const prefix = cart.fulfillment === 'domicilio' ? 'pago-dom' : 'pago-local';
  const { total, count } = cartTotals(cart.items, cart.fulfillment);
  const active = methods.find((m) => screenId.endsWith(m.id)) ?? methods[0];

  return (
    <>
      <PageHero
        eyebrow={cart.fulfillment === 'domicilio' ? 'A domicilio' : 'En el local'}
        title="Elige cómo pagar"
        sub={`Total a pagar: ${formatCOP(total)} · ${count} productos`}
      />
      <div className="dk-split">
        <div className="dk-pay-grid">
          {methods.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`dk-pay-card${m.id === active.id ? ' is-active' : ''}`}
              onClick={() => navigate(`${prefix}-${m.id}`)}
            >
              <span className="dk-pay-card__icon">{m.icon}</span>
              <strong>{m.label}</strong>
              <span>{m.hint}</span>
            </button>
          ))}
        </div>
        <aside className="dk-panel dk-panel--sticky">
          <h2>Confirmar</h2>
          <p className="dk-hint">Método: {active.label}</p>
          <div className="dk-totals">
            <div className="dk-totals__row dk-totals__row--total">
              <span>Total</span>
              <span>{formatCOP(total)}</span>
            </div>
          </div>
          <button
            type="button"
            className="dk-btn dk-btn--block"
            onClick={() => {
              commitOrder();
              navigate(
                cart.fulfillment === 'domicilio' ? 'pedido-enviado-domicilio' : 'pedido-enviado-local',
              );
            }}
          >
            Confirmar pedido
          </button>
          <button
            type="button"
            className="dk-btn dk-btn--ghost dk-btn--block"
            style={{ marginTop: 10 }}
            onClick={() => navigate('tu-carrito-local')}
          >
            Volver al carrito
          </button>
        </aside>
      </div>
    </>
  );
}

function OrderSuccessPage({ screenId, navigate }: Props) {
  const order = getOrderForSummary();
  const isDom = screenId.includes('domicilio') || order.fulfillment === 'domicilio';

  return (
    <div className="dk-center-stage">
      <div className="dk-panel dk-panel--narrow">
        <div className="dk-success-mark" aria-hidden>
          ✓
        </div>
        <h1>¡Pedido enviado!</h1>
        <p>
          {isDom
            ? 'Te avisaremos por WhatsApp cuando tu pedido salga del restaurante.'
            : hasTableAssigned()
              ? `Tu pedido quedó asociado a la mesa ${getTableNumber()}. Te avisamos cuando esté listo.`
              : 'Tu pedido quedó registrado. Te avisamos cuando esté listo.'}
        </p>
        <div className="dk-totals" style={{ textAlign: 'left', margin: '20px 0' }}>
          {order.items.map((i) => (
            <div key={i.id} className="dk-totals__row">
              <span>
                {i.qty}× {i.name} · {i.variant}
              </span>
              <span>{formatCOP(i.unitPrice * i.qty)}</span>
            </div>
          ))}
          {order.delivery > 0 ? (
            <div className="dk-totals__row">
              <span>Domicilio</span>
              <span>{formatCOP(order.delivery)}</span>
            </div>
          ) : null}
          <div className="dk-totals__row dk-totals__row--total">
            <span>Total</span>
            <span>{formatCOP(order.total)}</span>
          </div>
        </div>
        <button type="button" className="dk-btn dk-btn--block" onClick={() => navigate('whopper-inicio')}>
          Volver al inicio
        </button>
        <button
          type="button"
          className="dk-btn dk-btn--soft dk-btn--block"
          style={{ marginTop: 10 }}
          onClick={() => navigate('menu-burgers')}
        >
          Seguir mirando el menú
        </button>
      </div>
    </div>
  );
}

function AccountPage({ navigate }: { navigate: NavFn }) {
  const links = [
    {
      id: 'mis-datos',
      label: 'Mis datos',
      hint: 'Nombre, correo y teléfono',
      icon: <ClientUserIcon size={20} color="#ed6047" />,
    },
    {
      id: 'mis-direcciones',
      label: 'Mis direcciones',
      hint: 'Domicilios guardados',
      icon: <ClientPinIcon size={20} color="#ed6047" />,
    },
    {
      id: 'privacidad',
      label: 'Privacidad y datos',
      hint: 'Tratamiento de información',
      icon: <ClientShieldIcon size={20} color="#ed6047" />,
    },
    {
      id: 'contactos',
      label: 'Contactos',
      hint: 'WhatsApp, teléfono y horarios',
      icon: <ClientHeadphonesIcon size={20} color="#ed6047" />,
    },
    {
      id: 'pqrs',
      label: 'PQRS',
      hint: 'Peticiones, quejas y reclamos',
      icon: <ClientHeadsetIcon size={20} color="#ed6047" />,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Perfil"
        title="Mi cuenta"
        sub="Gestiona tu información, direcciones y canales de contacto con Whopper King."
      />
      <div className="dk-account-grid">
        <div className="dk-profile-card">
          <BrandMark size={56} />
          <div>
            <strong>Invitado</strong>
            <p>Barrio Las Cuadras · Pasto</p>
          </div>
          <button type="button" className="dk-btn dk-btn--soft" onClick={() => navigate('login')}>
            Iniciar sesión
          </button>
        </div>
        <div className="dk-feature-list">
          {links.map((l) => (
            <button key={l.id} type="button" className="dk-feature-row" onClick={() => navigate(l.id)}>
              <span className="dk-feature-row__lead">
                <span className="dk-feature-row__icon">{l.icon}</span>
                <span>
                  <strong>{l.label}</strong>
                  <small>{l.hint}</small>
                </span>
              </span>
              <ClientChevronRightIcon size={12} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function MisDatosPage({ navigate }: { navigate: NavFn }) {
  const [saved, setSaved] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(true);
  };
  return (
    <>
      <PageHero
        eyebrow="Cuenta"
        title="Mis datos"
        sub="Actualiza tu información de contacto para pedidos y notificaciones."
        actions={
          <button type="button" className="dk-link" onClick={() => navigate('mi-cuenta')}>
            ← Mi cuenta
          </button>
        }
      />
      <form className="dk-panel dk-form" onSubmit={onSubmit}>
        <label>
          Nombre completo
          <input name="nombre" defaultValue="Nicolás Cortés" />
        </label>
        <label>
          Correo
          <input name="correo" type="email" defaultValue="nicolas@correo.com" />
        </label>
        <label>
          Teléfono / WhatsApp
          <input name="tel" defaultValue="323 507 3227" />
        </label>
        {saved ? <p className="dk-toast">Datos guardados (prototipo).</p> : null}
        <button type="submit" className="dk-btn">
          Guardar cambios
        </button>
      </form>
    </>
  );
}

function DireccionesPage({ screenId, navigate }: Props) {
  const isAdd = screenId === 'agregar-direccion';
  const [saved, setSaved] = useState(false);

  if (isAdd) {
    return (
      <>
        <PageHero
          eyebrow="Domicilio"
          title="Agregar dirección"
          sub="Guarda un punto de entrega para pedidos a domicilio."
          actions={
            <button type="button" className="dk-link" onClick={() => navigate('mis-direcciones')}>
              ← Mis direcciones
            </button>
          }
        />
        <form
          className="dk-panel dk-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
            setTimeout(() => navigate('mis-direcciones'), 600);
          }}
        >
          <label>
            Alias
            <input name="alias" placeholder="Casa, Trabajo…" required />
          </label>
          <label>
            Dirección
            <input name="dir" placeholder="Calle / carrera y número" required />
          </label>
          <label>
            Barrio / referencia
            <input name="ref" placeholder="Las Cuadras, cerca al parque…" />
          </label>
          {saved ? <p className="dk-toast">Dirección guardada.</p> : null}
          <button type="submit" className="dk-btn">
            Guardar dirección
          </button>
        </form>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Domicilio"
        title="Mis direcciones"
        sub="Elige o agrega dónde quieres recibir tu pedido."
        actions={
          <>
            <button type="button" className="dk-link" onClick={() => navigate('mi-cuenta')}>
              ← Mi cuenta
            </button>
            <button type="button" className="dk-btn" onClick={() => navigate('agregar-direccion')}>
              Agregar dirección
            </button>
          </>
        }
      />
      <div className="dk-addr-grid">
        {[
          { alias: 'Casa', detail: 'Cra 25 # 18-40 · Las Cuadras' },
          { alias: 'Universidad', detail: 'Campus Torobajo · Portería principal' },
        ].map((a) => (
          <div key={a.alias} className="dk-addr-card">
            <strong>{a.alias}</strong>
            <p>{a.detail}</p>
            <span className="dk-badge">Guardada</span>
          </div>
        ))}
      </div>
    </>
  );
}

function PrivacidadPage({ navigate }: { navigate: NavFn }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacidad y datos"
        sub="Cómo usamos tu información en Whopper King Las Cuadras."
        actions={
          <button type="button" className="dk-link" onClick={() => navigate('mi-cuenta')}>
            ← Mi cuenta
          </button>
        }
      />
      <div className="dk-prose">
        <article className="dk-panel">
          <h2>Finalidades</h2>
          <ul>
            <li>Identificación y registro de clientes para gestión de pedidos.</li>
            <li>Envío de notificaciones operativas del estado de entrega vía WhatsApp o SMS.</li>
            <li>No comercializamos, cedemos ni compartimos tu información personal con terceros ni entidades financieras.</li>
          </ul>
        </article>
        <article className="dk-panel">
          <h2>Responsable</h2>
          <p>Whopper King Las Cuadras · NIT 000.000.000-0 · datos@whopperking.co</p>
        </article>
      </div>
    </>
  );
}

function ContactosPage({ navigate }: { navigate: NavFn }) {
  return (
    <>
      <PageHero
        eyebrow="Estamos cerca"
        title="Contactos"
        sub="Escríbenos, llámanos o pásate por el local en Las Cuadras."
        actions={
          <button type="button" className="dk-btn dk-btn--ghost" onClick={() => navigate('sobre-nosotros')}>
            Sobre nosotros
          </button>
        }
      />
      <div className="dk-contact-grid">
        <a className="dk-contact-card" href="https://wa.me/573235073227" target="_blank" rel="noreferrer">
          <ClientWhatsAppIcon size={40} />
          <strong>WhatsApp</strong>
          <span>+57 323 5073227</span>
          <small>Respuesta rápida para pedidos</small>
        </a>
        <a className="dk-contact-card" href="tel:+573235073227">
          <ClientHeadphonesIcon size={28} />
          <strong>Llamada</strong>
          <span>+57 323 5073227</span>
          <small>Lun–Dom 11:00 AM – 9:30 PM</small>
        </a>
        <div className="dk-contact-card">
          <ClientScheduleIcon size={28} />
          <strong>Horario</strong>
          <span>11:00 AM – 9:30 PM</span>
          <small>Todos los días</small>
        </div>
        <div className="dk-contact-card dk-contact-card--map">
          <ClientPinIcon size={28} />
          <strong>Ubicación</strong>
          <span>Whopper King · Las Cuadras · Pasto · Nariño</span>
          <small>El mapa no es clicable en el prototipo (como en móvil).</small>
        </div>
      </div>
    </>
  );
}

function PqrsPage({ screenId, navigate }: Props) {
  const [tipo, setTipo] = useState('Petición');
  if (screenId === 'pqrs-confirmacion' || screenId === 'pqrs-radicacion') {
    return (
      <div className="dk-center-stage">
        <div className="dk-panel dk-panel--narrow dk-panel--center">
          <div className="dk-success-mark" aria-hidden>
            ✓
          </div>
          <h1>PQRS radicada</h1>
          <p>Hemos recibido tu solicitud. Te responderemos en 24 a 48 horas hábiles a tu correo y WhatsApp.</p>
          <button type="button" className="dk-btn dk-btn--block" onClick={() => navigate('mi-cuenta')}>
            Volver a Mi cuenta
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Atención"
        title="PQRS"
        sub="Peticiones, quejas, reclamos o sugerencias. Te respondemos en 24–48 h hábiles."
        actions={
          <button type="button" className="dk-link" onClick={() => navigate('mi-cuenta')}>
            ← Mi cuenta
          </button>
        }
      />
      <form
        className="dk-panel dk-form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate('pqrs-confirmacion');
        }}
      >
        <label>
          Tipo
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            {['Petición', 'Queja', 'Reclamo', 'Sugerencia'].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          Correo
          <input type="email" required placeholder="tu@correo.com" />
        </label>
        <label>
          Teléfono / WhatsApp
          <input required placeholder="323…" />
        </label>
        <label>
          Mensaje
          <textarea required rows={5} placeholder={`Cuéntanos tu ${tipo.toLowerCase()}…`} />
        </label>
        <button type="submit" className="dk-btn">
          Enviar PQRS
        </button>
      </form>
    </>
  );
}

function AuthPage({ screenId, navigate }: Props) {
  const isLogin = screenId === 'login';
  const [asAdmin, setAsAdmin] = useState(false);

  return (
    <div className="dk-center-stage">
      <form
        className="dk-panel dk-panel--narrow dk-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (isLogin && asAdmin) navigate('inventario');
          else navigate('mi-cuenta');
        }}
      >
        <div className="dk-auth-logo">
          <BrandMark size={64} />
        </div>
        <p className="dk-eyebrow">Cuenta</p>
        <h1>{isLogin ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
        <p className="dk-hint">
          {isLogin
            ? 'Entra para ver tus datos y direcciones, o activa el modo administrador.'
            : 'Regístrate para agilizar tus próximos pedidos.'}
        </p>
        {!isLogin ? (
          <label>
            Nombre
            <input required name="nombre" />
          </label>
        ) : null}
        <label>
          Correo
          <input type="email" required name="correo" defaultValue="correo@gmail.com" />
        </label>
        <label>
          Contraseña
          <input type="password" required name="pass" minLength={4} defaultValue="1234" />
        </label>
        {isLogin ? (
          <button
            type="button"
            className={`dk-admin-toggle${asAdmin ? ' is-active' : ''}`}
            aria-pressed={asAdmin}
            onClick={() => setAsAdmin((v) => !v)}
          >
            <span className="dk-admin-toggle__left">
              <span className="dk-admin-toggle__glyph" aria-hidden>
                <ClientAdminModeIcon size={22} color="#2457c5" />
              </span>
              <span>Acceder al modo administrador</span>
            </span>
            <span className={`dk-admin-toggle__radio${asAdmin ? ' is-on' : ''}`} aria-hidden />
          </button>
        ) : null}
        <button type="submit" className="dk-btn dk-btn--block">
          {isLogin ? (asAdmin ? 'Entrar al panel' : 'Iniciar sesión') : 'Registrarme'}
        </button>
        <button
          type="button"
          className="dk-btn dk-btn--ghost dk-btn--block"
          style={{ marginTop: 10 }}
          onClick={() => navigate(isLogin ? 'registro' : 'login')}
        >
          {isLogin ? 'Crear cuenta' : 'Ya tengo cuenta'}
        </button>
      </form>
    </div>
  );
}

function AboutPage({ navigate }: { navigate: NavFn }) {
  return (
    <>
      <section className="dk-hero dk-hero--about">
        <div>
          <div className="dk-hero__kicker">
            <BrandMark size={64} />
            <div>
              <p className="dk-eyebrow">Nuestra historia</p>
              <h1 className="dk-hero__title">El sabor artesanal hecho con pasión</h1>
            </div>
          </div>
          <p className="dk-hero__sub">
            Hamburguesas colosales, ingredientes frescos y recetas secretas en el barrio Las Cuadras,
            Pasto. Abrimos todos los días de 11:00 AM a 9:30 PM.
          </p>
          <div className="dk-page-hero__actions">
            <button type="button" className="dk-btn" onClick={() => navigate('menu-burgers')}>
              Ordenar ahora
            </button>
            <button type="button" className="dk-btn dk-btn--ghost" onClick={() => navigate('contactos')}>
              Ver contactos
            </button>
          </div>
        </div>
        <div className="dk-about-stats">
          <div>
            <ClientClockIcon size={18} />
            <strong>11:00–21:30</strong>
            <span>Horario diario</span>
          </div>
          <div>
            <ClientPinIcon size={18} />
            <strong>Las Cuadras</strong>
            <span>Pasto, Nariño</span>
          </div>
          <div>
            <ClientStoreIcon size={18} />
            <strong>Local + domicilio</strong>
            <span>Mismo menú</span>
          </div>
        </div>
      </section>
      <div className="dk-split">
        <article className="dk-panel">
          <h2>Redes</h2>
          <div className="dk-feature-list">
            <a className="dk-feature-row" href="https://wa.me/573235073227" target="_blank" rel="noreferrer">
              <span className="dk-feature-row__lead">
                <ClientWhatsAppIcon size={28} />
                <span>
                  <strong>WhatsApp</strong>
                  <small>+57 323 5073227</small>
                </span>
              </span>
            </a>
            <div className="dk-feature-row">
              <span className="dk-feature-row__lead">
                <ClientInstagramIcon size={22} />
                <span>
                  <strong>Instagram</strong>
                  <small>@whopperking</small>
                </span>
              </span>
            </div>
            <div className="dk-feature-row">
              <span className="dk-feature-row__lead">
                <ClientFacebookIcon size={22} />
                <span>
                  <strong>Facebook</strong>
                  <small>Whopper King Pasto</small>
                </span>
              </span>
            </div>
          </div>
        </article>
        <article className="dk-panel">
          <h2>¿Por qué Whopper King?</h2>
          <p>
            Carne a la parrilla, combos pensados para compartir y un flujo de pedido pensado para
            mesa o domicilio — la misma experiencia del prototipo móvil, ahora en escritorio.
          </p>
        </article>
      </div>
    </>
  );
}

function UnavailablePage({ navigate }: { navigate: NavFn }) {
  return (
    <div className="dk-center-stage">
      <div className="dk-panel dk-panel--narrow dk-panel--center">
        <p className="dk-eyebrow">Pronto</p>
        <h1>Función no disponible</h1>
        <p>La búsqueda avanzada llegará en una próxima versión del prototipo.</p>
        <button type="button" className="dk-btn dk-btn--block" onClick={() => navigate('whopper-inicio')}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

function PageBody({ screenId, navigate }: Props) {
  if (screenId === 'whopper-inicio' || screenId === 'whopper-inicio-na') {
    return <Home navigate={navigate} />;
  }
  if (screenId.startsWith('menu') || screenId === 'menu') {
    return <MenuPage screenId={screenId} navigate={navigate} />;
  }
  if (screenId.startsWith('personaliza') || screenId === 'desc-texana') {
    return <ProductPage screenId={screenId} navigate={navigate} />;
  }
  if (screenId.includes('carrito')) {
    return <CartPage navigate={navigate} />;
  }
  if (screenId === 'escaneo-qr') {
    return <QrPage navigate={navigate} />;
  }
  if (screenId.startsWith('pago-')) {
    return <PayPage screenId={screenId} navigate={navigate} />;
  }
  if (screenId.startsWith('pedido-')) {
    return <OrderSuccessPage screenId={screenId} navigate={navigate} />;
  }
  if (screenId === 'sobre-nosotros') return <AboutPage navigate={navigate} />;
  if (screenId === 'contactos') return <ContactosPage navigate={navigate} />;
  if (screenId === 'mi-cuenta') return <AccountPage navigate={navigate} />;
  if (screenId === 'mis-datos') return <MisDatosPage navigate={navigate} />;
  if (screenId === 'mis-direcciones' || screenId === 'agregar-direccion') {
    return <DireccionesPage screenId={screenId} navigate={navigate} />;
  }
  if (screenId === 'privacidad') return <PrivacidadPage navigate={navigate} />;
  if (screenId.startsWith('pqrs')) return <PqrsPage screenId={screenId} navigate={navigate} />;
  if (screenId === 'login' || screenId === 'registro') {
    return <AuthPage screenId={screenId} navigate={navigate} />;
  }
  if (screenId === 'no-disponible') return <UnavailablePage navigate={navigate} />;
  return <Home navigate={navigate} />;
}

/** UI de escritorio del cliente — layout web completo, mismas rutas/funciones. */
export function DesktopClientApp({ screenId, navigate }: Props) {
  return (
    <div className="dk">
      <TopBar screenId={screenId} navigate={navigate} />
      <main className="dk-main">
        <PageBody screenId={screenId} navigate={navigate} />
      </main>
      <footer className="dk-footer">
        <span className="dk-footer__brand">
          <BrandMark size={28} />
          <span>© 2026 Whopper King · Pasto, Nariño</span>
        </span>
        <div style={{ display: 'flex', gap: 16 }}>
          <button type="button" onClick={() => navigate('privacidad')}>
            Política de datos
          </button>
          <button type="button" onClick={() => navigate('sobre-nosotros')}>
            Conócenos
          </button>
          <button type="button" onClick={() => navigate('contactos')}>
            Contactos
          </button>
        </div>
      </footer>
    </div>
  );
}

export default DesktopClientApp;
