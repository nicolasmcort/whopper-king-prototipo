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
const text1: React.CSSProperties = {
  fontSize: 16,
  lineHeight: "24px"
};
const text4: React.CSSProperties = {
  fontWeight: 700,
  textAlign: "right"
};
const surface1: React.CSSProperties = {
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #5c6270"
};
const layout2: React.CSSProperties = {
  padding: 16,
  flexDirection: "column"
};
const text2: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 800,
  lineHeight: "22px"
};
const text3: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 800,
  lineHeight: "28px"
};
const row1: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  boxSizing: "border-box"
};
const surface3: React.CSSProperties = {
  ...surface1,
  background: "#ffffff"
};
const row2: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden",
  display: "flex",
  gap: 12
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  minHeight: 52,
  padding: "12px 16px",
  alignItems: "center",
  justifyContent: "center"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text2,
  color: "#2457c5"
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#786f65",
  fontWeight: 500
};
const col1: React.CSSProperties = {
  ...row1,
  ...layout2,
  minWidth: 0,
  gap: 12
};
const font_Manrope_16c: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text4,
  color: "#29241f"
};
const row3: React.CSSProperties = {
  ...row1,
  ...layout1,
  gap: 10
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
export function Frame12PedidoProductoQuitadoBorrador() {
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
  <div data-figma-id="404:3649" style={rootLayer("100%", 1248, {
      background: "#ffffff",
      ...row1,
      minWidth: 0,
      padding: "16px 20px 24px",
      flexDirection: "column",
      gap: 30
    })}>
    <div data-figma-id="792:3258" style={fixedLayer(362, 280, {
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <div data-figma-id="404:3650" style={{
          minWidth: 0,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "fit-content(100%)",
          columnGap: 12,
          rowGap: 12,
          gridAutoRows: "max-content",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:3651" style={{
            ...font_Manrope,
            ...text3,
            color: "#000000",
            position: "relative",
            width: 270,
            gridColumn: "1 / span 1",
            gridRow: "1 / span 1",
            alignSelf: "center"
          }}>
          {"Editar pedido"}
        </span>
        <div data-figma-id="404:3652" style={rootLayer(112, 52, {
            ...surface3,
            ...row1,
            ...layout1,
            gap: 5,
            gridColumn: "2 / span 1",
            gridRow: "1 / span 1",
            justifySelf: "end"
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
      <div data-figma-id="404:3653" style={{
          ...surface2,
          borderRadius: 18,
          ...col1,
          position: "relative",
          height: 208,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:873" style={{
            minWidth: 0,
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="404:874" style={{
              ...font_Manrope,
              ...text1,
              color: "#000000",
              fontWeight: 800,
              position: "relative",
              width: 140,
              flexShrink: 0
            }}>
            {"#PED-1048"}
          </span>
          <div data-figma-id="404:875" style={fixedLayer(142, "max-content", {
              background: "#dde5f9",
              borderRadius: 7,
              ...row1,
              padding: "4px 8px"
            })}>
            <span data-figma-id="404:876" style={{
                ...font_Manrope,
                ...text1,
                color: "#2457c5",
                fontWeight: 800,
                position: "relative",
                width: 126,
                flexShrink: 0
              }}>
              {"Pedido original"}
            </span>
          </div>
        </div>
        <span data-figma-id="404:877" style={{
            ...font_Manrope,
            ...text1,
            color: "#171c26",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            minWidth: 0,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          {"2 menús del día - Mesa 04"}
        </span>
        <Part data-figma-id="404:878" text="Total original" text2="$ 44.000" />
        <Part data-figma-id="404:881" text="Mesa" text2="04" />
        <Part data-figma-id="404:884" text="Fecha original" text2="05 nov 2026" />
      </div>
    </div>
    <div data-figma-id="792:3260" style={fixedLayer(362, 344, {
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <span data-figma-id="404:3654" style={{
          ...font_Manrope,
          ...text3,
          color: "#000000",
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Productos del pedido"}
      </span>
      <div data-figma-id="404:3655" style={{
          background: "#eff1f5",
          borderRadius: 16,
          ...col1,
          position: "relative",
          height: 224,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:3656" style={fixedLayer(330, "max-content", {
            overflow: "hidden",
            display: "flex",
            gap: 12
          })}>
          <div data-figma-id="404:3657" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/c19875b8-d2b4-4b19-8a01-6aab4f9c1b28.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3658" style={fixedLayer(254, 52, {
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 4
            })}>
            <span data-figma-id="404:3659" style={{
                ...font_Manrope,
                ...text1,
                color: "#000000",
                fontWeight: 800,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Cow Boy"}
            </span>
            <span data-figma-id="404:3660" style={{
                ...font_Manrope,
                ...text1,
                color: "#5c6270",
                fontWeight: 500,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Sencilla - $ 26.100 c/u"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:3661" style={fixedLayer(330, "max-content", {
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: 12
          })}>
          <span data-figma-id="404:3662" style={{
              ...font_Manrope,
              ...text3,
              color: "#000000",
              position: "relative",
              width: 142,
              flexShrink: 0
            }}>
            {"$ 52.200"}
          </span>
          <div data-figma-id="404:3663" style={fixedLayer(176, "max-content", {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              gap: 4
            })}>
            <div data-figma-id="404:3664" style={fixedLayer(52, "max-content", {
                ...surface3,
                ...row3
              })}>
              <span data-figma-id="404:812" style={{
                  ...font_Manrope_16,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"−"}
              </span>
            </div>
            <span data-figma-id="404:3665" style={{
                ...font_Manrope,
                ...text3,
                color: "#000000",
                textAlign: "center",
                position: "relative",
                width: 64,
                flexShrink: 0
              }}>
              {"2"}
            </span>
            <div data-figma-id="404:3666" style={fixedLayer(52, "max-content", {
                ...surface3,
                ...row3
              })}>
              <span data-figma-id="404:812~2" style={{
                  ...font_Manrope_16,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"+"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="404:3667" style={fixedLayer(330, "max-content", {
            background: "#fde7e7",
            borderRadius: 90,
            ...row3
          })}>
          <span data-figma-id="404:812~3" style={{
              ...font_Manrope,
              ...text2,
              color: "#a50d0d",
              position: "relative",
              flexShrink: 0
            }}>
            {"Quitar producto"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3668" style={{
          ...surface1,
          background: "#2457c5",
          ...row3,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~4" style={{
            ...font_Manrope,
            ...text2,
            color: "#ffffff",
            position: "relative",
            flexShrink: 0
          }}>
          {"Agregar producto"}
        </span>
      </div>
    </div>
    <div data-figma-id="404:3669" style={fixedLayer(362, 92, {
        background: "#dde5f9",
        borderRadius: 16,
        ...row1,
        ...layout2,
        gap: 8
      })}>
      <span data-figma-id="404:3670" style={{
          ...font_Manrope,
          ...text1,
          color: "#2457c5",
          fontWeight: 500,
          position: "relative",
          width: 330,
          flexShrink: 0
        }}>
        {"2 productos - Total actualizado"}
      </span>
      <span data-figma-id="404:3671" style={{
          ...font_Manrope,
          ...text3,
          color: "#2457c5",
          position: "relative",
          width: 330,
          flexShrink: 0
        }}>
        {"$ 52.200"}
      </span>
    </div>
    <div data-figma-id="792:3262" style={fixedLayer(362, 86, {
        display: "flex",
        flexDirection: "column",
        gap: 8
      })}>
      <span data-figma-id="404:3672" style={{
          ...font_Manrope,
          ...text1,
          color: "#000000",
          fontWeight: 600,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Motivo de la corrección *"}
      </span>
      <div data-figma-id="404:3673" style={{
          ...surface2,
          borderRadius: 15,
          ...row1,
          minWidth: 0,
          minHeight: 50,
          padding: "15px 12px",
          alignItems: "center",
          gap: 8,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:820" style={{
            ...font_Manrope,
            ...text1,
            color: "#000000",
            fontWeight: 600,
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
    <div data-figma-id="404:3674" style={fixedLayer(362, 92, {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        borderRadius: 15
      })}>
      <div data-figma-id="404:832" style={{
          ...surface2,
          borderRadius: 18,
          ...col1,
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
              ...text4,
              color: "#000000",
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
              ...text4,
              color: "#000000",
              position: "relative",
              width: 175,
              flexShrink: 0
            }}>
            {"06 nov 2026 - 09:41"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="792:3263" style={fixedLayer(362, 164, {
        ...row1,
        padding: "20px 0",
        flexDirection: "column",
        alignItems: "center",
        gap: 20
      })}>
      <div data-figma-id="752:2558" style={{
          ...surface1,
          background: "#2457c5",
          ...row3,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~5" style={{
            ...font_Manrope,
            ...text2,
            color: "#ffffff",
            position: "relative",
            flexShrink: 0
          }}>
          {"Revisar pedido"}
        </span>
      </div>
      <div data-figma-id="752:2559" style={{
          ...surface3,
          ...row3,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~6" style={{
            ...font_Manrope_16,
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
export default Frame12PedidoProductoQuitadoBorrador;