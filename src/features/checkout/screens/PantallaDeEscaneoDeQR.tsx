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
const surface1: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.002)"
};
const font_Inter: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Inter', system-ui, sans-serif"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const row2: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const col1: React.CSSProperties = {
  display: "flex",
  padding: "24px 0 0",
  boxSizing: "border-box",
  flexDirection: "column"
};
const col2: React.CSSProperties = {
  display: "flex",
  padding: "0 0 0 8px",
  boxSizing: "border-box",
  flexDirection: "column"
};
export function PantallaDeEscaneoDeQR() {
  return <div data-figma-id="646:2336" style={rootLayer(402, 884, {
    background: "linear-gradient(#1e1714, #1e1714), linear-gradient(#0d0a08, #0d0a08)",
    backgroundColor: "#ffffff",
    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.65)",
    overflow: "hidden"
  })}>
    <div data-figma-id="646:2337" style={{
      background: "radial-gradient(196.231% 86.573% at 75% 20%, rgba(255, 170, 110, 0.08) 0%, rgba(255, 170, 110, 0) 40%), radial-gradient(148.128% 65.35% at 20% 45%, rgba(240, 120, 80, 0.06) 0%, rgba(240, 120, 80, 0) 50%), radial-gradient(144.9% 63.926% at 50% 60%, rgba(180, 130, 90, 0.05) 0%, rgba(180, 130, 90, 0) 60%)",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }} />
    <div data-figma-id="646:2338" style={{
      position: "absolute",
      left: 0,
      top: 88,
      right: 0,
      bottom: 303
    }}>
      <div data-figma-id="646:2339" style={absoluteLayer("calc(50% + -135px)", 7.375, "max-content", 58, {
        ...row1,
        maxWidth: 270,
        padding: "0 0.73px 0 0.72px",
        boxSizing: "border-box",
        flexDirection: "column"
      })}>
        <span data-figma-id="646:2340" style={{
          color: "#ffffff",
          whiteSpace: "pre",
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontSize: 23,
          fontWeight: 700,
          fontVariationSettings: "\"wght\" 700",
          lineHeight: "28.75px",
          textAlign: "center",
          ...row2,
          position: "relative",
          flexShrink: 0
        }}>
          {"Escanea el código QR de\ntu mesa"}
        </span>
      </div>
      <div data-figma-id="646:2341" style={absoluteLayer(71.45, 307.5, "max-content", 45, col1)}>
        <div data-figma-id="646:2342" style={fixedLayer("max-content", 21, {
          ...row1,
          flexDirection: "column"
        })}>
          <span data-figma-id="646:2343" style={{
            ...font_Inter,
            color: "rgba(250, 248, 245, 0.9)",
            fontSize: 13.5,
            fontWeight: 400,
            fontVariationSettings: "\"wght\" 400",
            lineHeight: "20.25px",
            textAlign: "center",
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
            {"Lo encuentras en el centro de la mesa."}
          </span>
        </div>
      </div>
      <div data-figma-id="646:2344" style={absoluteLayer(86, 65.5, 218, 242, col1)}>
        <div data-figma-id="646:2345" style={fixedLayer(218, 218, row2)}>
          <div data-figma-id="646:2346" style={absoluteLayer(-2, -2, 32, 32, {
            borderTop: "4px solid #ed6047",
            borderLeft: "4px solid #ed6047",
            borderRadius: "16px 0 0 0"
          })} />
          <div data-figma-id="646:2347" style={{
            borderTop: "4px solid #ed6047",
            borderRight: "4px solid #ed6047",
            borderRadius: "0 16px 0 0",
            position: "absolute",
            top: -2,
            width: 32,
            height: 32,
            right: -2
          }} />
          <div data-figma-id="646:2348" style={{
            borderBottom: "4px solid #ed6047",
            borderLeft: "4px solid #ed6047",
            borderRadius: "0 0 0 16px",
            position: "absolute",
            left: -2,
            width: 32,
            height: 32,
            bottom: -2
          }} />
          <div data-figma-id="646:2349" style={{
            borderRight: "4px solid #ed6047",
            borderBottom: "4px solid #ed6047",
            borderRadius: "0 0 16px 0",
            position: "absolute",
            width: 32,
            height: 32,
            right: -2,
            bottom: -2
          }} />
          <div data-figma-id="646:2350" style={fixedLayer(196, 196, {
            background: "rgba(39, 32, 28, 0.6)",
            boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
            borderRadius: 24,
            backdropFilter: "blur(8px)",
            ...row1,
            padding: 1,
            boxSizing: "border-box",
            justifyContent: "center"
          })}>
            <div data-figma-id="646:2351" style={fixedLayer(80, 80, {
              overflow: "hidden"
            })}>
              <div data-figma-id="646:2352" style={absoluteLayer("8.333%", "8.333%", "83.333%", "83.333%")} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="646:2353" style={{
      ...row1,
      padding: "12px 32px 0",
      boxSizing: "border-box",
      justifyContent: "space-between",
      position: "absolute",
      left: 0,
      top: 0,
      height: "max-content",
      right: 0
    }}>
      <div data-figma-id="646:2354" style={fixedLayer("max-content", 20, {
        display: "flex",
        padding: "0 0 0 4px",
        boxSizing: "border-box",
        flexDirection: "column"
      })}>
        <span data-figma-id="646:2355" style={{
          ...font_Inter,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 600,
          fontVariationSettings: "\"wght\" 600",
          lineHeight: "20px",
          letterSpacing: "-0.35px",
          ...row1,
          position: "relative",
          flexShrink: 0
        }}>
          {"9:41"}
        </span>
      </div>
      <div data-figma-id="646:2356" style={fixedLayer(70.5, "max-content", row1)}>
        <div data-figma-id="646:2357" style={fixedLayer(16, 14, {
          overflow: "hidden"
        })}>
          <div data-figma-id="646:2358" style={absoluteLayer("0%", "63.445%", "17.647%", "26.891%")} />
          <div data-figma-id="646:2359" style={absoluteLayer("26.471%", "46.639%", "17.647%", "43.697%")} />
          <div data-figma-id="646:2360" style={absoluteLayer("52.941%", "29.832%", "17.647%", "60.504%")} />
          <div data-figma-id="646:2361" style={absoluteLayer("79.412%", "9.664%", "17.647%", "80.672%")} />
        </div>
        <div data-figma-id="646:2362" style={fixedLayer(24, 14, col2)}>
          <div data-figma-id="646:2363" style={fixedLayer(16, 14, {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          })}>
            <div data-figma-id="646:2364" style={{
              minHeight: 0,
              overflow: "hidden",
              position: "relative",
              width: 16,
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
              <svg viewBox="0 0 19 12" width="100%" height="100%" fill="none" aria-hidden><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#29241f"/><rect x="5" y="5.5" width="3" height="6.5" rx="0.5" fill="#29241f"/><rect x="10" y="3" width="3" height="9" rx="0.5" fill="#29241f"/><rect x="15" y="0.5" width="3" height="11.5" rx="0.5" fill="#29241f"/></svg>
                </div>
          </div>
        </div>
        <div data-figma-id="646:2366" style={fixedLayer("max-content", 12, col2)}>
          <div data-figma-id="646:2367" style={fixedLayer(22.5, "max-content", row1)}>
            <div data-figma-id="646:2368" style={fixedLayer(20, 12, {
              boxShadow: "inset 0 0 0 1px #ffffff",
              borderRadius: 3,
              ...row1,
              padding: 2.5,
              boxSizing: "border-box"
            })}>
              <div data-figma-id="646:2369" style={{
                background: "#ffffff",
                borderRadius: 1.5,
                minWidth: 0,
                minHeight: 0,
                position: "relative",
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0,
                alignSelf: "stretch"
              }} />
            </div>
            <div data-figma-id="646:2370" style={fixedLayer(2.5, 6, {
              display: "flex",
              padding: "0 0 0 1px",
              boxSizing: "border-box",
              flexDirection: "column"
            })}>
              <div data-figma-id="646:2371" style={fixedLayer(1.5, 6, {
                background: "#ffffff",
                borderRadius: "0 1px 1px 0"
              })} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="646:2372" style={{
      display: "flex",
      padding: "8px 24px 4px",
      boxSizing: "border-box",
      flexDirection: "column",
      position: "absolute",
      left: 0,
      top: 32,
      height: 56,
      right: 0
    }}>
      <div data-figma-id="646:2373" style={fixedLayer(44, 44, {
        background: "#ffffff",
        borderRadius: 9999,
        ...row2
      })}>
        <div data-figma-id="646:2374" style={absoluteLayer(0, 0, 44, 44, {
          ...surface1,
          borderRadius: 9999,
          boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)"
        })} />
        <div data-figma-id="646:2375" style={fixedLayer(16, 16, {
          overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
        })}>
          <ClientBackIcon size={20} color="#29241f" />
          </div>
      </div>
    </div>
    <div data-figma-id="646:2378" style={{
      background: "#fffcf8",
      borderRadius: "24px 24px 0 0",
      position: "absolute",
      left: 0,
      top: 581,
      height: 303,
      right: 0
    }}>
      <div data-figma-id="646:2379" style={{
        ...surface1,
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }} />
      <div data-figma-id="646:2380" style={{
        position: "absolute",
        left: 20,
        top: 55.5,
        height: 25.5,
        right: 20
      }}>
        <div data-figma-id="646:2381" style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: 0,
          top: -1,
          height: 20,
          right: 0
        }}>
          <span data-figma-id="646:2382" style={{
            ...font_Inter,
            color: "#29241f",
            fontSize: 13,
            fontWeight: 600,
            fontVariationSettings: "\"wght\" 600",
            lineHeight: "19.5px",
            ...row1,
            position: "relative",
            flexShrink: 0
          }}>
            {"Número de mesa"}
          </span>
        </div>
      </div>
      <div data-figma-id="646:2383" style={{
        background: "#ffffff",
        boxShadow: "inset 0 0 0 1px #ed6047",
        borderRadius: 14,
        filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
        ...row1,
        padding: "1px 15px",
        boxSizing: "border-box",
        position: "absolute",
        left: 20,
        top: 81,
        height: 52,
        right: 20
      }}>
        <div data-figma-id="646:2384" style={fixedLayer(20, 20, {
          overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
        })}>
          <ClientBackIcon size={20} color="#29241f" />
          </div>
        <div data-figma-id="646:2389" style={fixedLayer("max-content", 22, {
          display: "flex",
          padding: "1.5px 0 0.5px 10px",
          boxSizing: "border-box",
          flexDirection: "column"
        })}>
          <span data-figma-id="646:2390" style={{
            color: "#29241f",
            whiteSpace: "pre",
            fontFamily: "'Manrope', system-ui, sans-serif",
            fontSize: 20,
            fontWeight: 800,
            fontVariationSettings: "\"wght\" 800",
            lineHeight: "20px",
            ...row1,
            position: "relative",
            flexShrink: 0
          }}>
            {"7"}
          </span>
        </div>
      </div>
      <div data-figma-id="646:2391" style={{
        display: "flex",
        padding: "6px 0 20px",
        boxSizing: "border-box",
        flexDirection: "column",
        position: "absolute",
        left: 20,
        top: 133,
        height: 44,
        right: 20
      }}>
        <div data-figma-id="646:2392" style={{
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: 18,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <span data-figma-id="646:2393" style={{
            ...font_Inter,
            color: "#82776e",
            fontSize: 12,
            fontWeight: 400,
            fontVariationSettings: "\"wght\" 400",
            lineHeight: "18px",
            ...row1,
            minWidth: 0,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            {"Está en la placa del centro de tu mesa (1 a 16)."}
          </span>
        </div>
      </div>
      <div data-figma-id="646:2394" style={{
        display: "flex",
        padding: "8px 0 4px",
        boxSizing: "border-box",
        justifyContent: "center",
        position: "absolute",
        left: 20,
        top: 279,
        height: "max-content",
        right: 20
      }}>
        <div data-figma-id="646:2395" style={fixedLayer(144, 4, {
          background: "#1a1a1a",
          borderRadius: 9999
        })} />
      </div>
      <div data-figma-id="646:2396" style={{
        display: "flex",
        padding: "0 0 16px",
        boxSizing: "border-box",
        flexDirection: "column",
        position: "absolute",
        left: 20,
        top: 20,
        height: 35.5,
        right: 20
      }}>
        <div data-figma-id="646:2397" style={{
          ...row1,
          minWidth: 0,
          justifyContent: "center",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="646:2398" style={{
            borderTop: "1px solid #e8e2da",
            minWidth: 0,
            position: "relative",
            height: 1,
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }} />
          <div data-figma-id="646:2399" style={fixedLayer(170.33, 19.5)}>
            <span data-figma-id="646:2400" style={{
              ...font_Inter,
              color: "#82776e",
              fontSize: 13,
              fontWeight: 500,
              fontVariationSettings: "\"wght\" 500",
              lineHeight: "19.5px",
              letterSpacing: "-0.325px",
              ...row1,
              position: "absolute",
              left: 12,
              top: -1
            }}>
              {"¿No puedes escanearlo?"}
            </span>
          </div>
          <div data-figma-id="646:2401" style={{
            borderTop: "1px solid #e8e2da",
            minWidth: 0,
            position: "relative",
            height: 1,
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }} />
        </div>
      </div>
      <div data-figma-id="646:2402" style={{
        background: "#ed6047",
        borderRadius: 16,
        ...row2,
        position: "absolute",
        left: 20,
        top: 177,
        height: 56,
        right: 20
      }}>
        <div data-figma-id="646:2403" style={{
          ...surface1,
          borderRadius: 16,
          boxShadow: "0px 2px 4px -2px rgba(237, 96, 71, 0.2), 0px 4px 6px -1px rgba(237, 96, 71, 0.2)",
          position: "absolute",
          left: 0,
          top: 0,
          height: 56,
          right: 0
        }} />
        <span data-figma-id="646:2404" style={{
          ...font_Inter,
          color: "#ffffff",
          fontSize: 16,
          fontWeight: 700,
          fontVariationSettings: "\"wght\" 700",
          lineHeight: "24px",
          textAlign: "center",
          ...row2,
          position: "relative",
          flexShrink: 0
        }}>
          {"Continuar con la mesa 1"}
        </span>
      </div>
      <div data-figma-id="646:2405" style={{
        display: "flex",
        padding: "14px 0 8px",
        boxSizing: "border-box",
        flexDirection: "column",
        position: "absolute",
        left: 20,
        top: 233,
        height: 46,
        right: 20
      }}>
        <div data-figma-id="646:2406" style={{
          ...row1,
          minWidth: 0,
          padding: "4.5px 0 1.5px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 24,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <span data-figma-id="646:2407" style={{
            ...font_Inter,
            color: "#bd412d",
            fontSize: 12,
            fontWeight: 500,
            fontVariationSettings: "\"wght\" 500",
            lineHeight: "18px",
            textAlign: "center",
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
            {"¿Necesitas ayuda? Llama al mesero."}
          </span>
        </div>
      </div>
    </div>
  </div>;
}
export default PantallaDeEscaneoDeQR;