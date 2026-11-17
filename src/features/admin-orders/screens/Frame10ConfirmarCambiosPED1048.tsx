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
  whiteSpace: "pre",
  fontWeight: 800
};
const text3: React.CSSProperties = {
  fontSize: 16,
  lineHeight: "22px"
};
const text4: React.CSSProperties = {
  fontSize: 20,
  lineHeight: "28px"
};
const text5: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 700
};
const surface1: React.CSSProperties = {
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const row1: React.CSSProperties = {
  overflow: "hidden",
  display: "flex"
};
const layout2: React.CSSProperties = {
  padding: 16,
  boxSizing: "border-box",
  flexDirection: "column"
};
const surface2: React.CSSProperties = {
  ...surface1,
  background: "#ffffff"
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
const font_Manrope_20: React.CSSProperties = {
  ...font_Manrope,
  ...text2,
  ...text4,
  color: "#000000"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text2,
  ...text3,
  color: "#2457c5"
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text2,
  color: "#000000"
};
const font_Manrope_16c: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#786f65",
  whiteSpace: "pre",
  fontWeight: 500
};
const font_Manrope_16e: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#5c6270",
  whiteSpace: "pre",
  fontWeight: 500
};
const font_Manrope_16d: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text5,
  color: "#29241f",
  textAlign: "right"
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
export function Frame10ConfirmarCambiosPED1048() {
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
  <div data-figma-id="404:3418" style={rootLayer(402, 1000, {
      background: "#ffffff",
      overflow: "hidden"
    })}>
    <div data-figma-id="404:3419" style={absoluteLayer(0, 0, 402, 1482, {
        background: "#ffffff",
        ...row1,
        padding: "16px 20px 24px",
        boxSizing: "border-box",
        flexDirection: "column",
        gap: 20
      })}>
      <div data-figma-id="404:3420" style={fixedLayer(362, "max-content", {
          ...row1,
          alignItems: "center",
          gap: 12
        })}>
        <span data-figma-id="404:3421" style={{
            ...font_Manrope_20,
            position: "relative",
            width: 237,
            flexShrink: 0
          }}>
          {"Editar pedido"}
        </span>
        <div data-figma-id="404:3422" style={fixedLayer(112, 52, {
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
              ...font_Manrope_16,
              position: "relative",
              flexShrink: 0
            }}>
            {"Cerrar"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3423" style={fixedLayer(362, 208, {
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #5c6270",
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
                ...text2,
                color: "#2457c5",
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
            ...text2,
            color: "#171c26",
            letterSpacing: "-0.5px",
            minWidth: 0,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          {"2 menús del día · Mesa 04"}
        </span>
        <Part data-figma-id="404:878" text="Total original" text2="$ 44.000" />
        <Part data-figma-id="404:881" text="Mesa" text2="04" />
        <Part data-figma-id="404:884" text="Fecha original" text2="05 nov 2026" />
      </div>
      <span data-figma-id="404:3424" style={{
          ...font_Manrope_20,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Productos del pedido"}
      </span>
      <div data-figma-id="404:3425" style={fixedLayer(362, 224, {
          background: "#eff1f5",
          borderRadius: 16,
          ...row1,
          ...layout2,
          gap: 12
        })}>
        <div data-figma-id="404:3426" style={fixedLayer(330, "max-content", {
            ...row1,
            gap: 12
          })}>
          <div data-figma-id="404:3427" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/b9d4d501-effa-4f5a-a88f-dcc27a7e7dd4.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3428" style={fixedLayer(254, 52, {
              ...row1,
              flexDirection: "column",
              gap: 4
            })}>
            <span data-figma-id="404:3429" style={{
                ...font_Manrope_16b,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Whopper"}
            </span>
            <span data-figma-id="404:3430" style={{
                ...font_Manrope_16e,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Sencilla · $ 10.400 c/u"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:3431" style={fixedLayer(330, "max-content", {
            ...row1,
            alignItems: "center",
            gap: 12
          })}>
          <span data-figma-id="404:3432" style={{
              ...font_Manrope_20,
              position: "relative",
              width: 142,
              flexShrink: 0
            }}>
            {"$ 10.400"}
          </span>
          <div data-figma-id="404:3433" style={fixedLayer(176, "max-content", {
              ...row1,
              alignItems: "center",
              gap: 4
            })}>
            <div data-figma-id="404:3434" style={fixedLayer(52, "max-content", {
                ...surface2,
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
            <span data-figma-id="404:3435" style={{
                ...font_Manrope,
                ...text2,
                ...text4,
                color: "#000000",
                textAlign: "center",
                position: "relative",
                width: 64,
                flexShrink: 0
              }}>
              {"1"}
            </span>
            <div data-figma-id="404:3436" style={fixedLayer(52, "max-content", {
                ...surface2,
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
        <div data-figma-id="404:3437" style={fixedLayer(330, "max-content", {
            ...surface2,
            ...row3
          })}>
          <span data-figma-id="404:812~3" style={{
              ...font_Manrope,
              ...text2,
              ...text3,
              color: "#a50d0d",
              position: "relative",
              flexShrink: 0
            }}>
            {"Quitar producto"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3438" style={fixedLayer(362, 224, {
          background: "#eff1f5",
          borderRadius: 16,
          ...row1,
          ...layout2,
          gap: 12
        })}>
        <div data-figma-id="404:3439" style={fixedLayer(330, "max-content", {
            ...row1,
            gap: 12
          })}>
          <div data-figma-id="404:3440" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/79f605f7-7ee6-4843-aebc-2d94c9fc0873.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3441" style={fixedLayer(254, 52, {
              ...row1,
              flexDirection: "column",
              gap: 4
            })}>
            <span data-figma-id="404:3442" style={{
                ...font_Manrope_16b,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Cow Boy"}
            </span>
            <span data-figma-id="404:3443" style={{
                ...font_Manrope_16e,
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Sencilla · $ 26.100 c/u"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:3444" style={fixedLayer(330, "max-content", {
            ...row1,
            alignItems: "center",
            gap: 12
          })}>
          <span data-figma-id="404:3445" style={{
              ...font_Manrope_20,
              position: "relative",
              width: 142,
              flexShrink: 0
            }}>
            {"$ 52.200"}
          </span>
          <div data-figma-id="404:3446" style={fixedLayer(176, "max-content", {
              ...row1,
              alignItems: "center",
              gap: 4
            })}>
            <div data-figma-id="404:3447" style={fixedLayer(52, "max-content", {
                ...surface2,
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
            <span data-figma-id="404:3448" style={{
                ...font_Manrope,
                ...text2,
                ...text4,
                color: "#000000",
                textAlign: "center",
                position: "relative",
                width: 64,
                flexShrink: 0
              }}>
              {"2"}
            </span>
            <div data-figma-id="404:3449" style={fixedLayer(52, "max-content", {
                ...surface2,
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
        <div data-figma-id="404:3450" style={fixedLayer(330, "max-content", {
            ...surface2,
            ...row3
          })}>
          <span data-figma-id="404:812~6" style={{
              ...font_Manrope,
              ...text2,
              ...text3,
              color: "#a50d0d",
              position: "relative",
              flexShrink: 0
            }}>
            {"Quitar producto"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3451" style={fixedLayer(362, "max-content", {
          ...surface2,
          ...row3
        })}>
        <span data-figma-id="404:812~7" style={{
            ...font_Manrope_16,
            position: "relative",
            flexShrink: 0
          }}>
          {"Añadir producto"}
        </span>
      </div>
      <div data-figma-id="404:3452" style={fixedLayer(362, 92, {
          background: "#dde5f9",
          borderRadius: 16,
          ...row1,
          ...layout2,
          gap: 8
        })}>
        <span data-figma-id="404:3453" style={{
            ...font_Manrope,
            ...text1,
            color: "#2457c5",
            whiteSpace: "pre",
            fontWeight: 500,
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"3 productos · Total actualizado"}
        </span>
        <span data-figma-id="404:3454" style={{
            ...font_Manrope,
            ...text2,
            ...text4,
            color: "#2457c5",
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"$ 62.600"}
        </span>
      </div>
      <span data-figma-id="404:3455" style={{
          ...font_Manrope,
          ...text1,
          color: "#000000",
          whiteSpace: "pre",
          fontWeight: 600,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Motivo de la corrección *"}
      </span>
      <div data-figma-id="404:3456" style={fixedLayer(362, "max-content", {
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #5c6270",
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
            whiteSpace: "pre",
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
      <div data-figma-id="404:3457" style={fixedLayer(362, 92, {
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
                ...text5,
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
                ...text5,
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
                ...text5,
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
                ...text5,
                color: "#000000",
                textAlign: "right",
                position: "relative",
                width: 175,
                flexShrink: 0
              }}>
              {"06 nov 2026 · 09:41"}
            </span>
          </div>
        </div>
      </div>
      <span data-figma-id="404:3458" style={fixedLayer(362, 48, {
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
          }}>{"Los cambios aún no están guardados. Podrás \nrevisarlos antes de confirmar."}</span>
      </span>
      <div data-figma-id="404:3459" style={fixedLayer(362, "max-content", {
          ...surface1,
          background: "#2457c5",
          ...row3
        })}>
        <span data-figma-id="404:812~8" style={{
            ...font_Manrope,
            ...text2,
            ...text3,
            color: "#ffffff",
            position: "relative",
            flexShrink: 0
          }}>
          {"Revisar pedido"}
        </span>
      </div>
      <div data-figma-id="404:3460" style={fixedLayer(362, "max-content", {
          ...surface2,
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
    <div data-figma-id="404:3461" style={absoluteLayer(0, 0, 402, 1000, {
        background: "rgba(0, 0, 0, 0.48)"
      })} />
    <div data-figma-id="404:3462" style={{
        background: "#ffffff",
        borderRadius: "24px 24px 0 0",
        ...row1,
        padding: 20,
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 20,
        position: "absolute",
        left: "calc(50% + -201px)",
        width: 402,
        height: 580,
        bottom: 0
      }}>
      <div data-figma-id="404:3463" style={fixedLayer(362, "max-content", {
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "fit-content(100%)",
          columnGap: 12,
          rowGap: 12,
          gridAutoRows: "max-content"
        })}>
        <span data-figma-id="404:3464" style={{
            ...font_Manrope_20,
            position: "relative",
            width: 270,
            gridColumn: "1 / span 1",
            gridRow: "1 / span 1",
            alignSelf: "center"
          }}>
          {"¿Confirmar pedido?"}
        </span>
        <div data-figma-id="404:3465" style={rootLayer(112, 52, {
            ...surface2,
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
      <div data-figma-id="404:3466" style={fixedLayer(362, 212, {
          background: "#eff1f5",
          borderRadius: 16,
          ...row1,
          ...layout2,
          gap: 8
        })}>
        <span data-figma-id="404:3467" style={{
            ...font_Manrope_16b,
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"#PED-1048 - Mesa 04"}
        </span>
        <span data-figma-id="404:3468" style={fixedLayer(330, 48, {
            ...font_Manrope,
            ...text1,
            color: "#000000",
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
            }}>{"1 × Whopper - $ 10.400\n2 × Cow Boy - $ 52.200"}</span>
        </span>
        <span data-figma-id="404:3469" style={{
            ...font_Manrope_16e,
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"Total original: $ 44.000"}
        </span>
        <span data-figma-id="404:3470" style={{
            ...font_Manrope,
            ...text2,
            ...text4,
            color: "#2457c5",
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"Nuevo total: $ 62.600"}
        </span>
        <span data-figma-id="404:3471" style={{
            ...font_Manrope,
            ...text1,
            color: "#000000",
            whiteSpace: "pre",
            fontWeight: 500,
            position: "relative",
            width: 330,
            flexShrink: 0
          }}>
          {"Diferencia: +$ 18.600"}
        </span>
      </div>
      <span data-figma-id="792:2951" style={{
          ...font_Manrope,
          ...text1,
          color: "#000000",
          whiteSpace: "pre",
          fontWeight: 500,
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Motivo: Porque sí."}
      </span>
      <span data-figma-id="792:2952" style={fixedLayer(362, 48, {
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
          }}>{"Los cambios quedarán registrados a nombre de \nAna Torres."}</span>
      </span>
      <div data-figma-id="404:3474" style={fixedLayer(362, "max-content", {
          ...surface1,
          background: "#2457c5",
          ...row3
        })}>
        <span data-figma-id="404:812~10" style={{
            ...font_Manrope,
            ...text2,
            ...text3,
            color: "#ffffff",
            position: "relative",
            flexShrink: 0
          }}>
          {"Confirmar pedido"}
        </span>
      </div>
      <div data-figma-id="404:3475" style={fixedLayer(362, "max-content", {
          ...surface2,
          ...row3
        })}>
        <span data-figma-id="404:812~11" style={{
            ...font_Manrope_16,
            position: "relative",
            flexShrink: 0
          }}>
          {"Seguir editando"}
        </span>
      </div>
    </div>
  </div>
  </>;
}
export default Frame10ConfirmarCambiosPED1048;