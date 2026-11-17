import type { ComponentType } from 'react';
import { Frame01Inventario } from '@/features/admin-inventory/screens/Frame01Inventario';
import { Frame02DetalleCarneDeRes } from '@/features/admin-inventory/screens/Frame02DetalleCarneDeRes';
import { Frame03AgregarExistentePredeterminado } from '@/features/admin-inventory/screens/Frame03AgregarExistentePredeterminado';
import { Frame04AgregarNuevoProducto } from '@/features/admin-inventory/screens/Frame04AgregarNuevoProducto';
import { Frame05HistorialMovimientos } from '@/features/admin-inventory/screens/Frame05HistorialMovimientos';
import { Frame06HistorialPedidos } from '@/features/admin-orders/screens/Frame06HistorialPedidos';
import { Frame07EditarMovimientoMOV184 } from '@/features/admin-inventory/screens/Frame07EditarMovimientoMOV184';
import { Frame08ConfirmarCorrecciNMOV184 } from '@/features/admin-inventory/screens/Frame08ConfirmarCorrecciNMOV184';
import { Frame09EditarPedidoPED1048 } from '@/features/admin-orders/screens/Frame09EditarPedidoPED1048';
import { Frame10ConfirmarCambiosPED1048 } from '@/features/admin-orders/screens/Frame10ConfirmarCambiosPED1048';
import { Frame11PedidoAAdirProducto } from '@/features/admin-orders/screens/Frame11PedidoAAdirProducto';
import { Frame12PedidoProductoQuitadoBorrador } from '@/features/admin-orders/screens/Frame12PedidoProductoQuitadoBorrador';
import { Frame13PedidoProductoAAdidoBorrador } from '@/features/admin-orders/screens/Frame13PedidoProductoAAdidoBorrador';
import { Frame15HistorialRegistroEliminado } from '@/features/admin-inventory/screens/Frame15HistorialRegistroEliminado';
import { Frame1NMerosDelNegocio } from '@/features/admin-stats/screens/Frame1NMerosDelNegocio';
import { Frame2VentasYUtilidadPorCanal } from '@/features/admin-stats/screens/Frame2VentasYUtilidadPorCanal';
import { Frame3PlatosInsumosYUtilidad } from '@/features/admin-stats/screens/Frame3PlatosInsumosYUtilidad';
import { Frame16FuncionalidadNoImplementada } from '@/features/admin-inventory/screens/Frame16FuncionalidadNoImplementada';
import { AjusteMOV184 } from '@/features/admin-inventory/screens/AjusteMOV184';
import { AjustePED1048 } from '@/features/admin-orders/screens/AjustePED1048';
import { ConfirmarEliminaciNNuevaPropuesta } from '@/features/admin-inventory/screens/ConfirmarEliminaciNNuevaPropuesta';
import { EliminaciNMOV184 } from '@/features/admin-inventory/screens/EliminaciNMOV184';
import { WHOPPERINICIO } from '@/features/home/screens/WHOPPERINICIO';
import { WHOPPERINICIOFuncionNoRealizada } from '@/features/home/screens/WHOPPERINICIOFuncionNoRealizada';
import { FuncionNoDisponible } from '@/features/home/screens/FuncionNoDisponible';
import { IniciarSesionNueva } from '@/features/auth/screens/IniciarSesionNueva';
import { RegistroDeCuenta } from '@/features/auth/screens/RegistroDeCuenta';
import { SmsTelefono } from '@/features/auth/screens/SmsTelefono';
import { CorreoCambiar } from '@/features/auth/screens/CorreoCambiar';
import { RecuperarContrasena } from '@/features/auth/screens/RecuperarContrasena';
import { Contactos } from '@/features/home/screens/Contactos';
import { MiCuenta } from '@/features/account/screens/MiCuenta';
import { MisDatos } from '@/features/account/screens/MisDatos';
import { MisDireccionesWhopperKing } from '@/features/account/screens/MisDireccionesWhopperKing';
import { AgregarDirecciN } from '@/features/account/screens/AgregarDirecciN';
import { ConfirmarEliminaciNWhopperKing } from '@/features/account/screens/ConfirmarEliminaciNWhopperKing';
import { PrivacidadYDatos } from '@/features/account/screens/PrivacidadYDatos';
import { EliminaciNDeCuenta } from '@/features/account/screens/EliminaciNDeCuenta';
import { MenWhopperKing } from '@/features/menu/screens/MenWhopperKing';
import { AlmuerzoWhopperKing } from '@/features/menu/screens/AlmuerzoWhopperKing';
import { BurgersWhopperKing } from '@/features/menu/screens/BurgersWhopperKing';
import { BurgersWhopperKing00 } from '@/features/menu/screens/BurgersWhopperKing00';
import { PolloWhopperKing } from '@/features/menu/screens/PolloWhopperKing';
import { CarneWhopperKing } from '@/features/menu/screens/CarneWhopperKing';
import { PescadoWhopperKing } from '@/features/menu/screens/PescadoWhopperKing';
import { BebidasWhoperKing } from '@/features/menu/screens/BebidasWhoperKing';
import { CarritoLocal } from '@/features/cart/screens/CarritoLocal';
import { CarritoDomicilio } from '@/features/cart/screens/CarritoDomicilio';
import { TuCarritoLocal } from '@/features/cart/screens/TuCarritoLocal';
import { TuCarritoADomicilio } from '@/features/cart/screens/TuCarritoADomicilio';
import { CarritoNoFunciona } from '@/features/cart/screens/CarritoNoFunciona';
import { PantallaDeEscaneoDeQR } from '@/features/checkout/screens/PantallaDeEscaneoDeQR';
import { PedidoEnviadoLocal } from '@/features/checkout/screens/PedidoEnviadoLocal';
import { PedidoEnviadoDomicilio } from '@/features/checkout/screens/PedidoEnviadoDomicilio';
import { PedidoExitosoLocal } from '@/features/checkout/screens/PedidoExitosoLocal';
import { FalloEnElPago } from '@/features/checkout/screens/FalloEnElPago';
import { QuitarProducto } from '@/features/cart/screens/QuitarProducto';
import { SobreNosotros } from '@/features/home/screens/SobreNosotros';
import { PQRS } from '@/features/pqrs/screens/PQRS';
import { PQRSConfirmacion } from '@/features/pqrs/screens/PQRSConfirmacion';
import { PQRSRadicacion } from '@/features/pqrs/screens/PQRSRadicacion';
import { DescripciNTexana } from '@/features/menu/screens/DescripciNTexana';
import { WhopperPersonalizaTuPedido } from '@/features/menu/screens/WhopperPersonalizaTuPedido';
import { WhopperMiniComboPersonalizaTuPedido } from '@/features/menu/screens/WhopperMiniComboPersonalizaTuPedido';
import { WhopperMaxiComboPersonalizaTuPedido } from '@/features/menu/screens/WhopperMaxiComboPersonalizaTuPedido';
import { TexanaEspecialMaxiComboPersonalizaTuPedido } from '@/features/menu/screens/TexanaEspecialMaxiComboPersonalizaTuPedido';
import { TexanaEspecialMiniComboPersonalizaTuPedido } from '@/features/menu/screens/TexanaEspecialMiniComboPersonalizaTuPedido';
import { EligeCMoPagarADomicilioBreB } from '@/features/checkout/screens/EligeCMoPagarADomicilioBreB';
import { EligeCMoPagarADomicilioEfectivo } from '@/features/checkout/screens/EligeCMoPagarADomicilioEfectivo';
import { EligeCMoPagarADomicilioNequi } from '@/features/checkout/screens/EligeCMoPagarADomicilioNequi';
import { EligeCMoPagarADomicilioTarjeta } from '@/features/checkout/screens/EligeCMoPagarADomicilioTarjeta';
import { EligeCMoPagarEnElLocalBreB } from '@/features/checkout/screens/EligeCMoPagarEnElLocalBreB';
import { EligeCMoPagarEnElLocalEfectivo } from '@/features/checkout/screens/EligeCMoPagarEnElLocalEfectivo';
import { EligeCMoPagarEnElLocalNequi } from '@/features/checkout/screens/EligeCMoPagarEnElLocalNequi';
import { EligeCMoPagarEnElLocalTarjeta } from '@/features/checkout/screens/EligeCMoPagarEnElLocalTarjeta';
export type Screen = {
  id: string;
  name: string;
  Component: ComponentType;
};

