/** Destino por etiqueta (texto normalizado) según pantalla actual. */
export type NavTarget = string | '__back__';

function n(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¡!¿?.,;:…«»"'“”]/g, '')
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
  'ver todos': 'menu-burgers',
  'nuestro menu': 'menu',
  buscar: 'no-disponible',
  'que se te antoja': 'menu',
  almuerzo: 'menu-almuerzo',
  almuerzos: 'menu-almuerzo',
  burgers: 'menu-burgers',
  whoppers: 'menu-burgers',
  hamburguesas: 'menu-burgers',
  pollo: 'menu-pollo',
  carne: 'menu-carne',
  pescado: 'menu-pescado',
  bebidas: 'menu-bebidas',
  carrito: 'tu-carrito-local',
  'mi carrito': 'tu-carrito-local',
  'a domicilio': 'tu-carrito-domicilio',
  'en el local': 'tu-carrito-local',
  'escanear qr': 'escaneo-qr',
  // Prototipo: Mi cuenta abre la pantalla de cuenta (login queda desde Iniciar sesión)
  'mi cuenta': 'mi-cuenta',
  cuenta: 'mi-cuenta',
  at: 'mi-cuenta',
  'mis datos': 'mis-datos',
  'mis direcciones': 'mis-direcciones',
  'agregar direccion': 'agregar-direccion',
  'agregar dirección': 'agregar-direccion',
  privacidad: 'privacidad',
  // contactos / WhatsApp / etc. no navegan desde el prototipo (quedan visuales)
  'sobre nosotros': 'sobre-nosotros',
  conocernos: 'sobre-nosotros',
  'da clic aqui para conocernos': 'sobre-nosotros',
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
  texana: 'desc-texana',
  whopper: 'personaliza-whopper',
});

