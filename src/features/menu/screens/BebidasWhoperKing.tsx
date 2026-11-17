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
  color: "#29241f",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #ebe4dc"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  alignItems: "center",
  justifyContent: "center"
};
const row1: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between"
};
const text1: React.CSSProperties = {
  color: "#ffffff",
  whiteSpace: "pre",
  fontWeight: 700
};
const row2: React.CSSProperties = {
  ...layout1,
  overflow: "hidden",
  display: "flex"
};
const col2: React.CSSProperties = {
  ...col1,
  overflow: "hidden",
  padding: "12px 0",
  boxSizing: "border-box"
};
const font_Manrope_14: React.CSSProperties = {
  ...font_Manrope,
  whiteSpace: "pre-wrap",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "19.124px"
};
const font_Inter_13: React.CSSProperties = {
  ...font_Inter,
  color: "#29241f",
  whiteSpace: "pre",
  fontSize: 13,
  fontWeight: 600,
  lineHeight: "16px"
};
const font_Inter_10: React.CSSProperties = {
  ...font_Inter,
  color: "#82776e",
  whiteSpace: "normal",
  fontSize: 10,
  fontWeight: 400,
  lineHeight: "15px"
};
const col3: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  minHeight: 0,
  padding: "0 5px",
  boxSizing: "border-box",
  gap: 5
};
export function BebidasWhoperKing() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-554-corners-2-0" d="M0 5.251L10.501 5.251M5.251 0L5.251 10.501" fillRule="nonzero" />
        <path id="figma-derived-880" d="M5.779 13.466C6.13 13.818 6.7 13.818 7.051 13.466C7.403 13.115 7.403 12.545 7.051 12.194L6.415 12.83L5.779 13.466ZM0 6.415L-0.636 5.779L-1.273 6.415L-0.636 7.051L0 6.415ZM7.051 0.636C7.403 0.285 7.403 -0.285 7.051 -0.636C6.7 -0.988 6.13 -0.988 5.779 -0.636L6.415 0L7.051 0.636ZM12.83 7.315C13.327 7.315 13.73 6.912 13.73 6.415C13.73 5.918 13.327 5.515 12.83 5.515L12.83 6.415L12.83 7.315ZM6.415 12.83L7.051 12.194L0.636 5.779L0 6.415L-0.636 7.051L5.779 13.466L6.415 12.83ZM0 6.415L0.636 7.051L7.051 0.636L6.415 0L5.779 -0.636L-0.636 5.779L0 6.415ZM0 6.415L0 7.315L12.83 7.315L12.83 6.415L12.83 5.515L0 5.515L0 6.415Z" fillRule="nonzero" />
        <path id="figma-derived-871" d="M0 4.351C-0.497 4.351 -0.9 4.754 -0.9 5.251C-0.9 5.748 -0.497 6.151 0 6.151L0 5.251L0 4.351ZM10.501 6.151C10.998 6.151 11.401 5.748 11.401 5.251C11.401 4.754 10.998 4.351 10.501 4.351L10.501 5.251L10.501 6.151ZM6.151 0C6.151 -0.497 5.748 -0.9 5.251 -0.9C4.754 -0.9 4.351 -0.497 4.351 0L5.251 0L6.151 0ZM4.351 10.501C4.351 10.998 4.754 11.401 5.251 11.401C5.748 11.401 6.151 10.998 6.151 10.501L5.251 10.501L4.351 10.501ZM0 5.251L0 6.151L10.501 6.151L10.501 5.251L10.501 4.351L0 4.351L0 5.251ZM5.251 0L4.351 0L4.351 10.501L5.251 10.501L6.151 10.501L6.151 0L5.251 0Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="748:1909" style={rootLayer("100%", 940, {
      background: "#fffcf8",
      ...col1,
      minWidth: 0,
      minHeight: 940,
      overflow: "hidden"
    })}>
    <div data-figma-id="748:1919" style={absoluteLayer(334, 418, 34, 34, {
        ...surface1,
        borderRadius: 11,
        ...row2
      })}>
      <div data-figma-id="748:1920" style={fixedLayer(18, 18, {
          overflow: "hidden"
        })}>
        <svg data-figma-id="748:1921" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
          <use href="#figma-vector-554-corners-2-0" fill="transparent" stroke="#ed6047" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
        </svg>
      </div>
    </div>
    <div data-figma-id="748:1922" style={fixedLayer(402, "max-content", {
        display: "flex",
        padding: "10px 15px",
        boxSizing: "border-box",
        alignItems: "center",
        gap: 10
      })}>
      <div data-figma-id="738:9479" style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', maxWidth: 382, minHeight: 44, position: 'relative', flexShrink: 0, boxSizing: 'border-box' }}>
        <div data-figma-id="711:1147" style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', flex: 1, minWidth: 0, position: 'relative' }}>
          <div data-figma-id="711:1309" style={{ position: "relative", width: "100%", minHeight: 35, flexShrink: 0 }}>
            <span data-figma-id="711:1310" style={{ position: "relative", display: "block", width: "100%",
                ...font_Inter,
                color: "#f94144",
                whiteSpace: "pre-wrap",
                fontSize: 29,
                fontWeight: 600,
                lineHeight: "35.097px",
                letterSpacing: "-1px"
              }}>
              {"Bebidas"}
            </span>
          </div>
        </div>
        <div data-figma-id="711:1141" style={{ order: -1, position: 'relative', width: 44, height: 44, flexShrink: 0,
            ...surface1,
            borderRadius: 100,
            ...layout1,
            overflow: "hidden",
            display: "flex",
            padding: "0 10px",
            boxSizing: "border-box"
          }}>
          <div data-figma-id="711:1142" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="711:1143" viewBox="-1.273 -0.988 15.003 14.806" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 1.273px)", "calc(20.83% - 0.988px)", "calc(64.15% + 2.173px)", "calc(64.15% + 1.976px)")}>
              <use href="#figma-derived-880" fill="#29241f" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="748:1923" style={fixedLayer(402, 45, {
        boxShadow: "inset 0 -1px 0 0 #ebe4dc",
        overflow: "hidden",
        display: "flex",
        padding: "0 20px",
        boxSizing: "border-box",
        gap: 23
      })}>
      <div data-figma-id="748:1849" style={fixedLayer("max-content", 39, {
          borderBottom: "3px solid #ed6047",
          ...col2
        })} />
      <div data-figma-id="748:1850" style={absoluteLayer(0, 0, 130, 45, {
          boxShadow: "inset 0 -3px 0 0 #ed6047",
          ...col2
        })}>
        <span data-figma-id="748:1851" style={absoluteLayer(0, 0, 130, 44, {
            ...font_Inter,
            color: "#bd412d",
            whiteSpace: "pre-wrap",
            fontSize: 13,
            fontWeight: 700,
            lineHeight: "16px",
            textAlign: "center",
            ...layout1,
            display: "flex"
          })}>
          {"Bebidas"}
        </span>
      </div>
    </div>
    <div data-figma-id="748:1924" style={{
        ...col1,
        minWidth: 0,
        overflow: "hidden",
        padding: "16px 20px 9px",
        boxSizing: "border-box",
        position: "relative",
        height: 54,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <span data-figma-id="748:1925" style={{
          ...font_Manrope,
          whiteSpace: "pre",
          fontSize: 21,
          fontWeight: 800,
          lineHeight: "29px",
          letterSpacing: "-0.5px",
          position: "relative",
          flexShrink: 0
        }}>
        {"Bebidas"}
      </span>
    </div>
    <div data-figma-id="748:1964" style={fixedLayer(402, 259, {
        ...layout1,
        overflow: "hidden",
        display: "flex",
        padding: 10,
        boxSizing: "border-box",
        gap: 12
      })}>
      <div data-figma-id="711:1573" style={absoluteLayer(208, 4, 176.078, 241, {
          background: "#ffffff",
          borderRadius: 10,
          ...col1,
          ...layout1,
          padding: "0 3px",
          boxSizing: "border-box"
        })}>
        <div data-figma-id="707:1855" style={fixedLayer(179, 165, {
            ...col1,
            overflow: "hidden"
          })}>
          <div data-figma-id="707:1856" style={{
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/11a87723-5aed-41c3-b502-ce9652811db2.png\")",
              backgroundSize: "112.593% 133%",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              borderRadius: 14,
              minWidth: 0,
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="707:1857" style={absoluteLayer(10, 11, 34, 34, {
              ...surface1,
              borderRadius: 11,
              ...row2
            })}>
            <div data-figma-id="707:1858" style={fixedLayer(18, 18, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="707:1859" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                <use href="#figma-derived-871" fill="#ed6047" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="885:3174" style={{
            ...col3,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="885:3676" style={{
              ...col1,
              minWidth: 0,
              gap: 2,
              position: "relative",
              height: 34.991,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1860" style={{
                ...font_Manrope_14,
                minWidth: 0,
                aspectRatio: "179 / 19",
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Jugos en Agua"}
            </span>
            <span data-figma-id="707:1861" style={{
                ...font_Inter_13,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"$ 6.500"}
            </span>
          </div>
          <div data-figma-id="707:1862" style={{
              ...col1,
              minWidth: 0,
              overflow: "hidden",
              gap: 7,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1863" style={absoluteLayer(0, 0, 163, 30, font_Inter_10)}>
              <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "15px",
                  left: 0,
                  textAlign: "left"
                }}>{"Jugos de Mora  · Mango  · Fresa  ·  \nMaracuya"}</span>
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="711:1572" style={absoluteLayer(10, 4, 179, 245, {
          background: "#ffffff",
          borderRadius: 10,
          ...col1,
          ...layout1,
          padding: "0 3px",
          boxSizing: "border-box"
        })}>
        <div data-figma-id="707:1855~2" style={fixedLayer(179, 165, {
            ...col1,
            overflow: "hidden"
          })}>
          <div data-figma-id="707:1856~2" style={{
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/20d9701e-f21d-4ca1-a26f-80eabafdf17f.png\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 14,
              minWidth: 0,
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="707:1857~2" style={absoluteLayer(10, 11, 34, 34, {
              ...surface1,
              borderRadius: 11,
              ...row2
            })}>
            <div data-figma-id="707:1858~2" style={fixedLayer(18, 18, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="707:1859~2" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                <use href="#figma-derived-871" fill="#ed6047" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="885:3174~2" style={{
            ...col3,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="885:3676~2" style={{
              ...col1,
              minWidth: 0,
              gap: 2,
              position: "relative",
              height: 35.302,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1860~2" style={{
                ...font_Manrope_14,
                minWidth: 0,
                aspectRatio: "179 / 19",
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Gaseosas 300 c.c"}
            </span>
            <span data-figma-id="707:1861~2" style={{
                ...font_Inter_13,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"$ 3.000"}
            </span>
          </div>
          <div data-figma-id="707:1862~2" style={{
              ...col1,
              minWidth: 0,
              overflow: "hidden",
              gap: 7,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1863~2" style={absoluteLayer(0, 0, 163, 30, font_Inter_10)}>
              <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "15px",
                  left: 0,
                  textAlign: "left"
                }}>{"Gasesosas Postobon  · Coca cola  \n· Sprite  · Colombiana"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="748:1966" style={{
        background: "#ffffff",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        ...col1,
        minWidth: 0,
        overflow: "hidden",
        padding: "12px 20px 0",
        boxSizing: "border-box",
        gap: 8,
        position: "relative",
        height: 98,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="748:1967" style={{
          background: "#ed6047",
          borderRadius: 14,
          ...row1,
          minWidth: 0,
          overflow: "hidden",
          padding: "0 18px",
          boxSizing: "border-box",
          alignItems: "center",
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="748:1968" style={fixedLayer(28, 28, {
            background: "rgba(255, 255, 255, 0.149)",
            borderRadius: 8,
            ...row2
          })}>
          <span data-figma-id="748:1969" style={{
              ...font_Inter,
              ...text1,
              fontSize: 13,
              lineHeight: "16px",
              position: "relative",
              flexShrink: 0
            }}>
            {"0"}
          </span>
        </div>
        <span data-figma-id="748:1970" style={{
            ...font_Inter,
            ...text1,
            fontSize: 15,
            lineHeight: "18.153px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Tu carrito está vacío"}
        </span>
        <span data-figma-id="748:1971" style={{
            ...font_Inter,
            ...text1,
            fontSize: 15,
            lineHeight: "18.153px",
            position: "relative",
            flexShrink: 0
          }}>
          {"$ 0"}
        </span>
      </div>
      <div data-figma-id="748:1972" style={{
          ...col1,
          ...layout1,
          minWidth: 0,
          overflow: "hidden",
          position: "relative",
          height: 24,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="748:1973" style={fixedLayer(126, 4, {
            background: "#29241f",
            borderRadius: 4
          })} />
      </div>
    </div>
  </div>
  </>;
}
export default BebidasWhoperKing;