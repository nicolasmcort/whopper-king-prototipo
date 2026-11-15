import React from 'react';
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
  color: "#29241f",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  fontSize: 13,
  lineHeight: "16px"
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #ebe4dc"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  alignItems: "center",
  justifyContent: "center"
};
const row1: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between"
};
const layout2: React.CSSProperties = {
  padding: 10,
  boxSizing: "border-box"
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 10
};
const layout3: React.CSSProperties = {
  minWidth: 0,
  aspectRatio: "179 / 19"
};
const text3: React.CSSProperties = {
  whiteSpace: "pre-wrap",
  fontWeight: 700,
  textAlign: "center"
};
const text4: React.CSSProperties = {
  color: "#ffffff",
  whiteSpace: "pre",
  fontWeight: 700
};
const row4: React.CSSProperties = {
  minWidth: 0,
  display: "flex",
  alignItems: "center"
};
const text2: React.CSSProperties = {
  color: "#82776e",
  fontSize: 10,
  fontWeight: 400,
  lineHeight: "15px"
};
const row3: React.CSSProperties = {
  ...layout1,
  overflow: "hidden",
  display: "flex"
};
const col2: React.CSSProperties = {
  ...col1,
  overflow: "hidden",
  padding: "12px 0",
  boxSizing: "border-box"
};
const col5: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  overflow: "hidden",
  gap: 7
};
const col3: React.CSSProperties = {
  ...col1,
  ...layout1,
  padding: "0 3px",
  boxSizing: "border-box"
};
const font_Manrope_14: React.CSSProperties = {
  ...font_Manrope,
  whiteSpace: "pre-wrap",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "19.124px"
};
const font_Inter_16: React.CSSProperties = {
  ...font_Inter,
  color: "#29241f",
  whiteSpace: "pre",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "19.364px"
};
const row2: React.CSSProperties = {
  ...row3,
  padding: 10,
  boxSizing: "border-box",
  gap: 12
};
const col4: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  minHeight: 0,
  padding: "0 5px",
  boxSizing: "border-box",
  gap: 5
};
function Part(p: {
  "data-figma-id": string;
  boxShadow: string;
  color: string;
  text: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={fixedLayer(65, 45, {
    boxShadow: p.boxShadow,
    ...col2
  })}>
      <span data-figma-id="711:1499" style={absoluteLayer(0, 0, 65, 44, {
      ...font_Inter,
      ...text1,
      ...text3,
      color: p.color,
      ...layout1,
      display: "flex"
    })}>
        {p.text}
      </span>
    </div>;
}
export function PolloWhopperKing() {
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
        <path id="figma-derived-880" d="M5.779 13.466C6.13 13.818 6.7 13.818 7.051 13.466C7.403 13.115 7.403 12.545 7.051 12.194L6.415 12.83L5.779 13.466ZM0 6.415L-0.636 5.779L-1.273 6.415L-0.636 7.051L0 6.415ZM7.051 0.636C7.403 0.285 7.403 -0.285 7.051 -0.636C6.7 -0.988 6.13 -0.988 5.779 -0.636L6.415 0L7.051 0.636ZM12.83 7.315C13.327 7.315 13.73 6.912 13.73 6.415C13.73 5.918 13.327 5.515 12.83 5.515L12.83 6.415L12.83 7.315ZM6.415 12.83L7.051 12.194L0.636 5.779L0 6.415L-0.636 7.051L5.779 13.466L6.415 12.83ZM0 6.415L0.636 7.051L7.051 0.636L6.415 0L5.779 -0.636L-0.636 5.779L0 6.415ZM0 6.415L0 7.315L12.83 7.315L12.83 6.415L12.83 5.515L0 5.515L0 6.415Z" fillRule="nonzero" />
        <path id="figma-derived-871" d="M0 4.351C-0.497 4.351 -0.9 4.754 -0.9 5.251C-0.9 5.748 -0.497 6.151 0 6.151L0 5.251L0 4.351ZM10.501 6.151C10.998 6.151 11.401 5.748 11.401 5.251C11.401 4.754 10.998 4.351 10.501 4.351L10.501 5.251L10.501 6.151ZM6.151 0C6.151 -0.497 5.748 -0.9 5.251 -0.9C4.754 -0.9 4.351 -0.497 4.351 0L5.251 0L6.151 0ZM4.351 10.501C4.351 10.998 4.754 11.401 5.251 11.401C5.748 11.401 6.151 10.998 6.151 10.501L5.251 10.501L4.351 10.501ZM0 5.251L0 6.151L10.501 6.151L10.501 5.251L10.501 4.351L0 4.351L0 5.251ZM5.251 0L4.351 0L4.351 10.501L5.251 10.501L6.151 10.501L6.151 0L5.251 0Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="425:2910" style={rootLayer("100%", 940, {
      background: "#fffcf8",
      ...col1,
      minWidth: 0,
      minHeight: 940,
      overflow: "hidden"
    })}>
    <div data-figma-id="425:2911" style={{
        ...row1,
        minWidth: 0,
        overflow: "hidden",
        padding: "0 26px",
        boxSizing: "border-box",
        alignItems: "center",
        position: "relative",
        height: 48,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <span data-figma-id="425:2912" style={{
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
      <div data-figma-id="425:2913" style={fixedLayer(71, "max-content", {
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          gap: 5
        })}>
        <div data-figma-id="425:2914" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="425:2915" viewBox="0 0 19.2 12.226" preserveAspectRatio="none" style={absoluteLayer("0%", "21.93%", "96%", "61.14%")}>
            <use href="#figma-vector-4-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="425:2916" style={fixedLayer(18, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="425:2917" viewBox="0 0 17.142 12.328" preserveAspectRatio="none" style={absoluteLayer("5%", "16.68%", "85.709%", "61.641%")}>
            <use href="#figma-vector-5-corners-3-0" fill="#29241f" />
          </svg>
        </div>
        <div data-figma-id="425:2918" style={fixedLayer(25, 18, {
            overflow: "hidden"
          })}>
          <svg data-figma-id="425:2919" viewBox="0 0 27.328 13" preserveAspectRatio="none" style={absoluteLayer("0%", "20%", "97.6%", "65%")}>
            <use href="#figma-vector-6-corners-3-0" fill="#29241f" />
          </svg>
        </div>
      </div>
    </div>
    <div data-figma-id="711:1553" style={fixedLayer(402, "max-content", {
        display: "flex",
        padding: "10px 15px",
        boxSizing: "border-box",
        alignItems: "center",
        gap: 10
      })}>
      <div data-figma-id="738:9479" style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', maxWidth: 382, minHeight: 44, position: 'relative', flexShrink: 0, boxSizing: 'border-box' }}>
        <div data-figma-id="711:1147" style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', flex: 1, minWidth: 0, position: 'relative' }}>
          <div data-figma-id="711:1309" style={{ position: "relative", width: "100%", minHeight: 35, flexShrink: 0 }}>
            <span data-figma-id="711:1310" style={{ position: "relative", display: "block", width: "100%",
                ...font_Inter,
                color: "#f94144",
                whiteSpace: "pre-wrap",
                fontSize: 29,
                fontWeight: 600,
                lineHeight: "35.097px",
                letterSpacing: "-1px"
              }}>
              {"Pollo, Carne y Pescado  "}
            </span>
          </div>
        </div>
        <div data-figma-id="711:1141" style={{ order: -1, position: 'relative', width: 44, height: 44, flexShrink: 0,
            ...surface1,
            borderRadius: 100,
            ...layout1,
            overflow: "hidden",
            display: "flex",
            padding: "0 10px",
            boxSizing: "border-box"
          }}>
          <div data-figma-id="711:1142" style={fixedLayer(20, 20, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="711:1143" viewBox="-1.273 -0.988 15.003 14.806" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 1.273px)", "calc(20.83% - 0.988px)", "calc(64.15% + 2.173px)", "calc(64.15% + 1.976px)")}>
              <use href="#figma-derived-880" fill="#29241f" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="711:1562" style={fixedLayer(275, "max-content", {
        boxShadow: "inset 0 -1px 0 0 #ebe4dc",
        overflow: "hidden",
        display: "flex",
        padding: "0 20px 1px",
        boxSizing: "border-box",
        alignItems: "center",
        gap: 20
      })}>
      <Part data-figma-id="711:1498" boxShadow="inset 0 -3px 0 0 #ed6047" color="#bd412d" text="Pollo" />
      <Part data-figma-id="711:1508" boxShadow="inset 0 -3px 0 0 #ffffff" color="#82776e" text="Carne" />
      <Part data-figma-id="711:1512" boxShadow="inset 0 -3px 0 0 #ffffff" color="#82776e" text="Pescado" />
      <div data-figma-id="711:1504" style={absoluteLayer(20, 0, "max-content", 39, {
          borderBottom: "3px solid #ffffff",
          ...col2
        })} />
    </div>
    <div data-figma-id="425:2953" style={{
        ...col1,
        minWidth: 0,
        overflow: "hidden",
        padding: "16px 20px 9px",
        boxSizing: "border-box",
        position: "relative",
        height: 54,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <span data-figma-id="425:2954" style={{
          ...font_Manrope,
          whiteSpace: "pre",
          fontSize: 21,
          fontWeight: 800,
          lineHeight: "29px",
          letterSpacing: "-0.5px",
          position: "relative",
          flexShrink: 0
        }}>
        {"Pollo"}
      </span>
    </div>
    <div data-figma-id="711:1776" style={fixedLayer(402, 278, row2)}>
      <div data-figma-id="711:1573" style={absoluteLayer(208, 4, 176.078, 241, {
          ...surface2,
          ...col3
        })}>
        <div data-figma-id="707:1855" style={fixedLayer(179, 165, {
            ...col1,
            overflow: "hidden"
          })}>
          <div data-figma-id="707:1856" style={{
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/80082932-621a-4649-80a5-1e9c95b93d1b.png\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 14,
              minWidth: 0,
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="707:1857" style={absoluteLayer(10, 11, 34, 34, {
              ...surface1,
              borderRadius: 11,
              ...row3
            })}>
            <div data-figma-id="707:1858" style={fixedLayer(18, 18, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="707:1859" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                <use href="#figma-derived-871" fill="#ed6047" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="885:3174" style={{
            ...col4,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="885:3676" style={{
              ...col1,
              minWidth: 0,
              gap: 2,
              position: "relative",
              height: 37.991,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1860" style={{
                ...font_Manrope_14,
                ...layout3,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Pollo Familiar"}
            </span>
            <span data-figma-id="707:1861" style={{
                ...font_Inter_16,
                ...row4,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"$ 58.000"}
            </span>
          </div>
          <div data-figma-id="707:1862" style={{
              ...col5,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1863" style={{
                ...font_Inter,
                ...text2,
                whiteSpace: "pre",
                position: "absolute",
                left: 0,
                top: 0,
                width: 163
              }}>
              {"Pollo Familiar · Papas Fritas"}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="711:1572" style={absoluteLayer(10, 4, 179, 245, {
          ...surface2,
          ...col3
        })}>
        <div data-figma-id="707:1855~2" style={fixedLayer(179, 165, {
            ...col1,
            overflow: "hidden"
          })}>
          <div data-figma-id="707:1856~2" style={{
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/5645e025-9a45-4a10-ab41-4929edd53dd7.png\")",
              backgroundSize: "118.845% 119.183%",
              backgroundPosition: "41.973% -4.258%",
              backgroundRepeat: "no-repeat",
              borderRadius: 14,
              minWidth: 0,
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="707:1857~2" style={absoluteLayer(10, 11, 34, 34, {
              ...surface1,
              borderRadius: 11,
              ...row3
            })}>
            <div data-figma-id="707:1858~2" style={fixedLayer(18, 18, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="707:1859~2" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                <use href="#figma-derived-871" fill="#ed6047" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="885:3174~2" style={{
            ...col4,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="885:3676~2" style={{
              ...col1,
              minWidth: 0,
              gap: 2,
              position: "relative",
              height: 35.302,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1860~2" style={{
                ...font_Manrope_14,
                ...layout3,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Pollo Grillet o Chuleta"}
            </span>
            <span data-figma-id="707:1861~2" style={{
                ...font_Inter,
                ...text1,
                color: "#29241f",
                whiteSpace: "pre",
                fontWeight: 600,
                ...row4,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"$ 29.000"}
            </span>
          </div>
          <div data-figma-id="707:1862~2" style={{
              ...col5,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1863~2" style={absoluteLayer(0, 0, 163, 30, {
                ...font_Inter,
                ...text2,
                whiteSpace: "normal"
              })}>
              <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "15px",
                  left: 0,
                  textAlign: "left"
                }}>{"Pollo Grillet o Chuleta · Papas \nFritas · Arroz · Ensalada"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="711:1887" style={fixedLayer(402, 267, row2)}>
      <div data-figma-id="711:1573~2" style={absoluteLayer(208, 4, 176.078, 241, {
          ...surface2,
          ...col3
        })}>
        <div data-figma-id="707:1855~3" style={fixedLayer(179, 165, {
            ...col1,
            overflow: "hidden"
          })}>
          <div data-figma-id="707:1856~3" style={{
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/25d0d48d-b673-4b9d-8761-d817e8d6258f.png\")",
              backgroundSize: "129% 128.073%",
              backgroundPosition: "71.654% 48.233%",
              backgroundRepeat: "no-repeat",
              borderRadius: 14,
              minWidth: 0,
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="707:1857~3" style={absoluteLayer(10, 11, 34, 34, {
              ...surface1,
              borderRadius: 11,
              ...row3
            })}>
            <div data-figma-id="707:1858~3" style={fixedLayer(18, 18, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="707:1859~3" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                <use href="#figma-derived-871" fill="#ed6047" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="885:3174~3" style={{
            ...col4,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="885:3676~3" style={{
              ...col1,
              minWidth: 0,
              gap: 2,
              position: "relative",
              height: 37.991,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1860~3" style={{
                ...font_Manrope_14,
                ...layout3,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Bandeja Broaster"}
            </span>
            <span data-figma-id="707:1861~3" style={{
                ...font_Inter_16,
                ...row4,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"$ 20.000"}
            </span>
          </div>
          <div data-figma-id="707:1862~3" style={{
              ...col5,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1863~3" style={absoluteLayer(0, 0, 163, 30, {
                ...font_Inter,
                ...text2,
                whiteSpace: "normal"
              })}>
              <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "15px",
                  left: 0,
                  textAlign: "left"
                }}>{"Dos presas, ensalada, arroz y \npapa a la francesa"}</span>
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="711:1572~2" style={absoluteLayer(10, 4, 179, 245, {
          ...surface2,
          ...col3
        })}>
        <div data-figma-id="707:1855~4" style={fixedLayer(179, 165, {
            ...col1,
            overflow: "hidden"
          })}>
          <div data-figma-id="707:1856~4" style={{
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/584a31d4-ea01-4005-b4b9-b0665921a4dc.png\")",
              backgroundSize: "126.346% 135%",
              backgroundPosition: "37.315% 30.734%",
              backgroundRepeat: "no-repeat",
              borderRadius: 14,
              minWidth: 0,
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
          <div data-figma-id="707:1857~4" style={absoluteLayer(10, 11, 34, 34, {
              ...surface1,
              borderRadius: 11,
              ...row3
            })}>
            <div data-figma-id="707:1858~4" style={fixedLayer(18, 18, {
                overflow: "hidden"
              })}>
              <svg data-figma-id="707:1859~4" viewBox="-0.9 -0.9 12.301 12.301" preserveAspectRatio="none" style={absoluteLayer("calc(20.83% - 0.9px)", "calc(20.83% - 0.9px)", "calc(58.34% + 1.8px)", "calc(58.34% + 1.8px)")}>
                <use href="#figma-derived-871" fill="#ed6047" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="885:3174~4" style={{
            ...col4,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="885:3676~4" style={{
              ...col1,
              minWidth: 0,
              gap: 2,
              position: "relative",
              height: 35.302,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1860~4" style={{
                ...font_Manrope_14,
                ...layout3,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Arroz con Pollo"}
            </span>
            <span data-figma-id="707:1861~4" style={{
                ...font_Inter,
                ...text1,
                color: "#29241f",
                whiteSpace: "pre",
                fontWeight: 600,
                ...row4,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"$ 24.000"}
            </span>
          </div>
          <div data-figma-id="707:1862~4" style={{
              ...col5,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="707:1863~4" style={absoluteLayer(0, 0, 163, 30, {
                ...font_Inter,
                ...text2,
                whiteSpace: "normal"
              })}>
              <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "15px",
                  left: 0,
                  textAlign: "left"
                }}>{"Arroz con pollo· Papas Fritas · \nArroz · Rodajas de Tomate"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="425:3033" style={{
        background: "#ffffff",
        boxShadow: "inset 0 1px 0 0 #ebe4dc",
        ...col1,
        minWidth: 0,
        overflow: "hidden",
        padding: "12px 20px 0",
        boxSizing: "border-box",
        gap: 8,
        position: "sticky",
        bottom: 0,
        zIndex: 40,
        height: 98,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
      <div data-figma-id="425:3034" style={{
          background: "#ed6047",
          borderRadius: 14,
          ...row1,
          minWidth: 0,
          overflow: "hidden",
          padding: "0 18px",
          boxSizing: "border-box",
          alignItems: "center",
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="425:3035" style={fixedLayer(28, 28, {
            background: "rgba(255, 255, 255, 0.149)",
            borderRadius: 8,
            ...row3
          })}>
          <span data-figma-id="425:3036" style={{
              ...font_Inter,
              ...text1,
              ...text4,
              position: "relative",
              flexShrink: 0
            }}>
            {"0"}
          </span>
        </div>
        <span data-figma-id="425:3037" style={{
            ...font_Inter,
            ...text4,
            fontSize: 15,
            lineHeight: "18.153px",
            position: "relative",
            flexShrink: 0
          }}>
          {"Tu carrito está vacío"}
        </span>
        <span data-figma-id="425:3038" style={{
            ...font_Inter,
            ...text4,
            fontSize: 15,
            lineHeight: "18.153px",
            position: "relative",
            flexShrink: 0
          }}>
          {"$ 0"}
        </span>
      </div>
      <div data-figma-id="425:3039" style={{
          ...col1,
          ...layout1,
          minWidth: 0,
          overflow: "hidden",
          position: "relative",
          height: 24,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="425:3040" style={fixedLayer(126, 4, {
            background: "#29241f",
            borderRadius: 4
          })} />
      </div>
    </div>
  </div>
  </>;
}
export default PolloWhopperKing;