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
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text2: React.CSSProperties = {
  fontWeight: 500,
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
const text1: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "24px"
};
const layout2: React.CSSProperties = {
  padding: 16,
  boxSizing: "border-box",
  gap: 12
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const text3: React.CSSProperties = {
  color: "#000000",
  fontSize: 20,
  fontWeight: 800,
  lineHeight: "28px"
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  gap: 12
};
const layout1: React.CSSProperties = {
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
  color: "#786f65",
  fontSize: 16
};
const font_Manrope_16c: React.CSSProperties = {
  ...font_Manrope,
  color: "#000000",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "24px"
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#29241f",
  textAlign: "right"
};
function Part(p: {
  "data-figma-id": string;
  text: string;
  text2: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={{
    ...row2,
    position: "relative",
    height: "max-content",
    flexShrink: 0,
    alignSelf: "stretch"
  }}>
      <span data-figma-id="404:879" style={{
      ...font_Manrope_16,
      minWidth: 0,
      position: "relative",
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        {p.text}
      </span>
      <span data-figma-id="404:880" style={{
      ...font_Manrope_16b,
      position: "relative",
      width: 175,
      flexShrink: 0
    }}>
        {p.text2}
      </span>
    </div>;
}
export function Frame07EditarMovimientoMOV184() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-derived-54" d="M0 0L-0.636 0.636L11.364 12.636L12 12L12.636 11.364L0.636 -0.636L0 0ZM12 0L11.364 -0.636L-0.636 11.364L0 12L0.636 12.636L12.636 0.636L12 0Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="404:3628" style={rootLayer("100%", 1000, {
      background: "#f7f9fb",
      ...row1,
      minWidth: 0,
      minHeight: 1000,
      padding: "0 20px",
      boxSizing: "border-box",
      flexDirection: "column",
      alignItems: "center",
      gap: 30
    })}>
    <div data-figma-id="788:2741" style={fixedLayer(402, 64, {
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
              {"Movimientos"}
            </span>
          </div>
        </div>
        <div data-figma-id="752:2293" style={fixedLayer(112, 52, {
            ...surface2,
            ...row1,
            ...layout1,
            gap: 5
          })}>
          <div data-figma-id="404:797" style={fixedLayer(20, 20)}>
            <svg data-figma-id="404:798" viewBox="-0.636 -0.636 13.273 13.273" preserveAspectRatio="none" style={absoluteLayer(3.364, 3.364, 13.273, 13.273)}>
              <use href="#figma-derived-54" fill="#2457c5" />
            </svg>
          </div>
          <span data-figma-id="404:799" style={{
              ...font_Manrope,
              color: "#2457c5",
              fontSize: 16,
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
    <div data-figma-id="404:3632" style={fixedLayer(362, 208, {
        ...surface1,
        borderRadius: 18,
        ...row1,
        ...layout2,
        flexDirection: "column"
      })}>
      <div data-figma-id="404:873" style={{
          ...row1,
          minWidth: 0,
          justifyContent: "space-between",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:874" style={{
            ...font_Manrope,
            color: "#000000",
            fontSize: 16,
            fontWeight: 800,
            lineHeight: "24px",
            position: "relative",
            width: 140,
            flexShrink: 0
          }}>
          {"MOV-184"}
        </span>
        <div data-figma-id="404:875" style={fixedLayer(142, "max-content", {
            background: "#dde5f9",
            borderRadius: 7,
            ...row1,
            padding: "4px 8px",
            boxSizing: "border-box"
          })}>
          <span data-figma-id="404:876" style={{
              ...font_Manrope,
              color: "#2457c5",
              fontSize: 16,
              fontWeight: 800,
              lineHeight: "24px",
              position: "relative",
              width: 126,
              flexShrink: 0
            }}>
            {"Original"}
          </span>
        </div>
      </div>
      <span data-figma-id="404:877" style={{
          ...font_Manrope,
          color: "#171c26",
          fontSize: 16,
          fontWeight: 800,
          lineHeight: "24px",
          letterSpacing: "-0.5px",
          minWidth: 0,
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Carne de res  +3 kg"}
      </span>
      <Part data-figma-id="404:878" text="Lote" text2="RES-0511" />
      <Part data-figma-id="404:881" text="Recibió" text2="Luis Rojas" />
      <Part data-figma-id="404:884" text="Fecha original" text2="05 nov 2026" />
    </div>
    <div data-figma-id="792:3254" style={fixedLayer(362, 132, {
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <span data-figma-id="404:3633" style={{
          ...font_Manrope,
          ...text3,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Corregir cantidad"}
      </span>
      <div data-figma-id="404:3634" style={{
          ...row2,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:3635" style={fixedLayer(175, 84, {
            background: "#eff1f5",
            borderRadius: 14,
            ...row1,
            padding: 12,
            boxSizing: "border-box",
            flexDirection: "column",
            gap: 8
          })}>
          <span data-figma-id="404:3636" style={{
              ...font_Manrope,
              ...text2,
              color: "#5c6270",
              fontSize: 16,
              position: "relative",
              width: 151,
              flexShrink: 0
            }}>
            {"Actual"}
          </span>
          <span data-figma-id="404:3637" style={{
              ...font_Manrope,
              ...text3,
              position: "relative",
              width: 151,
              flexShrink: 0
            }}>
            {"3 kg"}
          </span>
        </div>
        <div data-figma-id="404:3638" style={fixedLayer(175, 82, {
            ...row1,
            flexDirection: "column",
            gap: 8
          })}>
          <span data-figma-id="404:3639" style={{
              ...font_Manrope_16c,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Nuevo valor (kg) *"}
          </span>
          <div data-figma-id="404:3640" style={fixedLayer(175, "max-content", {
              ...surface1,
              borderRadius: 15,
              ...row1,
              minWidth: 0,
              minHeight: 50,
              padding: 12,
              boxSizing: "border-box",
              alignItems: "center",
              gap: 8
            })}>
            <span data-figma-id="404:826" style={{
                ...font_Manrope_16c,
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
      </div>
    </div>
    <div data-figma-id="404:3641" style={fixedLayer(362, 86, {
        ...row1,
        flexDirection: "column",
        gap: 8
      })}>
      <span data-figma-id="404:3642" style={{
          ...font_Manrope_16c,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Motivo de la corrección *"}
      </span>
      <div data-figma-id="404:3643" style={fixedLayer(362, "max-content", {
          ...surface1,
          borderRadius: 15,
          ...row1,
          minWidth: 0,
          minHeight: 50,
          padding: "15px 12px",
          boxSizing: "border-box",
          alignItems: "center",
          gap: 8
        })}>
        <span data-figma-id="404:820" style={{
            ...font_Manrope_16c,
            minWidth: 0,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          {"Porque sí."}
        </span>
      </div>
    </div>
    <div data-figma-id="404:3644" style={fixedLayer(362, 92, {
        ...row1,
        flexDirection: "column",
        gap: 14,
        borderRadius: 15
      })}>
      <div data-figma-id="404:832" style={{
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #93afeb",
          borderRadius: 18,
          ...row1,
          ...layout2,
          minWidth: 0,
          flexDirection: "column",
          position: "relative",
          height: 92,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:833" style={{
            ...row2,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:834" style={{
              ...font_Manrope,
              ...text1,
              color: "#5c6270",
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Registra"}
          </span>
          <span data-figma-id="404:835" style={{
              ...font_Manrope,
              ...text1,
              color: "#000000",
              textAlign: "right",
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Ana Torres"}
          </span>
        </div>
        <div data-figma-id="404:836" style={{
            ...row2,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:837" style={{
              ...font_Manrope,
              ...text1,
              color: "#5c6270",
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Fecha y hora"}
          </span>
          <span data-figma-id="404:838" style={{
              ...font_Manrope,
              ...text1,
              color: "#000000",
              textAlign: "right",
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"06 nov 2026 - 09:41"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="808:1905" style={{
        background: "#dde5f9",
        borderRadius: 15,
        ...layout2,
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: 54,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="713:1363" style={fixedLayer(40, 40, {
          background: "#2457c5",
          borderRadius: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        })}>
        <span data-figma-id="713:1364" style={fixedLayer(40, 32, {
            ...font_Manrope,
            color: "#ffffff",
            fontSize: 22,
            fontWeight: 800,
            lineHeight: "32px",
            textAlign: "center"
          })}>
          {"i"}
        </span>
      </div>
      <div data-figma-id="713:1365" style={{
          ...row1,
          minWidth: 0,
          flexDirection: "column",
          gap: 4,
          position: "relative",
          height: 24,
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0
        }}>
        <span data-figma-id="713:1366" style={{
            ...font_Manrope,
            ...text2,
            color: "#000000",
            fontSize: 12,
            minWidth: 0,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          {"El registro original se conserva para consultar su historial."}
        </span>
      </div>
    </div>
    <div data-figma-id="788:2764" style={fixedLayer(362, 164, {
        ...row1,
        padding: "20px 0",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        gap: 20
      })}>
      <div data-figma-id="752:2558" style={{
          background: "#2457c5",
          boxShadow: "inset 0 0 0 1px #93afeb",
          borderRadius: 90,
          ...row1,
          ...layout1,
          gap: 10,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812" style={{
            ...font_Manrope,
            color: "#ffffff",
            fontSize: 16,
            fontWeight: 800,
            lineHeight: "22px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Revisar correción"}
        </span>
      </div>
      <div data-figma-id="752:2559" style={{
          ...surface2,
          ...row1,
          ...layout1,
          gap: 10,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~2" style={{
            ...font_Manrope,
            color: "#2457c5",
            fontSize: 16,
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
export default Frame07EditarMovimientoMOV184;