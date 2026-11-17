import React from 'react';
import {
  ClientBackIcon,
  ClientUtensilsIcon,
  ClientPinIcon,
  ClientClockIcon,
  ClientLockIcon,
  ClientStoreIcon,
  ClientCardIcon,
  ClientCashIcon,
  ClientNequiIcon,
  ClientBrebIcon,
  ClientHelpIcon,
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
  whiteSpace: "pre",
  fontFamily: "'Inter', system-ui, sans-serif"
};
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const text2: React.CSSProperties = {
  fontWeight: 800,
  fontVariationSettings: "\"wght\" 800"
};
const text4: React.CSSProperties = {
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  marginTop: -0.5
};
const col2: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const text3: React.CSSProperties = {
  color: "#82776e",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text5: React.CSSProperties = {
  color: "#ed6047",
  lineHeight: "28px",
  textAlign: "center"
};
const layout2: React.CSSProperties = {
  minWidth: 44,
  minHeight: 44,
  justifyContent: "center"
};
const col3: React.CSSProperties = {
  ...col2,
  overflow: "hidden"
};
const col6: React.CSSProperties = {
  ...col2,
  minWidth: 0
};
const surface1: React.CSSProperties = {
  background: "#fff0e9",
  boxShadow: "inset 0 0 0 1px rgba(250, 220, 209, 0.5)",
  borderRadius: 14
};
const row3: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const col7: React.CSSProperties = {
  ...row1,
  flexDirection: "column"
};
const col1: React.CSSProperties = {
  ...col2,
  padding: "4px 0 0",
  boxSizing: "border-box"
};
const col4: React.CSSProperties = {
  ...col6,
  padding: "0 0 0.63px",
  boxSizing: "border-box"
};
const col9: React.CSSProperties = {
  ...col3,
  alignItems: "center",
  gap: 5
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  padding: "6px 0",
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const col5: React.CSSProperties = {
  ...col6,
  padding: "0 0 0.75px",
  boxSizing: "border-box",
  marginTop: -0.5
};
const col8: React.CSSProperties = {
  ...col6,
  padding: 15,
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const font_Inter_10: React.CSSProperties = {
  ...font_Inter,
  color: "#82776e",
  fontSize: 10,
  fontWeight: 500,
  lineHeight: "12.102px"
};
const row4: React.CSSProperties = {
  ...row1,
  ...layout2,
  padding: "7.5px 0 8.5px",
  boxSizing: "border-box"
};
const font_Manrope_15: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  color: "#29241f",
  fontSize: 15,
  lineHeight: "22.5px",
  textAlign: "center"
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  color: "#bd412d",
  fontSize: 14,
  lineHeight: "21px",
  textAlign: "center"
};
function Part(p: {
  "data-figma-id": string;
  viewBox: string;
  left: string;
  top: string;
  width: string;
  height: string;
  href: string;
  text: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer(78, 39, col9)}>
      <div data-figma-id="342:1200" style={fixedLayer(22, 22, {
      overflow: "hidden"
    })}>
        <svg data-figma-id="342:1201" viewBox={p.viewBox} preserveAspectRatio="none" style={absoluteLayer(p.left, p.top, p.width, p.height)}>
          <use href={p.href} fill="#82776e" />
        </svg>
      </div>
      <span data-figma-id="342:1202" style={{
      ...font_Inter_10,
      position: "relative",
      flexShrink: 0
    }}>
        {p.text}
      </span>
    </div>;
}
export function CarritoDomicilio() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-401-corners-2-0" d="M0 5.251L10.501 5.251M5.251 0L5.251 10.501" fillRule="nonzero" />
        <path id="figma-vector-115-corners-3-0" d="M19.2 1.146C19.2 0.513 18.722 0 18.133 0L17.067 0C16.478 0 16 0.513 16 1.146L16 11.08C16 11.713 16.478 12.226 17.067 12.226L18.133 12.226C18.722 12.226 19.2 11.713 19.2 11.08L19.2 1.146ZM11.766 2.445L12.833 2.445C13.422 2.445 13.899 2.971 13.899 3.619L13.899 11.053C13.899 11.701 13.422 12.226 12.833 12.226L11.766 12.226C11.177 12.226 10.699 11.701 10.699 11.053L10.699 3.619C10.699 2.971 11.177 2.445 11.766 2.445ZM7.434 5.094L6.367 5.094C5.778 5.094 5.301 5.626 5.301 6.283L5.301 11.038C5.301 11.694 5.778 12.226 6.367 12.226L7.434 12.226C8.023 12.226 8.501 11.694 8.501 11.038L8.501 6.283C8.501 5.626 8.023 5.094 7.434 5.094ZM2.133 7.54L1.067 7.54C0.478 7.54 0 8.064 0 8.711L0 11.055C0 11.702 0.478 12.226 1.067 12.226L2.133 12.226C2.722 12.226 3.2 11.702 3.2 11.055L3.2 8.711C3.2 8.064 2.722 7.54 2.133 7.54Z" fillRule="evenodd" />
        <path id="figma-vector-116-corners-3-0" d="M8.571 2.466C11.058 2.466 13.45 3.388 15.253 5.042C15.389 5.17 15.606 5.168 15.739 5.038L17.037 3.775C17.104 3.709 17.142 3.62 17.142 3.527C17.141 3.435 17.102 3.346 17.034 3.281C12.303 -1.094 4.839 -1.094 0.108 3.281C0.04 3.346 0.001 3.435 0 3.527C-0.001 3.62 0.037 3.709 0.105 3.775L1.403 5.038C1.536 5.168 1.753 5.17 1.889 5.042C3.692 3.388 6.084 2.466 8.571 2.466ZM8.568 6.687C9.925 6.686 11.234 7.198 12.24 8.122C12.376 8.253 12.591 8.251 12.723 8.116L14.011 6.797C14.078 6.727 14.116 6.634 14.115 6.536C14.114 6.438 14.075 6.345 14.005 6.278C10.942 3.387 6.197 3.387 3.133 6.278C3.064 6.345 3.024 6.438 3.023 6.536C3.023 6.634 3.06 6.728 3.128 6.797L4.415 8.116C4.548 8.251 4.762 8.253 4.898 8.122C5.904 7.199 7.212 6.687 8.568 6.687ZM11.092 9.48C11.094 9.585 11.057 9.687 10.99 9.761L8.813 12.216C8.749 12.288 8.662 12.328 8.572 12.328C8.481 12.328 8.394 12.288 8.33 12.216L6.153 9.761C6.086 9.687 6.049 9.585 6.051 9.48C6.053 9.375 6.094 9.275 6.164 9.204C7.554 7.89 9.59 7.89 10.98 9.204C11.05 9.275 11.09 9.375 11.092 9.48Z" fillRule="evenodd" />
        <path id="figma-vector-117-corners-3-0" d="M18.5 0C20.55 0 21.576 0 22.382 0.343C23.406 0.778 24.222 1.594 24.657 2.618C25 3.424 25 4.45 25 6.5C25 8.55 25 9.576 24.657 10.382L24.571 10.571C24.119 11.507 23.342 12.249 22.382 12.657L22.228 12.718C21.443 13 20.422 13 18.5 13L6.5 13L5.142 12.995C3.951 12.979 3.223 12.914 2.618 12.657C1.658 12.249 0.881 11.507 0.429 10.571L0.343 10.382C0 9.576 0 8.55 0 6.5C0 4.578 0 3.557 0.282 2.772L0.343 2.618C0.751 1.658 1.493 0.881 2.429 0.429L2.618 0.343C3.223 0.086 3.951 0.021 5.142 0.005L6.5 0L18.5 0ZM6.5 1C5.461 1 4.733 1 4.162 1.04C3.601 1.079 3.268 1.153 3.01 1.263C2.223 1.597 1.597 2.223 1.263 3.01C1.153 3.268 1.079 3.601 1.04 4.162C1 4.733 1 5.461 1 6.5C1 7.539 1 8.267 1.04 8.838C1.079 9.399 1.153 9.732 1.263 9.99C1.597 10.777 2.223 11.403 3.01 11.737C3.268 11.847 3.601 11.921 4.162 11.96C4.733 12 5.461 12 6.5 12L18.5 12C19.539 12 20.267 12 20.838 11.96C21.399 11.921 21.732 11.847 21.99 11.737C22.777 11.403 23.403 10.777 23.737 9.99C23.847 9.732 23.921 9.399 23.96 8.838C24 8.267 24 7.539 24 6.5C24 5.461 24 4.733 23.96 4.162C23.921 3.601 23.847 3.268 23.737 3.01C23.403 2.223 22.777 1.597 21.99 1.263C21.732 1.153 21.399 1.079 20.838 1.04C20.267 1 19.539 1 18.5 1L6.5 1ZM19 2C20.4 2 21.1 2 21.635 2.272C22.105 2.512 22.488 2.895 22.728 3.365C23 3.9 23 4.6 23 6L23 7C23 8.4 23 9.1 22.728 9.635C22.488 10.105 22.105 10.488 21.635 10.727C21.1 11 20.4 11 19 11L6 11C4.6 11 3.9 11 3.365 10.727C2.895 10.488 2.512 10.105 2.272 9.635C2 9.1 2 8.4 2 7L2 6C2 4.6 2 3.9 2.272 3.365C2.512 2.895 2.895 2.512 3.365 2.272C3.9 2 4.6 2 6 2L19 2ZM26 4.5C26.805 4.845 27.328 5.648 27.328 6.538C27.328 7.428 26.805 8.23 26 8.575L26 4.5Z" fillRule="nonzero" />
        <path id="figma-derived-692" d="M10.1 17.417C10.1 17.914 10.503 18.317 11 18.317C11.497 18.317 11.9 17.914 11.9 17.417L11 17.417L10.1 17.417ZM4.6 17.417C4.6 17.914 5.003 18.317 5.5 18.317C5.997 18.317 6.4 17.914 6.4 17.417L5.5 17.417L4.6 17.417ZM0 7.334L0.9 7.334L0.9 7.334L0 7.334ZM0.65 5.933L1.231 6.621L1.236 6.616L0.65 5.933ZM7.067 0.433L6.486 -0.254L6.481 -0.25L7.067 0.433ZM8.25 0L8.25 -0.9L8.25 0ZM9.433 0.433L10.019 -0.25L10.014 -0.254L9.433 0.433ZM15.85 5.933L15.264 6.616L15.269 6.62L15.85 5.933ZM16.5 7.334L15.6 7.334L15.6 7.334L16.5 7.334ZM15.963 16.88L15.327 16.244L15.963 16.88ZM0 15.584L-0.9 15.584L0 15.584ZM11 17.417L11.9 17.417L11.9 10.083L11 10.083L10.1 10.083L10.1 17.417L11 17.417ZM11 10.083L11.9 10.083C11.9 9.602 11.709 9.139 11.368 8.799L10.732 9.435L10.095 10.072C10.098 10.075 10.1 10.079 10.1 10.083L11 10.083ZM10.732 9.435L11.368 8.799C11.027 8.458 10.565 8.267 10.083 8.267L10.083 9.167L10.083 10.067C10.088 10.067 10.092 10.068 10.095 10.072L10.732 9.435ZM10.083 9.167L10.083 8.267L6.417 8.267L6.417 9.167L6.417 10.067L10.083 10.067L10.083 9.167ZM6.417 9.167L6.417 8.267C5.935 8.267 5.473 8.458 5.132 8.799L5.768 9.435L6.405 10.072C6.408 10.068 6.412 10.067 6.417 10.067L6.417 9.167ZM5.768 9.435L5.132 8.799C4.791 9.139 4.6 9.602 4.6 10.083L5.5 10.083L6.4 10.083C6.4 10.079 6.402 10.075 6.405 10.072L5.768 9.435ZM5.5 10.083L4.6 10.083L4.6 17.417L5.5 17.417L6.4 17.417L6.4 10.083L5.5 10.083ZM0 7.334L0.9 7.334C0.9 7.198 0.93 7.064 0.987 6.94L0.17 6.562L-0.646 6.183C-0.813 6.544 -0.9 6.936 -0.9 7.334L0 7.334ZM0.17 6.562L0.987 6.94C1.044 6.817 1.127 6.708 1.231 6.62L0.65 5.933L0.069 5.246C-0.235 5.502 -0.479 5.822 -0.646 6.183L0.17 6.562ZM0.65 5.933L1.236 6.616L7.652 1.116L7.067 0.433L6.481 -0.25L0.064 5.25L0.65 5.933ZM7.067 0.433L7.648 1.12C7.816 0.978 8.029 0.9 8.25 0.9L8.25 0L8.25 -0.9C7.604 -0.9 6.979 -0.671 6.486 -0.254L7.067 0.433ZM8.25 0L8.25 0.9C8.471 0.9 8.684 0.978 8.852 1.12L9.433 0.433L10.014 -0.254C9.521 -0.671 8.896 -0.9 8.25 -0.9L8.25 0ZM9.433 0.433L8.848 1.116L15.264 6.616L15.85 5.933L16.436 5.25L10.019 -0.25L9.433 0.433ZM15.85 5.933L15.269 6.62C15.373 6.708 15.456 6.817 15.513 6.94L16.33 6.562L17.146 6.183C16.979 5.822 16.735 5.502 16.431 5.246L15.85 5.933ZM16.33 6.562L15.513 6.94C15.57 7.064 15.6 7.198 15.6 7.334L16.5 7.334L17.4 7.334C17.4 6.936 17.313 6.544 17.146 6.183L16.33 6.562ZM16.5 7.334L15.6 7.334L15.6 15.584L16.5 15.584L17.4 15.584L17.4 7.334L16.5 7.334ZM16.5 15.584L15.6 15.584C15.6 15.831 15.502 16.069 15.327 16.244L15.963 16.88L16.599 17.517C17.112 17.004 17.4 16.309 17.4 15.584L16.5 15.584ZM15.963 16.88L15.327 16.244C15.152 16.419 14.914 16.517 14.667 16.517L14.667 17.417L14.667 18.317C15.392 18.317 16.087 18.029 16.599 17.517L15.963 16.88ZM14.667 17.417L14.667 16.517L1.833 16.517L1.833 17.417L1.833 18.317L14.667 18.317L14.667 17.417ZM1.833 17.417L1.833 16.517C1.586 16.517 1.348 16.419 1.173 16.244L0.537 16.88L-0.099 17.517C0.413 18.029 1.108 18.317 1.833 18.317L1.833 17.417ZM0.537 16.88L1.173 16.244C0.998 16.069 0.9 15.831 0.9 15.584L0 15.584L-0.9 15.584C-0.9 16.309 -0.612 17.004 -0.099 17.517L0.537 16.88ZM0 15.584L0.9 15.584L0.9 7.334L0 7.334L-0.9 7.334L-0.9 15.584L0 15.584Z" fillRule="nonzero" />
        <path id="figma-derived-694" d="M15.864 17.137C16.215 17.488 16.785 17.488 17.137 17.137C17.488 16.785 17.488 16.215 17.137 15.864L16.5 16.5L15.864 17.137ZM13.158 11.885C12.807 11.534 12.237 11.534 11.885 11.885C11.534 12.237 11.534 12.807 11.885 13.158L12.522 12.522L13.158 11.885ZM16.5 16.5L17.137 15.864L13.158 11.885L12.522 12.522L11.885 13.158L15.864 17.137L16.5 16.5ZM14.667 7.333L13.767 7.333C13.767 10.886 10.886 13.767 7.333 13.767L7.333 14.667L7.333 15.567C11.88 15.567 15.567 11.88 15.567 7.333L14.667 7.333ZM7.333 14.667L7.333 13.767C3.78 13.767 0.9 10.886 0.9 7.333L0 7.333L-0.9 7.333C-0.9 11.88 2.786 15.567 7.333 15.567L7.333 14.667ZM0 7.333L0.9 7.333C0.9 3.78 3.78 0.9 7.333 0.9L7.333 0L7.333 -0.9C2.786 -0.9 -0.9 2.786 -0.9 7.333L0 7.333ZM7.333 0L7.333 0.9C10.886 0.9 13.767 3.78 13.767 7.333L14.667 7.333L15.567 7.333C15.567 2.786 11.88 -0.9 7.333 -0.9L7.333 0Z" fillRule="nonzero" />
        <path id="figma-derived-698" d="M0.75 0.833C0.75 0.419 0.414 0.083 0 0.083C-0.414 0.083 -0.75 0.419 -0.75 0.833L0 0.833L0.75 0.833ZM0 0.833M0 0.833M0 0.833L-0.75 0.833C-0.75 1.707 -0.041 2.417 0.833 2.417L0.833 1.667L0.833 0.917C0.788 0.917 0.75 0.879 0.75 0.833L0 0.833ZM0.833 1.667L0.833 2.417C1.707 2.417 2.417 1.707 2.417 0.833L1.667 0.833L0.917 0.833C0.917 0.879 0.879 0.917 0.833 0.917L0.833 1.667ZM1.667 0.833L2.417 0.833C2.417 -0.041 1.707 -0.75 0.833 -0.75L0.833 0L0.833 0.75C0.879 0.75 0.917 0.788 0.917 0.833L1.667 0.833ZM0.833 0L0.833 -0.75C-0.041 -0.75 -0.75 -0.041 -0.75 0.833L0 0.833L0.75 0.833C0.75 0.788 0.788 0.75 0.833 0.75L0.833 0ZM0 0.833" fillRule="nonzero" />
        <path id="figma-derived-699" d="M0.75 0.833C0.75 0.419 0.414 0.083 0 0.083C-0.414 0.083 -0.75 0.419 -0.75 0.833L0 0.833L0.75 0.833ZM0 0.833M0 0.833M0 0.833L-0.75 0.833C-0.75 1.707 -0.041 2.417 0.833 2.417L0.833 1.667L0.833 0.917C0.788 0.917 0.75 0.879 0.75 0.833L0 0.833ZM0.833 1.667L0.833 2.417C1.707 2.417 2.417 1.707 2.417 0.833L1.667 0.833L0.917 0.833C0.917 0.879 0.879 0.917 0.833 0.917L0.833 1.667ZM1.667 0.833L2.417 0.833C2.417 -0.041 1.707 -0.75 0.833 -0.75L0.833 0L0.833 0.75C0.879 0.75 0.917 0.788 0.917 0.833L1.667 0.833ZM0.833 0L0.833 -0.75C-0.041 -0.75 -0.75 -0.041 -0.75 0.833L0 0.833L0.75 0.833C0.75 0.788 0.788 0.75 0.833 0.75L0.833 0ZM0 0.833" fillRule="nonzero" />
        <path id="figma-derived-700" d="M0 -0.75C-0.414 -0.75 -0.75 -0.414 -0.75 0C-0.75 0.414 -0.414 0.75 0 0.75L0 0L0 -0.75ZM3.333 0L4.069 -0.147C3.999 -0.498 3.691 -0.75 3.333 -0.75L3.333 0ZM5.567 11.158L6.302 11.012L6.302 11.011L5.567 11.158ZM7.233 12.5L7.233 11.75C7.229 11.75 7.224 11.75 7.219 11.75L7.233 12.5ZM15.333 12.5L15.348 11.75C15.343 11.75 15.338 11.75 15.333 11.75L15.333 12.5ZM17 11.158L17.736 11.304L17.737 11.299L17 11.158ZM18.333 4.167L19.07 4.307C19.112 4.088 19.054 3.861 18.911 3.689C18.769 3.516 18.557 3.417 18.333 3.417L18.333 4.167ZM4.167 3.417C3.752 3.417 3.417 3.752 3.417 4.167C3.417 4.581 3.752 4.917 4.167 4.917L4.167 4.167L4.167 3.417ZM0 0L0 0.75L3.333 0.75L3.333 0L3.333 -0.75L0 -0.75L0 0ZM3.333 0L2.598 0.147L4.831 11.306L5.567 11.158L6.302 11.011L4.069 -0.147L3.333 0ZM5.567 11.158L4.831 11.304C5.059 12.453 6.077 13.272 7.248 13.25L7.233 12.5L7.219 11.75C6.775 11.759 6.389 11.448 6.302 11.012L5.567 11.158ZM7.233 12.5L7.233 13.25L15.333 13.25L15.333 12.5L15.333 11.75L7.233 11.75L7.233 12.5ZM15.333 12.5L15.319 13.25C16.489 13.272 17.508 12.453 17.736 11.304L17 11.158L16.264 11.012C16.178 11.448 15.792 11.759 15.348 11.75L15.333 12.5ZM17 11.158L17.737 11.299L19.07 4.307L18.333 4.167L17.597 4.026L16.263 11.018L17 11.158ZM18.333 4.167L18.333 3.417L4.167 3.417L4.167 4.167L4.167 4.917L18.333 4.917L18.333 4.167Z" fillRule="nonzero" />
        <path id="figma-derived-695" d="M7.333 9.167L7.333 8.267L7.333 9.167ZM13.765 16.5C13.765 16.997 14.168 17.4 14.665 17.4C15.162 17.4 15.565 16.997 15.565 16.5L14.665 16.5L13.765 16.5ZM-0.9 16.5C-0.9 16.997 -0.497 17.4 0 17.4C0.497 17.4 0.9 16.997 0.9 16.5L0 16.5L-0.9 16.5ZM7.333 9.167L7.333 10.067C10.361 10.067 12.815 7.612 12.815 4.583L11.915 4.583L11.015 4.583C11.015 6.618 9.367 8.267 7.333 8.267L7.333 9.167ZM11.915 4.583L12.815 4.583C12.815 1.555 10.361 -0.9 7.333 -0.9L7.333 0L7.333 0.9C9.367 0.9 11.015 2.549 11.015 4.583L11.915 4.583ZM7.333 0L7.333 -0.9C4.304 -0.9 1.85 1.555 1.85 4.583L2.75 4.583L3.65 4.583C3.65 2.549 5.299 0.9 7.333 0.9L7.333 0ZM2.75 4.583L1.85 4.583C1.85 7.612 4.304 10.067 7.333 10.067L7.333 9.167L7.333 8.267C5.299 8.267 3.65 6.618 3.65 4.583L2.75 4.583ZM7.333 9.167L7.333 10.067C9.039 10.067 10.675 10.744 11.881 11.951L12.518 11.315L13.154 10.678C11.61 9.134 9.516 8.267 7.333 8.267L7.333 9.167ZM12.518 11.315L11.881 11.951C13.087 13.157 13.765 14.794 13.765 16.5L14.665 16.5L15.565 16.5C15.565 14.316 14.698 12.222 13.154 10.678L12.518 11.315ZM7.333 9.167L7.333 8.267C5.149 8.267 3.055 9.134 1.511 10.678L2.148 11.315L2.784 11.951C3.99 10.744 5.627 10.067 7.333 10.067L7.333 9.167ZM2.148 11.315L1.511 10.678C-0.033 12.222 -0.9 14.316 -0.9 16.5L0 16.5L0.9 16.5C0.9 14.794 1.578 13.157 2.784 11.951L2.148 11.315Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="646:1956" style={rootLayer(402, 831, {
      background: "linear-gradient(#fffcf8, #fffcf8), linear-gradient(#f3ede7, #f3ede7)",
      backgroundColor: "#ffffff",
      boxShadow: "inset 0 0 0 1px #e5e7eb, 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      overflow: "hidden"
    })}>
    <div data-figma-id="646:1957" style={{
        overflow: "hidden",
        display: "flex",
        padding: "12px 20px",
        boxSizing: "border-box",
        flexDirection: "column",
        gap: 24,
        position: "absolute",
        left: 1,
        top: 43.5,
        right: 1,
        bottom: 149
      }}>
      <div data-figma-id="646:1958" style={{
          minWidth: 0,
          position: "relative",
          height: 39,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="646:1959" style={{
            ...font_Manrope,
            ...text2,
            color: "#29241f",
            fontSize: 28,
            lineHeight: "38.248px",
            letterSpacing: "-0.7px",
            ...row1,
            position: "absolute",
            left: "calc(50% + -47px)",
            top: 4
          }}>
          {"Carrito"}
        </span>
      </div>
      <div data-figma-id="646:2091" style={{
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          position: "relative",
          height: 289,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="646:2092" style={{
            ...row1,
            minWidth: 0,
            justifyContent: "space-between",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="646:2093" style={fixedLayer("max-content", 30, col2)}>
            <span data-figma-id="646:2094" style={{
                ...font_Manrope,
                ...text2,
                color: "#29241f",
                fontSize: 20,
                lineHeight: "30px",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Whopper King"}
            </span>
          </div>
          <div data-figma-id="646:2095" style={fixedLayer(74.8, 19.5)}>
            <span data-figma-id="646:2096" style={{
                ...font_Inter,
                color: "#82776e",
                fontSize: 13,
                fontWeight: 500,
                fontVariationSettings: "\"wght\" 500",
                lineHeight: "19.5px",
                ...row1,
                position: "absolute",
                left: 0,
                top: -1
              }}>
              {"2 productos"}
            </span>
          </div>
        </div>
        <div data-figma-id="646:2097" style={{
            ...row2,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="646:2098" style={fixedLayer(213, "max-content", {
              ...row1,
              gap: 12
            })}>
            <div data-figma-id="646:2099" style={fixedLayer(72, 79, col3)}>
              <div data-figma-id="646:2100" style={{
                  background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/628ca1da-7256-4ba6-82a5-d1a0eaf3be12.jpg\")",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 14,
                  minWidth: 0,
                  position: "relative",
                  height: 79,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }} />
            </div>
            <div data-figma-id="646:2101" style={fixedLayer(129, 67.38, col2)}>
              <div data-figma-id="646:2102" style={{
                  ...col4,
                  position: "relative",
                  height: 21.63,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2103" style={{
                    ...font_Manrope,
                    ...text1,
                    color: "#29241f",
                    fontSize: 15,
                    lineHeight: "20.63px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Whopper"}
                </span>
              </div>
              <div data-figma-id="646:2104" style={{
                  ...col5,
                  position: "relative",
                  height: 19.75,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2105" style={{
                    ...font_Inter,
                    ...text3,
                    fontSize: 12.5,
                    lineHeight: "18.75px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Sencilla · $ 10.400 c/u"}
                </span>
              </div>
              <div data-figma-id="646:2106" style={{
                  ...col1,
                  ...layout1,
                  position: "relative",
                  height: 28,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="646:2107" style={{
                    ...col6,
                    position: "relative",
                    height: 24,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="646:2108" style={{
                      ...font_Manrope,
                      ...text2,
                      color: "#29241f",
                      fontSize: 16,
                      lineHeight: "24px",
                      ...row1,
                      minWidth: 0,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"$ 10.400"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="646:2109" style={fixedLayer(122, 42, {
              ...surface1,
              ...row1,
              padding: "1px 5px",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="646:2110" style={fixedLayer(44, 44, {
                ...row1,
                ...layout2
              })}>
              <div data-figma-id="646:2111" style={fixedLayer(16, 16, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientClockIcon size={16} color="#2d8659" />
          </div>
            </div>
            <div data-figma-id="646:2114" style={fixedLayer(24, 22.5)}>
              <span data-figma-id="646:2115" style={{
                  ...font_Manrope_15,
                  ...row3,
                  position: "absolute",
                  left: "calc(50% + -3.3px)",
                  top: -1
                }}>
                {"1"}
              </span>
            </div>
            <div data-figma-id="646:2116" style={fixedLayer(44, 44, row4)}>
              <span data-figma-id="646:2117" style={{
                  ...font_Inter,
                  ...text1,
                  ...text5,
                  fontSize: 18,
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"+"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="646:2118" style={{
            ...row2,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="646:2119" style={fixedLayer(213, "max-content", {
              ...row1,
              gap: 12
            })}>
            <div data-figma-id="646:2120" style={fixedLayer(72, 79, col3)}>
              <div data-figma-id="646:2121" style={{
                  background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/ff881a36-0ea5-4b86-8760-adff295f99b2.jpg\")",
                  backgroundSize: "117.949% 126.027%",
                  backgroundPosition: "48.895% 46.514%",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 14,
                  minWidth: 0,
                  position: "relative",
                  height: 79,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }} />
              <div data-figma-id="646:2122" style={absoluteLayer(121, 5, 34, 34, {
                  background: "#ffffff",
                  boxShadow: "inset 0 0 0 1px #ebe4dc",
                  borderRadius: 11,
                  ...row1,
                  overflow: "hidden",
                  justifyContent: "center"
                })}>
                <div data-figma-id="646:2123" style={fixedLayer(18, 18, {
                    overflow: "hidden"
                  })}>
                  <svg data-figma-id="646:2124" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                    <use href="#figma-vector-401-corners-2-0" fill="transparent" stroke="#ed6047" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
                  </svg>
                </div>
              </div>
            </div>
            <div data-figma-id="646:2125" style={fixedLayer(129, 67.38, col2)}>
              <div data-figma-id="646:2126" style={{
                  ...col4,
                  position: "relative",
                  height: 21.63,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2127" style={{
                    ...font_Manrope,
                    ...text1,
                    color: "#29241f",
                    fontSize: 15,
                    lineHeight: "20.63px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Texana Especial"}
                </span>
              </div>
              <div data-figma-id="646:2128" style={{
                  ...col5,
                  position: "relative",
                  height: 19.75,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2129" style={{
                    ...font_Inter,
                    ...text3,
                    fontSize: 12.5,
                    lineHeight: "18.75px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Sencilla · $ 23.500 c/u"}
                </span>
              </div>
              <div data-figma-id="646:2130" style={{
                  ...col1,
                  ...layout1,
                  position: "relative",
                  height: 28,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="646:2131" style={{
                    ...col6,
                    position: "relative",
                    height: 24,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="646:2132" style={{
                      ...font_Manrope,
                      ...text2,
                      color: "#29241f",
                      fontSize: 16,
                      lineHeight: "24px",
                      ...row1,
                      minWidth: 0,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"$ 47.000"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="646:2133" style={fixedLayer(122, 42, {
              ...surface1,
              ...row1,
              padding: "1px 5px",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="646:2134" style={fixedLayer(44, 44, {
                ...row1,
                ...layout2
              })}>
              <span data-figma-id="646:2135" style={{
                  ...font_Inter,
                  ...text1,
                  ...text5,
                  fontSize: 20,
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"−"}
              </span>
            </div>
            <div data-figma-id="646:2136" style={fixedLayer(24, 22.5)}>
              <span data-figma-id="646:2137" style={{
                  ...font_Manrope_15,
                  ...row3,
                  position: "absolute",
                  left: "calc(50% + -4.47px)",
                  top: -1
                }}>
                {"2"}
              </span>
            </div>
            <div data-figma-id="646:2138" style={fixedLayer(44, 44, row4)}>
              <span data-figma-id="646:2139" style={{
                  ...font_Inter,
                  ...text1,
                  ...text5,
                  fontSize: 18,
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"+"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="646:2140" style={{
            ...row1,
            minWidth: 0,
            padding: "8px 0 0",
            boxSizing: "border-box",
            justifyContent: "space-between",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="646:2141" style={fixedLayer(125, "max-content", {
              ...row1,
              gap: 4
            })}>
            <div data-figma-id="646:2142" style={fixedLayer("max-content", 21, col7)}>
              <span data-figma-id="646:2143" style={{
                  ...font_Inter_14,
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"+"}
              </span>
            </div>
            <span data-figma-id="646:2144" style={{
                ...font_Inter_14,
                ...row3,
                position: "relative",
                flexShrink: 0
              }}>
              {"Añadir algo más"}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="646:2012" style={{
          ...col1,
          minWidth: 0,
          gap: 12,
          position: "relative",
          height: 147,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="646:2013" style={{
            ...col6,
            position: "relative",
            height: 27,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="646:2014" style={{
              ...font_Manrope,
              ...text2,
              color: "#29241f",
              fontSize: 18,
              lineHeight: "27px",
              ...row1,
              minWidth: 0,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            {"¿Dónde quieres tu pedido?"}
          </span>
        </div>
        <div data-figma-id="646:2015" style={{
            minWidth: 0,
            display: "flex",
            justifyContent: "center",
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="646:2016" style={{
              background: "#ffffff",
              boxShadow: "inset 0 0 0 1px #ebe4dc",
              borderRadius: 16,
              ...col8,
              position: "relative",
              height: 104,
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            <div data-figma-id="646:2017" style={{
                minWidth: 0,
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="646:2018" style={fixedLayer(32, 32, {
                  background: "#f5efeb",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="646:2019" style={fixedLayer(16, 16, {
                    overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                  })}>
                  <ClientClockIcon size={16} color="#2d8659" />
          </div>
              </div>
              <div data-figma-id="646:2021" style={fixedLayer(20, 20, {
                  border: "2px solid #ebe4dc",
                  borderRadius: 9999
                })} />
            </div>
            <div data-figma-id="646:2022" style={{
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "relative",
                height: 37,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="646:2023" style={{
                  ...col6,
                  position: "relative",
                  height: 18,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2024" style={{
                    ...font_Inter,
                    ...text4,
                    color: "#29241f",
                    fontSize: 14,
                    lineHeight: "17.5px",
                    ...row1,
                    minWidth: 0,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"En el local"}
                </span>
              </div>
              <div data-figma-id="646:2025" style={{
                  minWidth: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2026" style={{
                    ...font_Inter,
                    ...text3,
                    fontSize: 11,
                    lineHeight: "16.5px",
                    ...row1,
                    minWidth: 0,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Escanea el QR de tu mesa"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="646:2027" style={{
              background: "#fff1eb",
              boxShadow: "inset 0 0 0 1px #ed6047",
              borderRadius: 16,
              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
              ...col8,
              position: "relative",
              height: 104,
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0
            }}>
            <div data-figma-id="646:2028" style={{
                minWidth: 0,
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="646:2029" style={fixedLayer(32, 32, {
                  background: "#ffe5da",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="646:2030" style={fixedLayer(16, 16, {
                    overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                  })}>
                  <ClientClockIcon size={16} color="#2d8659" />
          </div>
              </div>
              <div data-figma-id="646:2034" style={fixedLayer(20, 20, {
                  boxShadow: "inset 0 0 0 2px #ed6047",
                  borderRadius: 9999,
                  ...row1,
                  padding: 2,
                  boxSizing: "border-box",
                  justifyContent: "center"
                })}>
                <div data-figma-id="646:2035" style={fixedLayer(10, 10, {
                    background: "#ed6047",
                    borderRadius: 9999
                  })} />
              </div>
            </div>
            <div data-figma-id="646:2036" style={{
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "relative",
                height: 37,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="646:2037" style={{
                  ...col6,
                  position: "relative",
                  height: 18,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2038" style={{
                    ...font_Inter,
                    ...text4,
                    color: "#29241f",
                    fontSize: 14,
                    lineHeight: "17.5px",
                    ...row1,
                    minWidth: 0,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"A domicilio"}
                </span>
              </div>
              <div data-figma-id="646:2039" style={{
                  ...col6,
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="646:2040" style={{
                    ...font_Inter,
                    color: "#bd412d",
                    fontSize: 11,
                    fontWeight: 500,
                    fontVariationSettings: "\"wght\" 500",
                    lineHeight: "16.5px",
                    ...row1,
                    minWidth: 0,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Pasto · Envío $ 4.000"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="679:1666" style={{
        ...row1,
        overflow: "hidden",
        padding: "0 26px",
        boxSizing: "border-box",
        justifyContent: "space-between",
        position: "absolute",
        left: 0,
        top: 1,
        height: 48,
        right: 0
      }}>
      <span data-figma-id="679:1667" style={{
          ...font_Inter,
          color: "#29241f",
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "17px",
          position: "relative",
          flexShrink: 0
        }}>
        {"9:41"}
      </span>
      <div data-figma-id="679:1668" style={fixedLayer(71, "max-content", {
          ...row1,
          overflow: "hidden",
          gap: 5
        })}>
        <div data-figma-id="679:1669" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="679:1670" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
            <use href="#figma-vector-115-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="679:1671" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="679:1672" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
            <use href="#figma-vector-116-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="679:1673" style={fixedLayer(25, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="679:1674" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
            <use href="#figma-vector-117-corners-3-0" fill="#29241f" />
          </svg>
        </div>
      </div>
    </div>
    <div data-figma-id="823:3832" style={{
        background: "#fffcf8",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        ...row1,
        padding: "13px 0 0",
        boxSizing: "border-box",
        flexDirection: "column",
        position: "absolute",
        left: 1,
        top: 673,
        height: 160,
        right: 1
      }}>
      <div data-figma-id="823:3841" style={fixedLayer(348, 56, {
          background: "#ed6047",
          borderRadius: 16,
          ...row1,
          padding: "0 20px",
          boxSizing: "border-box",
          justifyContent: "space-between"
        })}>
        <div data-figma-id="823:3842" style={{
            background: "rgba(255, 255, 255, 0.002)",
            borderRadius: 16,
            boxShadow: "0px 2px 4px -2px rgba(237, 96, 71, 0.2), 0px 4px 6px -1px rgba(237, 96, 71, 0.2)",
            position: "absolute",
            left: 0,
            top: 0,
            height: 56,
            right: 0
          }} />
        <div data-figma-id="823:3843" style={fixedLayer("max-content", 24, col7)}>
          <span data-figma-id="823:3844" style={{
              ...font_Inter,
              ...text4,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "0.4px",
              textAlign: "center",
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"Comprar"}
          </span>
        </div>
        <div data-figma-id="823:3845" style={fixedLayer("max-content", 27, col7)}>
          <span data-figma-id="823:3846" style={{
              ...font_Manrope,
              ...text2,
              color: "#ffffff",
              fontSize: 18,
              lineHeight: "27px",
              letterSpacing: "-0.45px",
              textAlign: "center",
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"$ 61.400"}
          </span>
        </div>
      </div>
    </div>
  </div>
    <div data-figma-id="822:3630" data-proto-fixed-tabbar="1" style={{
        background: "#ffffff",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        ...col3,
        position: "fixed",
        left: 0,
        right: 0,
        width: "100%",
        maxWidth: 402,
        height: 80,
        bottom: 0,
        zIndex: 60
      }}>
      <div data-figma-id="342:1198" style={{
          ...row1,
          minWidth: 0,
          overflow: "hidden",
          padding: "0 14px",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "relative",
          height: 55,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <Part data-figma-id="342:1199" viewBox="-0.9 -0.9 18.3 19.217" left="calc(12.5% - 0.9px)" top="calc(8.33% - 0.9px)" width="calc(75% + 1.8px)" height="calc(79.169% + 1.8px)" href="#figma-derived-692" text="Inicio" />
        <Part data-figma-id="342:1203" viewBox="-0.9 -0.9 18.388 18.388" left="calc(12.5% - 0.9px)" top="calc(12.5% - 0.9px)" width="calc(75.001% + 1.888px)" height="calc(75.001% + 1.888px)" href="#figma-derived-694" text="Buscar" />
        <div data-figma-id="818:3495" style={fixedLayer(78, 39, col7)}>
          <div data-figma-id="818:3496" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="818:3497" viewBox="-0.75 -0.75 3.167 3.167" preserveAspectRatio="none" style={absoluteLayer("calc(33.333% - 0.75px)", "calc(83.333% - 0.75px)", "calc(8.333% + 1.5px)", "calc(8.333% + 1.5px)")}>
              <use href="#figma-derived-698" fill="#ed6047" />
            </svg>
            <svg data-figma-id="818:3498" viewBox="-0.75 -0.75 3.167 3.167" preserveAspectRatio="none" style={absoluteLayer("calc(79.167% - 0.75px)", "calc(83.333% - 0.75px)", "calc(8.333% + 1.5px)", "calc(8.333% + 1.5px)")}>
              <use href="#figma-derived-699" fill="#ed6047" />
            </svg>
            <svg data-figma-id="818:3499" viewBox="-0.75 -0.75 19.862 14.022" preserveAspectRatio="none" style={absoluteLayer("calc(4.167% - 0.75px)", "calc(4.167% - 0.75px)", "calc(91.667% + 1.529px)", "calc(62.502% + 1.522px)")}>
              <use href="#figma-derived-700" fill="#ed6047" />
            </svg>
          </div>
          <div data-figma-id="818:3500" style={fixedLayer("max-content", 19, col1)}>
            <span data-figma-id="818:3501" style={{
                ...font_Inter,
                color: "#ed6047",
                fontSize: 10,
                fontWeight: 700,
                lineHeight: "15px",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Carrito"}
            </span>
          </div>
        </div>
        <Part data-figma-id="342:1211" viewBox="-0.9 -0.9 16.465 18.3" left="calc(16.67% - 0.9px)" top="calc(12.5% - 0.9px)" width="calc(66.66% + 1.8px)" height="calc(75% + 1.8px)" href="#figma-derived-695" text="Mi cuenta" />
      </div>
      <div data-figma-id="342:1215" style={{
          ...row1,
          minWidth: 0,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          height: 24,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1216" style={fixedLayer(126, 4, {
            background: "#29241f",
            borderRadius: 4
          })} />
      </div>
    </div>
  </>;
}
export default CarritoDomicilio;