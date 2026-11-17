import React from 'react';
type LayerValue = string | number;
const rootLayer = (width: LayerValue, height: LayerValue, style: React.CSSProperties = {}): React.CSSProperties => ({
  position: "relative",
  width,
  height,
  ...style
});
export function MenuDeHamburguesas() {
  return <span data-figma-id="711:2807" style={rootLayer(411, 53, {
    color: "#000000",
    whiteSpace: "pre-wrap",
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: "16px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })}>
    {"Menu de Hamburguesas"}
  </span>;
}
export default MenuDeHamburguesas;