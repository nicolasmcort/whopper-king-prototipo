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
const row2: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  gap: 4
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const surface2: React.CSSProperties = {
  background: "#2457c5",
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const row3: React.CSSProperties = {
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
const font_Manrope_20: React.CSSProperties = {
  ...font_Manrope,
  ...text3,
  color: "#000000"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text2,
  color: "#2457c5"
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#000000",
  fontWeight: 800
};
const font_Manrope_16c: React.CSSProperties = {
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
const font_Manrope_16d: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text4,
  color: "#29241f"
};
const row4: React.CSSProperties = {
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
    ...row3,
    position: "relative",
    height: "max-content",
    flexShrink: 0,
    alignSelf: "stretch"
  }}>
      <span data-figma-id="404:879" style={{
      ...font_Manrope_16c,
      minWidth: 0,
      position: "relative",
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        {p.text}
      </span>
      <span data-figma-id="404:880" style={{
      ...font_Manrope_16d,
      position: "relative",
      width: 175,
      flexShrink: 0
    }}>
        {p.text2}
      </span>
    </div>;
}
export function Frame13PedidoProductoAAdidoBorrador() {
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
  <div data-figma-id="404:3678" style={rootLayer("100%", 1492, {
      background: "#ffffff",
      ...row1,
      minWidth: 0,
      padding: "16px 20px 24px",
      flexDirection: "column",
      gap: 30
    })}>
    <div data-figma-id="792:3259" style={fixedLayer(362, 280, {
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <div data-figma-id="404:3679" style={{
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
        <span data-figma-id="404:3680" style={{
            ...font_Manrope_20,
            position: "relative",
            width: 270,
            gridColumn: "1 / span 1",
            gridRow: "1 / span 1",
            alignSelf: "center"
          }}>
          {"Editar pedido"}
        </span>
        <div data-figma-id="404:3681" style={rootLayer(112, 52, {
            ...surface1,
            ...row1,
            ...layout1,
            gap: 5,
            gridColumn: "2 / span 1",
            gridRow: "1 / span 1",
            justifySelf: "end",
            alignSelf: "center"
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
      <div data-figma-id="404:3682" style={{
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #5c6270",
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
              ...font_Manrope_16b,
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
    <div data-figma-id="792:3261" style={fixedLayer(362, 588, {
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <span data-figma-id="404:3683" style={{
          ...font_Manrope_20,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Productos del pedido"}
      </span>
      <div data-figma-id="404:3684" style={{
          background: "#eff1f5",
          borderRadius: 16,
          ...col1,
          position: "relative",
          height: 224,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:3685" style={fixedLayer(330, "max-content", {
            overflow: "hidden",
            display: "flex",
            gap: 12
          })}>
          <div data-figma-id="404:3686" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/553afd81-a61c-434f-8170-07cfeab693c6.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3687" style={fixedLayer(254, 52, {
              ...row2,
              flexDirection: "column"
            })}>
            <span data-figma-id="404:3688" style={{
                ...font_Manrope_16b,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Whopper"}
            </span>
            <span data-figma-id="404:3689" style={{
                ...font_Manrope,
                ...text1,
                color: "#5c6270",
                fontWeight: 500,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Sencilla - $ 10.400 c/u"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:3690" style={fixedLayer(330, "max-content", {
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: 12
          })}>
          <span data-figma-id="404:3691" style={{
              ...font_Manrope_20,
              position: "relative",
              width: 142,
              flexShrink: 0
            }}>
            {"$ 10.400"}
          </span>
          <div data-figma-id="404:3692" style={fixedLayer(176, "max-content", {
              ...row2,
              alignItems: "center"
            })}>
            <div data-figma-id="404:3693" style={fixedLayer(52, "max-content", {
                ...surface1,
                ...row4
              })}>
              <span data-figma-id="404:812" style={{
                  ...font_Manrope_16,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"−"}
              </span>
            </div>
            <span data-figma-id="404:3694" style={{
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
            <div data-figma-id="404:3695" style={fixedLayer(52, "max-content", {
                ...surface1,
                ...row4
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
        <div data-figma-id="404:3696" style={fixedLayer(330, "max-content", {
            background: "#fde7e7",
            borderRadius: 90,
            ...row4
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
      <div data-figma-id="404:3697" style={{
          background: "#eff1f5",
          borderRadius: 16,
          ...col1,
          position: "relative",
          height: 224,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:3698" style={fixedLayer(330, "max-content", {
            overflow: "hidden",
            display: "flex",
            gap: 12
          })}>
          <div data-figma-id="404:3699" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/ff63b96a-e11a-477c-b5de-6daa0ea5d3ac.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3700" style={fixedLayer(254, 52, {
              ...row2,
              flexDirection: "column"
            })}>
            <span data-figma-id="404:3701" style={{
                ...font_Manrope_16b,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Cow Boy"}
            </span>
            <span data-figma-id="404:3702" style={{
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
        <div data-figma-id="404:3703" style={fixedLayer(330, "max-content", {
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: 12
          })}>
          <span data-figma-id="404:3704" style={{
              ...font_Manrope_20,
              position: "relative",
              width: 142,
              flexShrink: 0
            }}>
            {"$ 78.300"}
          </span>
          <div data-figma-id="404:3705" style={fixedLayer(176, "max-content", {
              ...row2,
              alignItems: "center"
            })}>
            <div data-figma-id="404:3706" style={fixedLayer(52, "max-content", {
                ...surface1,
                ...row4
              })}>
              <span data-figma-id="404:812~4" style={{
                  ...font_Manrope_16,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"−"}
              </span>
            </div>
            <span data-figma-id="404:3707" style={{
                ...font_Manrope,
                ...text3,
                color: "#000000",
                textAlign: "center",
                position: "relative",
                width: 64,
                flexShrink: 0
              }}>
              {"3"}
            </span>
            <div data-figma-id="404:3708" style={fixedLayer(52, "max-content", {
                ...surface1,
                ...row4
              })}>
              <span data-figma-id="404:812~5" style={{
                  ...font_Manrope_16,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"+"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="404:3709" style={fixedLayer(330, "max-content", {
            background: "#fde7e7",
            borderRadius: 90,
            ...row4
          })}>
          <span data-figma-id="404:812~6" style={{
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
      <div data-figma-id="404:3710" style={{
          ...surface2,
          ...row4,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~7" style={{
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
    <div data-figma-id="404:3711" style={fixedLayer(362, 92, {
        background: "#dde5f9",
        borderRadius: 16,
        ...row1,
        ...layout2,
        gap: 8
      })}>
      <span data-figma-id="404:3712" style={{
          ...font_Manrope,
          ...text1,
          color: "#2457c5",
          fontWeight: 500,
          position: "relative",
          width: 330,
          flexShrink: 0
        }}>
        {"4 productos - Total actualizado"}
      </span>
      <span data-figma-id="404:3713" style={{
          ...font_Manrope,
          ...text3,
          color: "#2457c5",
          position: "relative",
          width: 330,
          flexShrink: 0
        }}>
        {"$ 88.700"}
      </span>
    </div>
    <div data-figma-id="792:3281" style={fixedLayer(362, 86, {
        display: "flex",
        flexDirection: "column",
        gap: 8
      })}>
      <span data-figma-id="404:3714" style={{
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
      <div data-figma-id="404:3715" style={{
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #5c6270",
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
    <div data-figma-id="404:3716" style={fixedLayer(362, 92, {
        boxShadow: "inset 0 0 0 1px #858993",
        borderRadius: 15,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 14
      })}>
      <div data-figma-id="404:832" style={{
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #93afeb",
          borderRadius: 18,
          ...col1,
          position: "relative",
          height: 92,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:833" style={{
            ...row3,
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
            ...row3,
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
    <div data-figma-id="792:3273" style={fixedLayer(362, 164, {
        ...row1,
        padding: "20px 0",
        flexDirection: "column",
        alignItems: "center",
        gap: 20
      })}>
      <div data-figma-id="752:2558" style={{
          ...surface2,
          ...row4,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~8" style={{
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
          ...surface1,
          ...row4,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="404:812~9" style={{
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
export default Frame13PedidoProductoAAdidoBorrador;