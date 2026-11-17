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
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 16
};
const text2: React.CSSProperties = {
  fontWeight: 500,
  lineHeight: "24px"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout1: React.CSSProperties = {
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const col2: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const text3: React.CSSProperties = {
  fontWeight: 400,
  lineHeight: "24px",
  textAlign: "center"
};
const col1: React.CSSProperties = {
  ...col2,
  overflow: "hidden",
  gap: 4
};
const row2: React.CSSProperties = {
  ...row1,
  overflow: "hidden",
  justifyContent: "center"
};
const row3: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  padding: "12px 14px",
  boxSizing: "border-box"
};
const font_PlusJakartaS_11: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontSize: 11,
  lineHeight: "14px",
  letterSpacing: "0.44px"
};
const layout2: React.CSSProperties = {
  padding: 4,
  boxSizing: "border-box",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2
};
const row4: React.CSSProperties = {
  ...row1,
  ...layout1,
  overflow: "hidden",
  padding: "12px 20px"
};
const font_Manrope_16b: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#000000",
  fontWeight: 800,
  lineHeight: "24px"
};
const font_Manrope_16c: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text2,
  color: "#a50d0d"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text2,
  color: "#5c6270",
  textAlign: "center"
};
const font_Manrope_16d: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text3,
  color: "#000000"
};
function VerProductoTocinetaDestinoPrevistoCarneDeRes(p: {
  "data-figma-id": string;
  text: string;
  text2: string;
  text3: string;
  text4: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer(360, "max-content", {
    background: "#fde7e7",
    ...row4
  })}>
      <div data-figma-id="752:1941" style={fixedLayer(142, 52, col1)}>
        <span data-figma-id="752:1942" style={{
        ...font_Manrope_16b,
        minWidth: 0,
        position: "relative",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
          {p.text}
        </span>
        <span data-figma-id="752:1943" style={{
        ...font_Manrope_16c,
        minWidth: 0,
        position: "relative",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
          {p.text2}
        </span>
      </div>
      <span data-figma-id="752:1944" style={{
      ...font_Manrope_16d,
      position: "relative",
      width: 58,
      flexShrink: 0
    }}>
        {p.text3}
      </span>
      <span data-figma-id="752:1945" style={{
      ...font_Manrope_16,
      position: "relative",
      width: 58,
      flexShrink: 0
    }}>
        {p.text4}
      </span>
    </div>;
}
export function Frame01Inventario() {
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
        <path id="figma-derived-316" d="M5.25 2.4C5.747 2.4 6.15 1.997 6.15 1.5C6.15 1.003 5.747 0.6 5.25 0.6L5.25 1.5L5.25 2.4ZM0 0.6C-0.497 0.6 -0.9 1.003 -0.9 1.5C-0.9 1.997 -0.497 2.4 0 2.4L0 1.5L0 0.6ZM6.75 12.9C7.247 12.9 7.65 12.497 7.65 12C7.65 11.503 7.247 11.1 6.75 11.1L6.75 12L6.75 12.9ZM0 11.1C-0.497 11.1 -0.9 11.503 -0.9 12C-0.9 12.497 -0.497 12.9 0 12.9L0 12L0 11.1ZM9.15 0C9.15 -0.497 8.747 -0.9 8.25 -0.9C7.753 -0.9 7.35 -0.497 7.35 0L8.25 0L9.15 0ZM7.35 3C7.35 3.497 7.753 3.9 8.25 3.9C8.747 3.9 9.15 3.497 9.15 3L8.25 3L7.35 3ZM10.65 10.5C10.65 10.003 10.247 9.6 9.75 9.6C9.253 9.6 8.85 10.003 8.85 10.5L9.75 10.5L10.65 10.5ZM8.85 13.5C8.85 13.997 9.253 14.4 9.75 14.4C10.247 14.4 10.65 13.997 10.65 13.5L9.75 13.5L8.85 13.5ZM13.5 7.65C13.997 7.65 14.4 7.247 14.4 6.75C14.4 6.253 13.997 5.85 13.5 5.85L13.5 6.75L13.5 7.65ZM6.75 5.85C6.253 5.85 5.85 6.253 5.85 6.75C5.85 7.247 6.253 7.65 6.75 7.65L6.75 6.75L6.75 5.85ZM13.5 12.9C13.997 12.9 14.4 12.497 14.4 12C14.4 11.503 13.997 11.1 13.5 11.1L13.5 12L13.5 12.9ZM9.75 11.1C9.253 11.1 8.85 11.503 8.85 12C8.85 12.497 9.253 12.9 9.75 12.9L9.75 12L9.75 11.1ZM13.5 2.4C13.997 2.4 14.4 1.997 14.4 1.5C14.4 1.003 13.997 0.6 13.5 0.6L13.5 1.5L13.5 2.4ZM8.25 0.6C7.753 0.6 7.35 1.003 7.35 1.5C7.35 1.997 7.753 2.4 8.25 2.4L8.25 1.5L8.25 0.6ZM4.65 5.25C4.65 4.753 4.247 4.35 3.75 4.35C3.253 4.35 2.85 4.753 2.85 5.25L3.75 5.25L4.65 5.25ZM2.85 8.25C2.85 8.747 3.253 9.15 3.75 9.15C4.247 9.15 4.65 8.747 4.65 8.25L3.75 8.25L2.85 8.25ZM3.75 7.65C4.247 7.65 4.65 7.247 4.65 6.75C4.65 6.253 4.247 5.85 3.75 5.85L3.75 6.75L3.75 7.65ZM0 5.85C-0.497 5.85 -0.9 6.253 -0.9 6.75C-0.9 7.247 -0.497 7.65 0 7.65L0 6.75L0 5.85ZM5.25 1.5L5.25 0.6L0 0.6L0 1.5L0 2.4L5.25 2.4L5.25 1.5ZM6.75 12L6.75 11.1L0 11.1L0 12L0 12.9L6.75 12.9L6.75 12ZM8.25 0L7.35 0L7.35 3L8.25 3L9.15 3L9.15 0L8.25 0ZM9.75 10.5L8.85 10.5L8.85 13.5L9.75 13.5L10.65 13.5L10.65 10.5L9.75 10.5ZM13.5 6.75L13.5 5.85L6.75 5.85L6.75 6.75L6.75 7.65L13.5 7.65L13.5 6.75ZM13.5 12L13.5 11.1L9.75 11.1L9.75 12L9.75 12.9L13.5 12.9L13.5 12ZM13.5 1.5L13.5 0.6L8.25 0.6L8.25 1.5L8.25 2.4L13.5 2.4L13.5 1.5ZM3.75 5.25L2.85 5.25L2.85 8.25L3.75 8.25L4.65 8.25L4.65 5.25L3.75 5.25ZM3.75 6.75L3.75 5.85L0 5.85L0 6.75L0 7.65L3.75 7.65L3.75 6.75Z" fillRule="nonzero" />
        <path id="figma-derived-161" d="M0 4.934C-0.497 4.934 -0.9 5.337 -0.9 5.834C-0.9 6.331 -0.497 6.734 0 6.734L0 5.834L0 4.934ZM11.668 6.734C12.165 6.734 12.568 6.331 12.568 5.834C12.568 5.337 12.165 4.934 11.668 4.934L11.668 5.834L11.668 6.734ZM6.734 0C6.734 -0.497 6.331 -0.9 5.834 -0.9C5.337 -0.9 4.934 -0.497 4.934 0L5.834 0L6.734 0ZM4.934 11.668C4.934 12.165 5.337 12.568 5.834 12.568C6.331 12.568 6.734 12.165 6.734 11.668L5.834 11.668L4.934 11.668ZM0 5.834L0 6.734L11.668 6.734L11.668 5.834L11.668 4.934L0 4.934L0 5.834ZM5.834 0L4.934 0L4.934 11.668L5.834 11.668L6.734 11.668L6.734 0L5.834 0Z" fillRule="nonzero" />
        <path id="figma-vector-201" d="M9 18C6.7 18 4.696 17.237 2.987 15.712C1.279 14.187 0.3 12.283 0.05 10L2.1 10C2.333 11.733 3.104 13.167 4.412 14.3C5.721 15.433 7.25 16 9 16C10.95 16 12.604 15.321 13.962 13.962C15.321 12.604 16 10.95 16 9C16 7.05 15.321 5.396 13.962 4.037C12.604 2.679 10.95 2 9 2C7.85 2 6.775 2.267 5.775 2.8C4.775 3.333 3.933 4.067 3.25 5L6 5L6 7L0 7L0 1L2 1L2 3.35C2.85 2.283 3.888 1.458 5.113 0.875C6.338 0.292 7.633 0 9 0C10.25 0 11.421 0.237 12.512 0.712C13.604 1.187 14.554 1.829 15.363 2.638C16.171 3.446 16.813 4.396 17.288 5.488C17.763 6.579 18 7.75 18 9C18 10.25 17.763 11.421 17.288 12.512C16.813 13.604 16.171 14.554 15.363 15.363C14.554 16.171 13.604 16.813 12.512 17.288C11.421 17.763 10.25 18 9 18L9 18M11.8 13.2L8 9.4L8 4L10 4L10 8.6L13.2 11.8L11.8 13.2L11.8 13.2" fillRule="nonzero" />
        <path id="figma-vector-205" d="M12 16L12 9L16 9L16 16L12 16L12 16M6 16L6 0L10 0L10 16L6 16L6 16M0 16L0 5L4 5L4 16L0 16L0 16" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="404:3720" style={rootLayer("100%", 1027, {
      background: "#f7f9fb",
      ...row1,
      minWidth: 0,
      overflow: "hidden",
      flexDirection: "column",
      gap: 20
    })}>
    <div data-figma-id="404:3721" style={{
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
          minWidth: 0,
          padding: "0 20px",
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="404:2117" style={fixedLayer(55, 55, {
            background: "#2457c5",
            borderRadius: 12,
            ...row2
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
              whiteSpace: "pre",
              fontSize: 20,
              fontWeight: 800,
              lineHeight: "28px",
              textAlign: "center",
              ...row1,
              justifyContent: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"Inventario"}
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
              ...row2
            })}>
            <span data-figma-id="404:785" style={{
                ...font_Manrope,
                color: "#000000",
                whiteSpace: "pre",
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
    <div data-figma-id="404:3722" style={fixedLayer(362, 827, {
        ...row1,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20
      })}>
      <div data-figma-id="404:3725" style={fixedLayer(362, 104, {
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 10
        })}>
        <div data-figma-id="138:1586" style={{
            background: "#ffffff",
            boxShadow: "inset 0 0 0 1px #2457c5",
            borderRadius: 15,
            ...row1,
            minWidth: 0,
            overflow: "hidden",
            padding: 14,
            boxSizing: "border-box",
            gap: 10,
            position: "relative",
            height: 50,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="134:1470" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="134:1471" viewBox="-0.9 -0.9 16.888 16.888" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(12.5% - 0.9px)", "calc(75.001% + 1.888px)", "calc(75.001% + 1.888px)")}>
              <use href="#figma-derived-25" fill="#2457c5" />
            </svg>
          </div>
          <span data-figma-id="134:1472" style={{
              ...font_Manrope,
              ...text1,
              color: "#5c6270",
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
        <div data-figma-id="138:1575" style={{
            minWidth: 0,
            overflow: "hidden",
            display: "flex",
            gap: 8,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="138:1576" style={fixedLayer(64, "max-content", {
              background: "#eff1f5",
              boxShadow: "inset 0 0 0 1px #2457c5",
              borderRadius: 90,
              ...row3
            })}>
            <span data-figma-id="138:1577" style={{
                ...font_Manrope,
                color: "#2457c5",
                whiteSpace: "pre",
                fontSize: 12,
                fontWeight: 800,
                lineHeight: "17px",
                position: "relative",
                flexShrink: 0
              }}>
              {"Todos "}
            </span>
          </div>
          <div data-figma-id="138:1578" style={fixedLayer(79, "max-content", {
              background: "#ffffff",
              boxShadow: "inset 0 0 0 1px #93afeb",
              borderRadius: 90,
              ...row3
            })}>
            <span data-figma-id="138:1579" style={{
                ...font_Manrope,
                color: "#111827",
                whiteSpace: "pre",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "17px",
                position: "relative",
                flexShrink: 0
              }}>
              {"En alerta "}
            </span>
          </div>
          <div data-figma-id="138:1580" style={fixedLayer(44, 44, {
              background: "#ffffff",
              boxShadow: "inset 0 0 0 1px #93afeb",
              borderRadius: 15,
              ...row2
            })}>
            <div data-figma-id="138:1581" style={fixedLayer(18, 18, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="138:1582" viewBox="-0.9 -0.9 15.3 15.3" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(12.5% - 0.9px)", "calc(75% + 1.8px)", "calc(75% + 1.8px)")}>
                <use href="#figma-derived-316" fill="#2457c5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <span data-figma-id="404:3726" style={{
          ...font_Manrope,
          color: "#000000",
          whiteSpace: "pre",
          fontSize: 20,
          fontWeight: 800,
          lineHeight: "28px",
          position: "relative",
          width: 362,
          flexShrink: 0
        }}>
        {"Stock actual"}
      </span>
      <div data-figma-id="714:1370" style={{
          background: "#dde5f9",
          borderRadius: 15,
          ...row1,
          minWidth: 0,
          padding: 16,
          boxSizing: "border-box",
          gap: 12,
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="713:1363" style={fixedLayer(40, 40, {
            background: "#2457c5",
            borderRadius: 90,
            ...row1,
            justifyContent: "center"
          })}>
          <span data-figma-id="713:1364" style={fixedLayer(40, 32, {
              ...font_Manrope,
              color: "#ffffff",
              whiteSpace: "pre",
              fontSize: 22,
              fontWeight: 800,
              lineHeight: "32px",
              textAlign: "center"
            })}>
            {"i"}
          </span>
        </div>
        <div data-figma-id="713:1365" style={{
            ...col1,
            minWidth: 0,
            position: "relative",
            height: 48,
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          <span data-figma-id="713:1366" style={{
              ...font_Manrope,
              ...text2,
              color: "#000000",
              whiteSpace: "pre-wrap",
              fontSize: 12,
              minWidth: 0,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            {"El registro original se conserva para consultar su historial."}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3727" style={fixedLayer(362, 509, {
          background: "#eff1f5",
          border: "1.5px solid #000000",
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          padding: 0,
          boxSizing: "border-box",
          flexDirection: "column"
        })}>
        <div data-figma-id="404:3728" style={{
            boxShadow: "inset 0 -1px 0 0 #000000",
            minWidth: 0,
            overflow: "hidden",
            display: "flex",
            padding: "12px 20px 13px",
            boxSizing: "border-box",
            gap: 8,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="752:2040" style={fixedLayer(161, 24, {
              ...row1,
              overflow: "hidden"
            })}>
            <span data-figma-id="404:3729" style={{
                ...font_Manrope,
                ...text1,
                color: "#14306c",
                fontWeight: 800,
                lineHeight: "24px",
                position: "relative",
                width: 81,
                flexShrink: 0
              }}>
              {"Producto"}
            </span>
          </div>
          <span data-figma-id="404:3730" style={{
              ...font_Manrope,
              ...text1,
              ...text3,
              color: "#14306c",
              position: "relative",
              width: 76,
              flexShrink: 0
            }}>
            {"Stock"}
          </span>
          <span data-figma-id="404:3731" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 66,
              flexShrink: 0
            }}>
            {"Mín."}
          </span>
        </div>
        <VerProductoTocinetaDestinoPrevistoCarneDeRes data-figma-id="752:1956" text="Tocineta" text2="Agotado" text3="0 kg" text4="2 kg" />
        <VerProductoTocinetaDestinoPrevistoCarneDeRes data-figma-id="752:1977" text="Carne de res" text2="Debajo del minimo" text3="2,4 kg" text4="5 kg" />
        <VerProductoTocinetaDestinoPrevistoCarneDeRes data-figma-id="752:1984" text="Queso chedar" text2="Debajo del minimo" text3="1 kg" text4="2 kg" />
        <div data-figma-id="752:1991" style={fixedLayer(360, "max-content", {
            background: "#faf0d1",
            boxShadow: "inset 0 1px 0 0 #000000",
            ...row1,
            ...layout1,
            overflow: "hidden",
            padding: "13px 20px 12px"
          })}>
          <div data-figma-id="752:1941~4" style={fixedLayer(142, 52, col1)}>
            <span data-figma-id="752:1942~4" style={{
                ...font_Manrope_16b,
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Pan brioche"}
            </span>
            <span data-figma-id="752:1943~4" style={{
                ...font_Manrope,
                ...text1,
                ...text2,
                color: "#cc9e15",
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Próximo"}
            </span>
          </div>
          <span data-figma-id="752:1944~4" style={{
              ...font_Manrope_16d,
              position: "relative",
              width: 58,
              flexShrink: 0
            }}>
            {"24 und"}
          </span>
          <span data-figma-id="752:1945~4" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 58,
              flexShrink: 0
            }}>
            {"20 und"}
          </span>
        </div>
        <div data-figma-id="752:2026" style={fixedLayer(360, "max-content", {
            background: "#faf0d1",
            ...row4
          })}>
          <div data-figma-id="752:1941~5" style={fixedLayer(142, 52, col1)}>
            <span data-figma-id="752:1942~5" style={{
                ...font_Manrope_16b,
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Papa criolla"}
            </span>
            <span data-figma-id="752:1943~5" style={{
                ...font_Manrope,
                ...text1,
                ...text2,
                color: "#cc9e15",
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Próximo"}
            </span>
          </div>
          <span data-figma-id="752:1944~5" style={{
              ...font_Manrope_16d,
              position: "relative",
              width: 58,
              flexShrink: 0
            }}>
            {"6 kg"}
          </span>
          <span data-figma-id="752:1945~5" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 58,
              flexShrink: 0
            }}>
            {"5 kg"}
          </span>
        </div>
        <div data-figma-id="752:2044" style={fixedLayer(360, "max-content", {
            background: "#ffffff",
            boxShadow: "inset 0 1px 0 0 #000000",
            ...row1,
            ...layout1,
            overflow: "hidden",
            padding: "13px 20px 12px"
          })}>
          <div data-figma-id="752:1941~6" style={fixedLayer(142, 52, col1)}>
            <span data-figma-id="752:1942~6" style={{
                ...font_Manrope_16b,
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Arroz blanco"}
            </span>
            <span data-figma-id="752:1943~6" style={{
                ...font_Manrope,
                ...text1,
                ...text2,
                color: "#000000",
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Disponible"}
            </span>
          </div>
          <span data-figma-id="752:1944~6" style={{
              ...font_Manrope_16d,
              position: "relative",
              width: 58,
              flexShrink: 0
            }}>
            {"18 kg"}
          </span>
          <span data-figma-id="752:1945~6" style={{
              ...font_Manrope_16,
              position: "relative",
              width: 58,
              flexShrink: 0
            }}>
            {"8 kg"}
          </span>
        </div>
      </div>
      <div data-figma-id="404:3724" style={fixedLayer(362, "max-content", {
          background: "#2457c5",
          boxShadow: "inset 0 0 0 1px #2457c5",
          borderRadius: 90,
          ...row1,
          minWidth: 0,
          minHeight: 52,
          overflow: "hidden",
          padding: "12px 16px",
          boxSizing: "border-box",
          justifyContent: "center",
          gap: 5
        })}>
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
            fontWeight: 800,
            lineHeight: "22px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Agregar al Inventario"}
        </span>
      </div>
    </div>
    <div data-figma-id="752:1849" style={{
        background: "rgba(255, 255, 255, 0.9)",
        filter: "drop-shadow(0px -2px 12px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        left: "calc(50% + -201px)",
        width: 402,
        height: 64,
        bottom: 0
      }}>
      <div data-figma-id="752:1850" style={{
          ...row1,
          padding: "0 20px",
          boxSizing: "border-box",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          height: 64
        }}>
        <div data-figma-id="752:1851" style={fixedLayer(110, 44, {
            background: "#d0e4ff",
            borderRadius: 90,
            ...row1,
            ...layout2,
            minWidth: 64,
            minHeight: 44
          })}>
          <div data-figma-id="752:1852" style={fixedLayer(20, 20, {
              overflow: "hidden",
              position: "relative"
            })}>
            <InventarioNavIcon color="#2457c5" />
          </div>
          <div data-figma-id="752:1862" style={fixedLayer("max-content", 14, col2)}>
            <span data-figma-id="752:1863" style={{
                ...font_PlusJakartaS_11,
                color: "#2457c5",
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
        <div data-figma-id="752:1864" style={fixedLayer(110, 44, {
            ...row1,
            ...layout2,
            minWidth: 64,
            minHeight: 44
          })}>
          <div data-figma-id="752:1865" style={fixedLayer("max-content", 18, col2)}>
            <svg data-figma-id="752:1866" viewBox="0 0 18 18" preserveAspectRatio="none" style={fixedLayer(18, 18)}>
              <use href="#figma-vector-201" fill="#434655" />
            </svg>
          </div>
          <div data-figma-id="752:1867" style={fixedLayer("max-content", 14, col2)}>
            <span data-figma-id="752:1868" style={{
                ...font_PlusJakartaS_11,
                color: "#434655",
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
        <div data-figma-id="752:1869" style={fixedLayer(110, 44, {
            ...row1,
            ...layout2
          })}>
          <div data-figma-id="752:1870" style={fixedLayer("max-content", 16, col2)}>
            <svg data-figma-id="752:1871" viewBox="0 0 16 16" preserveAspectRatio="none" style={fixedLayer(16, 16)}>
              <use href="#figma-vector-205" fill="#434655" />
            </svg>
          </div>
          <div data-figma-id="752:1872" style={fixedLayer("max-content", 14, col2)}>
            <span data-figma-id="752:1873" style={{
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
export default Frame01Inventario;