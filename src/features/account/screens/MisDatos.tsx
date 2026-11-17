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
const font_Inter: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif"
};
const text2: React.CSSProperties = {
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text3: React.CSSProperties = {
  fontSize: 16,
  lineHeight: "19.364px"
};
const surface1: React.CSSProperties = {
  boxShadow: "inset 0 0 0 1px #ebe4dc",
  borderRadius: 12
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const row2: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const row3: React.CSSProperties = {
  ...row2,
  minWidth: 0
};
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontWeight: 800,
  fontVariationSettings: "\"wght\" 800"
};
const row1: React.CSSProperties = {
  ...row2,
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const row4: React.CSSProperties = {
  ...row3,
  padding: "1px 0 0",
  boxSizing: "border-box"
};
const col3: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  padding: "0 0 0.8px",
  boxSizing: "border-box"
};
const col2: React.CSSProperties = {
  ...col1,
  ...layout1,
  padding: "14.5px 91px 14.5px 17px",
  boxSizing: "border-box"
};
const font_Inter_16: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  ...text3,
  color: "#29241f"
};
const font_Inter_12: React.CSSProperties = {
  ...font_Inter,
  ...text2,
  color: "#82776e",
  whiteSpace: "pre",
  fontSize: 12,
  lineHeight: "15px"
};
export function MisDatos() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-172" d="M0 8L2 8L2 6L0 6L0 8ZM4 8L6 8L6 4L4 4L4 8ZM8 8L10 8L10 2L8 2L8 8ZM12 8L14 8L14 0L12 0L12 8Z" fillRule="nonzero" />
        <path id="figma-derived-821" d="M9.158 0C4.153 0 0.073 4.079 0.073 9.084C0.073 10.688 0.495 12.247 1.283 13.622L0 18.333L4.813 17.068C6.142 17.793 7.636 18.177 9.158 18.177C14.163 18.177 18.242 14.098 18.242 9.093C18.242 6.664 17.298 4.382 15.583 2.668C13.869 0.953 11.587 0 9.158 0L9.158 0M9.167 1.531C11.183 1.531 13.072 2.319 14.502 3.749C15.923 5.179 16.711 7.077 16.711 9.093C16.711 13.255 13.328 16.647 9.167 16.647C7.81 16.647 6.49 16.28 5.335 15.593L5.06 15.428L2.2 16.179L2.961 13.392L2.778 13.099C2.026 11.908 1.623 10.514 1.623 9.084C1.623 4.922 5.005 1.531 9.167 1.531L9.167 1.531M6.618 4.968C6.453 4.968 6.178 5.033 5.949 5.28C5.72 5.528 5.069 6.133 5.069 7.37C5.069 8.608 5.967 9.799 6.096 9.964C6.224 10.129 7.865 12.668 10.413 13.658C12.531 14.483 12.962 14.318 13.42 14.273C13.878 14.236 14.896 13.668 15.107 13.072C15.318 12.476 15.318 11.962 15.253 11.862C15.189 11.761 15.024 11.697 14.767 11.568C14.511 11.44 13.264 10.826 13.035 10.743C12.806 10.661 12.632 10.615 12.467 10.872C12.302 11.128 11.825 11.697 11.678 11.862C11.532 12.027 11.385 12.045 11.128 11.917C10.872 11.788 10.056 11.523 9.084 10.652C8.332 9.983 7.819 9.148 7.673 8.892C7.526 8.635 7.654 8.497 7.783 8.369C7.902 8.25 8.048 8.057 8.177 7.911C8.305 7.764 8.351 7.654 8.433 7.489C8.516 7.324 8.479 7.177 8.415 7.049C8.351 6.921 7.883 5.775 7.682 5.298C7.489 4.831 7.287 4.895 7.141 4.886C7.003 4.877 6.838 4.968 6.618 4.968L6.618 4.968" fillRule="nonzero" />
        <path id="figma-derived-816" d="M17.417 11C17.417 10.494 17.006 10.083 16.5 10.083C15.994 10.083 15.583 10.494 15.583 11L16.5 11L17.417 11ZM3.667 12.833L3.667 11.917C3.424 11.917 3.19 12.013 3.018 12.185L3.667 12.833ZM0 16.5L-0.917 16.5C-0.917 16.871 -0.693 17.205 -0.351 17.347C-0.008 17.489 0.386 17.41 0.648 17.148L0 16.5ZM15.583 11C15.583 11.506 15.994 11.917 16.5 11.917C17.006 11.917 17.417 11.506 17.417 11L16.5 11L15.583 11ZM16.5 11L15.583 11C15.583 11.506 15.172 11.917 14.667 11.917L14.667 12.833L14.667 13.75C16.185 13.75 17.417 12.518 17.417 11L16.5 11ZM14.667 12.833L14.667 11.917L3.667 11.917L3.667 12.833L3.667 13.75L14.667 13.75L14.667 12.833ZM3.667 12.833L3.018 12.185L-0.648 15.852L0 16.5L0.648 17.148L4.315 13.482L3.667 12.833ZM0 16.5L0.917 16.5L0.917 1.833L0 1.833L-0.917 1.833L-0.917 16.5L0 16.5ZM0 1.833L0.917 1.833C0.917 1.328 1.328 0.917 1.833 0.917L1.833 0L1.833 -0.917C0.315 -0.917 -0.917 0.315 -0.917 1.833L0 1.833ZM1.833 0L1.833 0.917L14.667 0.917L14.667 0L14.667 -0.917L1.833 -0.917L1.833 0ZM14.667 0L14.667 0.917C15.172 0.917 15.583 1.328 15.583 1.833L16.5 1.833L17.417 1.833C17.417 0.315 16.185 -0.917 14.667 -0.917L14.667 0ZM16.5 1.833L15.583 1.833L15.583 11L16.5 11L17.417 11L17.417 1.833L16.5 1.833Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="342:1217" style={rootLayer("100%", "max-content", {
      background: "linear-gradient(#e5e7eb, #e5e7eb)",
      backgroundColor: "#ffffff",
      minWidth: 0,
      display: "flex",
      justifyContent: "center",
      gap: 10
    })}>
    <div data-figma-id="342:1218" style={{
        background: "#fffcf8",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        ...col1,
        ...layout1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 0,
        position: "relative",
        height: "auto",
        minHeight: "100%",
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0
      }}>
      <div data-figma-id="802:4133" style={{
          ...col1,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1219" style={{
            boxShadow: "inset 0 -1px 0 0 rgba(0, 0, 0, 0)",
            minWidth: 0,
            display: "flex",
            padding: "12px 20px 4px",
            boxSizing: "border-box",
            alignItems: "center",
            gap: 12,
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1220" style={fixedLayer(44, 40)}>
            <div data-figma-id="342:1221" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>
              <ClientBackIcon size={20} color="#29241f" />
            </div>
          </div>
          <div data-figma-id="342:1222" style={fixedLayer("max-content", 30, col1)}>
            <span data-figma-id="342:1223" style={{
                ...font_Manrope,
                color: "#29241f",
                fontSize: 22,
                lineHeight: "30.052px",
                letterSpacing: "-0.4px",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
              {"Mis datos"}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1224" style={{
          ...col1,
          minWidth: 0,
          padding: "4px 0 16px",
          boxSizing: "border-box",
          alignItems: "center",
          position: "relative",
          height: "auto",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1225" style={fixedLayer(362, "max-content", {
            ...col1,
            padding: "4px 0 16px",
            boxSizing: "border-box",
            alignItems: "center"
          })}>
          <div data-figma-id="342:1226" style={{
              ...col1,
              minWidth: 0,
              alignItems: "center",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1227" style={fixedLayer(80, 80, {
                background: "#f5efe7",
                boxShadow: "inset 0 0 0 3px #fff1eb",
                borderRadius: 40,
                display: "flex",
                padding: 3,
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "center"
              })}>
              <span data-figma-id="342:1228" style={{
                  ...font_Manrope,
                  color: "#ed6047",
                  fontSize: 32,
                  lineHeight: "44px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  flexShrink: 0
                }}>
                {"LM"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="802:4157" style={fixedLayer("max-content", "max-content", {
            ...col1,
            padding: "8px 0 16px",
            boxSizing: "border-box",
            gap: 16
          })}>
          <div data-figma-id="342:1229" style={fixedLayer(362, 75, col1)}>
            <div data-figma-id="342:1230" style={{
                ...col1,
                minWidth: 0,
                gap: 8,
                position: "relative",
                height: 75,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="342:1231" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 19,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:1232" style={{
                    ...font_Inter_16,
                    ...row3,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Nombre y apellido"}
                </span>
              </div>
              <div data-figma-id="342:1233" style={{
                  ...row3,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:1234" style={{
                    ...surface1,
                    background: "#ffffff",
                    ...col1,
                    ...layout1,
                    padding: "14.5px 17px",
                    boxSizing: "border-box",
                    position: "relative",
                    height: 48,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="342:1235" style={{
                      ...col1,
                      ...layout1,
                      position: "relative",
                      height: 19,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="342:1236" style={{
                        ...font_Inter,
                        ...text2,
                        ...text3,
                        color: "#29241f",
                        whiteSpace: "pre",
                        ...row3,
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      {"Laura Martínez"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="342:1237" style={fixedLayer("max-content", 75, {
              ...col1,
              gap: 10
            })}>
            <div data-figma-id="342:1238" style={fixedLayer(362, 75, {
                ...col1,
                gap: 7
              })}>
              <div data-figma-id="802:4033" style={fixedLayer(362, 75, {
                  ...col1,
                  gap: 7
                })}>
                <div data-figma-id="342:1239" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 19,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:1240" style={{
                      ...font_Inter_16,
                      ...row3,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"Celular"}
                  </span>
                </div>
                <div data-figma-id="342:1241" style={{
                    ...row4,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="342:1242" style={{
                      ...surface1,
                      background: "#faf6f0",
                      ...col2,
                      position: "relative",
                      height: 48,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                    <div data-figma-id="342:1243" style={{
                        ...col1,
                        ...layout1,
                        position: "relative",
                        height: 19,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="342:1244" style={{
                          ...font_Inter,
                          ...text2,
                          ...text3,
                          color: "#82776e",
                          whiteSpace: "pre",
                          ...row3,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        {"+57 300 123 4567"}
                      </span>
                    </div>
                  </div>
                  <div data-figma-id="342:1245" style={{
                      ...col1,
                      position: "absolute",
                      top: 16.5,
                      width: "max-content",
                      height: 17,
                      right: 16
                    }}>
                    <span data-figma-id="342:1246" style={{
                        ...font_Inter,
                        ...text1,
                        color: "#bd412d",
                        fontSize: 14,
                        lineHeight: "17px",
                        ...row2,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Cambiar"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="802:4143" style={fixedLayer("max-content", 75, {
              ...col1,
              gap: 10
            })}>
            <div data-figma-id="802:4144" style={fixedLayer(362, 75, {
                ...col1,
                gap: 7
              })}>
              <div data-figma-id="802:4145" style={fixedLayer(362, 75, {
                  ...col1,
                  gap: 7
                })}>
                <div data-figma-id="802:4146" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 19,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="802:4147" style={{
                      ...font_Inter_16,
                      ...row3,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"Correo"}
                  </span>
                </div>
                <div data-figma-id="802:4148" style={{
                    ...row4,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="802:4149" style={{
                      ...surface1,
                      background: "#faf6f0",
                      ...col2,
                      position: "relative",
                      height: 48,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                    <div data-figma-id="802:4150" style={{
                        ...col1,
                        ...layout1,
                        position: "relative",
                        height: 19,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="802:4151" style={{
                          ...font_Inter,
                          ...text2,
                          ...text3,
                          color: "#82776e",
                          whiteSpace: "pre",
                          ...row3,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        {"correo@gmail.com"}
                      </span>
                    </div>
                  </div>
                  <div data-figma-id="802:4152" style={{
                      ...col1,
                      position: "absolute",
                      top: 16.5,
                      width: "max-content",
                      height: 17,
                      right: 16
                    }}>
                    <span data-figma-id="802:4153" style={{
                        ...font_Inter,
                        ...text1,
                        color: "#bd412d",
                        fontSize: 14,
                        lineHeight: "17px",
                        ...row2,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Cambiar"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1250" style={fixedLayer(402, 1, {
            background: "#ebe4dc"
          })} />
        <div data-figma-id="342:1251" style={fixedLayer("max-content", 178.6, {
            ...col1,
            justifyContent: "center",
            gap: 10
          })}>
          <div data-figma-id="342:1252" style={fixedLayer(362, 178.6, {
              ...col1,
              padding: "20px 0 0",
              boxSizing: "border-box",
              gap: 8
            })}>
            <div data-figma-id="342:1253" style={{
                ...col1,
                minWidth: 0,
                position: "relative",
                height: 19,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="342:1254" style={{
                  ...font_Inter_16,
                  ...row3,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                {"¿Cómo te avisamos de tu pedido?"}
              </span>
            </div>
            <div data-figma-id="342:1255" style={{
                ...col1,
                minWidth: 0,
                gap: 10,
                position: "relative",
                height: 131.6,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="584:1815" style={fixedLayer(362, "max-content", {
                  background: "#fff1eb",
                  boxShadow: "inset 0 0 0 1px #ed6047",
                  borderRadius: 12,
                  ...row1,
                  padding: "13px 15px"
                })}>
                <div data-figma-id="584:1803" style={fixedLayer(252.72, "max-content", {
                    display: "flex",
                    alignItems: "center",
                    gap: 12
                  })}>
                  <div data-figma-id="584:1804" style={fixedLayer(22, 22, {
                      overflow: "hidden"
                    })}>
                    <svg data-figma-id="584:1805" viewBox="0 0 18.242 18.333" preserveAspectRatio="none" style={absoluteLayer("8.542%", "8.333%", "82.917%", "83.333%")}>
                      <use href="#figma-derived-821" fill="#ed6047" />
                    </svg>
                  </div>
                  <div data-figma-id="584:1806" style={fixedLayer(218.72, 34.8, {
                      ...col1,
                      gap: 3
                    })}>
                    <div data-figma-id="584:1807" style={{
                        ...col3,
                        position: "relative",
                        height: 17.8,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="584:1808" style={{
                          ...font_Inter_16,
                          ...row2,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"WhatsApp"}
                      </span>
                    </div>
                    <div data-figma-id="584:1809" style={{
                        ...col1,
                        minWidth: 0,
                        position: "relative",
                        height: 15,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="584:1810" style={{
                          ...font_Inter_12,
                          ...row2,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Te escribimos cuando tu pedido salga."}
                      </span>
                    </div>
                  </div>
                </div>
                <div data-figma-id="584:1811" style={fixedLayer(18, 18, {
                    boxShadow: "inset 0 0 0 2px #ed6047",
                    borderRadius: 9,
                    display: "flex",
                    padding: 2,
                    boxSizing: "border-box",
                    alignItems: "center",
                    justifyContent: "center"
                  })}>
                  <div data-figma-id="584:1812" style={fixedLayer(9, 9, {
                      background: "#ed6047",
                      borderRadius: 4.5
                    })} />
                </div>
              </div>
              <div data-figma-id="584:1780" style={fixedLayer(362, "max-content", {
                  background: "#ffffff",
                  boxShadow: "inset 0 0 0 1px #e0bfb9",
                  borderRadius: 12,
                  ...row1,
                  padding: "13px 15px"
                })}>
                <div data-figma-id="584:1769" style={fixedLayer(226.91, 34.8)}>
                  <div data-figma-id="584:1770" style={absoluteLayer(0, "calc(50% + -11px)", 22, 22, {
                      overflow: "hidden"
                    })}>
                    <svg data-figma-id="584:1771" viewBox="-0.917 -0.917 18.333 18.405" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.917px)", "calc(12.5% - 0.917px)", "calc(75% + 1.833px)", "calc(75% + 1.905px)")}>
                      <use href="#figma-derived-816" fill="#82776e" />
                    </svg>
                  </div>
                  <div data-figma-id="584:1772" style={absoluteLayer(34, "calc(50% + -17.2px)", 192.91, 34.8, {
                      ...col1,
                      padding: "0 0 0.01px",
                      boxSizing: "border-box",
                      gap: 2.99
                    })}>
                    <div data-figma-id="584:1773" style={{
                        ...col3,
                        position: "relative",
                        height: 17.8,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="584:1774" style={{
                          ...font_Inter_16,
                          ...row2,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"SMS"}
                      </span>
                    </div>
                    <div data-figma-id="584:1775" style={{
                        ...col1,
                        minWidth: 0,
                        position: "relative",
                        height: 15,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="584:1776" style={{
                          ...font_Inter_12,
                          ...row2,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Te enviamos un mensaje de texto."}
                      </span>
                    </div>
                  </div>
                </div>
                <div data-figma-id="584:1777" style={fixedLayer(18, 18, {
                    background: "#ffffff",
                    border: "1px solid #d5ccc2",
                    borderRadius: 9
                  })} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1249" style={fixedLayer(402, 1, {
          background: "#ebe4dc"
        })} />
      <div data-figma-id="342:1277" style={fixedLayer(362, 82, {
          ...col1,
          padding: "8px 0",
          boxSizing: "border-box"
        })}>
        <div data-figma-id="342:1278" style={{
            background: "#f5efe7",
            borderRadius: 12,
            minWidth: 0,
            position: "relative",
            height: 66,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1280" style={absoluteLayer(15, 21, 20, 20, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <ClientShieldIcon size={20} color="#ed6047" />
          </div>
          <span data-figma-id="342:1283" style={absoluteLayer(48, 14, 298, 38, {
              ...font_Inter,
              ...text2,
              color: "#29241f",
              whiteSpace: "normal",
              fontSize: 13,
              lineHeight: "18.85px"
            })}>
            <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "18.85px",
                left: 0,
                textAlign: "left"
              }}>{"Solo usamos tu nombre y celular para gestionar \ntus pedidos. "}</span>
          </span>
          <span data-figma-id="342:1284" data-proto-action="ver politica de datos" style={{
              ...font_Inter,
              ...text1,
              color: "#bd412d",
              fontSize: 13,
              fontWeight: 700,
              fontVariationSettings: "\"wght\" 700",
              lineHeight: "18.85px",
              ...row2,
              position: "absolute",
              left: 133,
              top: 33,
              cursor: "pointer"
            }}>
            {"Ver política de datos"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:1297" style={{
          background: "linear-gradient(180deg, rgba(255, 252, 248, 0) 0%, rgba(255, 252, 248, 0.95) 20%, #fffcf8 100%)",
          ...col1,
          minWidth: 0,
          padding: "12px 20px 24px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          position: "relative",
          height: 109,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1298" style={{
            background: "#ed6047",
            borderRadius: 12,
            filter: "drop-shadow(0px 4px 12px rgba(237, 96, 71, 0.25))",
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="342:1299" style={{
              ...font_Manrope,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "22px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"Guardar cambios"}
          </span>
        </div>
        <div data-figma-id="342:1300" style={fixedLayer(362, 9, {
            ...col1,
            padding: "4px 114px 0",
            boxSizing: "border-box",
            alignItems: "center"
          })}>
          <div data-figma-id="342:1301" style={fixedLayer(134, 5, {
              opacity: 0.85,
              background: "#29241f",
              borderRadius: 3
            })} />
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default MisDatos;