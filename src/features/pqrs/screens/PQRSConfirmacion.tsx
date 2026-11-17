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
const font_PlusJakartaS: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const font_Manrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const surface1: React.CSSProperties = {
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  lineHeight: "20px"
};
const text2: React.CSSProperties = {
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const text3: React.CSSProperties = {
  fontVariationSettings: "\"wght\" 400",
  textAlign: "center"
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #e2dcd5"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const row3: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const text4: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700",
  textAlign: "center"
};
const text5: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 14,
  lineHeight: "17px"
};
const text6: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "22.75px"
};
const layout2: React.CSSProperties = {
  minWidth: 0,
  padding: "8px 0",
  boxSizing: "border-box"
};
const row2: React.CSSProperties = {
  ...row3,
  justifyContent: "center"
};
const col2: React.CSSProperties = {
  ...col1,
  alignItems: "center"
};
const row4: React.CSSProperties = {
  ...row3,
  minWidth: 0
};
const row1: React.CSSProperties = {
  ...row4,
  justifyContent: "space-between"
};
const col4: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  gap: 6
};
const surface3: React.CSSProperties = {
  ...surface1,
  ...surface2,
  borderRadius: 12
};
const col3: React.CSSProperties = {
  ...row2,
  padding: "9px 17px",
  boxSizing: "border-box",
  flexDirection: "column"
};
const col5: React.CSSProperties = {
  ...col1,
  ...layout1,
  padding: "14px 17px",
  boxSizing: "border-box"
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text5,
  color: "#9ca3af",
  fontWeight: 400
};
const font_PlusJakartaS_13: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text2,
  color: "#1c1b1b",
  fontSize: 13
};
const font_Inter_13: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  color: "#1c1b1b",
  fontSize: 13,
  fontWeight: 400,
  textAlign: "center"
};
function Button(p: {
  "data-figma-id": string;
  left: number;
  text: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={absoluteLayer(p.left, "calc(50% + -21px)", "max-content", 38, {
    ...surface2,
    borderRadius: 9999,
    ...col3
  })}>
      <span data-figma-id="464:2256" style={{
      ...font_Inter_13,
      ...row2,
      position: "relative",
      flexShrink: 0
    }}>
        {p.text}
      </span>
    </div>;
}
export function PQRSConfirmacion() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-934" d="M0 18C0 7 13 0 30 0C48 0 60 9 60 23C60 37 49 44 39 50C32 54 30 60 30 69" fillRule="nonzero" />
        <path id="figma-vector-935" d="M20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="464:2228" style={rootLayer(438, 1140)}>
    <div data-figma-id="464:2229" style={absoluteLayer(0, 0, 438, 1140, {
        background: "linear-gradient(#fcf9f8, #fcf9f8)",
        backgroundColor: "#ffffff",
        ...col1
      })}>
      <div data-figma-id="464:2230" style={fixedLayer(438, 1140, {
          background: "#fcf9f8",
          ...col1,
          padding: "64px 0 96px",
          boxSizing: "border-box"
        })}>
        <div data-figma-id="464:2231" style={fixedLayer("100%", 1076, {
            ...col1,
            minWidth: 0,
            maxWidth: 512,
            padding: "8px 16px 32px",
            boxSizing: "border-box",
            alignSelf: "flex-start"
          })}>
          <div data-figma-id="464:2232" style={fixedLayer(202, "max-content", {
              display: "flex",
              alignItems: "center",
              gap: 8
            })}>
            <div data-figma-id="464:2233" style={fixedLayer(40, 40, row2)}>
              <div data-figma-id="464:2234" style={fixedLayer("max-content", 16, col2)}>
                <div data-figma-id="464:2235" style={fixedLayer(16, 16)} />
              </div>
            </div>
            <div data-figma-id="464:2236" style={fixedLayer("max-content", 20, col1)}>
              <span data-figma-id="464:2237" style={{
                  ...font_Manrope,
                  color: "#1c1b1b",
                  whiteSpace: "pre",
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: "27.32px",
                  letterSpacing: "-0.5px",
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"PQRS y Atención"}
              </span>
            </div>
          </div>
          <div data-figma-id="464:2238" style={{
              ...col1,
              minWidth: 0,
              padding: "11.25px 0 12px",
              boxSizing: "border-box",
              gap: 7.25,
              position: "relative",
              height: 165.25,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2239" style={{
                ...col1,
                minWidth: 0,
                padding: "0 0 0.75px",
                boxSizing: "border-box",
                position: "relative",
                height: 65.75,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="464:2240" style={{
                  ...font_Manrope,
                  color: "#1c1b1b",
                  whiteSpace: "normal",
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: "35.516px",
                  letterSpacing: "-0.65px",
                  minWidth: 0,
                  position: "relative",
                  height: 65,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span style={{
                    position: "absolute",
                    top: 0,
                    whiteSpace: "pre",
                    lineHeight: "32.5px",
                    left: 0,
                    textAlign: "left"
                  }}>{"Tu experiencia es lo más\nimportante"}</span>
              </span>
            </div>
            <div data-figma-id="464:2241" style={{
                ...col1,
                minWidth: 0,
                position: "relative",
                height: 69,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="464:2242" style={{
                  ...font_Inter,
                  ...text6,
                  color: "#5d3f3d",
                  whiteSpace: "normal",
                  minWidth: 0,
                  position: "relative",
                  height: 69,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span style={{
                    position: "absolute",
                    top: 0,
                    whiteSpace: "pre",
                    lineHeight: "22.75px",
                    left: 0,
                    textAlign: "left"
                  }}>{"Cuéntanos qué sucedió o comparte tus sugerencias.\nCada comentario nos ayuda a perfeccionar el\nauténtico sabor a la parrilla."}</span>
              </span>
            </div>
          </div>
          <div data-figma-id="464:2243" style={{
              ...col1,
              ...layout2,
              position: "relative",
              height: 17,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2244" style={{
                background: "#eae5df",
                minWidth: 0,
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
          </div>
          <div data-figma-id="464:2245" style={{
              ...col1,
              minWidth: 0,
              padding: "12px 0",
              boxSizing: "border-box",
              gap: 8,
              position: "relative",
              height: 94,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2246" style={{
                ...row1,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:2247" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="464:2248" style={{
                    ...font_PlusJakartaS_13,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  <span data-figma-text-run="23" style={{
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"Tipo de Solicitud "}</span><span data-figma-text-run="22" style={{
                      color: "#e75338",
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"*"}</span>
                </span>
              </div>
              <div data-figma-id="464:2249" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="464:2250" style={{
                    ...font_Inter,
                    ...text1,
                    color: "#e75338",
                    fontSize: 12,
                    fontWeight: 400,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Petición seleccionada"}
                </span>
              </div>
            </div>
            <div data-figma-id="464:2251" style={{
                minWidth: 0,
                position: "relative",
                height: 42,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:2252" style={{
                  overflow: "hidden",
                  position: "absolute",
                  left: -16,
                  top: 0,
                  height: 42,
                  right: -16
                }}>
                <div data-figma-id="464:2253" style={absoluteLayer(16, "calc(50% + -21px)", "max-content", 38, {
                    ...surface1,
                    background: "#e75338",
                    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0)",
                    borderRadius: 9999,
                    ...col3
                  })}>
                  <span data-figma-id="464:2254" style={{
                      ...font_Inter,
                      ...text1,
                      color: "#ffffff",
                      fontSize: 13,
                      fontWeight: 400,
                      textAlign: "center",
                      ...row2,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Petición"}
                  </span>
                </div>
                <Button data-figma-id="464:2255" left={108.86} text="Queja" />
                <Button data-figma-id="464:2257" left={188.14} text="Reclamo" />
                <Button data-figma-id="464:2259" left={284.63} text="Sugerencia" />
                <div data-figma-id="464:2261" style={absoluteLayer(397.13, "calc(50% + -21px)", "max-content", 38, {
                    ...surface2,
                    borderRadius: 9999,
                    ...col3
                  })}>
                  <span data-figma-id="464:2262" style={{
                      ...font_PlusJakartaS,
                      ...text1,
                      ...text3,
                      color: "#1c1b1b",
                      fontSize: 13,
                      fontWeight: 500,
                      ...row2,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Felicitación"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="464:2263" style={{
              ...col1,
              ...layout2,
              position: "relative",
              height: 17,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2264" style={{
                background: "#eae5df",
                minWidth: 0,
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
          </div>
          <div data-figma-id="464:2265" style={{
              ...col1,
              ...layout2,
              gap: 20,
              position: "relative",
              height: 609.875,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2266" style={{
                ...col4,
                position: "relative",
                height: 71,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:2267" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 20,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="464:2268" style={{
                    ...font_PlusJakartaS_13,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-text-run="23" style={{
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"Nombre Completo "}</span><span data-figma-text-run="22" style={{
                      color: "#e75338",
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"*"}</span>
                </span>
              </div>
              <div data-figma-id="464:2269" style={{
                  ...surface3,
                  ...col5,
                  position: "relative",
                  height: 45,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:2270" style={{
                    ...col1,
                    ...layout1,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="464:2271" style={{
                      ...font_Inter_14,
                      ...row4,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"Ej. Camila Rendón"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="464:2272" style={{
                ...col1,
                minWidth: 0,
                gap: 16,
                position: "relative",
                height: 158,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:2273" style={{
                  ...col4,
                  position: "relative",
                  height: 71,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:2274" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 20,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="464:2275" style={{
                      ...font_PlusJakartaS_13,
                      ...row4,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-text-run="23" style={{
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Teléfono / WhatsApp "}</span><span data-figma-text-run="22" style={{
                        color: "#e75338",
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"*"}</span>
                  </span>
                </div>
                <div data-figma-id="464:2276" style={{
                    ...surface3,
                    ...col5,
                    position: "relative",
                    height: 45,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="464:2277" style={{
                      ...col1,
                      ...layout1,
                      position: "relative",
                      height: 17,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="464:2278" style={{
                        ...font_Inter_14,
                        ...row4,
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      {"+57 300 000 0000"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="464:2279" style={{
                  ...col4,
                  position: "relative",
                  height: 71,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:2280" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 20,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="464:2281" style={{
                      ...font_PlusJakartaS_13,
                      ...row4,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-text-run="23" style={{
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Correo Electrónico "}</span><span data-figma-text-run="22" style={{
                        color: "#e75338",
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"*"}</span>
                  </span>
                </div>
                <div data-figma-id="464:2282" style={{
                    ...surface3,
                    ...col5,
                    position: "relative",
                    height: 45,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="464:2283" style={{
                      ...col1,
                      ...layout1,
                      position: "relative",
                      height: 17,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="464:2284" style={{
                        ...font_Inter_14,
                        ...row4,
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      {"tu-correo@ejemplo.com"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="464:2285" style={{
                ...col4,
                position: "relative",
                height: 150.875,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:2286" style={{
                  ...row1,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:2287" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2288" style={{
                      ...font_PlusJakartaS_13,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    <span data-figma-text-run="23" style={{
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Descripción detallada "}</span><span data-figma-text-run="22" style={{
                        color: "#e75338",
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"*"}</span>
                  </span>
                </div>
                <div data-figma-id="464:2289" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2290" style={{
                      ...font_Inter,
                      ...text1,
                      color: "#5d3f3d",
                      fontSize: 12,
                      fontWeight: 400,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"0 / 600"}
                  </span>
                </div>
              </div>
              <div data-figma-id="464:2291" style={{
                  ...surface3,
                  ...col1,
                  ...layout1,
                  padding: "16.375px 17px 62.5px",
                  boxSizing: "border-box",
                  position: "relative",
                  height: 124.875,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:2292" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 46,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="464:2293" style={{
                      ...font_Inter,
                      ...text6,
                      color: "#9ca3af",
                      whiteSpace: "normal",
                      minWidth: 0,
                      position: "relative",
                      height: 46,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span style={{
                        position: "absolute",
                        top: 0,
                        whiteSpace: "pre",
                        lineHeight: "22.75px",
                        left: 0,
                        textAlign: "left"
                      }}>{"Indícanos la fecha, sucursal, productos y \ncualquier detalle relevante..."}</span>
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="464:2294" style={{
                ...col4,
                position: "relative",
                height: 154,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:2295" style={{
                  ...row1,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:2296" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2297" style={{
                      ...text1,
                      ...font_Manrope,
                      color: "#1c1b1b",
                      fontSize: 13,
                      fontWeight: 600,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Evidencia o Foto"}
                  </span>
                </div>
                <div data-figma-id="464:2298" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2299" style={{
                      ...font_Inter,
                      ...text1,
                      color: "#5d3f3d",
                      fontSize: 12,
                      fontWeight: 600,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"JPG, PNG o PDF"}
                  </span>
                </div>
              </div>
              <div data-figma-id="464:2300" style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  ...col1,
                  minWidth: 0,
                  padding: 21,
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  height: 128,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:2301" style={fixedLayer(36, 44, {
                    ...col1,
                    padding: "0 0 8px",
                    boxSizing: "border-box"
                  })}>
                  <div data-figma-id="464:2302" style={fixedLayer(36, 36, {
                      background: "#faf5f0",
                      borderRadius: 9999,
                      ...row2
                    })}>
                    <div data-figma-id="464:2303" style={fixedLayer("max-content", 15, col2)}>
                      <div data-figma-id="464:2304" style={fixedLayer(15, 15)} />
                    </div>
                  </div>
                </div>
                <div data-figma-id="464:2305" style={fixedLayer("max-content", 20, col2)}>
                  <span data-figma-id="464:2306" style={{
                      ...font_Inter_13,
                      ...row2,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Adjuntar foto del ticket o producto"}
                  </span>
                </div>
                <div data-figma-id="464:2307" style={fixedLayer("max-content", 22, {
                    ...col1,
                    padding: "2px 0 0",
                    boxSizing: "border-box"
                  })}>
                  <div data-figma-id="464:2308" style={fixedLayer("max-content", 20, col2)}>
                    <span data-figma-id="464:2309" style={{
                        ...font_Inter,
                        ...text1,
                        color: "#5d3f3d",
                        fontSize: 11,
                        fontWeight: 400,
                        textAlign: "center",
                        ...row2,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Máximo 10 MB"}
                    </span>
                  </div>
                </div>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 12,
                    pointerEvents: "none",
                    border: "1px solid #d2cac2",
                    borderStyle: "dashed"
                  }} />
              </div>
            </div>
          </div>
          <div data-figma-id="464:2310" style={{
              background: "#ed6047",
              borderRadius: 12,
              filter: "drop-shadow(0px 6px 16px rgba(237, 96, 71, 0.35))",
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2311" style={fixedLayer("max-content", 21, col2)}>
              <span data-figma-id="464:2312" style={{
                  ...font_Manrope,
                  ...text4,
                  color: "#ffffff",
                  whiteSpace: "pre",
                  fontSize: 16,
                  lineHeight: "21.856px",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Radicar PQRS"}
              </span>
            </div>
          </div>
          <div data-figma-id="464:2313" style={{
              ...col1,
              minWidth: 0,
              padding: "8px 0 0",
              boxSizing: "border-box",
              position: "relative",
              height: 79,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2314" style={{
                boxShadow: "inset 0 1px 0 0 #eae5df",
                minWidth: 0,
                display: "flex",
                padding: "25px 0 16px",
                boxSizing: "border-box",
                alignItems: "center",
                gap: 12,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:2315" style={fixedLayer("max-content", 18.333, col1)}>
                <div data-figma-id="464:2316" style={fixedLayer(18.333, 18.333)} />
              </div>
              <div data-figma-id="464:2317" style={fixedLayer("max-content", 30, {
                  ...col1,
                  padding: "0 35.2px 0 0",
                  boxSizing: "border-box"
                })}>
                <span data-figma-id="464:2318" style={fixedLayer(292, 30, {
                    ...font_PlusJakartaS,
                    ...text2,
                    color: "#1c1b1b",
                    whiteSpace: "normal",
                    fontSize: 12,
                    lineHeight: "15px"
                  })}>
                  <span style={{
                      position: "absolute",
                      top: 0,
                      whiteSpace: "pre",
                      lineHeight: "15px",
                      left: 0,
                      textAlign: "left"
                    }}><span data-figma-text-run="16" style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Tiempo de Respuesta Oficial:"}</span><span data-figma-text-run="17" style={{
                        color: "#5d3f3d",
                        fontFamily: "'Inter', system-ui, sans-serif"
                      }}>{" Las radicaciones son"}</span>{"\n"}<span data-figma-text-run="17" style={{
                        color: "#5d3f3d",
                        fontFamily: "'Inter', system-ui, sans-serif"
                      }}>{"atendidas en un plazo de 24 a 48 horas hábiles."}</span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="464:2319" style={absoluteLayer(0, 0, 390, 56, {
          background: "rgba(252, 249, 248, 0.8)",
          filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
          backdropFilter: "blur(48px)",
          ...col1
        })}>
        <div data-figma-id="464:2320" style={{
            minWidth: 0,
            display: "flex",
            padding: "0 16px",
            boxSizing: "border-box",
            alignItems: "center",
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="464:2321" style={fixedLayer(438, 44, {
              ...row1,
              minHeight: 44,
              padding: "0 24px",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:2322" style={fixedLayer("max-content", 17, col1)}>
              <span data-figma-id="464:2323" style={{
                  ...font_Inter,
                  ...text2,
                  ...text5,
                  color: "#29241f",
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"9:41"}
              </span>
            </div>
            <div data-figma-id="464:2324" style={fixedLayer(67, "max-content", {
                display: "flex",
                alignItems: "center",
                gap: 6
              })}>
              <div data-figma-id="464:2325" style={fixedLayer(17, 12, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientBackIcon size={17} color="#29241f" />
          </div>
              <div data-figma-id="464:2327" style={fixedLayer(16, 12, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientBackIcon size={16} color="#29241f" />
          </div>
              <div data-figma-id="464:2329" style={fixedLayer(22, 11, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <svg viewBox="0 0 27 13" width="100%" height="100%" fill="none" aria-hidden><rect x="0.7" y="1.2" width="22.5" height="10.6" rx="2.2" stroke="#29241f" strokeWidth="1.3"/><rect x="2.4" y="2.9" width="17" height="7.2" rx="1.2" fill="#29241f"/><path d="M24.2 4.2h1.6a1.2 1.2 0 0 1 1.2 1.2v2.2a1.2 1.2 0 0 1-1.2 1.2h-1.6" stroke="#29241f" strokeWidth="1.3" strokeLinecap="round"/></svg>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="464:2333" style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "absolute",
          left: 2,
          top: 0,
          right: -1,
          bottom: 4
        }}>
        <div data-figma-id="464:2334" style={{
            background: "rgba(0, 0, 0, 0.2)",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          }} />
        <div data-figma-id="464:2335" style={fixedLayer(442, 390.25, {
            background: "#ffffff",
            borderRadius: "28px 28px 0 0",
            ...col1,
            maxWidth: 512,
            padding: "12px 24px 32px",
            boxSizing: "border-box",
            alignItems: "center"
          })}>
          <div data-figma-id="464:2336" style={{
              background: "#fffcf8",
              borderRadius: "24px 24px 0 0",
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              position: "absolute",
              left: "calc(50% + -220.5px)",
              width: 442,
              height: 390.25,
              bottom: 0
            }} />
          <div data-figma-id="464:2337" style={fixedLayer(40, 26, {
              ...col1,
              padding: "0 0 20px",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:2338" style={fixedLayer(40, 6, {
                background: "#d2cac2",
                borderRadius: 9999
              })} />
          </div>
          <div data-figma-id="464:2339" style={fixedLayer(64, 80, {
              ...col1,
              padding: "0 0 16px",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="876:3001" style={fixedLayer(64, 64, {
                ...surface1,
                background: "#faf5f0",
                borderRadius: 9999,
                ...row2
              })}>
              <div data-figma-id="876:3002" style={fixedLayer("max-content", 30.016, col1)}>
                <div data-figma-id="876:3003" style={fixedLayer(20, 30.016)}>
                  <svg data-figma-id="876:3004" viewBox="-6 -6.9 72 82.8" preserveAspectRatio="none" style={absoluteLayer("calc(0% - 2px)", "calc(0% - 2px)", "calc(100% + 4px)", "calc(66.632% + 4px)")}>
                    <path d="M0 18C0 7 13 0 30 0C48 0 60 9 60 23C60 37 49 44 39 50C32 54 30 60 30 69" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={4} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg data-figma-id="876:3005" viewBox="0 0 20 20" preserveAspectRatio="none" style={absoluteLayer("35%", "80.01%", "35%", "19.99%")}>
                    <use href="#figma-vector-935" fill="#ed6047" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="464:2343" style={fixedLayer("max-content", 28, {
              ...col1,
              padding: "0 0 8px",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:2344" style={fixedLayer("max-content", 20, col2)}>
              <span data-figma-id="464:2345" style={{
                  ...font_PlusJakartaS,
                  ...text1,
                  ...text4,
                  color: "#1c1b1b",
                  fontSize: 20,
                  letterSpacing: "-0.5px",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"¿Confirmar radicación?"}
              </span>
            </div>
          </div>
          <div data-figma-id="464:2346" style={fixedLayer(342, 92.25)}>
            <div data-figma-id="464:2347" style={absoluteLayer(0, -0.75, "max-content", 69, {
                ...col1,
                padding: "0 12.06px 0 12.05px",
                boxSizing: "border-box",
                alignItems: "center"
              })}>
              <span data-figma-id="464:2348" style={{
                  ...font_PlusJakartaS,
                  ...text3,
                  ...text6,
                  color: "#5d3f3d",
                  whiteSpace: "pre",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Revisa que tus datos y descripción sean\ncorrectos. Tu solicitud será atendida por nuestro\nequipo en un plazo de 24 a 48 horas hábiles."}
              </span>
            </div>
          </div>
          <div data-figma-id="464:2349" style={{
              ...col1,
              minWidth: 0,
              gap: 12,
              position: "relative",
              height: 100,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="464:2350" style={{
                ...surface1,
                background: "#e75338",
                borderRadius: 12,
                minWidth: 0,
                display: "flex",
                padding: "14px 0",
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="464:2351" style={{
                  ...font_PlusJakartaS,
                  ...text1,
                  ...text4,
                  color: "#ffffff",
                  fontSize: 15,
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Sí, radicar PQRS"}
              </span>
            </div>
            <div data-figma-id="464:2352" style={{
                ...col1,
                minWidth: 0,
                padding: "10px 0",
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                height: 40,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="464:2353" style={{
                  ...font_PlusJakartaS,
                  ...text1,
                  ...text3,
                  color: "#5d3f3d",
                  fontSize: 14,
                  fontWeight: 500,
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Volver a revisar"}
              </span>
            </div>
          </div>
          <div data-figma-id="464:2354" style={fixedLayer(128, 20, {
              ...col1,
              padding: "16px 0 0",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:2355" style={fixedLayer(128, 4, {
                background: "rgba(28, 27, 27, 0.2)",
                borderRadius: 9999
              })} />
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default PQRSConfirmacion;