export const screens: Screen[] = [
  { id: 'inventario', name: "01 · Inventario", Component: Frame01Inventario },
  { id: 'detalle-carne', name: "02 · Detalle · Carne de res", Component: Frame02DetalleCarneDeRes },
  { id: 'agregar-existente', name: "03 · Agregar · Existente", Component: Frame03AgregarExistentePredeterminado },
  { id: 'agregar-nuevo', name: "04 · Agregar · Nuevo producto", Component: Frame04AgregarNuevoProducto },
  { id: 'historial-movimientos', name: "05 · Historial · Movimientos", Component: Frame05HistorialMovimientos },
  { id: 'historial-pedidos', name: "06 · Historial · Pedidos", Component: Frame06HistorialPedidos },
  { id: 'editar-movimiento', name: "07 · Editar movimiento · MOV-184", Component: Frame07EditarMovimientoMOV184 },
  { id: 'confirmar-correccion', name: "08 · Confirmar corrección · MOV-184", Component: Frame08ConfirmarCorrecciNMOV184 },
  { id: 'editar-pedido', name: "09 · Editar pedido · PED-1048", Component: Frame09EditarPedidoPED1048 },
  { id: 'confirmar-pedido', name: "10 · Confirmar cambios · PED-1048", Component: Frame10ConfirmarCambiosPED1048 },
  { id: 'pedido-anadir', name: "11 · Pedido · Añadir producto", Component: Frame11PedidoAAdirProducto },
  { id: 'pedido-quitado', name: "12 · Pedido · Producto quitado", Component: Frame12PedidoProductoQuitadoBorrador },
  { id: 'pedido-anadido', name: "13 · Pedido · Producto añadido", Component: Frame13PedidoProductoAAdidoBorrador },
  { id: 'registro-eliminado', name: "15 · Historial · Registro eliminado", Component: Frame15HistorialRegistroEliminado },
  { id: 'numeros-negocio', name: "Estadísticas · Números del negocio", Component: Frame1NMerosDelNegocio },
  { id: 'ventas-canal', name: "Estadísticas · Ventas por canal", Component: Frame2VentasYUtilidadPorCanal },
  { id: 'platos-insumos', name: "Estadísticas · Platos e insumos", Component: Frame3PlatosInsumosYUtilidad },
  { id: 'no-implementada', name: "16 · Funcionalidad no implementada", Component: Frame16FuncionalidadNoImplementada },
  { id: 'ajuste-mov-184', name: "Ajuste · MOV-184", Component: AjusteMOV184 },
  { id: 'ajuste-ped-1048', name: "Ajuste · PED-1048", Component: AjustePED1048 },
  { id: 'confirmar-eliminacion', name: "Confirmar eliminación", Component: ConfirmarEliminaciNNuevaPropuesta },
  { id: 'eliminacion-mov-184', name: "Eliminación · MOV-184", Component: EliminaciNMOV184 },
  { id: 'whopper-inicio', name: "[Cliente] WHOPPER INICIO", Component: WHOPPERINICIO },
  { id: 'whopper-inicio-na', name: "[Cliente] WHOPPER INICIO - funcion no realizada", Component: WHOPPERINICIOFuncionNoRealizada },
  { id: 'no-disponible', name: "[Cliente] Función no disponible", Component: FuncionNoDisponible },
  { id: 'login', name: "[Cliente] Iniciar sesion - nueva", Component: IniciarSesionNueva },
  { id: 'registro', name: "[Cliente] Registro de cuenta", Component: RegistroDeCuenta },
  { id: 'sms-telefono', name: "[Cliente] sms telefono", Component: SmsTelefono },
  { id: 'correo-cambiar', name: "[Cliente] correo cambiar", Component: CorreoCambiar },
  { id: 'recuperar-contrasena', name: "[Cliente] Recuperar contraseña", Component: RecuperarContrasena },
  { id: 'contactos', name: "[Cliente] Contactos", Component: Contactos },
  { id: 'mi-cuenta', name: "[Cliente] Mi cuenta", Component: MiCuenta },
  { id: 'mis-datos', name: "[Cliente] Mis datos", Component: MisDatos },
  { id: 'mis-direcciones', name: "[Cliente] Mis direcciones - Whopper King", Component: MisDireccionesWhopperKing },
  { id: 'agregar-direccion', name: "[Cliente] Agregar dirección", Component: AgregarDirecciN },
  { id: 'confirmar-elim-direccion', name: "[Cliente] Confirmar eliminación - Whopper King", Component: ConfirmarEliminaciNWhopperKing },
  { id: 'privacidad', name: "[Cliente] Privacidad y datos", Component: PrivacidadYDatos },
  { id: 'elim-cuenta', name: "[Cliente] Eliminación de cuenta", Component: EliminaciNDeCuenta },
  { id: 'menu', name: "[Cliente] Menú· Whopper King", Component: MenWhopperKing },
  { id: 'menu-almuerzo', name: "[Cliente] Almuerzo· Whopper King", Component: AlmuerzoWhopperKing },
  { id: 'menu-burgers', name: "[Cliente] Burgers · Whopper King", Component: BurgersWhopperKing },
  { id: 'menu-burgers-00', name: "[Cliente] Burgers · Whopper King 00", Component: BurgersWhopperKing00 },
  { id: 'menu-pollo', name: "[Cliente] Pollo· Whopper King", Component: PolloWhopperKing },
  { id: 'menu-carne', name: "[Cliente] Carne · Whopper King", Component: CarneWhopperKing },
  { id: 'menu-pescado', name: "[Cliente] Pescado· Whopper King", Component: PescadoWhopperKing },
  { id: 'menu-bebidas', name: "[Cliente] Bebidas Whoper King", Component: BebidasWhoperKing },
  { id: 'carrito-local', name: "[Cliente] Carrito local", Component: CarritoLocal },
  { id: 'carrito-domicilio', name: "[Cliente] Carrito domicilio", Component: CarritoDomicilio },
  { id: 'tu-carrito-local', name: "[Cliente] Tu carrito local", Component: TuCarritoLocal },
  { id: 'tu-carrito-domicilio', name: "[Cliente] Tu carrito · A domicilio", Component: TuCarritoADomicilio },
  { id: 'carrito-na', name: "[Cliente] Carrito No funciona", Component: CarritoNoFunciona },
  { id: 'escaneo-qr', name: "[Cliente] Pantalla de escaneo de QR", Component: PantallaDeEscaneoDeQR },
  { id: 'pedido-enviado-local', name: "[Cliente] Pedido Enviado · Local", Component: PedidoEnviadoLocal },
  { id: 'pedido-enviado-domicilio', name: "[Cliente] Pedido Enviado · Domicilio", Component: PedidoEnviadoDomicilio },
  { id: 'pedido-exitoso-local', name: "[Cliente] Pedido Exitoso Local", Component: PedidoExitosoLocal },
  { id: 'fallo-pago', name: "[Cliente] Fallo en el pago", Component: FalloEnElPago },
  { id: 'quitar-producto-cliente', name: "[Cliente] Quitar Producto", Component: QuitarProducto },
  { id: 'sobre-nosotros', name: "[Cliente] Sobre Nosotros", Component: SobreNosotros },
  { id: 'pqrs', name: "[Cliente] PQRS", Component: PQRS },
  { id: 'pqrs-confirmacion', name: "[Cliente] PQRS Confirmacion", Component: PQRSConfirmacion },
  { id: 'pqrs-radicacion', name: "[Cliente] PQRS Radicacion", Component: PQRSRadicacion },
  { id: 'desc-texana', name: "[Cliente] Descripción Texana", Component: DescripciNTexana },
  { id: 'personaliza-whopper', name: "[Cliente] Whopper · Personaliza tu pedido", Component: WhopperPersonalizaTuPedido },
  { id: 'personaliza-whopper-mini', name: "[Cliente] Whopper · Mini Combo · Personaliza tu pedido", Component: WhopperMiniComboPersonalizaTuPedido },
  { id: 'personaliza-whopper-maxi', name: "[Cliente] Whopper · Maxi Combo · Personaliza tu pedido", Component: WhopperMaxiComboPersonalizaTuPedido },
  { id: 'personaliza-texana-maxi', name: "[Cliente] Texana Especial · Maxi Combo · Personaliza tu pedido", Component: TexanaEspecialMaxiComboPersonalizaTuPedido },
  { id: 'personaliza-texana-mini', name: "[Cliente] Texana Especial · Mini Combo · Personaliza tu pedido", Component: TexanaEspecialMiniComboPersonalizaTuPedido },
  { id: 'pago-dom-breb', name: "[Cliente] Elige cómo pagar · A domicilio  · Bre-B", Component: EligeCMoPagarADomicilioBreB },
  { id: 'pago-dom-efectivo', name: "[Cliente] Elige cómo pagar · A domicilio · Efectivo", Component: EligeCMoPagarADomicilioEfectivo },
  { id: 'pago-dom-nequi', name: "[Cliente] Elige cómo pagar · A domicilio · Nequi", Component: EligeCMoPagarADomicilioNequi },
  { id: 'pago-dom-tarjeta', name: "[Cliente] Elige cómo pagar · A domicilio · Tarjeta", Component: EligeCMoPagarADomicilioTarjeta },
  { id: 'pago-local-breb', name: "[Cliente] Elige cómo pagar · En el local · Bre-B", Component: EligeCMoPagarEnElLocalBreB },
  { id: 'pago-local-efectivo', name: "[Cliente] Elige cómo pagar · En el local · Efectivo", Component: EligeCMoPagarEnElLocalEfectivo },
  { id: 'pago-local-nequi', name: "[Cliente] Elige cómo pagar · En el local · Nequi", Component: EligeCMoPagarEnElLocalNequi },
  { id: 'pago-local-tarjeta', name: "[Cliente] Elige cómo pagar · En el local · Tarjeta", Component: EligeCMoPagarEnElLocalTarjeta },
  // Stub vacío reemplazado por el frame real Burgers · Whopper King
  { id: 'menu-hamburguesas', name: "[Cliente] Menu de Hamburguesas", Component: BurgersWhopperKing },
];

export const screenById = Object.fromEntries(screens.map((s) => [s.id, s])) as Record<
  string,
  Screen
>;
