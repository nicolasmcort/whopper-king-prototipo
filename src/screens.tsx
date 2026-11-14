import type { ComponentType } from 'react';
import { Frame01Inventario } from './components/generated/Frame01Inventario';
import { Frame02DetalleCarneDeRes } from './components/generated/Frame02DetalleCarneDeRes';
import { Frame03AgregarExistentePredeterminado } from './components/generated/Frame03AgregarExistentePredeterminado';
import { Frame04AgregarNuevoProducto } from './components/generated/Frame04AgregarNuevoProducto';
import { Frame05HistorialMovimientos } from './components/generated/Frame05HistorialMovimientos';
import { Frame06HistorialPedidos } from './components/generated/Frame06HistorialPedidos';
import { Frame07EditarMovimientoMOV184 } from './components/generated/Frame07EditarMovimientoMOV184';
import { Frame08ConfirmarCorrecciNMOV184 } from './components/generated/Frame08ConfirmarCorrecciNMOV184';
import { Frame09EditarPedidoPED1048 } from './components/generated/Frame09EditarPedidoPED1048';
import { Frame10ConfirmarCambiosPED1048 } from './components/generated/Frame10ConfirmarCambiosPED1048';
import { Frame11PedidoAAdirProducto } from './components/generated/Frame11PedidoAAdirProducto';
import { Frame12PedidoProductoQuitadoBorrador } from './components/generated/Frame12PedidoProductoQuitadoBorrador';
import { Frame13PedidoProductoAAdidoBorrador } from './components/generated/Frame13PedidoProductoAAdidoBorrador';
import { Frame15HistorialRegistroEliminado } from './components/generated/Frame15HistorialRegistroEliminado';
import { Frame1NMerosDelNegocio } from './components/generated/Frame1NMerosDelNegocio';
import { Frame2VentasYUtilidadPorCanal } from './components/generated/Frame2VentasYUtilidadPorCanal';
import { Frame3PlatosInsumosYUtilidad } from './components/generated/Frame3PlatosInsumosYUtilidad';
import { Frame16FuncionalidadNoImplementada } from './components/generated/Frame16FuncionalidadNoImplementada';
import { AjusteMOV184 } from './components/generated/AjusteMOV184';
import { AjustePED1048 } from './components/generated/AjustePED1048';
import { ConfirmarEliminaciNNuevaPropuesta } from './components/generated/ConfirmarEliminaciNNuevaPropuesta';
import { EliminaciNMOV184 } from './components/generated/EliminaciNMOV184';
import { WHOPPERINICIO } from './components/generated/WHOPPERINICIO';
import { WHOPPERINICIOFuncionNoRealizada } from './components/generated/WHOPPERINICIOFuncionNoRealizada';
import { IniciarSesionNueva } from './components/generated/IniciarSesionNueva';
import { RegistroDeCuenta } from './components/generated/RegistroDeCuenta';
import { SmsTelefono } from './components/generated/SmsTelefono';
import { CorreoCambiar } from './components/generated/CorreoCambiar';
import { Contactos } from './components/generated/Contactos';
import { MiCuenta } from './components/generated/MiCuenta';
import { MisDatos } from './components/generated/MisDatos';
import { MisDireccionesWhopperKing } from './components/generated/MisDireccionesWhopperKing';
import { AgregarDirecciN } from './components/generated/AgregarDirecciN';
import { ConfirmarEliminaciNWhopperKing } from './components/generated/ConfirmarEliminaciNWhopperKing';
import { PrivacidadYDatos } from './components/generated/PrivacidadYDatos';
import { EliminaciNDeCuenta } from './components/generated/EliminaciNDeCuenta';
import { MenWhopperKing } from './components/generated/MenWhopperKing';
import { AlmuerzoWhopperKing } from './components/generated/AlmuerzoWhopperKing';
import { BurgersWhopperKing } from './components/generated/BurgersWhopperKing';
import { BurgersWhopperKing00 } from './components/generated/BurgersWhopperKing00';
import { PolloWhopperKing } from './components/generated/PolloWhopperKing';
import { CarneWhopperKing } from './components/generated/CarneWhopperKing';
import { PescadoWhopperKing } from './components/generated/PescadoWhopperKing';
import { BebidasWhoperKing } from './components/generated/BebidasWhoperKing';
import { CarritoLocal } from './components/generated/CarritoLocal';
import { CarritoDomicilio } from './components/generated/CarritoDomicilio';
import { TuCarritoLocal } from './components/generated/TuCarritoLocal';
import { TuCarritoADomicilio } from './components/generated/TuCarritoADomicilio';
import { CarritoNoFunciona } from './components/generated/CarritoNoFunciona';
import { PantallaDeEscaneoDeQR } from './components/generated/PantallaDeEscaneoDeQR';
import { PedidoEnviadoLocal } from './components/generated/PedidoEnviadoLocal';
import { PedidoEnviadoDomicilio } from './components/generated/PedidoEnviadoDomicilio';
import { PedidoExitosoLocal } from './components/generated/PedidoExitosoLocal';
import { FalloEnElPago } from './components/generated/FalloEnElPago';
import { QuitarProducto } from './components/generated/QuitarProducto';
import { SobreNosotros } from './components/generated/SobreNosotros';
import { PQRS } from './components/generated/PQRS';
import { PQRSConfirmacion } from './components/generated/PQRSConfirmacion';
import { PQRSRadicacion } from './components/generated/PQRSRadicacion';
import { DescripciNTexana } from './components/generated/DescripciNTexana';
import { WhopperPersonalizaTuPedido } from './components/generated/WhopperPersonalizaTuPedido';
import { WhopperMiniComboPersonalizaTuPedido } from './components/generated/WhopperMiniComboPersonalizaTuPedido';
import { WhopperMaxiComboPersonalizaTuPedido } from './components/generated/WhopperMaxiComboPersonalizaTuPedido';
import { TexanaEspecialMaxiComboPersonalizaTuPedido } from './components/generated/TexanaEspecialMaxiComboPersonalizaTuPedido';
import { TexanaEspecialMiniComboPersonalizaTuPedido } from './components/generated/TexanaEspecialMiniComboPersonalizaTuPedido';
import { EligeCMoPagarADomicilioBreB } from './components/generated/EligeCMoPagarADomicilioBreB';
import { EligeCMoPagarADomicilioEfectivo } from './components/generated/EligeCMoPagarADomicilioEfectivo';
import { EligeCMoPagarADomicilioNequi } from './components/generated/EligeCMoPagarADomicilioNequi';
import { EligeCMoPagarADomicilioTarjeta } from './components/generated/EligeCMoPagarADomicilioTarjeta';
import { EligeCMoPagarEnElLocalBreB } from './components/generated/EligeCMoPagarEnElLocalBreB';
import { EligeCMoPagarEnElLocalEfectivo } from './components/generated/EligeCMoPagarEnElLocalEfectivo';
import { EligeCMoPagarEnElLocalNequi } from './components/generated/EligeCMoPagarEnElLocalNequi';
import { EligeCMoPagarEnElLocalTarjeta } from './components/generated/EligeCMoPagarEnElLocalTarjeta';
import { MenuDeHamburguesas } from './components/generated/MenuDeHamburguesas';

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
  { id: 'login', name: "[Cliente] Iniciar sesion - nueva", Component: IniciarSesionNueva },
  { id: 'registro', name: "[Cliente] Registro de cuenta", Component: RegistroDeCuenta },
  { id: 'sms-telefono', name: "[Cliente] sms telefono", Component: SmsTelefono },
  { id: 'correo-cambiar', name: "[Cliente] correo cambiar", Component: CorreoCambiar },
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
  { id: 'menu-hamburguesas', name: "[Cliente] Menu de Hamburguesas", Component: MenuDeHamburguesas },
];

export const screenById = Object.fromEntries(screens.map((s) => [s.id, s])) as Record<
  string,
  Screen
>;
