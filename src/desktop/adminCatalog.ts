/** Datos del panel admin — mismos ítems / detalle del prototipo móvil. */

export type StockStatus = 'agotado' | 'bajo' | 'proximo' | 'ok';

export type StockLot = {
  code: string;
  badge?: string;
  availableReceived: string;
  receptionExpires: string;
  provider: string;
  receivedBy: string;
};

export type StockItem = {
  id: string;
  name: string;
  category: string;
  /** Valor numérico mostrado (sin unidad). */
  stockValue: string;
  minValue: string;
  stock: string;
  min: string;
  status: StockStatus;
  unit: string;
  unitLabel: string;
  code: string;
  detailScreen: string;
  gapToMin?: string;
  savedBy: string;
  lastChange: string;
  lot: StockLot;
};

export type Movement = {
  id: string;
  label: string;
  product: string;
  /** Cantidad en listado (con signo). */
  qty: string;
  /** Encabezado del detalle, p. ej. «Carne de res  +3 kg». */
  headline: string;
  /** Valor actual editable, p. ej. «3 kg». */
  currentValue: string;
  /** Unidad del campo nuevo valor. */
  unit: string;
  defaultNewValue: string;
  lot: string;
  receivedBy: string;
  originalDate: string;
  when: string;
  type: 'entrada' | 'salida' | 'ajuste';
  badge: string;
};

export type OrderItem = {
  name: string;
  detail: string;
  unitPrice: string;
  lineTotal: string;
  qty: number;
  /** id de producto en catalog.ts para imagen */
  productId: string;
};

export type OrderRow = {
  id: string;
  code: string;
  channel: string;
  total: string;
  when: string;
  utilidad: string;
  headline: string;
  originalTotal: string;
  mesa: string;
  originalDate: string;
  items: OrderItem[];
};

let selectedStockId = 'carne';
let selectedMovementId = 'mov-184';
let selectedOrderId = 'ped-1048';

export function setSelectedStock(id: string) {
  selectedStockId = id;
}

export function getSelectedStock(): StockItem {
  return STOCK.find((s) => s.id === selectedStockId) ?? STOCK[1];
}

export function setSelectedMovement(id: string) {
  selectedMovementId = id;
}

export function getSelectedMovement(): Movement {
  return MOVEMENTS.find((m) => m.id === selectedMovementId) ?? MOVEMENTS[0];
}

export function setSelectedOrder(id: string) {
  selectedOrderId = id;
}

export function getSelectedOrder(): OrderRow {
  return ORDERS.find((o) => o.id === selectedOrderId) ?? ORDERS[0];
}

