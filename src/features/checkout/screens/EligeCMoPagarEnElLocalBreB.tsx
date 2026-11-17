import React from 'react';
import { ClientCartIcon, ClientCartIconOutline } from '@/shared/components/ui/ClientCartIcon';
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
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #ebe4dc"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  justifyContent: "space-between"
};
const row4: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const surface2: React.CSSProperties = {
  border: "1px solid #ebe4dc",
  borderRadius: 9999
};
const surface3: React.CSSProperties = {
  background: "#fff0e9",
  borderRadius: 9999
};
const layout2: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const text1: React.CSSProperties = {
  color: "#82776e",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text2: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontWeight: 800
};
const row2: React.CSSProperties = {
  ...row4,
  justifyContent: "center"
};
const row3: React.CSSProperties = {
  ...row4,
  minWidth: 0
};
const col2: React.CSSProperties = {
  ...col1,
  padding: "0 14px 0 0",
  boxSizing: "border-box"
};
const col4: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  overflow: "hidden"
};
const row1: React.CSSProperties = {
  ...row2,
  padding: 1,
  boxSizing: "border-box"
};
const row5: React.CSSProperties = {
  ...row3,
  padding: "1px 17px",
  boxSizing: "border-box"
};
const col3: React.CSSProperties = {
  ...col1,
  padding: "0 4px 0 0",
  boxSizing: "border-box",
  justifyContent: "center"
};
const col5: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  padding: "12px 0 0",
  boxSizing: "border-box"
};
const font_Inter_16: React.CSSProperties = {
  ...font_Inter,
  ...text2,
  color: "#29241f",
  fontSize: 16,
  lineHeight: "22px"
};
const font_Inter_13: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  whiteSpace: "nowrap",
  fontSize: 13,
  lineHeight: "17.88px",
  textOverflow: "ellipsis"
};
export function EligeCMoPagarEnElLocalBreB() {
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
        <path id="figma-vector-594" d="M3.333 6.667L0 3.333L3.333 0" fillRule="nonzero" />
        <path id="figma-vector-595" d="M0 0L13.288 0" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="650:3199" style={rootLayer("100%", 889, {
      background: "linear-gradient(#fffcf8, #fffcf8), linear-gradient(#f0ece6, #f0ece6)",
      backgroundColor: "#ffffff",
      boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
      ...col1,
      ...layout1,
      overflow: "hidden"
    })}>
    <div data-figma-id="650:3200" style={{
        ...col1,
        minWidth: 0,
        padding: "0 0 62px",
        boxSizing: "border-box",
        position: "relative",
        height: 791,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="679:1706" style={{
          ...layout1,
          overflow: "hidden",
          display: "flex",
          padding: "0 26px",
          boxSizing: "border-box",
          alignItems: "center",
          position: "relative",
          height: 48,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="679:1707" style={{
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
        <div data-figma-id="679:1708" style={fixedLayer(71, "max-content", {
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: 5
          })}>
          <div data-figma-id="679:1709" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="679:1710" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
              <use href="#figma-vector-115-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="679:1711" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="679:1712" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
              <use href="#figma-vector-116-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="679:1713" style={fixedLayer(25, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="679:1714" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
              <use href="#figma-vector-117-corners-3-0" fill="#29241f" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="650:3218" style={{
          ...layout1,
          display: "flex",
          padding: "4px 16px 16px",
          boxSizing: "border-box",
          alignItems: "center",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:3219" style={fixedLayer(40, 40, {
            ...surface1,
            borderRadius: 9999,
            ...row1
          })}>
          <div data-figma-id="650:3220" style={fixedLayer(20, 20, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <ClientBackIcon size={20} color="#29241f" />
          </div>
        </div>
        <div data-figma-id="650:3223" style={fixedLayer("max-content", 30, {
            ...col1,
            alignItems: "center"
          })}>
          <span data-figma-id="650:3224" style={{
              ...font_Manrope,
              color: "#29241f",
              fontSize: 20,
              lineHeight: "30px",
              letterSpacing: "-0.5px",
              textAlign: "center",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
            {"Elige cómo pagar"}
          </span>
        </div>
        <div data-figma-id="650:3225" style={fixedLayer(40, 40, {
            opacity: 0
          })} />
      </div>
      <div data-figma-id="650:3226" style={{
          ...col1,
          minWidth: 0,
          padding: "0 16px",
          boxSizing: "border-box",
          position: "relative",
          height: 621,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:3227" style={{
            background: "#f5efe7",
            boxShadow: "inset 0 0 0 1px #ebe4dc",
            borderRadius: 16,
            ...col1,
            minWidth: 0,
            padding: 17,
            boxSizing: "border-box",
            position: "relative",
            height: 125,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="650:3228" style={{
              ...row3,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="650:3229" style={fixedLayer(18, 18, {
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
              <ClientStoreIcon size={18} color="#29241f" />
          </div>
            <div data-figma-id="650:3235" style={fixedLayer("max-content", 19, {
                ...col1,
                padding: "0 0 0 8px",
                boxSizing: "border-box"
              })}>
              <span data-figma-id="650:3236" style={{
                  ...font_Inter,
                  ...text2,
                  color: "#29241f",
                  fontSize: 15,
                  lineHeight: "18.75px",
                  ...row4,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Mesa 7 · Pedido en el local"}
              </span>
            </div>
          </div>
          <div data-figma-id="650:3237" style={{
              ...col1,
              minWidth: 0,
              padding: "8px 0 0",
              boxSizing: "border-box",
              position: "relative",
              height: 25,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="650:3238" style={{
                ...row3,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="650:3239" style={fixedLayer(16, 16, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientClockIcon size={16} color="#2d8659" />
          </div>
              <div data-figma-id="650:3242" style={fixedLayer("max-content", 17, {
                  ...col1,
                  padding: "0 0 0 6px",
                  boxSizing: "border-box"
                })}>
                <span data-figma-id="650:3243" style={{
                    ...font_Inter,
                    color: "#34745c",
                    whiteSpace: "pre",
                    fontSize: 13,
                    fontWeight: 500,
                    fontVariationSettings: "\"wght\" 500",
                    lineHeight: "16.25px",
                    ...row4,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Te lo llevamos a la mesa · 15–25 min"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="650:3244" style={{
              ...col1,
              minWidth: 0,
              padding: "12px 0",
              boxSizing: "border-box",
              position: "relative",
              height: 25,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="650:3245" style={{
                background: "#ebe4dc",
                minWidth: 0,
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
          </div>
          <div data-figma-id="650:3246" style={{
              minWidth: 0,
              position: "relative",
              height: 22,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="650:3247" style={{
                ...font_Inter,
                ...text1,
                whiteSpace: "pre",
                fontSize: 14,
                lineHeight: "21px",
                ...row4,
                position: "absolute",
                left: 0,
                top: 1
              }}>
              {"3 productos"}
            </span>
            <span data-figma-id="650:3248" style={{
                ...font_Manrope,
                color: "#29241f",
                fontSize: 20,
                lineHeight: "20px",
                ...row4,
                position: "absolute",
                left: 185.25,
                top: 0
              }}>
              {"Total $ 57.400"}
            </span>
          </div>
        </div>
        <div data-figma-id="650:3249" style={{
            ...col1,
            minWidth: 0,
            padding: "24px 0 0",
            boxSizing: "border-box",
            position: "relative",
            height: 425,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="650:3250" style={{
              ...col1,
              minWidth: 0,
              position: "relative",
              height: 401,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="650:3251" style={{
                ...col1,
                minWidth: 0,
                padding: "0 0 12px",
                boxSizing: "border-box",
                position: "relative",
                height: 61,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="650:3252" style={{
                  ...col1,
                  minWidth: 0,
                  gap: 1,
                  position: "relative",
                  height: 49,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="650:3253" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 28,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="650:3254" style={{
                      ...font_Manrope,
                      color: "#29241f",
                      fontSize: 20,
                      lineHeight: "27.5px",
                      ...row3,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"Método de pago"}
                  </span>
                </div>
                <div data-figma-id="650:3255" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 20,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="650:3256" style={{
                      ...font_Inter,
                      ...text1,
                      whiteSpace: "pre",
                      fontSize: 13,
                      lineHeight: "19.5px",
                      ...row3,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"Elige una opción."}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="650:3257" style={{
                ...col1,
                minWidth: 0,
                position: "relative",
                height: 340,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="650:3258" style={{
                  ...surface1,
                  borderRadius: 16,
                  ...row5,
                  position: "relative",
                  height: 76,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="650:3259" style={fixedLayer(34, 20, col2)}>
                  <div data-figma-id="650:3260" style={fixedLayer(20, 20, surface2)} />
                </div>
                <div data-figma-id="650:3261" style={fixedLayer(54, 40, col2)}>
                  <div data-figma-id="650:3262" style={fixedLayer(40, 40, {
                      ...surface3,
                      ...row2
                    })}>
                    <div data-figma-id="650:3263" style={fixedLayer(20, 20, {
                        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                      })}>
                      <ClientNequiIcon size={20} />
          </div>
                  </div>
                </div>
                <div data-figma-id="650:3266" style={fixedLayer(189, 39.88, col3)}>
                  <div data-figma-id="650:3267" style={{
                      ...col4,
                      position: "relative",
                      height: 22,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="650:3268" style={{
                        ...font_Inter_16,
                        ...row4,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Nequi"}
                    </span>
                  </div>
                  <div data-figma-id="650:3269" style={{
                      ...layout2,
                      position: "relative",
                      height: 17.88,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="650:3270" style={{
                        ...font_Inter,
                        ...text1,
                        whiteSpace: "pre",
                        fontSize: 13,
                        lineHeight: "17.88px",
                        ...row4,
                        position: "absolute",
                        left: 0,
                        top: -1
                      }}>
                      {"Paga desde tu app Nequi"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="650:3271" style={{
                  ...col5,
                  position: "relative",
                  height: 88,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="650:3272" style={{
                    background: "#fff1eb",
                    boxShadow: "inset 0 0 0 1px #ed6047",
                    borderRadius: 16,
                    ...row5,
                    position: "relative",
                    height: 76,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="650:3273" style={fixedLayer(34, 20, col2)}>
                    <div data-figma-id="650:3274" style={fixedLayer(20, 20, {
                        boxShadow: "inset 0 0 0 1px #ed6047",
                        borderRadius: 9999,
                        ...row1
                      })}>
                      <div data-figma-id="650:3275" style={fixedLayer(10, 10, {
                          background: "#ed6047",
                          borderRadius: 9999
                        })} />
                    </div>
                  </div>
                  <div data-figma-id="650:3276" style={fixedLayer(54, 40, col2)}>
                    <div data-figma-id="802:3988" style={fixedLayer(40, 40, {
                        ...surface3,
                        ...row2
                      })}>
                      <div data-figma-id="802:3989" style={fixedLayer(20, 20, {
                          overflow: "hidden"
                        })}>
                        <svg data-figma-id="802:3990" viewBox="-0.833 -0.833 5 8.333" preserveAspectRatio="none" style={absoluteLayer("calc(15% - 0.833px)", "calc(20% - 0.833px)", "calc(16.667% + 1.667px)", "calc(33.333% + 1.667px)")}>
                          <use href="#figma-vector-594" fill="transparent" stroke="#ed6047" strokeWidth={1.667} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg data-figma-id="802:3991" viewBox="-0.833 -833.333 14.954 1667.667" preserveAspectRatio="none" style={absoluteLayer("calc(18.56% - 0.833px)", "calc(36.666% - 0.833px)", "calc(66.438% + 1.667px)", 1)}>
                          <path d="M0 0L13.288 0" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={1.667} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg data-figma-id="802:3992" viewBox="-0.833 -0.833 5 8.333" preserveAspectRatio="none" style={absoluteLayer("calc(84.165% - 0.833px)", "calc(78.334% - 0.833px)", "calc(16.667% + 1.667px)", "calc(33.333% + 1.667px)", {
                            transformOrigin: "top left",
                            transform: "matrix(-1, 0, 0, -1, 0, 0)"
                          })}>
                          <use href="#figma-vector-594" fill="transparent" stroke="#ed6047" strokeWidth={1.667} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg data-figma-id="802:3993" viewBox="-0.833 -833.333 14.954 1667.667" preserveAspectRatio="none" style={absoluteLayer("calc(82.5% - 0.833px)", "calc(61.666% - 0.833px)", "calc(66.438% + 1.667px)", 1, {
                            transformOrigin: "top left",
                            transform: "matrix(-1, 0, 0, -1, 0, 0)"
                          })}>
                          <path d="M0 0L13.288 0" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={1.667} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-figma-id="650:3283" style={fixedLayer(210, 39.88, col3)}>
                    <div data-figma-id="650:3284" style={{
                        ...col4,
                        position: "relative",
                        height: 22,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="650:3285" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Bre-B"}
                      </span>
                    </div>
                    <div data-figma-id="650:3286" style={{
                        ...layout2,
                        position: "relative",
                        height: 17.88,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="650:3287" style={{
                          ...font_Inter_13,
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          position: "absolute",
                          left: 0,
                          top: -1
                        }}>
                        {"Transferencia con tu llave Bre-B"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-id="650:3288" style={{
                  ...col5,
                  position: "relative",
                  height: 88,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="650:3289" style={{
                    ...surface1,
                    borderRadius: 16,
                    ...row5,
                    position: "relative",
                    height: 76,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="650:3290" style={fixedLayer(34, 20, col2)}>
                    <div data-figma-id="650:3291" style={fixedLayer(20, 20, surface2)} />
                  </div>
                  <div data-figma-id="650:3292" style={fixedLayer(54, 40, col2)}>
                    <div data-figma-id="650:3293" style={fixedLayer(40, 40, {
                        ...surface3,
                        ...row2
                      })}>
                      <div data-figma-id="650:3294" style={fixedLayer(20, 20, {
                          overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                        })}>
                        <ClientCardIcon size={20} color="#ed6047" />
          </div>
                    </div>
                  </div>
                  <div data-figma-id="650:3297" style={fixedLayer(252, 39.88, col3)}>
                    <div data-figma-id="650:3298" style={{
                        ...col4,
                        position: "relative",
                        height: 22,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="650:3299" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Tarjeta"}
                      </span>
                    </div>
                    <div data-figma-id="650:3300" style={{
                        ...layout2,
                        position: "relative",
                        height: 17.88,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="650:3301" style={{
                          ...font_Inter_13,
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          position: "absolute",
                          left: 0,
                          top: -1
                        }}>
                        {"Débito o crédito"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-id="650:3302" style={{
                  ...col5,
                  position: "relative",
                  height: 88,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="650:3303" style={{
                    ...surface1,
                    borderRadius: 16,
                    ...row5,
                    position: "relative",
                    height: 76,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="650:3304" style={fixedLayer(34, 20, col2)}>
                    <div data-figma-id="650:3305" style={fixedLayer(20, 20, surface2)} />
                  </div>
                  <div data-figma-id="650:3306" style={fixedLayer(54, 40, col2)}>
                    <div data-figma-id="650:3307" style={fixedLayer(40, 40, {
                        ...surface3,
                        ...row2
                      })}>
                      <div data-figma-id="650:3308" style={fixedLayer(20, 20, {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            })}>
            <ClientCashIcon size={20} color="#ed6047" />
          </div>
                    </div>
                  </div>
                  <div data-figma-id="650:3312" style={fixedLayer(197, 39.88, col3)}>
                    <div data-figma-id="650:3313" style={{
                        ...col4,
                        position: "relative",
                        height: 22,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="650:3314" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Efectivo"}
                      </span>
                    </div>
                    <div data-figma-id="650:3315" style={{
                        ...layout2,
                        position: "relative",
                        height: 17.88,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="650:3316" style={{
                          ...font_Inter,
                          ...text1,
                          whiteSpace: "pre",
                          fontSize: 13,
                          lineHeight: "17.88px",
                          ...row4,
                          position: "absolute",
                          left: 0,
                          top: -1
                        }}>
                        {"Pagas en caja al terminar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="650:3317" style={{
            ...col1,
            minWidth: 0,
            padding: "24px 0 0",
            boxSizing: "border-box",
            position: "relative",
            height: 71,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="650:3318" style={{
              minWidth: 0,
              display: "flex",
              padding: "8px 0 24px",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="650:3319" style={fixedLayer(14, 14, {
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
              <ClientLockIcon size={14} color="#82776e" />
          </div>
            <div data-figma-id="650:3322" style={fixedLayer("max-content", 15, {
                ...col1,
                padding: "0 0 0 6px",
                boxSizing: "border-box"
              })}>
              <span data-figma-id="650:3323" style={{
                  ...font_Inter,
                  ...text1,
                  whiteSpace: "pre",
                  fontSize: 12,
                  lineHeight: "15px",
                  ...row4,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Tus datos de pago están protegidos."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="650:3324" style={{
        background: "#fffcf8",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        ...col1,
        minWidth: 0,
        padding: "13px 16px 8px",
        boxSizing: "border-box",
        position: "relative",
        height: 98,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="650:3325" style={{
          background: "#ed6047",
          borderRadius: 16,
          filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
          ...layout1,
          display: "flex",
          padding: "0 20px",
          boxSizing: "border-box",
          alignItems: "center",
          position: "relative",
          height: 56,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:3326" style={fixedLayer("max-content", 24, {
            ...col1,
            alignItems: "center"
          })}>
          <span data-figma-id="650:3327" style={{
              ...font_Inter,
              ...text2,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.4px",
              textAlign: "center",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
            {"Pagar con Bre-B"}
          </span>
        </div>
        <div data-figma-id="650:3328" style={fixedLayer("max-content", 27, {
            ...col1,
            alignItems: "center"
          })}>
          <span data-figma-id="650:3329" style={{
              ...font_Manrope,
              color: "#ffffff",
              fontSize: 18,
              lineHeight: "27px",
              letterSpacing: "-0.45px",
              textAlign: "center",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
            {"$ 57.400"}
          </span>
        </div>
      </div>
      <div data-figma-id="650:3330" style={{
          minWidth: 0,
          display: "flex",
          padding: "12px 0 4px",
          boxSizing: "border-box",
          justifyContent: "center",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:3331" style={fixedLayer(134, 5, {
            background: "#29241f",
            borderRadius: 9999
          })} />
      </div>
    </div>
  </div>
  </>;
}
export default EligeCMoPagarEnElLocalBreB;