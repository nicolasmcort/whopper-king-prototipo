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
const font_Manrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 16
};
const text2: React.CSSProperties = {
  fontWeight: 600,
  lineHeight: "24px"
};
const surface1: React.CSSProperties = {
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const row1: React.CSSProperties = {
  overflow: "hidden",
  display: "flex"
};
const layout4: React.CSSProperties = {
  padding: 16,
  boxSizing: "border-box"
};
const layout2: React.CSSProperties = {
  padding: "20px 0",
  boxSizing: "border-box",
  flexDirection: "column"
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #5c6270",
  borderRadius: 15
};
const col1: React.CSSProperties = {
  ...row1,
  flexDirection: "column",
  gap: 8
};
const text3: React.CSSProperties = {
  color: "#000000",
  whiteSpace: "pre",
  fontSize: 20,
  fontWeight: 800,
  lineHeight: "28px"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  minHeight: 50,
  boxSizing: "border-box",
  alignItems: "center",
  gap: 8
};
const layout3: React.CSSProperties = {
  minWidth: 0,
  minHeight: 52,
  padding: "12px 16px",
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text2,
  color: "#000000"
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#000000",
  fontWeight: 700,
  lineHeight: "24px",
  textAlign: "right"
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  minHeight: 44,
  padding: "10px 6px",
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center"
};
const row3: React.CSSProperties = {
  ...row1,
  ...layout1,
  padding: 12
};
export function Frame04AgregarNuevoProducto() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-derived-54" d="M0 0L-0.636 0.636L11.364 12.636L12 12L12.636 11.364L0.636 -0.636L0 0ZM12 0L11.364 -0.636L-0.636 11.364L0 12L0.636 12.636L12.636 0.636L12 0Z" fillRule="nonzero" />
        <path id="figma-derived-280" d="M0.636 -0.636C0.285 -0.988 -0.285 -0.988 -0.636 -0.636C-0.988 -0.285 -0.988 0.285 -0.636 0.636L0 0L0.636 -0.636ZM4 4L3.364 4.636L4 5.273L4.636 4.636L4 4ZM8.636 0.636C8.988 0.285 8.988 -0.285 8.636 -0.636C8.285 -0.988 7.715 -0.988 7.364 -0.636L8 0L8.636 0.636ZM0 0L-0.636 0.636L3.364 4.636L4 4L4.636 3.364L0.636 -0.636L0 0ZM4 4L4.636 4.636L8.636 0.636L8 0L7.364 -0.636L3.364 3.364L4 4Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="752:2577" style={rootLayer("100%", 1492, {
      background: "#f7f9fb",
      ...row1,
      minWidth: 0,
      padding: "0 20px 30px",
      boxSizing: "border-box",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between"
    })}>
    <div data-figma-id="752:2578" style={fixedLayer(402, 64, {
        background: "rgba(255, 255, 255, 0.8)",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        display: "flex",
        flexDirection: "column"
      })}>
      <div data-figma-id="752:2300" style={{
          minWidth: 0,
          display: "flex",
          padding: "0 30px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="752:2303" style={fixedLayer("max-content", 28, {
            ...row1,
            maxWidth: 200,
            flexDirection: "column",
            alignItems: "center"
          })}>
          <div data-figma-id="752:2352" style={fixedLayer(200, 28, {
              ...row1,
              maxWidth: 200,
              flexDirection: "column",
              justifyContent: "center"
            })}>
            <span data-figma-id="752:2304" style={{
                ...font_Manrope,
                ...text3,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexShrink: 0
              }}>
              {"Agregar  producto"}
            </span>
          </div>
        </div>
        <div data-figma-id="752:2293" style={fixedLayer(112, 52, {
            ...surface1,
            background: "#ffffff",
            ...row1,
            ...layout3,
            gap: 5
          })}>
          <div data-figma-id="404:797" style={fixedLayer(20, 20)}>
            <svg data-figma-id="404:798" viewBox="-0.636 -0.636 13.273 13.273" preserveAspectRatio="none" style={absoluteLayer(3.364, 3.364, 13.273, 13.273)}>
              <use href="#figma-derived-54" fill="#2457c5" />
            </svg>
          </div>
          <span data-figma-id="404:799" style={{
              ...font_Manrope,
              ...text1,
              color: "#2457c5",
              fontWeight: 800,
              lineHeight: "22px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Cerrar"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="752:2669" style={fixedLayer(362, "max-content", {
        background: "#dde5f9",
        borderRadius: 15,
        ...row1,
        padding: 4,
        boxSizing: "border-box",
        gap: 4
      })}>
      <div data-figma-id="404:815" style={{
          background: "#dde5f9",
          borderRadius: 15,
          ...row2,
          position: "relative",
          height: "max-content",
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0
        }}>
        <span data-figma-id="404:816" style={{
            ...font_Manrope,
            ...text1,
            ...text2,
            color: "#5c6270",
            textAlign: "center",
            position: "relative",
            width: 147,
            flexShrink: 0
          }}>
          {"Producto Existente"}
        </span>
      </div>
      <div data-figma-id="404:817" style={{
          background: "#ffffff",
          borderRadius: 15,
          ...row2,
          position: "relative",
          height: "max-content",
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0
        }}>
        <span data-figma-id="404:818" style={{
            ...font_Manrope,
            ...text1,
            color: "#2457c5",
            fontWeight: 800,
            lineHeight: "24px",
            textAlign: "center",
            position: "relative",
            width: 126,
            flexShrink: 0
          }}>
          {"Nuevo producto"}
        </span>
      </div>
    </div>
    <div data-figma-id="752:2581" style={fixedLayer(362, 250, {
        ...row1,
        ...layout2,
        gap: 20
      })}>
      <span data-figma-id="752:2582" style={{
          ...font_Manrope,
          ...text3,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Producto"}
      </span>
      <div data-figma-id="752:2583" style={fixedLayer(362, 86, col1)}>
        <div data-figma-id="752:2682" style={fixedLayer(362, 86, col1)}>
          <span data-figma-id="752:2683" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 362,
              flexShrink: 0
            }}>
            {"Nombre del producto *"}
          </span>
          <div data-figma-id="752:2684" style={fixedLayer(362, "max-content", {
              ...surface2,
              ...row1,
              ...layout1,
              padding: "15px 12px"
            })}>
            <span data-figma-id="404:820" style={{
                ...font_Manrope_16,
                minWidth: 0,
                position: "relative",
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              {"Aceite de girasol"}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="752:2585" style={fixedLayer(362, 56, {
          background: "#eff1f5",
          borderRadius: 16,
          ...row1,
          ...layout4,
          flexDirection: "column",
          gap: 4
        })}>
        <span data-figma-id="752:2586" style={{
            ...font_Manrope,
            ...text1,
            color: "#000000",
            fontWeight: 500,
            lineHeight: "24px",
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"No hay otro producto con este nombre."}
        </span>
      </div>
    </div>
    <div data-figma-id="752:2588" style={fixedLayer(362, 626, {
        ...row1,
        ...layout2,
        gap: 20
      })}>
      <span data-figma-id="752:2589" style={{
          ...font_Manrope,
          ...text3,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Datos de recepción"}
      </span>
      <div data-figma-id="752:2590" style={fixedLayer(362, "max-content", {
          ...row1,
          gap: 12
        })}>
        <div data-figma-id="752:2591" style={fixedLayer(175, 82, col1)}>
          <span data-figma-id="752:2592" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Cantidad recibida *"}
          </span>
          <div data-figma-id="752:2593" style={fixedLayer(175, "max-content", {
              ...surface2,
              ...row3
            })}>
            <span data-figma-id="404:826" style={{
                ...font_Manrope_16,
                minWidth: 0,
                position: "relative",
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              {"5"}
            </span>
          </div>
        </div>
        <div data-figma-id="752:2594" style={fixedLayer(175, 82, col1)}>
          <span data-figma-id="752:2595" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Unidad *"}
          </span>
          <div data-figma-id="752:2596" style={fixedLayer(175, "max-content", {
              ...surface2,
              ...row3
            })}>
            <span data-figma-id="404:822" style={{
                ...font_Manrope_16,
                minWidth: 0,
                position: "relative",
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              {"Kilogramos (kg)"}
            </span>
            <div data-figma-id="404:823" style={fixedLayer(16, 16, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="404:824" viewBox="-0.988 -0.988 9.976 6.261" preserveAspectRatio="none" style={absoluteLayer("calc(25% - 0.988px)", "calc(37.5% - 0.988px)", "calc(50% + 1.976px)", "calc(25% + 2.261px)")}>
                <use href="#figma-derived-280" fill="#5c6270" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="752:2597" style={fixedLayer(362, 86, col1)}>
        <span data-figma-id="752:2598" style={{
            ...font_Manrope_16,
            position: "relative",
            width: 362,
            flexShrink: 0
          }}>
          {"Lote "}
        </span>
        <div data-figma-id="752:2599" style={fixedLayer(362, "max-content", {
            ...surface2,
            ...row1,
            ...layout1,
            padding: "15px 12px"
          })}>
          <span data-figma-id="404:820~2" style={{
              ...font_Manrope_16,
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"AAAAAAA-AAAAAAA-000000"}
          </span>
        </div>
      </div>
      <div data-figma-id="752:2600" style={fixedLayer(362, 82, col1)}>
        <span data-figma-id="752:2601" style={{
            ...font_Manrope_16,
            position: "relative",
            width: 362,
            flexShrink: 0
          }}>
          {"Proveedor *"}
        </span>
        <div data-figma-id="752:2602" style={fixedLayer(362, "max-content", {
            ...surface2,
            ...row3
          })}>
          <span data-figma-id="404:822~2" style={{
              ...font_Manrope_16,
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Seleccionar proveedor"}
          </span>
          <div data-figma-id="404:823~2" style={fixedLayer(16, 16, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="404:824~2" viewBox="-0.988 -0.988 9.976 6.261" preserveAspectRatio="none" style={absoluteLayer("calc(25% - 0.988px)", "calc(37.5% - 0.988px)", "calc(50% + 1.976px)", "calc(25% + 2.261px)")}>
              <use href="#figma-derived-280" fill="#5c6270" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="752:2603" style={fixedLayer(362, 82, col1)}>
        <span data-figma-id="752:2604" style={{
            ...font_Manrope_16,
            position: "relative",
            width: 362,
            flexShrink: 0
          }}>
          {"Recibido por *"}
        </span>
        <div data-figma-id="752:2605" style={fixedLayer(362, "max-content", {
            ...surface2,
            ...row3
          })}>
          <span data-figma-id="404:822~3" style={{
              ...font_Manrope_16,
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Ana Torres"}
          </span>
          <div data-figma-id="404:823~3" style={fixedLayer(16, 16, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="404:824~3" viewBox="-0.988 -0.988 9.976 6.261" preserveAspectRatio="none" style={absoluteLayer("calc(25% - 0.988px)", "calc(37.5% - 0.988px)", "calc(50% + 1.976px)", "calc(25% + 2.261px)")}>
              <use href="#figma-derived-280" fill="#5c6270" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="752:2606" style={fixedLayer(362, "max-content", {
          ...row1,
          gap: 12
        })}>
        <div data-figma-id="752:2607" style={fixedLayer(175, 82, col1)}>
          <span data-figma-id="752:2608" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Recibido el *"}
          </span>
          <div data-figma-id="752:2609" style={fixedLayer(175, "max-content", {
              ...surface2,
              ...row3
            })}>
            <span data-figma-id="404:828" style={{
                ...font_Manrope_16,
                minWidth: 0,
                position: "relative",
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              {"06/05/2027"}
            </span>
            <div data-figma-id="404:829" style={fixedLayer(16, 16, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="404:830" viewBox="-0.988 -0.988 9.976 6.261" preserveAspectRatio="none" style={absoluteLayer("calc(25% - 0.988px)", "calc(37.5% - 0.988px)", "calc(50% + 1.976px)", "calc(25% + 2.261px)")}>
                <use href="#figma-derived-280" fill="#5c6270" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="752:2610" style={fixedLayer(175, 82, col1)}>
          <span data-figma-id="752:2611" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Vencimiento *"}
          </span>
          <div data-figma-id="752:2612" style={fixedLayer(175, "max-content", {
              ...surface2,
              ...row3
            })}>
            <span data-figma-id="404:828~2" style={{
                ...font_Manrope_16,
                minWidth: 0,
                position: "relative",
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              {"06/05/2027"}
            </span>
            <div data-figma-id="404:829~2" style={fixedLayer(16, 16, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="404:830~2" viewBox="-0.988 -0.988 9.976 6.261" preserveAspectRatio="none" style={absoluteLayer("calc(25% - 0.988px)", "calc(37.5% - 0.988px)", "calc(50% + 1.976px)", "calc(25% + 2.261px)")}>
                <use href="#figma-derived-280" fill="#5c6270" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <span data-figma-id="752:2613" style={{
          ...font_Manrope,
          ...text1,
          color: "#5c6270",
          fontWeight: 500,
          lineHeight: "24px",
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"* Campos obligatorios."}
      </span>
    </div>
    <div data-figma-id="752:2614" style={fixedLayer(362, 132, {
        ...row1,
        ...layout2,
        gap: 14,
        borderRadius: 15
      })}>
      <div data-figma-id="404:832" style={{
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #000000",
          borderRadius: 18,
          ...row1,
          ...layout4,
          minWidth: 0,
          flexDirection: "column",
          gap: 12,
          position: "relative",
          height: 92,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:833" style={{
            ...row1,
            minWidth: 0,
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:834" style={{
              ...font_Manrope,
              ...text1,
              color: "#5c6270",
              fontWeight: 700,
              lineHeight: "24px",
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Registra"}
          </span>
          <span data-figma-id="404:835" style={{
              ...font_Manrope_16b,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Ana Torres"}
          </span>
        </div>
        <div data-figma-id="404:836" style={{
            ...row1,
            minWidth: 0,
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:837" style={{
              ...font_Manrope,
              ...text1,
              color: "#5c6270",
              fontWeight: 700,
              lineHeight: "24px",
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Fecha y hora"}
          </span>
          <span data-figma-id="404:838" style={{
              ...font_Manrope_16b,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"06 nov 2026 - 09:41"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="788:2701" style={fixedLayer(362, 164, {
        ...row1,
        ...layout2,
        alignItems: "center",
        gap: 20
      })}>
      <div data-figma-id="752:2558" style={{
          ...surface1,
          background: "#2457c5",
          ...row1,
          ...layout3,
          gap: 10,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812" style={{
            ...font_Manrope,
            ...text1,
            color: "#ffffff",
            fontWeight: 800,
            lineHeight: "22px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Guardar"}
        </span>
      </div>
      <div data-figma-id="752:2559" style={{
          ...surface1,
          background: "#ffffff",
          ...row1,
          ...layout3,
          gap: 10,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~2" style={{
            ...font_Manrope,
            ...text1,
            color: "#2457c5",
            fontWeight: 800,
            lineHeight: "22px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Cancelar"}
        </span>
      </div>
    </div>
  </div>
  </>;
}
export default Frame04AgregarNuevoProducto;