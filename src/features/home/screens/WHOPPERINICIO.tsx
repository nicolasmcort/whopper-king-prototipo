import React from 'react';
import { ClientCartIcon, ClientCartIconOutline } from '@/shared/components/ui/ClientCartIcon';
import { ClientWhatsAppIcon, ClientInstagramIcon } from '@/shared/components/ui/ClientUiIcons';
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
const text1: React.CSSProperties = {
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const font_Manrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif",
  fontWeight: 800
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const surface1: React.CSSProperties = {
  background: "#f5efe7",
  borderRadius: 18
};
const text2: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 12,
  lineHeight: "18px"
};
const text4: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 10,
  lineHeight: "12.102px"
};
const layout1: React.CSSProperties = {
  overflow: "hidden",
  flexDirection: "column",
  gap: 7
};
const row3: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const text3: React.CSSProperties = {
  color: "#29241f",
  fontSize: 11,
  fontWeight: 500,
  lineHeight: "13.313px"
};
const row4: React.CSSProperties = {
  ...row3,
  overflow: "hidden"
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  overflow: "hidden",
  justifyContent: "space-between"
};
const col2: React.CSSProperties = {
  ...row1,
  overflow: "hidden",
  flexDirection: "column",
  gap: 5
};
const font_Inter_12: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  ...text2,
  color: "rgba(0, 0, 0, 0.65)",
  textAlign: "center"
};
function Link(p: {
  "data-figma-id": string;
  color: string;
  text: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer("max-content", 18, col1)}>
      <span data-figma-id="595:2695" style={{
      ...font_Inter,
      ...text1,
      ...text2,
      color: p.color,
      ...row1,
      position: "relative",
      flexShrink: 0
    }}>
        {p.text}
      </span>
    </div>;
}
function Destino(p: {
  "data-figma-id": string;
  viewBox: string;
  left: string;
  top: string;
  width: string;
  height: string;
  d: string;
  stroke: string;
  color: string;
  fontWeight: number;
  text: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer(78, 39, col2)}>
      <div data-figma-id="342:1200" style={fixedLayer(22, 22, {
      overflow: "hidden"
    })}>
        <svg data-figma-id="342:1201" viewBox={p.viewBox} preserveAspectRatio="none" style={absoluteLayer(p.left, p.top, p.width, p.height)}>
          <path d={p.d} fill="transparent" fillRule="nonzero" stroke={p.stroke} strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
        </svg>
      </div>
      <span data-figma-id="342:1202" style={{
      ...font_Inter,
      ...text4,
      color: p.color,
      fontWeight: p.fontWeight,
      position: "relative",
      flexShrink: 0
    }}>
        {p.text}
      </span>
    </div>;
}
export function WHOPPERINICIO() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-4-corners-3-0" d="M19.2 1.146C19.2 0.513 18.722 0 18.133 0L17.067 0C16.478 0 16 0.513 16 1.146L16 11.08C16 11.713 16.478 12.226 17.067 12.226L18.133 12.226C18.722 12.226 19.2 11.713 19.2 11.08L19.2 1.146ZM11.766 2.445L12.833 2.445C13.422 2.445 13.899 2.971 13.899 3.619L13.899 11.053C13.899 11.701 13.422 12.226 12.833 12.226L11.766 12.226C11.177 12.226 10.699 11.701 10.699 11.053L10.699 3.619C10.699 2.971 11.177 2.445 11.766 2.445ZM7.434 5.094L6.367 5.094C5.778 5.094 5.301 5.626 5.301 6.283L5.301 11.038C5.301 11.694 5.778 12.226 6.367 12.226L7.434 12.226C8.023 12.226 8.501 11.694 8.501 11.038L8.501 6.283C8.501 5.626 8.023 5.094 7.434 5.094ZM2.133 7.54L1.067 7.54C0.478 7.54 0 8.064 0 8.711L0 11.055C0 11.702 0.478 12.226 1.067 12.226L2.133 12.226C2.722 12.226 3.2 11.702 3.2 11.055L3.2 8.711C3.2 8.064 2.722 7.54 2.133 7.54Z" fillRule="evenodd" />
        <path id="figma-vector-5-corners-3-0" d="M8.571 2.466C11.058 2.466 13.45 3.388 15.253 5.042C15.389 5.17 15.606 5.168 15.739 5.038L17.037 3.775C17.104 3.709 17.142 3.62 17.142 3.527C17.141 3.435 17.102 3.346 17.034 3.281C12.303 -1.094 4.839 -1.094 0.108 3.281C0.04 3.346 0.001 3.435 0 3.527C-0.001 3.62 0.037 3.709 0.105 3.775L1.403 5.038C1.536 5.168 1.753 5.17 1.889 5.042C3.692 3.388 6.084 2.466 8.571 2.466ZM8.568 6.687C9.925 6.686 11.234 7.198 12.24 8.122C12.376 8.253 12.591 8.251 12.723 8.116L14.011 6.797C14.078 6.727 14.116 6.634 14.115 6.536C14.114 6.438 14.075 6.345 14.005 6.278C10.942 3.387 6.197 3.387 3.133 6.278C3.064 6.345 3.024 6.438 3.023 6.536C3.023 6.634 3.06 6.728 3.128 6.797L4.415 8.116C4.548 8.251 4.762 8.253 4.898 8.122C5.904 7.199 7.212 6.687 8.568 6.687ZM11.092 9.48C11.094 9.585 11.057 9.687 10.99 9.761L8.813 12.216C8.749 12.288 8.662 12.328 8.572 12.328C8.481 12.328 8.394 12.288 8.33 12.216L6.153 9.761C6.086 9.687 6.049 9.585 6.051 9.48C6.053 9.375 6.094 9.275 6.164 9.204C7.554 7.89 9.59 7.89 10.98 9.204C11.05 9.275 11.09 9.375 11.092 9.48Z" fillRule="evenodd" />
        <path id="figma-vector-6-corners-3-0" d="M18.5 0C20.55 0 21.576 0 22.382 0.343C23.406 0.778 24.222 1.594 24.657 2.618C25 3.424 25 4.45 25 6.5C25 8.55 25 9.576 24.657 10.382L24.571 10.571C24.119 11.507 23.342 12.249 22.382 12.657L22.228 12.718C21.443 13 20.422 13 18.5 13L6.5 13L5.142 12.995C3.951 12.979 3.223 12.914 2.618 12.657C1.658 12.249 0.881 11.507 0.429 10.571L0.343 10.382C0 9.576 0 8.55 0 6.5C0 4.578 0 3.557 0.282 2.772L0.343 2.618C0.751 1.658 1.493 0.881 2.429 0.429L2.618 0.343C3.223 0.086 3.951 0.021 5.142 0.005L6.5 0L18.5 0ZM6.5 1C5.461 1 4.733 1 4.162 1.04C3.601 1.079 3.268 1.153 3.01 1.263C2.223 1.597 1.597 2.223 1.263 3.01C1.153 3.268 1.079 3.601 1.04 4.162C1 4.733 1 5.461 1 6.5C1 7.539 1 8.267 1.04 8.838C1.079 9.399 1.153 9.732 1.263 9.99C1.597 10.777 2.223 11.403 3.01 11.737C3.268 11.847 3.601 11.921 4.162 11.96C4.733 12 5.461 12 6.5 12L18.5 12C19.539 12 20.267 12 20.838 11.96C21.399 11.921 21.732 11.847 21.99 11.737C22.777 11.403 23.403 10.777 23.737 9.99C23.847 9.732 23.921 9.399 23.96 8.838C24 8.267 24 7.539 24 6.5C24 5.461 24 4.733 23.96 4.162C23.921 3.601 23.847 3.268 23.737 3.01C23.403 2.223 22.777 1.597 21.99 1.263C21.732 1.153 21.399 1.079 20.838 1.04C20.267 1 19.539 1 18.5 1L6.5 1ZM19 2C20.4 2 21.1 2 21.635 2.272C22.105 2.512 22.488 2.895 22.728 3.365C23 3.9 23 4.6 23 6L23 7C23 8.4 23 9.1 22.728 9.635C22.488 10.105 22.105 10.488 21.635 10.727C21.1 11 20.4 11 19 11L6 11C4.6 11 3.9 11 3.365 10.727C2.895 10.488 2.512 10.105 2.272 9.635C2 9.1 2 8.4 2 7L2 6C2 4.6 2 3.9 2.272 3.365C2.512 2.895 2.895 2.512 3.365 2.272C3.9 2 4.6 2 6 2L19 2ZM26 4.5C26.805 4.845 27.328 5.648 27.328 6.538C27.328 7.428 26.805 8.23 26 8.575L26 4.5Z" fillRule="nonzero" />
        <path id="figma-vector-18-corners-2-0" d="M7.267 19C7.442 19.304 7.695 19.556 7.999 19.732C8.303 19.908 8.648 20 8.999 20C9.35 20 9.695 19.908 9.999 19.732C10.303 19.556 10.555 19.304 10.731 19M0.261 13.326C0.131 13.469 0.044 13.647 0.013 13.839C-0.018 14.03 0.007 14.226 0.085 14.403C0.163 14.581 0.291 14.732 0.454 14.837C0.616 14.943 0.805 15 0.999 15L16.999 15C17.193 15 17.383 14.944 17.545 14.838C17.708 14.732 17.836 14.582 17.914 14.405C17.993 14.227 18.018 14.031 17.987 13.84C17.956 13.648 17.87 13.47 17.739 13.327C16.409 11.956 14.999 10.499 14.999 6C14.999 4.409 14.367 2.883 13.242 1.757C12.117 0.632 10.591 0 8.999 0C7.408 0 5.882 0.632 4.757 1.757C3.631 2.883 2.999 4.409 2.999 6C2.999 10.499 1.588 11.956 0.261 13.326Z" fillRule="nonzero" />
        <path id="figma-vector-526-corners-2-0" d="M18 18L13.66 13.66M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z" fillRule="nonzero" />
        <path id="figma-vector-40-corners-1-0" d="M10 13L2 13C1.47 13 0.961 12.789 0.586 12.414C0.211 12.039 0 11.53 0 11C0 10.47 0.211 9.961 0.586 9.586C0.961 9.211 1.47 9 2 9L18 9C18.53 9 19.039 9.211 19.414 9.586C19.789 9.961 20 10.47 20 11C20 11.53 19.789 12.039 19.414 12.414C19.039 12.789 18.53 13 18 13L13.75 13M3 9C2.47 9 1.961 8.789 1.586 8.414C1.211 8.039 1 7.53 1 7C1 5.143 1.948 3.363 3.636 2.05C5.324 0.737 7.613 0 10 0C12.387 0 14.676 0.737 16.364 2.05C18.052 3.363 19 5.143 19 7C19 7.53 18.789 8.039 18.414 8.414C18.039 8.789 17.53 9 17 9M3 13C2.47 13 1.961 13.211 1.586 13.586C1.211 13.961 1 14.47 1 15C1 15.796 1.316 16.559 1.879 17.121C2.441 17.684 3.204 18 4 18L16 18C16.796 18 17.559 17.684 18.121 17.121C18.684 16.559 19 15.796 19 15C19 14.47 18.789 13.961 18.414 13.586C18.039 13.211 17.53 13 17 13M4.67 9L10.8 13.6C11.224 13.918 11.758 14.055 12.283 13.98C12.543 13.943 12.793 13.855 13.019 13.721C13.245 13.587 13.442 13.41 13.6 13.2L16.75 9" fillRule="nonzero" />
        <path id="figma-vector-48" d="M1.67 0C1.046 0 0.495 0.438 0.38 1.068C0.232 1.886 0 3.342 0 4.5C0 5.731 0.636 6.813 1.595 7.436C1.866 7.613 2 7.841 2 8.036L2 8.446C2 8.464 1.999 8.482 1.997 8.5C1.97 8.76 1.846 9.929 1.729 11.131C1.614 12.316 1.5 13.581 1.5 14C1.5 14.53 1.711 15.039 2.086 15.414C2.461 15.789 2.97 16 3.5 16C4.03 16 4.539 15.789 4.914 15.414C5.289 15.039 5.5 14.53 5.5 14C5.5 13.58 5.386 12.316 5.271 11.131C5.186 10.254 5.096 9.377 5.003 8.501L5 8.446L5 8.036C5 7.84 5.134 7.612 5.405 7.436C5.895 7.118 6.297 6.683 6.575 6.171C6.854 5.658 7 5.084 7 4.5C7 3.342 6.768 1.886 6.62 1.068C6.564 0.767 6.405 0.495 6.169 0.3C5.933 0.105 5.636 -0.002 5.33 0C4.99 0 4.68 0.127 4.446 0.336C4.179 0.119 3.845 0 3.5 0C3.141 0 2.812 0.126 2.554 0.336C2.311 0.119 1.996 -0.001 1.67 0ZM3 1.5C3 1.367 3.053 1.24 3.146 1.146C3.24 1.053 3.367 1 3.5 1C3.633 1 3.76 1.053 3.854 1.146C3.947 1.24 4 1.367 4 1.5L4 4.5C4 4.633 4.053 4.76 4.146 4.854C4.24 4.947 4.367 5 4.5 5C4.633 5 4.76 4.947 4.854 4.854C4.947 4.76 5 4.633 5 4.5L5 1.33C5 1.287 5.009 1.244 5.025 1.204C5.042 1.164 5.066 1.127 5.097 1.097C5.127 1.066 5.164 1.042 5.204 1.025C5.244 1.009 5.287 1 5.33 1C5.487 1 5.61 1.108 5.636 1.247C5.783 2.06 6 3.439 6 4.5C6 4.917 5.896 5.327 5.697 5.694C5.498 6.06 5.21 6.371 4.86 6.598C4.421 6.883 4 7.384 4 8.036L4 8.446C4 8.499 4.003 8.553 4.008 8.606C4.036 8.864 4.159 10.03 4.276 11.228C4.394 12.443 4.5 13.643 4.5 14C4.5 14.265 4.395 14.52 4.207 14.707C4.02 14.895 3.765 15 3.5 15C3.235 15 2.98 14.895 2.793 14.707C2.605 14.52 2.5 14.265 2.5 14C2.5 13.643 2.606 12.443 2.724 11.228C2.841 10.03 2.964 8.864 2.992 8.606C2.997 8.553 3 8.499 3 8.446L3 8.036C3 7.384 2.579 6.883 2.14 6.598C1.79 6.371 1.502 6.06 1.303 5.694C1.104 5.327 1 4.917 1 4.5C1 3.44 1.217 2.06 1.364 1.247C1.378 1.176 1.416 1.113 1.472 1.067C1.528 1.022 1.599 0.998 1.671 1C1.758 1 1.842 1.035 1.904 1.097C1.965 1.159 2 1.243 2 1.33L2 4.5C2 4.633 2.053 4.76 2.146 4.854C2.24 4.947 2.367 5 2.5 5C2.633 5 2.76 4.947 2.854 4.854C2.947 4.76 3 4.633 3 4.5L3 1.5ZM8 4.5C8 3.307 8.474 2.162 9.318 1.318C10.162 0.474 11.307 0 12.5 0C12.633 0 12.76 0.053 12.854 0.146C12.947 0.24 13 0.367 13 0.5L13 7.478L13.02 7.702C13.098 8.601 13.174 9.499 13.248 10.398C13.372 11.905 13.5 13.559 13.5 14C13.5 14.53 13.289 15.039 12.914 15.414C12.539 15.789 12.03 16 11.5 16C10.97 16 10.461 15.789 10.086 15.414C9.711 15.039 9.5 14.53 9.5 14C9.5 13.56 9.628 11.905 9.752 10.398C9.814 9.637 9.877 8.901 9.924 8.356L9.954 8L9.5 8C9.102 8 8.721 7.842 8.439 7.561C8.158 7.279 8 6.898 8 6.5L8 4.5ZM10.998 7.544L10.977 7.789L10.92 8.442C10.873 8.986 10.81 9.72 10.748 10.48C10.622 12.017 10.5 13.612 10.5 14C10.5 14.265 10.605 14.52 10.793 14.707C10.98 14.895 11.235 15 11.5 15C11.765 15 12.02 14.895 12.207 14.707C12.395 14.52 12.5 14.265 12.5 14C12.5 13.612 12.378 12.017 12.252 10.48C12.178 9.583 12.101 8.686 12.023 7.789L12.002 7.545L12.002 7.544L12 7.5L12 1.035C11.167 1.155 10.405 1.572 9.854 2.208C9.303 2.845 9 3.658 9 4.5L9 6.5C9 6.633 9.053 6.76 9.146 6.854C9.24 6.947 9.367 7 9.5 7L10.5 7C10.569 7 10.638 7.014 10.701 7.042C10.765 7.07 10.822 7.111 10.869 7.162C10.916 7.214 10.951 7.274 10.974 7.34C10.996 7.405 11.004 7.475 10.998 7.544Z" fillRule="nonzero" />
        <path id="figma-vector-57" d="M14 4.001C14 2.999 13.624 2.034 12.947 1.295C12.269 0.557 11.339 0.1 10.341 0.015C9.342 -0.071 8.348 0.221 7.555 0.834C6.762 1.446 6.228 2.334 6.058 3.321C5.905 3.815 5.726 4.3 5.521 4.773L3.146 7.148C3.076 7.218 3.028 7.307 3.009 7.404C2.99 7.501 3 7.602 3.038 7.693C3.076 7.784 3.14 7.862 3.222 7.917C3.304 7.972 3.401 8.001 3.5 8.001L3.576 8.001L2.093 9.484L2.079 9.49C2.053 9.497 2.026 9.501 2 9.501C1.582 9.501 1.175 9.632 0.835 9.876C0.495 10.119 0.241 10.463 0.106 10.858C-0.028 11.254 -0.035 11.681 0.086 12.081C0.207 12.481 0.45 12.833 0.782 13.087C0.832 13.126 0.876 13.17 0.914 13.22C1.168 13.552 1.52 13.795 1.92 13.916C2.32 14.037 2.748 14.03 3.143 13.895C3.539 13.761 3.882 13.506 4.126 13.166C4.369 12.827 4.5 12.419 4.5 12.001C4.5 11.965 4.504 11.938 4.51 11.922L4.517 11.909L6 10.427L6 10.501C5.999 10.6 6.029 10.697 6.084 10.78C6.138 10.862 6.217 10.926 6.308 10.964C6.4 11.002 6.5 11.012 6.597 10.993C6.694 10.973 6.784 10.925 6.854 10.855L9.21 8.498C9.583 8.332 10.09 8.135 10.766 7.928C11.676 7.751 12.497 7.262 13.087 6.545C13.677 5.829 14 4.929 14 4.001ZM6 9.013L3.808 11.204C3.604 11.419 3.493 11.705 3.5 12.001C3.5 12.21 3.434 12.414 3.312 12.584C3.191 12.753 3.019 12.881 2.821 12.948C2.623 13.015 2.41 13.019 2.21 12.958C2.01 12.898 1.834 12.776 1.707 12.61C1.616 12.492 1.509 12.386 1.391 12.295C1.225 12.168 1.102 11.992 1.042 11.792C0.981 11.592 0.984 11.378 1.052 11.18C1.119 10.982 1.246 10.81 1.416 10.688C1.586 10.566 1.79 10.501 2 10.501C2.248 10.501 2.56 10.431 2.8 10.191L4.99 8.001L6 8.001L6 9.013ZM10 1.001C10.748 1.001 11.469 1.279 12.022 1.783C12.575 2.286 12.92 2.978 12.99 3.723C13.059 4.468 12.848 5.212 12.397 5.809C11.946 6.406 11.289 6.813 10.554 6.95L10.5 6.963C9.723 7.2 9.141 7.429 8.712 7.626C8.658 7.651 8.609 7.685 8.567 7.726L7 9.295L7 7.501C7 7.369 6.947 7.242 6.853 7.148C6.759 7.054 6.632 7.001 6.5 7.001L4.707 7.001L6.293 5.415C6.335 5.373 6.369 5.324 6.394 5.269C6.582 4.858 6.799 4.308 7.023 3.585L7.039 3.517C7.153 2.815 7.514 2.176 8.057 1.715C8.599 1.254 9.288 1.001 10 1.001Z" fillRule="nonzero" />
        <path id="figma-vector-924-corners-1-0" d="M1 6L2.75 18.28C2.818 18.761 3.058 19.2 3.426 19.516C3.794 19.833 4.265 20.005 4.75 20L9.29 20C9.775 20.005 10.246 19.833 10.614 19.516C10.982 19.2 11.222 18.761 11.29 18.28L13 6M0 6L14 6M2 13C2.792 12.668 3.642 12.497 4.5 12.497C5.358 12.497 6.208 12.668 7 13C7.792 13.332 8.642 13.503 9.5 13.503C10.358 13.503 11.208 13.332 12 13M7 6L8 0L10 0" fillRule="nonzero" />
        <path id="figma-vector-81-corners-2-0" d="M7 0C7.667 2.667 9 4.833 11 6.5C13 8.167 14 10 14 12C14 13.857 13.263 15.637 11.95 16.95C10.637 18.263 8.857 19 7 19C5.143 19 3.363 18.263 2.05 16.95C0.737 15.637 0 13.857 0 12C0 10.918 0.351 9.865 1 9C1 9.663 1.263 10.299 1.732 10.768C2.201 11.237 2.837 11.5 3.5 11.5C4.163 11.5 4.799 11.237 5.268 10.768C5.737 10.299 6 9.663 6 9C6 7 4.5 6 4.5 4C4.5 2.667 5.333 1.333 7 0Z" fillRule="nonzero" />
        <path id="figma-vector-623" d="M0.577 0.414C0.877 0.114 1.077 -0.173 1.377 0.127L2.377 1.127C2.677 1.427 2.677 1.827 2.377 2.127C2.077 2.427 2.177 2.727 2.377 3.127C3.877 4.627 3.877 4.627 3.877 4.627C4.277 4.827 4.577 4.927 4.877 4.627C5.177 4.327 5.577 4.327 5.877 4.627L6.877 5.627C7.177 5.927 7.177 6.327 6.877 6.627C6.377 7.127 5.677 7.327 5.077 7.127C2.877 6.427 0.777 4.327 0.077 2.127C-0.123 1.527 0.077 0.827 0.577 0.327L0.877 0.127" fillRule="nonzero" />
        <path id="figma-vector-467" d="M15.538 16.5C13.628 16.5 11.741 16.084 9.877 15.251C8.013 14.418 6.317 13.238 4.79 11.71C3.262 10.183 2.082 8.487 1.249 6.623C0.416 4.759 0 2.872 0 0.962C0 0.687 0.092 0.458 0.275 0.275C0.458 0.092 0.687 0 0.962 0L4.675 0C4.889 0 5.08 0.073 5.248 0.218C5.416 0.363 5.515 0.535 5.546 0.733L6.142 3.942C6.172 4.186 6.165 4.392 6.119 4.56C6.073 4.728 5.989 4.874 5.867 4.996L3.644 7.242C3.949 7.807 4.312 8.353 4.732 8.88C5.152 9.407 5.615 9.915 6.119 10.404C6.592 10.878 7.089 11.317 7.608 11.722C8.128 12.127 8.678 12.497 9.258 12.833L11.413 10.679C11.55 10.542 11.73 10.439 11.951 10.37C12.173 10.301 12.39 10.282 12.604 10.313L15.767 10.954C15.981 11.015 16.156 11.126 16.294 11.286C16.431 11.447 16.5 11.626 16.5 11.825L16.5 15.538C16.5 15.813 16.408 16.042 16.225 16.225C16.042 16.408 15.813 16.5 15.538 16.5L15.538 16.5M2.773 5.5L4.285 3.987L4.285 3.987L4.285 3.987L3.896 1.833L3.896 1.833L3.896 1.833L1.856 1.833L1.856 1.833L1.856 1.833C1.933 2.46 2.04 3.078 2.177 3.69C2.315 4.301 2.513 4.904 2.773 5.5L2.773 5.5M10.977 13.704C11.573 13.964 12.18 14.17 12.799 14.323C13.418 14.476 14.04 14.575 14.667 14.621L14.667 14.621L14.667 14.621L14.667 12.604L14.667 12.604L14.667 12.604L12.512 12.169L12.512 12.169L12.512 12.169L10.977 13.704L10.977 13.704M2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5L2.773 5.5M10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704L10.977 13.704" fillRule="nonzero" />
        <path id="figma-vector-613" d="M7 14.475C8.65 13.142 9.896 11.858 10.738 10.625C11.579 9.392 12 8.233 12 7.15C12 5.65 11.533 4.417 10.6 3.45C9.667 2.483 8.467 2 7 2C5.533 2 4.333 2.483 3.4 3.45C2.467 4.417 2 5.65 2 7.15C2 8.233 2.421 9.392 3.263 10.625C4.104 11.858 5.35 13.142 7 14.475L7 14.475M7 17C4.65 15.267 2.896 13.583 1.737 11.95C0.579 10.317 0 8.717 0 7.15C0 5.067 0.65 3.354 1.95 2.013C3.25 0.671 4.933 0 7 0C9.067 0 10.75 0.671 12.05 2.013C13.35 3.354 14 5.067 14 7.15C14 8.717 13.421 10.317 12.262 11.95C11.104 13.583 9.35 15.267 7 17L7 17M7 9C7.55 9 8.021 8.804 8.413 8.413C8.804 8.021 9 7.55 9 7C9 6.45 8.804 5.979 8.413 5.588C8.021 5.196 7.55 5 7 5C6.45 5 5.979 5.196 5.588 5.588C5.196 5.979 5 6.45 5 7C5 7.55 5.196 8.021 5.588 8.413C5.979 8.804 6.45 9 7 9L7 9M0 20L0 18L14 18L14 20L0 20L0 20M7 7L7 7L7 7L7 7L7 7L7 7L7 7L7 7L7 7L7 7" fillRule="nonzero" />
        <path id="figma-vector-105-corners-2-0" d="M12 19L12 11C12 10.735 11.895 10.48 11.707 10.293C11.52 10.105 11.265 10 11 10L7 10C6.735 10 6.48 10.105 6.293 10.293C6.105 10.48 6 10.735 6 11L6 19M0 8C0 7.71 0.063 7.422 0.186 7.158C0.308 6.894 0.487 6.66 0.709 6.472L7.709 0.472C8.07 0.167 8.527 0 9 0C9.473 0 9.93 0.167 10.291 0.472L17.291 6.472C17.513 6.66 17.692 6.894 17.814 7.158C17.937 7.422 18 7.71 18 8L18 17C18 17.531 17.789 18.04 17.414 18.415C17.039 18.79 16.53 19 16 19L2 19C1.47 19 0.961 18.79 0.586 18.415C0.211 18.04 0 17.531 0 17L0 8Z" fillRule="nonzero" />
        <path id="figma-vector-109-corners-2-0" d="M18 18L13.66 13.66M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z" fillRule="nonzero" />
        <path id="figma-vector-110-corners-2-0" d="M8 10C10.761 10 13 7.761 13 5C13 2.239 10.761 0 8 0C5.239 0 3 2.239 3 5C3 7.761 5.239 10 8 10C10.122 10 12.157 10.843 13.657 12.343C15.157 13.843 16 15.878 16 18M8 10C5.878 10 3.843 10.843 2.343 12.343C0.843 13.843 0 15.878 0 18" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="342:1114" style={rootLayer(402, "auto", {
      background: "#fffcf8",
      minWidth: 0,
      minHeight: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    })}>
    <div data-figma-id="342:1115" style={{
        ...row1,
        minWidth: 402,
        overflow: "hidden",
        padding: "0 26px",
        boxSizing: "border-box",
        justifyContent: "space-between",
        position: "relative",
        height: 48,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <span data-figma-id="342:1116" style={{
          ...font_Inter,
          color: "#29241f",
          whiteSpace: "pre",
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "17px",
          position: "relative",
          flexShrink: 0
        }}>
        {"9:41"}
      </span>
      <div data-figma-id="342:1117" style={fixedLayer(71, "max-content", {
          ...row1,
          overflow: "hidden",
          gap: 5
        })}>
        <div data-figma-id="342:1118" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="342:1119" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
            <use href="#figma-vector-4-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="342:1120" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="342:1121" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
            <use href="#figma-vector-5-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="342:1122" style={fixedLayer(25, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="342:1123" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
            <use href="#figma-vector-6-corners-3-0" fill="#29241f" />
          </svg>
        </div>
      </div>
    </div>
    <div data-figma-id="342:1125" style={fixedLayer(402, "auto", {
        minWidth: 0,
        minHeight: 0,
        overflow: "hidden",
        display: "flex",
        padding: "8px 20px 12px",
        boxSizing: "border-box",
        flexDirection: "column",
        gap: 18
      })}>
      <div data-figma-id="342:1126" style={{
          ...row2,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="342:1127" style={{
            ...font_Inter,
            color: "#e32929",
            whiteSpace: "pre",
            fontSize: 31,
            fontWeight: 400,
            lineHeight: "38px",
            letterSpacing: "-1.8px",
            position: "relative",
            width: 191,
            flexShrink: 0
          }}>
          {"Whopper King"}
        </span>
        <div data-figma-id="752:1749" style={fixedLayer(126, 56, {
            ...row1,
            justifyContent: "space-between"
          })}>
          <div data-figma-id="679:1635" style={fixedLayer(56, 56, {
              ...row1,
              flexDirection: "column",
              justifyContent: "center"
            })}>
            <div data-figma-id="679:1636" style={fixedLayer("max-content", 44, col1)}>
              <div data-figma-id="679:1637" style={fixedLayer(44, 44, {
                  background: "#ffffff",
                  boxShadow: "inset 0 0 0 1px #ebe5de",
                  borderRadius: 9999,
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
                  ...row1,
                  padding: 1,
                  boxSizing: "border-box",
                  justifyContent: "center"
                })}>
                <div data-figma-id="679:1638" style={fixedLayer(21, 21, {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            })}>
            <ClientCartIcon size={21} color="#29241f" />
          </div>
              </div>
              <div data-figma-id="679:1642" style={{
                  background: "#ed6047",
                  boxShadow: "inset 0 0 0 2px #fffcf8",
                  borderRadius: 9999,
                  ...row1,
                  padding: "3px 2px 4px",
                  boxSizing: "border-box",
                  justifyContent: "center",
                  position: "absolute",
                  top: -4,
                  width: 18,
                  height: 18,
                  right: -4
                }}>
                <span data-figma-id="679:1643" style={{
                    ...font_Inter,
                    color: "#ffffff",
                    whiteSpace: "pre",
                    fontSize: 11,
                    fontWeight: 700,
                    fontVariationSettings: "\"wght\" 700",
                    lineHeight: "11px",
                    textAlign: "center",
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"3"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="342:1130" style={fixedLayer(44, 44, {
              background: "#ffffff",
              boxShadow: "inset 0 0 0 1px #ebe4dc",
              borderRadius: 100,
              ...row4
            })}>
            <div data-figma-id="342:1131" style={fixedLayer(20, 20, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="342:1132" viewBox="-1.08 -1.08 20.16 22.16" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(8.33% - 0.9px)", "calc(75% + 1.8px)", "calc(83.34% + 1.8px)")}>
                <path d="M7.267 19C7.442 19.304 7.695 19.556 7.999 19.732C8.303 19.908 8.648 20 8.999 20C9.35 20 9.695 19.908 9.999 19.732C10.303 19.556 10.555 19.304 10.731 19M0.261 13.326C0.131 13.469 0.044 13.647 0.013 13.839C-0.018 14.03 0.007 14.226 0.085 14.403C0.163 14.581 0.291 14.732 0.454 14.837C0.616 14.943 0.805 15 0.999 15L16.999 15C17.193 15 17.383 14.944 17.545 14.838C17.708 14.732 17.836 14.582 17.914 14.405C17.993 14.227 18.018 14.031 17.987 13.84C17.956 13.648 17.87 13.47 17.739 13.327C16.409 11.956 14.999 10.499 14.999 6C14.999 4.409 14.367 2.883 13.242 1.757C12.117 0.632 10.591 0 8.999 0C7.408 0 5.882 0.632 4.757 1.757C3.631 2.883 2.999 4.409 2.999 6C2.999 10.499 1.588 11.956 0.261 13.326Z" fill="transparent" fillRule="nonzero" stroke="#29241f" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <span data-figma-id="342:1133" style={{
          ...font_Manrope,
          color: "#29241f",
          whiteSpace: "pre",
          fontSize: 29,
          lineHeight: "40px",
          letterSpacing: "-1.1px",
          minWidth: 0,
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        {"Quítate las ganas..."}
      </span>
      <div data-figma-id="342:1134" style={{
          background: "#f94144",
          boxShadow: "inset 0 0 0 1px #ebe4dc",
          borderRadius: 14,
          ...row1,
          minWidth: 0,
          overflow: "hidden",
          padding: "0 15px",
          boxSizing: "border-box",
          gap: 10,
          position: "relative",
          height: 50,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <svg data-figma-id="375:435" viewBox="-0.9 -0.9 19.8 19.8" preserveAspectRatio="xMidYMid meet" style={{ width: 18, height: 18, flexShrink: 0, display: 'block' }}>
          <use href="#figma-vector-526-corners-2-0" fill="transparent" stroke="#ffffff" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span data-figma-id="342:1136" style={{
            ...font_Inter,
            color: "#ffffff",
            whiteSpace: "pre",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "19.364px",
            minWidth: 0,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0
          }}>
          {"¿Qué se te antoja hoy?"}
        </span>
      </div>
      <div data-figma-id="342:1137" style={{
          minWidth: 0,
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1138" style={fixedLayer(65, 87, {
            ...row1,
            ...layout1
          })}>
          <div data-figma-id="342:1139" style={fixedLayer(54, 54, {
              ...surface1,
              ...row4
            })}>
            <div data-figma-id="342:1140" style={fixedLayer(24, 24, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="342:1141" viewBox="-1 -1 22 20" preserveAspectRatio="none" style={absoluteLayer("calc(8.333% - 1px)", "calc(12.5% - 1px)", "calc(83.333% + 2px)", "calc(75% + 2px)")}>
                <use href="#figma-vector-40-corners-1-0" fill="transparent" stroke="#000000" strokeWidth={2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <span data-figma-id="342:1142" style={{
              ...font_Inter,
              ...text3,
              whiteSpace: "pre",
              position: "relative",
              flexShrink: 0
            }}>
            {"Whoppers"}
          </span>
        </div>
        <div data-figma-id="342:1143" style={fixedLayer(65, 87, {
            ...row1,
            ...layout1
          })}>
          <div data-figma-id="342:1144" style={fixedLayer(54, 54, {
              ...surface1,
              ...row4
            })}>
            <div data-figma-id="342:1145" style={fixedLayer(30, 30, {
                overflow: "hidden",
                aspectRatio: "20 / 20"
              })}>
              <svg data-figma-id="342:1146" viewBox="0 0 13.5 16" preserveAspectRatio="none" style={absoluteLayer("15%", "10%", "67.5%", "80%")}>
                <use href="#figma-vector-48" fill="#000000" />
              </svg>
            </div>
          </div>
          <span data-figma-id="342:1147" style={fixedLayer(56, 26, {
              ...font_Inter,
              ...text3,
              whiteSpace: "normal",
              textAlign: "center"
            })}>
            <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "13px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 56,
                textAlign: "center"
              }}>{"Almuerzos\ny menús"}</span>
          </span>
        </div>
        <div data-figma-id="342:1148" style={fixedLayer(65, 87, {
            ...row1,
            ...layout1
          })}>
          <div data-figma-id="342:1149" style={fixedLayer(54, 54, {
              ...surface1,
              ...row4
            })}>
            <div data-figma-id="342:1150" style={fixedLayer(30, 30, {
                overflow: "hidden",
                aspectRatio: "16 / 16"
              })}>
              <svg data-figma-id="342:1151" viewBox="0 0 14 14.002" preserveAspectRatio="none" style={absoluteLayer("6.253%", "6.242%", "87.497%", "87.512%")}>
                <use href="#figma-vector-57" fill="#000000" />
              </svg>
            </div>
          </div>
          <span data-figma-id="342:1152" style={{
              ...font_Inter,
              ...text3,
              whiteSpace: "normal",
              textAlign: "center",
              minWidth: 0,
              position: "relative",
              height: 26,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-text-line="0" style={{
                position: "absolute",
                left: "calc(50% + 1.456px)",
                transform: "translateX(-50%)",
                top: 0,
                width: 66.161,
                height: 13,
                display: "block",
                whiteSpace: "pre",
                lineHeight: "13px",
                textAlign: "left"
              }}>{"Pollo, Carne "}</span>
            <span data-figma-text-line="1" style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: 13,
                width: 54.474,
                height: 13,
                display: "block",
                whiteSpace: "pre",
                lineHeight: "13px",
                textAlign: "left"
              }}>{"y Pescado"}</span>
          </span>
        </div>
        <div data-figma-id="342:1153" style={fixedLayer(65, 74, {
            ...row1,
            ...layout1
          })}>
          <div data-figma-id="342:1154" style={fixedLayer(54, 54, {
              ...surface1,
              ...row4
            })}>
            <div data-figma-id="748:3165" style={fixedLayer(30, 30, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="748:3171" viewBox="-0.8 -0.8 15.6 21.6" preserveAspectRatio="none" style={absoluteLayer("calc(20.833% - 1px)", "calc(8.333% - 1px)", "calc(58.333% + 2px)", "calc(83.334% + 2px)")}>
                <path d="M1 6L2.75 18.28C2.818 18.761 3.058 19.2 3.426 19.516C3.794 19.833 4.265 20.005 4.75 20L9.29 20C9.775 20.005 10.246 19.833 10.614 19.516C10.982 19.2 11.222 18.761 11.29 18.28L13 6M0 6L14 6M2 13C2.792 12.668 3.642 12.497 4.5 12.497C5.358 12.497 6.208 12.668 7 13C7.792 13.332 8.642 13.503 9.5 13.503C10.358 13.503 11.208 13.332 12 13M7 6L8 0L10 0" fill="transparent" fillRule="nonzero" stroke="#000000" strokeWidth={2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <span data-figma-id="342:1158" style={{
              ...font_Inter,
              ...text3,
              whiteSpace: "pre",
              position: "relative",
              flexShrink: 0
            }}>
            {"Bebidas"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:1169" style={{
          ...row1,
          minWidth: 0,
          overflow: "hidden",
          padding: "20px 0 0",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="342:1170" style={{
            ...font_Manrope,
            color: "#29241f",
            whiteSpace: "pre",
            fontSize: 20,
            lineHeight: "27.32px",
            letterSpacing: "-0.6px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Enamorate de nuestra #1"}
        </span>
        <span data-figma-id="342:1171" style={{
            ...font_Inter,
            color: "#bd412d",
            whiteSpace: "pre",
            fontSize: 12,
            fontWeight: 700,
            lineHeight: "15px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Ver todos"}
        </span>
      </div>
      <div data-figma-id="342:1172" style={{
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #ebe4dc",
          borderRadius: 20,
          minWidth: 0,
          overflow: "hidden",
          display: "flex",
          padding: "0 0 20px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 280,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1173" style={{
            minWidth: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: 157,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1174" style={{
              minWidth: 0,
              overflow: "hidden",
              position: "relative",
              height: 169,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1175" style={absoluteLayer(-24, -28, 386, 197, {
                background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/a86a1986-9af3-483e-8ba2-ce441b5ed50f.png\")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                aspectRatio: "371 / 189"
              })} />
            <div data-figma-id="342:1176" style={absoluteLayer(12, 12, 74, "max-content", {
                background: "#ffffff",
                borderRadius: 8,
                ...row1,
                overflow: "hidden",
                padding: "6px 9px",
                boxSizing: "border-box",
                gap: 4
              })}>
              <div data-figma-id="342:1177" style={fixedLayer(12, 12, {
                  overflow: "hidden"
                })}>
                <svg data-figma-id="342:1178" viewBox="-1.8 -1.8 17.6 22.6" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(12.5% - 0.9px)", "calc(58.34% + 1.8px)", "calc(79.17% + 1.8px)")}>
                  <path d="M7 0C7.667 2.667 9 4.833 11 6.5C13 8.167 14 10 14 12C14 13.857 13.263 15.637 11.95 16.95C10.637 18.263 8.857 19 7 19C5.143 19 3.363 18.263 2.05 16.95C0.737 15.637 0 13.857 0 12C0 10.918 0.351 9.865 1 9C1 9.663 1.263 10.299 1.732 10.768C2.201 11.237 2.837 11.5 3.5 11.5C4.163 11.5 4.799 11.237 5.268 10.768C5.737 10.299 6 9.663 6 9C6 7 4.5 6 4.5 4C4.5 2.667 5.333 1.333 7 0Z" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
                </svg>
              </div>
              <span data-figma-id="342:1179" style={{
                  ...font_Inter,
                  ...text4,
                  color: "#29241f",
                  fontWeight: 700,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Favorito "}
              </span>
            </div>
          </div>
          <div data-figma-id="342:1183" style={{
              minWidth: 0,
              position: "relative",
              height: 147,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
        </div>
        <div data-figma-id="342:1184" style={{
            ...layout1,
            minWidth: 0,
            display: "flex",
            padding: 13,
            boxSizing: "border-box",
            position: "relative",
            height: 103,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1185" style={{
              ...row2,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="342:1186" style={{
                ...font_Manrope,
                color: "#29241f",
                whiteSpace: "pre",
                fontSize: 18,
                lineHeight: "25px",
                position: "relative",
                flexShrink: 0
              }}>
              {"Whopper King"}
            </span>
          </div>
          <span data-figma-id="342:1192" style={fixedLayer(344, 45, {
              ...font_Inter,
              color: "#82776e",
              whiteSpace: "normal",
              fontSize: 12,
              fontWeight: 400,
              lineHeight: "15px",
              letterSpacing: "0.03em"
            })}>
            <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "15px",
                left: 0,
                textAlign: "left"
              }}>{"Hamburguesa gigante · Ensalada de huevo · Papas a la \nfrancesa · Anillos cebolla · Carne de res · Ensalada · \nSalsas tradicionales"}</span>
          </span>
        </div>
      </div>
      <span data-figma-id="748:3306" style={{
          ...font_Inter_12,
          ...row3,
          position: "relative",
          width: 358,
          flexShrink: 0,
          paddingTop: 4,
          paddingBottom: 8
        }}>
        {"Ingredientes Artesanales "}
      </span>
    </div>
    <div data-figma-id="597:2842" style={{
        background: "#ffffff",
        ...row1,
        padding: "20px 20px 24px",
        boxSizing: "border-box",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 10,
        position: "relative",
        left: 0,
        width: 402,
        height: "auto",
        minHeight: 0,
        flexShrink: 0
      }}>
      <div data-figma-id="595:2632" style={{
          ...row1,
          minWidth: 0,
          gap: 16,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="595:2635" style={fixedLayer(248, 60, {
            display: "flex",
            flexDirection: "column",
            gap: 4
          })}>
          <div data-figma-id="595:2638" style={{
              minWidth: 0,
              display: "flex",
              padding: "0 80.37px 0 0",
              boxSizing: "border-box",
              flexDirection: "column",
              position: "relative",
              height: 60,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="595:2639" style={fixedLayer(248, 60, {
                ...font_Manrope,
                color: "#000000",
                whiteSpace: "normal",
                fontSize: 26,
                fontVariationSettings: "\"wght\" 800",
                lineHeight: "35.516px",
                letterSpacing: "-0.65px"
              })}>
              <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "30px",
                  left: 0,
                  textAlign: "left"
                }}>{"Sabor a la parrilla,\ndesde Pasto"}</span>
            </span>
          </div>
        </div>
        <div data-figma-id="595:2634" style={fixedLayer(90, 90, {
            background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/2cdb9c09-53d1-4add-b286-f23aace567d4.png\")",
            backgroundSize: "100% 86.752%",
            backgroundPosition: "0% 50%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden"
          })} />
      </div>
      <div data-figma-id="595:2640" style={{
          minWidth: 0,
          display: "flex",
          padding: "4px 0 8px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 52,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <span data-figma-id="595:2641" style={{
            ...font_Inter,
            ...text1,
            color: "rgba(0, 0, 0, 0.65)",
            whiteSpace: "normal",
            fontSize: 14,
            lineHeight: "20px",
            minWidth: 0,
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span style={{
              position: "absolute",
              top: 0,
              whiteSpace: "pre",
              lineHeight: "20px",
              left: 0,
              textAlign: "left"
            }}>{"Hamburguesas artesanales a la parrilla en el barrio Las \nCuadras."}</span>
        </span>
      </div>
      <div data-figma-id="595:2642" style={{
          background: "#ed6047",
          borderRadius: 12,
          ...row1,
          minWidth: 0,
          padding: "0 20px",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "relative",
          height: 56,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="595:2644" style={absoluteLayer("calc(50% + -118px)", "calc(50% + -12px)", "max-content", 24, {
            ...row1,
            flexDirection: "column",
            justifyContent: "center"
          })}>
          <span data-figma-id="595:2645" style={{
              ...font_Inter,
              color: "#ffffff",
              whiteSpace: "pre",
              fontSize: 16,
              fontWeight: 700,
              fontVariationSettings: "\"wght\" 700",
              lineHeight: "24px",
              textAlign: "center",
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"¡Da clic aquí para conocernos!"}
          </span>
        </div>
      </div>
      <div data-figma-id="595:2648" style={{
          minWidth: 0,
          display: "flex",
          padding: "15px 0 8px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 4,
          position: "relative",
          height: 135,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="595:2720" style={{
            ...row2,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="595:2721" style={{
              ...font_Manrope,
              color: "#000000",
              whiteSpace: "pre",
              fontSize: 22,
              lineHeight: "30.052px",
              letterSpacing: "0.03em",
              position: "relative",
              flexShrink: 0
            }}>
            {"Contáctanos por acá"}
          </span>
        </div>
        <div data-figma-id="596:2758" style={fixedLayer(350, 86, col1)}>
          <div data-figma-id="596:2759" style={{
              ...row1,
              minWidth: 0,
              minHeight: 56,
              padding: "12px 0",
              boxSizing: "border-box",
              justifyContent: "space-between",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="596:2760" style={fixedLayer(350, "max-content", {
                ...row1,
                padding: "10px 20px",
                boxSizing: "border-box",
                justifyContent: "space-between"
              })}>
              <div data-figma-id="596:2761" style={fixedLayer(40, 40, {
                  background: "#ebf7ee",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="596:2762" style={fixedLayer(40, 40, {
                    overflow: "visible",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  })}>
                  <ClientWhatsAppIcon size={40} color="#16a34a" />
                </div>
              </div>
              <div data-figma-id="720:2626" style={fixedLayer(40, 40, {
                  background: "rgba(26, 80, 243, 0.14)",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="720:2627" style={fixedLayer("max-content", 16.5, col1)}>
                  <svg data-figma-id="720:2628" viewBox="0 0 16.5 16.5" preserveAspectRatio="none" style={fixedLayer(16.5, 16.5)}>
                    <use href="#figma-vector-467" fill="#1a50f3" />
                  </svg>
                </div>
              </div>
              <div data-figma-id="720:2630" style={fixedLayer(40, 40, {
                  background: "#fff0ed",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="720:2631" style={fixedLayer("max-content", 20, col1)}>
                  <div data-figma-id="802:4020" style={fixedLayer(24, 24, {
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    })}>
                    <ClientInstagramIcon size={20} color="#ed6047" />
                  </div>
                </div>
              </div>
              <div data-figma-id="720:2634" style={fixedLayer(40, 40, {
                  background: "#f5efe7",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="720:2635" style={fixedLayer("max-content", 20, col1)}>
                  <svg data-figma-id="720:2636" viewBox="0 0 14 20" preserveAspectRatio="none" style={fixedLayer(14, 20)}>
                    <use href="#figma-vector-613" fill="#ed6047" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="596:2774" style={{
              background: "#ebe4dc",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="597:2840" style={{
              background: "#ebe4dc",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
        </div>
      </div>
      <div data-figma-id="595:2693" style={{
          ...row1,
          minWidth: 0,
          padding: "8px 0",
          boxSizing: "border-box",
          justifyContent: "center",
          gap: 6,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <Link data-figma-id="595:2694" color="rgba(0, 0, 0, 0.65)" text="Política de tratamiento de datos" />
        <Link data-figma-id="595:2696" color="rgba(0, 0, 0, 0.65)" text="·" />
        <Link data-figma-id="595:2698" color="#bd412d" text="Términos y condiciones" />
      </div>
      <div data-figma-id="595:2700" style={{
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          position: "relative",
          height: 40,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="595:2701" style={{
            ...row1,
            minWidth: 0,
            justifyContent: "center",
            gap: 4,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="595:2702" style={{
              ...font_Inter_12,
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"Comida 100% hecha con amor"}
          </span>
          <div data-figma-id="595:2703" style={fixedLayer("max-content", 18, {
              ...row1,
              flexDirection: "column"
            })}>
            <span data-figma-id="595:2704" style={{
                ...text2,
                color: "#ed6047",
                fontFamily: "'Liberation Sans', system-ui, sans-serif",
                fontWeight: 400,
                textAlign: "center",
                ...row3,
                position: "relative",
                flexShrink: 0
              }}>
              {"♥"}
            </span>
          </div>
        </div>
        <div data-figma-id="595:2705" style={{
            ...row1,
            minWidth: 0,
            flexDirection: "column",
            position: "relative",
            height: 18,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="595:2706" style={{
              ...font_Inter_12,
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"© 2026 Whopper King · Pasto, Nariño"}
          </span>
        </div>
      </div>
      <div data-figma-id="595:2757" style={absoluteLayer("calc(50% + -201px)", 0, 402.061, 0, {
          borderTop: "1px solid #ebe4dc"
        })} />
    </div>
  </div>
    {/* Tab bar fuera del root overflow: fija al phone-frame en todo el scroll */}
    <div data-figma-id="505:1853" data-proto-fixed-tabbar="1" style={{
        background: "#ffffff",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        left: 0,
        right: 0,
        width: "100%",
        maxWidth: 402,
        height: 79,
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
        <Destino data-figma-id="342:1199" viewBox="-0.982 -0.982 19.964 20.964" left="calc(12.5% - 0.9px)" top="calc(8.33% - 0.9px)" width="calc(75% + 1.8px)" height="calc(79.169% + 1.8px)" d="M12 19L12 11C12 10.735 11.895 10.48 11.707 10.293C11.52 10.105 11.265 10 11 10L7 10C6.735 10 6.48 10.105 6.293 10.293C6.105 10.48 6 10.735 6 11L6 19M0 8C0 7.71 0.063 7.422 0.186 7.158C0.308 6.894 0.487 6.66 0.709 6.472L7.709 0.472C8.07 0.167 8.527 0 9 0C9.473 0 9.93 0.167 10.291 0.472L17.291 6.472C17.513 6.66 17.692 6.894 17.814 7.158C17.937 7.422 18 7.71 18 8L18 17C18 17.531 17.789 18.04 17.414 18.415C17.039 18.79 16.53 19 16 19L2 19C1.47 19 0.961 18.79 0.586 18.415C0.211 18.04 0 17.531 0 17L0 8Z" stroke="#ed6047" color="#ed6047" fontWeight={700} text="Inicio" />
        <Destino data-figma-id="342:1203" viewBox="-0.982 -0.982 19.964 19.964" left="calc(12.5% - 0.9px)" top="calc(12.5% - 0.9px)" width="calc(75.001% + 1.8px)" height="calc(75.001% + 1.8px)" d="M18 18L13.66 13.66M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z" stroke="#82776e" color="#82776e" fontWeight={500} text="Buscar" />
        <div data-figma-id="818:3495" style={fixedLayer(78, 39, {
            ...row1,
            flexDirection: "column"
          })}>
          <div data-figma-id="818:3496" style={fixedLayer(20, 20, {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            })}>
            <ClientCartIconOutline size={20} color="#82776e" />
          </div>
          <div data-figma-id="818:3500" style={fixedLayer("max-content", 19, {
              display: "flex",
              padding: "4px 0 0",
              boxSizing: "border-box",
              flexDirection: "column"
            })}>
            <span data-figma-id="818:3501" style={{
                ...font_Inter,
                color: "#82776e",
                whiteSpace: "pre",
                fontSize: 10,
                fontWeight: 500,
                lineHeight: "15px",
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Carrito"}
            </span>
          </div>
        </div>
        <Destino data-figma-id="342:1211" viewBox="-0.982 -0.982 17.964 19.964" left="calc(16.67% - 0.9px)" top="calc(12.5% - 0.9px)" width="calc(66.66% + 1.8px)" height="calc(75% + 1.8px)" d="M8 10C10.761 10 13 7.761 13 5C13 2.239 10.761 0 8 0C5.239 0 3 2.239 3 5C3 7.761 5.239 10 8 10C10.122 10 12.157 10.843 13.657 12.343C15.157 13.843 16 15.878 16 18M8 10C5.878 10 3.843 10.843 2.343 12.343C0.843 13.843 0 15.878 0 18" stroke="#82776e" color="#82776e" fontWeight={500} text="Mi cuenta" />
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
export default WHOPPERINICIO;