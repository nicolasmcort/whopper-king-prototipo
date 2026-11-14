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
  color: "#000000",
  lineHeight: "20px"
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
  fontSize: 12,
  fontWeight: 500
};
const font_Manrope_14b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  fontSize: 14,
  fontWeight: 800
};
const font_Manrope_14c: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  fontSize: 14,
  fontWeight: 500
};
const font_Manrope_14: React.CSSProperties = {
  ...font_Manrope_14b,
  textAlign: "right"
};
function CantidadOriginal(p: {
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
      <span data-figma-id="713:2334" style={{
      ...font_Manrope_12,
      minWidth: 0,
      position: "relative",
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        {p.text}
      </span>
      <span data-figma-id="713:2335" style={{
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
function Group9(p: {
  "data-figma-id": string;
  text: string;
  text2: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer(318, 42, col1)}>
      <span data-figma-id="713:2342" style={{
      ...font_Manrope_14b,
      minWidth: 0,
      position: "relative",
      height: "max-content",
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
        {p.text}
      </span>
      <span data-figma-id="713:2343" style={{
      ...font_Manrope_14c,
      minWidth: 0,
      position: "relative",
      height: "max-content",
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
        {p.text2}
      </span>
    </div>;
}
export function EliminaciNMOV184() {
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
  <div data-figma-id="713:2327" style={rootLayer("100%", 490, {
      background: "#ffffff",
      boxShadow: "inset 0 0 0 2px #dde5f9",
      borderRadius: 20,
      ...row1,
      minWidth: 0,
      padding: "32px 22px",
      flexDirection: "column",
      gap: 20
    })}>
    <div data-figma-id="713:2328" style={{
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
      <span data-figma-id="713:2329" style={{
          ...font_Manrope,
          color: "#000000",
          fontSize: 20,
          fontWeight: 800,
          lineHeight: "27.32px",
          minWidth: 0,
          position: "relative",
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0
        }}>
        {"Eliminación"}
      </span>
      <div data-figma-id="713:2330" style={fixedLayer(112, 52, {
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
    <span data-figma-id="713:2331" style={{
        ...font_Manrope,
        color: "#000000",
        fontSize: 16,
        fontWeight: 800,
        lineHeight: "21.856px",
        minWidth: 0,
        position: "relative",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      {"MOV-184 - Entrada"}
    </span>
    <div data-figma-id="713:2332" style={fixedLayer(322, 128, {
        background: "#eff1f5",
        borderRadius: 12,
        ...row1,
        padding: "4px 12px",
        flexDirection: "column"
      })}>
      <CantidadOriginal data-figma-id="713:2333" text="Cantidad original" text2="+3 kg" />
      <CantidadOriginal data-figma-id="713:2336" text="Producto" text2="Carne de res" />
      <CantidadOriginal data-figma-id="713:2339" text="Lote" text2="RES-0511" />
    </div>
    <Group9 data-figma-id="792:3138" text="Registro original" text2="05 nov 2026 - Recibió Luis Rojas" />
    <Group9 data-figma-id="792:3139" text="Eliminó" text2="Ana Torres" />
    <Group9 data-figma-id="792:3140" text="Fecha de eliminación" text2="06 nov 2026 - 09:41" />
  </div>
  </>;
}
export default EliminaciNMOV184;