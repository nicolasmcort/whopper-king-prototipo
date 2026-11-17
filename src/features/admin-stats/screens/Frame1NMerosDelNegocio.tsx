import React from 'react';
import { StatsCategoryTabs } from '@/shared/components/ui/StatsCategoryTabs';
import { InventarioNavIcon } from '@/shared/components/ui/InventarioNavIcon';
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
const font_PlusJakartaS: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const surface1: React.CSSProperties = {
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const text1: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const text3: React.CSSProperties = {
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text4: React.CSSProperties = {
  fontSize: 12,
  lineHeight: "16px"
};
const font_Inter: React.CSSProperties = {
  color: "#29241f",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text6: React.CSSProperties = {
  fontSize: 14,
  lineHeight: "20px"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout2: React.CSSProperties = {
  flexDirection: "column",
  gap: 2
};
const col3: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const surface3: React.CSSProperties = {
  background: "#f2f4f6",
  borderRadius: 12
};
const surface5: React.CSSProperties = {
  background: "#c4c5d7",
  borderRadius: 9999
};
const text2: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const text5: React.CSSProperties = {
  fontSize: 11,
  lineHeight: "14px",
  letterSpacing: "0.44px"
};
const text7: React.CSSProperties = {
  color: "#191c1e",
  fontSize: 16,
  lineHeight: "22px"
};
const text8: React.CSSProperties = {
  color: "#434655",
  fontSize: 12,
  lineHeight: "15.12px"
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #000000",
  borderRadius: 16
};
const col1: React.CSSProperties = {
  ...col3,
  alignItems: "flex-end"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  padding: "4px 0 0",
  boxSizing: "border-box"
};
const layout3: React.CSSProperties = {
  overflow: "hidden",
  flexDirection: "column",
  gap: 7
};
const col2: React.CSSProperties = {
  ...col3,
  minWidth: 0
};
const row2: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const row4: React.CSSProperties = {
  ...row1,
  justifyContent: "flex-end"
};
const col6: React.CSSProperties = {
  ...row1,
  flexDirection: "column"
};
const surface4: React.CSSProperties = {
  background: "#eff1f5",
  boxShadow: "inset 0 0 0 1px #2457c5",
  borderRadius: 90
};
const text9: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "18px",
  textAlign: "center",
  overflow: "visible"
};
const row3: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  justifyContent: "space-between"
};
const row7: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  padding: "12px 14px",
  boxSizing: "border-box"
};
const col8: React.CSSProperties = {
  ...col2,
  gap: 6
};
const col5: React.CSSProperties = {
  ...col3,
  padding: "6.5px 0 0",
  boxSizing: "border-box",
  gap: 7.5
};
const col7: React.CSSProperties = {
  ...col3,
  padding: "10px 14px 0",
  boxSizing: "border-box",
  gap: 8
};
const col9: React.CSSProperties = {
  ...col3,
  padding: "0 0 2.5px",
  boxSizing: "border-box",
  gap: 5.5
};
const col4: React.CSSProperties = {
  ...row2,
  padding: "8px 16px",
  boxSizing: "border-box",
  flexDirection: "column"
};
const row8: React.CSSProperties = {
  ...row3,
  padding: "0 3.99px 0 4px",
  boxSizing: "border-box"
};
const row9: React.CSSProperties = {
  ...row3,
  padding: 10,
  boxSizing: "border-box"
};
const col10: React.CSSProperties = {
  ...col1,
  padding: "0 0 3.5px",
  boxSizing: "border-box",
  gap: 6.5
};
const row10: React.CSSProperties = {
  ...row3,
  padding: 8,
  boxSizing: "border-box"
};
const font_PlusJakartaS_12c: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text3,
  ...text4,
  color: "#434655",
  whiteSpace: "pre"
};
const font_PlusJakartaS_16: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text7,
  whiteSpace: "pre"
};
const row6: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  overflow: "hidden",
  padding: "5px 4px",
  boxSizing: "border-box",
  gap: 8
};
const font_PlusJakartaS_14: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text3,
  ...text6,
  color: "#191c1e",
  whiteSpace: "pre"
};
const font_PlusJakartaS_14b: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text2,
  ...text6,
  color: "#191c1e"
};
const font_PlusJakartaS_12d: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text2,
  ...text4,
  color: "#191c1e",
  letterSpacing: "0.24px"
};
const row5: React.CSSProperties = {
  ...row1,
  ...layout1,
  justifyContent: "space-between",
  flexWrap: "wrap",
  rowGap: 8
};
const font_PlusJakartaS_11: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text5,
  color: "#374655",
  whiteSpace: "pre"
};
const font_PlusJakartaS_12: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text2,
  ...text4,
  color: "#434655",
  letterSpacing: "0.24px",
  textAlign: "center"
};
const font_PlusJakartaS_12b: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text8,
  whiteSpace: "pre-wrap",
  letterSpacing: "0.55px",
  textTransform: "uppercase"
};
function FilaLunes(p: {
  "data-figma-id": string;
  width: number;
  text: string;
  text2: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={{
    ...surface3,
    ...row10,
    position: "relative",
    height: "max-content",
    flexShrink: 0,
    alignSelf: "stretch"
  }}>
      <div data-figma-id="738:8942" style={fixedLayer(p.width, "max-content", {
      ...row1,
      gap: 4
    })}>
        <div data-figma-id="738:8943" style={fixedLayer(8, 8, surface5)} />
        <div data-figma-id="738:8944" style={fixedLayer("max-content", 20, col3)}>
          <span data-figma-id="738:8945" style={{
          ...font_PlusJakartaS_14,
          ...row1,
          position: "relative",
          flexShrink: 0
        }}>
            {p.text}
          </span>
        </div>
      </div>
      <div data-figma-id="738:8946" style={fixedLayer("max-content", 20, col3)}>
        <span data-figma-id="738:8947" style={{
        ...font_PlusJakartaS_14b,
        ...row1,
        position: "relative",
        flexShrink: 0
      }}>
          {p.text2}
        </span>
      </div>
    </div>;
}
function Part(p: {
  "data-figma-id": string;
  viewBox: string;
  left: string;
  top: string;
  width: string;
  height: string;
  href: string;
}) {
  return <svg data-figma-id={p["data-figma-id"]} viewBox={p.viewBox} preserveAspectRatio="none" style={absoluteLayer(p.left, p.top, p.width, p.height)}>
      <use href={p.href} fill="#434655" />
    </svg>;
}
export function Frame1NMerosDelNegocio() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-derived-301" d="M3.75 16.611L2.5 16.611C1.837 16.611 1.201 16.342 0.732 15.863C0.263 15.383 0 14.733 0 14.056C0 13.378 0.263 12.728 0.732 12.249C1.201 11.769 1.837 11.5 2.5 11.5L3.75 11.5C3.087 11.5 2.451 11.231 1.982 10.751C1.513 10.272 1.25 9.622 1.25 8.944C1.25 6.572 2.435 4.297 4.545 2.62C6.655 0.942 9.516 0 12.5 0C15.484 0 18.345 0.942 20.455 2.62C22.565 4.297 23.75 6.572 23.75 8.944C23.75 9.622 23.487 10.272 23.018 10.751C22.549 11.231 21.913 11.5 21.25 11.5L22.5 11.5C23.163 11.5 23.799 11.769 24.268 12.249C24.737 12.728 25 13.378 25 14.056C25 14.733 24.737 15.383 24.268 15.863C23.799 16.342 23.163 16.611 22.5 16.611L21.25 16.611C21.913 16.611 22.549 16.88 23.018 17.36C23.487 17.839 23.75 18.489 23.75 19.167C23.75 20.183 23.355 21.158 22.652 21.877C21.948 22.596 20.995 23 20 23L5 23C4.005 23 3.052 22.596 2.348 21.877C1.645 21.158 1.25 20.183 1.25 19.167C1.25 18.489 1.513 17.839 1.982 17.36C2.451 16.88 3.087 16.611 3.75 16.611Z" fillRule="nonzero" />
        <path id="figma-derived-stroke-302" d="M17.188 16.611L16.462 16.079L16.462 16.079L17.188 16.611ZM13.5 17.378L12.952 18.092L12.952 18.092L13.5 17.378ZM15.354 17.863L15.224 16.973L15.224 16.973L15.354 17.863ZM17 16.867L17.726 17.399L17.726 17.399L17 16.867ZM12.5 16.611L12.5 15.711L3.75 15.711L3.75 16.611L3.75 17.511L12.5 17.511L12.5 16.611ZM3.75 11.5L3.75 12.4L5.838 12.4L5.838 11.5L5.838 10.6L3.75 10.6L3.75 11.5ZM5.838 11.5L5.838 12.4L20.938 12.4L20.938 11.5L20.938 10.6L5.838 10.6L5.838 11.5ZM20.938 11.5L20.938 12.4L21.25 12.4L21.25 11.5L21.25 10.6L20.938 10.6L20.938 11.5ZM21.25 16.611L21.25 15.711L17.188 15.711L17.188 16.611L17.188 17.511L21.25 17.511L21.25 16.611ZM5.838 11.5L5.29 12.214L12.952 18.092L13.5 17.378L14.048 16.664L6.385 10.786L5.838 11.5ZM13.5 17.378L12.952 18.092C13.674 18.645 14.585 18.885 15.484 18.754L15.354 17.863L15.224 16.973C14.81 17.033 14.387 16.924 14.048 16.664L13.5 17.378ZM15.354 17.863L15.484 18.754C15.928 18.689 16.355 18.535 16.74 18.302L16.274 17.532L15.808 16.762C15.627 16.871 15.429 16.943 15.224 16.973L15.354 17.863ZM16.274 17.532L16.74 18.302C17.124 18.069 17.459 17.762 17.726 17.399L17 16.867L16.274 16.334C16.147 16.508 15.988 16.653 15.808 16.762L16.274 17.532ZM17 16.867L17.726 17.399L17.913 17.144L17.188 16.611L16.462 16.079L16.274 16.334L17 16.867ZM17.188 16.611L17.913 17.144L21.663 12.032L20.938 11.5L20.212 10.968L16.462 16.079L17.188 16.611ZM3.75 18.411C4.744 18.411 5.55 17.605 5.55 16.611C5.55 15.617 4.744 14.811 3.75 14.811L3.75 16.611L3.75 18.411ZM0.732 15.863L-0.554 17.121L-0.554 17.121L0.732 15.863ZM0.732 12.249L-0.554 10.99L-0.554 10.99L0.732 12.249ZM3.75 13.3C4.744 13.3 5.55 12.494 5.55 11.5C5.55 10.506 4.744 9.7 3.75 9.7L3.75 11.5L3.75 13.3ZM21.25 9.7C20.256 9.7 19.45 10.506 19.45 11.5C19.45 12.494 20.256 13.3 21.25 13.3L21.25 11.5L21.25 9.7ZM24.268 12.249L25.554 10.99L25.554 10.99L24.268 12.249ZM24.268 15.863L25.554 17.121L25.554 17.121L24.268 15.863ZM21.25 14.811C20.256 14.811 19.45 15.617 19.45 16.611C19.45 17.605 20.256 18.411 21.25 18.411L21.25 16.611L21.25 14.811ZM1.982 10.751L3.269 9.493L3.269 9.493L1.982 10.751ZM4.545 2.62L5.665 4.029L5.665 4.029L4.545 2.62ZM20.455 2.62L19.335 4.029L19.335 4.029L20.455 2.62ZM23.018 10.751L24.304 12.01L24.304 12.01L23.018 10.751ZM2.348 21.877L1.062 23.136L1.062 23.136L2.348 21.877ZM23.018 17.36L24.304 16.101L24.304 16.101L23.018 17.36ZM3.75 16.611L3.75 14.811L2.5 14.811L2.5 16.611L2.5 18.411L3.75 18.411L3.75 16.611ZM2.5 16.611L2.5 14.811C2.327 14.811 2.153 14.741 2.019 14.604L0.732 15.863L-0.554 17.121C0.249 17.942 1.347 18.411 2.5 18.411L2.5 16.611ZM0.732 15.863L2.019 14.604C1.883 14.465 1.8 14.269 1.8 14.056L0 14.056L-1.8 14.056C-1.8 15.198 -1.356 16.302 -0.554 17.121L0.732 15.863ZM0 14.056L1.8 14.056C1.8 13.843 1.883 13.646 2.019 13.507L0.732 12.249L-0.554 10.99C-1.356 11.809 -1.8 12.913 -1.8 14.056L0 14.056ZM0.732 12.249L2.019 13.507C2.153 13.37 2.327 13.3 2.5 13.3L2.5 11.5L2.5 9.7C1.347 9.7 0.249 10.169 -0.554 10.99L0.732 12.249ZM2.5 11.5L2.5 13.3L3.75 13.3L3.75 11.5L3.75 9.7L2.5 9.7L2.5 11.5ZM21.25 11.5L21.25 13.3L22.5 13.3L22.5 11.5L22.5 9.7L21.25 9.7L21.25 11.5ZM22.5 11.5L22.5 13.3C22.673 13.3 22.847 13.37 22.981 13.507L24.268 12.249L25.554 10.99C24.751 10.169 23.653 9.7 22.5 9.7L22.5 11.5ZM24.268 12.249L22.981 13.507C23.117 13.646 23.2 13.843 23.2 14.056L25 14.056L26.8 14.056C26.8 12.913 26.356 11.809 25.554 10.99L24.268 12.249ZM25 14.056L23.2 14.056C23.2 14.269 23.117 14.465 22.981 14.604L24.268 15.863L25.554 17.121C26.356 16.302 26.8 15.198 26.8 14.056L25 14.056ZM24.268 15.863L22.981 14.604C22.847 14.741 22.673 14.811 22.5 14.811L22.5 16.611L22.5 18.411C23.653 18.411 24.751 17.942 25.554 17.121L24.268 15.863ZM22.5 16.611L22.5 14.811L21.25 14.811L21.25 16.611L21.25 18.411L22.5 18.411L22.5 16.611ZM3.75 11.5L3.75 9.7C3.577 9.7 3.403 9.63 3.269 9.493L1.982 10.751L0.696 12.01C1.499 12.831 2.597 13.3 3.75 13.3L3.75 11.5ZM1.982 10.751L3.269 9.493C3.133 9.354 3.05 9.157 3.05 8.944L1.25 8.944L-0.55 8.944C-0.55 10.087 -0.106 11.191 0.696 12.01L1.982 10.751ZM1.25 8.944L3.05 8.944C3.05 7.2 3.919 5.417 5.665 4.029L4.545 2.62L3.425 1.211C0.952 3.177 -0.55 5.944 -0.55 8.944L1.25 8.944ZM4.545 2.62L5.665 4.029C7.422 2.632 9.877 1.8 12.5 1.8L12.5 0L12.5 -1.8C9.156 -1.8 5.887 -0.747 3.425 1.211L4.545 2.62ZM12.5 0L12.5 1.8C15.123 1.8 17.578 2.632 19.335 4.029L20.455 2.62L21.575 1.211C19.113 -0.747 15.844 -1.8 12.5 -1.8L12.5 0ZM20.455 2.62L19.335 4.029C21.081 5.417 21.95 7.2 21.95 8.944L23.75 8.944L25.55 8.944C25.55 5.944 24.048 3.177 21.575 1.211L20.455 2.62ZM23.75 8.944L21.95 8.944C21.95 9.157 21.867 9.354 21.731 9.493L23.018 10.751L24.304 12.01C25.106 11.191 25.55 10.087 25.55 8.944L23.75 8.944ZM23.018 10.751L21.731 9.493C21.597 9.63 21.423 9.7 21.25 9.7L21.25 11.5L21.25 13.3C22.403 13.3 23.501 12.831 24.304 12.01L23.018 10.751ZM3.75 16.611L3.75 14.811C2.597 14.811 1.499 15.28 0.696 16.101L1.982 17.36L3.269 18.618C3.403 18.481 3.577 18.411 3.75 18.411L3.75 16.611ZM1.982 17.36L0.696 16.101C-0.106 16.921 -0.55 18.024 -0.55 19.167L1.25 19.167L3.05 19.167C3.05 18.954 3.133 18.757 3.269 18.618L1.982 17.36ZM1.25 19.167L-0.55 19.167C-0.55 20.648 0.025 22.077 1.062 23.136L2.348 21.877L3.635 20.619C3.265 20.24 3.05 19.719 3.05 19.167L1.25 19.167ZM2.348 21.877L1.062 23.136C2.099 24.197 3.515 24.8 5 24.8L5 23L5 21.2C4.496 21.2 4.004 20.996 3.635 20.619L2.348 21.877ZM5 23L5 24.8L20 24.8L20 23L20 21.2L5 21.2L5 23ZM20 23L20 24.8C21.485 24.8 22.901 24.197 23.938 23.136L22.652 21.877L21.365 20.619C20.996 20.996 20.504 21.2 20 21.2L20 23ZM22.652 21.877L23.938 23.136C24.975 22.077 25.55 20.648 25.55 19.167L23.75 19.167L21.95 19.167C21.95 19.719 21.735 20.24 21.365 20.619L22.652 21.877ZM23.75 19.167L25.55 19.167C25.55 18.024 25.106 16.921 24.304 16.101L23.018 17.36L21.731 18.618C21.867 18.757 21.95 18.954 21.95 19.167L23.75 19.167ZM23.018 17.36L24.304 16.101C23.501 15.28 22.403 14.811 21.25 14.811L21.25 16.611L21.25 18.411C21.423 18.411 21.597 18.481 21.731 18.618L23.018 17.36Z" fillRule="nonzero" />
        <path id="figma-derived-503" d="M0 16.5L0 14.667L1.833 12.833L1.833 16.5L0 16.5L0 16.5M3.667 16.5L3.667 11L5.5 9.167L5.5 9.167L5.5 16.5L3.667 16.5L3.667 16.5M7.333 16.5L7.333 9.167L9.167 11.023L9.167 16.5L7.333 16.5L7.333 16.5M11 16.5L11 11.023L12.833 9.19L12.833 16.5L11 16.5L11 16.5M14.667 16.5L14.667 7.333L16.5 5.5L16.5 16.5L14.667 16.5L14.667 16.5M0 11.756L0 9.167L6.417 2.75L10.083 6.417L16.5 0L16.5 2.59L10.083 9.006L6.417 5.34L0 11.756L0 11.756" fillRule="nonzero" />
        <path id="figma-derived-505" d="M3.667 12.833C2.658 12.833 1.795 12.474 1.077 11.756C0.359 11.038 0 10.175 0 9.167C0 8.296 0.279 7.524 0.836 6.852C1.394 6.18 2.108 5.76 2.979 5.592L2.979 5.592L2.338 5.042L0 5.042L0 3.667L4.125 3.667L6.417 5.042L10.083 3.667L12.971 3.667L11.55 1.833L9.167 1.833L9.167 0L12.421 0L14.346 2.475L17.417 0.917L17.417 3.667L15.308 3.667L16.913 5.775C17.142 5.683 17.375 5.615 17.611 5.569C17.848 5.523 18.089 5.5 18.333 5.5C19.342 5.5 20.205 5.859 20.923 6.577C21.641 7.295 22 8.158 22 9.167C22 10.175 21.641 11.038 20.923 11.756C20.205 12.474 19.342 12.833 18.333 12.833C17.325 12.833 16.462 12.474 15.744 11.756C15.026 11.038 14.667 10.175 14.667 9.167C14.667 8.754 14.739 8.353 14.884 7.964C15.03 7.574 15.232 7.211 15.492 6.875L15.033 6.325L11.917 11L9.167 11L7.333 9.396L7.333 9.396C7.257 10.358 6.867 11.172 6.165 11.836C5.462 12.501 4.629 12.833 3.667 12.833L3.667 12.833M3.667 11C4.171 11 4.602 10.82 4.961 10.461C5.32 10.102 5.5 9.671 5.5 9.167C5.5 8.663 5.32 8.231 4.961 7.872C4.602 7.513 4.171 7.333 3.667 7.333C3.163 7.333 2.731 7.513 2.372 7.872C2.013 8.231 1.833 8.663 1.833 9.167C1.833 9.671 2.013 10.102 2.372 10.461C2.731 10.82 3.163 11 3.667 11L3.667 11M10.404 5.5L7.104 6.738L10.404 5.5L13.383 5.5L13.383 5.5L10.404 5.5L10.404 5.5M18.333 11C18.838 11 19.269 10.82 19.628 10.461C19.987 10.102 20.167 9.671 20.167 9.167C20.167 8.663 19.987 8.231 19.628 7.872C19.269 7.513 18.838 7.333 18.333 7.333C17.829 7.333 17.398 7.513 17.039 7.872C16.68 8.231 16.5 8.663 16.5 9.167C16.5 9.671 16.68 10.102 17.039 10.461C17.398 10.82 17.829 11 18.333 11L18.333 11M10.954 9.167L13.383 5.5L10.404 5.5L7.104 6.738L9.854 9.167L10.954 9.167L10.954 9.167" fillRule="nonzero" />
        <path id="figma-derived-507" d="M2.223 6.417C2.437 5.867 2.471 5.378 2.326 4.95C2.181 4.522 1.933 4.094 1.581 3.667C1.077 3.056 0.745 2.479 0.584 1.936C0.424 1.394 0.397 0.749 0.504 0L2.292 0C2.169 0.581 2.15 1.054 2.234 1.421C2.318 1.788 2.536 2.185 2.888 2.612C3.468 3.315 3.839 3.938 3.999 4.48C4.159 5.023 4.163 5.668 4.01 6.417L2.223 6.417L2.223 6.417M5.89 6.417C6.103 5.867 6.142 5.378 6.004 4.95C5.867 4.522 5.622 4.094 5.271 3.667C4.767 3.056 4.431 2.479 4.262 1.936C4.094 1.394 4.064 0.749 4.171 0L5.958 0C5.836 0.581 5.817 1.054 5.901 1.421C5.985 1.788 6.203 2.185 6.554 2.612C7.135 3.315 7.505 3.938 7.666 4.48C7.826 5.023 7.83 5.668 7.677 6.417L5.89 6.417L5.89 6.417M9.556 6.417C9.77 5.867 9.808 5.378 9.671 4.95C9.533 4.522 9.289 4.094 8.938 3.667C8.433 3.056 8.097 2.479 7.929 1.936C7.761 1.394 7.731 0.749 7.838 0L9.625 0C9.503 0.581 9.484 1.054 9.568 1.421C9.652 1.788 9.869 2.185 10.221 2.612C10.801 3.315 11.172 3.938 11.332 4.48C11.493 5.023 11.497 5.668 11.344 6.417L9.556 6.417L9.556 6.417M2.75 15.583C1.986 15.583 1.337 15.316 0.802 14.781C0.267 14.247 0 13.597 0 12.833L0 8.25L12.856 8.25C12.933 7.731 13.139 7.276 13.475 6.886C13.811 6.497 14.224 6.218 14.712 6.05L18.952 4.629L19.525 6.371L15.285 7.792C15.102 7.853 14.953 7.964 14.839 8.124C14.724 8.284 14.667 8.464 14.667 8.663L14.667 12.833C14.667 13.597 14.399 14.247 13.865 14.781C13.33 15.316 12.681 15.583 11.917 15.583L2.75 15.583L2.75 15.583M2.75 13.75L11.917 13.75C12.176 13.75 12.394 13.662 12.57 13.486C12.745 13.311 12.833 13.093 12.833 12.833L12.833 10.083L1.833 10.083L1.833 12.833C1.833 13.093 1.921 13.311 2.097 13.486C2.273 13.662 2.49 13.75 2.75 13.75L2.75 13.75M7.333 11.917L7.333 11.917L7.333 11.917L7.333 11.917L7.333 11.917L7.333 11.917L7.333 11.917L7.333 11.917L7.333 11.917L7.333 11.917" fillRule="nonzero" />
        <path id="figma-derived-566" d="M6.667 10L2.5 5.833L3.667 4.625L5.833 6.792L5.833 0L7.5 0L7.5 6.792L9.667 4.625L10.833 5.833L6.667 10L6.667 10M1.667 13.333C1.208 13.333 0.816 13.17 0.49 12.844C0.163 12.517 0 12.125 0 11.667L0 9.167L1.667 9.167L1.667 11.667L1.667 11.667L1.667 11.667L11.667 11.667L11.667 11.667L11.667 11.667L11.667 9.167L13.333 9.167L13.333 11.667C13.333 12.125 13.17 12.517 12.844 12.844C12.517 13.17 12.125 13.333 11.667 13.333L1.667 13.333L1.667 13.333" fillRule="nonzero" />
        <path id="figma-derived-335" d="M4.125 -0.649C3.767 -0.857 3.308 -0.734 3.101 -0.375C2.893 -0.017 3.016 0.442 3.375 0.649L3.75 0L4.125 -0.649ZM7.5 2.167L8.25 2.167C8.25 1.899 8.107 1.651 7.875 1.517L7.5 2.167ZM7.5 6.5L7.875 7.149C8.107 7.015 8.25 6.768 8.25 6.5L7.5 6.5ZM3.75 8.667L3.375 9.316C3.607 9.45 3.893 9.45 4.125 9.316L3.75 8.667ZM0 6.5L-0.75 6.5C-0.75 6.768 -0.607 7.015 -0.375 7.149L0 6.5ZM0 2.167L-0.375 1.517C-0.607 1.651 -0.75 1.899 -0.75 2.167L0 2.167ZM3.75 0M3.75 0M3.75 0L3.375 0.649L7.125 2.816L7.5 2.167L7.875 1.517L4.125 -0.649L3.75 0ZM7.5 2.167L6.75 2.167L6.75 6.5L7.5 6.5L8.25 6.5L8.25 2.167L7.5 2.167ZM7.5 6.5L7.125 5.851L3.375 8.017L3.75 8.667L4.125 9.316L7.875 7.149L7.5 6.5ZM3.75 8.667L4.125 8.017L0.375 5.851L0 6.5L-0.375 7.149L3.375 9.316L3.75 8.667ZM0 6.5L0.75 6.5L0.75 2.167L0 2.167L-0.75 2.167L-0.75 6.5L0 6.5ZM0 2.167L0.375 2.816L4.125 0.649L3.75 0L3.375 -0.649L-0.375 1.517L0 2.167ZM3.75 0" fillRule="nonzero" />
        <path id="figma-derived-336" d="M0.75 0C0.75 -0.414 0.414 -0.75 0 -0.75C-0.414 -0.75 -0.75 -0.414 -0.75 0L0 0L0.75 0ZM-0.75 8.667C-0.75 9.081 -0.414 9.417 0 9.417C0.414 9.417 0.75 9.081 0.75 8.667L0 8.667L-0.75 8.667ZM0 0L-0.75 0L-0.75 8.667L0 8.667L0.75 8.667L0.75 0L0 0Z" fillRule="nonzero" />
        <path id="figma-derived-337" d="M7.875 0.649C8.234 0.442 8.357 -0.017 8.149 -0.375C7.942 -0.734 7.483 -0.857 7.125 -0.649L7.5 0L7.875 0.649ZM3.75 2.167L3.375 2.816C3.607 2.95 3.893 2.95 4.125 2.816L3.75 2.167ZM0.375 -0.649C0.017 -0.857 -0.442 -0.734 -0.649 -0.375C-0.857 -0.017 -0.734 0.442 -0.375 0.649L0 0L0.375 -0.649ZM7.5 0L7.125 -0.649L3.375 1.517L3.75 2.167L4.125 2.816L7.875 0.649L7.5 0ZM3.75 2.167L4.125 1.517L0.375 -0.649L0 0L-0.375 0.649L3.375 2.816L3.75 2.167Z" fillRule="nonzero" />
        <path id="figma-derived-338" d="M9 18C6.7 18 4.696 17.237 2.987 15.712C1.279 14.188 0.3 12.283 0.05 10L2.1 10C2.333 11.733 3.104 13.167 4.412 14.3C5.721 15.433 7.25 16 9 16C10.95 16 12.604 15.321 13.962 13.962C15.321 12.604 16 10.95 16 9C16 7.05 15.321 5.396 13.962 4.037C12.604 2.679 10.95 2 9 2C7.85 2 6.775 2.267 5.775 2.8C4.775 3.333 3.933 4.067 3.25 5L6 5L6 7L0 7L0 1L2 1L2 3.35C2.85 2.283 3.888 1.458 5.113 0.875C6.338 0.292 7.633 0 9 0C10.25 0 11.421 0.237 12.512 0.712C13.604 1.188 14.554 1.829 15.363 2.638C16.171 3.446 16.813 4.396 17.288 5.488C17.763 6.579 18 7.75 18 9C18 10.25 17.763 11.421 17.288 12.512C16.813 13.604 16.171 14.554 15.363 15.363C14.554 16.171 13.604 16.813 12.512 17.288C11.421 17.763 10.25 18 9 18L9 18M11.8 13.2L8 9.4L8 4L10 4L10 8.6L13.2 11.8L11.8 13.2L11.8 13.2" fillRule="nonzero" />
        <path id="figma-derived-339" d="M12 16L12 9L16 9L16 16L12 16L12 16M6 16L6 0L10 0L10 16L6 16L6 16M0 16L0 5L4 5L4 16L0 16L0 16" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="586:2000" style={rootLayer("100%", 1810, {
      overflow: "visible",
      position: "relative",

      background: "linear-gradient(#f7f9fb, #f7f9fb)",
      backgroundColor: "#ffffff",
      ...col2
    })}>
    <div data-figma-id="733:3316" style={{
        background: "rgba(255, 255, 255, 0.8)",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        ...col2,
        position: "relative",
        height: 64,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="404:2116" style={{
          ...row1,
          minWidth: 0,
          padding: "0 20px",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:2117" style={fixedLayer(55, 55, {
            background: "#2457c5",
            borderRadius: 12,
            ...row1,
            overflow: "hidden",
            justifyContent: "center"
          })}>
          <svg data-figma-id="404:2118" viewBox="-1.8 -1.8 28.6 26.6" preserveAspectRatio="none" style={fixedLayer(28.6, 26.6, {
              left: -1.8,
              top: -1.8
            })}>
            <use href="#figma-derived-301" fill="transparent" />
            <use href="#figma-derived-stroke-302" fill="#eff1f5" />
          </svg>
        </div>
        <div data-figma-id="404:2119" style={fixedLayer("max-content", 28, {
            ...row1,
            maxWidth: 200,
            overflow: "hidden",
            flexDirection: "column"
          })}>
          <span data-figma-id="404:2120" style={{
              ...font_Manrope,
              color: "#000000",
              fontSize: 20,
              fontWeight: 800,
              lineHeight: "28px",
              textAlign: "center",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
            {"Estadísticas"}
          </span>
        </div>
        <div data-figma-id="404:2121" style={fixedLayer(55, 55, {
            ...surface1,
            ...row2
          })}>
          <div data-figma-id="404:2122" style={fixedLayer(55, 55, {
              background: "#93afeb",
              borderRadius: 100,
              ...row1,
              overflow: "hidden",
              justifyContent: "center"
            })}>
            <span data-figma-id="404:785" style={{
                ...font_Manrope,
                color: "#000000",
                fontSize: 10,
                fontWeight: 800,
                lineHeight: "15px",
                position: "relative",
                flexShrink: 0
              }}>
              {"AT"}
            </span>
          </div>
        </div>
      </div>
    </div>
    <StatsCategoryTabs active="ventas-hoy" />
    <div data-figma-id="586:2001" style={{
        background: "#f7f9fb",
        minWidth: 0,
        display: "flex",
        padding: "10px 20px 96px",
        boxSizing: "border-box",
        flexDirection: "column",
        position: "relative",
        height: 1582,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="586:2002" style={{
          ...row1,
          minWidth: 0,
          padding: "14px 20px",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          position: "relative",
          height: 1563,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="586:2003" style={fixedLayer(350, "max-content", {
            ...row1,
            overflow: "hidden",
            padding: "10px 0",
            boxSizing: "border-box",
            gap: 15
          })}>
          <div data-figma-id="586:2004" style={fixedLayer("max-content", 32, {
              ...surface1,
              background: "#2457c5",
              borderRadius: 9999,
              ...col4
            })}>
            <span data-figma-id="586:2005" style={{
                ...font_PlusJakartaS,
                ...text2,
                ...text4,
                color: "#ffffff",
                letterSpacing: "0.24px",
                textAlign: "center",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
              {"Hoy"}
            </span>
          </div>
          <div data-figma-id="586:2006" style={fixedLayer("max-content", 32, {
              ...surface1,
              background: "#ffffff",
              borderRadius: 9999,
              ...col4
            })}>
            <span data-figma-id="586:2007" style={{
                ...font_PlusJakartaS_12,
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
              {"Ayer"}
            </span>
          </div>
          <div data-figma-id="586:2008" style={fixedLayer("max-content", 32, {
              ...surface1,
              background: "#ffffff",
              borderRadius: 9999,
              ...col4
            })}>
            <span data-figma-id="586:2009" style={{
                ...font_PlusJakartaS_12,
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
              {"Últimos 7 días"}
            </span>
          </div>
        </div>
        <div data-figma-id="586:2066" style={fixedLayer(350, 397, col3)}>
          <div data-figma-id="586:2067" style={{
              ...surface1,
              ...surface2,
              minWidth: 0,
              overflow: "hidden",
              display: "flex",
              padding: 20,
              boxSizing: "border-box",
              flexDirection: "column",
              gap: 14,
              position: "relative",
              height: 397,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="586:2068" style={{
                minWidth: 0,
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="586:2069" style={fixedLayer(259, 74, col5)}>
                <span data-figma-id="586:2070" style={fixedLayer(201, 20, {
                    ...font_PlusJakartaS_12b,
                    ...row1
                  })}>
                  {"VENTAS NETAS TOTALES"}
                </span>
                <span data-figma-id="586:2071" style={{
                    ...font_PlusJakartaS,
                    color: "#191c1e",
                    whiteSpace: "pre",
                    fontSize: 32,
                    fontWeight: 800,
                    fontVariationSettings: "\"wght\" 800",
                    lineHeight: "40.32px",
                    letterSpacing: "-0.8px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"$1.420.000"}
                </span>
              </div>
            </div>
            <div data-figma-id="586:2076" style={{
                ...surface3,
                ...row1,
                minWidth: 0,
                padding: "8px 12px",
                boxSizing: "border-box",
                justifyContent: "space-between",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="586:2077" style={fixedLayer(70, "max-content", {
                  ...row1,
                  gap: 6
                })}>
                <div data-figma-id="586:2080" style={fixedLayer("max-content", 16, col3)}>
                  <span data-figma-id="586:2081" style={{
                      ...font_PlusJakartaS_12c,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Ayer al corte"}
                  </span>
                </div>
              </div>
              <div data-figma-id="586:2082" style={fixedLayer("max-content", 16, col3)}>
                <span data-figma-id="586:2083" style={{
                    ...font_PlusJakartaS_12d,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"$1.310.000"}
                </span>
              </div>
            </div>
            <div data-figma-id="733:8178" style={{
                ...row3,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="733:8179" style={fixedLayer(263, 83.5, col5)}>
                <span data-figma-id="733:8180" style={fixedLayer(169, 20, {
                    ...font_PlusJakartaS_12b,
                    ...row1
                  })}>
                  {"Utilidades brutas"}
                </span>
                <span data-figma-id="733:8181" style={{
                    ...font_PlusJakartaS,
                    ...text1,
                    color: "#000000",
                    whiteSpace: "pre",
                    fontSize: 30,
                    lineHeight: "37.8px",
                    letterSpacing: "-0.2px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"$880.000"}
                </span>
                <span data-figma-id="733:8183" style={{
                    ...font_PlusJakartaS,
                    ...text1,
                    ...text5,
                    color: "#000000",
                    whiteSpace: "pre",
                    textAlign: "right",
                    ...row4,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"62% margen"}
                </span>
              </div>
            </div>
            <div data-figma-id="586:2039" style={{
                background: "rgba(242, 244, 246, 0.7)",
                borderRadius: 8,
                ...row1,
                minWidth: 0,
                padding: "8px 12px 6px",
                boxSizing: "border-box",
                justifyContent: "space-between",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="586:2040" style={fixedLayer("max-content", 14, col3)}>
                <span data-figma-id="586:2041" style={{
                    ...font_PlusJakartaS,
                    ...text8,
                    whiteSpace: "pre",
                    fontWeight: 400,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Variación neta vs ayer"}
                </span>
              </div>
              <div data-figma-id="586:2042" style={fixedLayer("max-content", 14, col3)}>
                <span data-figma-id="586:2043" style={{
                    ...font_PlusJakartaS,
                    ...text1,
                    ...text5,
                    color: "#2457c5",
                    whiteSpace: "pre",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"+$70.000"}
                </span>
              </div>
            </div>
            <div data-figma-id="733:8199" style={{
                ...row3,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="733:8200" style={fixedLayer("max-content", 83.5, col5)}>
                <span data-figma-id="733:8201" style={fixedLayer(252, 20, {
                    ...font_PlusJakartaS_12b,
                    ...row1
                  })}>
                  {"Cantidad de pedidos realizados"}
                </span>
                <span data-figma-id="733:8202" style={{
                    ...font_PlusJakartaS,
                    ...text1,
                    color: "#000000",
                    whiteSpace: "pre",
                    fontSize: 20,
                    lineHeight: "28px",
                    letterSpacing: "-0.2px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"50 ordenes"}
                </span>
                <span data-figma-id="733:8203" style={{
                    ...font_PlusJakartaS,
                    ...text1,
                    ...text5,
                    color: "#434655",
                    whiteSpace: "pre",
                    textAlign: "right",
                    ...row4,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Ritmo: 4.8 / hr"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="586:2085" style={fixedLayer(350, 238, col3)}>
          <div data-figma-id="586:2086" style={{
              ...surface1,
              ...surface2,
              minWidth: 0,
              display: "flex",
              padding: 20,
              boxSizing: "border-box",
              flexDirection: "column",
              gap: 14,
              position: "relative",
              height: 238,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="586:2087" style={{
                minWidth: 0,
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="586:2088" style={fixedLayer(310, 56, {
                  ...layout2,
                  display: "flex"
                })}>
                <div data-figma-id="586:2089" style={{
                    ...row1,
                    minWidth: 0,
                    gap: 6,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="586:2092" style={fixedLayer(310, 22, {
                      display: "flex",
                      padding: "0 38.66px 0 0",
                      boxSizing: "border-box",
                      flexDirection: "column"
                    })}>
                    <span data-figma-id="586:2093" style={{
                        ...font_PlusJakartaS_16,
                        ...row1,
                        position: "relative",
                        width: 310,
                        flexShrink: 0
                      }}>
                      {"Punto de Equilibrio vs Compras"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="586:2094" style={{
                    ...col2,
                    position: "relative",
                    height: 32,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="586:2095" style={{
                      ...font_PlusJakartaS,
                      ...text3,
                      ...text4,
                      color: "#434655",
                      whiteSpace: "normal",
                      minWidth: 0,
                      position: "relative",
                      height: 32,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span style={{
                        position: "absolute",
                        top: 0,
                        whiteSpace: "pre",
                        lineHeight: "16px",
                        left: 0,
                        textAlign: "left"
                      }}>{"Relación ventas mínimas vs egresos de materias \nprimas"}</span>
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="586:2098" style={{
                ...surface3,
                minWidth: 0,
                display: "flex",
                padding: 14,
                boxSizing: "border-box",
                flexDirection: "column",
                gap: 12,
                position: "relative",
                height: 128,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="586:2099" style={{
                  ...row3,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="586:2100" style={fixedLayer("max-content", 16, col3)}>
                  <span data-figma-id="586:2101" style={{
                      ...font_PlusJakartaS_12c,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Venta mínima requerida"}
                  </span>
                </div>
                <div data-figma-id="586:2102" style={fixedLayer("max-content", 16, col3)}>
                  <span data-figma-id="586:2103" style={{
                      ...font_PlusJakartaS_12d,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"$1.100.000"}
                  </span>
                </div>
              </div>
              <div data-figma-id="586:2104" style={{
                  background: "#e6e8ea",
                  borderRadius: 9999,
                  minWidth: 0,
                  overflow: "hidden",
                  display: "flex",
                  position: "relative",
                  height: 12,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="586:2105" style={{
                    background: "#2457c5",
                    borderRadius: 9999,
                    position: "relative",
                    width: "30%",
                    height: "100%",
                    flexShrink: 0
                  }} />
              </div>
              <div data-figma-id="586:2107" style={{
                  ...layout1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 8,
                  position: "relative",
                  height: 48,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="733:8186" style={{
                    ...row5,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="586:2114" style={{
                      ...font_PlusJakartaS_11,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Faltante para el mínimo"}
                  </span>
                  <span data-figma-id="733:8193" style={{
                      ...font_PlusJakartaS_11,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"$500.000"}
                  </span>
                </div>
                <div data-figma-id="733:8195" style={{
                    ...row5,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="733:8196" style={{
                      ...font_PlusJakartaS_11,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Completado"}
                  </span>
                  <span data-figma-id="733:8197" style={{
                      ...font_PlusJakartaS_11,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"30%"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="738:8861" style={fixedLayer(350, 297, col6)}>
          <div data-figma-id="733:8823" style={fixedLayer(350, 297, {
              ...surface2,
              ...col7
            })}>
            <div data-figma-id="738:9010" style={{
                ...row6,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="738:9000" style={fixedLayer(69, "max-content", {
                  ...surface4,
                  ...row7
                })}>
                <span data-figma-id="738:9001" style={{
                    ...font_Manrope,
                    color: "#2457c5",
                    fontSize: 12,
                    fontWeight: 800,
                    lineHeight: "17px",
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Ventas"}
                </span>
              </div>
              <div data-figma-id="738:9002" style={fixedLayer(127, "max-content", {
                  boxShadow: "inset 0 0 0 1px #93afeb",
                  borderRadius: 90,
                  ...row7
                })}>
                <span data-figma-id="738:9003" style={{
                    ...font_Manrope,
                    color: "#111827",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "17px",
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Utilidades brutas"}
                </span>
              </div>
            </div>
            <div data-figma-id="733:8824" style={{
                ...row8,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="733:8825" style={fixedLayer("max-content", 22, col3)}>
                <span data-figma-id="733:8826" style={{
                    ...font_PlusJakartaS_16,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Comparativa Histórica"}
                </span>
              </div>
            </div>
            <div data-figma-id="733:8827" style={{
                ...col8,
                position: "relative",
                height: 198,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="733:8828" style={{
                  ...surface3,
                  ...row9,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="733:8829" style={fixedLayer(167, "max-content", {
                    ...row1,
                    gap: 12
                  })}>
                  <div data-figma-id="733:8830" style={fixedLayer(10, 10, {
                      background: "#2457c5",
                      borderRadius: 9999
                    })} />
                  <div data-figma-id="733:8831" style={fixedLayer("max-content", 40, col9)}>
                    <div data-figma-id="733:8832" style={{
                        minWidth: 145,
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        height: 16,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="733:8833" style={{
                          ...font_PlusJakartaS_12d,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Hoy"}
                      </span>
                    </div>
                    <span data-figma-id="733:8834" style={{
                        ...font_PlusJakartaS_12c,
                        ...row1,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"50 órdenes completadas"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="733:8835" style={fixedLayer("max-content", 46, col10)}>
                  <div data-figma-id="733:8836" style={fixedLayer("max-content", 22, col1)}>
                    <span data-figma-id="733:8837" style={{
                        ...font_PlusJakartaS,
                        ...text1,
                        ...text7,
                        whiteSpace: "pre",
                        textAlign: "right",
                        ...row4,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"$1.420.000"}
                    </span>
                  </div>
                  <span data-figma-id="733:8838" style={{
                      ...font_PlusJakartaS,
                      ...text2,
                      ...text5,
                      color: "#2457c5",
                      textAlign: "right",
                      ...row4,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"En curso"}
                  </span>
                </div>
              </div>
              <div data-figma-id="733:8839" style={{
                  ...row9,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="733:8840" style={fixedLayer(140, "max-content", {
                    ...row1,
                    gap: 12
                  })}>
                  <div data-figma-id="733:8841" style={fixedLayer(10, 10, surface5)} />
                  <div data-figma-id="733:8842" style={fixedLayer("max-content", 40, col9)}>
                    <div data-figma-id="733:8843" style={{
                        minWidth: 118,
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        height: 16,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="733:8844" style={{
                          ...font_PlusJakartaS_12d,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Ayer"}
                      </span>
                    </div>
                    <span data-figma-id="733:8845" style={{
                        ...font_PlusJakartaS_12c,
                        ...row1,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"47 pedidos cerrados"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="733:8846" style={fixedLayer("max-content", 25.5, col10)}>
                  <div data-figma-id="733:8847" style={fixedLayer("max-content", 22, col1)}>
                    <span data-figma-id="733:8848" style={{
                        ...font_PlusJakartaS,
                        ...text2,
                        ...text7,
                        textAlign: "right",
                        ...row4,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"$1.310.000"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="733:8850" style={{
                  ...row9,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="733:8851" style={fixedLayer(167, "max-content", {
                    ...row1,
                    gap: 12
                  })}>
                  <div data-figma-id="733:8852" style={fixedLayer(10, 10, surface5)} />
                  <div data-figma-id="733:8853" style={fixedLayer("max-content", 40, col9)}>
                    <div data-figma-id="733:8854" style={{
                        minWidth: 145,
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        height: 16,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="733:8855" style={{
                          ...font_PlusJakartaS_12d,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Últimos 7 días"}
                      </span>
                    </div>
                    <span data-figma-id="733:8856" style={{
                        ...font_PlusJakartaS_12c,
                        ...row1,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"322 pedidos acumulados"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="733:8857" style={fixedLayer("max-content", 25.5, col10)}>
                  <div data-figma-id="733:8858" style={fixedLayer("max-content", 22, col1)}>
                    <span data-figma-id="733:8859" style={{
                        ...font_PlusJakartaS,
                        ...text2,
                        ...text7,
                        textAlign: "right",
                        ...row4,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"$9.150.000"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="738:8900" style={fixedLayer(350, 333, col6)}>
          <div data-figma-id="738:8901" style={fixedLayer(350, 323, {
              ...surface2,
              ...col7
            })}>
            <div data-figma-id="738:9018" style={{
                ...row6,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="738:9000~2" style={fixedLayer(69, "max-content", {
                  ...surface4,
                  ...row7
                })}>
                <span data-figma-id="738:9001~2" style={{
                    ...font_Manrope,
                    color: "#2457c5",
                    fontSize: 12,
                    fontWeight: 800,
                    lineHeight: "17px",
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Ventas"}
                </span>
              </div>
              <div data-figma-id="738:9002~2" style={fixedLayer(127, "max-content", {
                  boxShadow: "inset 0 0 0 1px #93afeb",
                  borderRadius: 90,
                  ...row7
                })}>
                <span data-figma-id="738:9003~2" style={{
                    ...font_Manrope,
                    color: "#111827",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "17px",
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Utilidades brutas"}
                </span>
              </div>
            </div>
            <div data-figma-id="738:8902" style={{
                ...row8,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="738:8903" style={fixedLayer("max-content", 22, col3)}>
                <span data-figma-id="738:8904" style={{
                    ...font_PlusJakartaS_16,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Ventas por días (Ultimos 7 días)"}
                </span>
              </div>
            </div>
            <div data-figma-id="738:8905" style={{
                ...col8,
                position: "relative",
                height: 200,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="738:8940" style={{
                  ...col8,
                  position: "relative",
                  height: 200,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="738:8997" style={{
                    ...font_PlusJakartaS,
                    ...text3,
                    ...text4,
                    color: "#434655",
                    whiteSpace: "normal",
                    minWidth: 0,
                    position: "relative",
                    height: 32,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span style={{
                      position: "absolute",
                      top: 0,
                      whiteSpace: "pre",
                      lineHeight: "16px",
                      left: 0,
                      textAlign: "left"
                    }}>{"El dia con mas ventas de los últimos 7 días ha sido el \njueves. Con $810.000."}</span>
                </span>
                <FilaLunes data-figma-id="738:8941" width={52} text="Lunes" text2="$720.000" />
                <FilaLunes data-figma-id="738:8948" width={58} text="Martes" text2="$690.000" />
                <FilaLunes data-figma-id="738:8955" width={77} text="Miércoles" text2="$810.000" />
                <div data-figma-id="738:8973" style={{
                    ...surface3,
                    ...row10,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="738:8974" style={fixedLayer(58, "max-content", {
                      ...row1,
                      gap: 4
                    })}>
                    <div data-figma-id="738:8975" style={fixedLayer(8, 8, {
                        background: "#0037b0",
                        borderRadius: 9999
                      })} />
                    <div data-figma-id="738:8976" style={fixedLayer("max-content", 20, col3)}>
                      <span data-figma-id="738:8977" style={{
                          ...font_PlusJakartaS,
                          ...text6,
                          color: "#0037b0",
                          whiteSpace: "pre",
                          fontWeight: 700,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Jueves"}
                      </span>
                    </div>
                  </div>
                  <div data-figma-id="738:8978" style={fixedLayer("max-content", 20, col3)}>
                    <span data-figma-id="738:8979" style={{
                        ...font_PlusJakartaS,
                        ...text6,
                        color: "#1f4fba",
                        whiteSpace: "pre",
                        fontWeight: 700,
                        ...row1,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"$810.000"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="586:2061" style={fixedLayer(350, 68, {
            display: "flex",
            padding: "10px 0",
            boxSizing: "border-box",
            flexDirection: "column"
          })}>
          <div data-figma-id="738:9246" style={fixedLayer(350, 48, {
              background: "#2457c5",
              borderRadius: 9999,
              ...row1,
              justifyContent: "center",
              gap: 4
            })}>
            <div data-figma-id="738:9238" style={{
                background: "rgba(255, 255, 255, 0.002)",
                borderRadius: 9999,
                boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                left: 0,
                top: 0,
                height: 48,
                right: 0
              }} />
            <div data-figma-id="738:9239" style={fixedLayer("max-content", 13.333, col6)}>
              <svg data-figma-id="738:9240" viewBox="0 0 13.333 13.333" preserveAspectRatio="none" style={fixedLayer(13.333, 13.333)}>
                <use href="#figma-derived-566" fill="#ffffff" />
              </svg>
            </div>
            <div data-figma-id="738:9241" style={fixedLayer("max-content", 20, col6)}>
              <span data-figma-id="738:9242" style={{
                  ...font_PlusJakartaS,
                  ...text2,
                  ...text6,
                  color: "#ffffff",
                  textAlign: "center",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Descargar  datos y estadisticas"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="725:2165" style={{
        background: "rgba(255, 255, 255, 0.9)",
        filter: "drop-shadow(0px -2px 12px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 64,
        zIndex: 30,
        flexShrink: 0
      }}>
      <div data-figma-id="404:706" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 16px",
          boxSizing: "border-box",
          position: "relative",
          width: "100%",
          height: 64,
          flexShrink: 0
        }}>
        <div data-figma-id="404:707" style={fixedLayer("max-content", 44, {
            ...row1,
            ...layout2,
            minWidth: 64,
            minHeight: 44,
            padding: "4px 2.89px",
            boxSizing: "border-box",
            justifyContent: "center"
          })}>
          <div data-figma-id="404:708" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <InventarioNavIcon color="#434655" />
          </div>
          <div data-figma-id="404:718" style={fixedLayer("max-content", 14, col3)}>
            <span data-figma-id="404:719" style={{
                ...font_PlusJakartaS,
                ...text1,
                ...text5,
                color: "#434655",
                whiteSpace: "pre",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Inventario"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:720" style={fixedLayer("max-content", 44, {
            ...row1,
            ...layout2,
            minWidth: 64,
            minHeight: 44,
            padding: "2px 7.92px",
            boxSizing: "border-box",
            justifyContent: "center"
          })}>
          <div data-figma-id="404:721" style={fixedLayer("max-content", 18, col3)}>
            <svg data-figma-id="404:722" viewBox="0 0 18 18" preserveAspectRatio="none" style={fixedLayer(18, 18)}>
              <use href="#figma-derived-338" fill="#434655" />
            </svg>
          </div>
          <div data-figma-id="404:723" style={fixedLayer("max-content", 14, col3)}>
            <span data-figma-id="404:724" style={{
                ...font_PlusJakartaS,
                ...text1,
                ...text5,
                color: "#434655",
                whiteSpace: "pre",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Historial"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:725" style={fixedLayer("max-content", 44, {
            background: "#d0e4ff",
            borderRadius: 9999,
            ...row1,
            ...layout2,
            padding: "6px 16px",
            boxSizing: "border-box",
            justifyContent: "center"
          })}>
          <div data-figma-id="404:726" style={fixedLayer("max-content", 16, col3)}>
            <svg data-figma-id="404:727" viewBox="0 0 16 16" preserveAspectRatio="none" style={fixedLayer(16, 16)}>
              <use href="#figma-derived-339" fill="#2457c5" />
            </svg>
          </div>
          <div data-figma-id="404:728" style={fixedLayer("max-content", 14, col3)}>
            <span data-figma-id="404:729" style={{
                ...font_PlusJakartaS,
                ...text2,
                ...text5,
                color: "#2457c5",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Estadísticas"}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default Frame1NMerosDelNegocio;