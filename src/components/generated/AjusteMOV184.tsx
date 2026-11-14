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
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 2
};
const font_Manrope_14: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  fontSize: 14,
  fontWeight: 500
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
const font_Manrope_14c: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  fontSize: 14,
  fontWeight: 800
};
const font_Manrope_14b: React.CSSProperties = {
  ...font_Manrope_14c,
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
      <span data-figma-id="713:2270" style={{
      ...font_Manrope_12,
      minWidth: 0,
      position: "relative",
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        {p.text}
      </span>
      <span data-figma-id="713:2271" style={{
      ...font_Manrope_14b,
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
function Group3(p: {
  "data-figma-id": string;
  text: string;
  text2: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={{
    ...col1,
    position: "relative",
    height: 42,
    flexShrink: 0,
    alignSelf: "stretch"
  }}>
      <span data-figma-id="713:2279" style={{
      ...font_Manrope_14c,
      minWidth: 0,
      position: "relative",
      height: "max-content",
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
        {p.text}
      </span>
      <span data-figma-id="713:2280" style={{
      ...font_Manrope_14,
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
export function AjusteMOV184() {
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
  <div data-figma-id="713:2263" style={rootLayer("100%", 514, {
      background: "#ffffff",
      boxShadow: "inset 0 0 0 2px #dde5f9",
      borderRadius: 20,
      ...row1,
      minWidth: 0,
      padding: "32px 22px",
      flexDirection: "column",
      gap: 20
    })}>
    <div data-figma-id="713:2264" style={{
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
      <span data-figma-id="713:2265" style={{
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
        {"Detalle del ajuste"}
      </span>
      <div data-figma-id="713:2266" style={fixedLayer(112, 52, {
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
    <span data-figma-id="713:2267" style={{
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
    <span data-figma-id="713:2278" style={{
        ...font_Manrope_14,
        minWidth: 0,
        position: "relative",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      {"Carne de res - Lote RES-0511"}
    </span>
    <div data-figma-id="713:2268" style={fixedLayer(322, 128, {
        background: "#eff1f5",
        borderRadius: 12,
        ...row1,
        padding: "4px 12px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      })}>
      <CantidadOriginal data-figma-id="713:2269" text="Cantidad original" text2="3 kg" />
      <CantidadOriginal data-figma-id="713:2272" text="Cantidad nueva" text2="5 kg" />
      <CantidadOriginal data-figma-id="713:2275" text="Diferencia" text2="+2 kg" />
    </div>
    <div data-figma-id="792:3038" style={fixedLayer(318, 150, {
        display: "flex",
        flexDirection: "column",
        gap: 12
      })}>
      <Group3 data-figma-id="792:3071" text="Motivo" text2="Porque sí." />
      <Group3 data-figma-id="792:3072" text="Responsable" text2="Ana Torres" />
      <Group3 data-figma-id="792:3083" text="Fecha del ajuste" text2="06 nov 2026 - 09:41" />
    </div>
  </div>
  </>;
}
export default AjusteMOV184;