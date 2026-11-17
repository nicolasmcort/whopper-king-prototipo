import React from 'react';
import {
  ClientBackIcon,
  ClientFacebookIcon,
  ClientInstagramIcon,
  ClientWhatsAppIcon,
} from '@/shared/components/ui/ClientUiIcons';
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
  fontFamily: "'Inter', system-ui, sans-serif"
};
const font_Manrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
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
  whiteSpace: "pre",
  fontVariationSettings: "\"wght\" 600"
};
const text4: React.CSSProperties = {
  whiteSpace: "normal",
  lineHeight: "19.5px"
};
const text5: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 16
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  padding: "2px 0 0",
  boxSizing: "border-box"
};
const layout2: React.CSSProperties = {
  padding: "14px 0",
  boxSizing: "border-box"
};
const row2: React.CSSProperties = {
  display: "flex",
  gap: 14
};
const row4: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout3: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const surface2: React.CSSProperties = {
  background: "#f5efe7",
  borderRadius: 9999
};
const text2: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text6: React.CSSProperties = {
  color: "#1e1e1e",
  fontSize: 26,
  letterSpacing: "-0.65px"
};
const row3: React.CSSProperties = {
  ...row4,
  gap: 6
};
const row5: React.CSSProperties = {
  ...row4,
  justifyContent: "center"
};
const col2: React.CSSProperties = {
  ...col1,
  minWidth: 0
};
const row8: React.CSSProperties = {
  ...row4,
  minWidth: 0
};
const row1: React.CSSProperties = {
  ...row8,
  justifyContent: "space-between"
};
const surface3: React.CSSProperties = {
  ...surface1,
  background: "#f5efe7",
  boxShadow: "inset 0 0 0 1px #f5efe7",
  borderRadius: 16
};
const col3: React.CSSProperties = {
  ...col1,
  padding: 17,
  boxSizing: "border-box"
};
const row7: React.CSSProperties = {
  ...row8,
  gap: 4
};
const row6: React.CSSProperties = {
  ...layout2,
  minWidth: 0,
  display: "flex",
  gap: 16
};
const font_Inter_14b: React.CSSProperties = {
  ...font_Inter,
  color: "#797674",
  whiteSpace: "normal",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "22.75px"
};
const font_Inter_12: React.CSSProperties = {
  ...font_Inter,
  ...text4,
  color: "#797674",
  fontSize: 12,
  fontWeight: 400
};
const font_Inter_12b: React.CSSProperties = {
  ...font_Inter,
  color: "#797674",
  whiteSpace: "pre",
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px"
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text3,
  color: "#29241f",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "17px"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text5,
  color: "#1e1e1e",
  lineHeight: "22px"
};
function Container(p: {
  "data-figma-id": string;
  height: number;
  viewBox: string;
  width: number;
  height2: number;
  href: string;
  text: string;
  text2: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={{
    ...row6,
    position: "relative",
    height: "max-content",
    flexShrink: 0,
    alignSelf: "stretch"
  }}>
      <div data-figma-id="585:2427" style={fixedLayer(40, 40, {
      ...surface2,
      ...row5
    })}>
        <div data-figma-id="585:2428" style={fixedLayer("max-content", p.height, col1)}>
          <svg data-figma-id="464:1758" viewBox={p.viewBox} preserveAspectRatio="none" style={fixedLayer(p.width, p.height2)}>
            <use href={p.href} fill="#ed6047" />
          </svg>
        </div>
      </div>
      <div data-figma-id="464:1759" style={fixedLayer("max-content", 63, col1)}>
        <div data-figma-id="464:1760" style={fixedLayer(267, 22, col1)}>
          <span data-figma-id="464:1761" style={{
          ...font_Manrope_16,
          ...row4,
          position: "relative",
          flexShrink: 0
        }}>
            {p.text}
          </span>
        </div>
        <div data-figma-id="464:1762" style={fixedLayer(267, 41, {
        ...col1,
        ...layout1
      })}>
          <div data-figma-id="464:1763" style={{
          ...col2,
          position: "relative",
          height: 39,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
            <span data-figma-id="464:1764" style={{
            ...font_Inter_12,
            minWidth: 0,
            position: "relative",
            height: 39,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
              <span style={{
              position: "absolute",
              top: 0,
              whiteSpace: "pre",
              lineHeight: "19.5px",
              left: 0,
              textAlign: "left"
            }}>{p.text2}</span>
            </span>
          </div>
        </div>
      </div>
    </div>;
}
function Container2(p: {
  "data-figma-id": string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer("max-content", 12.667, col1)}>
      <svg data-figma-id="464:1802" viewBox="0 0 13.333 12.667" preserveAspectRatio="none" style={fixedLayer(13.333, 12.667)}>
        <use href="#figma-vector-568" fill="#ed6047" />
      </svg>
    </div>;
}
function SeparatorMargin(p: {
  "data-figma-id": string;
  padding: string;
  height: number;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer(358, 33, {
    ...col1,
    padding: p.padding,
    boxSizing: "border-box"
  })}>
      <div data-figma-id="464:1745" style={{
      borderBottom: "1px solid #ece5dc",
      ...layout3,
      position: "relative",
      height: p.height,
      flexShrink: 0,
      alignSelf: "stretch"
    }} />
    </div>;
}
export function SobreNosotros() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-563" d="M5.202 10.725L6.004 8.113L3.896 6.417L6.508 6.417L7.333 3.85L8.158 6.417L10.771 6.417L8.64 8.113L9.442 10.725L7.333 9.098L5.202 10.725L5.202 10.725M1.833 19.25L1.833 12.169C1.253 11.527 0.802 10.794 0.481 9.969C0.16 9.144 0 8.265 0 7.333C0 5.286 0.71 3.552 2.131 2.131C3.552 0.71 5.286 0 7.333 0C9.381 0 11.115 0.71 12.535 2.131C13.956 3.552 14.667 5.286 14.667 7.333C14.667 8.265 14.506 9.144 14.185 9.969C13.865 10.794 13.414 11.527 12.833 12.169L12.833 19.25L7.333 17.417L1.833 19.25L1.833 19.25M7.333 12.833C8.861 12.833 10.16 12.299 11.229 11.229C12.299 10.16 12.833 8.861 12.833 7.333C12.833 5.806 12.299 4.507 11.229 3.438C10.16 2.368 8.861 1.833 7.333 1.833C5.806 1.833 4.507 2.368 3.438 3.438C2.368 4.507 1.833 5.806 1.833 7.333C1.833 8.861 2.368 10.16 3.438 11.229C4.507 12.299 5.806 12.833 7.333 12.833L7.333 12.833M3.667 16.523L7.333 15.583L11 16.523L11 13.681C10.465 13.987 9.889 14.227 9.27 14.403C8.651 14.579 8.006 14.667 7.333 14.667C6.661 14.667 6.016 14.579 5.397 14.403C4.778 14.227 4.201 13.987 3.667 13.681L3.667 16.523L3.667 16.523M7.333 15.102L7.333 15.102L7.333 15.102L7.333 15.102L7.333 15.102L7.333 15.102L7.333 15.102L7.333 15.102L7.333 15.102L7.333 15.102" fillRule="nonzero" />
        <path id="figma-vector-932" d="M17.508 10.954C17.768 11.092 17.997 11.061 18.196 10.863C18.394 10.664 18.425 10.435 18.288 10.175L16.958 7.7L15.996 10.175L17.508 10.954L17.508 10.954M12.925 10.083L14.025 10.083L16.225 4.629C16.271 4.507 16.259 4.404 16.191 4.32C16.122 4.236 16.042 4.171 15.95 4.125L14.117 3.392C13.979 3.346 13.845 3.361 13.716 3.438C13.586 3.514 13.506 3.621 13.475 3.758L12.925 10.083L12.925 10.083M6.142 10.083L7.242 10.083L6.692 3.758C6.661 3.59 6.581 3.476 6.451 3.415C6.321 3.353 6.188 3.346 6.05 3.392L4.217 4.125C4.094 4.171 4.007 4.236 3.953 4.32C3.9 4.404 3.896 4.507 3.942 4.629L6.142 10.083L6.142 10.083M2.658 10.954L4.171 10.175L3.208 7.7L1.879 10.175C1.742 10.435 1.772 10.664 1.971 10.863C2.169 11.061 2.399 11.092 2.658 10.954L2.658 10.954M9.075 10.083L11.092 10.083L11.779 2.338C11.81 2.2 11.775 2.082 11.676 1.982C11.577 1.883 11.458 1.833 11.321 1.833L8.846 1.833C8.724 1.833 8.613 1.883 8.514 1.982C8.414 2.082 8.372 2.2 8.387 2.338L9.075 10.083L9.075 10.083M2.246 12.833C1.604 12.833 1.069 12.593 0.642 12.111C0.214 11.63 0 11.061 0 10.404C0 10.221 0.027 10.041 0.08 9.866C0.134 9.69 0.199 9.518 0.275 9.35L2.292 5.5C2.078 4.889 2.085 4.285 2.315 3.69C2.544 3.094 2.949 2.674 3.529 2.429L5.363 1.696C5.576 1.619 5.79 1.566 6.004 1.535C6.218 1.505 6.432 1.512 6.646 1.558C6.86 1.115 7.158 0.745 7.54 0.447C7.922 0.149 8.357 0 8.846 0L11.321 0C11.81 0 12.245 0.149 12.627 0.447C13.009 0.745 13.307 1.115 13.521 1.558C13.735 1.528 13.949 1.524 14.163 1.547C14.376 1.57 14.59 1.619 14.804 1.696L16.638 2.429C17.249 2.674 17.676 3.094 17.921 3.69C18.165 4.285 18.15 4.874 17.875 5.454L19.892 9.304C19.983 9.472 20.052 9.648 20.098 9.831C20.144 10.015 20.167 10.206 20.167 10.404C20.167 11.092 19.934 11.668 19.468 12.134C19.002 12.6 18.425 12.833 17.737 12.833C17.569 12.833 17.401 12.814 17.233 12.776C17.065 12.738 16.897 12.681 16.729 12.604L15.308 11.917L4.813 11.917L3.529 12.604C3.331 12.711 3.12 12.776 2.899 12.799C2.677 12.822 2.46 12.833 2.246 12.833L2.246 12.833M10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417L10.083 6.417" fillRule="nonzero" />
        <path id="figma-vector-933" d="M1.938 10.542C2.061 10.389 2.152 10.202 2.213 9.98C2.274 9.759 2.305 9.488 2.305 9.167C2.305 8.708 2.152 8.128 1.847 7.425C1.541 6.722 1.388 6.195 1.388 5.844C1.388 5.66 1.407 5.469 1.446 5.271C1.484 5.072 1.587 4.843 1.755 4.583L3.13 4.583C2.962 4.843 2.859 5.072 2.821 5.271C2.782 5.469 2.763 5.66 2.763 5.844C2.763 6.195 2.916 6.722 3.222 7.425C3.527 8.128 3.68 8.708 3.68 9.167C3.68 9.488 3.649 9.751 3.588 9.957C3.527 10.164 3.436 10.358 3.313 10.542L1.938 10.542L1.938 10.542M7.897 10.542C8.019 10.389 8.111 10.202 8.172 9.98C8.233 9.759 8.263 9.488 8.263 9.167C8.263 8.708 8.111 8.128 7.805 7.425C7.499 6.722 7.347 6.195 7.347 5.844C7.347 5.66 7.366 5.469 7.404 5.271C7.442 5.072 7.545 4.843 7.713 4.583L9.088 4.583C8.92 4.843 8.817 5.072 8.779 5.271C8.741 5.469 8.722 5.66 8.722 5.844C8.722 6.195 8.874 6.722 9.18 7.425C9.486 8.128 9.638 8.708 9.638 9.167C9.638 9.488 9.608 9.751 9.547 9.957C9.486 10.164 9.394 10.358 9.272 10.542L7.897 10.542L7.897 10.542M4.917 10.542C5.04 10.389 5.131 10.202 5.192 9.98C5.254 9.759 5.284 9.488 5.284 9.167C5.284 8.708 5.131 8.128 4.826 7.425C4.52 6.722 4.367 6.195 4.367 5.844C4.367 5.66 4.387 5.469 4.425 5.271C4.463 5.072 4.566 4.843 4.734 4.583L6.109 4.583C5.941 4.843 5.838 5.072 5.8 5.271C5.762 5.469 5.742 5.66 5.742 5.844C5.742 6.195 5.895 6.722 6.201 7.425C6.506 8.128 6.659 8.708 6.659 9.167C6.659 9.488 6.629 9.751 6.567 9.957C6.506 10.164 6.415 10.358 6.292 10.542L4.917 10.542L4.917 10.542M6.201 18.333C4.658 18.333 3.298 17.818 2.122 16.786C0.945 15.755 0.242 14.476 0.013 12.948C-0.033 12.673 0.04 12.432 0.231 12.226C0.422 12.02 0.655 11.917 0.93 11.917L10.578 11.917L11.586 2.429C11.663 1.742 11.957 1.165 12.469 0.699C12.98 0.233 13.595 0 14.313 0C15.077 0 15.727 0.267 16.261 0.802C16.796 1.337 17.063 1.986 17.063 2.75C17.063 2.964 17.044 3.247 17.006 3.598C16.968 3.949 16.949 4.125 16.949 4.125L15.138 3.896C15.138 3.896 15.154 3.739 15.184 3.426C15.215 3.113 15.23 2.888 15.23 2.75C15.23 2.49 15.142 2.273 14.966 2.097C14.791 1.921 14.573 1.833 14.313 1.833C14.069 1.833 13.863 1.914 13.695 2.074C13.527 2.234 13.427 2.429 13.397 2.658L12.342 12.627C12.174 14.247 11.51 15.602 10.349 16.695C9.188 17.787 7.805 18.333 6.201 18.333L6.201 18.333M6.201 16.5C7.102 16.5 7.912 16.248 8.63 15.744C9.348 15.24 9.867 14.575 10.188 13.75L2.145 13.75C2.496 14.575 3.034 15.24 3.76 15.744C4.486 16.248 5.299 16.5 6.201 16.5L6.201 16.5M6.201 13.75L6.201 13.75L6.201 13.75L6.201 13.75L6.201 13.75L6.201 13.75L6.201 13.75" fillRule="nonzero" />
        <path id="figma-vector-568" d="M2.55 12.667L3.633 7.983L0 4.833L4.8 4.417L6.667 0L8.533 4.417L13.333 4.833L9.7 7.983L10.783 12.667L6.667 10.183L2.55 12.667L2.55 12.667" fillRule="nonzero" />
        <path id="figma-vector-613" d="M7 14.475C8.65 13.142 9.896 11.858 10.738 10.625C11.579 9.392 12 8.233 12 7.15C12 5.65 11.533 4.417 10.6 3.45C9.667 2.483 8.467 2 7 2C5.533 2 4.333 2.483 3.4 3.45C2.467 4.417 2 5.65 2 7.15C2 8.233 2.421 9.392 3.263 10.625C4.104 11.858 5.35 13.142 7 14.475L7 14.475M7 17C4.65 15.267 2.896 13.583 1.737 11.95C0.579 10.317 0 8.717 0 7.15C0 5.067 0.65 3.354 1.95 2.013C3.25 0.671 4.933 0 7 0C9.067 0 10.75 0.671 12.05 2.013C13.35 3.354 14 5.067 14 7.15C14 8.717 13.421 10.317 12.262 11.95C11.104 13.583 9.35 15.267 7 17L7 17M7 9C7.55 9 8.021 8.804 8.413 8.413C8.804 8.021 9 7.55 9 7C9 6.45 8.804 5.979 8.413 5.588C8.021 5.196 7.55 5 7 5C6.45 5 5.979 5.196 5.588 5.588C5.196 5.979 5 6.45 5 7C5 7.55 5.196 8.021 5.588 8.413C5.979 8.804 6.45 9 7 9L7 9M0 20L0 18L14 18L14 20L0 20L0 20M7 7L7 7L7 7L7 7L7 7L7 7L7 7L7 7L7 7L7 7" fillRule="nonzero" />
        <path id="figma-vector-619" d="M13.3 14.7L14.7 13.3L11 9.6L11 5L9 5L9 10.4L13.3 14.7L13.3 14.7M10 20C8.617 20 7.317 19.737 6.1 19.212C4.883 18.687 3.825 17.975 2.925 17.075C2.025 16.175 1.313 15.117 0.788 13.9C0.263 12.683 0 11.383 0 10C0 8.617 0.263 7.317 0.788 6.1C1.313 4.883 2.025 3.825 2.925 2.925C3.825 2.025 4.883 1.313 6.1 0.788C7.317 0.263 8.617 0 10 0C11.383 0 12.683 0.263 13.9 0.788C15.117 1.313 16.175 2.025 17.075 2.925C17.975 3.825 18.687 4.883 19.212 6.1C19.737 7.317 20 8.617 20 10C20 11.383 19.737 12.683 19.212 13.9C18.687 15.117 17.975 16.175 17.075 17.075C16.175 17.975 15.117 18.687 13.9 19.212C12.683 19.737 11.383 20 10 20L10 20M10 10L10 10L10 10L10 10L10 10L10 10L10 10L10 10L10 10L10 10M10 18C12.217 18 14.104 17.221 15.663 15.663C17.221 14.104 18 12.217 18 10C18 7.783 17.221 5.896 15.663 4.338C14.104 2.779 12.217 2 10 2C7.783 2 5.896 2.779 4.338 4.338C2.779 5.896 2 7.783 2 10C2 12.217 2.779 14.104 4.338 15.663C5.896 17.221 7.783 18 10 18L10 18" fillRule="nonzero" />
        <path id="figma-vector-623" d="M0.577 0.414C0.877 0.114 1.077 -0.173 1.377 0.127L2.377 1.127C2.677 1.427 2.677 1.827 2.377 2.127C2.077 2.427 2.177 2.727 2.377 3.127C3.877 4.627 3.877 4.627 3.877 4.627C4.277 4.827 4.577 4.927 4.877 4.627C5.177 4.327 5.577 4.327 5.877 4.627L6.877 5.627C7.177 5.927 7.177 6.327 6.877 6.627C6.377 7.127 5.677 7.327 5.077 7.127C2.877 6.427 0.777 4.327 0.077 2.127C-0.123 1.527 0.077 0.827 0.577 0.327L0.877 0.127" fillRule="nonzero" />
        <path id="figma-vector-634" d="M5 0L15 0C17.76 0 20 2.24 20 5L20 15C20 17.76 17.76 20 15 20L5 20C2.24 20 0 17.76 0 15L0 5C0 2.24 2.24 0 5 0L5 0" fillRule="nonzero" />
        <path id="figma-vector-635" d="M0 4C0 6.208 1.792 8 4 8C6.208 8 8 6.208 8 4C8 1.792 6.208 0 4 0C1.792 0 0 1.792 0 4L0 4" fillRule="nonzero" />
        <path id="figma-vector-636" d="M0 0L0.01 0" fillRule="nonzero" />
        <path id="figma-vector-644" d="M7.5 13.762L6.412 12.788C5.15 11.65 4.106 10.669 3.281 9.844C2.456 9.019 1.8 8.278 1.313 7.622C0.825 6.966 0.484 6.363 0.291 5.813C0.097 5.262 0 4.7 0 4.125C0 2.95 0.394 1.969 1.181 1.181C1.969 0.394 2.95 0 4.125 0C4.775 0 5.394 0.137 5.981 0.412C6.569 0.688 7.075 1.075 7.5 1.575C7.925 1.075 8.431 0.688 9.019 0.412C9.606 0.137 10.225 0 10.875 0C12.05 0 13.031 0.394 13.819 1.181C14.606 1.969 15 2.95 15 4.125C15 4.7 14.903 5.262 14.709 5.813C14.516 6.363 14.175 6.966 13.688 7.622C13.2 8.278 12.544 9.019 11.719 9.844C10.894 10.669 9.85 11.65 8.587 12.788L7.5 13.762L7.5 13.762" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="464:1733" style={rootLayer(402, "auto", {
      margin: "0 auto",
      maxWidth: "100%",
      overflow: "hidden",
    })}>
    <div data-figma-id="464:1734" style={{
        background: "#fffcf8",
        ...col1,
        padding: "0 16px 48px",
        boxSizing: "border-box",
        width: "100%",
        position: "relative",
      }}>
      <div data-figma-id="464:1735" style={{
          background: "#fffcf8",
          ...col1,
          padding: "16px 0 0",
          boxSizing: "border-box",
          position: "relative",
          width: "100%",
        }}>
        <div data-figma-id="464:1736" style={{
            minWidth: 0,
            display: "flex",
            padding: "0 4px",
            boxSizing: "border-box",
            alignItems: "center",
            gap: 12,
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="464:1737" style={fixedLayer(36, 40)}>
            <div data-figma-id="464:1738" style={absoluteLayer(-4, 0, 40, 40, {
                ...row5,
                cursor: "pointer"
              })}>
              <div data-figma-id="464:1739" style={fixedLayer(24, 24, {
                  ...col1,
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  display: "flex"
                })}>
                <ClientBackIcon size={22} color="#1e1e1e" />
              </div>
            </div>
          </div>
          <div data-figma-id="464:1741" style={fixedLayer("max-content", 20, col1)}>
            <span data-figma-id="464:1742" style={{
                ...font_Manrope,
                color: "#1e1e1e",
                whiteSpace: "pre",
                fontSize: 22,
                fontWeight: 800,
                lineHeight: "30.052px",
                letterSpacing: "-0.5px",
                ...row4,
                position: "relative",
                flexShrink: 0
              }}>
              {"Sobre nosotros"}
            </span>
          </div>
        </div>
        <div data-figma-id="464:1743" style={{
            ...col1,
            minWidth: 0,
            padding: "0",
            boxSizing: "border-box",
            alignItems: "center",
            position: "relative",
            width: "100%",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="464:1860" style={fixedLayer("100%", 172.375, {
              ...col1,
              overflow: "hidden",
              padding: "14px 10px 0",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:1861" style={{
                ...col1,
                minWidth: 0,
                padding: "8px 0 0",
                boxSizing: "border-box",
                gap: 11.375,
                position: "relative",
                height: 158.375,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:1862" style={{
                  ...col1,
                  minWidth: 0,
                  justifyContent: "center",
                  position: "relative",
                  height: 70,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="464:1863" style={{
                    ...font_Manrope,
                    ...text1,
                    color: "#1e1e1e",
                    whiteSpace: "normal",
                    fontSize: 28,
                    lineHeight: "38.248px",
                    letterSpacing: "-0.7px",
                    minWidth: 0,
                    position: "relative",
                    height: 70,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span style={{
                      position: "absolute",
                      top: 0,
                      whiteSpace: "pre",
                      lineHeight: "35px",
                      left: 0,
                      textAlign: "left"
                    }}>{"El  sabor  artesanal hecho \ncon pasión."}</span>
                </span>
              </div>
              <div data-figma-id="464:1866" style={{
                  ...col2,
                  position: "relative",
                  height: 69,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="464:1867" style={{
                    ...font_Inter_14b,
                    minWidth: 0,
                    position: "relative",
                    height: 69,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span style={{
                      position: "absolute",
                      top: 0,
                      whiteSpace: "pre",
                      lineHeight: "22.75px",
                      left: 0,
                      textAlign: "left"
                    }}>{"Hamburguesas colosales, ingredientes frescos de \ngranja y recetas secretas que despiertan tus \nantojos."}</span>
                </span>
              </div>
            </div>
          </div>
          <SeparatorMargin data-figma-id="464:1744" padding="32px 0 0" height={1} />
          <div data-figma-id="464:1746" style={fixedLayer(358, 513, {
              ...col1,
              padding: "20px 0 0",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:1747" style={{
                ...col1,
                minWidth: 0,
                padding: "0 10px",
                boxSizing: "border-box",
                gap: 17,
                position: "relative",
                height: 481,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:1748" style={{
                  ...col1,
                  minWidth: 0,
                  gap: 8,
                  position: "relative",
                  height: 186,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:1749" style={{
                    ...col2,
                    position: "relative",
                    height: 64,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="464:1750" style={{
                      ...font_Manrope,
                      ...text1,
                      ...text6,
                      whiteSpace: "normal",
                      lineHeight: "35.516px",
                      minWidth: 0,
                      position: "relative",
                      height: 64,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span style={{
                        position: "absolute",
                        top: 0,
                        whiteSpace: "pre",
                        lineHeight: "32px",
                        left: 0,
                        textAlign: "left"
                      }}>{"Nacidos de la pasión por las\nhamburguesas colosales"}</span>
                  </span>
                </div>
                <div data-figma-id="464:1751" style={{
                    ...col2,
                    position: "relative",
                    height: 114,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="464:1752" style={{
                      ...font_Inter_14b,
                      minWidth: 0,
                      position: "relative",
                      height: 114,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span style={{
                        position: "absolute",
                        top: 0,
                        whiteSpace: "pre",
                        lineHeight: "22.75px",
                        left: 0,
                        textAlign: "left"
                      }}>{"Comenzamos con un pequeño asador y un gran \nsueño: devolverle la dignidad a la comida rápida \ncon ingredientes 100% reales. Cada receta ha sido \nperfeccionada durante años para ofrecer una \nmordida jugosa, balanceada y memorable."}</span>
                  </span>
                </div>
              </div>
              <div data-figma-id="464:1753" style={{
                  ...col1,
                  minWidth: 0,
                  padding: "8px 0 0",
                  boxSizing: "border-box",
                  position: "relative",
                  height: 278,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:1754" style={{
                    ...col2,
                    position: "relative",
                    height: 273,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <Container data-figma-id="464:1755" height={19.25} viewBox="0 0 14.667 19.25" width={14.667} height2={19.25} href="#figma-vector-563" text="Carne Angus 100% de Calidad" text2={"Cortes premium madurados, molidos cada \nmañana sin aditivos ni preservantes."} />
                  <Container data-figma-id="857:2924" height={12.833} viewBox="0 0 20.167 12.833" width={20.167} height2={12.833} href="#figma-vector-932" text="Pan Brioche Artesanal" text2={"Horneado diariamente con mantequilla pura, \nsuave como nube y tostado al fuego."} />
                  <Container data-figma-id="857:2937" height={18.333} viewBox="0 0 17.063 18.333" width={17.063} height2={18.333} href="#figma-vector-933" text="Salsas Secretas de la Casa" text2={"Emulsiones caseras, reducciones de frutas \nexóticas y ahumados de leña natural."} />
                </div>
              </div>
            </div>
          </div>
          <SeparatorMargin data-figma-id="464:1785" padding="7px 0 0" height={13} />
          <div data-figma-id="464:1787" style={fixedLayer(358, 230, {
              background: "#fffcf8",
              ...col1,
              padding: "10px 0 0",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:1788" style={{
                ...col1,
                minWidth: 0,
                gap: 16,
                position: "relative",
                height: 210.5,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:1789" style={{
                  ...row1,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:1790" style={fixedLayer("max-content", 64, {
                    ...col1,
                    padding: "0 33.34px 0 0",
                    boxSizing: "border-box"
                  })}>
                  <span data-figma-id="464:1791" style={fixedLayer(300, 64, {
                      ...font_Manrope,
                      ...text1,
                      ...text6,
                      whiteSpace: "normal",
                      lineHeight: "35.516px"
                    })}>
                    <span style={{
                        position: "absolute",
                        top: 0,
                        whiteSpace: "pre",
                        lineHeight: "32px",
                        left: 0,
                        textAlign: "left"
                      }}>{"Lo que dicen quienes nos\nprueban"}</span>
                  </span>
                </div>
              </div>
              <div data-figma-id="464:1797" style={{
                  ...layout3,
                  position: "relative",
                  height: 130.5,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:1798" style={{
                    ...surface3,
                    ...col3,
                    position: "absolute",
                    left: 0,
                    top: 4,
                    width: 288,
                    bottom: 8
                  }}>
                  <div data-figma-id="464:1799" style={{
                      ...col1,
                      minWidth: 0,
                      gap: 10,
                      position: "relative",
                      height: 81.667,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="464:1800" style={{
                        ...row7,
                        position: "relative",
                        height: "max-content",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <Container2 data-figma-id="464:1801" />
                      <Container2 data-figma-id="464:1803" />
                      <Container2 data-figma-id="464:1805" />
                      <Container2 data-figma-id="464:1807" />
                      <Container2 data-figma-id="464:1809" />
                    </div>
                    <div data-figma-id="464:1811" style={{
                        ...col2,
                        position: "relative",
                        height: 59,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="464:1812" style={{
                          ...font_Inter,
                          ...text4,
                          color: "#2d2d2d",
                          fontSize: 12,
                          fontWeight: 400,
                          minWidth: 0,
                          position: "relative",
                          height: 59,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span style={{
                            position: "absolute",
                            top: 0,
                            whiteSpace: "pre",
                            lineHeight: "19.5px",
                            left: 0,
                            textAlign: "left"
                          }}>{"“Las mejores hamburguesas de Pasto sin\ndiscusión. El pan brioche es otro nivel y la\ncarne súper jugosa.”"}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div data-figma-id="464:1813" style={{
                    ...surface3,
                    ...col3,
                    position: "absolute",
                    left: 300,
                    top: 4,
                    width: 288,
                    bottom: 8
                  }}>
                  <div data-figma-id="464:1814" style={{
                      ...col1,
                      minWidth: 0,
                      gap: 10,
                      position: "relative",
                      height: 81.667,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="464:1815" style={{
                        ...row7,
                        position: "relative",
                        height: "max-content",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <Container2 data-figma-id="464:1816" />
                      <Container2 data-figma-id="464:1818" />
                      <Container2 data-figma-id="464:1820" />
                      <Container2 data-figma-id="464:1822" />
                      <Container2 data-figma-id="464:1824" />
                    </div>
                    <div data-figma-id="464:1826" style={{
                        ...col2,
                        position: "relative",
                        height: 59,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="464:1827" style={{
                          ...font_Inter,
                          ...text4,
                          color: "#2d2d2d",
                          fontSize: 12,
                          fontWeight: 400,
                          minWidth: 0,
                          position: "relative",
                          height: 59,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span style={{
                            position: "absolute",
                            top: 0,
                            whiteSpace: "pre",
                            lineHeight: "19.5px",
                            left: 0,
                            textAlign: "left"
                          }}>{"“El tamaño colosal es real, nada de engaños.\nLas salsas artesanales tienen un toque\nahumado increíble.”"}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div data-figma-id="464:1828" style={{
                    ...surface3,
                    ...col3,
                    position: "absolute",
                    left: 600,
                    top: 4,
                    width: 288,
                    bottom: 8
                  }}>
                  <div data-figma-id="464:1829" style={{
                      ...col1,
                      minWidth: 0,
                      gap: 10,
                      position: "relative",
                      height: 81.667,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="464:1830" style={{
                        ...row7,
                        position: "relative",
                        height: "max-content",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <Container2 data-figma-id="464:1831" />
                      <Container2 data-figma-id="464:1833" />
                      <Container2 data-figma-id="464:1835" />
                      <Container2 data-figma-id="464:1837" />
                      <Container2 data-figma-id="464:1839" />
                    </div>
                    <div data-figma-id="464:1841" style={{
                        ...col2,
                        position: "relative",
                        height: 59,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="464:1842" style={{
                          ...text2,
                          ...font_PlusJakartaS,
                          ...text4,
                          color: "#2d2d2d",
                          minWidth: 0,
                          position: "relative",
                          height: 59,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span style={{
                            position: "absolute",
                            top: 0,
                            whiteSpace: "pre",
                            lineHeight: "19.5px",
                            left: 0,
                            textAlign: "left"
                          }}>{"“Excelente atención en la sede de Las\nCuadras. Calidad premium desde la primera\nmordida.”"}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div data-figma-id="464:1843" style={{
                    ...surface3,
                    ...col3,
                    position: "absolute",
                    left: 900,
                    top: 4,
                    width: 288,
                    bottom: 8
                  }}>
                  <div data-figma-id="464:1844" style={{
                      ...col1,
                      minWidth: 0,
                      gap: 10,
                      position: "relative",
                      height: 61.667,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <div data-figma-id="464:1845" style={{
                        ...row7,
                        position: "relative",
                        height: "max-content",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <Container2 data-figma-id="464:1846" />
                      <Container2 data-figma-id="464:1848" />
                      <Container2 data-figma-id="464:1850" />
                      <Container2 data-figma-id="464:1852" />
                      <Container2 data-figma-id="464:1854" />
                    </div>
                    <div data-figma-id="464:1856" style={{
                        ...col2,
                        position: "relative",
                        height: 39,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="464:1857" style={{
                          ...text2,
                          ...font_PlusJakartaS,
                          ...text4,
                          color: "#2d2d2d",
                          minWidth: 0,
                          position: "relative",
                          height: 39,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span style={{
                            position: "absolute",
                            top: 0,
                            whiteSpace: "pre",
                            lineHeight: "19.5px",
                            left: 0,
                            textAlign: "left"
                          }}>{"“Se nota la dedicación y los ingredientes\nreales. Muy recomendadas.”"}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SeparatorMargin data-figma-id="464:1858" padding="17px 0 0" height={1} />
          <div data-figma-id="464:1868" style={fixedLayer(358, 492, {
              ...col1,
              padding: "20px 0",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="464:1869" style={{
                ...col2,
                position: "relative",
                height: 452,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:1870" style={{
                  ...row1,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:1871" style={fixedLayer(398, 42, {
                    ...col1,
                    gap: 2
                  })}>
                  <div data-figma-id="464:1872" style={{
                      ...col2,
                      position: "relative",
                      height: 32,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="464:1873" style={{
                        ...font_Manrope,
                        ...text1,
                        ...text6,
                        whiteSpace: "pre",
                        lineHeight: "32px",
                        ...row4,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Dónde encontrarnos"}
                    </span>
                  </div>
                  <div data-figma-id="464:1874" style={{
                      ...col2,
                      position: "relative",
                      height: 32,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }} />
                </div>
              </div>
              <div data-figma-id="464:1875" style={{
                  ...surface1,
                  background: "linear-gradient(154.368deg, #f3efea -14.1%, #eae4da 114.1%)",
                  boxShadow: "inset 0 0 0 1px #e8e2d8",
                  borderRadius: 16,
                  minWidth: 0,
                  overflow: "hidden",
                  display: "flex",
                  padding: 1,
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  height: 191,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  cursor: "default",
                  pointerEvents: "none"
                }}>
                <div data-figma-id="464:1876" style={{
                    opacity: 0.4,
                    overflow: "hidden",
                    position: "absolute",
                    left: 1,
                    top: 1,
                    right: 1,
                    bottom: 1
                  }}>
                  <div data-figma-id="464:1877" style={absoluteLayer("-2.525%", "43.86%", "93.434%", "22.055%")} />
                  <div data-figma-id="464:1878" style={absoluteLayer("35.354%", "-10.526%", "0%", "126.316%")} />
                  <div data-figma-id="464:1879" style={absoluteLayer("55.556%", "-5.263%", "5.051%", "115.789%")} />
                  <div data-figma-id="464:1880" style={absoluteLayer("-5.051%", "76.316%", "90.909%", "7.714%")} />
                </div>
                <div data-figma-id="464:1881" style={fixedLayer("max-content", 72, {
                    ...col1,
                    alignItems: "center"
                  })}>
                  <div data-figma-id="464:1882" style={fixedLayer("max-content", 34, {
                      ...col1,
                      padding: "0 0 4px",
                      boxSizing: "border-box"
                    })}>
                    <div data-figma-id="464:1883" style={fixedLayer(208.414, "max-content", {
                        background: "#1e1e1e",
                        borderRadius: 9999,
                        display: "flex",
                        padding: "6px 12px",
                        boxSizing: "border-box",
                        alignItems: "center",
                        gap: 5.99
                      })}>
                      <div data-figma-id="464:1884" style={{
                          background: "rgba(255, 255, 255, 0.002)",
                          borderRadius: 9999,
                          boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          position: "absolute",
                          left: 0,
                          top: 0,
                          right: 0.074,
                          bottom: 0
                        }} />
                      <div data-figma-id="464:1885" style={fixedLayer("max-content", 18, col1)}>
                        <div data-figma-id="464:1886" style={fixedLayer(20.094, 18)} />
                      </div>
                      <div data-figma-id="464:1887" style={fixedLayer("max-content", 16, col1)}>
                        <span data-figma-id="464:1888" style={{
                            ...font_Inter,
                            ...text3,
                            color: "#ffffff",
                            fontSize: 12,
                            fontWeight: 700,
                            lineHeight: "16px",
                            ...row4,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Whopper King Las Cuadras"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div data-figma-id="464:1889" style={fixedLayer(32, 32, {
                      background: "#e14e36",
                      borderRadius: 9999,
                      ...row5
                    })}>
                    <div data-figma-id="464:1890" style={absoluteLayer("calc(50% + -16px)", 0, 32, 32, {
                        background: "rgba(255, 255, 255, 0.002)",
                        borderRadius: 9999,
                        boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(225, 78, 54, 0.2)"
                      })} />
                    <div data-figma-id="464:1891" style={fixedLayer("max-content", 20, col1)}>
                      <div data-figma-id="464:1892" style={fixedLayer(16, 20)} />
                    </div>
                  </div>
                  <div data-figma-id="464:1893" style={fixedLayer(10, 6, {
                      ...col1,
                      ...layout1
                    })}>
                    <div data-figma-id="464:1894" style={fixedLayer(10, 4, {
                        background: "rgba(0, 0, 0, 0.25)",
                        borderRadius: 9999,
                        filter: "blur(2px)"
                      })} />
                  </div>
                </div>
                <div data-figma-id="464:1895" style={{
                    ...col1,
                    padding: "1px 0 0",
                    boxSizing: "border-box",
                    position: "absolute",
                    width: "max-content",
                    height: 21,
                    right: 11,
                    bottom: 11
                  }}>
                  <div data-figma-id="464:1896" style={fixedLayer(88.08, "max-content", {
                      ...surface1,
                      background: "rgba(255, 255, 255, 0.8)",
                      borderRadius: 6,
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      padding: "0 10px",
                      boxSizing: "border-box"
                    })}>
                    <span data-figma-id="464:1897" style={{
                        ...font_Inter,
                        ...text3,
                        color: "#78716c",
                        fontSize: 10,
                        fontWeight: 600,
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        ...row4,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Pasto, Nariño"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="464:1898" style={{
                  ...col1,
                  padding: "4px 0 0",
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  position: "absolute",
                  left: 0,
                  top: 233,
                  height: 192,
                  right: 0
                }}>
                <div data-figma-id="464:1899" style={{
                    ...row2,
                    minWidth: 0,
                    padding: "8px 10px",
                    boxSizing: "border-box",
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="464:1900" style={fixedLayer(40, 40, row5)}>
                    <div data-figma-id="585:2455" style={fixedLayer(40, 40, {
                        ...surface2,
                        ...row5
                      })}>
                      <div data-figma-id="464:1901" style={fixedLayer("max-content", 20, col1)}>
                        <svg data-figma-id="464:1902" viewBox="0 0 14 20" preserveAspectRatio="none" style={fixedLayer(14, 20)}>
                          <use href="#figma-vector-613" fill="#ed6047" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-figma-id="464:1903" style={{
                      ...col2,
                      position: "relative",
                      height: 40,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                    <div data-figma-id="464:1904" style={{
                        ...col2,
                        position: "relative",
                        height: 22,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="464:1905" style={{
                          ...font_Manrope_16,
                          ...row8,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        {"Calle 20 #31C-38, Las Cuadras"}
                      </span>
                    </div>
                    <div data-figma-id="464:1906" style={{
                        ...col1,
                        ...layout1,
                        minWidth: 0,
                        position: "relative",
                        height: 18,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <div data-figma-id="464:1907" style={{
                          ...col2,
                          position: "relative",
                          height: 16,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span data-figma-id="464:1908" style={{
                            ...font_Inter,
                            ...text2,
                            color: "#686561",
                            whiteSpace: "pre",
                            lineHeight: "16px",
                            ...row8,
                            position: "relative",
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                          {"Sector gastronómico Las Cuadras · Pasto"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-figma-id="464:1909" style={{
                    ...row2,
                    minWidth: 0,
                    padding: 10,
                    boxSizing: "border-box",
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="464:1910" style={fixedLayer(40, 40, row5)}>
                    <div data-figma-id="585:2457" style={fixedLayer(40, 40, {
                        ...surface2,
                        ...row5
                      })}>
                      <div data-figma-id="464:1911" style={fixedLayer("max-content", 20, col1)}>
                        <svg data-figma-id="464:1912" viewBox="0 0 20 20" preserveAspectRatio="none" style={fixedLayer(20, 20)}>
                          <use href="#figma-vector-619" fill="#ed6047" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-figma-id="464:1913" style={{
                      ...col2,
                      position: "relative",
                      height: 40,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                    <div data-figma-id="464:1914" style={{
                        ...col2,
                        position: "relative",
                        height: 22,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <span data-figma-id="464:1915" style={{
                          ...font_Manrope_16,
                          ...row8,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        {"Horario de atención"}
                      </span>
                    </div>
                    <div data-figma-id="464:1916" style={{
                        ...col1,
                        ...layout1,
                        minWidth: 0,
                        position: "relative",
                        height: 18,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      <div data-figma-id="464:1917" style={{
                          ...col2,
                          position: "relative",
                          height: 16,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span data-figma-id="464:1918" style={{
                            ...font_Inter,
                            ...text2,
                            color: "#686561",
                            whiteSpace: "pre",
                            lineHeight: "16px",
                            ...row8,
                            position: "relative",
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                          {"Lunes a Domingo: 11:00 AM - 9:30 PM"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-figma-id="464:1919" style={{
                    background: "#ed6047",
                    borderRadius: 12,
                    filter: "drop-shadow(0px 6px 16px rgba(237, 96, 71, 0.35))",
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    position: "relative",
                    height: 48,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    cursor: "default"
                  }}>
                  <div data-figma-id="464:1920" style={fixedLayer("max-content", 21, {
                      ...col1,
                      alignItems: "center"
                    })}>
                    <span data-figma-id="464:1921" style={{
                        ...font_Manrope,
                        ...text1,
                        ...text5,
                        color: "#ffffff",
                        lineHeight: "21.856px",
                        textAlign: "center",
                        ...row5,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Como llegar con Google Maps"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="464:1924" style={fixedLayer(359, 337, {
              ...col1,
              alignItems: "center"
            })}>
            <div data-figma-id="464:1925" style={{
                ...col1,
                minWidth: 0,
                gap: 16,
                position: "relative",
                height: 337,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="464:1926" style={{
                  ...col2,
                  position: "relative",
                  height: 32,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="464:1927" style={{
                    ...font_Manrope,
                    ...text1,
                    ...text6,
                    whiteSpace: "pre",
                    lineHeight: "35.516px",
                    ...row8,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Canales de atención y redes"}
                </span>
              </div>
              <div data-figma-id="464:1928" style={{
                  ...col2,
                  position: "relative",
                  height: 214,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:1929" style={{
                    ...row1,
                    ...layout2,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="464:1930" style={fixedLayer(134.88, "max-content", {
                      ...row2,
                      alignItems: "center"
                    })}>
                    <div data-figma-id="585:2484" style={fixedLayer(40, 40, {
                        background: "#ebf7ee",
                        borderRadius: 9999,
                        ...row5
                      })}>
                      <div data-figma-id="464:1932" style={fixedLayer(40, 40, {
                          overflow: "visible",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        })}>
                        <ClientWhatsAppIcon size={40} color="#16a34a" />
                      </div>
                    </div>
                    <div data-figma-id="464:1935" style={fixedLayer("max-content", 40, col1)}>
                      <div data-figma-id="464:1936" style={{
                          ...col1,
                          minWidth: 80.88,
                          position: "relative",
                          height: 22,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span data-figma-id="464:1937" style={{
                            ...font_Manrope_16,
                            ...row4,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"WhatsApp"}
                        </span>
                      </div>
                      <div data-figma-id="464:1938" style={{
                          ...col1,
                          ...layout1,
                          minWidth: 80.88,
                          position: "relative",
                          height: 18,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <div data-figma-id="464:1939" style={{
                            ...col2,
                            position: "relative",
                            height: 16,
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                          <span data-figma-id="464:1940" style={{
                              ...text2,
                              ...font_PlusJakartaS,
                              color: "#797674",
                              whiteSpace: "pre",
                              lineHeight: "16px",
                              ...row4,
                              position: "relative",
                              width: 229,
                              flexShrink: 0
                            }}>
                            {"+57 323 5073227"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-figma-id="464:1941" style={fixedLayer("max-content", 10, col1)}>
                    <div data-figma-id="464:1942" style={fixedLayer(6.167, 10)} />
                  </div>
                </div>
                <div data-figma-id="464:1943" style={{
                    boxShadow: "inset 0 1px 0 0 #eae7e7",
                    ...row1,
                    padding: "15px 0 14px",
                    boxSizing: "border-box",
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="464:1944" style={fixedLayer(288, "max-content", {
                      ...row2,
                      alignItems: "center"
                    })}>
                    <div data-figma-id="464:1945" style={fixedLayer(44, 44, {
                        ...surface1,
                        background: "#fff0ed",
                        borderRadius: 9999,
                        ...row5
                      })}>
                      <div data-figma-id="464:1946" style={fixedLayer(24, 24, {
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        })}>
                        <ClientInstagramIcon size={20} color="#ed6047" />
                      </div>
                    </div>
                    <div data-figma-id="464:1950" style={fixedLayer("max-content", 40, col1)}>
                      <div data-figma-id="464:1951" style={{
                          ...col1,
                          minWidth: 230,
                          position: "relative",
                          height: 22,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span data-figma-id="464:1952" style={{
                            ...font_Manrope_16,
                            ...row4,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Instagram"}
                        </span>
                      </div>
                      <div data-figma-id="464:1953" style={fixedLayer(230, 18, {
                          ...col1,
                          ...layout1
                        })}>
                        <div data-figma-id="464:1954" style={{
                            ...col2,
                            position: "relative",
                            height: 16,
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                          <span data-figma-id="464:1955" style={{
                              ...font_Inter_12b,
                              ...row8,
                              position: "relative",
                              flexShrink: 0,
                              alignSelf: "stretch"
                            }}>
                            {"@whopperking · Fotos y Novedades"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-figma-id="464:1956" style={fixedLayer("max-content", 10, col1)}>
                    <div data-figma-id="464:1957" style={fixedLayer(6.167, 10)} />
                  </div>
                </div>
                <div data-figma-id="464:1958" style={{
                    boxShadow: "inset 0 1px 0 0 #eae7e7",
                    ...row1,
                    padding: "15px 0 14px",
                    boxSizing: "border-box",
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="464:1959" style={fixedLayer(280, "max-content", {
                      ...row2,
                      alignItems: "center"
                    })}>
                    <div data-figma-id="464:1960" style={fixedLayer(44, 44, {
                        ...surface1,
                        background: "#eff4fc",
                        borderRadius: 9999,
                        ...row5
                      })}>
                      <div data-figma-id="464:1961" style={fixedLayer(24, 24, {
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        })}>
                        <ClientFacebookIcon size={22} color="#1877f2" />
                      </div>
                    </div>
                    <div data-figma-id="464:1964" style={fixedLayer("max-content", 40, col1)}>
                      <div data-figma-id="464:1965" style={{
                          ...col1,
                          minWidth: 222,
                          position: "relative",
                          height: 22,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                        <span data-figma-id="464:1966" style={{
                            ...font_Manrope_16,
                            ...row4,
                            position: "relative",
                            flexShrink: 0
                          }}>
                          {"Facebook"}
                        </span>
                      </div>
                      <div data-figma-id="464:1967" style={fixedLayer(222, 18, {
                          ...col1,
                          ...layout1
                        })}>
                        <div data-figma-id="464:1968" style={{
                            ...col2,
                            position: "relative",
                            height: 16,
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                          <span data-figma-id="464:1969" style={{
                              ...font_Inter_12b,
                              ...row8,
                              position: "relative",
                              flexShrink: 0,
                              alignSelf: "stretch"
                            }}>
                            {"Whopper King Pasto"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-figma-id="464:1970" style={fixedLayer("max-content", 10, col1)}>
                    <div data-figma-id="464:1971" style={fixedLayer(6.167, 10)} />
                  </div>
                </div>
              </div>
              <div data-figma-id="464:1972" style={{
                  ...row3,
                  minWidth: 0,
                  padding: "23.5px 0 31.5px",
                  boxSizing: "border-box",
                  justifyContent: "center",
                  position: "relative",
                  height: 55,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="464:1973" style={fixedLayer("max-content", 13.762, col1)}>
                  <svg data-figma-id="464:1974" viewBox="0 0 15 13.762" preserveAspectRatio="none" style={fixedLayer(15, 13.762)}>
                    <use href="#figma-vector-644" fill="#ed6047" />
                  </svg>
                </div>
                <div data-figma-id="464:1975" style={fixedLayer("max-content", 16, col1)}>
                  <span data-figma-id="464:1976" style={{
                      ...font_Inter,
                      color: "#797674",
                      whiteSpace: "pre",
                      fontSize: 14,
                      fontWeight: 400,
                      lineHeight: "16.943px",
                      ...row4,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Comida 100% hecha con amor en Pasto."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default SobreNosotros;