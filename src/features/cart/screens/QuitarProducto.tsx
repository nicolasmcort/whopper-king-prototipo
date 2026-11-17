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
const row1: React.CSSProperties = {
  display: "flex",
  justifyContent: "center"
};
const col1: React.CSSProperties = {
  display: "flex",
  boxSizing: "border-box",
  flexDirection: "column"
};
export function QuitarProducto() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-139" d="M0 0L402 0L402 884L0 884L0 0Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="369:2325" style={rootLayer(402, 884, {
      background: "linear-gradient(#ffffff, #ffffff), linear-gradient(#f3f4f6, #f3f4f6)",
      backgroundColor: "#ffffff",
      boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      overflow: "hidden"
    })}>
    <div data-figma-id="369:2326" style={{
        background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/75aa099b-c45f-44fe-969f-ed79f4f86aa3.png\")",
        backgroundSize: "100% 111.272%",
        backgroundPosition: "0% 50%",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        position: "absolute",
        left: 0,
        top: 0,
        height: 875,
        right: 0
      }} />
    <svg data-figma-id="369:2327" viewBox="0 0 402 884" preserveAspectRatio="none" style={{
        backdropFilter: "blur(2px)",
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        bottom: 1
      }}>
      <use href="#figma-vector-139" fill="rgba(0, 0, 0, 0.25)" />
    </svg>
    <div data-figma-id="375:437" style={absoluteLayer(0, 405.37, 64, 84, {
        ...col1,
        padding: "0 0 20px"
      })} />
    <div data-figma-id="375:445" style={absoluteLayer(2, 489, 398, 394.63, {
        background: "#fffcf8",
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.32)",
        borderRadius: "24px 24px 0 0",
        filter: "drop-shadow(0px -12px 40px rgba(0, 0, 0, 0.18))"
      })}>
      <div data-figma-id="375:446" style={{
          ...row1,
          padding: "14px 0 8px",
          boxSizing: "border-box",
          position: "absolute",
          left: 1,
          top: 1,
          height: 26,
          right: 1
        }}>
        <div data-figma-id="375:447" style={fixedLayer(40, 4, {
            background: "#d1c7bd",
            borderRadius: 9999
          })} />
      </div>
      <div data-figma-id="375:448" style={{
          ...col1,
          padding: "20px 24px 28px",
          alignItems: "center",
          position: "absolute",
          left: 1,
          top: 27,
          height: 350.63,
          right: 1
        }}>
        <div data-figma-id="375:449" style={fixedLayer(64, 84, {
            ...col1,
            padding: "0 0 20px"
          })}>
          <div data-figma-id="375:450" style={fixedLayer(64, 64, {
              background: "#f5efe7",
              borderRadius: 9999,
              ...row1,
              alignItems: "center"
            })}>
            <div data-figma-id="375:451" style={fixedLayer(28, 28, {
                overflow: "hidden"
              })}>
              <ClientTrashIcon size={24} color="#ed6047" />
          </div>
          </div>
        </div>
        <div data-figma-id="375:456" style={fixedLayer(305.03, 35.5)}>
          <div data-figma-id="375:457" style={absoluteLayer("calc(50% + -195.5px)", -1, 390, 28)}>
            <span data-figma-id="375:458" style={{
                color: "#29241f",
                whiteSpace: "pre",
                fontFamily: "'Manrope', system-ui, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                fontVariationSettings: "\"wght\" 700",
                lineHeight: "30.052px",
                letterSpacing: "-0.55px",
                textAlign: "center",
                ...row1,
                alignItems: "center",
                position: "absolute",
                left: "calc(50% + -117px)",
                top: 0
              }}>
              {"¿Quitar este producto?"}
            </span>
          </div>
        </div>
        <div data-figma-id="375:459" style={fixedLayer(238.98, 79.13, {
            maxWidth: 290
          })}>
          <span data-figma-id="375:461" style={absoluteLayer(-9.51, 0.5, 257, 65, {
              color: "#82776e",
              whiteSpace: "normal",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14.5,
              fontWeight: 400,
              fontVariationSettings: "\"wght\" 400",
              lineHeight: "23.56px",
              textAlign: "center"
            })}>
            <span style={{
                position: "absolute",
                top: 8.94,
                whiteSpace: "pre",
                lineHeight: "23.56px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 257,
                textAlign: "center"
              }}>{"Se quitará el Whopper · Sencilla de tu\ncarrito."}</span>
          </span>
        </div>
        <div data-figma-id="375:462" style={{
            background: "#ed6047",
            borderRadius: 16,
            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
            ...row1,
            minWidth: 0,
            minHeight: 52,
            padding: "14px 0",
            boxSizing: "border-box",
            alignItems: "center",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="375:463" style={{
              color: "#ffffff",
              whiteSpace: "pre",
              fontFamily: "'Manrope', system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 700,
              fontVariationSettings: "\"wght\" 700",
              lineHeight: "24px",
              textAlign: "center",
              ...row1,
              alignItems: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"Sí, eliminar"}
          </span>
        </div>
        <div data-figma-id="375:464" style={{
            ...col1,
            minWidth: 0,
            minHeight: 52,
            padding: "8px 0 0",
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="375:465" style={{
              ...row1,
              minWidth: 0,
              minHeight: 44,
              padding: "9.75px 0 11.25px",
              boxSizing: "border-box",
              alignItems: "center",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="375:466" style={{
                color: "#82776e",
                whiteSpace: "pre",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 16,
                fontWeight: 500,
                fontVariationSettings: "\"wght\" 500",
                lineHeight: "22.5px",
                textAlign: "center",
                ...row1,
                alignItems: "center",
                position: "relative",
                flexShrink: 0
              }}>
              {"Cancelar"}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="375:467" style={{
          ...row1,
          padding: "4px 0 8px",
          boxSizing: "border-box",
          position: "absolute",
          left: 1,
          top: 377.63,
          height: 16,
          right: 1
        }}>
        <div data-figma-id="375:468" style={fixedLayer(144, 4, {
            opacity: 0.9,
            background: "#1c1917",
            borderRadius: 9999
          })} />
      </div>
      <div data-figma-id="375:469" style={{
          ...row1,
          padding: "4px 0 8px",
          boxSizing: "border-box",
          position: "absolute",
          left: 1,
          top: 378,
          height: 16,
          right: 1
        }}>
        <div data-figma-id="375:470" style={fixedLayer(144, 4, {
            opacity: 0.9,
            background: "#1c1917",
            borderRadius: 9999
          })} />
      </div>
    </div>
  </div>
  </>;
}
export default QuitarProducto;