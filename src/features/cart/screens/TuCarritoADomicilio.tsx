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
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const text2: React.CSSProperties = {
  fontWeight: 800,
  fontVariationSettings: "\"wght\" 800"
};
const text5: React.CSSProperties = {
  fontSize: 14,
  lineHeight: "21px"
};
const surface1: React.CSSProperties = {
  boxShadow: "inset 0 0 0 1px #ebe4dc",
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  justifyContent: "space-between"
};
const col3: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const text3: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 500,
  fontVariationSettings: "\"wght\" 500"
};
const text6: React.CSSProperties = {
  color: "#29241f",
  fontSize: 20,
  lineHeight: "30px"
};
const text8: React.CSSProperties = {
  color: "#bd412d",
  whiteSpace: "pre",
  textAlign: "center"
};
const layout2: React.CSSProperties = {
  minWidth: 44,
  minHeight: 44,
  justifyContent: "center"
};
const row3: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const surface2: React.CSSProperties = {
  background: "#fff0e9",
  boxShadow: "inset 0 0 0 1px rgba(250, 220, 209, 0.5)",
  borderRadius: 14
};
const text4: React.CSSProperties = {
  color: "#82776e",
  whiteSpace: "pre",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text7: React.CSSProperties = {
  color: "#ed6047",
  whiteSpace: "pre",
  lineHeight: "28px",
  textAlign: "center"
};
const col4: React.CSSProperties = {
  ...col3,
  padding: "0 0 0 6px",
  boxSizing: "border-box"
};
const col1: React.CSSProperties = {
  ...col3,
  minWidth: 0,
  boxSizing: "border-box",
  marginTop: -0.5
};
const col2: React.CSSProperties = {
  ...col3,
  minWidth: 0,
  boxSizing: "border-box",
  gap: 10
};
const row2: React.CSSProperties = {
  ...row3,
  padding: 1,
  boxSizing: "border-box"
};
const col5: React.CSSProperties = {
  ...col3,
  minWidth: 0,
  padding: "0 0 0.63px",
  boxSizing: "border-box"
};
const row4: React.CSSProperties = {
  ...row1,
  ...layout2,
  padding: "7.5px 0 8.5px",
  boxSizing: "border-box"
};
const font_Manrope_15: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#29241f",
  fontSize: 15,
  lineHeight: "22.5px",
  textAlign: "center"
};
export function TuCarritoADomicilio() {
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
        <path id="figma-vector-401-corners-2-0" d="M0 5.251L10.501 5.251M5.251 0L5.251 10.501" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="650:2573" style={rootLayer("100%", "auto", {
      background: "linear-gradient(#fffcf8, #fffcf8), linear-gradient(#f0ece6, #f0ece6)",
      backgroundColor: "#ffffff",
      ...layout1,
      display: "flex",
      flexDirection: "column",
      minHeight: 884,
      overflow: "visible"
    })}>
    <div data-figma-id="650:2574" style={{
        background: "rgba(255, 255, 255, 0.002)",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }} />
    <div data-figma-id="650:2575" style={{
        minWidth: 0,
        overflow: "visible",
        display: "flex",
        padding: "0 0 16px",
        boxSizing: "border-box",
        flexDirection: "column",
        position: "relative",
        height: "auto",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="650:2913" style={{
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
        <span data-figma-id="650:2914" style={{
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
        <div data-figma-id="650:2915" style={fixedLayer(71, "max-content", {
            ...row1,
            overflow: "hidden",
            gap: 5
          })}>
          <div data-figma-id="650:2916" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="650:2917" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
              <use href="#figma-vector-115-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="650:2918" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="650:2919" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
              <use href="#figma-vector-116-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="650:2920" style={fixedLayer(25, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="650:2921" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
              <use href="#figma-vector-117-corners-3-0" fill="#29241f" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="650:2595" style={{
          ...row1,
          ...layout1,
          padding: "12px 20px",
          boxSizing: "border-box",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:2596" style={fixedLayer(40, 40, {
            ...surface1,
            background: "#ffffff",
            borderRadius: 9999,
            ...row2
          })}>
          <div data-figma-id="650:2597" style={fixedLayer(20, 20, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <ClientBackIcon size={20} color="#29241f" />
          </div>
        </div>
        <div data-figma-id="650:2599" style={fixedLayer("max-content", 30, col3)}>
          <span data-figma-id="650:2600" style={{
              ...font_Manrope,
              ...text2,
              ...text6,
              letterSpacing: "-0.5px",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
            {"Tu carrito"}
          </span>
        </div>
        <div data-figma-id="650:2601" aria-hidden="true" style={fixedLayer(40, 40, {
            visibility: "hidden",
            pointerEvents: "none"
          })} />
      </div>
      <div data-figma-id="650:2604" style={{
          minWidth: 0,
          display: "flex",
          padding: "8px 20px 0",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 20,
          position: "relative",
          height: 402,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:2605" style={{
            ...surface1,
            background: "#f5efe7",
            borderRadius: 16,
            ...col2,
            padding: 17,
            position: "relative",
            height: 85,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="650:2606" style={{
              ...row1,
              ...layout1,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="650:2607" style={fixedLayer(255.11, "max-content", row1)}>
              <div data-figma-id="650:2608" style={fixedLayer("max-content", 20, col3)}>
                <div data-figma-id="650:2609" style={fixedLayer(20, 20, {
                    overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                  })}>
                  <ClientPinIcon size={20} color="#ed6047" />
          </div>
              </div>
              <div data-figma-id="650:2614" style={fixedLayer("max-content", 21, {
                  display: "flex",
                  padding: "0 0 0 10px",
                  boxSizing: "border-box",
                  flexDirection: "column"
                })}>
                <div data-figma-id="650:2615" style={fixedLayer("max-content", 21, {
                    overflow: "hidden",
                    display: "flex",
                    padding: "0 2.3px 0 0",
                    boxSizing: "border-box",
                    flexDirection: "column"
                  })}>
                  <span data-figma-id="650:2616" style={{
                      ...font_Inter,
                      ...text1,
                      ...text5,
                      color: "#29241f",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      ...row1,
                      overflow: "hidden",
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"A domicilio · Barrio Las Cuadras, Pasto"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="650:2617" style={fixedLayer(60.89, 19.5)}>
              <div data-figma-id="650:2618" style={absoluteLayer(8, -1, "max-content", 20, {
                  ...row1,
                  flexDirection: "column",
                  justifyContent: "center"
                })}>
                <span data-figma-id="650:2619" style={{
                    ...font_Inter,
                    ...text8,
                    fontSize: 13,
                    fontWeight: 600,
                    fontVariationSettings: "\"wght\" 600",
                    lineHeight: "19.5px",
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Cambiar"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="650:2620" style={{
              ...row1,
              minWidth: 0,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="650:2621" style={fixedLayer(16, 16, {
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
              <ClientClockIcon size={16} color="#2d8659" />
          </div>
            <div data-figma-id="650:2623" style={fixedLayer("max-content", 20, col4)}>
              <span data-figma-id="650:2624" style={{
                  ...font_Inter,
                  ...text3,
                  color: "#34745c",
                  fontSize: 13,
                  lineHeight: "19.5px",
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Llega en 35–50 min"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="653:4388" style={{
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            position: "relative",
            height: "auto",
            flexShrink: 0,
            alignSelf: "stretch",
            overflow: "visible"
          }}>
          <div data-figma-id="653:4389" style={{
              ...row1,
              ...layout1,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4390" style={fixedLayer("max-content", 30, col3)}>
              <span data-figma-id="653:4391" style={{
                  ...font_Manrope,
                  ...text2,
                  ...text6,
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Platos seleccionados"}
              </span>
            </div>
            <div data-figma-id="653:4392" style={fixedLayer(74.8, 19.5)}>
              <span data-figma-id="653:4393" style={{
                  ...font_Inter,
                  ...text3,
                  color: "#82776e",
                  fontSize: 13,
                  lineHeight: "19.5px",
                  ...row1,
                  position: "absolute",
                  left: 0,
                  top: -1
                }}>
                {"2 productos"}
              </span>
            </div>
          </div>
          <div data-figma-id="653:4394" style={{
              ...row1,
              ...layout1,
              padding: "6px 0",
              boxSizing: "border-box",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4395" style={fixedLayer(213, "max-content", {
                ...row1,
                gap: 12
              })}>
              <div data-figma-id="653:4396" style={fixedLayer(72, 79, {
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                })}>
                <div data-figma-id="653:4397" style={{
                    background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/f664a49c-0b0d-4da3-a902-4e58da250c3d.jpg\")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 14,
                    minWidth: 0,
                    position: "relative",
                    height: 79,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }} />
              </div>
              <div data-figma-id="653:4398" style={fixedLayer(129, 67.38, col3)}>
                <div data-figma-id="653:4399" style={{
                    ...col5,
                    position: "relative",
                    height: 21.63,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="653:4400" style={{
                      ...font_Manrope,
                      ...text1,
                      color: "#29241f",
                      fontSize: 15,
                      lineHeight: "20.63px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Whopper"}
                  </span>
                </div>
                <div data-figma-id="653:4401" style={{
                    ...col1,
                    padding: "0 0 0.75px",
                    position: "relative",
                    height: 19.75,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="653:4402" style={{
                      ...font_Inter,
                      ...text4,
                      fontSize: 12.5,
                      lineHeight: "18.75px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Sencilla · $ 10.400 c/u"}
                  </span>
                </div>
                <div data-figma-id="653:4403" style={{
                    ...col1,
                    padding: "4px 0 0",
                    position: "relative",
                    height: 28,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="653:4404" style={{
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: 24,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="653:4405" style={{
                        ...font_Manrope,
                        ...text2,
                        color: "#29241f",
                        fontSize: 16,
                        lineHeight: "24px",
                        ...row1,
                        minWidth: 0,
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      {"$ 10.400"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="653:4406" style={fixedLayer(122, 42, {
                ...surface2,
                ...row1,
                padding: "1px 5px",
                boxSizing: "border-box"
              })}>
              <div data-figma-id="653:4407" style={fixedLayer(44, 44, {
                  ...row1,
                  ...layout2
                })}>
                <div data-figma-id="653:4408" style={fixedLayer(16, 16, {
                    overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                  })}>
                  <ClientTrashIcon size={16} color="#ed6047" />
          </div>
              </div>
              <div data-figma-id="653:4411" style={fixedLayer(24, 22.5)}>
                <span data-figma-id="653:4412" style={{
                    ...font_Manrope_15,
                    ...row3,
                    position: "absolute",
                    left: "calc(50% + -3.3px)",
                    top: -1
                  }}>
                  {"1"}
                </span>
              </div>
              <div data-figma-id="653:4413" style={fixedLayer(44, 44, row4)}>
                <span data-figma-id="653:4414" style={{
                    ...font_Inter,
                    ...text1,
                    ...text7,
                    fontSize: 18,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"+"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="653:4415" style={{
              ...row1,
              ...layout1,
              padding: "6px 0",
              boxSizing: "border-box",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4416" style={fixedLayer(213, "max-content", {
                ...row1,
                gap: 12
              })}>
              <div data-figma-id="653:4417" style={fixedLayer(72, 79, {
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                })}>
                <div data-figma-id="653:4418" style={{
                    background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/04d283c6-5103-4b6f-8a56-2ddc820bfbb2.jpg\")",
                    backgroundSize: "117.949% 126.027%",
                    backgroundPosition: "48.895% 46.514%",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 14,
                    minWidth: 0,
                    position: "relative",
                    height: 79,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }} />
                <div data-figma-id="653:4419" style={absoluteLayer(121, 5, 34, 34, {
                    background: "#ffffff",
                    boxShadow: "inset 0 0 0 1px #ebe4dc",
                    borderRadius: 11,
                    ...row1,
                    overflow: "hidden",
                    justifyContent: "center"
                  })}>
                  <div data-figma-id="653:4420" style={fixedLayer(18, 18, {
                      overflow: "hidden"
                    })}>
                    <svg data-figma-id="653:4421" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                      <use href="#figma-vector-401-corners-2-0" fill="transparent" stroke="#ed6047" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
                    </svg>
                  </div>
                </div>
              </div>
              <div data-figma-id="653:4422" style={fixedLayer(129, 67.38, col3)}>
                <div data-figma-id="653:4423" style={{
                    ...col5,
                    position: "relative",
                    height: 21.63,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="653:4424" style={{
                      ...font_Manrope,
                      ...text1,
                      color: "#29241f",
                      fontSize: 15,
                      lineHeight: "20.63px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Texana Especial"}
                  </span>
                </div>
                <div data-figma-id="653:4425" style={{
                    ...col1,
                    padding: "0 0 0.75px",
                    position: "relative",
                    height: 19.75,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="653:4426" style={{
                      ...font_Inter,
                      ...text4,
                      fontSize: 12.5,
                      lineHeight: "18.75px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Sencilla · $ 23.500 c/u"}
                  </span>
                </div>
                <div data-figma-id="653:4427" style={{
                    ...col1,
                    padding: "4px 0 0",
                    position: "relative",
                    height: 28,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="653:4428" style={{
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: 24,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="653:4429" style={{
                        ...font_Manrope,
                        ...text2,
                        color: "#29241f",
                        fontSize: 16,
                        lineHeight: "24px",
                        ...row1,
                        minWidth: 0,
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      {"$ 47.000"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="653:4430" style={fixedLayer(122, 42, {
                ...surface2,
                ...row1,
                padding: "1px 5px",
                boxSizing: "border-box"
              })}>
              <div data-figma-id="653:4431" style={fixedLayer(44, 44, {
                  ...row1,
                  ...layout2
                })}>
                <span data-figma-id="653:4432" style={{
                    ...font_Inter,
                    ...text1,
                    ...text7,
                    fontSize: 20,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"−"}
                </span>
              </div>
              <div data-figma-id="653:4433" style={fixedLayer(24, 22.5)}>
                <span data-figma-id="653:4434" style={{
                    ...font_Manrope_15,
                    ...row3,
                    position: "absolute",
                    left: "calc(50% + -4.47px)",
                    top: -1
                  }}>
                  {"2"}
                </span>
              </div>
              <div data-figma-id="653:4435" style={fixedLayer(44, 44, row4)}>
                <span data-figma-id="653:4436" style={{
                    ...font_Inter,
                    ...text1,
                    ...text7,
                    fontSize: 18,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"+"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="653:4437" style={{
              ...row1,
              ...layout1,
              padding: "8px 0 0 28px",
              boxSizing: "border-box",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4438" style={fixedLayer(125, "max-content", {
                ...row1,
                gap: 4
              })}>
              <div data-figma-id="653:4439" style={fixedLayer("max-content", 21, {
                  ...row1,
                  flexDirection: "column"
                })}>
                <span data-figma-id="653:4440" style={{
                    ...font_Inter,
                    ...text1,
                    ...text5,
                    ...text8,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"+"}
                </span>
              </div>
              <span data-figma-id="653:4441" style={{
                  ...font_Inter,
                  ...text1,
                  ...text5,
                  ...text8,
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Añadir algo más"}
              </span>
            </div>
            <div data-figma-id="653:4442" style={fixedLayer(123, "max-content", row3)}>
              <span data-figma-id="653:4443" style={{
                  ...font_Inter,
                  ...text3,
                  ...text5,
                  color: "#82776e",
                  textAlign: "center",
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Añadir una nota ↗"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="650:2681" style={{
        background: "#fffcf8",
        boxShadow: "inset 0 1px 0 0 rgba(235, 228, 220, 0.4)",
        ...col2,
        padding: "13px 20px 8px",
        position: "relative",
        height: "auto",
        flexShrink: 0,
        alignSelf: "stretch",
        overflow: "visible",
        gap: 12
      }}>
      <div data-figma-id="650:2682" style={{
          ...col2,
          padding: "0 0 6px",
          position: "relative",
          height: "auto",
          flexShrink: 0,
          alignSelf: "stretch",
          overflow: "visible",
          gap: 6
        }}>
        <div data-figma-id="650:2683" style={{
            ...row1,
            ...layout1,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="650:2684" style={fixedLayer("max-content", 21, col3)}>
            <span data-figma-id="650:2685" style={{
                ...font_Inter,
                ...text4,
                ...text5,
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Subtotal (3 productos)"}
            </span>
          </div>
          <div data-figma-id="650:2686" style={fixedLayer("max-content", 21, col3)}>
            <span data-figma-id="650:2687" style={{
                ...font_Inter,
                ...text3,
                ...text5,
                color: "#29241f",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"$ 57.400"}
            </span>
          </div>
        </div>
        <div data-figma-id="650:2688" style={{
            ...row1,
            ...layout1,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="650:2689" style={fixedLayer("max-content", 21, col3)}>
            <span data-figma-id="650:2690" style={{
                ...font_Inter,
                ...text4,
                ...text5,
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Domicilio"}
            </span>
          </div>
          <div data-figma-id="650:2691" style={fixedLayer("max-content", 21, col3)}>
            <span data-figma-id="650:2692" style={{
                ...font_Inter,
                ...text3,
                ...text5,
                color: "#29241f",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"$ 4.000"}
            </span>
          </div>
        </div>
        <div data-figma-id="650:2693" style={{
            boxShadow: "inset 0 1px 0 0 #ebe4dc",
            ...row1,
            ...layout1,
            padding: "11px 0 0",
            boxSizing: "border-box",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="650:2694" style={fixedLayer("max-content", 30, col3)}>
            <span data-figma-id="650:2695" style={{
                ...font_Manrope,
                ...text2,
                ...text6,
                letterSpacing: "-0.5px",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Total a pagar"}
            </span>
          </div>
          <div data-figma-id="650:2696" style={fixedLayer("max-content", 33, col3)}>
            <span data-figma-id="650:2697" style={{
                ...font_Manrope,
                ...text2,
                color: "#29241f",
                fontSize: 22,
                lineHeight: "33px",
                letterSpacing: "-0.55px",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"$ 61.400"}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="650:2698" style={{
          background: "#ed6047",
          borderRadius: 16,
          ...row1,
          ...layout1,
          padding: "0 24px",
          boxSizing: "border-box",
          position: "relative",
          height: 56,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:2699" style={{
            background: "rgba(255, 255, 255, 0.002)",
            borderRadius: 16,
            boxShadow: "0px 2px 4px -2px rgba(237, 96, 71, 0.25), 0px 4px 6px -1px rgba(237, 96, 71, 0.25)",
            position: "absolute",
            left: 0,
            top: 0,
            height: 56,
            right: 0
          }} />
        <div data-figma-id="650:2700" style={fixedLayer("max-content", 24, {
            ...row1,
            flexDirection: "column"
          })}>
          <span data-figma-id="650:2701" style={{
              ...font_Inter,
              ...text1,
              color: "#ffffff",
              whiteSpace: "pre",
              fontSize: 16,
              lineHeight: "24px",
              textAlign: "center",
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"Continuar al pago"}
          </span>
        </div>
        <div data-figma-id="650:2702" style={fixedLayer("max-content", 26, {
            ...row1,
            flexDirection: "column"
          })}>
          <span data-figma-id="650:2703" style={{
              ...font_Manrope,
              ...text2,
              color: "#ffffff",
              fontSize: 17,
              lineHeight: "25.5px",
              textAlign: "center",
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"$ 61.400"}
          </span>
        </div>
      </div>
      <div data-figma-id="650:2704" style={{
          ...row1,
          minWidth: 0,
          justifyContent: "center",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:2705" style={fixedLayer(14, 14, {
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
          })}>
          <ClientLockIcon size={14} color="#82776e" />
          </div>
        <div data-figma-id="650:2708" style={fixedLayer("max-content", 18, col4)}>
          <span data-figma-id="650:2709" style={{
              ...font_Inter,
              ...text4,
              fontSize: 12,
              lineHeight: "18px",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
            {"Pago seguro · Precios con impuestos incluidos"}
          </span>
        </div>
      </div>
      <div data-figma-id="650:2710" style={{
          minWidth: 0,
          display: "flex",
          padding: "2px 0 4px",
          boxSizing: "border-box",
          justifyContent: "center",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="650:2711" style={fixedLayer(144, 4, {
            background: "#1a1a1a",
            borderRadius: 9999
          })} />
      </div>
    </div>
  </div>
  </>;
}
export default TuCarritoADomicilio;