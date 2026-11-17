/** Títulos y meta para SEO / Lighthouse (documento y por pantalla). */

const SITE = 'Whopper King';
const DEFAULT_DESC =
  'Pide hamburguesas, almuerzos y bebidas en Whopper King (Pasto). Menú, carrito y pago en local o a domicilio.';

/** Títulos amigables por id de pantalla (sin prefijos técnicos). */
const TITLE_BY_ID: Record<string, string> = {
  'whopper-inicio': 'Inicio',
  'whopper-inicio-na': 'Inicio',
  'no-disponible': 'Función no disponible',
  login: 'Iniciar sesión',
  registro: 'Crear cuenta',
  'mi-cuenta': 'Mi cuenta',
  'mis-datos': 'Mis datos',
  'mis-direcciones': 'Mis direcciones',
  'agregar-direccion': 'Agregar dirección',
  privacidad: 'Privacidad y datos',
  contactos: 'Contactos',
  menu: 'Menú',
  'menu-almuerzo': 'Almuerzo',
  'menu-burgers': 'Hamburguesas',
  'menu-burgers-00': 'Hamburguesas',
  'menu-hamburguesas': 'Hamburguesas',
  'menu-pollo': 'Pollo',
  'menu-carne': 'Carne',
  'menu-pescado': 'Pescado',
  'menu-bebidas': 'Bebidas',
  'carrito-local': 'Carrito',
  'carrito-domicilio': 'Carrito',
  'tu-carrito-local': 'Tu carrito',
  'tu-carrito-domicilio': 'Tu carrito',
  'escaneo-qr': 'Escanear mesa',
  'sobre-nosotros': 'Sobre nosotros',
  pqrs: 'PQRS',
  'pqrs-confirmacion': 'PQRS enviada',
  'pqrs-radicacion': 'Radicar PQRS',
  'desc-texana': 'Texana Especial',
  'personaliza-whopper': 'Personaliza Whopper',
  'personaliza-whopper-mini': 'Whopper Mini Combo',
  'personaliza-whopper-maxi': 'Whopper Maxi Combo',
  'personaliza-texana-mini': 'Texana Mini Combo',
  'personaliza-texana-maxi': 'Texana Maxi Combo',
  'pedido-enviado-local': 'Pedido enviado',
  'pedido-enviado-domicilio': 'Pedido enviado',
  'pedido-exitoso-local': 'Pedido exitoso',
  'fallo-pago': 'Fallo en el pago',
  inventario: 'Inventario',
  'detalle-carne': 'Detalle de insumo',
  'historial-movimientos': 'Historial de movimientos',
  'historial-pedidos': 'Historial de pedidos',
  'numeros-negocio': 'Números del negocio',
  'ventas-canal': 'Ventas por canal',
  'platos-insumos': 'Platos e insumos',
};

export function pageHeadingFor(screenId: string, fallbackName = ''): string {
  if (TITLE_BY_ID[screenId]) return TITLE_BY_ID[screenId];
  const clean = fallbackName
    .replace(/^\[Cliente\]\s*/i, '')
    .replace(/^\d+\s*·\s*/, '')
    .replace(/^Estadísticas\s*·\s*/i, '')
    .trim();
  return clean || 'Whopper King';
}

export function pageTitleFor(screenId: string, fallbackName = ''): string {
  return `${pageHeadingFor(screenId, fallbackName)} · ${SITE}`;
}

export function pageDescriptionFor(screenId: string): string {
  if (screenId.startsWith('pago-')) {
    return 'Elige cómo pagar tu pedido Whopper King: Nequi, Bre-B, tarjeta o efectivo.';
  }
  if (screenId.includes('carrito')) {
    return 'Revisa tu carrito Whopper King y continúa al pago en local o a domicilio.';
  }
  if (screenId.startsWith('menu') || screenId.startsWith('personaliza') || screenId.startsWith('desc-')) {
    return 'Explora el menú de Whopper King y personaliza tu pedido.';
  }
  if (
    screenId === 'inventario' ||
    screenId.startsWith('historial') ||
    screenId === 'numeros-negocio' ||
    screenId === 'ventas-canal' ||
    screenId === 'platos-insumos'
  ) {
    return 'Panel administrativo Whopper King: inventario, historial y estadísticas.';
  }
  return DEFAULT_DESC;
}

/** Actualiza <title> y meta description en el documento. */
export function applyDocumentSeo(screenId: string, fallbackName = ''): void {
  document.title = pageTitleFor(screenId, fallbackName);

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', pageDescriptionFor(screenId));

  if (document.documentElement.lang !== 'es') {
    document.documentElement.lang = 'es';
  }
}
