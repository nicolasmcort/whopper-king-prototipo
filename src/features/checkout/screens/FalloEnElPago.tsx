import React from 'react';
import {
  ClientBackIcon,
  ClientUtensilsIcon,
  ClientPinIcon,
  ClientClockIcon,
  ClientLockIcon,
  ClientStoreIcon,
  ClientCardIcon,
  ClientCashIcon,
  ClientNequiIcon,
  ClientBrebIcon,
  ClientHelpIcon,
  ClientTrashIcon,
  ClientChevronRightIcon,
  ClientAlertIcon,
  ClientCheckIcon,
  ClientEyeIcon,
  ClientShieldIcon,
  ClientHeadsetIcon,
  ClientHomeIcon,
  ClientUserIcon,
  ClientSearchIcon,
  ClientHeartIcon,
  ClientLogoutIcon,
  ClientCloseIcon,
  ClientEditIcon,
} from '@/shared/components/ui/ClientUiIcons';
type LayerValue = string | number;
const absoluteLayer = (left: LayerValue, top: LayerValue, width: LayerValue, height: LayerValue, style: React.CSSProperties = {}): React.CSSProperties => ({
  position: "absolute",
  left,
  top,
  width,
  height,
  ...style
});
const fixedLayer = (width: LayerValue, height: LayerValue, style: React.CSSProperties = {}): React.CSSProperties => ({
  position: "relative",
  width,
  height,
  flexShrink: 0,
  ...style
});
const rootLayer = (width: LayerValue, height: LayerValue, style: React.CSSProperties = {}): React.CSSProperties => ({
  position: "relative",
  width,
  height,
  ...style
});
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif",
  textAlign: "center"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
