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
const row1: React.CSSProperties = {
  display: "flex",
  boxSizing: "border-box"
};
const layout2: React.CSSProperties = {
  overflow: "hidden",
  gap: 12
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const surface2: React.CSSProperties = {
  background: "#2457c5",
  boxShadow: "inset 0 0 0 1px #2457c5",
  borderRadius: 90
};
const text2: React.CSSProperties = {
  color: "#5c6270",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px"
};
const col2: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: 4
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  minHeight: 52,
  overflow: "hidden",
  padding: "12px 16px",
  alignItems: "center",
  justifyContent: "center"
};
const col1: React.CSSProperties = {
  ...row1,
  ...layout2,
  minWidth: 0,
  padding: 16,
  flexDirection: "column"
};
export function Frame11PedidoAAdirProducto() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-derived-54" d="M0 0L-0.636 0.636L11.364 12.636L12 12L12.636 11.364L0.636 -0.636L0 0ZM12 0L11.364 -0.636L-0.636 11.364L0 12L0.636 12.636L12.636 0.636L12 0Z" fillRule="nonzero" />
        <path id="figma-derived-25" d="M14.364 15.637C14.715 15.988 15.285 15.988 15.637 15.637C15.988 15.285 15.988 14.715 15.637 14.364L15 15L14.364 15.637ZM12.02 10.747C11.668 10.396 11.099 10.396 10.747 10.747C10.396 11.099 10.396 11.668 10.747 12.02L11.383 11.383L12.02 10.747ZM15 15L15.637 14.364L12.02 10.747L11.383 11.383L10.747 12.02L14.364 15.637L15 15ZM13.333 6.667L12.433 6.667C12.433 9.852 9.852 12.433 6.667 12.433L6.667 13.333L6.667 14.233C10.846 14.233 14.233 10.846 14.233 6.667L13.333 6.667ZM6.667 13.333L6.667 12.433C3.482 12.433 0.9 9.852 0.9 6.667L0 6.667L-0.9 6.667C-0.9 10.846 2.488 14.233 6.667 14.233L6.667 13.333ZM0 6.667L0.9 6.667C0.9 3.482 3.482 0.9 6.667 0.9L6.667 0L6.667 -0.9C2.488 -0.9 -0.9 2.488 -0.9 6.667L0 6.667ZM6.667 0L6.667 0.9C9.852 0.9 12.433 3.482 12.433 6.667L13.333 6.667L14.233 6.667C14.233 2.488 10.846 -0.9 6.667 -0.9L6.667 0Z" fillRule="nonzero" />
        <path id="figma-derived-161" d="M0 4.934C-0.497 4.934 -0.9 5.337 -0.9 5.834C-0.9 6.331 -0.497 6.734 0 6.734L0 5.834L0 4.934ZM11.668 6.734C12.165 6.734 12.568 6.331 12.568 5.834C12.568 5.337 12.165 4.934 11.668 4.934L11.668 5.834L11.668 6.734ZM6.734 0C6.734 -0.497 6.331 -0.9 5.834 -0.9C5.337 -0.9 4.934 -0.497 4.934 0L5.834 0L6.734 0ZM4.934 11.668C4.934 12.165 5.337 12.568 5.834 12.568C6.331 12.568 6.734 12.165 6.734 11.668L5.834 11.668L4.934 11.668ZM0 5.834L0 6.734L11.668 6.734L11.668 5.834L11.668 4.934L0 4.934L0 5.834ZM5.834 0L4.934 0L4.934 11.668L5.834 11.668L6.734 11.668L6.734 0L5.834 0Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="404:3557" style={rootLayer("100%", 740, {
      background: "#ffffff",
      borderRadius: "24px 24px 0 0",
      ...row1,
      minWidth: 0,
      padding: "16px 20px 24px",
      flexDirection: "column",
      alignItems: "center",
      gap: 30
    })}>
    <div data-figma-id="792:3256" style={fixedLayer(362, 120, {
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <div data-figma-id="404:3558" style={{
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
        <span data-figma-id="404:3559" style={{
            ...font_Manrope,
            ...text1,
            color: "#000000",
            fontSize: 20,
            lineHeight: "28px",
            position: "relative",
            width: 270,
            gridColumn: "1 / span 1",
            gridRow: "1 / span 1",
            alignSelf: "center"
          }}>
          {"Añadir producto"}
        </span>
        <div data-figma-id="404:3560" style={rootLayer(112, 52, {
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
      <span data-figma-id="404:3561" style={{
          ...font_Manrope,
          ...text2,
          whiteSpace: "normal",
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span style={{
            position: "absolute",
            top: 0,
            whiteSpace: "pre",
            lineHeight: "24px",
            left: 0,
            textAlign: "left"
          }}>{"Selecciona un producto para agregarlo al pedido \n#PED-1048."}</span>
      </span>
    </div>
    <div data-figma-id="404:3562" style={fixedLayer(362, 50, {
        background: "#ffffff",
        boxShadow: "inset 0 0 0 1px #2457c5",
        borderRadius: 15,
        ...row1,
        overflow: "hidden",
        padding: 14,
        alignItems: "center",
        gap: 10
      })}>
      <div data-figma-id="404:859" style={fixedLayer(20, 20, {
          overflow: "hidden"
        })}>
        <svg data-figma-id="404:860" viewBox="-0.9 -0.9 16.888 16.888" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(12.5% - 0.9px)", "calc(75.001% + 1.888px)", "calc(75.001% + 1.888px)")}>
          <use href="#figma-derived-25" fill="#2457c5" />
        </svg>
      </div>
      <span data-figma-id="404:861" style={{
          ...font_Manrope,
          ...text1,
          color: "#5c6270",
          fontSize: 16,
          lineHeight: "23px",
          minWidth: 0,
          position: "relative",
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0
        }}>
        {"Buscar producto"}
      </span>
    </div>
    <div data-figma-id="792:3257" style={fixedLayer(362, 388, {
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <span data-figma-id="404:3563" style={{
          ...font_Manrope,
          ...text1,
          color: "#000000",
          fontSize: 20,
          lineHeight: "28px",
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Productos disponibles"}
      </span>
      <div data-figma-id="404:3564" style={{
          background: "#eff1f5",
          borderRadius: 16,
          ...col1,
          position: "relative",
          height: 160,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:3565" style={fixedLayer(330, "max-content", {
            ...layout2,
            display: "flex"
          })}>
          <div data-figma-id="404:3566" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/de29e1bf-948b-4994-946e-3b3870681171.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3567" style={fixedLayer(254, 52, col2)}>
            <span data-figma-id="404:3568" style={{
                ...font_Manrope,
                ...text1,
                color: "#000000",
                fontSize: 16,
                lineHeight: "24px",
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Whopper"}
            </span>
            <span data-figma-id="404:3569" style={{
                ...font_Manrope,
                ...text2,
                whiteSpace: "pre",
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Sencilla - $ 10.400 c/u"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:3570" style={{
            ...surface2,
            ...row1,
            ...layout1,
            gap: 5,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="404:2134" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="404:2135" viewBox="-0.9 -0.9 13.468 13.468" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
              <use href="#figma-derived-161" fill="#ffffff" />
            </svg>
          </div>
          <span data-figma-id="404:2136" style={{
              ...font_Manrope,
              ...text1,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "22px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Agregar producto"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3571" style={{
          background: "#eff1f5",
          borderRadius: 16,
          ...col1,
          position: "relative",
          height: 160,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:3572" style={fixedLayer(330, "max-content", {
            ...layout2,
            display: "flex"
          })}>
          <div data-figma-id="404:3573" style={fixedLayer(64, 64, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/96434108-c0c6-4b34-8743-b24cd659aa6b.jpg\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 12
            })} />
          <div data-figma-id="404:3574" style={fixedLayer(254, 52, col2)}>
            <span data-figma-id="404:3575" style={{
                ...font_Manrope,
                ...text1,
                color: "#000000",
                fontSize: 16,
                lineHeight: "24px",
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Cow Boy"}
            </span>
            <span data-figma-id="404:3576" style={{
                ...font_Manrope,
                ...text2,
                whiteSpace: "pre",
                position: "relative",
                width: 254,
                flexShrink: 0
              }}>
              {"Sencilla - $ 26.100 c/u"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:3577" style={{
            ...surface2,
            ...row1,
            ...layout1,
            gap: 5,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="404:2134~2" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="404:2135~2" viewBox="-0.9 -0.9 13.468 13.468" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
              <use href="#figma-derived-161" fill="#ffffff" />
            </svg>
          </div>
          <span data-figma-id="404:2136~2" style={{
              ...font_Manrope,
              ...text1,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "22px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Agregar producto"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="404:3578" style={fixedLayer(362, "max-content", {
        ...surface1,
        ...row1,
        ...layout1,
        gap: 10
      })}>
      <span data-figma-id="404:812" style={{
          ...font_Manrope,
          ...text1,
          color: "#2457c5",
          fontSize: 16,
          lineHeight: "22px",
          position: "relative",
          flexShrink: 0
        }}>
        {"Volver al pedido"}
      </span>
    </div>
  </div>
  </>;
}
export default Frame11PedidoAAdirProducto;