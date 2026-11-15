export type CartItem = {
  id: string;
  name: string;
  variant: string;
  unitPrice: number;
  qty: number;
  image: string;
};

export type Fulfillment = 'local' | 'domicilio';

export const DELIVERY_FEE = 4000;

export type CartState = {
  items: CartItem[];
  fulfillment: Fulfillment;
};

/** Pedido confirmado (congelado para pantallas de éxito / preparación). */
export type OrderSnapshot = {
  items: CartItem[];
  fulfillment: Fulfillment;
  subtotal: number;
  delivery: number;
  total: number;
};

const WHOPPER_IMG =
  'https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/961948be-e1a8-485b-bc9d-b272387ae3a6.jpg';
const TEXANA_IMG =
  'https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/787e0899-fa0d-4dd6-9659-85d325bcf7a8.jpg';

/** Catálogo por pantalla de personalización / detalle. */
export const PRODUCT_BY_SCREEN: Record<
  string,
  Omit<CartItem, 'qty'>
> = {
  'personaliza-whopper': {
    id: 'whopper-sencilla',
    name: 'Whopper',
    variant: 'Sencilla',
    unitPrice: 10400,
    image: WHOPPER_IMG,
  },
  'personaliza-whopper-mini': {
    id: 'whopper-mini',
    name: 'Whopper',
    variant: 'Mini Combo',
    unitPrice: 17100,
    image: WHOPPER_IMG,
  },
  'personaliza-whopper-maxi': {
    id: 'whopper-maxi',
    name: 'Whopper',
    variant: 'Maxi Combo',
    unitPrice: 19600,
    image: WHOPPER_IMG,
  },
  'desc-texana': {
    id: 'texana-sencilla',
    name: 'Texana Especial',
    variant: 'Sencilla',
    unitPrice: 23500,
    image: TEXANA_IMG,
  },
  'personaliza-texana-mini': {
    id: 'texana-mini',
    name: 'Texana Especial',
    variant: 'Mini Combo',
    unitPrice: 30200,
    image: TEXANA_IMG,
  },
  'personaliza-texana-maxi': {
    id: 'texana-maxi',
    name: 'Texana Especial',
    variant: 'Maxi Combo',
    unitPrice: 32700,
    image: TEXANA_IMG,
  },
};

const INITIAL: CartState = {
  fulfillment: 'local',
  items: [
    {
      id: 'whopper-sencilla',
      name: 'Whopper',
      variant: 'Sencilla',
      unitPrice: 10400,
      qty: 1,
      image: WHOPPER_IMG,
    },
    {
      id: 'texana-sencilla',
      name: 'Texana Especial',
      variant: 'Sencilla',
      unitPrice: 23500,
      qty: 2,
      image: TEXANA_IMG,
    },
  ],
};

let state: CartState = structuredClone(INITIAL);
let lastOrder: OrderSnapshot | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function getCart(): CartState {
  return state;
}

export function getLastOrder(): OrderSnapshot | null {
  return lastOrder;
}

/** Congela el carrito actual como pedido confirmado. */
export function commitOrder(): OrderSnapshot {
  const { subtotal, delivery, total } = cartTotals();
  lastOrder = {
    items: state.items.map((i) => ({ ...i })),
    fulfillment: state.fulfillment,
    subtotal,
    delivery,
    total,
  };
  emit();
  return lastOrder;
}

/** Resumen a mostrar en pantallas de pedido (snapshot o carrito vivo). */
export function getOrderForSummary(): OrderSnapshot {
  if (lastOrder) return lastOrder;
  const { subtotal, delivery, total } = cartTotals();
  return {
    items: state.items.map((i) => ({ ...i })),
    fulfillment: state.fulfillment,
    subtotal,
    delivery,
    total,
  };
}

export function subscribeCart(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function formatCOP(n: number): string {
  return `$ ${n.toLocaleString('es-CO')}`;
}

export function cartTotals(
  items = state.items,
  fulfillment = state.fulfillment,
) {
  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const delivery = fulfillment === 'domicilio' ? DELIVERY_FEE : 0;
  return { count, subtotal, delivery, total: subtotal + delivery };
}

export function setFulfillment(fulfillment: Fulfillment) {
  if (state.fulfillment === fulfillment) return;
  state = { ...state, fulfillment };
  emit();
}

export function payScreenForCart(method = 'nequi'): string {
  const prefix = state.fulfillment === 'domicilio' ? 'pago-dom' : 'pago-local';
  return `${prefix}-${method}`;
}

export function addProductFromScreen(screenId: string, qty = 1) {
  const product = PRODUCT_BY_SCREEN[screenId];
  if (!product) {
    // Fallback: si vienen de menú de burgers sin personalizar, suma Whopper sencilla
    const fallback = PRODUCT_BY_SCREEN['personaliza-whopper'];
    if (!fallback) return;
    addOrInc({ ...fallback, qty });
    return;
  }
  addOrInc({ ...product, qty });
}

function addOrInc(item: CartItem) {
  const existing = state.items.find((i) => i.id === item.id);
  if (existing) {
    state = {
      ...state,
      items: state.items.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + item.qty } : i,
      ),
    };
  } else {
    state = { ...state, items: [...state.items, item] };
  }
  emit();
}

export function incItem(id: string) {
  state = {
    ...state,
    items: state.items.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)),
  };
  emit();
}

export function decItem(id: string) {
  const target = state.items.find((i) => i.id === id);
  if (!target) return;
  if (target.qty <= 1) {
    state = { ...state, items: state.items.filter((i) => i.id !== id) };
  } else {
    state = {
      ...state,
      items: state.items.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)),
    };
  }
  emit();
}

export function removeItem(id: string) {
  state = { ...state, items: state.items.filter((i) => i.id !== id) };
  emit();
}