export const STOCK: StockItem[] = [
  {
    id: 'tocineta',
    name: 'Tocineta',
    category: 'Carne',
    stockValue: '0',
    minValue: '2',
    stock: '0 kg',
    min: '2 kg',
    status: 'agotado',
    unit: 'kg',
    unitLabel: 'Kilogramos (kg)',
    code: 'INS-01',
    detailScreen: 'detalle-carne',
    gapToMin: 'Faltan 2 kg para el mínimo',
    savedBy: 'Ana Torres',
    lastChange: 'Camila Ruiz, 03 nov, 10:15',
    lot: {
      code: 'TOC-0311',
      availableReceived: '0 kg / 4 kg',
      receptionExpires: '03 nov - 10 nov 2026',
      provider: 'Carnes del Sur',
      receivedBy: 'Camila Ruiz\n03 nov, 09:40',
    },
  },
  {
    id: 'carne',
    name: 'Carne de res',
    category: 'Carne',
    stockValue: '2,4',
    minValue: '5',
    stock: '2,4 kg',
    min: '5 kg',
    status: 'bajo',
    unit: 'kg',
    unitLabel: 'Kilogramos (kg)',
    code: 'INS-02',
    detailScreen: 'detalle-carne',
    gapToMin: 'Faltan 2,6 kg para el mínimo',
    savedBy: 'Ana Torres',
    lastChange: 'Camila Ruiz, 04 nov, 16:20',
    lot: {
      code: 'RES-0411',
      badge: 'Usar primero',
      availableReceived: '1,4 kg / 5 kg',
      receptionExpires: '04 nov - 08 nov 2026',
      provider: 'Frigorífico Central',
      receivedBy: 'Camila Ruiz\n04 nov, 08:10',
    },
  },
  {
    id: 'queso',
    name: 'Queso chedar',
    category: 'Lácteos',
    stockValue: '1',
    minValue: '2',
    stock: '1 kg',
    min: '2 kg',
    status: 'bajo',
    unit: 'kg',
    unitLabel: 'Kilogramos (kg)',
    code: 'INS-03',
    detailScreen: 'detalle-carne',
    gapToMin: 'Falta 1 kg para el mínimo',
    savedBy: 'Ana Torres',
    lastChange: 'Jaramillo, 02 nov, 14:05',
    lot: {
      code: 'QUE-0211',
      badge: 'Usar primero',
      availableReceived: '1 kg / 3 kg',
      receptionExpires: '02 nov - 16 nov 2026',
      provider: 'Lácteos Nariño',
      receivedBy: 'Jaramillo\n02 nov, 13:50',
    },
  },
  {
    id: 'pan',
    name: 'Pan brioche',
    category: 'Panadería',
    stockValue: '24',
    minValue: '20',
    stock: '24 und',
    min: '20 und',
    status: 'proximo',
    unit: 'und',
    unitLabel: 'Unidades (und)',
    code: 'INS-04',
    detailScreen: 'detalle-carne',
    gapToMin: '4 und por encima del mínimo',
    savedBy: 'Ana Torres',
    lastChange: 'Camila Ruiz, 05 nov, 08:00',
    lot: {
      code: 'PAN-0511',
      availableReceived: '24 und / 40 und',
      receptionExpires: '05 nov - 07 nov 2026',
      provider: 'Panadería Central',
      receivedBy: 'Camila Ruiz\n05 nov, 07:45',
    },
  },
  {
    id: 'papa',
    name: 'Papa criolla',
    category: 'Verduras',
    stockValue: '6',
    minValue: '5',
    stock: '6 kg',
    min: '5 kg',
    status: 'proximo',
    unit: 'kg',
    unitLabel: 'Kilogramos (kg)',
    code: 'INS-05',
    detailScreen: 'detalle-carne',
    gapToMin: '1 kg por encima del mínimo',
    savedBy: 'Ana Torres',
    lastChange: 'Alba, 01 nov, 17:30',
    lot: {
      code: 'PAP-0111',
      availableReceived: '6 kg / 10 kg',
      receptionExpires: '01 nov - 12 nov 2026',
      provider: 'Mercado local',
      receivedBy: 'Alba\n01 nov, 17:10',
    },
  },
  {
    id: 'arroz',
    name: 'Arroz blanco',
    category: 'Abarrotes',
    stockValue: '18',
    minValue: '8',
    stock: '18 kg',
    min: '8 kg',
    status: 'ok',
    unit: 'kg',
    unitLabel: 'Kilogramos (kg)',
    code: 'INS-06',
    detailScreen: 'detalle-carne',
    gapToMin: '10 kg por encima del mínimo',
    savedBy: 'Ana Torres',
    lastChange: 'Camila Ruiz, 30 oct, 11:00',
    lot: {
      code: 'ARR-3010',
      availableReceived: '18 kg / 25 kg',
      receptionExpires: '30 oct - 30 dic 2026',
      provider: 'Distribuidora Andina',
      receivedBy: 'Camila Ruiz\n30 oct, 10:40',
    },
  },
];

export const PROVIDERS = [
  ...new Set(STOCK.map((s) => s.lot.provider)),
];

export const RECEIVERS = ['Ana Torres', 'Camila Ruiz', 'Jaramillo', 'Alba'];

export const MOVEMENTS: Movement[] = [
  {
    id: 'mov-184',
    label: 'MOV-184',
    product: 'Carne de res',
    qty: '+3 kg',
    headline: 'Carne de res  +3 kg',
    currentValue: '3 kg',
    unit: 'kg',
    defaultNewValue: '5',
    lot: 'RES-0511',
    receivedBy: 'Luis Rojas',
    originalDate: '05 nov 2026',
    when: '05 nov 2026',
    type: 'entrada',
    badge: 'Original',
  },
  {
    id: 'mov-183',
    label: 'MOV-183',
    product: 'Pan brioche',
    qty: '+40 und',
    headline: 'Pan brioche  +40 und',
    currentValue: '40 und',
    unit: 'und',
    defaultNewValue: '40',
    lot: 'PAN-0511',
    receivedBy: 'Camila Ruiz',
    originalDate: '05 nov 2026',
    when: 'Hoy · 11:05',
    type: 'entrada',
    badge: 'Original',
  },
  {
    id: 'mov-182',
    label: 'MOV-182',
    product: 'Tocineta',
    qty: '−2 kg',
    headline: 'Tocineta  −2 kg',
    currentValue: '2 kg',
    unit: 'kg',
    defaultNewValue: '2',
    lot: 'TOC-0311',
    receivedBy: 'Camila Ruiz',
    originalDate: '04 nov 2026',
    when: 'Ayer · 18:40',
    type: 'salida',
    badge: 'Original',
  },
  {
    id: 'mov-181',
    label: 'MOV-181',
    product: 'Queso chedar',
    qty: '+5 kg',
    headline: 'Queso chedar  +5 kg',
    currentValue: '5 kg',
    unit: 'kg',
    defaultNewValue: '5',
    lot: 'QUE-0211',
    receivedBy: 'Jaramillo',
    originalDate: '04 nov 2026',
    when: 'Ayer · 09:10',
    type: 'entrada',
    badge: 'Original',
  },
];