const GLOBAL = normMap({
  inventario: 'inventario',
  historial: 'historial-movimientos',
  estadisticas: 'numeros-negocio',
  cliente: 'whopper-inicio',
  'ir a cliente': 'whopper-inicio',
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

/** Detalle provisional compartido para cualquier hamburguesa del menú. */
const BURGER_DETAIL = 'personaliza-whopper';
const BURGER_DETAIL_NAV: Record<string, NavTarget> = {
  whopper: BURGER_DETAIL,
  'whopper king': BURGER_DETAIL,
  'whopper bbq': BURGER_DETAIL,
  'whopper hawaiana': BURGER_DETAIL,
  'whopper pollo milanesa': BURGER_DETAIL,
  'whopper criolla': BURGER_DETAIL,
  'chesse whopper': BURGER_DETAIL,
  'cheese whopper': BURGER_DETAIL,
  'cow boy': BURGER_DETAIL,
  'big boy': BURGER_DETAIL,
  'todo terreno especial': BURGER_DETAIL,
  'todo terreno': BURGER_DETAIL,
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
    // Hamburguesa superior → cliente; avatar AT → cuenta
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    cuenta: 'mi-cuenta',
    at: 'mi-cuenta',
  },
  'detalle-carne': {
    cerrar: '__back__',
    agregar: 'agregar-existente',
    'guardar alerta': 'inventario',
    movimientos: 'historial-movimientos',
    lotes: 'detalle-carne',
  },
  'agregar-existente': {
    // Cerrar siempre a inventario (no __back__: el selector nuevo/existente apila historial)
    cerrar: 'inventario',
    cancelar: 'inventario',
    guardar: 'inventario',
    'nuevo producto': 'agregar-nuevo',
    'producto existente': 'agregar-existente',
  },
  'agregar-nuevo': {
    cerrar: 'inventario',
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
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    cuenta: 'mi-cuenta',
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
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    cuenta: 'mi-cuenta',
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
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    cuenta: 'mi-cuenta',
  },
  'numeros-negocio': {
    ...STATS_TABS,
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    cuenta: 'mi-cuenta',
  },
  'ventas-canal': {
    ...STATS_TABS,
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    cuenta: 'mi-cuenta',
  },
  'platos-insumos': {
    ...STATS_TABS,
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    cuenta: 'mi-cuenta',
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
    'ver todos': 'menu-burgers',
    buscar: 'no-disponible',
    'iniciar sesion': 'login',
    'iniciar sesión': 'login',
    'mi cuenta': 'mi-cuenta',
    'sobre nosotros': 'sobre-nosotros',
    conocernos: 'sobre-nosotros',
    'da clic aqui para conocernos': 'sobre-nosotros',
    'da clic aquí para conocernos': 'sobre-nosotros',
    '¡da clic aqui para conocernos!': 'sobre-nosotros',
    '¡da clic aquí para conocernos!': 'sobre-nosotros',
    // Iconos de contacto en inicio: sin navegación (prototipo)
    pqrs: 'pqrs',
    carrito: 'tu-carrito-local',
    whoppers: 'menu-burgers',
    almuerzos: 'menu-almuerzo',
    'almuerzos y menus': 'menu-almuerzo',
    'almuerzos y menús': 'menu-almuerzo',
    // Chip «Pollo, Carne y Pescado» → siempre Pollo (primera sección)
    pollo: 'menu-pollo',
    'pollo carne': 'menu-pollo',
    'pollo carne y pescado': 'menu-pollo',
    'y pescado': 'menu-pollo',
    bebidas: 'menu-bebidas',
    privacidad: 'privacidad',
    'politica de tratamiento de datos': 'privacidad',
    'política de tratamiento de datos': 'privacidad',
    'terminos y condiciones': 'privacidad',
    'términos y condiciones': 'privacidad',
  },
  login: {
    registrarse: 'registro',
    'crear cuenta': 'registro',
    'registra tu cuenta': 'registro',
    'continuar con google': 'mi-cuenta',
    // Iniciar sesión → cuenta; admin solo si la fila está seleccionada (enhanceDom)
    'iniciar sesion': 'mi-cuenta',
    'iniciar sesión': 'mi-cuenta',
    continuar: 'sms-telefono',
    'olvidaste tu contrasena': 'recuperar-contrasena',
    'olvidaste tu contraseña': 'recuperar-contrasena',
    olvidaste: 'recuperar-contrasena',
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
  'recuperar-contrasena': {
    sms: 'sms-telefono',
    'recibir sms': 'sms-telefono',
    telefono: 'sms-telefono',
    teléfono: 'sms-telefono',
    correo: 'correo-cambiar',
    'recibir correo': 'correo-cambiar',
    email: 'correo-cambiar',
    cancelar: '__back__',
    volver: '__back__',
    atras: '__back__',
  },
  'sms-telefono': {
    continuar: 'mi-cuenta',
    confirmar: 'mi-cuenta',
    verificar: 'mi-cuenta',
    cancelar: '__back__',
    volver: '__back__',
    atras: '__back__',
  },
  'correo-cambiar': {
    continuar: 'login',
    confirmar: 'login',
    enviar: 'login',
    cancelar: '__back__',
    volver: '__back__',
    atras: '__back__',
  },
  menu: {
    almuerzo: 'menu-almuerzo',
    burgers: 'menu-burgers',
    whoppers: 'menu-burgers',
    hamburguesas: 'menu-burgers',
    pollo: 'menu-pollo',
    carne: 'menu-carne',
    pescado: 'menu-pescado',
    bebidas: 'menu-bebidas',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    'tu carrito está vacío': 'tu-carrito-local',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-burgers': {
    // Tabs: Favoritos (esta pantalla) ↔ Hamburguesas (lista completa)
    hamburguesas: 'menu-burgers-00',
    'los favoritos': 'menu-burgers',
    favoritos: 'menu-burgers',
    // Todas las hamburguesas → mismo detalle provisional
    ...BURGER_DETAIL_NAV,
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    menu: 'menu',
    buscar: 'no-disponible',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-burgers-00': {
    hamburguesas: 'menu-burgers-00',
    'los favoritos': 'menu-burgers',
    favoritos: 'menu-burgers',
    ...BURGER_DETAIL_NAV,
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    menu: 'menu',
    buscar: 'no-disponible',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-almuerzo': {
    almuerzo: 'menu-almuerzo',
    menu: 'menu',
    menú: 'menu',
    buscar: 'no-disponible',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    texana: 'desc-texana',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-pollo': {
    pollo: 'menu-pollo',
    carne: 'menu-carne',
    pescado: 'menu-pescado',
    menu: 'menu',
    buscar: 'no-disponible',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-carne': {
    pollo: 'menu-pollo',
    carne: 'menu-carne',
    pescado: 'menu-pescado',
    menu: 'menu',
    buscar: 'no-disponible',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-pescado': {
    pollo: 'menu-pollo',
    carne: 'menu-carne',
    pescado: 'menu-pescado',
    menu: 'menu',
    buscar: 'no-disponible',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-bebidas': {
    menu: 'menu',
    buscar: 'no-disponible',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-hamburguesas': {
    hamburguesas: 'menu-burgers-00',
    'los favoritos': 'menu-burgers',
    favoritos: 'menu-burgers',
    menu: 'menu',
    buscar: 'no-disponible',
    ...BURGER_DETAIL_NAV,
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'personaliza-whopper': {
    'mini combo': 'personaliza-whopper-mini',
    'maxi combo': 'personaliza-whopper-maxi',
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    // Historial: desde inicio → inicio; desde menú hamburguesas → menú
    volver: '__back__',
    atras: '__back__',
  },
  'personaliza-whopper-mini': {
    sencilla: 'personaliza-whopper',
    'maxi combo': 'personaliza-whopper-maxi',
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: '__back__',
    atras: '__back__',
  },
  'personaliza-whopper-maxi': {
    sencilla: 'personaliza-whopper',
    'mini combo': 'personaliza-whopper-mini',
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: '__back__',
    atras: '__back__',
  },
  'desc-texana': {
    'mini combo': 'personaliza-texana-mini',
    'maxi combo': 'personaliza-texana-maxi',
    agregar: 'tu-carrito-local',
    volver: 'menu-almuerzo',
    atras: 'menu-almuerzo',
  },
  'personaliza-texana-mini': {
    sencilla: 'desc-texana',
    'maxi combo': 'personaliza-texana-maxi',
    agregar: 'tu-carrito-local',
    carrito: 'tu-carrito-local',
    volver: 'menu-almuerzo',
    atras: 'menu-almuerzo',
  },
  'personaliza-texana-maxi': {
    sencilla: 'desc-texana',
    'mini combo': 'personaliza-texana-mini',
    agregar: 'tu-carrito-local',
    carrito: 'tu-carrito-local',
    volver: 'menu-almuerzo',
    atras: 'menu-almuerzo',
  },
  'tu-carrito-local': {
    // Local → primero mesa/QR; domicilio se resuelve en enhanceDom vía fulfillment
    pagar: 'escaneo-qr',
    'elegir pago': 'escaneo-qr',
    'continuar al pago': 'escaneo-qr',
    'continuar a pago': 'escaneo-qr',
    comprar: 'escaneo-qr',
    // El selector vivo maneja local/domicilio; no navegar al cambiar opción
    'a domicilio': 'tu-carrito-local',
    'en el local': 'tu-carrito-local',
    'escanear qr': 'escaneo-qr',
    'pedido en el local': 'tu-carrito-local',
    quitar: 'quitar-producto-cliente',
    'añadir algo mas': 'whopper-inicio',
    'añadir algo más': 'whopper-inicio',
    // En carrito, no saltar a ficha de producto (evita − / fila → descripción)
    texana: 'tu-carrito-local',
    'texana especial': 'tu-carrito-local',
    whopper: 'tu-carrito-local',
    menu: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-local',
    // Evitar bucle con personaliza/pago: atrás siempre a inicio
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'tu-carrito-domicilio': {
    pagar: 'pago-dom-nequi',
    'elegir pago': 'pago-dom-nequi',
    'continuar al pago': 'pago-dom-nequi',
    'continuar a pago': 'pago-dom-nequi',
    comprar: 'pago-dom-nequi',
    local: 'tu-carrito-domicilio',
    'en el local': 'tu-carrito-domicilio',
    'a domicilio': 'tu-carrito-domicilio',
    'añadir algo mas': 'whopper-inicio',
    'añadir algo más': 'whopper-inicio',
    texana: 'tu-carrito-domicilio',
    'texana especial': 'tu-carrito-domicilio',
    whopper: 'tu-carrito-domicilio',
    menu: 'whopper-inicio',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-domicilio',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'carrito-local': {
    pagar: 'pago-local-nequi',
    comprar: 'pago-local-nequi',
    'a domicilio': 'carrito-domicilio',
    'en el local': 'carrito-local',
    menu: 'whopper-inicio',
    'añadir algo mas': 'whopper-inicio',
    'añadir algo más': 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-local',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'carrito-domicilio': {
    pagar: 'pago-dom-nequi',
    comprar: 'pago-dom-nequi',
    'a domicilio': 'carrito-domicilio',
    'en el local': 'carrito-local',
    menu: 'whopper-inicio',
    'añadir algo mas': 'whopper-inicio',
    'añadir algo más': 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-domicilio',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'pago-local-nequi': {
    // Pago online → pedido enviado (ya pagado)
    confirmar: 'pedido-enviado-local',
    'pagar con nequi': 'pedido-enviado-local',
    'pagar con': 'pedido-enviado-local',
    nequi: 'pago-local-nequi',
    efectivo: 'pago-local-efectivo',
    tarjeta: 'pago-local-tarjeta',
    'bre-b': 'pago-local-breb',
    breb: 'pago-local-breb',
    // Siempre al carrito (no al historial: evita “pedido en preparación”)
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-local-efectivo': {
    // Efectivo → pendiente de cobro en caja
    confirmar: 'pedido-exitoso-local',
    'pagar con efectivo': 'pedido-exitoso-local',
    'pagar con': 'pedido-exitoso-local',
    nequi: 'pago-local-nequi',
    efectivo: 'pago-local-efectivo',
    tarjeta: 'pago-local-tarjeta',
    'bre-b': 'pago-local-breb',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-local-tarjeta': {
    confirmar: 'pedido-enviado-local',
    'pagar con tarjeta': 'pedido-enviado-local',
    'pagar con': 'pedido-enviado-local',
    nequi: 'pago-local-nequi',
    efectivo: 'pago-local-efectivo',
    tarjeta: 'pago-local-tarjeta',
    'bre-b': 'pago-local-breb',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-local-breb': {
    confirmar: 'pedido-enviado-local',
    'pagar con bre-b': 'pedido-enviado-local',
    'pagar con breb': 'pedido-enviado-local',
    'pagar con': 'pedido-enviado-local',
    nequi: 'pago-local-nequi',
    efectivo: 'pago-local-efectivo',
    tarjeta: 'pago-local-tarjeta',
    'bre-b': 'pago-local-breb',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },
  'pago-dom-nequi': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con nequi': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pago-dom-efectivo': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con efectivo': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pago-dom-tarjeta': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con tarjeta': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pago-dom-breb': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con bre-b': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: 'tu-carrito-domicilio',
    atras: 'tu-carrito-domicilio',
  },
  'pedido-enviado-local': {
    finalizar: 'whopper-inicio',
    inicio: 'whopper-inicio',
    menu: 'menu',
    continuar: 'whopper-inicio',
    // Mesa / local: no salir ni volver al pago
    'mesa 7': 'pedido-enviado-local',
    'pedido en el local': 'pedido-enviado-local',
    'en el local': 'pedido-enviado-local',
    'mesa 7 · pedido en el local': 'pedido-enviado-local',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'pedido-enviado-domicilio': {
    finalizar: 'whopper-inicio',
    inicio: 'whopper-inicio',
    menu: 'menu',
    continuar: 'whopper-inicio',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'pedido-exitoso-local': {
    finalizar: 'whopper-inicio',
    inicio: 'whopper-inicio',
    menu: 'menu',
    continuar: 'whopper-inicio',
    'prefiero pagar en linea ahora': 'pago-local-nequi',
    'prefiero pagar en línea ahora': 'pago-local-nequi',
    'pagar en linea ahora': 'pago-local-nequi',
    'pagar en línea ahora': 'pago-local-nequi',
    'pagar en linea': 'pago-local-nequi',
    'pagar en línea': 'pago-local-nequi',
    // Mesa / local: no disparar “atrás” ni carrito
    'mesa 7': 'pedido-exitoso-local',
    'pedido en el local': 'pedido-exitoso-local',
    'en el local': 'pedido-exitoso-local',
    'mesa 7 · pedido en el local': 'pedido-exitoso-local',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
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
    'laura martinez': 'mis-datos',
    lm: 'mis-datos',
    'mis direcciones': 'mis-direcciones',
    direcciones: 'mis-direcciones',
    privacidad: 'privacidad',
    'privacidad y datos': 'privacidad',
    contactos: 'contactos',
    contacto: 'contactos',
    pqrs: 'pqrs',
    'tienes una pqrs': 'pqrs',
    cambiar: 'mis-direcciones',
    'eliminar cuenta': 'elim-cuenta',
    'cerrar sesion': 'login',
    'cerrar sesión': 'login',
    // Ya dentro de la cuenta: no rebotar a login
    'mi cuenta': 'mi-cuenta',
    inicio: 'whopper-inicio',
    buscar: 'no-disponible',
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
    'ver politica de datos': 'privacidad',
    'ver política de datos': 'privacidad',
    privacidad: 'privacidad',
    'privacidad y datos': 'privacidad',
  },
  'mis-direcciones': {
    agregar: 'agregar-direccion',
    'agregar direccion': 'agregar-direccion',
    modificar: 'agregar-direccion',
    editar: 'agregar-direccion',
    eliminar: 'confirmar-elim-direccion',
    volver: '__back__',
    atras: '__back__',
    'mi cuenta': 'mi-cuenta',
  },
  'agregar-direccion': {
    guardar: 'mis-direcciones',
    cancelar: 'mis-direcciones',
    volver: '__back__',
    atras: '__back__',
  },
  'confirmar-elim-direccion': { confirmar: 'mis-direcciones', cancelar: 'mis-direcciones', eliminar: 'mis-direcciones' },
  'no-disponible': {
    cerrar: '__back__',
    volver: '__back__',
    atras: '__back__',
  },
  privacidad: {
    volver: 'mi-cuenta',
    atras: 'mi-cuenta',
    'mi cuenta': 'mi-cuenta',
    'solicitar eliminacion de cuenta': 'elim-cuenta',
    'solicitar eliminación de cuenta': 'elim-cuenta',
    'eliminar cuenta': 'elim-cuenta',
  },
  contactos: {
    // Sheet desde inicio o cuenta: Cerrar / atrás siempre salen
    cerrar: '__back__',
    volver: '__back__',
    atras: '__back__',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
  },
  'elim-cuenta': {
    confirmar: 'login',
    eliminar: 'login',
    'si, eliminar': 'login',
    'sí, eliminar': 'login',
    cancelar: '__back__',
    volver: '__back__',
    atras: '__back__',
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
    volver: '__back__',
    atras: '__back__',
  },
  'escaneo-qr': {
    continuar: 'pago-local-nequi',
    'continuar con la mesa': 'pago-local-nequi',
    ...Object.fromEntries(
      Array.from({ length: 16 }, (_, i) => [
        `continuar con la mesa ${i + 1}`,
        'pago-local-nequi',
      ]),
    ),
    cancelar: 'tu-carrito-local',
    volver: 'tu-carrito-local',
    atras: 'tu-carrito-local',
  },

  'no-implementada': {
    inventario: 'inventario',
    historial: 'historial-movimientos',
    estadisticas: 'numeros-negocio',
    cerrar: 'inventario',
    volver: 'inventario',
    cliente: 'whopper-inicio',
    inicio: 'whopper-inicio',
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
    'finalizar',
    'prefiero pagar en linea ahora',
    'prefiero pagar en línea ahora',
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
    'continuar al pago',
    'continuar a pago',
    'pagar con nequi',
    'pagar con efectivo',
    'pagar con tarjeta',
    'pagar con bre-b',
    'pagar con breb',
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

/** Pantallas admin: no aplicar rutas de menú/cliente (evita “Carne de res” → menú). */
const ADMIN_SCREENS = new Set([
  'inventario',
  'detalle-carne',
  'agregar-existente',
  'agregar-nuevo',
  'historial-movimientos',
  'historial-pedidos',
  'editar-movimiento',
  'confirmar-correccion',
  'editar-pedido',
  'confirmar-pedido',
  'pedido-anadir',
  'pedido-quitado',
  'pedido-anadido',
  'registro-eliminado',
  'numeros-negocio',
  'ventas-canal',
  'platos-insumos',
  'no-implementada',
  'ajuste-mov-184',
  'ajuste-ped-1048',
  'confirmar-eliminacion',
  'eliminacion-mov-184',
]);

/** Pantallas con campos de formulario (admin + cliente). */
const FORM_SCREENS = new Set([
  'agregar-existente',
  'agregar-nuevo',
  'editar-movimiento',
  'editar-pedido',
  'login',
  'registro',
  'mis-datos',
  'agregar-direccion',
  'pqrs',
  'sms-telefono',
  'correo-cambiar',
  'recuperar-contrasena',
]);

/** Chips de métricas en Estadísticas (móvil): tabs fijos, nunca inputs. */
export const STATS_METRIC_LABELS = new Set(
  [
    'und vendidas',
    'ventas netas',
    'utilidades',
    'utilidad',
    'utilidades brutas',
    'ventas',
  ].map(n),
);

/** Textos editables globales (placeholders / buscadores). */
const EDITABLE = new Set(
  [
    'buscar producto o código',
    'buscar producto o codigo',
    'buscar producto',
    'porque sí.',
    'porque si.',
    'nuevo valor (kg) *',
    'correo@gmail.com',
    'tu-correo@ejemplo.com',
    'ej: laura martinez',
    'ej: laura martínez',
    'minimo 8 caracteres',
    'mínimo 8 caracteres',
    '********',
    '******',
    'x',
    '+57',
    '300 000 000',
    '300 000 0000',
    '+57 300 000 000',
    '+57 300 000 0000',
    '+57 300 123 4567',
    'laura martinez',
    'laura martínez',
    'ej: casa',
    'ej: calle 18 # 25-40',
    'ej: las cuadras',
    'ej: apto 302, torre b',
  ].map(n),
);

/** Solo en formularios de recepción: valores de campos que sí se editan. */
const FORM_FIELD_VALUES = new Set(
  [
    'carne de res',
    'pan brioche',
    'papa criolla',
    'arroz blanco',
    'tocineta',
    'queso chedar',
    'aceite de girasol',
    'seleccionar proveedor',
    'aaaaaaaa-aaaaaaa-000000',
    'kilogramos (kg)',
    '06/05/2027',
    '3 kg',
    '5 kg',
    '2,4',
    '2,4 kg',
    '5',
  ].map(n),
);

/** Resumen de auditoría (Registra / Fecha y hora): NUNCA inputs. */
const READONLY_FORM_VALUES = new Set(
  [
    'ana torres',
    '06 nov 2026 - 09:41',
    'registra',
    'fecha y hora',
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
  // Categorías inicio
  '342:1138': 'whoppers',
  '342:1139': 'whoppers',
  '342:1143': 'almuerzos',
  '342:1144': 'almuerzos',
  '342:1148': 'pollo', // Pollo, Carne y Pescado → sección Pollo
  '342:1149': 'pollo',
  '342:1153': 'bebidas',
  '342:1154': 'bebidas',
  // Tabs Whoppers: Favoritos ↔ Hamburguesas
  '748:1852': 'hamburguesas',
  '748:1853': 'hamburguesas',
  '748:1850': 'los favoritos',
  '748:1851': 'los favoritos',
  // Tabs Almuerzo / Menú
  '711:1991': 'almuerzo',
  '711:1992': 'almuerzo',
  '711:1997': 'menu',
  '711:1998': 'menu',
  // Tabs Pollo / Carne / Pescado
  '711:1498': 'pollo',
  '711:1508': 'carne',
  '711:1512': 'pescado',
  '585:2333': 'volver', // X / atrás en login
  '585:2334': 'volver',
  // Flechas atrás carrito / pago
  '650:2715': 'volver',
  '650:2716': 'volver',
  '650:2596': 'volver',
  '650:2597': 'volver',
  '650:3352': 'volver',
  '650:3353': 'volver',
  '650:2953': 'volver',
  '650:2954': 'volver',
  '650:3086': 'volver',
  '650:3087': 'volver',
  '650:3219': 'volver',
  '650:3220': 'volver',
  '653:3815': 'volver',
  '653:3816': 'volver',
  '653:3946': 'volver',
  '653:3947': 'volver',
  '653:4077': 'volver',
  '653:4078': 'volver',
  '653:4208': 'volver',
  '653:4209': 'volver',
  // CTA Continuar al pago / Pagar con…
  '650:2901': 'continuar al pago',
  '650:2900': 'continuar al pago',
  '650:2701': 'continuar al pago',
  '650:2700': 'continuar al pago',
  '650:3460': 'pagar con nequi',
  '650:3459': 'pagar con nequi',
  '650:3061': 'pagar con tarjeta',
  '650:3194': 'pagar con efectivo',
  '650:3327': 'pagar con bre-b',
  '653:3807': 'pagar con nequi',
  '653:4069': 'pagar con tarjeta',
  '653:4200': 'pagar con efectivo',
  '653:3938': 'pagar con bre-b',
  '369:1745': 'volver',
  '369:1746': 'volver',
  '369:1816': 'volver',
  '369:1817': 'volver',
  '369:1822': 'volver',
  '369:1823': 'volver',
  '654:4510': 'volver',
  '654:4511': 'volver',
  '549:3305': 'volver',
  '549:3438': 'volver',
  '552:3858': 'volver',
  '552:3725': 'volver',
  '552:3592': 'volver',
  // Login: botón naranja (admin se decide en enhanceDom según toggle)
  '585:2384': 'iniciar sesion',
  '585:2385': 'iniciar sesion',
  '585:2386': 'iniciar sesion',
  // Hamburguesa azul (admin) → cliente inicio
  '404:2117': 'cliente',
  '404:2118': 'cliente',
  // Avatar AT del header admin → Mi cuenta
  '404:2121': 'mi cuenta',
  '404:2122': 'mi cuenta',
  '404:785': 'mi cuenta',
  // Bottom nav (Inicio / Buscar / Carrito / Mi cuenta)
  '342:1199': 'inicio',
  '342:1203': 'buscar',
  '342:1211': 'mi cuenta',
  '818:3495': 'carrito',
  '818:3496': 'carrito',
  '818:3531': 'carrito',
  '818:3532': 'carrito',
  '818:3537': 'carrito',
  '342:2210': 'inicio',
  '342:2214': 'buscar',
  '342:2222': 'mi cuenta',
  // Contactos sheet: backdrop y Cerrar
  '342:2000': 'cerrar',
  '342:2067': 'cerrar',
  // Header carrito sticky en menú / Inicio
  '425:2642': 'carrito',
  '425:2454': 'carrito',
  '425:2455': 'carrito',
  '748:1966': 'carrito',
  '748:1967': 'carrito',
  '679:1636': 'carrito',
  '679:1638': 'carrito',
  '679:1642': 'carrito',
  '679:1643': 'carrito',
  // CTA «¡Da clic aquí para conocernos!» → Sobre nosotros
  '595:2642': 'conocernos',
  '595:2644': 'conocernos',
  '595:2645': 'conocernos',
  // Tarjeta favorita #1 en Inicio → detalle Whopper
  '342:1172': 'whopper',
  '342:1173': 'whopper',
  '342:1174': 'whopper',
  '342:1175': 'whopper',
  '342:1184': 'whopper',
  '342:1186': 'whopper',

  // Flecha atrás Sobre nosotros
  '464:1737': 'volver',
  '464:1738': 'volver',
  '464:1739': 'volver',
  '464:1740': 'volver',
  // Flecha atrás Privacidad y datos
  '342:1559': 'volver',
  '342:1560': 'volver',
  '342:1560b': 'volver',
  // Perfil Laura en Mi cuenta → Mis datos
  '342:2080': 'mis datos',
  '342:2081': 'mis datos',
  '342:2082': 'mis datos',
  '342:2083': 'mis datos',
  '342:2086': 'mis datos',
  '342:2088': 'mis datos',
  '342:2091': 'mis datos',
  '342:2092': 'mis datos',
  '342:2093': 'mis datos',
  // Flecha atrás Mis datos
  '342:1220': 'volver',
  '342:1221': 'volver',
  // Ver política de datos (Mis datos)
  '342:1284': 'ver politica de datos',
  '342:1283': 'ver politica de datos',
  '342:1278': 'ver politica de datos',
  // Flecha atrás Mis direcciones
  '342:1456': 'volver',
  '342:1457': 'volver',
  '342:1548': 'volver',
  '342:1549': 'volver',
  // Flecha atrás Agregar dirección
  '342:1304': 'volver',
  '342:1305': 'volver',
  // Filas de inventario → detalle (clic en toda la fila)
  '752:1956': 'tocineta',
  '752:1977': 'carne de res',
  '752:1984': 'queso chedar',
  '752:1991': 'pan brioche',
  '752:2026': 'papa criolla',
  '752:2044': 'arroz blanco',
};

/** Match parcial con límites de palabra (evita “menu” dentro de cualquier texto). */
/** Tabs/categorías cortas: no matchear dentro de descripciones («Pollo a la Plancha» ≠ tab Pollo). */
const CATEGORY_EXACT_KEYS = new Set([
  'pollo',
  'carne',
  'pescado',
  'bebidas',
  'almuerzo',
  'almuerzos',
  'burgers',
  'whoppers',
  'hamburguesas',
  'menu',
  'inicio',
  'buscar',
  'carrito',
]);

function partialHit(key: string, k: string): boolean {
  if (!k) return false;
  if (key === k) return true;
  // Categorías cortas: solo exactas (n() quita comas → «Pollo, Carne» = «pollo carne»).
  // No matchear dentro de platos («Almuerzo Chuleta Pollo», «Pollo a la Plancha»).
  if (CATEGORY_EXACT_KEYS.has(k)) {
    if (k === 'pollo' && /^pollo carne\b/.test(key)) return true; // chip inicio
    if ((k === 'almuerzo' || k === 'almuerzos') && /^almuerzos y menus?\b/.test(key)) {
      return true;
    }
    return false;
  }
  if (key.startsWith(k + ' ') || key.endsWith(' ' + k)) return true;
  if (key.includes(' ' + k + ' ')) return true;
  // Prefijo solo con límite de palabra: «Whopper King» ⊃ «whopper», pero no «Whoppers» ⊃ «whopper».
  if (key.startsWith(k) && k.length >= 4 && key.length > k.length) {
    const next = key.charAt(k.length);
    if (next === ' ' || next === '-' || next === ':' || next === '/') return true;
  }
  // Etiqueta corta de tab/botón contenida solo como palabra completa
  if (k.length >= 4) {
    const re = new RegExp(`(?:^|\\s|:)${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:\\s|$|:|-)`, 'i');
    if (re.test(key)) return true;
  }
  return false;
}

/** Preferir la clave más larga que matchee (evita whopper ⊂ whoppers). */
function bestPartial(
  key: string,
  map: Record<string, NavTarget>,
): NavTarget | null {
  let best: NavTarget | null = null;
  let bestLen = -1;
  for (const [k, v] of Object.entries(map)) {
    if (!partialHit(key, k)) continue;
    if (k.length > bestLen) {
      best = v;
      bestLen = k.length;
    }
  }
  return best;
}

export function resolveFigmaNav(screenId: string, figmaId: string): NavTarget | null {
  const action = FIGMA_ID_ACTIONS[figmaId];
  if (!action) return null;
  // Flechas atrás del chrome: siempre historial (UI anterior)
  if (action === 'volver' || action === 'atras') return '__back__';
  const dest = resolveNav(screenId, action);
  if (dest) return dest;
  if (action === 'cliente') return 'whopper-inicio';
  if (action === 'carrito') return 'tu-carrito-local';
  if (action === 'mi cuenta' || action === 'cuenta' || action === 'at') return 'mi-cuenta';
  if (action === 'iniciar sesion') return 'mi-cuenta';
  if (action === 'inicio') return 'whopper-inicio';
  if (action === 'buscar') return 'no-disponible';
  return null;
}

export function resolveNav(screenId: string, rawLabel: string): NavTarget | null {
  const key = n(rawLabel);
  if (!key) return null;
  // Métricas de estadísticas: campos editables, nunca navegación
  if (STATS_METRIC_LABELS.has(key)) return null;
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
  // En admin, no redirigir a menú/cliente por nombres de producto (“Carne…”, “Pollo…”)
  if (ADMIN_SCREENS.has(screenId)) return null;
  if (key in CLIENT_GLOBAL) return CLIENT_GLOBAL[key];
  return bestPartial(key, CLIENT_GLOBAL);
}

export function isButtonish(rawLabel: string) {
  const key = n(rawLabel);
  if (BUTTONISH.has(key)) return true;
  // short UI labels often buttons (no “Registra” del resumen de auditoría)
  return /^(modificar|eliminar|guardar|cancelar|cerrar|agregar|añadir|quitar|revisar|confirmar|volver|iniciar|acceder|continuar|pagar|registrarse|registrar cuenta|registra tu|olvidaste|ver todos|buscar)/i.test(
    rawLabel.trim(),
  );
}

export function isEditableLabel(rawLabel: string, screenId?: string) {
  const key = n(rawLabel);
  // Resumen Registra / Fecha y hora: siempre texto fijo
  if (READONLY_FORM_VALUES.has(key)) return false;
  // Chips de métrica en Estadísticas: tabs, nunca input
  if (STATS_METRIC_LABELS.has(key)) return false;
  if (/^\d{1,2}\s+(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)\b/i.test(rawLabel.trim())) {
    return false;
  }
  // Si la etiqueta navega en esta pantalla, no convertirla en input
  if (screenId && resolveNav(screenId, rawLabel)) return false;

  if (EDITABLE.has(key)) return true;
  // Solo placeholders / valores de formulario explícitos (no celdas de tabla)
  if (/^buscar /i.test(rawLabel.trim())) return true;
  if (/^seleccionar /i.test(rawLabel.trim())) return true;
  if (/^porque s[ií]\.?$/i.test(rawLabel.trim())) return true;
  if (/^aaaaaaaa/i.test(rawLabel.trim())) return true;
  if (/^ej:\s*/i.test(rawLabel.trim())) return true;
  if (/@/.test(rawLabel) && rawLabel.length <= 60) return true;
  if (/^\*+$/.test(rawLabel.trim())) return true;
  if (/^\+?\d[\d\s-]{5,}$/.test(rawLabel.trim())) return true;
  if (/^x$/i.test(rawLabel.trim())) return true;
  if (/m[ií]nimo\s+\d+/i.test(rawLabel.trim())) return true;
  if (/ind[ií]canos|detalle relevante/i.test(rawLabel.trim())) return true;

  if (screenId && FORM_SCREENS.has(screenId)) {
    // Solo lista blanca de valores de campo (sin catch-all que convierta el resumen)
    if (FORM_FIELD_VALUES.has(key)) return true;
    if (/^\d+([.,]\d+)?$/.test(key)) return true;
    if (/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(key)) return true;
    if (/^kilogramos|^gramos|^litros|^unidades/i.test(rawLabel.trim())) return true;
  }
  return false;
}

const REPLACE_VARIANT_SCREENS = new Set([
  'personaliza-whopper',
  'personaliza-whopper-mini',
  'personaliza-whopper-maxi',
  'desc-texana',
  'personaliza-texana-mini',
  'personaliza-texana-maxi',
  'pago-local-nequi',
  'pago-local-efectivo',
  'pago-local-tarjeta',
  'pago-local-breb',
  'pago-dom-nequi',
  'pago-dom-efectivo',
  'pago-dom-tarjeta',
  'pago-dom-breb',
]);

const PEDIDO_RESULT_SCREENS = new Set([
  'pedido-enviado-local',
  'pedido-enviado-domicilio',
  'pedido-exitoso-local',
  'fallo-pago',
]);

/** Destinos que deben reemplazar la pantalla actual en el historial (selector / combos / pago). */
export function shouldReplaceHistory(fromId: string, toId: string): boolean {
  const pair = new Set([fromId, toId]);
  if (pair.has('agregar-existente') && pair.has('agregar-nuevo')) return true;
  // Chooser recuperar → OTP: atrás vuelve a login, no al chooser
  if (
    fromId === 'recuperar-contrasena' &&
    (toId === 'sms-telefono' || toId === 'correo-cambiar')
  ) {
    return true;
  }
  // Tabs Favoritos ↔ Hamburguesas
  if (pair.has('menu-burgers') && pair.has('menu-burgers-00')) return true;
  if (pair.has('menu-burgers') && pair.has('menu-hamburguesas')) return true;
  // Volver a pagar desde “pedido en preparación” no debe apilarse sobre el resultado
  if (PEDIDO_RESULT_SCREENS.has(fromId) && REPLACE_VARIANT_SCREENS.has(toId)) return true;
  // Tras pagar, el resultado reemplaza la pantalla de pago (atrás ≠ volver al pago)
  if (REPLACE_VARIANT_SCREENS.has(fromId) && PEDIDO_RESULT_SCREENS.has(toId)) return true;
  // Local ↔ domicilio en carrito
  const cartPair = new Set([fromId, toId]);
  if (
    (cartPair.has('tu-carrito-local') && cartPair.has('tu-carrito-domicilio')) ||
    (cartPair.has('carrito-local') && cartPair.has('carrito-domicilio'))
  ) {
    return true;
  }
  return REPLACE_VARIANT_SCREENS.has(fromId) && REPLACE_VARIANT_SCREENS.has(toId);
}
