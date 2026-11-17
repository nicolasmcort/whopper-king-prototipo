import React from 'react';
import {
  ClientBackIcon,
  ClientGoogleIcon,
  ClientEyeIcon,
} from '@/shared/components/ui/ClientUiIcons';

const LOGIN_BURGER_IMG = `${import.meta.env.BASE_URL}login-burger.png`;
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
const text1: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const text2: React.CSSProperties = {
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
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
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #e0bfb9",
  borderRadius: 12
};
export function IniciarSesionNueva() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-172" d="M0 8L2 8L2 6L0 6L0 8ZM4 8L6 8L6 4L4 4L4 8ZM8 8L10 8L10 2L8 2L8 8ZM12 8L14 8L14 0L12 0L12 8Z" fillRule="nonzero" />
        <path id="figma-vector-441" d="M1.667 13.333C1.208 13.333 0.816 13.17 0.49 12.844C0.163 12.517 0 12.125 0 11.667L0 1.667C0 1.208 0.163 0.816 0.49 0.49C0.816 0.163 1.208 0 1.667 0L15 0C15.458 0 15.851 0.163 16.177 0.49C16.503 0.816 16.667 1.208 16.667 1.667L16.667 11.667C16.667 12.125 16.503 12.517 16.177 12.844C15.851 13.17 15.458 13.333 15 13.333L1.667 13.333L1.667 13.333M8.333 7.5L1.667 3.333L1.667 11.667L1.667 11.667L1.667 11.667L15 11.667L15 11.667L15 11.667L15 3.333L8.333 7.5L8.333 7.5M8.333 5.833L15 1.667L1.667 1.667L8.333 5.833L8.333 5.833M1.667 3.333L1.667 1.667L1.667 1.667L1.667 3.333L1.667 11.667L1.667 11.667L1.667 11.667L1.667 11.667L1.667 11.667L1.667 11.667L1.667 3.333L1.667 3.333" fillRule="nonzero" />
        <path id="figma-derived-849" d="M3.3 14.444L2.2 14.444C1.617 14.444 1.057 14.21 0.644 13.794C0.232 13.377 0 12.812 0 12.222C0 11.633 0.232 11.068 0.644 10.651C1.057 10.234 1.617 10 2.2 10L3.3 10C2.717 10 2.157 9.766 1.744 9.349C1.332 8.932 1.1 8.367 1.1 7.778C1.1 5.715 2.143 3.737 4 2.278C5.856 0.819 8.374 0 11 0C13.626 0 16.144 0.819 18 2.278C19.857 3.737 20.9 5.715 20.9 7.778C20.9 8.367 20.668 8.932 20.256 9.349C19.843 9.766 19.283 10 18.7 10L19.8 10C20.383 10 20.943 10.234 21.356 10.651C21.768 11.068 22 11.633 22 12.222C22 12.812 21.768 13.377 21.356 13.794C20.943 14.21 20.383 14.444 19.8 14.444L18.7 14.444C19.283 14.444 19.843 14.679 20.256 15.095C20.668 15.512 20.9 16.077 20.9 16.667C20.9 17.551 20.552 18.399 19.933 19.024C19.315 19.649 18.475 20 17.6 20L4.4 20C3.525 20 2.685 19.649 2.067 19.024C1.448 18.399 1.1 17.551 1.1 16.667C1.1 16.077 1.332 15.512 1.744 15.095C2.157 14.679 2.717 14.444 3.3 14.444Z" fillRule="nonzero" />
        <path id="figma-derived-stroke-850" d="M15.125 14.444L14.402 13.908L14.402 13.908L15.125 14.444ZM11.88 15.111L11.336 15.828L11.337 15.828L11.88 15.111ZM13.511 15.533L13.383 14.642L13.383 14.642L13.511 15.533ZM14.96 14.667L15.683 15.203L15.683 15.203L14.96 14.667ZM11 14.444L11 13.544L3.3 13.544L3.3 14.444L3.3 15.344L11 15.344L11 14.444ZM3.3 10L3.3 10.9L5.137 10.9L5.137 10L5.137 9.1L3.3 9.1L3.3 10ZM5.137 10L5.137 10.9L18.425 10.9L18.425 10L18.425 9.1L5.137 9.1L5.137 10ZM18.425 10L18.425 10.9L18.7 10.9L18.7 10L18.7 9.1L18.425 9.1L18.425 10ZM18.7 14.444L18.7 13.544L15.125 13.544L15.125 14.444L15.125 15.344L18.7 15.344L18.7 14.444ZM5.137 10L4.593 10.717L11.336 15.828L11.88 15.111L12.424 14.394L5.681 9.283L5.137 10ZM11.88 15.111L11.337 15.828C11.994 16.327 12.823 16.542 13.64 16.424L13.511 15.533L13.383 14.642C13.044 14.691 12.699 14.603 12.423 14.394L11.88 15.111ZM13.511 15.533L13.64 16.424C14.044 16.366 14.432 16.228 14.783 16.018L14.321 15.245L13.859 14.473C13.712 14.561 13.55 14.618 13.383 14.642L13.511 15.533ZM14.321 15.245L14.783 16.018C15.133 15.808 15.439 15.531 15.683 15.203L14.96 14.667L14.237 14.13C14.134 14.269 14.006 14.385 13.859 14.473L14.321 15.245ZM14.96 14.667L15.683 15.203L15.848 14.981L15.125 14.444L14.402 13.908L14.237 14.13L14.96 14.667ZM15.125 14.444L15.848 14.981L19.148 10.537L18.425 10L17.702 9.463L14.402 13.908L15.125 14.444ZM3.3 16.244C4.294 16.244 5.1 15.439 5.1 14.444C5.1 13.45 4.294 12.644 3.3 12.644L3.3 14.444L3.3 16.244ZM0.644 13.794L1.924 12.527L1.924 12.527L0.644 13.794ZM0.644 10.651L1.924 11.917L1.924 11.917L0.644 10.651ZM3.3 11.8C4.294 11.8 5.1 10.994 5.1 10C5.1 9.006 4.294 8.2 3.3 8.2L3.3 10L3.3 11.8ZM18.7 8.2C17.706 8.2 16.9 9.006 16.9 10C16.9 10.994 17.706 11.8 18.7 11.8L18.7 10L18.7 8.2ZM21.356 10.651L20.076 11.917L20.076 11.917L21.356 10.651ZM21.356 13.794L20.076 12.527L20.076 12.527L21.356 13.794ZM18.7 12.644C17.706 12.644 16.9 13.45 16.9 14.444C16.9 15.439 17.706 16.244 18.7 16.244L18.7 14.444L18.7 12.644ZM4 2.278L5.112 3.693L5.112 3.693L4 2.278ZM18 2.278L16.888 3.693L16.888 3.693L18 2.278ZM20.256 9.349L18.976 8.083L18.976 8.083L20.256 9.349ZM1.744 15.095L3.024 16.362L3.024 16.362L1.744 15.095ZM2.067 19.024L0.787 20.29L0.787 20.29L2.067 19.024ZM19.933 19.024L21.213 20.29L21.213 20.29L19.933 19.024ZM20.256 15.095L18.976 16.362L18.976 16.362L20.256 15.095ZM3.3 14.444L3.3 12.644L2.2 12.644L2.2 14.444L2.2 16.244L3.3 16.244L3.3 14.444ZM2.2 14.444L2.2 12.644C2.1 12.644 2 12.604 1.924 12.527L0.644 13.794L-0.635 15.06C0.114 15.816 1.133 16.244 2.2 16.244L2.2 14.444ZM0.644 13.794L1.924 12.527C1.846 12.449 1.8 12.34 1.8 12.222L0 12.222L-1.8 12.222C-1.8 13.283 -1.383 14.304 -0.635 15.06L0.644 13.794ZM0 12.222L1.8 12.222C1.8 12.104 1.846 11.995 1.924 11.917L0.644 10.651L-0.635 9.384C-1.383 10.14 -1.8 11.161 -1.8 12.222L0 12.222ZM0.644 10.651L1.924 11.917C2 11.84 2.1 11.8 2.2 11.8L2.2 10L2.2 8.2C1.133 8.2 0.114 8.628 -0.635 9.384L0.644 10.651ZM2.2 10L2.2 11.8L3.3 11.8L3.3 10L3.3 8.2L2.2 8.2L2.2 10ZM18.7 10L18.7 11.8L19.8 11.8L19.8 10L19.8 8.2L18.7 8.2L18.7 10ZM19.8 10L19.8 11.8C19.9 11.8 20 11.84 20.076 11.917L21.356 10.651L22.635 9.384C21.886 8.628 20.867 8.2 19.8 8.2L19.8 10ZM21.356 10.651L20.076 11.917C20.154 11.995 20.2 12.104 20.2 12.222L22 12.222L23.8 12.222C23.8 11.161 23.383 10.14 22.635 9.384L21.356 10.651ZM22 12.222L20.2 12.222C20.2 12.34 20.154 12.449 20.076 12.527L21.356 13.794L22.635 15.06C23.383 14.304 23.8 13.283 23.8 12.222L22 12.222ZM21.356 13.794L20.076 12.527C20 12.604 19.9 12.644 19.8 12.644L19.8 14.444L19.8 16.244C20.867 16.244 21.886 15.816 22.635 15.06L21.356 13.794ZM19.8 14.444L19.8 12.644L18.7 12.644L18.7 14.444L18.7 16.244L19.8 16.244L19.8 14.444ZM3.3 10L3.3 8.2C3.2 8.2 3.1 8.16 3.024 8.083L1.744 9.349L0.465 10.616C1.214 11.372 2.233 11.8 3.3 11.8L3.3 10ZM1.744 9.349L3.024 8.083C2.946 8.005 2.9 7.896 2.9 7.778L1.1 7.778L-0.7 7.778C-0.7 8.839 -0.283 9.86 0.465 10.616L1.744 9.349ZM1.1 7.778L2.9 7.778C2.9 6.352 3.618 4.867 5.112 3.693L4 2.278L2.888 0.863C0.668 2.607 -0.7 5.078 -0.7 7.778L1.1 7.778ZM4 2.278L5.112 3.693C6.615 2.512 8.73 1.8 11 1.8L11 0L11 -1.8C8.019 -1.8 5.097 -0.873 2.888 0.863L4 2.278ZM11 0L11 1.8C13.27 1.8 15.385 2.512 16.888 3.693L18 2.278L19.112 0.863C16.903 -0.873 13.981 -1.8 11 -1.8L11 0ZM18 2.278L16.888 3.693C18.382 4.867 19.1 6.352 19.1 7.778L20.9 7.778L22.7 7.778C22.7 5.078 21.332 2.607 19.112 0.863L18 2.278ZM20.9 7.778L19.1 7.778C19.1 7.896 19.054 8.005 18.976 8.083L20.256 9.349L21.535 10.616C22.283 9.86 22.7 8.839 22.7 7.778L20.9 7.778ZM20.256 9.349L18.976 8.083C18.9 8.16 18.8 8.2 18.7 8.2L18.7 10L18.7 11.8C19.767 11.8 20.786 11.372 21.535 10.616L20.256 9.349ZM3.3 14.444L3.3 12.644C2.233 12.644 1.214 13.073 0.465 13.829L1.744 15.095L3.024 16.362C3.1 16.284 3.2 16.244 3.3 16.244L3.3 14.444ZM1.744 15.095L0.465 13.829C-0.283 14.585 -0.7 15.606 -0.7 16.667L1.1 16.667L2.9 16.667C2.9 16.549 2.946 16.44 3.024 16.362L1.744 15.095ZM1.1 16.667L-0.7 16.667C-0.7 18.022 -0.167 19.326 0.787 20.29L2.067 19.024L3.346 17.757C3.062 17.471 2.9 17.079 2.9 16.667L1.1 16.667ZM2.067 19.024L0.787 20.29C1.742 21.255 3.042 21.8 4.4 21.8L4.4 20L4.4 18.2C4.008 18.2 3.628 18.043 3.346 17.757L2.067 19.024ZM4.4 20L4.4 21.8L17.6 21.8L17.6 20L17.6 18.2L4.4 18.2L4.4 20ZM17.6 20L17.6 21.8C18.958 21.8 20.258 21.255 21.213 20.29L19.933 19.024L18.654 17.757C18.372 18.043 17.992 18.2 17.6 18.2L17.6 20ZM19.933 19.024L21.213 20.29C22.167 19.326 22.7 18.022 22.7 16.667L20.9 16.667L19.1 16.667C19.1 17.079 18.938 17.471 18.654 17.757L19.933 19.024ZM20.9 16.667L22.7 16.667C22.7 15.606 22.283 14.585 21.535 13.829L20.256 15.095L18.976 16.362C19.054 16.44 19.1 16.549 19.1 16.667L20.9 16.667ZM20.256 15.095L21.535 13.829C20.786 13.073 19.767 12.644 18.7 12.644L18.7 14.444L18.7 16.244C18.8 16.244 18.9 16.284 18.976 16.362L20.256 15.095Z" fillRule="nonzero" />
        <path id="figma-vector-453" d="M1.333 12.083L9.333 12.083C10.069 12.083 10.667 11.486 10.667 10.75L10.667 6.75C10.667 6.014 10.069 5.417 9.333 5.417L1.333 5.417C0.597 5.417 0 6.014 0 6.75L0 10.75C0 11.486 0.597 12.083 1.333 12.083ZM5.167 0C3.695 0 2.5 1.195 2.5 2.667C2.5 3.708 2.5 4.292 2.5 5.333M5.167 0C6.983 0 8.109 1.195 8.109 2.667L8.109 5.333" fillRule="nonzero" />
        <path id="figma-vector-452" d="M0 4.667C0.849 1.962 3.377 0 6.361 0C9.347 0 11.873 1.962 12.723 4.667C11.873 7.371 9.347 9.333 6.361 9.333C3.377 9.333 0.849 7.371 0 4.667Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="585:2318" style={rootLayer(402, 862, {
      background: "linear-gradient(#e5e7eb, #e5e7eb)",
      backgroundColor: "#ffffff"
    })}>
    <div data-figma-id="585:2319" style={absoluteLayer("calc(50% + -201px)", "calc(50% + -431px)", 402, 862, {
        background: "#fffcf8",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        ...row1,
        overflow: "hidden",
        flexDirection: "column"
      })}>
      <div data-figma-id="585:2320" style={{
          ...row1,
          minWidth: 0,
          padding: "12px 24px 0",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="585:2321" style={fixedLayer("max-content", 17, col1)}>
          <span data-figma-id="585:2322" style={{
              color: "#29241f",
              whiteSpace: "pre",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              fontVariationSettings: "\"wght\" 600",
              lineHeight: "17px",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
            {"9:41"}
          </span>
        </div>
        <div data-figma-id="585:2323" style={fixedLayer(68, "max-content", {
            ...row1,
            gap: 6
          })}>
          <div data-figma-id="585:2324" style={fixedLayer(17, 11, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="585:2325" viewBox="0 0 14 8" preserveAspectRatio="none" style={absoluteLayer("5.882%", "13.636%", "82.353%", "72.727%")}>
              <use href="#figma-vector-172" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="585:2326" style={fixedLayer(15, 11, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <svg viewBox="0 0 19 12" width="100%" height="100%" fill="none" aria-hidden><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#29241f"/><rect x="5" y="5.5" width="3" height="6.5" rx="0.5" fill="#29241f"/><rect x="10" y="3" width="3" height="9" rx="0.5" fill="#29241f"/><rect x="15" y="0.5" width="3" height="11.5" rx="0.5" fill="#29241f"/></svg>
          </div>
          <div data-figma-id="585:2328" style={fixedLayer(24, 11, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <svg viewBox="0 0 27 13" width="100%" height="100%" fill="none" aria-hidden><rect x="0.7" y="1.2" width="22.5" height="10.6" rx="2.2" stroke="#29241f" strokeWidth="1.3"/><rect x="2.4" y="2.9" width="17" height="7.2" rx="1.2" fill="#29241f"/><path d="M24.2 4.2h1.6a1.2 1.2 0 0 1 1.2 1.2v2.2a1.2 1.2 0 0 1-1.2 1.2h-1.6" stroke="#29241f" strokeWidth="1.3" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>
      <div data-figma-id="585:2332" style={fixedLayer(402, 52, {
          ...row1,
          minWidth: 0,
          minHeight: 52,
          padding: "12px 20px 4px",
          boxSizing: "border-box",
          gap: 12
        })}>
        <div data-figma-id="585:2333" style={fixedLayer(44, 40)}>
          <div data-figma-id="585:2334" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}>
            <ClientBackIcon size={20} color="#29241f" />
          </div>
        </div>
        <div data-figma-id="585:2335" style={fixedLayer("max-content", 30, col1)}>
          <span data-figma-id="585:2336" style={{
              ...font_Manrope,
              color: "#29241f",
              fontSize: 22,
              fontWeight: 800,
              fontVariationSettings: "\"wght\" 800",
              lineHeight: "30.052px",
              letterSpacing: "-0.2px",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
            {"Inicio de sesión"}
          </span>
        </div>
      </div>
      <div data-figma-id="585:2337" style={{
          minWidth: 0,
          position: "relative",
          height: 223,
          flexShrink: 0,
          alignSelf: "stretch",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 8,
          boxSizing: "border-box"
        }}>
        <div data-figma-id="585:2338" style={fixedLayer(234, 203)}>
          <div data-figma-id="585:2339" style={{
              width: 234,
              height: 203,
              background: `url("${LOGIN_BURGER_IMG}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }} />
        </div>
      </div>
      <div data-figma-id="585:2340" style={fixedLayer(342, 44, {
          background: "#ffffff",
          boxShadow: "inset 0 0 0 1px #2e72fa",
          borderRadius: 12,
          filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.06))",
          ...row1,
          padding: "1px 17px",
          boxSizing: "border-box",
          justifyContent: "center",
          gap: 12
        })}>
        <div data-figma-id="585:2341" style={fixedLayer(16, 16, {
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
          })}>
          <ClientGoogleIcon size={16} />
          </div>
        <div data-figma-id="585:2346" style={fixedLayer(135.42, 19.5)}>
          <span data-figma-id="585:2347" style={{
              ...font_Manrope,
              color: "#222222",
              fontSize: 13,
              fontWeight: 600,
              fontVariationSettings: "\"wght\" 600",
              lineHeight: "19.5px",
              textAlign: "center",
              ...row1,
              justifyContent: "center",
              position: "absolute",
              left: "calc(50% + -68.71px)",
              top: -1
            }}>
            {"Continuar con Google"}
          </span>
        </div>
      </div>
      <div data-figma-id="585:2348" style={fixedLayer(342, 378, {
          display: "flex",
          flexDirection: "column",
          gap: 11
        })}>
        <div data-figma-id="585:2349" style={{
            minWidth: 0,
            display: "flex",
            padding: "4px 0",
            boxSizing: "border-box",
            flexDirection: "column",
            position: "relative",
            height: 24.5,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="585:2350" style={{
              ...row1,
              minWidth: 0,
              justifyContent: "center",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="585:2351" style={{
                borderTop: "1px solid #e5e7eb",
                position: "absolute",
                left: 0,
                top: 7.75,
                height: 1,
                right: 0
              }} />
            <div data-figma-id="585:2352" style={fixedLayer(170.13, 16.5, {
                background: "#fffcf8"
              })}>
              <span data-figma-id="585:2353" style={{
                  ...font_Manrope,
                  color: "#78746e",
                  fontSize: 11,
                  fontWeight: 500,
                  fontVariationSettings: "\"wght\" 500",
                  lineHeight: "16.5px",
                  letterSpacing: "0.275px",
                  ...row1,
                  position: "absolute",
                  left: 13.065,
                  top: -0.75
                }}>
                {"o con tu número telefónico"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="585:2354" style={{
            minWidth: 0,
            position: "relative",
            height: 244.5,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="585:2355" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
              position: "absolute",
              left: 0,
              top: 0,
              height: 68,
              right: 0
            }}>
            <div data-figma-id="585:2356" style={fixedLayer(340, 18, col1)}>
              <span data-figma-id="585:2357" style={{
                  ...font_Manrope,
                  ...text1,
                  color: "#201d1d",
                  fontSize: 16,
                  lineHeight: "21.856px",
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Número telefónico"}
              </span>
            </div>
            <div data-figma-id="585:2358" style={{
                minWidth: 0,
                position: "relative",
                height: 44,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="585:2359" style={{
                  ...surface1,
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
                  overflow: "hidden",
                  position: "absolute",
                  left: -1,
                  top: "calc(50% + -21.5px)",
                  height: 44,
                  right: 1
                }}>
                <div data-figma-id="585:2360" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                    overflow: "hidden"
                  })}>
                  <span data-figma-id="585:2361" style={{
                      ...font_Manrope,
                      ...text2,
                      color: "rgba(0, 0, 0, 0.5)",
                      fontSize: 13,
                      lineHeight: "18px",
                      ...row1,
                      position: "absolute",
                      left: 6,
                      top: 3.25,
                      width: 281
                    }}>
                    {"correo@gmail.com"}
                  </span>
                </div>
                <div data-figma-id="585:2362" style={{
                    ...row1,
                    padding: "0 0 0 14px",
                    boxSizing: "border-box",
                    position: "absolute",
                    left: 1,
                    top: -0.5,
                    width: 42,
                    bottom: 0.5
                  }}>
                  <svg data-figma-id="585:2363" viewBox="0 0 16.667 13.333" preserveAspectRatio="none" style={fixedLayer(16.667, 13.333)}>
                    <use href="#figma-vector-441" fill="#ed6047" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="585:2364" style={absoluteLayer(-1, 200.5, 342, 44, surface1)}>
            <div data-figma-id="585:2091" style={absoluteLayer(15, 4.6, 226.91, 34.8)}>
              <div data-figma-id="585:2092" style={absoluteLayer(0, "calc(50% + -11px)", 22, 22, {
                  overflow: "hidden"
                })}>
                <svg data-figma-id="585:2110" viewBox="-1.8 -1.8 25.6 23.6" preserveAspectRatio="none" style={absoluteLayer("calc(0% - 1.8px)", "calc(calc(50% + -10px) - 1.8px)", "calc(100% + 3.6px)", 23.6)}>
                  <use href="#figma-derived-849" fill="transparent" />
                  <use href="#figma-derived-stroke-850" fill="#2457c5" />
                </svg>
              </div>
              <div data-figma-id="585:2094" style={absoluteLayer(34, "calc(50% + -17px)", 192.91, 34.8)}>
                <div data-figma-id="585:2097" style={{
                    ...col1,
                    position: "absolute",
                    left: 0,
                    top: "calc(50% + -7.6px)",
                    height: 15,
                    right: 0
                  }}>
                  <span data-figma-id="585:2098" style={{
                      ...text2,
                      color: "#82776e",
                      whiteSpace: "pre",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 12,
                      lineHeight: "15px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Acceder al modo administrador"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="585:2099" style={absoluteLayer(309, 13, 18, 18, {
                background: "#ffffff",
                border: "1px solid #d5ccc2",
                borderRadius: 9
              })} />
          </div>
          <div data-figma-id="585:2365" style={{
              display: "flex",
              padding: "0 0 8px",
              boxSizing: "border-box",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
              position: "absolute",
              left: 0,
              top: 80,
              height: 76,
              right: 0
            }}>
            <div data-figma-id="585:2366" style={fixedLayer(340, "max-content", {
                ...row1,
                justifyContent: "space-between"
              })}>
              <div data-figma-id="585:2367" style={fixedLayer("max-content", 18, col1)}>
                <span data-figma-id="585:2368" style={{
                    ...font_Manrope,
                    ...text1,
                    color: "#201d1d",
                    fontSize: 16,
                    lineHeight: "21.856px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Contraseña"}
                </span>
              </div>
            </div>
            <div data-figma-id="585:2369" style={{
                ...row1,
                minWidth: 0,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="585:2370" style={{
                  ...surface1,
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
                  minWidth: 0,
                  overflow: "hidden",
                  position: "relative",
                  height: 44,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                <div data-figma-id="585:2371" style={{
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    left: 394,
                    top: "calc(50% + -9.25px)",
                    height: 18,
                    transformOrigin: "top left",
                    transform: "matrix(-1, 0, 0, 1, 0, 0)",
                    right: -487
                  }}>
                  <span data-figma-id="585:2372" style={{
                      ...font_Manrope,
                      ...text2,
                      color: "rgba(31, 27, 22, 0.5)",
                      fontSize: 13,
                      lineHeight: "18px",
                      letterSpacing: "1.3px",
                      ...row1,
                      minWidth: 0,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"********"}
                  </span>
                </div>
              </div>
              <div data-figma-id="585:2373" style={{
                  ...row1,
                  padding: "0 0 0 14px",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: 0,
                  top: -0.25,
                  width: 41,
                  bottom: 0.25
                }}>
                <div data-figma-id="585:2374" style={fixedLayer(16, 16, {
                    overflow: "hidden"
                  })}>
                  <svg data-figma-id="585:2375" viewBox="-0.6 -0.6 11.867 13.283" preserveAspectRatio="none" style={absoluteLayer("calc(16.667% - 0.6px)", "calc(11.979% - 0.6px)", "calc(66.667% + 1.2px)", "calc(75.52% + 1.2px)")}>
                    <use href="#figma-vector-453" fill="transparent" stroke="#ed6047" strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div data-figma-id="585:2376" style={{
                  position: "absolute",
                  top: 0,
                  width: 44,
                  right: 0,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <ClientEyeIcon size={18} color="#82776e" />
              </div>
            </div>
            <span data-figma-id="585:2381" style={{
                ...font_Manrope,
                ...text1,
                color: "#ed6047",
                fontSize: 13,
                lineHeight: "17.758px",
                ...row1,
                position: "absolute",
                left: 0,
                top: 73
              }}>
              {"¿Olvidaste tu contraseña?"}
            </span>
          </div>
        </div>
        <div data-figma-id="585:2382" style={{
            minWidth: 0,
            overflow: "hidden",
            position: "relative",
            height: 87,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="585:2383" style={{
              ...font_Manrope,
              ...text1,
              color: "#ed6047",
              fontSize: 13,
              lineHeight: "17.758px",
              ...row1,
              position: "absolute",
              left: -2,
              bottom: 6
            }}>
            <span data-figma-text-run="5" style={{
                color: "rgba(32, 29, 29, 0.6)",
                fontSize: 13
              }}>{"¿No tiene cuenta? - "}</span><span data-figma-text-run="4" style={{
                fontSize: 13
              }}>{"Registra tu cuenta aquí"}</span>
          </span>
          <div data-figma-id="585:2384" style={absoluteLayer("calc(50% + -170.5px)", 3, 342, 48, {
              background: "#ed6047",
              borderRadius: 12,
              filter: "drop-shadow(0px 6px 16px rgba(237, 96, 71, 0.35))",
              ...row1,
              justifyContent: "center",
              gap: 8
            })}>
            <div data-figma-id="585:2385" style={fixedLayer("max-content", 21, {
                ...row1,
                flexDirection: "column"
              })}>
              <span data-figma-id="585:2386" style={{
                  ...font_Manrope,
                  ...text1,
                  color: "#ffffff",
                  fontSize: 16,
                  lineHeight: "21.856px",
                  textAlign: "center",
                  ...row1,
                  justifyContent: "center",
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Iniciar Sesión"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default IniciarSesionNueva;