export const ORDERS: OrderRow[] = [
  {
    id: 'ped-1048',
    code: 'PED-1048',
    channel: 'Local · Mesa 4',
    total: '$ 62.600',
    when: 'Hoy · 13:48',
    utilidad: '$ 18.200',
    headline: '2 menús del día - Mesa 04',
    originalTotal: '$ 44.000',
    mesa: '04',
    originalDate: '05 nov 2026',
    items: [
      {
        name: 'Whopper',
        detail: 'Sencilla - $ 10.400 c/u',
        unitPrice: '$ 10.400',
        lineTotal: '$ 10.400',
        qty: 1,
        productId: 'whopper',
      },
      {
        name: 'Cow Boy',
        detail: 'Sencilla - $ 26.100 c/u',
        unitPrice: '$ 26.100',
        lineTotal: '$ 52.200',
        qty: 2,
        productId: 'cow-boy',
      },
    ],
  },
  {
    id: 'ped-1047',
    code: 'PED-1047',
    channel: 'Domicilio',
    total: '$ 38.400',
    when: 'Hoy · 12:15',
    utilidad: '$ 12.500',
    headline: 'Domicilio · 3 ítems',
    originalTotal: '$ 38.400',
    mesa: '—',
    originalDate: '06 nov 2026',
    items: [
      {
        name: 'Whopper',
        detail: 'Sencilla - $ 10.400 c/u',
        unitPrice: '$ 10.400',
        lineTotal: '$ 20.800',
        qty: 2,
        productId: 'whopper',
      },
      {
        name: 'Cow Boy',
        detail: 'Sencilla - $ 26.100 c/u',
        unitPrice: '$ 26.100',
        lineTotal: '$ 17.600',
        qty: 1,
        productId: 'cow-boy',
      },
    ],
  },
  {
    id: 'ped-1046',
    code: 'PED-1046',
    channel: 'Local · Mesa 2',
    total: '$ 21.400',
    when: 'Hoy · 11:02',
    utilidad: '$ 7.800',
    headline: '1 menú del día - Mesa 02',
    originalTotal: '$ 21.400',
    mesa: '02',
    originalDate: '06 nov 2026',
    items: [
      {
        name: 'Whopper',
        detail: 'Sencilla - $ 10.400 c/u',
        unitPrice: '$ 10.400',
        lineTotal: '$ 10.400',
        qty: 1,
        productId: 'whopper',
      },
      {
        name: 'Cow Boy',
        detail: 'Sencilla - $ 26.100 c/u',
        unitPrice: '$ 26.100',
        lineTotal: '$ 11.000',
        qty: 1,
        productId: 'cow-boy',
      },
    ],
  },
];

/** Datos de estadísticas alineados con las pantallas móvil. */
export const STATS_NUMBERS = {
  period: 'Hoy',
  netSales: '$1.420.000',
  yesterdayCut: '$1.310.000',
  grossProfit: '$880.000',
  margin: '62% margen',
  variation: '+$70.000',
  ordersCount: '50 órdenes',
  pace: 'Ritmo: 4,8 / hr',
  minSale: '$1.100.000',
  missingMin: '$500.000',
  completedPct: 30,
  closedOrders: '47 pedidos cerrados',
  accumulated: '322 pedidos acumulados',
  weekSales: '$9.150.000',
  topDay: 'Jueves',
  topDaySales: '$810.000',
  topDayNote: 'El día con más ventas de los últimos 7 días ha sido el jueves. Con $810.000.',
  weekBars: [
    { day: 'Lun', pct: 42 },
    { day: 'Mar', pct: 55 },
    { day: 'Mié', pct: 48 },
    { day: 'Jue', pct: 100 },
    { day: 'Vie', pct: 72 },
    { day: 'Sáb', pct: 88 },
    { day: 'Dom', pct: 63 },
  ],
};

export const STATS_CHANNELS = {
  delivery: {
    title: 'Domicilios',
    subtitle: 'Envíos recibidos por medios electrónicos',
    sales: '$923.000',
    profit: '$572.000',
    share: 65,
  },
  salon: {
    title: 'Restaurante',
    subtitle: 'Pedidos realizados en el restaurante Whopper King',
    sales: '$497.000',
    profit: '$308.000',
    share: 35,
  },
  difference: '$426.000',
};

export const STATS_PLATES = [
  {
    name: 'Whopper Clásica',
    units: '18 und',
    sales: '$432.000',
    profit: '$268.000',
    productId: 'whopper',
  },
  {
    name: 'Doble Bacon King',
    units: '9 und',
    sales: '$288.000',
    profit: '$178.000',
    productId: 'big-boy',
  },
  {
    name: 'Pollo Crispy',
    units: '7 und',
    sales: '$154.000',
    profit: '$95.000',
    productId: 'bandeja-broaster',
  },
];

export const STATS_INSUMOS_COST = '$899.000';
export const STATS_PLATES_TOTAL_UNITS = '34 und vendidas en total';

export function statusLabel(s: StockStatus): string {
  switch (s) {
    case 'agotado':
      return 'Agotado';
    case 'bajo':
      return 'Bajo mínimo';
    case 'proximo':
      return 'Próximo';
    default:
      return 'Disponible';
  }
}