export function FalloEnElPago() {
  return <div data-figma-id="369:1883" style={rootLayer("100%", 884, {
    background: "linear-gradient(#fffcf8, #fffcf8), linear-gradient(#121212, #121212)",
    backgroundColor: "#ffffff",
    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    ...col1,
    minWidth: 0,
    overflow: "hidden",
    justifyContent: "space-between"
  })}>
    <div data-figma-id="369:1884" style={{
      maxWidth: 402,
      overflow: "hidden",
      position: "absolute",
      left: "calc(50% + -195px)",
      top: 0,
      width: 402,
      bottom: 0
    }}>
      <div data-figma-id="369:1885" style={{
        background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/17127201-e8e6-48be-b8b7-2bb40b64708e.png\")",
        backgroundSize: "100% 136.159%",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
        filter: "blur(1px)",
        overflow: "hidden",
        position: "absolute",
        left: "calc(50% + -203.01px)",
        top: -4.42,
        width: 402,
        transformOrigin: "top left",
        transform: "matrix(1.01, 0, 0, 1.01, 0, 0)",
        bottom: 4.42
      }} />
    </div>
    <div data-figma-id="369:1886" style={{
      background: "rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(1px)",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }} />
    <div data-figma-id="369:1887" style={{
      minWidth: 0,
      position: "relative",
      height: 48,
      flexShrink: 0,
      alignSelf: "stretch"
    }} />
    <div data-figma-id="369:1888" style={{
      background: "#fffcf8",
      borderRadius: "32px 32px 0 0",
      ...col1,
      minWidth: 0,
      padding: "12px 24px 32px",
      boxSizing: "border-box",
      alignItems: "center",
      position: "relative",
      height: 408.5,
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
      <div data-figma-id="369:1889" style={{
        background: "rgba(255, 255, 255, 0.002)",
        boxShadow: "0px -10px 40px -10px rgba(41, 36, 31, 0.25)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }} />
      <div data-figma-id="369:1890" style={fixedLayer(40, 30, {
        ...col1,
        padding: "2px 0 24px",
        boxSizing: "border-box"
      })}>
        <div data-figma-id="369:1891" style={fixedLayer(40, 4, {
          background: "#d9d0c5",
          borderRadius: 9999
        })} />
      </div>
      <div data-figma-id="369:1892" style={fixedLayer(64, 84, {
        ...col1,
        padding: "0 0 20px",
        boxSizing: "border-box"
      })}>
        <div data-figma-id="369:1893" style={fixedLayer(64, 64, {
          background: "#feece8",
          borderRadius: 9999,
          ...row1
        })}>
          <div data-figma-id="369:1894" style={fixedLayer(32, 32, {
            overflow: "hidden"
          })}>
            <ClientAlertIcon size={28} color="#ed6047" />
          </div>
        </div>
      </div>
      <div data-figma-id="369:1898" style={fixedLayer("max-content", 104.5, {
        ...col1,
        padding: "0 0 24px",
        boxSizing: "border-box"
      })}>
        <div data-figma-id="369:1899" style={fixedLayer("max-content", 80.5, {
          ...col1,
          padding: "0 8px",
          boxSizing: "border-box",
          gap: 8.875
        })}>
          <div data-figma-id="369:1900" style={{
            ...col1,
            minWidth: 287,
            alignItems: "center",
            position: "relative",
            height: 25,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="369:1901" style={{
              ...font_Manrope,
              color: "#29241f",
              fontSize: 20,
              fontWeight: 800,
              fontVariationSettings: "\"wght\" 800",
              lineHeight: "27.32px",
              letterSpacing: "-0.5px",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
              {"No se pudo confirmar el pago"}
            </span>
          </div>
          <div data-figma-id="369:1902" style={fixedLayer("100%", 46.625, {
            ...col1,
            minWidth: 0,
            maxWidth: 320,
            padding: "0 0 0.625px",
            boxSizing: "border-box",
            alignItems: "center",
            alignSelf: "flex-start"
          })}>
            <span data-figma-id="369:1903" style={fixedLayer(287, 46, {
              color: "#82776e",
              whiteSpace: "normal",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 400,
              fontVariationSettings: "\"wght\" 400",
              lineHeight: "22.75px",
              textAlign: "center"
            })}>
              <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "22.75px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 287,
                textAlign: "center"
              }}>{"No te cobramos nada. Puedes intentarlo de\nnuevo o enviar el pedido y pagar al recibir."}</span>
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="369:1904" style={{
        ...col1,
        minWidth: 0,
        gap: 12,
        position: "relative",
        height: 118,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="369:1905" style={{
          background: "#ed6047",
          borderRadius: 16,
          filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
          ...row1,
          minWidth: 0,
          padding: "14px 16px",
          boxSizing: "border-box",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <span data-figma-id="369:1906" style={{
            ...font_Manrope,
            color: "#ffffff",
            fontSize: 16,
            fontWeight: 700,
            fontVariationSettings: "\"wght\" 700",
            lineHeight: "24px",
            ...row1,
            position: "relative",
            flexShrink: 0
          }}>
            {"Intentar de nuevo"}
          </span>
        </div>
        <div data-figma-id="369:1907" style={{
          boxShadow: "inset 0 0 0 1px #e8dfd5",
          borderRadius: 16,
          ...row1,
          minWidth: 0,
          padding: "15px 17px",
          boxSizing: "border-box",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <span data-figma-id="369:1908" style={{
            ...font_Manrope,
            color: "#29241f",
            fontSize: 16,
            fontWeight: 700,
            fontVariationSettings: "\"wght\" 700",
            lineHeight: "24px",
            ...row1,
            position: "relative",
            flexShrink: 0
          }}>
            {"Pagar al recibir"}
          </span>
        </div>
      </div>
      <div data-figma-id="369:1909" style={fixedLayer(342, 28, {
        ...col1,
        padding: "24px 107px 0",
        boxSizing: "border-box",
        alignItems: "center"
      })}>
        <div data-figma-id="369:1910" style={fixedLayer(128, 4, {
          background: "#171717",
          borderRadius: 9999
        })} />
      </div>
    </div>
  </div>;
}
export default FalloEnElPago;