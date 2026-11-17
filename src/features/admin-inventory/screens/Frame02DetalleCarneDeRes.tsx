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
  fontWeight: 800
};
const text2: React.CSSProperties = {
  color: "#5c6270",
  lineHeight: "24px"
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #5c6270"
};
const row1: React.CSSProperties = {
  overflow: "hidden",
  display: "flex"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  justifyContent: "space-between"
};
const layout3: React.CSSProperties = {
  padding: "20px 0",
  boxSizing: "border-box"
};
const text3: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "24px"
};
const text4: React.CSSProperties = {
  color: "#000000",
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "24px",
  textAlign: "right"
};
const layout2: React.CSSProperties = {
  minWidth: 0,
  minHeight: 52,
  padding: "12px 16px",
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text2,
  whiteSpace: "pre",
  fontSize: 16,
  fontWeight: 500
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text3,
  color: "#000000"
};
const col1: React.CSSProperties = {
  ...row1,
  ...layout3,
  flexDirection: "column",
  justifyContent: "center",
  gap: 10
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  minHeight: 50,
  padding: 12,
  boxSizing: "border-box",
  alignItems: "center",
  gap: 8
};
const row3: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  minHeight: 44,
  padding: "10px 6px",
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center"
};
export function Frame02DetalleCarneDeRes() {
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
  <div data-figma-id="404:3579" style={rootLayer("100%", 1010, {
      background: "#f7f9fb",
      ...row1,
      minWidth: 0,
      minHeight: 1000,
      flexDirection: "column",
      alignItems: "center",
      gap: 30
    })}>
    <div data-figma-id="752:2332" style={fixedLayer(402, 64, {
        background: "rgba(255, 255, 255, 0.8)",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        display: "flex",
        flexDirection: "column"
      })}>
      <div data-figma-id="752:2300" style={{
          ...layout1,
          display: "flex",
          padding: "0 30px",
          boxSizing: "border-box",
          alignItems: "center",
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
                ...text1,
                color: "#000000",
                fontSize: 20,
                lineHeight: "28px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexShrink: 0
              }}>
              {"Carne de res"}
            </span>
          </div>
        </div>
        <div data-figma-id="752:2293" style={fixedLayer(112, 52, {
            background: "#ffffff",
            boxShadow: "inset 0 0 0 1px #93afeb",
            borderRadius: 90,
            ...row1,
            ...layout2,
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
              fontSize: 16,
              lineHeight: "22px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Cerrar"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="404:3580" style={fixedLayer(362, 496, col1)}>
      <div data-figma-id="404:3583" style={fixedLayer(362, 204, {
          ...surface1,
          borderRadius: 18,
          ...row1,
          padding: "16px 20px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 12
        })}>
        <div data-figma-id="404:906" style={{
            ...row1,
            ...layout1,
            alignItems: "center",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:907" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 190,
              flexShrink: 0
            }}>
            {"Stock disponible"}
          </span>
          <div data-figma-id="404:908" style={fixedLayer(113, "max-content", {
              background: "#fde7e7",
              borderRadius: 7,
              ...row1,
              padding: "4px 8px",
              boxSizing: "border-box"
            })}>
            <span data-figma-id="404:909" style={{
                ...font_Manrope,
                ...text1,
                color: "#a50d0d",
                fontSize: 16,
                lineHeight: "24px",
                position: "relative",
                flexShrink: 0
              }}>
              {"Bajo mínimo"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:910" style={fixedLayer(55, "max-content", {
            ...row1,
            alignItems: "baseline",
            gap: 8
          })}>
          <span data-figma-id="404:911" style={{
              ...font_Manrope,
              ...text1,
              color: "#000000",
              fontSize: 20,
              lineHeight: "28px",
              letterSpacing: "-1px",
              position: "relative",
              width: 29,
              flexShrink: 0
            }}>
            {"2,4"}
          </span>
          <span data-figma-id="404:912" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 18,
              flexShrink: 0
            }}>
            {"kg"}
          </span>
        </div>
        <span data-figma-id="404:913" style={{
            ...font_Manrope,
            color: "#2457c5",
            whiteSpace: "pre",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: "24px",
            position: "relative",
            width: 219,
            flexShrink: 0
          }}>
          {"Faltan 2,6 kg para el mínimo"}
        </span>
        <div data-figma-id="404:914" style={{
            background: "#2457c5",
            boxShadow: "inset 0 0 0 1px #2457c5",
            borderRadius: 90,
            ...row1,
            ...layout2,
            gap: 5,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:857" style={{
              ...font_Manrope,
              ...text1,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "22px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Agregar"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3584" style={fixedLayer(362, "max-content", {
          ...row1,
          ...layout3,
          gap: 12
        })}>
        <div data-figma-id="404:3585" style={fixedLayer(175, 82, {
            ...row1,
            flexDirection: "column",
            gap: 8
          })}>
          <span data-figma-id="404:3586" style={{
              ...font_Manrope_16b,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Stock mínimo *"}
          </span>
          <div data-figma-id="404:3587" style={fixedLayer(175, "max-content", {
              ...surface1,
              borderRadius: 15,
              ...row2
            })}>
            <span data-figma-id="404:826" style={{
                ...font_Manrope_16b,
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
        <div data-figma-id="404:3588" style={fixedLayer(175, 82, {
            ...row1,
            flexDirection: "column",
            gap: 8
          })}>
          <span data-figma-id="404:3589" style={{
              ...font_Manrope_16b,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Unidad *"}
          </span>
          <div data-figma-id="404:3590" style={fixedLayer(175, "max-content", {
              ...surface1,
              borderRadius: 15,
              ...row2
            })}>
            <span data-figma-id="404:822" style={{
                ...font_Manrope_16b,
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
      <div data-figma-id="404:3591" style={fixedLayer(362, "max-content", {
          background: "#2457c5",
          boxShadow: "inset 0 0 0 1px #93afeb",
          borderRadius: 90,
          ...row1,
          ...layout2,
          gap: 10
        })}>
        <span data-figma-id="404:812" style={{
            ...font_Manrope,
            ...text1,
            color: "#ffffff",
            fontSize: 16,
            lineHeight: "22px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Guardar alerta"}
        </span>
      </div>
      <span data-figma-id="404:3592" style={fixedLayer(362, 48, {
          ...font_Manrope,
          ...text2,
          whiteSpace: "normal",
          fontSize: 14,
          fontWeight: 500
        })}>
        <span style={{
            position: "absolute",
            top: 0,
            whiteSpace: "pre",
            lineHeight: "24px",
            left: 0,
            textAlign: "left"
          }}>{"Se guardará con tu usuario: Ana Torres. Último cambio: \nCamila Ruiz, 04 nov, 16:20."}</span>
      </span>
    </div>
    <div data-figma-id="752:2084" style={fixedLayer(362, 390, col1)}>
      <div data-figma-id="752:2165" style={fixedLayer(362, "max-content", {
          background: "#dde5f9",
          borderRadius: 15,
          ...row1,
          padding: 4,
          boxSizing: "border-box",
          gap: 4
        })}>
        <div data-figma-id="404:815" style={{
            background: "#ffffff",
            borderRadius: 15,
            ...row3,
            position: "relative",
            height: "max-content",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          <span data-figma-id="404:816" style={{
              ...font_Manrope,
              ...text3,
              color: "#2457c5",
              textAlign: "center",
              position: "relative",
              width: 147,
              flexShrink: 0
            }}>
            {"Lotes"}
          </span>
        </div>
        <div data-figma-id="404:817" style={{
            background: "#dde5f9",
            borderRadius: 15,
            ...row3,
            position: "relative",
            height: "max-content",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          <span data-figma-id="404:818" style={{
              ...font_Manrope,
              ...text1,
              ...text2,
              fontSize: 16,
              textAlign: "center",
              position: "relative",
              width: 126,
              flexShrink: 0
            }}>
            {"Movimientos"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3594" style={fixedLayer(362, 288, {
          ...surface1,
          borderRadius: 18,
          ...row1,
          padding: 20,
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 12
        })}>
        <div data-figma-id="404:916" style={{
            ...row1,
            ...layout1,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:917" style={{
              ...font_Manrope,
              ...text1,
              color: "#000000",
              fontSize: 16,
              lineHeight: "24px",
              position: "relative",
              width: 73,
              flexShrink: 0
            }}>
            {"RES-0411"}
          </span>
          <div data-figma-id="404:918" style={fixedLayer(118, "max-content", {
              background: "#dde5f9",
              borderRadius: 7,
              ...row1,
              padding: "4px 8px",
              boxSizing: "border-box"
            })}>
            <span data-figma-id="404:919" style={{
                ...font_Manrope,
                ...text1,
                color: "#2457c5",
                fontSize: 16,
                lineHeight: "24px",
                position: "relative",
                width: 102,
                flexShrink: 0
              }}>
              {"Usar primero"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:920" style={{
            ...row1,
            minWidth: 0,
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:921" style={{
              ...font_Manrope,
              ...text2,
              whiteSpace: "normal",
              fontSize: 16,
              fontWeight: 500,
              minWidth: 0,
              position: "relative",
              height: 48,
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "24px",
                left: 0,
                textAlign: "left"
              }}>{"Disponible / \nrecibido"}</span>
          </span>
          <span data-figma-id="404:922" style={{
              ...font_Manrope,
              ...text4,
              whiteSpace: "pre",
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"1,4 kg / 5 kg"}
          </span>
        </div>
        <div data-figma-id="404:923" style={{
            ...row1,
            minWidth: 0,
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:924" style={{
              ...font_Manrope,
              ...text2,
              whiteSpace: "normal",
              fontSize: 16,
              fontWeight: 500,
              minWidth: 0,
              position: "relative",
              height: 48,
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "24px",
                left: 0,
                textAlign: "left"
              }}>{"Recepción - \nvence"}</span>
          </span>
          <span data-figma-id="404:925" style={{
              ...font_Manrope,
              ...text4,
              whiteSpace: "pre",
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"04 nov - 08 nov 2026"}
          </span>
        </div>
        <div data-figma-id="404:926" style={{
            ...row1,
            minWidth: 0,
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:927" style={{
              ...font_Manrope_16,
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Proveedor"}
          </span>
          <span data-figma-id="404:928" style={{
              ...font_Manrope,
              ...text4,
              whiteSpace: "pre",
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Frigorífico Central"}
          </span>
        </div>
        <div data-figma-id="404:929" style={{
            ...row1,
            minWidth: 0,
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:930" style={{
              ...font_Manrope_16,
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Recibio"}
          </span>
          <span data-figma-id="404:931" style={fixedLayer(182, 48, {
              ...font_Manrope,
              ...text4,
              whiteSpace: "normal"
            })}>
            <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "24px",
                right: 0,
                textAlign: "right"
              }}>{"Camila Ruiz\n04 nov, 08:10"}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default Frame02DetalleCarneDeRes;