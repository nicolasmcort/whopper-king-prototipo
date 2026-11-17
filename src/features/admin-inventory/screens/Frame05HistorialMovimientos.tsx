import React from 'react';
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
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const layout2: React.CSSProperties = {
  minHeight: 44,
  boxSizing: "border-box",
  justifyContent: "center"
};
const layout3: React.CSSProperties = {
  padding: 4,
  flexDirection: "column",
  gap: 2
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #ffffff",
  borderRadius: 12
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #93afeb",
  borderRadius: 90
};
const font_PlusJakartaS_11: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontSize: 11,
  lineHeight: "14px",
  letterSpacing: "0.44px"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  color: "#5c6270",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "21.856px"
};
const row2: React.CSSProperties = {
  ...row1,
  ...layout2,
  minWidth: 0,
  overflow: "hidden",
  padding: "10px 6px"
};
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
export function Frame05HistorialMovimientos() {
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
        <path id="figma-derived-25" d="M14.364 15.637C14.715 15.988 15.285 15.988 15.637 15.637C15.988 15.285 15.988 14.715 15.637 14.364L15 15L14.364 15.637ZM12.02 10.747C11.668 10.396 11.099 10.396 10.747 10.747C10.396 11.099 10.396 11.668 10.747 12.02L11.383 11.383L12.02 10.747ZM15 15L15.637 14.364L12.02 10.747L11.383 11.383L10.747 12.02L14.364 15.637L15 15ZM13.333 6.667L12.433 6.667C12.433 9.852 9.852 12.433 6.667 12.433L6.667 13.333L6.667 14.233C10.846 14.233 14.233 10.846 14.233 6.667L13.333 6.667ZM6.667 13.333L6.667 12.433C3.482 12.433 0.9 9.852 0.9 6.667L0 6.667L-0.9 6.667C-0.9 10.846 2.488 14.233 6.667 14.233L6.667 13.333ZM0 6.667L0.9 6.667C0.9 3.482 3.482 0.9 6.667 0.9L6.667 0L6.667 -0.9C2.488 -0.9 -0.9 2.488 -0.9 6.667L0 6.667ZM6.667 0L6.667 0.9C9.852 0.9 12.433 3.482 12.433 6.667L13.333 6.667L14.233 6.667C14.233 2.488 10.846 -0.9 6.667 -0.9L6.667 0Z" fillRule="nonzero" />
        <path id="figma-vector-443-corners-2-0" d="M5 0L5 4M13 0L13 4M0 8L18 8M5 12L5.01 12M9 12L9.01 12M13 12L13.01 12M5 16L5.01 16M9 16L9.01 16M13 16L13.01 16M2 2L16 2C17.105 2 18 2.895 18 4L18 18C18 19.105 17.105 20 16 20L2 20C0.895 20 0 19.105 0 18L0 4C0 2.895 0.895 2 2 2Z" fillRule="nonzero" />
        <path id="figma-vector-94-corners-2-0" d="M0 0L6 6L12 0" fillRule="nonzero" />
        <path id="figma-vector-23-corners-2-0" d="M7 2L0 2M9 16L0 16M11 0L11 4M13 14L13 18M18 9L9 9M18 16L13 16M18 2L11 2M5 7L5 11M5 9L0 9" fillRule="nonzero" />
        <path id="figma-derived-593" d="M0 14L-0.883 13.823L-1.147 15.147L0.177 14.883L0 14ZM1 9L0.364 8.364L0.171 8.556L0.117 8.823L1 9ZM10 0L10.636 -0.636L10 -1.273L9.364 -0.636L10 0ZM14 4L14.636 4.636L15.273 4L14.636 3.364L14 4ZM5 13L5.177 13.883L5.444 13.829L5.636 13.636L5 13ZM0 14L0.883 14.177L1.883 9.177L1 9L0.117 8.823L-0.883 13.823L0 14ZM1 9L1.636 9.636L10.636 0.636L10 0L9.364 -0.636L0.364 8.364L1 9ZM10 0L9.364 0.636L13.364 4.636L14 4L14.636 3.364L10.636 -0.636L10 0ZM14 4L13.364 3.364L4.364 12.364L5 13L5.636 13.636L14.636 4.636L14 4ZM5 13L4.823 12.117L-0.177 13.117L0 14L0.177 14.883L5.177 13.883L5 13ZM8 2L7.364 2.636L11.364 6.636L12 6L12.636 5.364L8.636 1.364L8 2Z" fillRule="nonzero" />
        <path id="figma-derived-335" d="M4.125 -0.649C3.767 -0.857 3.308 -0.734 3.101 -0.375C2.893 -0.017 3.016 0.442 3.375 0.649L3.75 0L4.125 -0.649ZM7.5 2.167L8.25 2.167C8.25 1.899 8.107 1.651 7.875 1.517L7.5 2.167ZM7.5 6.5L7.875 7.149C8.107 7.015 8.25 6.768 8.25 6.5L7.5 6.5ZM3.75 8.667L3.375 9.316C3.607 9.45 3.893 9.45 4.125 9.316L3.75 8.667ZM0 6.5L-0.75 6.5C-0.75 6.768 -0.607 7.015 -0.375 7.149L0 6.5ZM0 2.167L-0.375 1.517C-0.607 1.651 -0.75 1.899 -0.75 2.167L0 2.167ZM3.75 0M3.75 0M3.75 0L3.375 0.649L7.125 2.816L7.5 2.167L7.875 1.517L4.125 -0.649L3.75 0ZM7.5 2.167L6.75 2.167L6.75 6.5L7.5 6.5L8.25 6.5L8.25 2.167L7.5 2.167ZM7.5 6.5L7.125 5.851L3.375 8.017L3.75 8.667L4.125 9.316L7.875 7.149L7.5 6.5ZM3.75 8.667L4.125 8.017L0.375 5.851L0 6.5L-0.375 7.149L3.375 9.316L3.75 8.667ZM0 6.5L0.75 6.5L0.75 2.167L0 2.167L-0.75 2.167L-0.75 6.5L0 6.5ZM0 2.167L0.375 2.816L4.125 0.649L3.75 0L3.375 -0.649L-0.375 1.517L0 2.167ZM3.75 0" fillRule="nonzero" />
        <path id="figma-derived-336" d="M0.75 0C0.75 -0.414 0.414 -0.75 0 -0.75C-0.414 -0.75 -0.75 -0.414 -0.75 0L0 0L0.75 0ZM-0.75 8.667C-0.75 9.081 -0.414 9.417 0 9.417C0.414 9.417 0.75 9.081 0.75 8.667L0 8.667L-0.75 8.667ZM0 0L-0.75 0L-0.75 8.667L0 8.667L0.75 8.667L0.75 0L0 0Z" fillRule="nonzero" />
        <path id="figma-derived-337" d="M7.875 0.649C8.234 0.442 8.357 -0.017 8.149 -0.375C7.942 -0.734 7.483 -0.857 7.125 -0.649L7.5 0L7.875 0.649ZM3.75 2.167L3.375 2.816C3.607 2.95 3.893 2.95 4.125 2.816L3.75 2.167ZM0.375 -0.649C0.017 -0.857 -0.442 -0.734 -0.649 -0.375C-0.857 -0.017 -0.734 0.442 -0.375 0.649L0 0L0.375 -0.649ZM7.5 0L7.125 -0.649L3.375 1.517L3.75 2.167L4.125 2.816L7.875 0.649L7.5 0ZM3.75 2.167L4.125 1.517L0.375 -0.649L0 0L-0.375 0.649L3.375 2.816L3.75 2.167Z" fillRule="nonzero" />
        <path id="figma-derived-338" d="M9 18C6.7 18 4.696 17.237 2.987 15.712C1.279 14.188 0.3 12.283 0.05 10L2.1 10C2.333 11.733 3.104 13.167 4.412 14.3C5.721 15.433 7.25 16 9 16C10.95 16 12.604 15.321 13.962 13.962C15.321 12.604 16 10.95 16 9C16 7.05 15.321 5.396 13.962 4.037C12.604 2.679 10.95 2 9 2C7.85 2 6.775 2.267 5.775 2.8C4.775 3.333 3.933 4.067 3.25 5L6 5L6 7L0 7L0 1L2 1L2 3.35C2.85 2.283 3.888 1.458 5.113 0.875C6.338 0.292 7.633 0 9 0C10.25 0 11.421 0.237 12.512 0.712C13.604 1.188 14.554 1.829 15.363 2.638C16.171 3.446 16.813 4.396 17.288 5.488C17.763 6.579 18 7.75 18 9C18 10.25 17.763 11.421 17.288 12.512C16.813 13.604 16.171 14.554 15.363 15.363C14.554 16.171 13.604 16.813 12.512 17.288C11.421 17.763 10.25 18 9 18L9 18M11.8 13.2L8 9.4L8 4L10 4L10 8.6L13.2 11.8L11.8 13.2L11.8 13.2" fillRule="nonzero" />
        <path id="figma-derived-339" d="M12 16L12 9L16 9L16 16L12 16L12 16M6 16L6 0L10 0L10 16L6 16L6 16M0 16L0 5L4 5L4 16L0 16L0 16" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="713:1660" style={rootLayer("100%", 1127, {
      background: "#f7f9fb",
      ...row1,
      minWidth: 0,
      minHeight: 1000,
      overflow: "hidden",
      flexDirection: "column",
      gap: 30
    })}>
    <div data-figma-id="713:1661" style={{
        background: "rgba(255, 255, 255, 0.8)",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: 64,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="404:2116" style={{
          ...row1,
          ...layout1,
          padding: "0 20px",
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
              ...row1,
              justifyContent: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"Historial"}
          </span>
        </div>
        <div data-figma-id="404:2121" style={fixedLayer(55, 55, {
            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
            ...row1,
            justifyContent: "center"
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
    <div data-figma-id="713:1662" style={fixedLayer(362, 186, {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 20
      })}>
      <div data-figma-id="713:1663" style={fixedLayer(362, 50, {
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #2457c5",
          borderRadius: 15,
          ...row1,
          overflow: "hidden",
          padding: 14,
          boxSizing: "border-box",
          gap: 10
        })}>
        <div data-figma-id="404:2138" style={fixedLayer(20, 20, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="404:2139" viewBox="-0.9 -0.9 16.888 16.888" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(12.5% - 0.9px)", "calc(75.001% + 1.888px)", "calc(75.001% + 1.888px)")}>
            <use href="#figma-derived-25" fill="#2457c5" />
          </svg>
        </div>
        <span data-figma-id="404:2140" style={{
            ...font_Manrope,
            color: "#5c6270",
            fontSize: 16,
            fontWeight: 800,
            lineHeight: "23px",
            minWidth: 0,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          {"Buscar producto o código"}
        </span>
      </div>
      <div data-figma-id="713:1664" style={{
          minWidth: 0,
          overflow: "hidden",
          display: "flex",
          gap: 8,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="713:1665" style={{
            ...surface1,
            minWidth: 0,
            overflow: "hidden",
            display: "flex",
            padding: 12,
            boxSizing: "border-box",
            gap: 8,
            position: "relative",
            height: "max-content",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          <div data-figma-id="713:1666" style={fixedLayer(16, 16, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="713:1667" viewBox="-1.35 -1.35 20.7 22.7" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(8.33% - 0.9px)", "calc(75% + 1.8px)", "calc(83.34% + 1.8px)")}>
              <path d="M5 0L5 4M13 0L13 4M0 8L18 8M5 12L5.01 12M9 12L9.01 12M13 12L13.01 12M5 16L5.01 16M9 16L9.01 16M13 16L13.01 16M2 2L16 2C17.105 2 18 2.895 18 4L18 18C18 19.105 17.105 20 16 20L2 20C0.895 20 0 19.105 0 18L0 4C0 2.895 0.895 2 2 2Z" fill="transparent" fillRule="nonzero" stroke="#2457c5" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
          </div>
          <span data-figma-id="713:1668" style={{
              ...font_Manrope,
              color: "#29241f",
              fontSize: 14,
              fontWeight: 500,
              lineHeight: "20px",
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"05–06 nov 2026"}
          </span>
          <div data-figma-id="713:1669" style={fixedLayer(14, 14, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="713:1670" viewBox="-1.543 -1.543 15.086 9.086" preserveAspectRatio="none" style={absoluteLayer("calc(25% - 0.9px)", "calc(37.5% - 0.9px)", "calc(50% + 1.8px)", "calc(25% + 1.8px)")}>
              <path d="M0 0L6 6L12 0" fill="transparent" fillRule="nonzero" stroke="#2457c5" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
          </div>
        </div>
        <div data-figma-id="713:1671" style={fixedLayer(40, "max-content", {
            ...surface1,
            overflow: "hidden",
            display: "flex",
            padding: 12,
            boxSizing: "border-box",
            gap: 6
          })}>
          <div data-figma-id="713:1672" style={fixedLayer(16, 16, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="713:1673" viewBox="-1.35 -1.35 20.7 20.7" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(12.5% - 0.9px)", "calc(75% + 1.8px)", "calc(75% + 1.8px)")}>
              <path d="M7 2L0 2M9 16L0 16M11 0L11 4M13 14L13 18M18 9L9 9M18 16L13 16M18 2L11 2M5 7L5 11M5 9L0 9" fill="transparent" fillRule="nonzero" stroke="#2457c5" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="713:1674" style={fixedLayer(362, "max-content", {
          background: "#dde5f9",
          borderRadius: 15,
          overflow: "hidden",
          display: "flex",
          padding: 4,
          boxSizing: "border-box",
          gap: 4
        })}>
        <div data-figma-id="404:2299" style={{
            background: "#ffffff",
            borderRadius: 15,
            ...row2,
            position: "relative",
            height: "max-content",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          <span data-figma-id="404:2300" style={{
              ...font_Manrope,
              color: "#2457c5",
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "24px",
              textAlign: "center",
              position: "relative",
              width: 147,
              flexShrink: 0
            }}>
            {"Movimientos"}
          </span>
        </div>
        <div data-figma-id="404:2301" style={{
            background: "#dde5f9",
            borderRadius: 15,
            ...row2,
            position: "relative",
            height: "max-content",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          <span data-figma-id="404:2302" style={{
              ...font_Manrope,
              color: "#5c6270",
              fontSize: 16,
              fontWeight: 800,
              lineHeight: "24px",
              textAlign: "center",
              position: "relative",
              width: 126,
              flexShrink: 0
            }}>
            {"Pedidos"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="792:3163" style={fixedLayer(354, 306, {
        ...row1,
        flexDirection: "column",
        justifyContent: "center",
        gap: 20
      })}>
      <span data-figma-id="792:3165" style={{
          ...font_Manrope,
          color: "#000000",
          fontSize: 20,
          fontWeight: 800,
          lineHeight: "28px",
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Movimientos"}
      </span>
      <div data-figma-id="795:3140" style={fixedLayer(362, 258, {
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #000000",
          borderRadius: 16,
          display: "flex",
          padding: 17,
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 8
        })}>
        <div data-figma-id="713:1050" style={fixedLayer(330, "max-content", {
            overflow: "hidden",
            display: "flex",
            gap: 8
          })}>
          <span data-figma-id="713:1051" style={{
              ...font_Manrope,
              color: "#000000",
              fontSize: 16,
              fontWeight: 800,
              lineHeight: "21.856px",
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"Entrada original"}
          </span>
          <span data-figma-id="713:1052" style={{
              ...font_Manrope,
              color: "#2457c5",
              fontSize: 18,
              fontWeight: 800,
              lineHeight: "24.588px",
              textAlign: "right",
              minWidth: 0,
              position: "relative",
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            {"+3 kg"}
          </span>
        </div>
        <span data-figma-id="713:1053" style={{
            ...font_Manrope_16,
            minWidth: 0,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          {"MOV-184 - 05 nov 2026"}
        </span>
        <span data-figma-id="713:1054" style={{
            ...font_Manrope_16,
            minWidth: 0,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          {"Carne de res - Lote RES-0511"}
        </span>
        <span data-figma-id="713:1055" style={{
            ...font_Manrope_16,
            minWidth: 0,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          {"Recibió Luis Rojas"}
        </span>
        <div data-figma-id="795:3011" style={fixedLayer(322, 52, {
            overflow: "hidden",
            display: "flex",
            gap: 12
          })}>
          <div data-figma-id="795:2973" style={fixedLayer(155, 52, {
              ...surface2,
              ...row1,
              minWidth: 0,
              minHeight: 52,
              overflow: "hidden",
              padding: "12px 16px",
              boxSizing: "border-box",
              justifyContent: "center",
              gap: 5
            })}>
            <div data-figma-id="404:2304" style={fixedLayer(20, 20)}>
              <svg data-figma-id="404:2305" viewBox="-1.147 -1.273 16.42 16.42" preserveAspectRatio="none" style={absoluteLayer(1.853, 1.727, 16.42, 16.42)}>
                <use href="#figma-derived-593" fill="#2457c5" />
              </svg>
            </div>
            <span data-figma-id="404:2306" style={{
                ...font_Manrope,
                color: "#2457c5",
                fontSize: 16,
                fontWeight: 800,
                lineHeight: "22px",
                position: "relative",
                flexShrink: 0
              }}>
              {"Modificar"}
            </span>
          </div>
          <div data-figma-id="795:2974" style={fixedLayer(155, 52, {
              background: "#fde7e7",
              boxShadow: "inset 0 0 0 1px #e22c2c",
              borderRadius: 26,
              ...row1,
              overflow: "hidden",
              padding: 7,
              boxSizing: "border-box",
              gap: 4
            })}>
            <div data-figma-id="795:2975" style={fixedLayer(44, 44)}>
              <div data-figma-id="795:2976" style={absoluteLayer(14, 14, 16, 16, {
                  overflow: "hidden"
                })}>
                <svg data-figma-id="795:2977" viewBox="-0.667 -0.667 13.333 1.333" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.667px)", "calc(25% - 0.667px)", "calc(75% + 1.333px)", "calc(0% + 1.333px)")}>
                  <path d="M0 0L1.333 0L12 0" fill="none" stroke="#e22c2c" strokeWidth={1.333} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
                </svg>
                <svg data-figma-id="795:2978" viewBox="-0.667 -0.667 9.998 14.667" preserveAspectRatio="none" style={absoluteLayer("calc(25% - 0.667px)", "calc(8.333% - 0.667px)", "calc(54.167% + 1.332px)", "calc(83.333% + 1.333px)")}>
                  <path d="M8.667 2.667L8 12C8 12.736 7.403 13.333 6.667 13.333L1.333 13.333C0.597 13.333 0 12.736 0 12L0.667 2.667M2.667 2.667L2.667 1.333C2.667 0.597 3.264 0 4 0L4 0C4.736 0 5.333 0.597 5.333 1.333L5.333 2.667" fill="none" stroke="#e22c2c" strokeWidth={1.333} vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
                </svg>
              </div>
            </div>
            <span data-figma-id="795:2979" style={{
                ...font_Manrope,
                color: "#a50d0d",
                fontSize: 16,
                fontWeight: 800,
                lineHeight: "24px",
                position: "relative",
                width: 99,
                flexShrink: 0
              }}>
              {"Eliminar"}
            </span>
          </div>
        </div>
        <div data-figma-id="713:1064" style={{
            ...surface2,
            ...row1,
            ...layout1,
            overflow: "hidden",
            padding: "13px 17px",
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="713:1065" style={{
              ...font_Manrope,
              color: "#2457c5",
              fontSize: 16,
              fontWeight: 800,
              lineHeight: "22px",
              position: "relative",
              width: 276,
              flexShrink: 0
            }}>
            {"Ajustes (1)"}
          </span>
          <div data-figma-id="713:1066" style={fixedLayer(20, 20)}>
            <svg data-figma-id="713:1067" viewBox="-0.988 -0.988 13.976 7.976" preserveAspectRatio="none" style={absoluteLayer(3.012, 6.012, 13.976, 7.976)}>
              <path d="M0 0L6 6L12 0" fill="none" stroke="#2457c5" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="713:1679" style={{
        background: "rgba(255, 255, 255, 0.9)",
        filter: "drop-shadow(0px -2px 12px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        ...col1,
        position: "absolute",
        left: "calc(50% + -201px)",
        width: 402,
        height: 63,
        bottom: 0
      }}>
      <div data-figma-id="404:2323" style={{
          ...row1,
          ...layout1,
          padding: "0 20px",
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:2324" style={fixedLayer(110, 44, {
            ...row1,
            ...layout2,
            ...layout3,
            minWidth: 64
          })}>
          <div data-figma-id="404:2325" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <InventarioNavIcon color="#434655" />
          </div>
          <div data-figma-id="404:2335" style={fixedLayer("max-content", 14, col1)}>
            <span data-figma-id="404:2336" style={{
                ...font_PlusJakartaS_11,
                color: "#434655",
                fontWeight: 700,
                fontVariationSettings: "\"wght\" 700",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Inventario"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:2337" style={fixedLayer(110, 44, {
            background: "#d0e4ff",
            borderRadius: 90,
            ...row1,
            ...layout2,
            ...layout3,
            minWidth: 64
          })}>
          <div data-figma-id="404:2338" style={fixedLayer("max-content", 18, col1)}>
            <svg data-figma-id="404:2339" viewBox="0 0 18 18" preserveAspectRatio="none" style={fixedLayer(18, 18)}>
              <use href="#figma-derived-338" fill="#2457c5" />
            </svg>
          </div>
          <div data-figma-id="404:2340" style={fixedLayer("max-content", 14, col1)}>
            <span data-figma-id="404:2341" style={{
                ...font_PlusJakartaS_11,
                color: "#2457c5",
                fontWeight: 700,
                fontVariationSettings: "\"wght\" 700",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Historial"}
            </span>
          </div>
        </div>
        <div data-figma-id="404:2342" style={fixedLayer(110, 44, {
            ...row1,
            ...layout3,
            boxSizing: "border-box",
            justifyContent: "center"
          })}>
          <div data-figma-id="404:2343" style={fixedLayer("max-content", 16, col1)}>
            <svg data-figma-id="404:2344" viewBox="0 0 16 16" preserveAspectRatio="none" style={fixedLayer(16, 16)}>
              <use href="#figma-derived-339" fill="#434655" />
            </svg>
          </div>
          <div data-figma-id="404:2345" style={fixedLayer("max-content", 14, col1)}>
            <span data-figma-id="404:2346" style={{
                ...font_PlusJakartaS_11,
                color: "#434655",
                fontWeight: 600,
                fontVariationSettings: "\"wght\" 600",
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
export default Frame05HistorialMovimientos;