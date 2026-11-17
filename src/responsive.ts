/** Breakpoints y clasificación de pantallas para el shell responsive. */

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export const BP = {
  tablet: 768,
  desktop: 1024,
} as const;

export function getBreakpoint(width = typeof window !== 'undefined' ? window.innerWidth : 402): Breakpoint {
  if (width >= BP.desktop) return 'desktop';
  if (width >= BP.tablet) return 'tablet';
  return 'mobile';
}

/** Pantallas del panel admin (inventario / historial / estadísticas). */
const ADMIN_IDS = new Set([
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

export function isAdminScreen(id: string): boolean {
  return ADMIN_IDS.has(id);
}

/** Layouts de dos columnas en desktop (data-layout). */
export type DesktopLayout =
  | 'inicio'
  | 'menu'
  | 'personaliza'
  | 'carrito'
  | 'pago'
  | 'inventario'
  | 'stats'
  | 'default';

const LAYOUT_BY_ID: Record<string, DesktopLayout> = {
  'whopper-inicio': 'inicio',
  'whopper-inicio-na': 'inicio',
  menu: 'menu',
  'menu-almuerzo': 'menu',
  'menu-burgers': 'menu',
  'menu-burgers-00': 'menu',
  'menu-hamburguesas': 'menu',
  'menu-pollo': 'menu',
  'menu-carne': 'menu',
  'menu-pescado': 'menu',
  'menu-bebidas': 'menu',
  'personaliza-whopper': 'personaliza',
  'personaliza-whopper-mini': 'personaliza',
  'personaliza-whopper-maxi': 'personaliza',
  'personaliza-texana-mini': 'personaliza',
  'personaliza-texana-maxi': 'personaliza',
  'desc-texana': 'personaliza',
  'carrito-local': 'carrito',
  'carrito-domicilio': 'carrito',
  'tu-carrito-local': 'carrito',
  'tu-carrito-domicilio': 'carrito',
  'pago-dom-breb': 'pago',
  'pago-dom-efectivo': 'pago',
  'pago-dom-nequi': 'pago',
  'pago-dom-tarjeta': 'pago',
  'pago-local-breb': 'pago',
  'pago-local-efectivo': 'pago',
  'pago-local-nequi': 'pago',
  'pago-local-tarjeta': 'pago',
  inventario: 'inventario',
  'detalle-carne': 'inventario',
  'historial-movimientos': 'inventario',
  'historial-pedidos': 'inventario',
  'numeros-negocio': 'stats',
  'ventas-canal': 'stats',
  'platos-insumos': 'stats',
};

export function desktopLayoutFor(id: string): DesktopLayout {
  return LAYOUT_BY_ID[id] ?? 'default';
}

export function clientTabFor(
  id: string,
): 'inicio' | 'menu' | 'buscar' | 'carrito' | 'cuenta' {
  if (id === 'mi-cuenta' || id.startsWith('mis-') || id === 'privacidad' || id === 'contactos') {
    return 'cuenta';
  }
  if (
    id.includes('carrito') ||
    id.startsWith('pago-') ||
    id.includes('pedido-enviado') ||
    id.includes('pedido-exitoso')
  ) {
    return 'carrito';
  }
  if (id === 'no-disponible') return 'buscar';
  // Menú / personalización: no marcar también «Inicio»
  if (
    id === 'menu' ||
    id.startsWith('menu-') ||
    id.startsWith('personaliza') ||
    id === 'desc-texana'
  ) {
    return 'menu';
  }
  return 'inicio';
}

export function adminNavFor(id: string): 'inventario' | 'historial' | 'estadisticas' {
  if (id === 'numeros-negocio' || id === 'ventas-canal' || id === 'platos-insumos') {
    return 'estadisticas';
  }
  if (
    id.startsWith('historial') ||
    id.includes('movimiento') ||
    id.includes('ajuste') ||
    id.includes('eliminacion') ||
    id.includes('registro') ||
    id.startsWith('editar-pedido') ||
    id.startsWith('confirmar-pedido') ||
    id.startsWith('pedido-')
  ) {
    return 'historial';
  }
  return 'inventario';
}
