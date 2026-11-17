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
  color: "#29241f",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  alignItems: "center",
  justifyContent: "center"
};
const layout2: React.CSSProperties = {
  overflow: "hidden",
  boxSizing: "border-box"
};
const text1: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "15px",
  textAlign: "center"
};
export function VentanasDeEstadisticas() {
  return <div data-figma-id="733:8243" style={rootLayer("100%", 164, {
    ...col1,
    ...layout1,
    ...layout2,
    minWidth: 0,
    padding: "15px 25px",
    gap: 10
  })}>
    <div data-figma-id="733:8217" style={fixedLayer(362, 30, {
      ...col1,
      ...layout1,
      ...layout2,
      padding: "0 4px",
      gap: 10
    })}>
      <span data-figma-id="733:8218" style={fixedLayer(340, 30, {
        ...font_Inter,
        whiteSpace: "pre-wrap",
        fontSize: 20,
        fontWeight: 800,
        lineHeight: "24.205px"
      })}>
        {"¿Que estadisticas quiere ver?"}
      </span>
    </div>
    <div data-figma-id="733:8219" style={fixedLayer(362, 94, {
      ...layout2,
      display: "flex",
      padding: "0 30px",
      justifyContent: "space-between"
    })}>
      <div data-figma-id="733:8220" style={absoluteLayer(30, 0, 65, 74, {
        ...col1,
        ...layout1,
        overflow: "hidden",
        gap: 7
      })}>
        <div data-figma-id="733:8221" style={absoluteLayer(6, 0, 54, 54, {
          background: "#e6e8ea",
          borderRadius: 12,
          ...layout1,
          display: "flex"
        })}>
          <div data-figma-id="733:8222" style={fixedLayer("max-content", 16.5, col1)}>
            <div data-figma-id="733:8225" style={fixedLayer(16.5, 16.5)} />
          </div>
        </div>
        <span data-figma-id="733:8226" style={{
          ...font_Inter,
          ...text1,
          whiteSpace: "pre",
          position: "absolute",
          left: "calc(50% + -32.5px)",
          top: 61,
          width: 65
        }}>
          {"Ventas hoy"}
        </span>
      </div>
      <div data-figma-id="733:8227" style={absoluteLayer(148.5, 0, 65, 91, {
        ...col1,
        overflow: "hidden",
        alignItems: "center",
        gap: 7
      })}>
        <div data-figma-id="733:8228" style={fixedLayer(54, 54, {
          background: "#e6e8ea",
          borderRadius: 12,
          ...layout1,
          display: "flex"
        })}>
          <div data-figma-id="733:8229" style={fixedLayer("max-content", 12.833, col1)}>
            <div data-figma-id="733:8232" style={fixedLayer(22, 12.833)} />
          </div>
        </div>
        <span data-figma-id="733:8233" style={{
          ...font_Inter,
          ...text1,
          whiteSpace: "normal",
          minWidth: 0,
          position: "relative",
          height: 30,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <span data-figma-text-line="0" style={{
            position: "absolute",
            left: "calc(50% + 1.588px)",
            transform: "translateX(-50%)",
            top: 0,
            width: 65.285,
            height: 15,
            display: "block",
            whiteSpace: "pre",
            lineHeight: "15px",
            textAlign: "left"
          }}>{"Ventas por "}</span>
          <span data-figma-text-line="1" style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 15,
            width: 30.633,
            height: 15,
            display: "block",
            whiteSpace: "pre",
            lineHeight: "15px",
            textAlign: "left"
          }}>{"canal"}</span>
        </span>
      </div>
      <div data-figma-id="733:8234" style={absoluteLayer(267, 0, 65, 94, {
        ...col1,
        overflow: "hidden",
        alignItems: "center",
        gap: 7
      })}>
        <div data-figma-id="733:8235" style={fixedLayer(54, 54, {
          background: "#2457c5",
          borderRadius: 12,
          filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
          ...layout1,
          display: "flex"
        })}>
          <div data-figma-id="733:8236" style={fixedLayer("max-content", 15.583, col1)}>
            <div data-figma-id="733:8239" style={fixedLayer(19.525, 15.583)} />
          </div>
        </div>
        <span data-figma-id="733:8240" style={{
          ...font_Inter,
          ...text1,
          whiteSpace: "normal",
          minWidth: 0,
          position: "relative",
          height: 33,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <span data-figma-text-line="0" style={{
            position: "absolute",
            left: "calc(50% + 1.588px)",
            transform: "translateX(-50%)",
            top: 0,
            width: 48.949,
            height: 15,
            display: "block",
            whiteSpace: "pre",
            lineHeight: "15px",
            textAlign: "left"
          }}>{"Platos e "}</span>
          <span data-figma-text-line="1" style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 15,
            width: 48,
            height: 15,
            display: "block",
            whiteSpace: "pre",
            lineHeight: "15px",
            textAlign: "left"
          }}>{"insumos"}</span>
        </span>
      </div>
    </div>
  </div>;
}
export default VentanasDeEstadisticas;