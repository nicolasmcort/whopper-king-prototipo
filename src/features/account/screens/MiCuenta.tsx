import React from 'react';
import { ClientCartIcon, ClientCartIconOutline } from '@/shared/components/ui/ClientCartIcon';
import {
  ClientPinIcon,
  ClientHeadphonesIcon,
  ClientBagIcon,
  ClientShieldIcon,
  ClientHeadsetIcon,
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
const text1: React.CSSProperties = {
  color: "#82776e",
  fontVariationSettings: "\"wght\" 400"
};
const text2: React.CSSProperties = {
  color: "#29241f",
  whiteSpace: "pre"
};
const text3: React.CSSProperties = {
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const text4: React.CSSProperties = {
  color: "#ed6047",
  whiteSpace: "pre"
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
  padding: "2px 0 0",
  boxSizing: "border-box"
};
const layout3: React.CSSProperties = {
  minWidth: 0,
  minHeight: 44
};
const layout5: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const surface1: React.CSSProperties = {
  background: "#f5efe7",
  borderRadius: 9999
};
const row2: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const text5: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 400,
  lineHeight: "18px"
};
const layout4: React.CSSProperties = {
  overflow: "hidden",
  alignItems: "center",
  gap: 5
};
const row1: React.CSSProperties = {
  ...layout1,
  display: "flex"
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 9999,
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const surface3: React.CSSProperties = {
  background: "#faf5f0",
  boxShadow: "inset 0 0 0 1px #ebe4dc",
  borderRadius: 8
};
const col2: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  overflow: "hidden"
};
const col3: React.CSSProperties = {
  ...col1,
  ...layout2,
  minWidth: 0
};
const font_Inter_16: React.CSSProperties = {
  ...font_Inter,
  ...text2,
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "24px"
};
const font_Inter_12: React.CSSProperties = {
  ...font_Inter,
  ...text2,
  ...text3,
  fontSize: 12,
  lineHeight: "16px",
  textAlign: "center"
};
const font_Inter_11: React.CSSProperties = {
  ...font_Inter,
  ...text4,
  fontSize: 11,
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700",
  lineHeight: "16.5px",
  letterSpacing: "0.55px",
  textTransform: "uppercase"
};
export function MiCuenta() {
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
        <path id="figma-vector-466" d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fillRule="nonzero" />
        <path id="figma-vector-519" d="M1.667 15C1.208 15 0.816 14.837 0.49 14.51C0.163 14.184 0 13.792 0 13.333L0 1.667C0 1.208 0.163 0.816 0.49 0.49C0.816 0.163 1.208 0 1.667 0L7.5 0L7.5 1.667L1.667 1.667L1.667 1.667L1.667 1.667L1.667 13.333L1.667 13.333L1.667 13.333L7.5 13.333L7.5 15L1.667 15L1.667 15M10.833 11.667L9.688 10.458L11.813 8.333L5 8.333L5 6.667L11.813 6.667L9.688 4.542L10.833 3.333L15 7.5L10.833 11.667L10.833 11.667" fillRule="nonzero" />
        <path id="figma-vector-521-corners-2-0" d="M17.414 10.414C19 8.828 20 7.5 20 5.5C20 4.387 19.662 3.3 19.032 2.384C18.401 1.467 17.507 0.763 16.468 0.364C15.429 -0.034 14.294 -0.108 13.212 0.153C12.13 0.414 11.153 0.996 10.409 1.824C10.298 1.928 10.152 1.985 10 1.985C9.848 1.986 9.702 1.928 9.591 1.825C8.847 0.997 7.87 0.415 6.788 0.154C5.706 -0.107 4.571 -0.033 3.532 0.365C2.493 0.763 1.599 1.467 0.969 2.384C0.338 3.301 0 4.387 0 5.5C0 7.8 1.5 9.5 3 11L8.535 16.362C8.718 16.559 8.939 16.717 9.184 16.826C9.43 16.936 9.695 16.995 9.963 17C10.232 17.004 10.499 16.955 10.748 16.854C10.998 16.754 11.224 16.604 11.414 16.414C11.611 16.217 11.767 15.983 11.873 15.725C11.98 15.468 12.034 15.192 12.034 14.913C12.033 14.634 11.978 14.359 11.871 14.101C11.764 13.844 11.607 13.611 11.41 13.414C11.603 13.627 11.838 13.8 12.099 13.92C12.361 14.04 12.644 14.105 12.932 14.113C13.22 14.12 13.506 14.069 13.774 13.962C14.041 13.855 14.284 13.695 14.487 13.491C14.691 13.288 14.851 13.045 14.958 12.777C15.065 12.51 15.116 12.224 15.109 11.936C15.102 11.648 15.036 11.365 14.916 11.103C14.796 10.842 14.624 10.607 14.41 10.414C14.607 10.611 14.841 10.768 15.099 10.874C15.357 10.981 15.633 11.036 15.912 11.036C16.191 11.036 16.467 10.981 16.725 10.874C16.983 10.768 17.217 10.611 17.414 10.414C17.789 10.039 18 9.53 18 9C18 8.47 17.789 7.961 17.414 7.586L15.533 5.704C15.309 5.48 15.043 5.302 14.751 5.181C14.459 5.06 14.145 4.998 13.828 4.998C13.512 4.998 13.198 5.06 12.906 5.181C12.614 5.302 12.348 5.48 12.124 5.704L10.414 7.414C10.039 7.789 9.53 7.999 9 7.999C8.47 7.999 7.961 7.789 7.586 7.414C7.211 7.039 7 6.53 7 6C7 5.47 7.211 4.961 7.586 4.586L10.409 1.824" fillRule="nonzero" />
        <path id="figma-vector-105-corners-2-0" d="M12 19L12 11C12 10.735 11.895 10.48 11.707 10.293C11.52 10.105 11.265 10 11 10L7 10C6.735 10 6.48 10.105 6.293 10.293C6.105 10.48 6 10.735 6 11L6 19M0 8C0 7.71 0.063 7.422 0.186 7.158C0.308 6.894 0.487 6.66 0.709 6.472L7.709 0.472C8.07 0.167 8.527 0 9 0C9.473 0 9.93 0.167 10.291 0.472L17.291 6.472C17.513 6.66 17.692 6.894 17.814 7.158C17.937 7.422 18 7.71 18 8L18 17C18 17.531 17.789 18.04 17.414 18.415C17.039 18.79 16.53 19 16 19L2 19C1.47 19 0.961 18.79 0.586 18.415C0.211 18.04 0 17.531 0 17L0 8Z" fillRule="nonzero" />
        <path id="figma-vector-109-corners-2-0" d="M18 18L13.66 13.66M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z" fillRule="nonzero" />
        <path id="figma-vector-110-corners-2-0" d="M8 10C10.761 10 13 7.761 13 5C13 2.239 10.761 0 8 0C5.239 0 3 2.239 3 5C3 7.761 5.239 10 8 10C10.122 10 12.157 10.843 13.657 12.343C15.157 13.843 16 15.878 16 18M8 10C5.878 10 3.843 10.843 2.343 12.343C0.843 13.843 0 15.878 0 18" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="342:2069" style={rootLayer("100%", "auto", {
      ...col1,
      minWidth: 0,
      overflow: "hidden",
      padding: "1px 0 0",
      boxSizing: "border-box"
    })}>
    <div data-figma-id="342:2070" style={{
        background: "#fffcf8",
        ...layout5,
        position: "relative",
        height: 792,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="342:2071" style={{
          overflow: "hidden",
          display: "flex",
          padding: "0 26px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          left: 0,
          top: 0,
          height: 48,
          right: 0
        }}>
        <span data-figma-id="342:2072" style={{
            ...font_Inter,
            ...text2,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "17px",
            position: "relative",
            flexShrink: 0
          }}>
          {"9:41"}
        </span>
        <div data-figma-id="342:2073" style={fixedLayer(71, "max-content", {
            ...layout4,
            display: "flex"
          })}>
          <div data-figma-id="342:2074" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:2075" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
              <use href="#figma-vector-4-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="342:2076" style={fixedLayer(18, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:2077" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
              <use href="#figma-vector-5-corners-3-0" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="342:2078" style={fixedLayer(25, 18, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:2079" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
              <use href="#figma-vector-6-corners-3-0" fill="#29241f" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="342:2080" style={{
          ...col1,
          position: "absolute",
          left: 0,
          top: 12,
          height: 88,
          right: 0
        }}>
        <div data-figma-id="342:2081" data-proto-action="mis datos" style={{
            ...layout3,
            display: "flex",
            padding: "8px 26px",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch",
            cursor: "pointer"
          }}>
          <div data-figma-id="342:2082" style={fixedLayer(242, "max-content", {
              ...layout1,
              display: "flex",
              gap: 14
            })}>
            <div data-figma-id="342:2083" style={fixedLayer(56, 56, {
                ...surface1,
                ...row1
              })}>
              <div data-figma-id="342:2084" style={fixedLayer("max-content", 30, col1)}>
                <span data-figma-id="342:2085" style={{
                    ...font_Inter,
                    ...text4,
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: "30px",
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"LM"}
                </span>
              </div>
            </div>
            <div data-figma-id="342:2086" style={fixedLayer("max-content", 50, col1)}>
              <div data-figma-id="342:2087" style={{
                  ...col1,
                  minWidth: 133,
                  overflow: "hidden",
                  position: "relative",
                  height: 27,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:2088" style={{
                    ...font_Inter,
                    ...text2,
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: "27px",
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Laura Martínez"}
                </span>
              </div>
              <div data-figma-id="342:2089" style={{
                  ...col1,
                  ...layout2,
                  minWidth: 133,
                  position: "relative",
                  height: 23,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:2090" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 21,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2091" style={{
                      ...font_Inter,
                      ...text1,
                      whiteSpace: "pre",
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: "21px",
                      ...row2,
                      position: "relative",
                      width: 145,
                      flexShrink: 0
                    }}>
                    {"+57 300 123 4567"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="342:2092" style={fixedLayer(43, 44)}>
            <svg data-figma-id="342:2093" viewBox="0 0 7.4 12" preserveAspectRatio="none" style={absoluteLayer(18, 16, 7, 11)}>
              <use href="#figma-vector-466" fill="#82776e" />
            </svg>
          </div>
        </div>
        <div data-figma-id="342:2094" style={{
            ...col1,
            minWidth: 0,
            padding: "6px 0 0",
            boxSizing: "border-box",
            position: "relative",
            height: 7,
            flexShrink: 0,
            alignSelf: "stretch"
          }} />
        <div data-figma-id="342:2095" style={{
            background: "#ebe4dc",
            minWidth: 0,
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch"
          }} />
      </div>
      <div data-figma-id="342:2096" style={{
          ...col1,
          gap: 16,
          position: "absolute",
          left: 0,
          top: 108,
          height: 96,
          right: 0
        }}>
        <div data-figma-id="342:2097" style={fixedLayer(402, 24, {
            ...col1,
            ...layout1
          })}>
          <span data-figma-id="342:2098" style={{
              ...font_Inter_16,
              ...row2,
              position: "absolute",
              left: 26,
              top: 0
            }}>
            {"Accesos rápidos"}
          </span>
        </div>
        <div data-figma-id="342:2099" style={fixedLayer(402, "max-content", {
            ...layout1,
            display: "flex",
            gap: 12
          })}>
          <div data-figma-id="342:2100" style={fixedLayer(165, "max-content", {
              background: "#f5efe7",
              borderRadius: 12,
              ...layout1,
              ...layout3,
              display: "flex",
              padding: "8px 34.39px 8px 8px",
              boxSizing: "border-box",
              gap: 8
            })}>
            <div data-figma-id="342:2101" style={fixedLayer(40, 40, {
                ...surface2,
                ...row1
              })}>
              <div data-figma-id="342:2102" style={fixedLayer("max-content", 18.333, col1)}>
                <div data-figma-id="342:2103" style={{
                    ...fixedLayer(20, 20),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <ClientPinIcon size={18} color="#ed6047" />
                </div>
              </div>
            </div>
            <div data-figma-id="342:2104" style={fixedLayer("max-content", 36, col1)}>
              <div data-figma-id="342:2105" style={{
                  ...col1,
                  minWidth: 74.61,
                  overflow: "hidden",
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:2106" style={{
                    ...font_Inter,
                    ...text2,
                    ...text3,
                    fontSize: 13,
                    lineHeight: "16.25px",
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Direcciones"}
                </span>
              </div>
              <div data-figma-id="342:2107" style={{
                  ...col1,
                  ...layout2,
                  minWidth: 74.61,
                  position: "relative",
                  height: 19,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:2108" style={{
                    ...col2,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2109" style={{
                      ...font_Inter,
                      ...text1,
                      whiteSpace: "pre",
                      fontSize: 11,
                      fontWeight: 400,
                      lineHeight: "16.5px",
                      minWidth: 0,
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"2 guardadas"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="342:2110" style={fixedLayer(174, 56, {
              background: "#f5efe7",
              borderRadius: 12,
              ...layout1,
              ...layout3,
              display: "flex",
              padding: "2px 8px",
              boxSizing: "border-box",
              gap: 8
            })}>
            <div data-figma-id="342:2111" style={fixedLayer(40, 40, {
                ...surface2,
                ...row1
              })}>
              <div data-figma-id="342:2112" style={fixedLayer("max-content", 16.5, col1)}>
                <div data-figma-id="342:2113" style={{
                    ...fixedLayer(20, 20),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <ClientHeadphonesIcon size={18} color="#ed6047" />
                </div>
              </div>
            </div>
            <div data-figma-id="342:2114" style={fixedLayer(107, 36, col1)}>
              <div data-figma-id="342:2115" style={{
                  ...col2,
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:2116" style={{
                    ...font_Inter,
                    ...text2,
                    ...text3,
                    fontSize: 13,
                    lineHeight: "16.25px",
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Contacto"}
                </span>
              </div>
              <div data-figma-id="342:2117" style={fixedLayer(111, 19, {
                  ...col1,
                  ...layout2
                })}>
                <div data-figma-id="342:2118" style={{
                    ...col2,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2119" style={{
                      ...font_Inter,
                      ...text1,
                      whiteSpace: "nowrap",
                      fontSize: 11,
                      fontWeight: 400,
                      lineHeight: "16.5px",
                      textOverflow: "ellipsis",
                      minWidth: 0,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"WhatsApp y llamada"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="342:2120" style={{
          position: "absolute",
          left: 0,
          top: 234,
          height: 250,
          right: 0
        }}>
        <div data-figma-id="342:2121" style={{
            background: "#ebe4dc",
            position: "absolute",
            left: 0,
            top: 0,
            height: 1,
            right: 0
          }} />
        <div data-figma-id="342:2122" style={absoluteLayer(0, 17, 402, 1, {
            ...col1,
            ...layout1
          })}>
          <span data-figma-id="342:2123" style={{
              ...font_Inter_16,
              ...row2,
              position: "absolute",
              left: 26,
              top: 0
            }}>
            {"Entrega"}
          </span>
        </div>
        <div data-figma-id="342:2124" style={{
            ...col1,
            position: "absolute",
            left: 0,
            top: 54,
            height: 187,
            right: 0
          }}>
          <div data-figma-id="342:2125" style={{
              ...layout3,
              position: "relative",
              height: 69,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:2127" style={absoluteLayer(14, 13.5, 40, 42, {
                ...col1,
                ...layout2
              })}>
              <div data-figma-id="342:2128" style={fixedLayer(40, 40, {
                  ...surface1,
                  ...row1
                })}>
                <div data-figma-id="342:2129" style={fixedLayer("max-content", 18.333, col1)}>
                  <div data-figma-id="720:2722" style={{
                      ...fixedLayer(20, 20),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                    <ClientPinIcon size={18} color="#ed6047" />
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="342:2131" style={absoluteLayer(66, 4, 206, 61, col1)}>
              <div data-figma-id="342:2132" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:2133" style={{
                    ...font_Inter_11,
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"DIRECCIÓN PREDETERMINADA"}
                </span>
              </div>
              <div data-figma-id="342:2134" style={{
                  ...col3,
                  position: "relative",
                  height: 24.5,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:2135" style={{
                    ...layout5,
                    position: "relative",
                    height: 22.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2136" style={{
                      ...font_Inter,
                      ...text2,
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: "22.5px",
                      ...row2,
                      position: "absolute",
                      left: 0,
                      top: -1,
                      width: 220
                    }}>
                    {"Casa - Calle 18 # 25-40"}
                  </span>
                </div>
              </div>
              <div data-figma-id="342:2137" style={{
                  ...layout5,
                  position: "relative",
                  height: 19.5,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:2138" style={{
                    ...font_Inter,
                    ...text1,
                    whiteSpace: "pre",
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: "19.5px",
                    ...row2,
                    position: "absolute",
                    left: 0,
                    top: -1
                  }}>
                  {"Barrio Las Cuadras · Pasto"}
                </span>
              </div>
            </div>
            <div data-figma-id="342:2139" style={absoluteLayer(306, 20, "max-content", 30, {
                ...surface3,
                ...col1,
                ...layout1,
                padding: "7px 13px",
                boxSizing: "border-box"
              })}>
              <span data-figma-id="342:2140" style={{
                  ...font_Inter_12,
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Cambiar"}
              </span>
            </div>
          </div>
          <div data-figma-id="342:2141" style={{
              ...col1,
              minWidth: 0,
              padding: "12px 0",
              boxSizing: "border-box",
              position: "relative",
              height: 25,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:2142" style={{
                background: "#ebe4dc",
                minWidth: 0,
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
          </div>
          <div data-figma-id="342:2143" style={{
              ...layout3,
              position: "relative",
              height: 85,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:2145" style={absoluteLayer(14, 13.5, 40, 42, {
                ...col1,
                ...layout2
              })}>
              <div data-figma-id="342:2146" style={fixedLayer(40, 40, {
                  ...surface1,
                  ...row1
                })}>
                <div data-figma-id="342:2147" style={fixedLayer("max-content", 16.5, col1)}>
                  <div data-figma-id="342:2148" style={{
                      ...fixedLayer(20, 20),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                    <ClientBagIcon size={18} color="#ed6047" />
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="342:2149" style={absoluteLayer(66, 4, 226, 80.5, col1)}>
              <div data-figma-id="342:2150" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:2151" style={{
                    ...font_Inter_11,
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"RESTAURANTE"}
                </span>
              </div>
              <div data-figma-id="342:2152" style={{
                  ...col3,
                  position: "relative",
                  height: 24.5,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:2153" style={{
                    ...layout5,
                    position: "relative",
                    height: 22.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2154" style={{
                      ...font_Inter,
                      ...text2,
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: "22.5px",
                      ...row2,
                      position: "absolute",
                      left: 0,
                      top: -1,
                      width: 206
                    }}>
                    {"Whopper King"}
                  </span>
                </div>
              </div>
              <div data-figma-id="342:2155" style={fixedLayer(217, 19, {
                  overflow: "hidden"
                })}>
                <span data-figma-id="342:2156" style={{
                    ...font_Inter,
                    ...text1,
                    ...text5,
                    fontSize: 13,
                    ...row2,
                    position: "absolute",
                    left: 0,
                    top: 0
                  }}>
                  {"Pasto, Nariño, Las Cuadras"}
                </span>
              </div>
              <div data-figma-id="342:2157" style={fixedLayer(217, 20, {
                  overflow: "hidden"
                })}>
                <span data-figma-id="342:2158" style={{
                    ...font_Inter,
                    ...text1,
                    whiteSpace: "pre",
                    fontSize: 12,
                    lineHeight: "16.5px",
                    ...row2,
                    position: "absolute",
                    left: 0,
                    top: 1
                  }}>
                  <span data-figma-text-run="7" style={{
                      color: "#34745c",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      fontVariationSettings: "\"wght\" 600",
                      lineHeight: "16.5px"
                    }}>{"Abierto"}</span><span data-figma-text-run="6" style={{
                      color: "#82776e",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 12,
                      fontVariationSettings: "\"wght\" 400",
                      lineHeight: "16.5px"
                    }}>{" Hoy ( 11:00 a. m. – 9:00 p. m. )"}</span>
                </span>
              </div>
            </div>
            <div data-figma-id="342:2159" style={absoluteLayer(296, 21, "max-content", 30, {
                ...surface3,
                ...col1,
                ...layout1,
                padding: "7px 13px",
                boxSizing: "border-box"
              })}>
              <span data-figma-id="342:2160" style={{
                  ...font_Inter_12,
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Cómo llegar"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="342:2161" style={{
          ...col1,
          gap: 16,
          position: "absolute",
          left: 0,
          top: 493,
          height: 116,
          right: 0
        }}>
        <div data-figma-id="342:2162" style={{
            background: "#ebe4dc",
            minWidth: 0,
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch"
          }} />
        <div data-figma-id="342:2163" style={fixedLayer(402, 24, {
            ...col1,
            ...layout1
          })}>
          <span data-figma-id="342:2164" style={{
              ...font_Inter_16,
              ...row2,
              position: "absolute",
              left: 26,
              top: 0
            }}>
            {"Cuenta"}
          </span>
        </div>
        <div data-figma-id="342:2165" style={{
            ...col1,
            minWidth: 0,
            position: "relative",
            height: 60,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:2166" style={{
              ...layout3,
              position: "relative",
              height: 68,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="375:476" style={absoluteLayer(0, 62, 402, 1, {
                background: "#ebe4dc"
              })} />
            <div data-figma-id="342:2167" style={absoluteLayer(14, 4, 296, 48)}>
              <div data-figma-id="342:2168" style={absoluteLayer(0, 1, 40, 42, {
                  ...col1,
                  ...layout2
                })}>
                <div data-figma-id="342:2169" style={fixedLayer(40, 40, {
                    ...surface1,
                    ...row1
                  })}>
                  <div data-figma-id="342:2170" style={fixedLayer("max-content", 18.333, col1)}>
                    <div data-figma-id="342:2171" style={{
                        ...fixedLayer(20, 20),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                      <ClientShieldIcon size={18} color="#ed6047" />
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-id="342:2172" style={absoluteLayer(52, 0, 244, 44, col1)}>
                <div data-figma-id="342:2173" style={{
                    ...col3,
                    position: "relative",
                    height: 24.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="342:2174" style={{
                      ...layout5,
                      position: "relative",
                      height: 22.5,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="342:2175" style={{
                        ...font_Inter,
                        ...text2,
                        fontSize: 15,
                        fontWeight: 700,
                        lineHeight: "22.5px",
                        ...row2,
                        position: "absolute",
                        left: 0,
                        top: -1,
                        width: 206
                      }}>
                      {"Privacidad y datos"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="342:2176" style={{
                    ...layout5,
                    position: "relative",
                    height: 19.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:2177" style={{
                      ...font_Inter,
                      ...text1,
                      ...text5,
                      fontSize: 12,
                      ...row2,
                      position: "absolute",
                      left: 0,
                      top: 0
                    }}>
                    {"Política, descarga y eliminación de cuenta"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="342:2178" style={absoluteLayer(326, "calc(50% + -28px)", 45, 44)}>
              <svg data-figma-id="342:2179" viewBox="0 0 7.4 12" preserveAspectRatio="none" style={absoluteLayer(18, 16, 7, 11)}>
                <use href="#figma-vector-466" fill="#82776e" />
              </svg>
            </div>
          </div>
          <div data-figma-id="352:9061" style={{
              minWidth: 0,
              position: "relative",
              height: 56,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="352:9062" style={absoluteLayer(14, 4, 296, 48)}>
              <div data-figma-id="352:9063" style={absoluteLayer(0, 1, 40, 42, {
                  ...col1,
                  ...layout2
                })}>
                <div data-figma-id="352:9064" style={fixedLayer(40, 40, {
                    ...surface1,
                    ...row1
                  })}>
                  <div data-figma-id="352:9065" style={fixedLayer("max-content", 18, col1)}>
                    <div data-figma-id="658:1829" style={{
                        ...fixedLayer(20, 20),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                      <ClientHeadsetIcon size={18} color="#ed6047" />
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-id="352:9067" style={absoluteLayer(52, 0, 244, 44, col1)}>
                <div data-figma-id="352:9068" style={{
                    ...col3,
                    position: "relative",
                    height: 24.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="352:9069" style={{
                      ...layout5,
                      position: "relative",
                      height: 22.5,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="352:9070" style={{
                        ...font_Inter,
                        ...text2,
                        fontSize: 15,
                        fontWeight: 700,
                        lineHeight: "22.5px",
                        ...row2,
                        position: "absolute",
                        left: 0,
                        top: -1,
                        width: 206
                      }}>
                      {"¿Tienes una PQRS?"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="352:9071" style={{
                    ...layout5,
                    position: "relative",
                    height: 19.5,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="352:9072" style={{
                      ...font_Inter,
                      ...text1,
                      ...text5,
                      fontSize: 12,
                      ...row2,
                      position: "absolute",
                      left: 0,
                      top: 0
                    }}>
                    {"Haz envio de ella por acá"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="352:9073" style={absoluteLayer(326, "calc(50% + -22px)", 45, 44)}>
              <svg data-figma-id="352:9074" viewBox="0 0 7.4 12" preserveAspectRatio="none" style={absoluteLayer(18, 16, 7, 11)}>
                <use href="#figma-vector-466" fill="#82776e" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="342:2195" style={absoluteLayer(0, 687, 402, 1, {
          background: "#ebe4dc"
        })} />
      <div data-figma-id="342:2199" style={absoluteLayer("calc(50% + -82px)", 710, 164.78, "max-content", {
          ...layout3,
          display: "flex",
          padding: "11px 24px",
          boxSizing: "border-box",
          alignItems: "center",
          gap: 4
        })}>
        <div data-figma-id="342:2200" style={fixedLayer("max-content", 15, {
            ...col1,
            alignItems: "center"
          })}>
          <svg data-figma-id="342:2201" viewBox="0 0 15 15" preserveAspectRatio="none" style={fixedLayer(15, 15)}>
            <use href="#figma-vector-519" fill="#ed6047" />
          </svg>
        </div>
        <div data-figma-id="342:2202" style={fixedLayer(97.78, 22.5)}>
          <span data-figma-id="342:2203" style={{
              ...font_Inter,
              ...text3,
              ...text4,
              fontSize: 15,
              lineHeight: "22.5px",
              textAlign: "center",
              ...row1,
              position: "absolute",
              left: "calc(50% + -48.89px)",
              top: -1
            }}>
            {"Cerrar sesión"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:2204" style={{
          ...layout1,
          overflow: "hidden",
          display: "flex",
          gap: 7,
          position: "absolute",
          left: 0,
          top: 758,
          height: 28,
          right: 0
        }}>
        <div data-figma-id="342:2205" style={fixedLayer(14, 14, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="342:2206" viewBox="-1.543 -1.543 23.085 20.086" preserveAspectRatio="none" style={absoluteLayer("calc(8.33% - 0.9px)", "calc(16.67% - 0.9px)", "calc(83.34% + 1.8px)", "calc(70.83% + 1.8px)")}>
            <path d="M17.414 10.414C19 8.828 20 7.5 20 5.5C20 4.387 19.662 3.3 19.032 2.384C18.401 1.467 17.507 0.763 16.468 0.364C15.429 -0.034 14.294 -0.108 13.212 0.153C12.13 0.414 11.153 0.996 10.409 1.824C10.298 1.928 10.152 1.985 10 1.985C9.848 1.986 9.702 1.928 9.591 1.825C8.847 0.997 7.87 0.415 6.788 0.154C5.706 -0.107 4.571 -0.033 3.532 0.365C2.493 0.763 1.599 1.467 0.969 2.384C0.338 3.301 0 4.387 0 5.5C0 7.8 1.5 9.5 3 11L8.535 16.362C8.718 16.559 8.939 16.717 9.184 16.826C9.43 16.936 9.695 16.995 9.963 17C10.232 17.004 10.499 16.955 10.748 16.854C10.998 16.754 11.224 16.604 11.414 16.414C11.611 16.217 11.767 15.983 11.873 15.725C11.98 15.468 12.034 15.192 12.034 14.913C12.033 14.634 11.978 14.359 11.871 14.101C11.764 13.844 11.607 13.611 11.41 13.414C11.603 13.627 11.838 13.8 12.099 13.92C12.361 14.04 12.644 14.105 12.932 14.113C13.22 14.12 13.506 14.069 13.774 13.962C14.041 13.855 14.284 13.695 14.487 13.491C14.691 13.288 14.851 13.045 14.958 12.777C15.065 12.51 15.116 12.224 15.109 11.936C15.102 11.648 15.036 11.365 14.916 11.103C14.796 10.842 14.624 10.607 14.41 10.414C14.607 10.611 14.841 10.768 15.099 10.874C15.357 10.981 15.633 11.036 15.912 11.036C16.191 11.036 16.467 10.981 16.725 10.874C16.983 10.768 17.217 10.611 17.414 10.414C17.789 10.039 18 9.53 18 9C18 8.47 17.789 7.961 17.414 7.586L15.533 5.704C15.309 5.48 15.043 5.302 14.751 5.181C14.459 5.06 14.145 4.998 13.828 4.998C13.512 4.998 13.198 5.06 12.906 5.181C12.614 5.302 12.348 5.48 12.124 5.704L10.414 7.414C10.039 7.789 9.53 7.999 9 7.999C8.47 7.999 7.961 7.789 7.586 7.414C7.211 7.039 7 6.53 7 6C7 5.47 7.211 4.961 7.586 4.586L10.409 1.824" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
          </svg>
        </div>
        <span data-figma-id="342:2207" style={{
            ...font_Inter,
            color: "#82776e",
            whiteSpace: "pre",
            fontSize: 11,
            fontWeight: 400,
            lineHeight: "13.313px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Comida 100% hecha con amor."}
        </span>
      </div>
    </div>
  </div>
    <div data-figma-id="342:2208" data-proto-fixed-tabbar="1" style={{
        background: "#ffffff",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        ...col1,
        minWidth: 0,
        overflow: "hidden",
        marginTop: 0,
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        maxWidth: 402,
        height: 84,
        zIndex: 60,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="342:2209" style={{
          minWidth: 0,
          overflow: "hidden",
          display: "flex",
          padding: "0 14px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          height: 60,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:2210" style={fixedLayer(78, 39, {
            ...col1,
            ...layout4
          })}>
          <div data-figma-id="342:2211" style={fixedLayer(22, 22, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:2212" viewBox="-0.982 -0.982 19.964 20.964" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(8.33% - 0.9px)", "calc(75% + 1.8px)", "calc(79.169% + 1.8px)")}>
              <path d="M12 19L12 11C12 10.735 11.895 10.48 11.707 10.293C11.52 10.105 11.265 10 11 10L7 10C6.735 10 6.48 10.105 6.293 10.293C6.105 10.48 6 10.735 6 11L6 19M0 8C0 7.71 0.063 7.422 0.186 7.158C0.308 6.894 0.487 6.66 0.709 6.472L7.709 0.472C8.07 0.167 8.527 0 9 0C9.473 0 9.93 0.167 10.291 0.472L17.291 6.472C17.513 6.66 17.692 6.894 17.814 7.158C17.937 7.422 18 7.71 18 8L18 17C18 17.531 17.789 18.04 17.414 18.415C17.039 18.79 16.53 19 16 19L2 19C1.47 19 0.961 18.79 0.586 18.415C0.211 18.04 0 17.531 0 17L0 8Z" fill="transparent" fillRule="nonzero" stroke="#82776e" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
          </div>
          <span data-figma-id="342:2213" style={{
              ...font_Inter,
              color: "#82776e",
              whiteSpace: "pre",
              fontSize: 10,
              fontWeight: 700,
              lineHeight: "12.102px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Inicio"}
          </span>
        </div>
        <div data-figma-id="342:2214" style={fixedLayer(78, 39, {
            ...col1,
            ...layout4
          })}>
          <div data-figma-id="342:2215" style={fixedLayer(22, 22, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:2216" viewBox="-0.982 -0.982 19.964 19.964" preserveAspectRatio="none" style={absoluteLayer("calc(12.5% - 0.9px)", "calc(12.5% - 0.9px)", "calc(75.001% + 1.8px)", "calc(75.001% + 1.8px)")}>
              <path d="M18 18L13.66 13.66M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z" fill="transparent" fillRule="nonzero" stroke="#82776e" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
          </div>
          <span data-figma-id="342:2217" style={{
              ...font_Inter,
              color: "#82776e",
              whiteSpace: "pre",
              fontSize: 10,
              fontWeight: 500,
              lineHeight: "12.102px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Buscar"}
          </span>
        </div>
        <div data-figma-id="818:3531" style={fixedLayer(78, 39, {
            ...col1,
            alignItems: "center"
          })}>
          <div data-figma-id="818:3532" style={fixedLayer(20, 20, {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            })}>
            <ClientCartIconOutline size={20} color="#82776e" />
          </div>
          <div data-figma-id="818:3536" style={fixedLayer("max-content", 19, {
              ...col1,
              padding: "4px 0 0",
              boxSizing: "border-box"
            })}>
            <span data-figma-id="818:3537" style={{
                ...font_Inter,
                color: "#82776e",
                whiteSpace: "pre",
                fontSize: 10,
                fontWeight: 500,
                fontVariationSettings: "\"wght\" 500",
                lineHeight: "15px",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
              {"Carrito"}
            </span>
          </div>
        </div>
        <div data-figma-id="342:2222" style={fixedLayer(78, 39, {
            ...col1,
            ...layout4
          })}>
          <div data-figma-id="342:2223" style={fixedLayer(22, 22, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:2224" viewBox="-0.982 -0.982 17.964 19.964" preserveAspectRatio="none" style={absoluteLayer("calc(16.67% - 0.9px)", "calc(12.5% - 0.9px)", "calc(66.66% + 1.8px)", "calc(75% + 1.8px)")}>
              <path d="M8 10C10.761 10 13 7.761 13 5C13 2.239 10.761 0 8 0C5.239 0 3 2.239 3 5C3 7.761 5.239 10 8 10C10.122 10 12.157 10.843 13.657 12.343C15.157 13.843 16 15.878 16 18M8 10C5.878 10 3.843 10.843 2.343 12.343C0.843 13.843 0 15.878 0 18" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
          </div>
          <span data-figma-id="342:2225" style={{
              ...font_Inter,
              ...text4,
              fontSize: 10,
              fontWeight: 500,
              lineHeight: "12.102px",
              position: "relative",
              flexShrink: 0
            }}>
            {"Mi cuenta"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:2226" style={{
          ...col1,
          ...layout1,
          minWidth: 0,
          overflow: "hidden",
          position: "relative",
          height: 24,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:2227" style={fixedLayer(126, 4, {
            background: "#29241f",
            borderRadius: 4
          })} />
      </div>
    </div>
  </>;
}
export default MiCuenta;