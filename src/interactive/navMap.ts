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
  // Entrada admin (placa azul) desde login → inventario
  administrador: 'inventario',
  'modo administrador': 'inventario',
  'acceder al modo administrador': 'inventario',
  texana: 'desc-texana',
  whopper: 'personaliza-whopper',
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
    'ver todos': 'menu',
    buscar: 'menu',
    'iniciar sesion': 'login',
    'iniciar sesión': 'login',
    'mi cuenta': 'mi-cuenta',
    'sobre nosotros': 'sobre-nosotros',
    conocernos: 'sobre-nosotros',
    contactanos: 'contactos',
    'contáctanos': 'contactos',
    'contactanos por aca': 'contactos',
    'contáctanos por acá': 'contactos',
    pqrs: 'pqrs',
    carrito: 'tu-carrito-local',
    whoppers: 'menu-burgers',
    almuerzos: 'menu-almuerzo',
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
    // Iniciar sesión siempre → cuenta (admin es atajo aparte, no el login)
    'iniciar sesion': 'mi-cuenta',
    'iniciar sesión': 'mi-cuenta',
    administrador: 'inventario',
    'modo administrador': 'inventario',
    'acceder al modo administrador': 'inventario',
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
    whopper: 'personaliza-whopper',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    menu: 'menu',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-burgers-00': {
    whopper: 'personaliza-whopper',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    menu: 'menu',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-almuerzo': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    texana: 'desc-texana',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-pollo': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-carne': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-pescado': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-bebidas': {
    menu: 'menu',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: 'whopper-inicio',
    atras: 'whopper-inicio',
  },
  'menu-hamburguesas': {
    menu: 'menu',
    whopper: 'personaliza-whopper',
    carrito: 'tu-carrito-local',
    'tu carrito esta vacio': 'tu-carrito-local',
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
    volver: 'menu-burgers',
    atras: 'menu-burgers',
  },
  'personaliza-whopper-mini': {
    sencilla: 'personaliza-whopper',
    'maxi combo': 'personaliza-whopper-maxi',
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: 'menu-burgers',
    atras: 'menu-burgers',
  },
  'personaliza-whopper-maxi': {
    sencilla: 'personaliza-whopper',
    'mini combo': 'personaliza-whopper-mini',
    carrito: 'tu-carrito-local',
    agregar: 'tu-carrito-local',
    'mi cuenta': 'mi-cuenta',
    volver: 'menu-burgers',
    atras: 'menu-burgers',
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
    pagar: 'pago-local-nequi',
    'elegir pago': 'pago-local-nequi',
    'continuar al pago': 'pago-local-nequi',
    'continuar a pago': 'pago-local-nequi',
    'a domicilio': 'tu-carrito-domicilio',
    'escanear qr': 'escaneo-qr',
    'mesa 7': 'escaneo-qr',
    'pedido en el local': 'escaneo-qr',
    'mesa 7 · pedido en el local': 'escaneo-qr',
    quitar: 'quitar-producto-cliente',
    'añadir algo mas': 'menu',
    'añadir algo más': 'menu',
    // En carrito, no saltar a ficha de producto (evita − / fila → descripción)
    texana: 'tu-carrito-local',
    'texana especial': 'tu-carrito-local',
    whopper: 'tu-carrito-local',
    menu: 'menu',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-local',
    volver: '__back__',
    atras: '__back__',
  },
  'tu-carrito-domicilio': {
    pagar: 'pago-dom-nequi',
    'elegir pago': 'pago-dom-nequi',
    'continuar al pago': 'pago-dom-nequi',
    'continuar a pago': 'pago-dom-nequi',
    local: 'tu-carrito-local',
    'en el local': 'tu-carrito-local',
    'añadir algo mas': 'menu',
    'añadir algo más': 'menu',
    texana: 'tu-carrito-domicilio',
    'texana especial': 'tu-carrito-domicilio',
    whopper: 'tu-carrito-domicilio',
    menu: 'menu',
    inicio: 'whopper-inicio',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-domicilio',
    volver: '__back__',
    atras: '__back__',
  },
  'carrito-local': {
    pagar: 'pago-local-nequi',
    menu: 'menu',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-local',
  },
  'carrito-domicilio': {
    pagar: 'pago-dom-nequi',
    menu: 'menu',
    'mi cuenta': 'mi-cuenta',
    carrito: 'tu-carrito-domicilio',
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
    volver: '__back__',
    atras: '__back__',
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
    volver: '__back__',
    atras: '__back__',
  },
  'pago-local-tarjeta': {
    confirmar: 'pedido-enviado-local',
    'pagar con tarjeta': 'pedido-enviado-local',
    'pagar con': 'pedido-enviado-local',
    nequi: 'pago-local-nequi',
    efectivo: 'pago-local-efectivo',
    tarjeta: 'pago-local-tarjeta',
    'bre-b': 'pago-local-breb',
    volver: '__back__',
    atras: '__back__',
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
    volver: '__back__',
    atras: '__back__',
  },
  'pago-dom-nequi': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con nequi': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: '__back__',
    atras: '__back__',
  },
  'pago-dom-efectivo': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con efectivo': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: '__back__',
    atras: '__back__',
  },
  'pago-dom-tarjeta': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con tarjeta': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: '__back__',
    atras: '__back__',
  },
  'pago-dom-breb': {
    confirmar: 'pedido-enviado-domicilio',
    'pagar con bre-b': 'pedido-enviado-domicilio',
    'pagar con': 'pedido-enviado-domicilio',
    nequi: 'pago-dom-nequi',
    efectivo: 'pago-dom-efectivo',
    tarjeta: 'pago-dom-tarjeta',
    'bre-b': 'pago-dom-breb',
    volver: '__back__',
    atras: '__back__',
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
    buscar: 'menu',
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

/** Pantallas de formulario de recepción: valores de campos editables. */
const FORM_SCREENS = new Set(['agregar-existente', 'agregar-nuevo', 'editar-movimiento', 'editar-pedido']);

/** Textos editables globales (placeholders / buscadores). */
const EDITABLE = new Set(
  [
    'buscar producto o código',
    'buscar producto o codigo',
    'buscar producto',
    'porque sí.',
    'porque si.',
    'nuevo valor (kg) *',
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
  // Solo el texto del atajo admin (no toda la fila, para no “robar” el login)
  '585:2098': 'administrador',
  // Login: botón naranja siempre a cuenta
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
  // Header carrito sticky en menú
  '425:2642': 'carrito',
  '679:1636': 'carrito',
  '679:1638': 'carrito',
  // Filas de inventario → detalle (clic en toda la fila)
  '752:1956': 'tocineta',
  '752:1977': 'carne de res',
  '752:1984': 'queso chedar',
  '752:1991': 'pan brioche',
  '752:2026': 'papa criolla',
  '752:2044': 'arroz blanco',
};

/** Match parcial con límites de palabra (evita “menu” dentro de cualquier texto). */
function partialHit(key: string, k: string): boolean {
  if (!k) return false;
  if (key === k) return true;
  if (key.startsWith(k + ' ') || key.endsWith(' ' + k)) return true;
  if (key.includes(' ' + k + ' ')) return true;
  // Etiqueta clicada empieza por la clave del mapa (“Whoppers” ⊃ “whopper” solo si la clave es más corta)
  // Evita que “Whopper” (producto) abra “whoppers” (menú de categoría).
  if (key.startsWith(k) && k.length >= 4 && key.length > k.length) return true;
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
  const dest = resolveNav(screenId, action);
  if (dest) return dest;
  if (action === 'volver') return '__back__';
  if (action === 'cliente') return 'whopper-inicio';
  if (action === 'carrito') return 'tu-carrito-local';
  if (action === 'administrador') return 'inventario';
  if (action === 'mi cuenta' || action === 'cuenta' || action === 'at') return 'mi-cuenta';
  if (action === 'iniciar sesion') return 'mi-cuenta';
  if (action === 'inicio') return 'whopper-inicio';
  if (action === 'buscar') return 'menu';
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

/** Destinos que deben reemplazar la pantalla actual en el historial (selector / combos / pago). */
export function shouldReplaceHistory(fromId: string, toId: string): boolean {
  const pair = new Set([fromId, toId]);
  if (pair.has('agregar-existente') && pair.has('agregar-nuevo')) return true;
  return REPLACE_VARIANT_SCREENS.has(fromId) && REPLACE_VARIANT_SCREENS.has(toId);
}
