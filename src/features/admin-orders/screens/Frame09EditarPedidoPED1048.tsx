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
const row1: React.CSSProperties = {
  overflow: "hidden",
  display: "flex"
};
const text2: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 800,
  lineHeight: "22px"
};
const surface3: React.CSSProperties = {
  ...surface1,
  background: "#ffffff"
};
const surface4: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #000000",
  borderRadius: 16
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
  minHeight: 52,
  padding: "12px 16px",
  boxSizing: "border-box",
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
  color: "#000000",
  fontWeight: 800
};
const font_Manrope_16c: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#786f65",
  fontWeight: 500
};
const col2: React.CSSProperties = {
  ...row1,
  padding: 17,
  boxSizing: "border-box",
  flexDirection: "column",
  gap: 12
};
const font_Manrope_16d: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text4,
  color: "#29241f"
};
const col1: React.CSSProperties = {
  ...row1,
  padding: "0 16px",
  boxSizing: "border-box",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 20
};
const row3: React.CSSProperties = {
  ...row1,
  ...layout1,
  minWidth: 0,
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
export function Frame09EditarPedidoPED1048() {
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
  <div data-figma-id="404:3376" style={rootLayer("100%", 1338, {
      background: "#f7f9fb",
      ...row1,
      minWidth: 0,
      padding: "0 20px",
      boxSizing: "border-box",
      flexDirection: "column",
      alignItems: "center",
      gap: 30
    })}>
    <div data-figma-id="788:2788" style={fixedLayer(402, 64, {
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
              {"Editar pedido"}
            </span>
          </div>
        </div>
        <div data-figma-id="752:2293" style={fixedLayer(112, 52, {
            ...surface3,
            ...row1,
            ...layout1,
            minWidth: 0,
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
    </div>
    <div data-figma-id="404:3380" style={fixedLayer(362, 208, {
        ...surface2,
        borderRadius: 18,
        ...row1,
        padding: 16,
        boxSizing: "border-box",
        flexDirection: "column",
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
            padding: "4px 8px",
            boxSizing: "border-box"
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
    <div data-figma-id="404:3382" style={fixedLayer("max-content", 592, col1)}>
      <span data-figma-id="404:3381" style={{
          ...font_Manrope,
          ...text3,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Productos del pedido"}
      </span>
      <div data-figma-id="792:2893" style={fixedLayer(362, 226, {
          ...surface4,
          ...col2
        })}>
        <div data-figma-id="792:2894" style={fixedLayer(330, "max-content", {
            ...row1,
            gap: 12
          })}>
          <div data-figma-id="792:2895" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/c0ea5837-300a-478e-aa17-77d747eaa5ff.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="792:2896" style={fixedLayer(254, 52, {
              ...row1,
              flexDirection: "column",
              gap: 4
            })}>
            <span data-figma-id="792:2897" style={{
                ...font_Manrope_16b,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Whopper"}
            </span>
            <span data-figma-id="792:2898" style={{
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
        <div data-figma-id="792:2899" style={fixedLayer(330, "max-content", {
            ...row1,
            alignItems: "center",
            gap: 12
          })}>
          <span data-figma-id="792:2900" style={{
              ...font_Manrope,
              ...text3,
              position: "relative",
              width: 142,
              flexShrink: 0
            }}>
            {"$ 10.400"}
          </span>
          <div data-figma-id="792:2901" style={fixedLayer(176, "max-content", {
              ...row1,
              alignItems: "center",
              gap: 4
            })}>
            <div data-figma-id="792:2902" style={fixedLayer(52, "max-content", {
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
            <span data-figma-id="792:2903" style={{
                ...font_Manrope,
                ...text3,
                textAlign: "center",
                position: "relative",
                width: 64,
                flexShrink: 0
              }}>
              {"1"}
            </span>
            <div data-figma-id="792:2904" style={fixedLayer(52, "max-content", {
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
        <div data-figma-id="792:2905" style={fixedLayer(330, "max-content", {
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
      <div data-figma-id="404:3395" style={fixedLayer(362, 226, {
          ...surface4,
          ...col2
        })}>
        <div data-figma-id="404:3396" style={fixedLayer(330, "max-content", {
            ...row1,
            gap: 12
          })}>
          <div data-figma-id="404:3397" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/52eb8cce-89bc-43f6-a1ce-e86ae9af90de.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3398" style={fixedLayer(254, 52, {
              ...row1,
              flexDirection: "column",
              gap: 4
            })}>
            <span data-figma-id="404:3399" style={{
                ...font_Manrope_16b,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Cow Boy"}
            </span>
            <span data-figma-id="404:3400" style={{
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
        <div data-figma-id="404:3401" style={fixedLayer(330, "max-content", {
            ...row1,
            alignItems: "center",
            gap: 12
          })}>
          <span data-figma-id="404:3402" style={{
              ...font_Manrope,
              ...text3,
              position: "relative",
              width: 142,
              flexShrink: 0
            }}>
            {"$ 52.200"}
          </span>
          <div data-figma-id="404:3403" style={fixedLayer(176, "max-content", {
              ...row1,
              alignItems: "center",
              gap: 4
            })}>
            <div data-figma-id="404:3404" style={fixedLayer(52, "max-content", {
                ...surface3,
                ...row3
              })}>
              <span data-figma-id="404:812~4" style={{
                  ...font_Manrope_16,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"−"}
              </span>
            </div>
            <span data-figma-id="404:3405" style={{
                ...font_Manrope,
                ...text3,
                textAlign: "center",
                position: "relative",
                width: 64,
                flexShrink: 0
              }}>
              {"2"}
            </span>
            <div data-figma-id="404:3406" style={fixedLayer(52, "max-content", {
                ...surface3,
                ...row3
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
        <div data-figma-id="404:3407" style={fixedLayer(330, "max-content", {
            background: "#fde7e7",
            borderRadius: 90,
            ...row3
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
      <div data-figma-id="788:2799" style={{
          ...surface1,
          background: "#2457c5",
          ...row1,
          ...layout1,
          minWidth: 362,
          gap: 10,
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
    <div data-figma-id="792:2911" style={fixedLayer(362, 98, col1)}>
      <span data-figma-id="404:3412" style={{
          ...font_Manrope,
          ...text1,
          color: "#000000",
          fontWeight: 600,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Motivo de la corrección *"}
      </span>
      <div data-figma-id="404:3413" style={fixedLayer(362, "max-content", {
          ...surface2,
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
    <div data-figma-id="404:3414" style={fixedLayer(362, 92, {
        ...row1,
        flexDirection: "column",
        gap: 14,
        borderRadius: 15
      })}>
      <div data-figma-id="404:832" style={{
          ...surface2,
          borderRadius: 18,
          ...row1,
          minWidth: 0,
          padding: 16,
          boxSizing: "border-box",
          flexDirection: "column",
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
    <div data-figma-id="404:3416" style={fixedLayer(362, "max-content", {
        ...surface1,
        background: "#2457c5",
        ...row3
      })}>
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
    <div data-figma-id="404:3417" style={fixedLayer(362, "max-content", {
        ...surface3,
        ...row3
      })}>
      <span data-figma-id="404:812~9" style={{
          ...font_Manrope_16,
          position: "relative",
          flexShrink: 0
        }}>
        {"Cancelar"}
      </span>
    </div>
  </div>
  </>;
}
export default Frame09EditarPedidoPED1048;