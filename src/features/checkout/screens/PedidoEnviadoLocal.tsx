import React from 'react';
import {
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
const font_Inter: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  justifyContent: "space-between"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const row2: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const font_Manrope: React.CSSProperties = {
  color: "#29241f",
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontWeight: 800
};
const text2: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 14,
  fontWeight: 500,
  fontVariationSettings: "\"wght\" 500",
  lineHeight: "20px"
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  color: "#29241f",
  fontSize: 14,
  lineHeight: "20px"
};
export function PedidoEnviadoLocal() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-115-corners-3-0" d="M19.2 1.146C19.2 0.513 18.722 0 18.133 0L17.067 0C16.478 0 16 0.513 16 1.146L16 11.08C16 11.713 16.478 12.226 17.067 12.226L18.133 12.226C18.722 12.226 19.2 11.713 19.2 11.08L19.2 1.146ZM11.766 2.445L12.833 2.445C13.422 2.445 13.899 2.971 13.899 3.619L13.899 11.053C13.899 11.701 13.422 12.226 12.833 12.226L11.766 12.226C11.177 12.226 10.699 11.701 10.699 11.053L10.699 3.619C10.699 2.971 11.177 2.445 11.766 2.445ZM7.434 5.094L6.367 5.094C5.778 5.094 5.301 5.626 5.301 6.283L5.301 11.038C5.301 11.694 5.778 12.226 6.367 12.226L7.434 12.226C8.023 12.226 8.501 11.694 8.501 11.038L8.501 6.283C8.501 5.626 8.023 5.094 7.434 5.094ZM2.133 7.54L1.067 7.54C0.478 7.54 0 8.064 0 8.711L0 11.055C0 11.702 0.478 12.226 1.067 12.226L2.133 12.226C2.722 12.226 3.2 11.702 3.2 11.055L3.2 8.711C3.2 8.064 2.722 7.54 2.133 7.54Z" fillRule="evenodd" />
        <path id="figma-vector-116-corners-3-0" d="M8.571 2.466C11.058 2.466 13.45 3.388 15.253 5.042C15.389 5.17 15.606 5.168 15.739 5.038L17.037 3.775C17.104 3.709 17.142 3.62 17.142 3.527C17.141 3.435 17.102 3.346 17.034 3.281C12.303 -1.094 4.839 -1.094 0.108 3.281C0.04 3.346 0.001 3.435 0 3.527C-0.001 3.62 0.037 3.709 0.105 3.775L1.403 5.038C1.536 5.168 1.753 5.17 1.889 5.042C3.692 3.388 6.084 2.466 8.571 2.466ZM8.568 6.687C9.925 6.686 11.234 7.198 12.24 8.122C12.376 8.253 12.591 8.251 12.723 8.116L14.011 6.797C14.078 6.727 14.116 6.634 14.115 6.536C14.114 6.438 14.075 6.345 14.005 6.278C10.942 3.387 6.197 3.387 3.133 6.278C3.064 6.345 3.024 6.438 3.023 6.536C3.023 6.634 3.06 6.728 3.128 6.797L4.415 8.116C4.548 8.251 4.762 8.253 4.898 8.122C5.904 7.199 7.212 6.687 8.568 6.687ZM11.092 9.48C11.094 9.585 11.057 9.687 10.99 9.761L8.813 12.216C8.749 12.288 8.662 12.328 8.572 12.328C8.481 12.328 8.394 12.288 8.33 12.216L6.153 9.761C6.086 9.687 6.049 9.585 6.051 9.48C6.053 9.375 6.094 9.275 6.164 9.204C7.554 7.89 9.59 7.89 10.98 9.204C11.05 9.275 11.09 9.375 11.092 9.48Z" fillRule="evenodd" />
        <path id="figma-vector-117-corners-3-0" d="M18.5 0C20.55 0 21.576 0 22.382 0.343C23.406 0.778 24.222 1.594 24.657 2.618C25 3.424 25 4.45 25 6.5C25 8.55 25 9.576 24.657 10.382L24.571 10.571C24.119 11.507 23.342 12.249 22.382 12.657L22.228 12.718C21.443 13 20.422 13 18.5 13L6.5 13L5.142 12.995C3.951 12.979 3.223 12.914 2.618 12.657C1.658 12.249 0.881 11.507 0.429 10.571L0.343 10.382C0 9.576 0 8.55 0 6.5C0 4.578 0 3.557 0.282 2.772L0.343 2.618C0.751 1.658 1.493 0.881 2.429 0.429L2.618 0.343C3.223 0.086 3.951 0.021 5.142 0.005L6.5 0L18.5 0ZM6.5 1C5.461 1 4.733 1 4.162 1.04C3.601 1.079 3.268 1.153 3.01 1.263C2.223 1.597 1.597 2.223 1.263 3.01C1.153 3.268 1.079 3.601 1.04 4.162C1 4.733 1 5.461 1 6.5C1 7.539 1 8.267 1.04 8.838C1.079 9.399 1.153 9.732 1.263 9.99C1.597 10.777 2.223 11.403 3.01 11.737C3.268 11.847 3.601 11.921 4.162 11.96C4.733 12 5.461 12 6.5 12L18.5 12C19.539 12 20.267 12 20.838 11.96C21.399 11.921 21.732 11.847 21.99 11.737C22.777 11.403 23.403 10.777 23.737 9.99C23.847 9.732 23.921 9.399 23.96 8.838C24 8.267 24 7.539 24 6.5C24 5.461 24 4.733 23.96 4.162C23.921 3.601 23.847 3.268 23.737 3.01C23.403 2.223 22.777 1.597 21.99 1.263C21.732 1.153 21.399 1.079 20.838 1.04C20.267 1 19.539 1 18.5 1L6.5 1ZM19 2C20.4 2 21.1 2 21.635 2.272C22.105 2.512 22.488 2.895 22.728 3.365C23 3.9 23 4.6 23 6L23 7C23 8.4 23 9.1 22.728 9.635C22.488 10.105 22.105 10.488 21.635 10.727C21.1 11 20.4 11 19 11L6 11C4.6 11 3.9 11 3.365 10.727C2.895 10.488 2.512 10.105 2.272 9.635C2 9.1 2 8.4 2 7L2 6C2 4.6 2 3.9 2.272 3.365C2.512 2.895 2.895 2.512 3.365 2.272C3.9 2 4.6 2 6 2L19 2ZM26 4.5C26.805 4.845 27.328 5.648 27.328 6.538C27.328 7.428 26.805 8.23 26 8.575L26 4.5Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="369:1705" style={rootLayer("100%", 765.025, {
      background: "linear-gradient(#fffcf8, #fffcf8), linear-gradient(#ece5dc, #ece5dc)",
      backgroundColor: "#ffffff",
      boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      minWidth: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 14.5
    })}>
    <div data-figma-id="369:1706" style={{
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: 654.525,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="679:1736" style={{
          ...row1,
          ...layout1,
          overflow: "hidden",
          padding: "0 26px",
          boxSizing: "border-box",
          position: "relative",
          height: 48,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="679:1737" style={{
            ...font_Inter,
            color: "#29241f",
            whiteSpace: "pre",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "17px",
            position: "relative",
            flexShrink: 0
          }}>
          {"9:41"}
        </span>
        <div data-figma-id="679:1738" style={fixedLayer(71, "max-content", {
            ...row1,
            overflow: "hidden",
            gap: 5
          })}>
          <div data-figma-id="679:1739" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="679:1740" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
              <use href="#figma-vector-115-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="679:1741" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="679:1742" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
              <use href="#figma-vector-116-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="679:1743" style={fixedLayer(25, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="679:1744" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
              <use href="#figma-vector-117-corners-3-0" fill="#29241f" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="369:1716" style={{
          ...row1,
          minWidth: 0,
          padding: "12px 20px 8px",
          boxSizing: "border-box",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="369:1717" aria-hidden="true" style={fixedLayer(40, 40, {
            visibility: "hidden",
            pointerEvents: "none"
          })} />
      </div>
      <div data-figma-id="369:1720" style={{
          minWidth: 0,
          display: "flex",
          padding: "8px 20px 16px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 20,
          position: "relative",
          height: 546.525,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="369:1721" style={{
            ...row1,
            minWidth: 0,
            padding: "4px 0 0",
            boxSizing: "border-box",
            flexDirection: "column",
            gap: 4.9,
            position: "relative",
            height: 166.525,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="369:1722" style={fixedLayer(64, "max-content", {
              background: "#34745c",
              borderRadius: 9999,
              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
              ...row1,
              padding: "16px 0",
              boxSizing: "border-box",
              justifyContent: "center"
            })}>
            <div data-figma-id="369:1723" style={fixedLayer(32, 32, {
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
              <ClientCheckIcon size={28} color="#ffffff" />
          </div>
          </div>
          <div data-figma-id="369:1725" style={{
              ...row1,
              minWidth: 0,
              padding: "7.1px 0 0",
              boxSizing: "border-box",
              flexDirection: "column",
              position: "relative",
              height: 42.1,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="369:1726" style={{
                ...font_Manrope,
                fontSize: 28,
                lineHeight: "38.248px",
                textAlign: "center",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
              {"¡Pedido en preparación!"}
            </span>
          </div>
          <div data-figma-id="369:1727" style={fixedLayer(280, 46.625, {
              ...row1,
              maxWidth: 280,
              padding: "0 0 0.625px",
              boxSizing: "border-box",
              flexDirection: "column"
            })}>
            <span data-figma-id="369:1728" style={fixedLayer(274, 46, {
                ...font_Inter,
                color: "#82776e",
                whiteSpace: "normal",
                fontSize: 14,
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
                  width: 274,
                  textAlign: "center"
                }}>{"Ya lo estamos preparando. Te lo llevamos\na la Mesa 7."}</span>
            </span>
          </div>
        </div>
        <div data-figma-id="369:1729" style={{
            background: "#f5efe7",
            boxShadow: "inset 0 0 0 1px #ebe4dc",
            borderRadius: 18,
            minWidth: 0,
            display: "flex",
            padding: 17,
            boxSizing: "border-box",
            flexDirection: "column",
            position: "relative",
            height: 141,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="369:1730" style={{
              boxShadow: "inset 0 -1px 0 0 #ebe4dc",
              ...row1,
              ...layout1,
              padding: "0 0 13px",
              boxSizing: "border-box",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="369:1731" style={fixedLayer("max-content", 24, col1)}>
              <span data-figma-id="369:1732" style={{
                  ...font_Manrope,
                  fontSize: 16,
                  lineHeight: "24px",
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Pedido #PED-1049"}
              </span>
            </div>
          </div>
          <div data-figma-id="369:1737" style={{
              minWidth: 0,
              display: "flex",
              padding: "12px 0 0",
              boxSizing: "border-box",
              flexDirection: "column",
              gap: 10,
              position: "relative",
              height: 70,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="369:1738" style={{
                ...row1,
                minWidth: 0,
                gap: 10,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="369:1739" style={fixedLayer(24, 24, row2)}>
                <div data-figma-id="369:1740" style={fixedLayer(20, 20, {
                    overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                  })}>
                  <ClientUtensilsIcon size={20} color="#ed6047" />
          </div>
              </div>
              <div data-figma-id="369:1742" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="369:1743" style={{
                    ...font_Inter_14,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Mesa 7 · Pedido en el local"}
                </span>
              </div>
            </div>
            <div data-figma-id="369:1744" style={{
                ...row1,
                minWidth: 0,
                gap: 10,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="369:1745" style={fixedLayer(24, 24, row2)}>
                <div data-figma-id="369:1746" style={fixedLayer(20, 20, {
                    overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                  })}>
                  <ClientClockIcon size={20} color="#34745c" />
          </div>
              </div>
              <div data-figma-id="369:1749" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="369:1750" style={{
                    ...font_Inter,
                    ...text2,
                    color: "#34745c",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  <span data-figma-text-run="0" style={{}}>{"Tiempo estimado: "}</span><span data-figma-text-run="1" style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 600,
                      fontVariationSettings: "\"wght\" 600"
                    }}>{"15–25 min"}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="369:1751" style={{
            background: "#ffffff",
            boxShadow: "inset 0 0 0 1px #ebe4dc",
            borderRadius: 18,
            filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.02))",
            minWidth: 0,
            display: "flex",
            padding: 17,
            boxSizing: "border-box",
            flexDirection: "column",
            gap: 12,
            position: "relative",
            height: 175,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="369:1752" style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              height: 24,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="369:1753" style={{
                ...font_Manrope,
                fontSize: 16,
                lineHeight: "24px",
                ...row1,
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Resumen"}
            </span>
          </div>
          <div data-figma-id="369:1754" style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              position: "relative",
              height: 105,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="369:1755" style={{
                ...row1,
                ...layout1,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="369:1756" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="369:1757" style={{
                    ...font_Inter,
                    ...text2,
                    color: "#29241f",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"1 × Whopper · Sencilla"}
                </span>
              </div>
              <div data-figma-id="369:1758" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="369:1759" style={{
                    ...font_Inter_14,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"$ 10.400"}
                </span>
              </div>
            </div>
            <div data-figma-id="369:1760" style={{
                ...row1,
                ...layout1,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="369:1761" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="369:1762" style={{
                    ...font_Inter,
                    ...text2,
                    color: "#29241f",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"2 × Texana Especial · Sencilla"}
                </span>
              </div>
              <div data-figma-id="369:1763" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="369:1764" style={{
                    ...font_Inter_14,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"$ 47.000"}
                </span>
              </div>
            </div>
            <div data-figma-id="369:1765" style={{
                borderTop: "1px solid #ebe4dc",
                minWidth: 0,
                overflow: "hidden",
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
            <div data-figma-id="369:1766" style={{
                ...layout1,
                display: "flex",
                padding: "2px 0 0",
                boxSizing: "border-box",
                alignItems: "baseline",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="369:1767" style={{
                  ...font_Manrope,
                  fontSize: 18,
                  lineHeight: "28px",
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Total"}
              </span>
              <span data-figma-id="369:1768" style={{
                  ...font_Manrope,
                  fontSize: 24,
                  lineHeight: "32.784px",
                  letterSpacing: "-0.6px",
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"$ 57.400"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="369:1776" style={{
        background: "#fffcf8",
        ...row1,
        minWidth: 0,
        padding: "8px 20px 20px",
        boxSizing: "border-box",
        flexDirection: "column",
        gap: 12,
        position: "relative",
        height: 96,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="369:1777" style={{
          background: "#ed6047",
          borderRadius: 14,
          filter: "drop-shadow(0px 4px 12px rgba(237, 96, 71, 0.25))",
          ...row1,
          minWidth: 0,
          justifyContent: "center",
          position: "relative",
          height: 52,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="369:1778" style={{
            ...font_Inter,
            ...text1,
            color: "#ffffff",
            fontSize: 16,
            lineHeight: "24px",
            textAlign: "center",
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
          {"Finalizar"}
        </span>
      </div>
      <div data-figma-id="369:1781" style={fixedLayer(128, 4, {
          opacity: 0.9,
          background: "#29241f",
          borderRadius: 9999
        })} />
    </div>
  </div>
  </>;
}
export default PedidoEnviadoLocal;