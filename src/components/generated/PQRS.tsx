import React from 'react';
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
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const surface2: React.CSSProperties = {
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const font_PlusJakartaS: React.CSSProperties = {
  color: "#1c1b1b",
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  lineHeight: "20px"
};
const text2: React.CSSProperties = {
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #e2dcd5"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  alignItems: "center",
  justifyContent: "center"
};
const layout2: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const row3: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const text3: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 14,
  lineHeight: "17px"
};
const layout3: React.CSSProperties = {
  minWidth: 0,
  padding: "8px 0",
  boxSizing: "border-box"
};
const row2: React.CSSProperties = {
  ...layout1,
  display: "flex"
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
  ...col1,
  ...layout1,
  padding: "9px 17px",
  boxSizing: "border-box"
};
const col5: React.CSSProperties = {
  ...col1,
  ...layout2,
  padding: "14px 17px",
  boxSizing: "border-box"
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text3,
  color: "#9ca3af",
  fontWeight: 400
};
const font_PlusJakartaS_13: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text2,
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
    ...surface1,
    borderRadius: 9999,
    ...col3
  })}>
      <span data-figma-id="464:2021" style={{
      ...font_Inter_13,
      ...row2,
      position: "relative",
      flexShrink: 0
    }}>
        {p.text}
      </span>
    </div>;
}
export function PQRS() {
  return <div data-figma-id="464:1993" style={rootLayer(438, 1140)}>
    <div data-figma-id="464:1994" style={absoluteLayer(0, 0, 438, 1140, col1)}>
      <div data-figma-id="464:1995" style={{
        background: "#fffcf8",
        ...col1,
        minWidth: 0,
        padding: "64px 0 96px",
        boxSizing: "border-box",
        position: "relative",
        height: 1140,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="464:1996" style={fixedLayer("100%", 1076, {
          background: "#fffcf8",
          ...col1,
          minWidth: 0,
          maxWidth: 512,
          padding: "8px 20px 32px",
          boxSizing: "border-box",
          alignSelf: "flex-start"
        })}>
          <div data-figma-id="464:1997" style={fixedLayer(202, "max-content", {
            display: "flex",
            alignItems: "center",
            gap: 8
          })}>
            <div data-figma-id="464:1998" style={fixedLayer(40, 40, row2)}>
              <div data-figma-id="464:1999" style={fixedLayer("max-content", 16, col2)}>
                <div data-figma-id="464:2000" style={fixedLayer(16, 16)} />
              </div>
            </div>
            <div data-figma-id="464:2001" style={fixedLayer("max-content", 20, col1)}>
              <span data-figma-id="464:2002" style={{
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
          <div data-figma-id="464:2003" style={{
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
            <div data-figma-id="464:2004" style={{
              ...col1,
              minWidth: 0,
              padding: "0 0 0.75px",
              boxSizing: "border-box",
              position: "relative",
              height: 65.75,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="464:2005" style={{
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
            <div data-figma-id="464:2006" style={{
              ...col1,
              minWidth: 0,
              position: "relative",
              height: 69,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="464:2007" style={{
                ...font_Inter,
                color: "#5d3f3d",
                whiteSpace: "normal",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "22.75px",
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
          <div data-figma-id="464:2008" style={{
            ...col1,
            ...layout3,
            position: "relative",
            height: 17,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="464:2009" style={{
              background: "#eae5df",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          </div>
          <div data-figma-id="464:2010" style={{
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
            <div data-figma-id="464:2011" style={{
              ...row1,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="464:2012" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="464:2013" style={{
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
              <div data-figma-id="464:2014" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="464:2015" style={{
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
            <div data-figma-id="464:2016" style={{
              minWidth: 0,
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="464:2017" style={{
                overflow: "hidden",
                position: "absolute",
                left: -16,
                top: 0,
                height: 42,
                right: -16
              }}>
                <div data-figma-id="464:2018" style={absoluteLayer(16, "calc(50% + -21px)", "max-content", 38, {
                  ...surface2,
                  background: "#ed6047",
                  boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0)",
                  borderRadius: 9999,
                  ...col3
                })}>
                  <span data-figma-id="464:2019" style={{
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
                <Button data-figma-id="464:2020" left={108.86} text="Queja" />
                <Button data-figma-id="464:2022" left={188.14} text="Reclamo" />
                <Button data-figma-id="464:2024" left={284.63} text="Sugerencia" />
                <div data-figma-id="464:2026" style={absoluteLayer(397.13, "calc(50% + -21px)", "max-content", 38, {
                  ...surface1,
                  borderRadius: 9999,
                  ...col3
                })}>
                  <span data-figma-id="464:2027" style={{
                    ...font_PlusJakartaS,
                    ...text1,
                    fontSize: 13,
                    fontWeight: 500,
                    fontVariationSettings: "\"wght\" 400",
                    textAlign: "center",
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
          <div data-figma-id="464:2028" style={{
            ...col1,
            ...layout3,
            position: "relative",
            height: 17,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="464:2029" style={{
              background: "#eae5df",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          </div>
          <div data-figma-id="464:2030" style={{
            ...col1,
            ...layout3,
            gap: 20,
            position: "relative",
            height: 609.875,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="464:2031" style={{
              ...col4,
              position: "relative",
              height: 71,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="464:2032" style={{
                ...col1,
                minWidth: 0,
                position: "relative",
                height: 20,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="464:2033" style={{
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
              <div data-figma-id="464:2034" style={{
                ...surface3,
                ...col5,
                position: "relative",
                height: 45,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="464:2035" style={{
                  ...col1,
                  ...layout2,
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <span data-figma-id="464:2036" style={{
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
            <div data-figma-id="464:2037" style={{
              ...col1,
              minWidth: 0,
              gap: 16,
              position: "relative",
              height: 158,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="464:2038" style={{
                ...col4,
                position: "relative",
                height: 71,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="464:2039" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 20,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <span data-figma-id="464:2040" style={{
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
                <div data-figma-id="464:2041" style={{
                  ...surface3,
                  ...col5,
                  position: "relative",
                  height: 45,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <div data-figma-id="464:2042" style={{
                    ...col1,
                    ...layout2,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="464:2043" style={{
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
              <div data-figma-id="464:2044" style={{
                ...col4,
                position: "relative",
                height: 71,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="464:2045" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 20,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <span data-figma-id="464:2046" style={{
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
                <div data-figma-id="464:2047" style={{
                  ...surface3,
                  ...col5,
                  position: "relative",
                  height: 45,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <div data-figma-id="464:2048" style={{
                    ...col1,
                    ...layout2,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="464:2049" style={{
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
            <div data-figma-id="464:2050" style={{
              ...col4,
              position: "relative",
              height: 150.875,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="464:2051" style={{
                ...row1,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="464:2052" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2053" style={{
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
                <div data-figma-id="464:2054" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2055" style={{
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
              <div data-figma-id="464:2056" style={{
                ...surface3,
                ...col1,
                ...layout2,
                padding: "16.375px 17px 62.5px",
                boxSizing: "border-box",
                position: "relative",
                height: 124.875,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="464:2057" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 46,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <span data-figma-id="464:2058" style={{
                    ...font_Inter,
                    color: "#9ca3af",
                    whiteSpace: "normal",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "22.75px",
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
            <div data-figma-id="464:2059" style={{
              ...col4,
              position: "relative",
              height: 154,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="464:2060" style={{
                ...row1,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="464:2061" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2062" style={{
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
                <div data-figma-id="464:2063" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="464:2064" style={{
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
              <div data-figma-id="464:2065" style={{
                background: "#ffffff",
                borderRadius: 12,
                ...col1,
                ...layout1,
                minWidth: 0,
                padding: 21,
                boxSizing: "border-box",
                position: "relative",
                height: 128,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="464:2066" style={fixedLayer(36, 44, {
                  ...col1,
                  padding: "0 0 8px",
                  boxSizing: "border-box"
                })}>
                  <div data-figma-id="464:2067" style={fixedLayer(36, 36, {
                    background: "#faf5f0",
                    borderRadius: 9999,
                    ...row2
                  })}>
                    <div data-figma-id="464:2068" style={fixedLayer("max-content", 15, col2)}>
                      <div data-figma-id="464:2069" style={fixedLayer(15, 15)} />
                    </div>
                  </div>
                </div>
                <div data-figma-id="464:2070" style={fixedLayer("max-content", 20, col2)}>
                  <span data-figma-id="464:2071" style={{
                    ...font_Inter_13,
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                    {"Adjuntar foto del ticket o producto"}
                  </span>
                </div>
                <div data-figma-id="464:2072" style={fixedLayer("max-content", 22, {
                  ...col1,
                  padding: "2px 0 0",
                  boxSizing: "border-box"
                })}>
                  <div data-figma-id="464:2073" style={fixedLayer("max-content", 20, col2)}>
                    <span data-figma-id="464:2074" style={{
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
          <div data-figma-id="464:2075" style={{
            background: "#ed6047",
            borderRadius: 12,
            filter: "drop-shadow(0px 6px 16px rgba(237, 96, 71, 0.35))",
            ...layout1,
            minWidth: 0,
            display: "flex",
            gap: 8,
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="464:2076" style={fixedLayer("max-content", 21, col2)}>
              <span data-figma-id="464:2077" style={{
                ...font_Manrope,
                color: "#ffffff",
                whiteSpace: "pre",
                fontSize: 16,
                fontWeight: 700,
                fontVariationSettings: "\"wght\" 700",
                lineHeight: "21.856px",
                textAlign: "center",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
                {"Radicar PQRS"}
              </span>
            </div>
          </div>
          <div data-figma-id="464:2078" style={{
            ...col1,
            minWidth: 0,
            padding: "8px 0 0",
            boxSizing: "border-box",
            position: "relative",
            height: 79,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="464:2079" style={{
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
              <div data-figma-id="464:2080" style={fixedLayer("max-content", 18.333, col1)}>
                <div data-figma-id="464:2081" style={fixedLayer(18.333, 18.333)} />
              </div>
              <div data-figma-id="464:2082" style={fixedLayer("max-content", 30, {
                ...col1,
                padding: "0 35.2px 0 0",
                boxSizing: "border-box"
              })}>
                <span data-figma-id="464:2083" style={fixedLayer(292, 30, {
                  ...font_PlusJakartaS,
                  ...text2,
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
      <div data-figma-id="464:2084" style={absoluteLayer(0, 0, 438, 56, {
        background: "#fffcf8",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        ...col1
      })}>
        <div data-figma-id="464:2085" style={{
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
          <div data-figma-id="464:2086" style={fixedLayer(438, 44, {
            ...row1,
            minHeight: 44,
            padding: "0 24px",
            boxSizing: "border-box"
          })}>
            <div data-figma-id="464:2087" style={fixedLayer("max-content", 17, col1)}>
              <span data-figma-id="464:2088" style={{
                ...font_Inter,
                ...text2,
                ...text3,
                color: "#29241f",
                ...row3,
                position: "relative",
                flexShrink: 0
              }}>
                {"9:41"}
              </span>
            </div>
            <div data-figma-id="464:2089" style={fixedLayer(67, "max-content", {
              display: "flex",
              alignItems: "center",
              gap: 6
            })}>
              <div data-figma-id="464:2090" style={fixedLayer(17, 12, {
                overflow: "hidden"
              })}>
                <div data-figma-id="464:2091" style={absoluteLayer("5.882%", "8.333%", "94.118%", "83.333%")} />
              </div>
              <div data-figma-id="464:2092" style={fixedLayer(16, 12, {
                overflow: "hidden"
              })}>
                <div data-figma-id="464:2093" style={absoluteLayer("3.125%", "20.833%", "93.75%", "104.167%")} />
              </div>
              <div data-figma-id="464:2094" style={fixedLayer(22, 11, {
                overflow: "hidden"
              })}>
                <div data-figma-id="464:2095" style={absoluteLayer("3.409%", "6.818%", "81.818%", "86.364%")} />
                <div data-figma-id="464:2096" style={absoluteLayer("11.364%", "22.727%", "59.091%", "54.545%")} />
                <div data-figma-id="464:2097" style={absoluteLayer("93.182%", "36.364%", "0%", "27.273%")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
export default PQRS;