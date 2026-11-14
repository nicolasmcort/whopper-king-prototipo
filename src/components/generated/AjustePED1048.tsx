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
  color: "#000000",
  lineHeight: "20px"
};
const text2: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 800
};
const row1: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  boxSizing: "border-box"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 2
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  padding: "10px 0",
  gap: 8
};
const font_Manrope_12: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  whiteSpace: "pre",
  fontSize: 12,
  fontWeight: 500
};
const font_Manrope_14: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text2,
  fontSize: 14,
  textAlign: "right"
};
function TotalOriginal(p: {
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
      <span data-figma-id="713:2313" style={{
      ...font_Manrope_12,
      minWidth: 0,
      position: "relative",
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        {p.text}
      </span>
      <span data-figma-id="713:2314" style={{
      ...font_Manrope_14,
      minWidth: 0,
      position: "relative",
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        {p.text2}
      </span>
    </div>;
}
export function AjustePED1048() {
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
  <div data-figma-id="713:2306" style={rootLayer("100%", 510, {
      background: "#ffffff",
      boxShadow: "inset 0 0 0 2px #dde5f9",
      borderRadius: 20,
      ...row1,
      minWidth: 0,
      padding: "32px 22px",
      flexDirection: "column",
      gap: 20
    })}>
    <div data-figma-id="713:2307" style={{
        minWidth: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: 8,
        position: "relative",
        height: "max-content",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <span data-figma-id="713:2308" style={{
          ...font_Manrope,
          ...text2,
          color: "#000000",
          fontSize: 20,
          lineHeight: "27.32px",
          minWidth: 0,
          position: "relative",
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0
        }}>
        {"Detalle del ajuste"}
      </span>
      <div data-figma-id="713:2309" style={fixedLayer(112, 52, {
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #93afeb",
          borderRadius: 90,
          ...row1,
          minWidth: 0,
          minHeight: 52,
          padding: "12px 16px",
          alignItems: "center",
          justifyContent: "center",
          gap: 5
        })}>
        <div data-figma-id="713:2256" style={fixedLayer(20, 20)}>
          <svg data-figma-id="713:2257" viewBox="-0.636 -0.636 13.273 13.273" preserveAspectRatio="none" style={absoluteLayer(3.364, 3.364, 13.273, 13.273)}>
            <use href="#figma-derived-54" fill="#2457c5" />
          </svg>
        </div>
        <span data-figma-id="713:2258" style={{
            ...font_Manrope,
            ...text2,
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
    <span data-figma-id="713:2310" style={{
        ...font_Manrope,
        ...text2,
        color: "#000000",
        fontSize: 16,
        lineHeight: "21.856px",
        minWidth: 0,
        position: "relative",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      {"#PED-1048 - Mesa 04"}
    </span>
    <div data-figma-id="713:2311" style={fixedLayer(322, 128, {
        background: "#eff1f5",
        borderRadius: 12,
        ...row1,
        padding: "4px 12px",
        flexDirection: "column"
      })}>
      <TotalOriginal data-figma-id="713:2312" text="Total original" text2="$ 44.000" />
      <TotalOriginal data-figma-id="713:2315" text="Total nuevo" text2="$ 62.600" />
      <TotalOriginal data-figma-id="713:2318" text="Diferencia" text2="+$ 18.600" />
    </div>
    <div data-figma-id="792:3135" style={fixedLayer(318, 62, col1)}>
      <span data-figma-id="713:2321" style={{
          ...font_Manrope,
          ...text1,
          ...text2,
          fontSize: 14,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Productos del ajuste"}
      </span>
      <span data-figma-id="713:2322" style={{
          ...font_Manrope,
          ...text1,
          whiteSpace: "normal",
          fontSize: 14,
          fontWeight: 500,
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
            lineHeight: "20px",
            left: 0,
            textAlign: "left"
          }}>{"1 × Whopper - $ 10.400\n2 × Cow Boy - $ 52.200"}</span>
      </span>
    </div>
    <div data-figma-id="792:3136" style={fixedLayer(318, 42, col1)}>
      <span data-figma-id="713:2323" style={{
          ...font_Manrope,
          ...text1,
          ...text2,
          fontSize: 14,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Motivo"}
      </span>
      <span data-figma-id="713:2324" style={{
          ...font_Manrope,
          ...text1,
          whiteSpace: "pre",
          fontSize: 14,
          fontWeight: 500,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Porque sí."}
      </span>
    </div>
    <div data-figma-id="792:3137" style={fixedLayer(318, 42, col1)}>
      <span data-figma-id="713:2325" style={{
          ...font_Manrope,
          ...text1,
          ...text2,
          fontSize: 14,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Responsable"}
      </span>
      <span data-figma-id="713:2326" style={{
          ...font_Manrope,
          ...text1,
          whiteSpace: "pre",
          fontSize: 14,
          fontWeight: 500,
          minWidth: 0,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Ana Torres - 06 nov 2026 - 09:41"}
      </span>
    </div>
  </div>
  </>;
}
export default AjustePED1048;