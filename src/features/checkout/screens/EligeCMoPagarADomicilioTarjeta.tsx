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
  whiteSpace: "pre",
  fontFamily: "'Inter', system-ui, sans-serif"
};
const text2: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const text3: React.CSSProperties = {
  fontSize: 13,
  lineHeight: "16px"
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #ebe4dc"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const col2: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const surface3: React.CSSProperties = {
  background: "#fff0e9",
  borderRadius: 20
};
const text1: React.CSSProperties = {
  color: "#82776e",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const col1: React.CSSProperties = {
  ...col2,
  gap: 12
};
const row2: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const col3: React.CSSProperties = {
  ...col2,
  minWidth: 0
};
const row4: React.CSSProperties = {
  ...row1,
  minWidth: 0
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #ebe4dc",
  borderRadius: 10
};
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontWeight: 800,
  fontVariationSettings: "\"wght\" 800"
};
const row3: React.CSSProperties = {
  ...row4,
  justifyContent: "space-between"
};
const col4: React.CSSProperties = {
  ...col3,
  gap: 2
};
const col5: React.CSSProperties = {
  ...col3,
  overflow: "hidden"
};
const row6: React.CSSProperties = {
  ...row2,
  padding: 1,
  boxSizing: "border-box"
};
const row5: React.CSSProperties = {
  ...row4,
  padding: "1px 17px",
  boxSizing: "border-box",
  gap: 14
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  fontSize: 14,
  lineHeight: "17px"
};
const font_Inter_16: React.CSSProperties = {
  ...font_Inter,
  ...text2,
  color: "#29241f",
  fontSize: 16,
  lineHeight: "19.364px"
};
export function EligeCMoPagarADomicilioTarjeta() {
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
  <div data-figma-id="653:3950" style={rootLayer(402, 884, {
      background: "#fffcf8"
    })}>
    <div data-figma-id="653:4233" style={{
        ...row1,
        overflow: "hidden",
        padding: "0 26px",
        boxSizing: "border-box",
        justifyContent: "space-between",
        position: "absolute",
        left: 0,
        top: 0,
        height: 48,
        right: 0
      }}>
      <span data-figma-id="653:4234" style={{
          ...font_Inter,
          color: "#29241f",
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "17px",
          position: "relative",
          flexShrink: 0
        }}>
        {"9:41"}
      </span>
      <div data-figma-id="653:4235" style={fixedLayer(71, "max-content", {
          ...row1,
          overflow: "hidden",
          gap: 5
        })}>
        <div data-figma-id="653:4236" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="653:4237" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
            <use href="#figma-vector-115-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="653:4238" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="653:4239" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
            <use href="#figma-vector-116-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="653:4240" style={fixedLayer(25, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="653:4241" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
            <use href="#figma-vector-117-corners-3-0" fill="#29241f" />
          </svg>
        </div>
      </div>
    </div>
    <div data-figma-id="653:3966" style={{
        display: "flex",
        padding: "0 20px 16px",
        boxSizing: "border-box",
        flexDirection: "column",
        position: "absolute",
        left: 0,
        top: 90,
        right: 0,
        bottom: 113
      }}>
      <div data-figma-id="653:3967" style={{
          minWidth: 0,
          display: "flex",
          padding: "0 0 24px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 204,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="653:3968" style={{
            background: "#f5efe7",
            borderRadius: 16,
            ...col1,
            minWidth: 0,
            padding: 16,
            boxSizing: "border-box",
            position: "relative",
            height: 180,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="653:3969" style={{
              ...row1,
              minWidth: 0,
              gap: 8,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:3970" style={fixedLayer(20, "max-content", row2)}>
              <div data-figma-id="653:3971" style={fixedLayer(20, 20, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientPinIcon size={20} color="#ed6047" />
          </div>
            </div>
            <div data-figma-id="653:3976" style={fixedLayer("max-content", 19, {
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              })}>
              <span data-figma-id="653:3977" style={{
                  ...font_Inter,
                  ...text2,
                  color: "#29241f",
                  fontSize: 15,
                  lineHeight: "18px",
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"A domicilio · Barrio Las Cuadras, Pasto"}
              </span>
            </div>
          </div>
          <div data-figma-id="653:3978" style={{
              minWidth: 0,
              position: "relative",
              height: 12,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:3979" style={{
                ...row1,
                gap: 6,
                position: "absolute",
                left: 0,
                top: -4,
                height: "max-content",
                right: 0
              }}>
              <div data-figma-id="653:3980" style={fixedLayer(15, 15, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientClockIcon size={15} color="#2d8659" />
          </div>
              <div data-figma-id="653:3983" style={fixedLayer("max-content", 16, col2)}>
                <span data-figma-id="653:3984" style={{
                    ...font_Inter,
                    ...text3,
                    color: "#34745c",
                    fontWeight: 500,
                    fontVariationSettings: "\"wght\" 500",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Llega en 35–50 min"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="653:3985" style={{
              background: "#ebe4dc",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="653:3986" style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              position: "relative",
              height: 79,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:3987" style={{
                ...row3,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="653:3988" style={fixedLayer("max-content", 17, col2)}>
                <span data-figma-id="653:3989" style={{
                    ...font_Inter_14,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Subtotal (3 productos)"}
                </span>
              </div>
              <div data-figma-id="653:3990" style={fixedLayer("max-content", 17, col2)}>
                <span data-figma-id="653:3991" style={{
                    ...font_Inter_14,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"$ 57.400"}
                </span>
              </div>
            </div>
            <div data-figma-id="653:3992" style={{
                ...row3,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="653:3993" style={fixedLayer("max-content", 17, col2)}>
                <span data-figma-id="653:3994" style={{
                    ...font_Inter_14,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Domicilio"}
                </span>
              </div>
              <div data-figma-id="653:3995" style={fixedLayer("max-content", 17, col2)}>
                <span data-figma-id="653:3996" style={{
                    ...font_Inter_14,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"$ 4.000"}
                </span>
              </div>
            </div>
            <div data-figma-id="653:3997" style={{
                minWidth: 0,
                display: "flex",
                padding: "2px 0 0",
                boxSizing: "border-box",
                flexDirection: "column",
                position: "relative",
                height: 29,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="653:3998" style={{
                  ...row3,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="653:3999" style={fixedLayer("max-content", 19, col2)}>
                  <span data-figma-id="653:4000" style={{
                      ...font_Inter,
                      ...text2,
                      color: "#29241f",
                      fontSize: 15,
                      lineHeight: "18px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Total"}
                  </span>
                </div>
                <div data-figma-id="653:4001" style={fixedLayer("max-content", 27, col2)}>
                  <span data-figma-id="653:4002" style={{
                      ...font_Manrope,
                      color: "#29241f",
                      fontSize: 20,
                      lineHeight: "27px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"$ 61.400"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="653:4003" style={{
          minWidth: 0,
          display: "flex",
          padding: "0 0 12px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 56,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="653:4004" style={{
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="653:4005" style={{
              ...col3,
              position: "relative",
              height: 24,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="653:4006" style={{
                ...font_Manrope,
                color: "#29241f",
                fontSize: 20,
                lineHeight: "27.32px",
                ...row4,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Método de pago"}
            </span>
          </div>
          <div data-figma-id="653:4007" style={{
              ...col3,
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="653:4008" style={{
                ...font_Inter,
                ...text1,
                ...text3,
                ...row4,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Elige una opción."}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="653:4009" style={{
          minWidth: 0,
          display: "flex",
          padding: "0 0 20px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 360,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="653:4010" style={{
            ...col1,
            minWidth: 0,
            position: "relative",
            height: 340,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="653:4011" style={{
              ...surface1,
              borderRadius: 16,
              ...row5,
              position: "relative",
              height: 76,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4012" style={fixedLayer(20, 20, surface2)} />
            <div data-figma-id="653:4013" style={fixedLayer(40, 40, {
                ...surface3,
                ...row2
              })}>
              <div data-figma-id="653:4014" style={fixedLayer(20, 20, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientNequiIcon size={20} />
          </div>
            </div>
            <div data-figma-id="653:4017" style={{
                ...col4,
                position: "relative",
                height: 37,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="653:4018" style={{
                  ...col3,
                  position: "relative",
                  height: 19,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4019" style={{
                    ...font_Inter_16,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Nequi"}
                </span>
              </div>
              <div data-figma-id="653:4020" style={{
                  ...col5,
                  position: "relative",
                  height: 16,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4021" style={{
                    ...font_Inter,
                    ...text1,
                    ...text3,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Paga desde tu app Nequi"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="653:4022" style={{
              ...surface1,
              borderRadius: 16,
              ...row5,
              position: "relative",
              height: 76,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4023" style={fixedLayer(20, 20, surface2)} />
            <div data-figma-id="653:4024" style={fixedLayer(40, 40, {
                ...surface3,
                ...row2
              })}>
              <div data-figma-id="653:4025" style={fixedLayer(20, 20, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientBrebIcon size={20} color="#ed6047" />
          </div>
            </div>
            <div data-figma-id="653:4030" style={{
                ...col4,
                position: "relative",
                height: 37,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="653:4031" style={{
                  ...col3,
                  position: "relative",
                  height: 19,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4032" style={{
                    ...font_Inter_16,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Bre-B"}
                </span>
              </div>
              <div data-figma-id="653:4033" style={{
                  ...col5,
                  position: "relative",
                  height: 16,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4034" style={{
                    ...font_Inter,
                    ...text1,
                    ...text3,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Transferencia con tu llave Bre-B"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="653:4035" style={{
              background: "#fff1eb",
              boxShadow: "inset 0 0 0 1px #ed6047",
              borderRadius: 16,
              ...row5,
              position: "relative",
              height: 76,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4036" style={fixedLayer(20, 20, {
                background: "#ffffff",
                boxShadow: "inset 0 0 0 1px #ed6047",
                borderRadius: 10,
                ...row6
              })}>
              <div data-figma-id="653:4037" style={fixedLayer(10, 10, {
                  background: "#ed6047",
                  borderRadius: 5
                })} />
            </div>
            <div data-figma-id="653:4038" style={fixedLayer(40, 40, {
                ...surface3,
                ...row2
              })}>
              <div data-figma-id="653:4039" style={fixedLayer(20, 20, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientCardIcon size={20} color="#ed6047" />
          </div>
            </div>
            <div data-figma-id="653:4042" style={{
                ...col4,
                position: "relative",
                height: 37,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="653:4043" style={{
                  ...col3,
                  position: "relative",
                  height: 19,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4044" style={{
                    ...font_Inter_16,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Tarjeta"}
                </span>
              </div>
              <div data-figma-id="653:4045" style={{
                  ...col5,
                  position: "relative",
                  height: 16,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4046" style={{
                    ...font_Inter,
                    ...text1,
                    ...text3,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Débito o crédito"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="653:4047" style={{
              ...surface1,
              borderRadius: 16,
              ...row5,
              position: "relative",
              height: 76,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="653:4048" style={fixedLayer(20, 20, surface2)} />
            <div data-figma-id="653:4049" style={fixedLayer(40, 40, {
                ...surface3,
                ...row2
              })}>
              <div data-figma-id="653:4050" style={fixedLayer(20, 20, {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            })}>
            <ClientCashIcon size={20} color="#ed6047" />
          </div>
            </div>
            <div data-figma-id="653:4054" style={{
                ...col4,
                position: "relative",
                height: 37,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="653:4055" style={{
                  ...col3,
                  position: "relative",
                  height: 19,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4056" style={{
                    ...font_Inter_16,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Efectivo"}
                </span>
              </div>
              <div data-figma-id="653:4057" style={{
                  ...col5,
                  position: "relative",
                  height: 16,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="653:4058" style={{
                    ...font_Inter,
                    ...text1,
                    ...text3,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Pagas al recibir tu pedido"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="653:4059" style={{
          minWidth: 0,
          display: "flex",
          padding: "4px 0 16px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 35,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="653:4060" style={{
            ...row1,
            minWidth: 0,
            justifyContent: "center",
            gap: 6,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="653:4061" style={fixedLayer(14, 14, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <ClientLockIcon size={14} color="#82776e" />
          </div>
          <div data-figma-id="653:4064" style={fixedLayer("max-content", 15, col2)}>
            <span data-figma-id="653:4065" style={{
                ...font_Inter,
                ...text1,
                fontSize: 12,
                lineHeight: "15px",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Tus datos de pago están protegidos."}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="653:4066" style={{
        background: "#fffcf8",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        ...col1,
        padding: "17px 20px 10px",
        boxSizing: "border-box",
        position: "absolute",
        left: 0,
        height: 113,
        right: 0,
        bottom: 0
      }}>
      <div data-figma-id="653:4067" style={{
          background: "#ed6047",
          borderRadius: 16,
          filter: "drop-shadow(0px 2px 8px rgba(237, 96, 71, 0.2))",
          ...row1,
          minWidth: 0,
          padding: "0 19.99px 0 20px",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "relative",
          height: 56,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="653:4068" style={fixedLayer("max-content", 20, {
            ...row1,
            flexDirection: "column"
          })}>
          <span data-figma-id="653:4069" style={{
              ...font_Inter,
              ...text2,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "19px",
              textAlign: "center",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
            {"Pagar con Tarjeta"}
          </span>
        </div>
        <div data-figma-id="653:4070" style={fixedLayer("max-content", 24, {
            ...row1,
            flexDirection: "column"
          })}>
          <span data-figma-id="653:4071" style={{
              ...font_Manrope,
              color: "#ffffff",
              fontSize: 18,
              lineHeight: "25px",
              textAlign: "center",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
            {"$ 61.400"}
          </span>
        </div>
      </div>
      <div data-figma-id="653:4072" style={{
          ...row1,
          minWidth: 0,
          justifyContent: "center",
          position: "relative",
          height: 18,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="653:4073" style={fixedLayer(134, 5, {
            background: "#29241f",
            borderRadius: 3
          })} />
      </div>
    </div>
    <div data-figma-id="653:4074" style={{
        ...row1,
        padding: "8px 20px 16px",
        boxSizing: "border-box",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        top: 39,
        height: "max-content",
        right: 0
      }}>
      <div data-figma-id="653:4075" style={fixedLayer("max-content", 27, {
          ...row1,
          flexDirection: "column"
        })}>
        <span data-figma-id="653:4076" style={{
            ...font_Manrope,
            color: "#29241f",
            fontSize: 20,
            lineHeight: "27px",
            textAlign: "center",
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
          {"Elige cómo pagar"}
        </span>
      </div>
      <div data-figma-id="653:4077" style={absoluteLayer(20, 1.5, 40, 40, {
          ...surface1,
          borderRadius: 20,
          ...row6
        })}>
        <div data-figma-id="653:4078" style={fixedLayer(20, 20, {
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
          })}>
          <ClientBackIcon size={20} color="#29241f" />
          </div>
      </div>
    </div>
  </div>
  </>;
}
export default EligeCMoPagarADomicilioTarjeta;