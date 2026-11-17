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
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const row1: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden",
  display: "flex",
  boxSizing: "border-box"
};
const layout1: React.CSSProperties = {
  minHeight: 52,
  padding: "12px 16px",
  alignItems: "center",
  justifyContent: "center"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  color: "#000000",
  fontSize: 16,
  fontWeight: 800,
  lineHeight: "21.856px"
};
export function ConfirmarEliminaciNNuevaPropuesta() {
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
  <div data-figma-id="713:2367" style={rootLayer("100%", 410, {
      background: "#ffffff",
      boxShadow: "inset 0 0 0 2px #dde5f9",
      borderRadius: 20,
      ...row1,
      padding: "32px 22px",
      flexDirection: "column",
      gap: 20
    })}>
    <div data-figma-id="713:2368" style={{
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
      <span data-figma-id="713:2369" style={{
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
        {"¿Eliminar registro?"}
      </span>
      <div data-figma-id="713:2370" style={fixedLayer(112, 52, {
          ...surface1,
          ...row1,
          ...layout1,
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
    <div data-figma-id="713:2371" style={{
        background: "#eff1f5",
        borderRadius: 12,
        ...row1,
        padding: 12,
        flexDirection: "column",
        gap: 8,
        position: "relative",
        height: 100,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <span data-figma-id="713:2372" style={{
          ...font_Manrope_16,
          minWidth: 0,
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"MOV-184 - Entrada original"}
      </span>
      <span data-figma-id="713:2373" style={{
          ...font_Manrope_16,
          minWidth: 0,
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Carne de res - +3 kg"}
      </span>
      <span data-figma-id="713:2374" style={{
          ...font_Manrope,
          color: "#5c6270",
          fontSize: 12,
          fontWeight: 500,
          lineHeight: "20px",
          minWidth: 0,
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Lote RES-0511 - 05 nov 2026"}
      </span>
    </div>
    <span data-figma-id="713:2375" style={{
        ...font_Manrope,
        color: "#5c6270",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: "20px",
        minWidth: 0,
        position: "relative",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      {"La eliminación se registrará a nombre de Ana Torres."}
    </span>
    <div data-figma-id="792:3162" style={fixedLayer(318, 114, {
        display: "flex",
        flexDirection: "column",
        gap: 10
      })}>
      <div data-figma-id="713:2376" style={{
          background: "#fde7e7",
          boxShadow: "inset 0 0 0 1px #ffffff",
          borderRadius: 90,
          ...row1,
          ...layout1,
          gap: 10,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="713:2262" style={{
            ...font_Manrope,
            color: "#ffffff",
            fontSize: 16,
            fontWeight: 800,
            lineHeight: "22px",
            WebkitTextStroke: "1px #e22c2c",
            position: "relative",
            flexShrink: 0
          }}>
          {"Sí, eliminar registro"}
        </span>
      </div>
      <div data-figma-id="713:2377" style={{
          ...surface1,
          ...row1,
          ...layout1,
          gap: 10,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="713:2262~2" style={{
            ...font_Manrope,
            color: "#2457c5",
            fontSize: 16,
            fontWeight: 800,
            lineHeight: "22px",
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
export default ConfirmarEliminaciNNuevaPropuesta;