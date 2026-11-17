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
const surface1: React.CSSProperties = {
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const font_PlusJakartaS: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text2: React.CSSProperties = {
  color: "#434655",
  letterSpacing: "0.44px"
};
const font_Inter: React.CSSProperties = {
  color: "#29241f",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text4: React.CSSProperties = {
  fontSize: 11,
  lineHeight: "14px"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout2: React.CSSProperties = {
  padding: "0 20px",
  boxSizing: "border-box"
};
const layout3: React.CSSProperties = {
  padding: 8,
  boxSizing: "border-box"
};
const col2: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const surface5: React.CSSProperties = {
  background: "#f2f4f6",
  borderRadius: 12
};
const text3: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "20px"
};
const text5: React.CSSProperties = {
  color: "#0037b0",
  fontSize: 14,
  lineHeight: "22px"
};
const layout1: React.CSSProperties = {
  padding: "0 0 2px",
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const layout5: React.CSSProperties = {
  flexDirection: "column",
  justifyContent: "center",
  gap: 2
};
const layout6: React.CSSProperties = {
  overflow: "hidden",
  flexDirection: "column",
  gap: 7
};
const col1: React.CSSProperties = {
  ...col2,
  minWidth: 0
};
const row2: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const surface2: React.CSSProperties = {
  ...surface1,
  background: "#e6e8ea",
  borderRadius: 9999
};
const surface3: React.CSSProperties = {
  ...surface1,
  background: "#f6f7f9",
  borderRadius: 16
};
const layout7: React.CSSProperties = {
  minWidth: 0,
  minHeight: 0,
  overflow: "hidden"
};
const col5: React.CSSProperties = {
  ...col2,
  overflow: "hidden"
};
const row8: React.CSSProperties = {
  ...row1,
  justifyContent: "flex-end"
};
const text6: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "18px",
  textAlign: "center",
  overflow: "visible"
};
const layout4: React.CSSProperties = {
  padding: 14,
  boxSizing: "border-box",
  flexDirection: "column",
  justifyContent: "center"
};
const row3: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  padding: "12px 14px",
  boxSizing: "border-box"
};
const surface4: React.CSSProperties = {
  background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/995f152c-6ad0-425d-8860-d45247369bcf.jpg\")",
  backgroundSize: "183.513% 100%",
  backgroundPosition: "50% 0%",
  backgroundRepeat: "no-repeat"
};
const row6: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  justifyContent: "space-between"
};
const col6: React.CSSProperties = {
  ...col2,
  padding: "2px 8px",
  boxSizing: "border-box"
};
const col9: React.CSSProperties = {
  ...col2,
  alignItems: "flex-end",
  gap: 1.5
};
const row4: React.CSSProperties = {
  ...row2,
  minWidth: 0,
  gap: 14
};
const col4: React.CSSProperties = {
  ...row2,
  overflow: "hidden",
  flexDirection: "column"
};
const row5: React.CSSProperties = {
  ...row2,
  padding: "4.5px 0 5.5px",
  boxSizing: "border-box"
};
const col7: React.CSSProperties = {
  ...col1,
  padding: "5px 0 0",
  boxSizing: "border-box"
};
const row7: React.CSSProperties = {
  ...row6,
  aspectRatio: "254 / 22"
};
const col3: React.CSSProperties = {
  ...layout4,
  overflow: "hidden",
  display: "flex"
};
const font_PlusJakartaS_14: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text3,
  color: "#191c1e"
};
const font_PlusJakartaS_16: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  color: "#191c1e",
  fontSize: 16,
  lineHeight: "22px"
};
const font_PlusJakartaS_12: React.CSSProperties = {
  ...font_PlusJakartaS,
  color: "#001551",
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.24px"
};
const col8: React.CSSProperties = {
  ...row2,
  padding: 8,
  boxSizing: "border-box",
  flexDirection: "column",
  gap: 4
};
const row9: React.CSSProperties = {
  ...row1,
  ...layout1,
  minWidth: 0,
  aspectRatio: "306 / 22"
};
const font_PlusJakartaS_20: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  color: "#191c1e",
  fontSize: 20,
  lineHeight: "28px",
  letterSpacing: "-0.2px"
};
const font_PlusJakartaS_12b: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text2,
  fontSize: 12,
  lineHeight: "15.12px"
};
const font_PlusJakartaS_14b: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text5,
  textAlign: "right"
};
const font_PlusJakartaS_11: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text4,
  color: "#191c1e",
  letterSpacing: "0.44px",
  textAlign: "center"
};
function Insumo1CarneDeRes(p: {
  "data-figma-id": string;
  width: number;
  text: string;
  text2: string;
  text3: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer(313, 67.077, {
    ...surface5,
    ...col8
  })}>
      <div data-figma-id="738:9040" style={{
      ...row7,
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
        <div data-figma-id="738:9035" style={fixedLayer(p.width, "max-content", {
        ...row1,
        gap: 4
      })}>
          <div data-figma-id="738:9036" style={fixedLayer("max-content", 22, col2)}>
            <span data-figma-id="738:9037" style={{
            ...font_PlusJakartaS_16,
            ...row1,
            position: "relative",
            flexShrink: 0
          }}>
              {p.text}
            </span>
          </div>
        </div>
        <div data-figma-id="738:9038" style={fixedLayer("max-content", 22, col9)}>
          <span data-figma-id="738:9039" style={{
          ...font_PlusJakartaS_14b,
          ...row8,
          position: "relative",
          flexShrink: 0
        }}>
            {p.text2}
          </span>
        </div>
      </div>
      <div data-figma-id="738:9047" style={{
      ...row9,
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
        <div data-figma-id="738:9048" style={{
        ...col1,
        position: "relative",
        height: 14,
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0
      }}>
          <span data-figma-id="738:9049" style={{
          ...font_PlusJakartaS_12b,
          ...row1,
          position: "relative",
          flexShrink: 0
        }}>
            {"Costo"}
          </span>
        </div>
        <span data-figma-id="738:9050" style={{
        ...font_PlusJakartaS_14,
        ...row1,
        position: "relative",
        flexShrink: 0
      }}>
          {p.text3}
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
export function Frame3PlatosInsumosYUtilidad() {
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
        <path id="figma-derived-335" d="M4.125 -0.649C3.767 -0.857 3.308 -0.734 3.101 -0.375C2.893 -0.017 3.016 0.442 3.375 0.649L3.75 0L4.125 -0.649ZM7.5 2.167L8.25 2.167C8.25 1.899 8.107 1.651 7.875 1.517L7.5 2.167ZM7.5 6.5L7.875 7.149C8.107 7.015 8.25 6.768 8.25 6.5L7.5 6.5ZM3.75 8.667L3.375 9.316C3.607 9.45 3.893 9.45 4.125 9.316L3.75 8.667ZM0 6.5L-0.75 6.5C-0.75 6.768 -0.607 7.015 -0.375 7.149L0 6.5ZM0 2.167L-0.375 1.517C-0.607 1.651 -0.75 1.899 -0.75 2.167L0 2.167ZM3.75 0M3.75 0M3.75 0L3.375 0.649L7.125 2.816L7.5 2.167L7.875 1.517L4.125 -0.649L3.75 0ZM7.5 2.167L6.75 2.167L6.75 6.5L7.5 6.5L8.25 6.5L8.25 2.167L7.5 2.167ZM7.5 6.5L7.125 5.851L3.375 8.017L3.75 8.667L4.125 9.316L7.875 7.149L7.5 6.5ZM3.75 8.667L4.125 8.017L0.375 5.851L0 6.5L-0.375 7.149L3.375 9.316L3.75 8.667ZM0 6.5L0.75 6.5L0.75 2.167L0 2.167L-0.75 2.167L-0.75 6.5L0 6.5ZM0 2.167L0.375 2.816L4.125 0.649L3.75 0L3.375 -0.649L-0.375 1.517L0 2.167ZM3.75 0" fillRule="nonzero" />
        <path id="figma-derived-336" d="M0.75 0C0.75 -0.414 0.414 -0.75 0 -0.75C-0.414 -0.75 -0.75 -0.414 -0.75 0L0 0L0.75 0ZM-0.75 8.667C-0.75 9.081 -0.414 9.417 0 9.417C0.414 9.417 0.75 9.081 0.75 8.667L0 8.667L-0.75 8.667ZM0 0L-0.75 0L-0.75 8.667L0 8.667L0.75 8.667L0.75 0L0 0Z" fillRule="nonzero" />
        <path id="figma-derived-337" d="M7.875 0.649C8.234 0.442 8.357 -0.017 8.149 -0.375C7.942 -0.734 7.483 -0.857 7.125 -0.649L7.5 0L7.875 0.649ZM3.75 2.167L3.375 2.816C3.607 2.95 3.893 2.95 4.125 2.816L3.75 2.167ZM0.375 -0.649C0.017 -0.857 -0.442 -0.734 -0.649 -0.375C-0.857 -0.017 -0.734 0.442 -0.375 0.649L0 0L0.375 -0.649ZM7.5 0L7.125 -0.649L3.375 1.517L3.75 2.167L4.125 2.816L7.875 0.649L7.5 0ZM3.75 2.167L4.125 1.517L0.375 -0.649L0 0L-0.375 0.649L3.375 2.816L3.75 2.167Z" fillRule="nonzero" />
        <path id="figma-derived-338" d="M9 18C6.7 18 4.696 17.237 2.987 15.712C1.279 14.188 0.3 12.283 0.05 10L2.1 10C2.333 11.733 3.104 13.167 4.412 14.3C5.721 15.433 7.25 16 9 16C10.95 16 12.604 15.321 13.962 13.962C15.321 12.604 16 10.95 16 9C16 7.05 15.321 5.396 13.962 4.037C12.604 2.679 10.95 2 9 2C7.85 2 6.775 2.267 5.775 2.8C4.775 3.333 3.933 4.067 3.25 5L6 5L6 7L0 7L0 1L2 1L2 3.35C2.85 2.283 3.888 1.458 5.113 0.875C6.338 0.292 7.633 0 9 0C10.25 0 11.421 0.237 12.512 0.712C13.604 1.188 14.554 1.829 15.363 2.638C16.171 3.446 16.813 4.396 17.288 5.488C17.763 6.579 18 7.75 18 9C18 10.25 17.763 11.421 17.288 12.512C16.813 13.604 16.171 14.554 15.363 15.363C14.554 16.171 13.604 16.813 12.512 17.288C11.421 17.763 10.25 18 9 18L9 18M11.8 13.2L8 9.4L8 4L10 4L10 8.6L13.2 11.8L11.8 13.2L11.8 13.2" fillRule="nonzero" />
        <path id="figma-derived-339" d="M12 16L12 9L16 9L16 16L12 16L12 16M6 16L6 0L10 0L10 16L6 16L6 16M0 16L0 5L4 5L4 16L0 16L0 16" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="586:2218" style={rootLayer("100%", 1336.309, {
      overflow: "visible",
      position: "relative",

      background: "linear-gradient(#f7f9fb, #f7f9fb)",
      backgroundColor: "#ffffff",
      ...col1
    })}>
    <div data-figma-id="733:3791" style={{
        background: "rgba(255, 255, 255, 0.8)",
        filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
        backdropFilter: "blur(48px)",
        ...col1,
        position: "relative",
        height: 64,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="404:2116" style={{
          ...row1,
          ...layout2,
          minWidth: 0,
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
    <StatsCategoryTabs active="platos-insumos" />
    <div data-figma-id="586:2219" style={{
        background: "#f7f9fb",
        minWidth: 0,
        display: "flex",
        padding: "10px 20px 20px",
        boxSizing: "border-box",
        flexDirection: "column",
        gap: 30,
        position: "relative",
        height: 1108.309,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="738:9272" style={{
          ...row1,
          minWidth: 0,
          padding: "0 20px 0 15px",
          boxSizing: "border-box",
          gap: 4,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="738:9258" style={{
            ...row1,
            minWidth: 0,
            gap: 4,
            position: "relative",
            height: "max-content",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          <div data-figma-id="738:9259" style={fixedLayer(8, 8, {
              background: "#2457c5",
              borderRadius: 9999
            })} />
          <div data-figma-id="738:9260" style={fixedLayer("max-content", 14, col2)}>
            <span data-figma-id="738:9261" style={{
                ...font_PlusJakartaS,
                ...text1,
                ...text4,
                color: "#2457c5",
                letterSpacing: "0.55px",
                textTransform: "uppercase",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"EN TIEMPO REAL"}
            </span>
          </div>
        </div>
        <div data-figma-id="586:2554" style={fixedLayer(40, 40, {
            ...surface2,
            ...row2,
            justifyContent: "center"
          })}>
          <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden>
            <path
              d="M17.65 6.35A7.95 7.95 0 0 0 12 4V1L7 6l5 5V7c2.76 0 5 2.24 5 5a5 5 0 0 1-8.9 3.1L6.7 16.5A7.97 7.97 0 0 0 12 20a8 8 0 0 0 5.65-13.65Z"
              fill="#434655"
            />
          </svg>
        </div>
      </div>
      <div data-figma-id="586:2220" style={{
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 30,
          position: "relative",
          height: 1008.309,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="586:2256" style={{
            background: "#ffffff",
            boxShadow: "inset 0 0 0 1px #000000",
            borderRadius: 16,
            minWidth: 0,
            display: "flex",
            padding: "20px 0 30px",
            boxSizing: "border-box",
            flexDirection: "column",
            gap: 8,
            position: "relative",
            height: 468,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="738:9025" style={fixedLayer(350, "max-content", {
              ...row1,
              overflow: "hidden",
              padding: "5px 20px 15px",
              boxSizing: "border-box",
              gap: 8
            })}>
            <div data-figma-id="738:9000" style={fixedLayer(108, "max-content", {
                background: "#eff1f5",
                boxShadow: "inset 0 0 0 1px #2457c5",
                borderRadius: 90,
                ...row3
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
                {"Und vendidas"}
              </span>
            </div>
            <div data-figma-id="738:9002" style={fixedLayer(103, "max-content", {
                boxShadow: "inset 0 0 0 1px #93afeb",
                borderRadius: 90,
                ...row3
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
                {"Ventas netas"}
              </span>
            </div>
            <div data-figma-id="738:9004" style={fixedLayer(87, "max-content", {
                boxShadow: "inset 0 0 0 1px #93afeb",
                borderRadius: 90,
                ...row3
              })}>
              <span data-figma-id="738:9005" style={{
                  ...font_Manrope,
                  color: "#111827",
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: "17px",
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Utilidades"}
              </span>
            </div>
          </div>
          <div data-figma-id="586:2257" style={{
              ...row1,
              ...layout2,
              minWidth: 0,
              justifyContent: "space-between",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="586:2258" style={fixedLayer(100, "max-content", {
                ...row1,
                ...layout2,
                justifyContent: "space-between"
              })}>
              <div data-figma-id="586:2261" style={fixedLayer("max-content", 28, col2)}>
                <span data-figma-id="586:2262" style={{
                    ...font_PlusJakartaS_20,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Top platos"}
                </span>
              </div>
            </div>
            <div data-figma-id="586:2263" style={fixedLayer("max-content", 14, col2)}>
              <span data-figma-id="586:2264" style={{
                  ...font_PlusJakartaS,
                  ...text1,
                  ...text2,
                  ...text4,
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"34 und vendidas en total"}
              </span>
            </div>
          </div>
          <div data-figma-id="586:2265" style={fixedLayer(350, 313, {
              ...row1,
              flexDirection: "column",
              gap: 8
            })}>
            <div data-figma-id="733:8378" style={fixedLayer(314, 99, {
                ...surface3,
                ...col3
              })}>
              <div data-figma-id="733:8346" style={{
                  ...row4,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="733:8347" style={fixedLayer(64, 64, {
                    ...col4,
                    borderRadius: 12
                  })}>
                  <div data-figma-id="733:8348" style={{
                      ...surface4,
                      ...layout7,
                      position: "relative",
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0,
                      alignSelf: "stretch"
                    }} />
                  <div data-figma-id="733:8349" style={absoluteLayer(4, 4, 24, 24, {
                      ...surface1,
                      background: "#0037b0",
                      borderRadius: 9999,
                      ...row5
                    })}>
                    <span data-figma-id="733:8350" style={{
                        ...font_PlusJakartaS,
                        ...text1,
                        ...text4,
                        color: "#ffffff",
                        letterSpacing: "0.44px",
                        textAlign: "center",
                        ...row2,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"#1"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="733:8351" style={{
                    ...row1,
                    ...layout5,
                    minWidth: 0,
                    position: "relative",
                    height: 73,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="733:8352" style={{
                      ...row6,
                      position: "relative",
                      height: "max-content",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="733:8353" style={fixedLayer("max-content", 22, col5)}>
                      <span data-figma-id="733:8354" style={{
                          ...font_PlusJakartaS_16,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Whopper Clásica"}
                      </span>
                    </div>
                    <div data-figma-id="733:8355" style={fixedLayer("max-content", 20, {
                        background: "#dce1ff",
                        borderRadius: 9999,
                        ...col6
                      })}>
                      <span data-figma-id="733:8356" style={{
                          ...font_PlusJakartaS_12,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"18 und"}
                      </span>
                    </div>
                  </div>
                  <div data-figma-id="733:8357" style={{
                      ...col7,
                      position: "relative",
                      height: 49,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="733:8358" style={fixedLayer(208, "max-content", {
                        ...row1,
                        ...layout1
                      })}>
                      <div data-figma-id="733:8359" style={{
                          ...col1,
                          position: "relative",
                          height: 14,
                          flexShrink: 1,
                          flexGrow: 1,
                          flexBasis: 0
                        }}>
                        <span data-figma-id="733:8360" style={{
                            ...font_PlusJakartaS_12b,
                            ...row1,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Ventas netas"}
                        </span>
                      </div>
                      <span data-figma-id="733:8361" style={{
                          ...font_PlusJakartaS_14,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"$432.000"}
                      </span>
                    </div>
                    <div data-figma-id="733:8368" style={fixedLayer(208, "max-content", {
                        ...row1,
                        ...layout1
                      })}>
                      <div data-figma-id="733:8369" style={{
                          ...col1,
                          position: "relative",
                          height: 14,
                          flexShrink: 1,
                          flexGrow: 1,
                          flexBasis: 0
                        }}>
                        <span data-figma-id="733:8370" style={{
                            ...font_PlusJakartaS_12b,
                            ...row1,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Utilidades"}
                        </span>
                      </div>
                      <span data-figma-id="733:8371" style={{
                          ...font_PlusJakartaS_14,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"$268.000"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="733:8422" style={fixedLayer(314, 99, {
                ...surface3,
                ...col3
              })}>
              <div data-figma-id="733:8346~2" style={{
                  ...row4,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="733:8347~2" style={fixedLayer(64, 64, {
                    ...col4,
                    borderRadius: 12
                  })}>
                  <div data-figma-id="733:8348~2" style={{
                      ...surface4,
                      ...layout7,
                      position: "relative",
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0,
                      alignSelf: "stretch"
                    }} />
                  <div data-figma-id="733:8349~2" style={absoluteLayer(4, 4, 24, 24, {
                      ...surface2,
                      ...row5
                    })}>
                    <span data-figma-id="733:8350~2" style={{
                        ...font_PlusJakartaS_11,
                        ...row2,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"#2"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="733:8351~2" style={{
                    ...row1,
                    ...layout5,
                    minWidth: 0,
                    position: "relative",
                    height: 73,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="733:8352~2" style={{
                      ...row6,
                      position: "relative",
                      height: "max-content",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="733:8353~2" style={fixedLayer("max-content", 22, col5)}>
                      <span data-figma-id="733:8354~2" style={{
                          ...font_PlusJakartaS_16,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Doble Bacon King"}
                      </span>
                    </div>
                    <div data-figma-id="733:8355~2" style={fixedLayer("max-content", 20, {
                        background: "#eceef0",
                        borderRadius: 9999,
                        ...col6
                      })}>
                      <span data-figma-id="733:8356~2" style={{
                          ...font_PlusJakartaS_12,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"9 und"}
                      </span>
                    </div>
                  </div>
                  <div data-figma-id="733:8357~2" style={{
                      ...col7,
                      position: "relative",
                      height: 49,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="733:8358~2" style={fixedLayer(208, "max-content", {
                        ...row1,
                        ...layout1
                      })}>
                      <div data-figma-id="733:8359~2" style={{
                          ...col1,
                          position: "relative",
                          height: 14,
                          flexShrink: 1,
                          flexGrow: 1,
                          flexBasis: 0
                        }}>
                        <span data-figma-id="733:8360~2" style={{
                            ...font_PlusJakartaS_12b,
                            ...row1,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Ventas netas"}
                        </span>
                      </div>
                      <span data-figma-id="733:8361~2" style={{
                          ...font_PlusJakartaS_14,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"$288.000"}
                      </span>
                    </div>
                    <div data-figma-id="733:8368~2" style={fixedLayer(208, "max-content", {
                        ...row1,
                        ...layout1
                      })}>
                      <div data-figma-id="733:8369~2" style={{
                          ...col1,
                          position: "relative",
                          height: 14,
                          flexShrink: 1,
                          flexGrow: 1,
                          flexBasis: 0
                        }}>
                        <span data-figma-id="733:8370~2" style={{
                            ...font_PlusJakartaS_12b,
                            ...row1,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Utilidades"}
                        </span>
                      </div>
                      <span data-figma-id="733:8371~2" style={{
                          ...font_PlusJakartaS_14,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"$178.000"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="733:8466" style={fixedLayer(314, 99, {
                ...surface3,
                ...col3
              })}>
              <div data-figma-id="733:8346~3" style={{
                  ...row4,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="733:8347~3" style={fixedLayer(64, 64, {
                    ...col4,
                    borderRadius: 12
                  })}>
                  <div data-figma-id="733:8348~3" style={{
                      ...surface4,
                      ...layout7,
                      position: "relative",
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0,
                      alignSelf: "stretch"
                    }} />
                  <div data-figma-id="733:8349~3" style={absoluteLayer(4, 4, 24, 24, {
                      ...surface2,
                      ...row5
                    })}>
                    <span data-figma-id="733:8350~3" style={{
                        ...font_PlusJakartaS_11,
                        ...row2,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"#3"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="733:8351~3" style={{
                    ...row1,
                    ...layout5,
                    minWidth: 0,
                    position: "relative",
                    height: 73,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="733:8352~3" style={{
                      ...row6,
                      position: "relative",
                      height: "max-content",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="733:8353~3" style={fixedLayer("max-content", 22, col5)}>
                      <span data-figma-id="733:8354~3" style={{
                          ...font_PlusJakartaS_16,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"Pollo Crispy"}
                      </span>
                    </div>
                    <div data-figma-id="733:8355~3" style={fixedLayer("max-content", 20, {
                        background: "#eceef0",
                        borderRadius: 9999,
                        ...col6
                      })}>
                      <span data-figma-id="733:8356~3" style={{
                          ...font_PlusJakartaS_12,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"7 und"}
                      </span>
                    </div>
                  </div>
                  <div data-figma-id="733:8357~3" style={{
                      ...col7,
                      position: "relative",
                      height: 49,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="733:8358~3" style={fixedLayer(208, "max-content", {
                        ...row1,
                        ...layout1
                      })}>
                      <div data-figma-id="733:8359~3" style={{
                          ...col1,
                          position: "relative",
                          height: 14,
                          flexShrink: 1,
                          flexGrow: 1,
                          flexBasis: 0
                        }}>
                        <span data-figma-id="733:8360~3" style={{
                            ...font_PlusJakartaS_12b,
                            ...row1,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Ventas netas"}
                        </span>
                      </div>
                      <span data-figma-id="733:8361~3" style={{
                          ...font_PlusJakartaS_14,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"$154.000"}
                      </span>
                    </div>
                    <div data-figma-id="733:8368~3" style={fixedLayer(208, "max-content", {
                        ...row1,
                        ...layout1
                      })}>
                      <div data-figma-id="733:8369~3" style={{
                          ...col1,
                          position: "relative",
                          height: 14,
                          flexShrink: 1,
                          flexGrow: 1,
                          flexBasis: 0
                        }}>
                        <span data-figma-id="733:8370~3" style={{
                            ...font_PlusJakartaS_12b,
                            ...row1,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Utilidades"}
                        </span>
                      </div>
                      <span data-figma-id="733:8371~3" style={{
                          ...font_PlusJakartaS_14,
                          ...row1,
                          position: "relative",
                          flexShrink: 0
                        }}>
                        {"$95.000"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="586:2346" style={{
            ...surface1,
            background: "#ffffff",
            boxShadow: "inset 0 0 0 1px #000000",
            borderRadius: 16,
            ...row1,
            ...layout4,
            minWidth: 0,
            gap: 14,
            position: "relative",
            height: 432.309,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="586:2336" style={fixedLayer(314, "max-content", {
              ...row1,
              padding: "0 4px",
              boxSizing: "border-box",
              justifyContent: "space-between"
            })}>
            <div data-figma-id="586:2337" style={fixedLayer(344, "max-content", {
                ...row1,
                gap: 4
              })}>
              <div data-figma-id="586:2340" style={fixedLayer("max-content", 28, {
                  display: "flex",
                  padding: "0 8.64px 0 0",
                  boxSizing: "border-box",
                  flexDirection: "column"
                })}>
                <span data-figma-id="586:2341" style={{
                    ...font_PlusJakartaS_20,
                    ...row1,
                    position: "relative",
                    width: 335,
                    flexShrink: 0
                  }}>
                  {"Insumos utilizados hoy"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="586:2347" style={{
              background: "#ffffff",
              borderRadius: 12,
              ...row1,
              ...layout3,
              minWidth: 0,
              justifyContent: "space-between",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="586:2348" style={fixedLayer(306, "max-content", {
                ...row1,
                gap: 4
              })}>
              <div data-figma-id="586:2352" style={fixedLayer(306, "max-content", {
                  ...row1,
                  justifyContent: "space-between"
                })}>
                <div data-figma-id="586:2353" style={fixedLayer(185, 14, col2)}>
                  <span data-figma-id="586:2354" style={{
                      ...font_PlusJakartaS_12b,
                      ...row1,
                      position: "relative",
                      width: 195,
                      flexShrink: 0
                    }}>
                    {"Costo total de insumos del día"}
                  </span>
                </div>
                <div data-figma-id="586:2355" style={fixedLayer(77, 22, col2)}>
                  <span data-figma-id="586:2356" style={{
                      ...font_PlusJakartaS,
                      ...text1,
                      ...text5,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"$899.000"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Insumo1CarneDeRes data-figma-id="738:9052" width={98} text="Carne de res" text2="4.8 Kg" text3="$288.000" />
          <Insumo1CarneDeRes data-figma-id="738:9065" width={92} text="Pan brioche" text2="34 unidades" text3="$180.000" />
          <Insumo1CarneDeRes data-figma-id="738:9078" width={110} text="Queso chedar" text2="1.8 Kg" text3="$221.000" />
          <Insumo1CarneDeRes data-figma-id="738:9091" width={90} text="Papa criolla" text2="5.2 Kg" text3="$210.000" />
        </div>
        <div data-figma-id="586:2503" style={{
            background: "#2457c5",
            borderRadius: 9999,
            ...row1,
            minWidth: 0,
            justifyContent: "center",
            gap: 4,
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="586:2504" style={{
              background: "rgba(255, 255, 255, 0.002)",
              borderRadius: 9999,
              boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              left: 0,
              top: 0,
              height: 48,
              right: 0
            }} />
          <div data-figma-id="586:2505" style={fixedLayer("max-content", 13.333, {
              ...row1,
              flexDirection: "column"
            })}>
            <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" aria-hidden>
              <path
                d="M6.667 10L2.5 5.833L3.667 4.625L5.833 6.792L5.833 0L7.5 0L7.5 6.792L9.667 4.625L10.833 5.833L6.667 10ZM1.667 13.333C1.208 13.333 0.816 13.17 0.49 12.844C0.163 12.517 0 12.125 0 11.667V9.167H1.667V11.667H11.667V9.167H13.333V11.667C13.333 12.125 13.17 12.517 12.844 12.844C12.517 13.17 12.125 13.333 11.667 13.333H1.667Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div data-figma-id="586:2507" style={fixedLayer("max-content", 20, {
              ...row1,
              flexDirection: "column"
            })}>
            <span data-figma-id="586:2508" style={{
                ...font_PlusJakartaS,
                ...text3,
                color: "#ffffff",
                fontVariationSettings: "\"wght\" 600",
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
    <div data-figma-id="725:2191" style={{
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
            ...layout5,
            minWidth: 64,
            minHeight: 44,
            padding: "4px 2.89px",
            boxSizing: "border-box"
          })}>
          <div data-figma-id="404:708" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <InventarioNavIcon color="#434655" />
          </div>
          <div data-figma-id="404:718" style={fixedLayer("max-content", 14, col2)}>
            <span data-figma-id="404:719" style={{
                ...font_PlusJakartaS,
                ...text1,
                ...text2,
                ...text4,
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
            ...layout5,
            minWidth: 64,
            minHeight: 44,
            padding: "2px 7.92px",
            boxSizing: "border-box"
          })}>
          <div data-figma-id="404:721" style={fixedLayer("max-content", 18, col2)}>
            <svg data-figma-id="404:722" viewBox="0 0 18 18" preserveAspectRatio="none" style={fixedLayer(18, 18)}>
              <use href="#figma-derived-338" fill="#434655" />
            </svg>
          </div>
          <div data-figma-id="404:723" style={fixedLayer("max-content", 14, col2)}>
            <span data-figma-id="404:724" style={{
                ...font_PlusJakartaS,
                ...text1,
                ...text2,
                ...text4,
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
            ...layout5,
            padding: "6px 16px",
            boxSizing: "border-box"
          })}>
          <div data-figma-id="404:726" style={fixedLayer("max-content", 16, col2)}>
            <svg data-figma-id="404:727" viewBox="0 0 16 16" preserveAspectRatio="none" style={fixedLayer(16, 16)}>
              <use href="#figma-derived-339" fill="#2457c5" />
            </svg>
          </div>
          <div data-figma-id="404:728" style={fixedLayer("max-content", 14, col2)}>
            <span data-figma-id="404:729" style={{
                ...font_PlusJakartaS,
                ...text4,
                color: "#2457c5",
                fontWeight: 600,
                fontVariationSettings: "\"wght\" 600",
                letterSpacing: "0.44px",
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
export default Frame3PlatosInsumosYUtilidad;