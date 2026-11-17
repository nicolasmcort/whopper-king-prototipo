import React from 'react';
import { ClientPhoneIcon, ClientPhoneCallIcon, ClientWhatsAppIcon, ClientScheduleIcon } from '@/shared/components/ui/ClientUiIcons';
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
const text3: React.CSSProperties = {
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  padding: "2px 0 0",
  boxSizing: "border-box"
};
const text1: React.CSSProperties = {
  color: "#82776e",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const row3: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const row4: React.CSSProperties = {
  ...row1,
  overflow: "hidden"
};
const text2: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600",
  lineHeight: "22.5px"
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  minHeight: 56,
  padding: "12px 0",
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const font_Inter_13: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  ...text3,
  fontSize: 13,
  lineHeight: "19.5px"
};
export function Contactos() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-466" d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fillRule="nonzero" />
        <path id="figma-vector-477" d="M0 0L144 0L144 4L0 4L0 0Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="342:1999" style={rootLayer(402, 859, {
      overflow: "hidden"
    })}>
    <div data-figma-id="342:2000" style={{
        background: "rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(1px)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }} />
    <div data-figma-id="342:2001" style={{
        background: "#fffcf8",
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.32), 0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        borderRadius: "50px 50px 0 0",
        ...col1,
        overflow: "hidden",
        padding: "0 0 14px",
        boxSizing: "border-box",
        position: "absolute",
        left: "calc(50% + -199px)",
        width: 398,
        height: 550,
        bottom: 0
      }}>
      <div data-figma-id="342:2002" style={{
          minWidth: 0,
          display: "flex",
          padding: "12px 0 8px",
          boxSizing: "border-box",
          justifyContent: "center",
          position: "relative",
          height: 24,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:2003" style={fixedLayer(36, 4, {
            background: "#d1c7bd",
            borderRadius: 9999
          })} />
      </div>
      <div data-figma-id="342:2004" style={{
          minWidth: 0,
          position: "relative",
          height: 512,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:2005" style={{
            display: "grid",
            padding: "0 20px",
            boxSizing: "border-box",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "fit-content(100%) fit-content(100%)",
            columnGap: 10,
            rowGap: 10,
            gridAutoRows: "max-content",
            position: "absolute",
            left: 24,
            top: 4,
            height: "max-content",
            right: 85
          }}>
          <span data-figma-id="342:2008" style={{
              ...font_Inter,
              color: "#29241f",
              whiteSpace: "pre",
              fontSize: 22,
              fontWeight: 700,
              lineHeight: "33px",
              letterSpacing: "-0.44px",
              ...row1,
              position: "relative",
              width: 249,
              gridColumn: "1 / span 1",
              gridRow: "1 / span 1"
            }}>
            {"Contactos"}
          </span>
          <span data-figma-id="342:2011" style={rootLayer(249, 42, {
              ...font_Inter,
              ...text1,
              whiteSpace: "normal",
              fontSize: 14,
              lineHeight: "21px",
              gridColumn: "1 / span 1",
              gridRow: "2 / span 1"
            })}>
            <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "21px",
                left: 0,
                textAlign: "left"
              }}>{"¿Tienes una duda con tu pedido?\nEscríbenos o llámanos."}</span>
          </span>
        </div>
        <div data-figma-id="342:2012" style={absoluteLayer("calc(50% + -175px)", 103, 350, 207, col1)}>
          <div data-figma-id="342:2013" style={{
              ...row2,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:2014" style={fixedLayer(297, "max-content", {
                ...row1,
                gap: 14
              })}>
              <div data-figma-id="585:2504" style={fixedLayer(40, 40, {
                  background: "#ebf7ee",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="585:2505" style={fixedLayer(40, 40, {
                    overflow: "visible",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  })}>
                  <ClientWhatsAppIcon size={40} color="#16a34a" />
                </div>
              </div>
              <div data-figma-id="342:2018" style={fixedLayer(243, 43, col1)}>
                <div data-figma-id="342:2019" style={fixedLayer(251, 22, {
                    overflow: "hidden"
                  })}>
                  <span data-figma-id="342:2020" style={{
                      ...font_Inter,
                      ...text2,
                      ...text3,
                      color: "#29241f",
                      ...row4,
                      position: "absolute",
                      left: 0,
                      top: -2,
                      width: 238
                    }}>
                    {"Escríbenos por WhatsApp"}
                  </span>
                </div>
                <div data-figma-id="342:2021" style={fixedLayer(73, 21, {
                    ...col1,
                    ...layout1
                  })}>
                  <div data-figma-id="342:2022" style={fixedLayer(254, 19, {
                      overflow: "hidden"
                    })}>
                    <span data-figma-id="342:2023" style={{
                        ...font_Inter_13,
                        ...row4,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 254
                      }}>
                      {"Respuesta más rápida"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="342:2024" style={fixedLayer(43, 44)}>
              <svg data-figma-id="342:2025" viewBox="0 0 7.4 12" preserveAspectRatio="none" style={absoluteLayer(18, 16, 7, 11)}>
                <use href="#figma-vector-466" fill="#82776e" />
              </svg>
            </div>
          </div>
          <div data-figma-id="342:2027" style={{
              background: "#ebe4dc",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="342:2028" style={{
              ...row2,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:2029" style={fixedLayer(297, "max-content", {
                ...row1,
                gap: 14
              })}>
              <div data-figma-id="342:2030" style={fixedLayer(40, 40, {
                  background: "rgba(26, 80, 243, 0.14)",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="342:2031" style={fixedLayer(16.5, 16.5, {
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  })}>
                  <ClientPhoneCallIcon size={16.5} color="#1a50f3" />
                </div>
              </div>
              <div data-figma-id="342:2033" style={fixedLayer(243, 45, col1)}>
                <div data-figma-id="342:2034" style={fixedLayer(251, 23, {
                    overflow: "hidden"
                  })}>
                  <span data-figma-id="342:2035" style={{
                      ...font_Inter,
                      ...text2,
                      ...text3,
                      color: "#29241f",
                      ...row4,
                      position: "absolute",
                      left: 0,
                      top: -1.5,
                      width: 234
                    }}>
                    {"Llamar al restaurante"}
                  </span>
                </div>
                <div data-figma-id="342:2036" style={{
                    ...col1,
                    ...layout1,
                    minWidth: 0,
                    position: "relative",
                    height: 22,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2037" style={{
                      ...font_Inter_13,
                      ...row4,
                      position: "relative",
                      width: 181,
                      flexShrink: 0
                    }}>
                    {"Línea fija (602) 000 0000"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="342:2038" style={fixedLayer(43, 44)}>
              <svg data-figma-id="342:2039" viewBox="0 0 7.4 12" preserveAspectRatio="none" style={absoluteLayer(18, 16, 7, 11)}>
                <use href="#figma-vector-466" fill="#82776e" />
              </svg>
            </div>
          </div>
          <div data-figma-id="342:2041" style={{
              background: "#ebe4dc",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="342:2042" style={{
              ...row2,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:2043" style={fixedLayer(297, "max-content", {
                ...row1,
                gap: 14
              })}>
              <div data-figma-id="342:2044" style={fixedLayer(40, 40, {
                  background: "#f5efe7",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="342:2045" style={fixedLayer("max-content", 20, col1)}>
                  <div data-figma-id="802:4016" style={fixedLayer(20, 20, {
                      overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                    })}>
                    <ClientPhoneIcon size={18} color="#ed6047" />
                  </div>
                </div>
              </div>
              <div data-figma-id="342:2047" style={fixedLayer(243, 44, col1)}>
                <div data-figma-id="342:2048" style={{
                    minWidth: 0,
                    overflow: "hidden",
                    position: "relative",
                    height: 22.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2049" style={{
                      ...font_Inter,
                      ...text2,
                      ...text3,
                      color: "#29241f",
                      ...row4,
                      position: "absolute",
                      left: 0,
                      top: -1,
                      width: 234
                    }}>
                    {"Llamar al celular"}
                  </span>
                </div>
                <div data-figma-id="342:2050" style={{
                    ...col1,
                    ...layout1,
                    minWidth: 0,
                    position: "relative",
                    height: 21.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="342:2051" style={{
                      minWidth: 0,
                      overflow: "hidden",
                      position: "relative",
                      height: 19.5,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="342:2052" style={{
                        ...font_Inter_13,
                        ...row4,
                        position: "absolute",
                        left: 0,
                        top: -0.5,
                        width: 235
                      }}>
                      {"+57 300 000 0000"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="342:2053" style={fixedLayer(43, 44)}>
              <svg data-figma-id="342:2054" viewBox="0 0 7.4 12" preserveAspectRatio="none" style={absoluteLayer(18, 16, 7, 11)}>
                <use href="#figma-vector-466" fill="#82776e" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="342:2056" style={absoluteLayer("calc(50% + -162px)", 328, 323, "max-content", {
            background: "#f5efe7",
            borderRadius: 12,
            ...row1,
            padding: 14,
            boxSizing: "border-box",
            gap: 12
          })}>
          <div data-figma-id="342:2057" style={fixedLayer(36, 36, {
              background: "#ffffff",
              borderRadius: 9999,
              ...row3
            })}>
            <div data-figma-id="342:2058" style={fixedLayer(16.667, 16.667, {
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              })}>
              <ClientScheduleIcon size={16.667} color="#ed6047" />
            </div>
          </div>
          <div data-figma-id="342:2060" style={fixedLayer(187, 71, col1)}>
            <div data-figma-id="342:2061" style={fixedLayer(216, 33, col1)}>
              <span data-figma-id="342:2062" style={fixedLayer(209, 33, {
                  ...font_Inter,
                  color: "#29241f",
                  whiteSpace: "normal",
                  fontSize: 16,
                  fontWeight: 500,
                  fontVariationSettings: "\"wght\" 500",
                  lineHeight: "19.364px"
                })}>
                <span style={{
                    position: "absolute",
                    top: 0,
                    whiteSpace: "pre",
                    lineHeight: "16.25px",
                    left: 0,
                    textAlign: "left"
                  }}>{"Atendemos todos los días \nde 11:00 a. m. a 9:00 p.m."}</span>
              </span>
            </div>
            <div data-figma-id="342:2063" style={fixedLayer(187, 38, {
                ...col1,
                ...layout1
              })}>
              <div data-figma-id="342:2064" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 36,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:2065" style={fixedLayer(216, 36, {
                    ...font_Inter,
                    ...text1,
                    whiteSpace: "normal",
                    fontSize: 13,
                    lineHeight: "18px"
                  })}>
                  <span style={{
                      position: "absolute",
                      top: 0,
                      whiteSpace: "pre",
                      lineHeight: "18px",
                      left: 0,
                      textAlign: "left"
                    }}>{"Whopper King \nLas Cuadras · Pasto · Nariño"}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="342:2066" style={{
            ...row1,
            minWidth: 0,
            minHeight: 44,
            padding: "9.75px 0 11.25px",
            boxSizing: "border-box",
            justifyContent: "center",
            position: "absolute",
            left: 24,
            top: 436,
            height: 44,
            right: 24
          }}>
          <span data-figma-id="342:2067" style={{
              ...font_Inter,
              ...text2,
              color: "#82776e",
              whiteSpace: "pre",
              textAlign: "center",
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"Cerrar"}
          </span>
        </div>
        <svg data-figma-id="342:2068" viewBox="0 0 144 4" preserveAspectRatio="none" style={absoluteLayer("calc(50% + -72px)", 508, 144, 4, {
            opacity: 0.9,
            borderRadius: 9999
          })}>
          <use href="#figma-vector-477" fill="#1c1917" />
        </svg>
      </div>
    </div>
  </div>
  </>;
}
export default Contactos;