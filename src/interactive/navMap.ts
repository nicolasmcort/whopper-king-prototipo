/** Destino por etiqueta (texto normalizado) según pantalla actual. */
export type NavTarget = string | '__back__';

function n(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function normMap(m: Record<string, NavTarget>): Record<string, NavTarget> {
  const out: Record<string, NavTarget> = {};
  for (const [k, v] of Object.entries(m)) out[n(k)] = v;
  return out;
}

/** Acciones globales (barra inferior / títulos comunes). */

/** Navegación cliente (Whopper King). */
const CLIENT_GLOBAL = normMap({
  inicio: 'whopper-inicio',
  home: 'whopper-inicio',
  menu: 'menu',
  'ver menu': 'menu',
  'ver todos': 'menu',
  'nuestro menu': 'menu',
  buscar: 'menu',
  'que se te antoja': 'menu',
  almuerzo: 'menu-almuerzo',
  almuerzos: 'menu-almuerzo',
  burgers: 'menu-burgers',
  whoppers: 'menu-burgers',
  hamburguesas: 'menu-hamburguesas',
  pollo: 'menu-pollo',
  carne: 'menu-carne',
  pescado: 'menu-pescado',
  bebidas: 'menu-bebidas',
  carrito: 'tu-carrito-local',
  'mi carrito': 'tu-carrito-local',
  'a domicilio': 'tu-carrito-domicilio',
  'en el local': 'tu-carrito-local',
  'escanear qr': 'escaneo-qr',
  // Sin sesión: Mi cuenta lleva a login (no a la cuenta)
  'mi cuenta': 'login',
  'mis datos': 'mis-datos',
  'mis direcciones': 'mis-direcciones',
  'agregar direccion': 'agregar-direccion',
  'agregar dirección': 'agregar-direccion',
  privacidad: 'privacidad',
  contactos: 'contactos',
  contactanos: 'contactos',
  'contáctanos': 'contactos',
  'sobre nosotros': 'sobre-nosotros',
  conocernos: 'sobre-nosotros',
  pqrs: 'pqrs',
  'iniciar sesion': 'login',
  'iniciar sesión': 'login',
  registrarse: 'registro',
  'crear cuenta': 'registro',
  'registra tu cuenta': 'registro',
  nequi: 'pago-dom-nequi',
  'bre-b': 'pago-dom-breb',
  breb: 'pago-dom-breb',
  efectivo: 'pago-dom-efectivo',
  tarjeta: 'pago-dom-tarjeta',
  // Entrada admin (placa azul) desde login
  administrador: 'numeros-negocio',
  'modo administrador': 'numeros-negocio',
  'acceder al modo administrador': 'numeros-negocio',
  texana: 'desc-texana',
});

const GLOBAL = normMap({
  inventario: 'inventario',
  historial: 'historial-movimientos',
  estadisticas: 'numeros-negocio',
});

/** Atajos comunes entre tabs de Estadísticas */
const STATS_TABS: Record<string, NavTarget> = {
  'ventas hoy': 'numeros-negocio',
  canal: 'ventas-canal',
  'ventas por': 'ventas-canal',
  insumos: 'platos-insumos',
  'platos e': 'platos-insumos',
  platos: 'platos-insumos',
};

/** Por pantalla: etiqueta → destino */
const BY_SCREEN_RAW: Record<string, Record<string, NavTarget>> = {
  inventario: {
    'agregar al inventario': 'agregar-existente',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
    'carne de res': 'detalle-carne',
    'pan brioche': 'detalle-carne',
    'papa criolla': 'detalle-carne',
    'arroz blanco': 'detalle-carne',
    tocineta: 'detalle-carne',
    'queso chedar': 'detalle-carne',
  },
  'detalle-carne': {
    cerrar: '__back__',
    agregar: 'agregar-existente',
    'guardar alerta': 'inventario',
    movimientos: 'historial-movimientos',
    lotes: 'detalle-carne',
  },
  'agregar-existente': {
    cerrar: '__back__',
    cancelar: 'inventario',
    guardar: 'inventario',
    'nuevo producto': 'agregar-nuevo',
    'producto existente': 'agregar-existente',
  },
  'agregar-nuevo': {
    cerrar: '__back__',
    cancelar: 'inventario',
    guardar: 'inventario',
    'producto existente': 'agregar-existente',
    'nuevo producto': 'agregar-nuevo',
  },
  'historial-movimientos': {
    inventario: 'inventario',
    estadisticas: 'numeros-negocio',
    pedidos: 'historial-pedidos',
    movimientos: 'historial-movimientos',
    modificar: 'editar-movimiento',
    eliminar: 'confirmar-eliminacion',
    'ver informacion': 'ajuste-mov-184',
    'ajustes (1)': 'ajuste-mov-184',
    'mov-184 - 05 nov 2026': 'editar-movimiento',
    'carne de res - lote res-0511': 'detalle-carne',
  },
  'historial-pedidos': {
    inventario: 'inventario',
    estadisticas: 'numeros-negocio',
    movimientos: 'historial-movimientos',
    pedidos: 'historial-pedidos',
    modificar: 'editar-pedido',
    eliminar: 'confirmar-eliminacion',
    'ajustes (1)': 'ajuste-ped-1048',
    '#ped-1048 - 06 nov - 09:32': 'editar-pedido',
  },
  'editar-movimiento': {
    cerrar: 'historial-movimientos',
    cancelar: 'historial-movimientos',
    'revisar correccion': 'confirmar-correccion',
    'revisar correción': 'confirmar-correccion',
    'revisar modificacion': 'confirmar-correccion',
  },
  'confirmar-correccion': {
    cerrar: 'editar-movimiento',
    cancelar: 'editar-movimiento',
    'confirmar modificacion': 'historial-movimientos',
    'revisar modificacion': 'confirmar-correccion',
  },
  'ajuste-mov-184': {
    cerrar: 'historial-movimientos',
  },
  'eliminacion-mov-184': {
    cerrar: 'historial-movimientos',
    cancelar: 'historial-movimientos',
    'si, eliminar registro': 'confirmar-eliminacion',
    'mov-184 - entrada': 'confirmar-eliminacion',
    eliminacion: 'confirmar-eliminacion',
  },
  'confirmar-eliminacion': {
    cerrar: 'eliminacion-mov-184',
    cancelar: 'historial-movimientos',
    'si, eliminar registro': 'registro-eliminado',
  },
  'registro-eliminado': {
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
    movimientos: 'historial-movimientos',
    pedidos: 'historial-pedidos',
    'ver informacion': 'ajuste-mov-184',
  },
  'numeros-negocio': {
    ...STATS_TABS,
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
  },
  'ventas-canal': {
    ...STATS_TABS,
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
  },
  'platos-insumos': {
    ...STATS_TABS,
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
  },
  'editar-pedido': {
    cerrar: 'historial-pedidos',
    cancelar: 'historial-pedidos',
    'revisar pedido': 'confirmar-pedido',
    'agregar producto': 'pedido-anadir',
    'añadir producto': 'pedido-anadir',
    'quitar producto': 'pedido-quitado',
  },
  'pedido-anadir': {
    cerrar: 'editar-pedido',
    'volver al pedido': 'editar-pedido',
    'agregar producto': 'pedido-anadido',
    'añadir producto': 'pedido-anadir',
  },
  'pedido-quitado': {
    cerrar: 'historial-pedidos',
    cancelar: 'historial-pedidos',
    'revisar pedido': 'confirmar-pedido',
    'agregar producto': 'pedido-anadir',
    'quitar producto': 'pedido-quitado',
  },
  'pedido-anadido': {
    cerrar: 'historial-pedidos',
    cancelar: 'historial-pedidos',
    'revisar pedido': 'confirmar-pedido',
    'agregar producto': 'pedido-anadir',
    'quitar producto': 'pedido-quitado',
  },
  'confirmar-pedido': {
    cerrar: 'editar-pedido',
    cancelar: 'editar-pedido',
    'seguir editando': 'editar-pedido',
    'confirmar pedido': 'historial-pedidos',
    'quitar producto': 'pedido-quitado',
    'añadir producto': 'pedido-anadir',
    'agregar producto': 'pedido-anadir',
  },
  'ajuste-ped-1048': {
    cerrar: 'historial-pedidos',
  },

  'whopper-inicio': {
    menu: 'menu',
    'ver menu': 'menu',
    'ver todos': 'menu',
    buscar: 'menu',
    'iniciar sesion': 'login',
    'iniciar sesión': 'login',
    'mi cuenta': 'login',
    'sobre nosotros': 'sobre-nosotros',
    conocernos: 'sobre-nosotros',
    contactanos: 'contactos',
    'contáctanos': 'contactos',
    pqrs: 'pqrs',
    carrito: 'tu-carrito-local',
    whoppers: 'menu-burgers',
    almuerzos: 'menu-almuerzo',
    bebidas: 'menu-bebidas',
  },
  login: {
    registrarse: 'registro',
    'crear cuenta': 'registro',
    'registra tu cuenta': 'registro',
    'continuar con google': 'mi-cuenta',
    // Login cliente → cuenta; admin → placa azul (estadísticas)
    'iniciar sesion': 'mi-cuenta',
    'iniciar sesión': 'mi-cuenta',
    administrador: 'numeros-negocio',
    'modo administrador': 'numeros-negocio',
    'acceder al modo administrador': 'numeros-negocio',
    continuar: 'sms-telefono',
    'olvidaste tu contrasena': 'correo-cambiar',
    'olvidaste tu contraseña': 'correo-cambiar',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
    cerrar: 'whopper-inicio',
  },
  registro: {
    continuar: 'sms-telefono',
    'iniciar sesion': 'login',
    'iniciar sesión': 'login',
    volver: 'login',
    atras: 'login',
  },
  'sms-telefono': {
    continuar: 'mi-cuenta',
    verificar: 'mi-cuenta',
    volver: 'login',
    atras: 'login',
  },
  'correo-cambiar': {
    continuar: 'login',
    enviar: 'login',
    volver: 'login',
    atras: 'login',
  },
  menu: {
    almuerzo: 'menu-almuerzo',
    burgers: 'menu-burgers',
    whoppers: 'menu-burgers',
    hamburguesas: 'menu-hamburguesas',
    pollo: 'menu-pollo',
    carne: 'menu-carne',
    pescado: 'menu-pescado',
    bebidas: 'menu-bebidas',
    carrito: 'tu-carrito-local',
    inicio: 'whopper-inicio',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-burgers': {
    whopper: 'personaliza-whopper',
    carrito: 'tu-carrito-local',
    menu: 'menu',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-burgers-00': {
    whopper: 'personaliza-whopper',
    carrito: 'tu-carrito-local',
    menu: 'menu',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-almuerzo': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    texana: 'desc-texana',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-pollo': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-carne': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-pescado': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-bebidas': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-hamburguesas': {
    menu: 'menu',
    whopper: 'personaliza-whopper',
    'mi cuenta': 'login',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'personaliza-whopper': {
    'mini combo': 'personaliza-whopper-mini',
    'maxi combo': 'personaliza-whopper-maxi',
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    'mi cuenta': 'login',
    volver: 'menu-burgers',
    atras: 'menu-burgers',
  },
  'personaliza-whopper-mini': {
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    volver: 'personaliza-whopper',
    atras: 'personaliza-whopper',
  },
  'personaliza-whopper-maxi': {
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    volver: 'personaliza-whopper',
    atras: 'personaliza-whopper',
  },
  'desc-texana': {
    'mini combo': 'personaliza-texana-mini',
    'maxi combo': 'personaliza-texana-maxi',
    agregar: 'tu-carrito-local',
    volver: 'menu-almuerzo',
    atras: 'menu-almuerzo',
  },
  'personaliza-texana-mini': {
    agregar: 'tu-carrito-local',
    carrito: 'tu-carrito-local',
    volver: 'desc-texana',
    atras: 'desc-texana',
  },
  'personaliza-texana-maxi': {
    agregar: 'tu-carrito-local',
    carrito: 'tu-carrito-local',
    volver: 'desc-texana',
    atras: 'desc-texana',
  },
  'tu-carrito-local': {
    pagar: 'pago-local-nequi',
    'elegir pago': 'pago-local-nequi',
    'a domicilio': 'tu-carrito-domicilio',
    'escanear qr': 'escaneo-qr',
    quitar: 'quitar-producto-cliente',
    menu: 'menu',
    inicio: 'whopper-inicio',
    'mi cuenta': 'login',
    volver: 'menu',
    atras: 'menu',
  },
  'tu-carrito-domicilio': {
    pagar: 'pago-dom-nequi',
    'elegir pago': 'pago-dom-nequi',
    local: 'tu-carrito-local',
    'en el local': 'tu-carrito-local',
    menu: 'menu',
    inicio: 'whopper-inicio',
    'mi cuenta': 'login',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'carrito-local': {
    pagar: 'pago-local-nequi',
    menu: 'menu',
    'mi cuenta': 'login',
  },
  'carrito-domicilio': {
    pagar: 'pago-dom-nequi',
    menu: 'menu',
    'mi cuenta': 'login',
  },
  'pago-local-nequi': {
    confirmar: 'pedido-enviado-local',
    nequi: 'pago-local-nequi',
    efectivo: 'pago-local-efectivo',
    tarjeta: 'pago-local-tarjeta',
    'bre-b': 'pago-local-breb',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-local-efectivo': {
    confirmar: 'pedido-enviado-local',
    nequi: 'pago-local-nequi',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-local-tarjeta': {
    confirmar: 'pedido-enviado-local',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-local-breb': {
    confirmar: 'pedido-enviado-local',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-dom-nequi': {
    confirmar: 'pedido-enviado-domicilio',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pago-dom-efectivo': {
    confirmar: 'pedido-enviado-domicilio',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pago-dom-tarjeta': {
    confirmar: 'pedido-enviado-domicilio',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pago-dom-breb': {
    confirmar: 'pedido-enviado-domicilio',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pedido-enviado-local': { inicio: 'whopper-inicio', menu: 'menu', continuar: 'whopper-inicio' },
  'pedido-enviado-domicilio': { inicio: 'whopper-inicio', menu: 'menu', continuar: 'whopper-inicio' },
  'pedido-exitoso-local': { inicio: 'whopper-inicio', menu: 'menu', continuar: 'whopper-inicio' },
  'fallo-pago': {
    reintentar: 'pago-dom-nequi',
    carrito: 'tu-carrito-domicilio',
    volver: 'tu-carrito-domicilio',
  },
  'quitar-producto-cliente': {
    confirmar: 'tu-carrito-local',
    quitar: 'tu-carrito-local',
    cancelar: 'tu-carrito-local',
    volver: 'tu-carrito-local',
  },
  'mi-cuenta': {
    'mis datos': 'mis-datos',
    'mis direcciones': 'mis-direcciones',
    privacidad: 'privacidad',
    contactos: 'contactos',
    'eliminar cuenta': 'elim-cuenta',
    'cerrar sesion': 'login',
    'cerrar sesión': 'login',
    // Ya dentro de la cuenta: no rebotar a login
    'mi cuenta': 'mi-cuenta',
    inicio: 'whopper-inicio',
    menu: 'menu',
    carrito: 'tu-carrito-local',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'mis-datos': {
    guardar: 'mi-cuenta',
    volver: 'mi-cuenta',
    atras: 'mi-cuenta',
    'mi cuenta': 'mi-cuenta',
  },
  'mis-direcciones': {
    agregar: 'agregar-direccion',
    'agregar direccion': 'agregar-direccion',
    eliminar: 'confirmar-elim-direccion',
    volver: 'mi-cuenta',
    atras: 'mi-cuenta',
    'mi cuenta': 'mi-cuenta',
  },
  'agregar-direccion': { guardar: 'mis-direcciones', cancelar: 'mis-direcciones', volver: 'mis-direcciones' },
  'confirmar-elim-direccion': { confirmar: 'mis-direcciones', cancelar: 'mis-direcciones', eliminar: 'mis-direcciones' },
  privacidad: { volver: 'mi-cuenta', atras: 'mi-cuenta', 'mi cuenta': 'mi-cuenta' },
  contactos: { volver: 'mi-cuenta', atras: 'mi-cuenta', inicio: 'whopper-inicio', 'mi cuenta': 'mi-cuenta' },
  'elim-cuenta': {
    confirmar: 'login',
    eliminar: 'login',
    cancelar: 'mi-cuenta',
    volver: 'mi-cuenta',
  },
  pqrs: {
    enviar: 'pqrs-confirmacion',
    continuar: 'pqrs-radicacion',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'pqrs-confirmacion': { continuar: 'pqrs-radicacion', inicio: 'whopper-inicio' },
  'pqrs-radicacion': { inicio: 'whopper-inicio', continuar: 'whopper-inicio' },
  'sobre-nosotros': {
    inicio: 'whopper-inicio',
    menu: 'menu',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'escaneo-qr': { continuar: 'tu-carrito-local', cancelar: 'tu-carrito-local', volver: 'tu-carrito-local' },

  'no-implementada': {
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
    cerrar: 'inventario',
    volver: 'inventario',
  },
};

const BY_SCREEN: Record<string, Record<string, NavTarget>> = Object.fromEntries(
  Object.entries(BY_SCREEN_RAW).map(([id, map]) => [id, normMap(map)]),
);

const BUTTONISH = new Set(
  [
    'cerrar',
    'cancelar',
    'guardar',
    'guardar alerta',
    'modificar',
    'eliminar',
    'agregar',
    'agregar al inventario',
    'agregar producto',
    'añadir producto',
    'quitar producto',
    'revisar pedido',
    'revisar correccion',
    'revisar correción',
    'revisar modificacion',
    'confirmar pedido',
    'confirmar modificacion',
    'seguir editando',
    'si, eliminar registro',
    'volver al pedido',
    'nuevo producto',
    'producto existente',
    'inventario',
    'historial',
    'estadisticas',
    'movimientos',
    'pedidos',
    'lotes',
    'ver informacion',
    'registrarse',
    'continuar',
    'verificar',
    'pagar',
    'confirmar',
    'reintentar',
    'enviar',
    'agregar al carrito',
    'añadir al carrito',
    'ventas hoy',
    'canal',
    'insumos',
    'platos e',
    'ventas por',
  ].map(n),
);

/** Textos que deben volverse editables al hacer clic / al montar. */
const EDITABLE = new Set(
  [
    'buscar producto o código',
    'buscar producto o codigo',
    'buscar producto',
    'porque sí.',
    'porque si.',
    'aceite de girasol',
    'seleccionar proveedor',
    'ana torres',
    'aaaaaaaa-aaaaaaa-000000',
    'kilogramos (kg)',
    '06/05/2027',
    '3 kg',
    '5 kg',
    '2,4',
    'nuevo valor (kg) *',
  ].map(n),
);

export function normalizeLabel(text: string) {
  return n(text);
}

/** Botones solo-ícono del export Figma → clave textual para resolveNav. */
const FIGMA_ID_ACTIONS: Record<string, string> = {
  '711:1141': 'volver', // flecha atrás en headers de menú/categoría
  '679:1635': 'carrito', // carrito header inicio
  '679:1637': 'carrito',
  '585:2333': 'volver', // X / atrás en login
  '585:2334': 'volver',
  '585:2364': 'administrador', // fila “Acceder al modo administrador”
  '585:2091': 'administrador',
  '585:2098': 'administrador',
};

/** Preferir la clave más larga que matchee (evita whopper ⊂ whoppers). */
function bestPartial(
  key: string,
  map: Record<string, NavTarget>,
): NavTarget | null {
  let best: NavTarget | null = null;
  let bestLen = -1;
  for (const [k, v] of Object.entries(map)) {
    if (!k) continue;
    if (key === k || key.startsWith(k + ' ') || key.includes(k) || k.startsWith(key)) {
      if (k.length > bestLen) {
        best = v;
        bestLen = k.length;
      }
    }
  }
  return best;
}

export function resolveFigmaNav(screenId: string, figmaId: string): NavTarget | null {
  const action = FIGMA_ID_ACTIONS[figmaId];
  if (!action) return null;
  const dest = resolveNav(screenId, action);
  if (dest) return dest;
  if (action === 'volver') return 'whopper-inicio';
  if (action === 'carrito') return 'tu-carrito-local';
  if (action === 'administrador') return 'numeros-negocio';
  return null;
}

export function resolveNav(screenId: string, rawLabel: string): NavTarget | null {
  const key = n(rawLabel);
  if (!key) return null;
  const local = BY_SCREEN[screenId];
  if (local && key in local) return local[key];
  if (local) {
    const hit = bestPartial(key, local);
    if (hit) return hit;
  }
  if (key in GLOBAL) return GLOBAL[key];
  {
    const hit = bestPartial(key, GLOBAL);
    if (hit) return hit;
  }
  if (key in CLIENT_GLOBAL) return CLIENT_GLOBAL[key];
  return bestPartial(key, CLIENT_GLOBAL);
}

export function isButtonish(rawLabel: string) {
  const key = n(rawLabel);
  if (BUTTONISH.has(key)) return true;
  // short UI labels often buttons
  return /^(modificar|eliminar|guardar|cancelar|cerrar|agregar|añadir|quitar|revisar|confirmar|volver|iniciar|acceder|continuar|registra|olvidaste|ver todos|buscar)/i.test(
    rawLabel.trim(),
  );
}

export function isEditableLabel(rawLabel: string) {
  const key = n(rawLabel);
  if (EDITABLE.has(key)) return true;
  // Solo placeholders / valores de formulario explícitos (no celdas de tabla)
  if (/^buscar /i.test(rawLabel.trim())) return true;
  if (/^seleccionar /i.test(rawLabel.trim())) return true;
  if (/^porque s[ií]\.?$/i.test(rawLabel.trim())) return true;
  if (/^aaaaaaaa/i.test(rawLabel.trim())) return true;
  return false;
}
