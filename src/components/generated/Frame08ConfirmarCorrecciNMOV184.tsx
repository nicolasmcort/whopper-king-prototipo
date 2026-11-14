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
  fontSize: 16,
  lineHeight: "24px"
};
const text2: React.CSSProperties = {
  color: "#000000",
  whiteSpace: "pre"
};
const text5: React.CSSProperties = {
  fontWeight: 700,
  textAlign: "right"
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #5c6270"
};
const surface2: React.CSSProperties = {
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const row1: React.CSSProperties = {
  overflow: "hidden",
  display: "flex"
};
const text3: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 800,
  lineHeight: "28px"
};
const layout2: React.CSSProperties = {
  padding: 16,
  boxSizing: "border-box",
  flexDirection: "column"
};
const layout3: React.CSSProperties = {
  boxSizing: "border-box",
  flexDirection: "column",
  gap: 20
};
const surface3: React.CSSProperties = {
  ...surface2,
  background: "#ffffff"
};
const text4: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 16,
  fontWeight: 800,
  lineHeight: "22px"
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
  ...text4,
  color: "#2457c5"
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#786f65",
  whiteSpace: "pre",
  fontWeight: 500
};
const font_Manrope_16d: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#5c6270",
  whiteSpace: "pre",
  fontWeight: 500
};
const font_Manrope_16e: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text2,
  fontWeight: 600
};
const font_Manrope_16c: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text5,
  color: "#29241f",
  whiteSpace: "pre"
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
      ...font_Manrope_16b,
      minWidth: 0,
      position: "relative",
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        {p.text}
      </span>
      <span data-figma-id="404:880" style={{
      ...font_Manrope_16c,
      position: "relative",
      width: 175,
      flexShrink: 0
    }}>
        {p.text2}
      </span>
    </div>;
}
export function Frame08ConfirmarCorrecciNMOV184() {
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
  <div data-figma-id="404:3476" style={rootLayer(402, 1000, {
      background: "#ffffff",
      borderRadius: 15,
      overflow: "hidden"
    })}>
    <div data-figma-id="404:3477" style={absoluteLayer(0, 0, 402, 1000, {
        background: "#ffffff",
        ...row1,
        ...layout3,
        minWidth: 0,
        minHeight: 1000,
        padding: "16px 20px 24px"
      })}>
      <div data-figma-id="404:3478" style={fixedLayer(362, "max-content", {
          ...row1,
          alignItems: "center",
          gap: 12
        })}>
        <span data-figma-id="404:3479" style={{
            ...font_Manrope,
            ...text2,
            ...text3,
            position: "relative",
            width: 238,
            flexShrink: 0
          }}>
          {"Editar movimiento"}
        </span>
        <div data-figma-id="404:3480" style={fixedLayer(112, 52, {
            ...surface3,
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
              ...font_Manrope_16,
              position: "relative",
              flexShrink: 0
            }}>
            {"Cerrar"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3481" style={fixedLayer(362, 208, {
          ...surface1,
          borderRadius: 18,
          ...row1,
          ...layout2,
          gap: 12
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
              ...text1,
              ...text2,
              fontWeight: 800,
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
                ...text1,
                color: "#2457c5",
                whiteSpace: "pre",
                fontWeight: 800,
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
            ...text1,
            color: "#171c26",
            whiteSpace: "pre",
            fontWeight: 800,
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
      <span data-figma-id="404:3482" style={{
          ...font_Manrope,
          ...text2,
          ...text3,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Corregir cantidad"}
      </span>
      <div data-figma-id="404:3483" style={fixedLayer(362, "max-content", {
          ...row1,
          gap: 12
        })}>
        <div data-figma-id="404:3484" style={fixedLayer(175, 84, {
            background: "#eff1f5",
            borderRadius: 14,
            ...row1,
            padding: 12,
            boxSizing: "border-box",
            flexDirection: "column",
            gap: 8
          })}>
          <span data-figma-id="404:3485" style={{
              ...font_Manrope_16d,
              position: "relative",
              width: 151,
              flexShrink: 0
            }}>
            {"Actual"}
          </span>
          <span data-figma-id="404:3486" style={{
              ...font_Manrope,
              ...text2,
              ...text3,
              position: "relative",
              width: 151,
              flexShrink: 0
            }}>
            {"3 kg"}
          </span>
        </div>
        <div data-figma-id="404:3487" style={fixedLayer(175, 82, {
            ...row1,
            flexDirection: "column",
            gap: 8
          })}>
          <span data-figma-id="404:3488" style={{
              ...font_Manrope_16e,
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"Nuevo valor (kg) *"}
          </span>
          <div data-figma-id="404:3489" style={fixedLayer(175, "max-content", {
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
                ...font_Manrope_16e,
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
      <div data-figma-id="404:3490" style={fixedLayer(362, 86, {
          ...row1,
          flexDirection: "column",
          gap: 8
        })}>
        <span data-figma-id="404:3491" style={{
            ...font_Manrope_16e,
            position: "relative",
            width: 362,
            flexShrink: 0
          }}>
          {"Motivo de la corrección *"}
        </span>
        <div data-figma-id="404:3492" style={fixedLayer(362, "max-content", {
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
              ...font_Manrope_16e,
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
      <div data-figma-id="404:3493" style={fixedLayer(362, 92, {
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
            gap: 12,
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
                whiteSpace: "pre",
                fontWeight: 700,
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
                ...text2,
                ...text5,
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
                whiteSpace: "pre",
                fontWeight: 700,
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
                ...text2,
                ...text5,
                position: "relative",
                width: 175,
                flexShrink: 0
              }}>
              {"06 nov 2026 · 09:41"}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="404:3494" style={fixedLayer(362, 80, {
          background: "#dde5f9",
          borderRadius: 16,
          ...row1,
          ...layout2,
          gap: 8
        })}>
        <span data-figma-id="404:3495" style={fixedLayer(330, 48, {
            ...font_Manrope,
            ...text1,
            color: "#2457c5",
            whiteSpace: "normal",
            fontWeight: 500
          })}>
          <span style={{
              position: "absolute",
              top: 0,
              whiteSpace: "pre",
              lineHeight: "24px",
              left: 0,
              textAlign: "left"
            }}>{"El valor original se conserva. La corrección \nquedará vinculada a tu usuario."}</span>
        </span>
      </div>
      <div data-figma-id="404:3496" style={fixedLayer(362, "max-content", {
          ...surface2,
          background: "#2457c5",
          ...row1,
          ...layout1,
          gap: 10
        })}>
        <span data-figma-id="404:812" style={{
            ...font_Manrope,
            ...text4,
            color: "#ffffff",
            position: "relative",
            flexShrink: 0
          }}>
          {"Revisar modificación"}
        </span>
      </div>
      <div data-figma-id="404:3497" style={fixedLayer(362, "max-content", {
          ...surface3,
          ...row1,
          ...layout1,
          gap: 10
        })}>
        <span data-figma-id="404:812~2" style={{
            ...font_Manrope_16,
            position: "relative",
            flexShrink: 0
          }}>
          {"Cancelar"}
        </span>
      </div>
    </div>
    <div data-figma-id="404:3498" style={absoluteLayer(0, 0, 402, 1005, {
        background: "rgba(0, 0, 0, 0.48)"
      })} />
    <div data-figma-id="404:3499" style={{
        background: "#ffffff",
        borderRadius: "24px 24px 0 0",
        ...row1,
        ...layout3,
        padding: 20,
        position: "absolute",
        left: "calc(50% + -201px)",
        width: 402,
        height: 560,
        bottom: 0
      }}>
      <div data-figma-id="404:3500" style={fixedLayer(362, "max-content", {
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "fit-content(100%)",
          columnGap: 12,
          rowGap: 12,
          gridAutoRows: "max-content"
        })}>
        <span data-figma-id="404:3501" style={{
            ...font_Manrope,
            ...text2,
            ...text3,
            position: "relative",
            width: 270,
            gridColumn: "1 / span 1",
            gridRow: "1 / span 1",
            alignSelf: "center"
          }}>
          {"¿Guardar corrección?"}
        </span>
        <div data-figma-id="404:3502" style={rootLayer(112, 52, {
            ...surface3,
            ...row1,
            ...layout1,
            gap: 5,
            gridColumn: "2 / span 1",
            gridRow: "1 / span 1",
            justifySelf: "end"
          })}>
          <div data-figma-id="404:797~2" style={fixedLayer(20, 20)}>
            <svg data-figma-id="404:798~2" viewBox="-0.636 -0.636 13.273 13.273" preserveAspectRatio="none" style={absoluteLayer(3.364, 3.364, 13.273, 13.273)}>
              <use href="#figma-derived-54" fill="#2457c5" />
            </svg>
          </div>
          <span data-figma-id="404:799~2" style={{
              ...font_Manrope_16,
              position: "relative",
              flexShrink: 0
            }}>
            {"Cerrar"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3503" style={fixedLayer(362, 152, {
          background: "#eff1f5",
          borderRadius: 16,
          ...row1,
          ...layout2,
          gap: 8
        })}>
        <span data-figma-id="404:3504" style={{
            ...font_Manrope,
            ...text1,
            ...text2,
            fontWeight: 800,
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"MOV-184 - Carne de res"}
        </span>
        <div data-figma-id="404:3505" style={fixedLayer(330, "max-content", {
            ...row1,
            gap: 12
          })}>
          <div data-figma-id="404:3506" style={fixedLayer(159, 56, {
              ...row1,
              flexDirection: "column",
              gap: 4
            })}>
            <span data-figma-id="404:3507" style={{
                ...font_Manrope_16d,
                position: "relative",
                width: 159,
                flexShrink: 0
              }}>
              {"Original"}
            </span>
            <span data-figma-id="404:3508" style={{
                ...font_Manrope,
                ...text2,
                ...text3,
                position: "relative",
                width: 159,
                flexShrink: 0
              }}>
              {"3 kg"}
            </span>
          </div>
          <div data-figma-id="404:3509" style={fixedLayer(159, 56, {
              ...row1,
              flexDirection: "column",
              gap: 4
            })}>
            <span data-figma-id="404:3510" style={{
                ...font_Manrope_16d,
                position: "relative",
                width: 159,
                flexShrink: 0
              }}>
              {"Nuevo valor"}
            </span>
            <span data-figma-id="404:3511" style={{
                ...font_Manrope,
                ...text3,
                color: "#2457c5",
                whiteSpace: "pre",
                position: "relative",
                width: 159,
                flexShrink: 0
              }}>
              {"5 kg"}
            </span>
          </div>
        </div>
        <span data-figma-id="404:3512" style={{
            ...font_Manrope,
            ...text1,
            ...text2,
            fontWeight: 500,
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"Diferencia: +2 kg"}
        </span>
      </div>
      <span data-figma-id="404:3513" style={{
          ...font_Manrope,
          ...text1,
          ...text2,
          fontWeight: 500,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Motivo: Porque sí."}
      </span>
      <span data-figma-id="404:3514" style={fixedLayer(362, 48, {
          ...font_Manrope,
          ...text1,
          color: "#5c6270",
          whiteSpace: "normal",
          fontWeight: 500
        })}>
        <span style={{
            position: "absolute",
            top: 0,
            whiteSpace: "pre",
            lineHeight: "24px",
            left: 0,
            textAlign: "left"
          }}>{"Se conservará el valor original y se registrará la \ncorrección con Ana Torres - 06 nov 2026, 09:41."}</span>
      </span>
      <div data-figma-id="788:2771" style={fixedLayer(362, 164, {
          ...row1,
          ...layout3,
          padding: "20px 0",
          alignItems: "center"
        })}>
        <div data-figma-id="752:2558" style={{
            ...surface2,
            background: "#2457c5",
            ...row1,
            ...layout1,
            gap: 10,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:812~3" style={{
              ...font_Manrope,
              ...text4,
              color: "#ffffff",
              position: "relative",
              flexShrink: 0
            }}>
            {"Confirmar modificación"}
          </span>
        </div>
        <div data-figma-id="752:2559" style={{
            ...surface3,
            ...row1,
            ...layout1,
            gap: 10,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:812~4" style={{
              ...font_Manrope_16,
              position: "relative",
              flexShrink: 0
            }}>
            {"Cancelar"}
          </span>
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default Frame08ConfirmarCorrecciNMOV184;