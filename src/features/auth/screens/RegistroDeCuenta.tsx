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
  ClientTrashIcon,
  ClientChevronRightIcon,
  ClientAlertIcon,
  ClientCheckIcon,
  ClientEyeIcon,
  ClientShieldIcon,
  ClientHeadsetIcon,
  ClientHomeIcon,
  ClientUserIcon,
  ClientPhoneCallIcon,
  ClientSearchIcon,
  ClientHeartIcon,
  ClientLogoutIcon,
  ClientCloseIcon,
  ClientEditIcon,
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
const font_Manrope: React.CSSProperties = {
  whiteSpace: "pre",
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text1: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const text2: React.CSSProperties = {
  fontSize: 16,
  lineHeight: "21.856px"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const surface1: React.CSSProperties = {
  background: "#fffcf8",
  boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)"
};
const col2: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const surface2: React.CSSProperties = {
  background: "#ed6047",
  borderRadius: 12,
  filter: "drop-shadow(0px 6px 16px rgba(237, 96, 71, 0.35))"
};
const col1: React.CSSProperties = {
  ...col2,
  alignItems: "flex-end",
  gap: 6
};
const surface3: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #e0bfb9",
  borderRadius: 12,
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const row3: React.CSSProperties = {
  ...row1,
  padding: "0 0 0 14px",
  boxSizing: "border-box"
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0,
  padding: "12px 24px 0",
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const font_Inter_14: React.CSSProperties = {
  color: "#29241f",
  whiteSpace: "pre",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 14,
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600",
  lineHeight: "17px"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  ...text2,
  color: "#201d1d"
};
const font_Manrope_13: React.CSSProperties = {
  ...font_Manrope,
  color: "rgba(0, 0, 0, 0.5)",
  fontSize: 13,
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400",
  lineHeight: "18px"
};
export function RegistroDeCuenta() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-172" d="M0 8L2 8L2 6L0 6L0 8ZM4 8L6 8L6 4L4 4L4 8ZM8 8L10 8L10 2L8 2L8 8ZM12 8L14 8L14 0L12 0L12 8Z" fillRule="nonzero" />
        <path id="figma-vector-432" d="M6.667 6.667C5.75 6.667 4.965 6.34 4.313 5.688C3.66 5.035 3.333 4.25 3.333 3.333C3.333 2.417 3.66 1.632 4.313 0.979C4.965 0.326 5.75 0 6.667 0C7.583 0 8.368 0.326 9.021 0.979C9.674 1.632 10 2.417 10 3.333C10 4.25 9.674 5.035 9.021 5.688C8.368 6.34 7.583 6.667 6.667 6.667L6.667 6.667M0 13.333L0 11C0 10.528 0.122 10.094 0.365 9.698C0.608 9.302 0.931 9 1.333 8.792C2.194 8.361 3.069 8.038 3.958 7.823C4.847 7.608 5.75 7.5 6.667 7.5C7.583 7.5 8.486 7.608 9.375 7.823C10.264 8.038 11.139 8.361 12 8.792C12.403 9 12.726 9.302 12.969 9.698C13.212 10.094 13.333 10.528 13.333 11L13.333 13.333L0 13.333L0 13.333M1.667 11.667L11.667 11.667L11.667 11C11.667 10.847 11.628 10.708 11.552 10.583C11.476 10.458 11.375 10.361 11.25 10.292C10.5 9.917 9.743 9.635 8.979 9.448C8.215 9.26 7.444 9.167 6.667 9.167C5.889 9.167 5.118 9.26 4.354 9.448C3.59 9.635 2.833 9.917 2.083 10.292C1.958 10.361 1.858 10.458 1.781 10.583C1.705 10.708 1.667 10.847 1.667 11L1.667 11.667L1.667 11.667M6.667 5C7.125 5 7.517 4.837 7.844 4.51C8.17 4.184 8.333 3.792 8.333 3.333C8.333 2.875 8.17 2.483 7.844 2.156C7.517 1.83 7.125 1.667 6.667 1.667C6.208 1.667 5.816 1.83 5.49 2.156C5.163 2.483 5 2.875 5 3.333C5 3.792 5.163 4.184 5.49 4.51C5.816 4.837 6.208 5 6.667 5L6.667 5M6.667 3.333L6.667 3.333L6.667 3.333L6.667 3.333L6.667 3.333L6.667 3.333L6.667 3.333L6.667 3.333L6.667 3.333L6.667 3.333M6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667L6.667 11.667" fillRule="nonzero" />
        <path id="figma-vector-441" d="M1.667 13.333C1.208 13.333 0.816 13.17 0.49 12.844C0.163 12.517 0 12.125 0 11.667L0 1.667C0 1.208 0.163 0.816 0.49 0.49C0.816 0.163 1.208 0 1.667 0L15 0C15.458 0 15.851 0.163 16.177 0.49C16.503 0.816 16.667 1.208 16.667 1.667L16.667 11.667C16.667 12.125 16.503 12.517 16.177 12.844C15.851 13.17 15.458 13.333 15 13.333L1.667 13.333L1.667 13.333M8.333 7.5L1.667 3.333L1.667 11.667L1.667 11.667L1.667 11.667L15 11.667L15 11.667L15 11.667L15 3.333L8.333 7.5L8.333 7.5M8.333 5.833L15 1.667L1.667 1.667L8.333 5.833L8.333 5.833M1.667 3.333L1.667 1.667L1.667 1.667L1.667 3.333L1.667 11.667L1.667 11.667L1.667 11.667L1.667 11.667L1.667 11.667L1.667 11.667L1.667 3.333L1.667 3.333" fillRule="nonzero" />
        <path id="figma-vector-452" d="M0 4.667C0.849 1.962 3.377 0 6.361 0C9.347 0 11.873 1.962 12.723 4.667C11.873 7.371 9.347 9.333 6.361 9.333C3.377 9.333 0.849 7.371 0 4.667Z" fillRule="nonzero" />
        <path id="figma-vector-453" d="M1.333 12.083L9.333 12.083C10.069 12.083 10.667 11.486 10.667 10.75L10.667 6.75C10.667 6.014 10.069 5.417 9.333 5.417L1.333 5.417C0.597 5.417 0 6.014 0 6.75L0 10.75C0 11.486 0.597 12.083 1.333 12.083ZM5.167 0C3.695 0 2.5 1.195 2.5 2.667C2.5 3.708 2.5 4.292 2.5 5.333M5.167 0C6.983 0 8.109 1.195 8.109 2.667L8.109 5.333" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="342:1808" style={rootLayer(402, 862, {
      background: "linear-gradient(#e5e7eb, #e5e7eb)",
      backgroundColor: "#ffffff"
    })}>
    <div data-figma-id="342:1809" style={absoluteLayer("calc(50% + -201px)", "calc(50% + -431px)", 402, 862, {
        ...surface1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      })}>
      <div data-figma-id="342:1810" style={{
          ...row2,
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1811" style={fixedLayer("max-content", 17, col2)}>
          <span data-figma-id="342:1812" style={{
              ...font_Inter_14,
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
            {"9:41"}
          </span>
        </div>
        <div data-figma-id="342:1813" style={fixedLayer(68, "max-content", {
            ...row1,
            gap: 6
          })}>
          <div data-figma-id="342:1814" style={fixedLayer(17, 11, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:1815" viewBox="0 0 14 8" preserveAspectRatio="none" style={absoluteLayer("5.882%", "13.636%", "82.353%", "72.727%")}>
              <use href="#figma-vector-172" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="342:1816" style={fixedLayer(15, 11, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <svg viewBox="0 0 19 12" width="100%" height="100%" fill="none" aria-hidden><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#29241f"/><rect x="5" y="5.5" width="3" height="6.5" rx="0.5" fill="#29241f"/><rect x="10" y="3" width="3" height="9" rx="0.5" fill="#29241f"/><rect x="15" y="0.5" width="3" height="11.5" rx="0.5" fill="#29241f"/></svg>
          </div>
          <div data-figma-id="342:1818" style={fixedLayer(24, 11, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <svg viewBox="0 0 27 13" width="100%" height="100%" fill="none" aria-hidden><rect x="0.7" y="1.2" width="22.5" height="10.6" rx="2.2" stroke="#29241f" strokeWidth="1.3"/><rect x="2.4" y="2.9" width="17" height="7.2" rx="1.2" fill="#29241f"/><path d="M24.2 4.2h1.6a1.2 1.2 0 0 1 1.2 1.2v2.2a1.2 1.2 0 0 1-1.2 1.2h-1.6" stroke="#29241f" strokeWidth="1.3" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1822" style={{
          boxShadow: "inset 0 -1px 0 0 rgba(0, 0, 0, 0)",
          ...row1,
          minWidth: 0,
          padding: "0 20px 1px",
          boxSizing: "border-box",
          gap: 12,
          position: "relative",
          height: 56,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1823" style={fixedLayer(261, 27, col2)}>
          <span data-figma-id="342:1824" style={{
              ...font_Manrope,
              color: "#29241f",
              fontSize: 20,
              fontWeight: 800,
              fontVariationSettings: "\"wght\" 800",
              lineHeight: "27.32px",
              letterSpacing: "-0.4px",
              ...row1,
              minWidth: 0,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            {"Registro de cuenta"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:1825" style={absoluteLayer(29, 521, 342, 48, {
          ...surface2,
          ...row1,
          justifyContent: "center",
          gap: 8
        })}>
        <div data-figma-id="342:1826" style={fixedLayer("max-content", 21, {
            ...row1,
            flexDirection: "column"
          })}>
          <span data-figma-id="342:1827" style={{
              ...font_Manrope,
              ...text1,
              color: "#ffffff",
              fontSize: 14,
              lineHeight: "21px",
              textAlign: "center",
              ...row1,
              justifyContent: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"Registrar cuenta"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="342:1828" style={absoluteLayer("calc(50% + -201px)", "calc(50% + -431px)", 402, 862, {
        ...surface1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      })}>
      <div data-figma-id="342:1829" style={{
          ...row2,
          position: "relative",
          height: 44,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1830" style={fixedLayer("max-content", 17, col2)}>
          <span data-figma-id="342:1831" style={{
              ...font_Inter_14,
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
            {"9:41"}
          </span>
        </div>
        <div data-figma-id="342:1832" style={fixedLayer(68, "max-content", {
            ...row1,
            gap: 6
          })}>
          <div data-figma-id="342:1833" style={fixedLayer(17, 11, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="342:1834" viewBox="0 0 14 8" preserveAspectRatio="none" style={absoluteLayer("5.882%", "13.636%", "82.353%", "72.727%")}>
              <use href="#figma-vector-172" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="342:1835" style={fixedLayer(15, 11, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <svg viewBox="0 0 19 12" width="100%" height="100%" fill="none" aria-hidden><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#29241f"/><rect x="5" y="5.5" width="3" height="6.5" rx="0.5" fill="#29241f"/><rect x="10" y="3" width="3" height="9" rx="0.5" fill="#29241f"/><rect x="15" y="0.5" width="3" height="11.5" rx="0.5" fill="#29241f"/></svg>
          </div>
          <div data-figma-id="342:1837" style={fixedLayer(24, 11, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
            <svg viewBox="0 0 27 13" width="100%" height="100%" fill="none" aria-hidden><rect x="0.7" y="1.2" width="22.5" height="10.6" rx="2.2" stroke="#29241f" strokeWidth="1.3"/><rect x="2.4" y="2.9" width="17" height="7.2" rx="1.2" fill="#29241f"/><path d="M24.2 4.2h1.6a1.2 1.2 0 0 1 1.2 1.2v2.2a1.2 1.2 0 0 1-1.2 1.2h-1.6" stroke="#29241f" strokeWidth="1.3" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1841" style={fixedLayer(402, 52, {
          ...row1,
          minWidth: 0,
          minHeight: 52,
          padding: "12px 20px 4px",
          boxSizing: "border-box",
          gap: 12
        })}>
        <div data-figma-id="342:1842" style={fixedLayer(44, 40)}>
          <div data-figma-id="342:1843" style={{
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
        <div data-figma-id="342:1844" style={fixedLayer("max-content", 30, col2)}>
          <span data-figma-id="342:1845" style={{
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
            {"Registro de cuenta"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:1846" style={absoluteLayer(29, 521, 342, 48, {
          ...surface2,
          ...row1,
          justifyContent: "center",
          gap: 8
        })}>
        <div data-figma-id="342:1847" style={fixedLayer("max-content", 21, {
            ...row1,
            flexDirection: "column"
          })}>
          <span data-figma-id="342:1848" style={{
              ...font_Manrope,
              ...text1,
              ...text2,
              color: "#ffffff",
              textAlign: "center",
              ...row1,
              justifyContent: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"Registrar cuenta"}
          </span>
        </div>
      </div>
    </div>
    <div data-figma-id="342:1849" style={absoluteLayer(30, 84, 342, 456, {
        display: "flex",
        flexDirection: "column",
        gap: 12
      })}>
      <div data-figma-id="342:1850" style={{
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: 330,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1851" style={fixedLayer(342, 82, col1)}>
          <div data-figma-id="342:1852" style={fixedLayer(340, 18, col2)}>
            <span data-figma-id="342:1853" style={{
                ...font_Manrope_16,
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Nombre Completo"}
            </span>
          </div>
          <div data-figma-id="342:1854" style={{
              ...row1,
              minWidth: 0,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1855" style={{
                ...surface3,
                ...layout1,
                position: "relative",
                height: 44,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="342:1856" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                  overflow: "hidden"
                })}>
                <span data-figma-id="342:1857" style={{
                    ...font_Manrope_13,
                    ...row1,
                    position: "absolute",
                    left: 5,
                    top: 3.25,
                    width: 245
                  }}>
                  {"Ej: Laura Martínez"}
                </span>
              </div>
            </div>
            <div data-figma-id="342:1858" style={{
                ...row3,
                position: "absolute",
                left: 2,
                top: -0.25,
                width: 56.905,
                bottom: 0.25
              }}>
              <svg data-figma-id="342:1859" viewBox="0 0 13.518 13.661" preserveAspectRatio="none" style={fixedLayer(13.518, 13.661, {
                  marginLeft: 0.027,
                  marginRight: 0.027,
                  marginTop: 0.027,
                  marginBottom: 0.027,
                  transformOrigin: "center",
                  transform: "matrix(1, 0.004, -0.004, 1, 0, 0)"
                })}>
                <use href="#figma-vector-432" fill="#ed6047" />
              </svg>
              <div data-figma-id="342:1860" style={fixedLayer("max-content", 13.333, col2)} />
              <div data-figma-id="342:1861" style={fixedLayer(16, 16, {
                  overflow: "hidden"
                })} />
            </div>
          </div>
        </div>
        <div data-figma-id="342:1862" style={fixedLayer(342, 82, col1)}>
          <div data-figma-id="342:1863" style={fixedLayer(340, 18, col2)}>
            <span data-figma-id="342:1864" style={{
                ...font_Manrope_16,
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Correo electrónico"}
            </span>
          </div>
          <div data-figma-id="342:1865" style={{
              ...row1,
              minWidth: 0,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1866" style={{
                ...surface3,
                ...layout1,
                position: "relative",
                height: 44,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="342:1867" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                  overflow: "hidden"
                })}>
                <span data-figma-id="342:1868" style={{
                    ...font_Manrope_13,
                    ...row1,
                    position: "absolute",
                    left: 5,
                    top: 3.25,
                    width: 276
                  }}>
                  {"correo@gmail.com"}
                </span>
              </div>
            </div>
            <div data-figma-id="342:1869" style={{
                ...row3,
                position: "absolute",
                left: 2,
                top: 0,
                width: 42,
                bottom: 0
              }}>
              <svg data-figma-id="342:1870" viewBox="0 0 16.667 13.333" preserveAspectRatio="none" style={fixedLayer(16.667, 13.333)}>
                <use href="#figma-vector-441" fill="#ed6047" />
              </svg>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1871" style={fixedLayer(342, 82, col1)}>
          <div data-figma-id="342:1872" style={fixedLayer(340, 18, col2)}>
            <span data-figma-id="342:1873" style={{
                ...font_Manrope_16,
                ...row1,
                position: "relative",
                flexShrink: 0
              }}>
              {"Teléfono"}
            </span>
          </div>
          <div data-figma-id="342:1874" style={{
              ...row1,
              minWidth: 0,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1875" style={{
                ...surface3,
                ...layout1,
                position: "relative",
                height: 44,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="342:1876" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                  overflow: "hidden"
                })}>
                <span data-figma-id="342:1877" style={{
                    ...font_Manrope_13,
                    ...row1,
                    position: "absolute",
                    left: 6,
                    top: 2.75,
                    width: 24
                  }}>
                  {"+57"}
                </span>
                <span data-figma-id="342:1878" style={{
                    ...font_Manrope_13,
                    ...row1,
                    position: "absolute",
                    left: 37,
                    top: 2.75,
                    width: 141
                  }}>
                  {"300 000 000"}
                </span>
              </div>
            </div>
            <div data-figma-id="342:1879" style={{
                ...row3,
                position: "absolute",
                left: 2,
                top: -0.25,
                width: 46.5,
                bottom: 0.25
              }}>
              <div
                data-figma-id="342:1881"
                style={{
                  ...fixedLayer(16.5, 16.5),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ClientPhoneCallIcon size={16.5} color="#ed6047" />
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1882" style={fixedLayer(342, 84, {
            ...col1,
            padding: "0 0 8px",
            boxSizing: "border-box"
          })}>
          <div data-figma-id="342:1883" style={fixedLayer(340, "max-content", {
              ...row1,
              justifyContent: "space-between"
            })}>
            <div data-figma-id="342:1884" style={fixedLayer("max-content", 18, col2)}>
              <span data-figma-id="342:1885" style={{
                  ...font_Manrope_16,
                  ...row1,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Contraseña"}
              </span>
            </div>
          </div>
          <div data-figma-id="342:1886" style={{
              ...row1,
              minWidth: 0,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1887" style={{
                ...surface3,
                ...layout1,
                position: "relative",
                height: 44,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
              <div data-figma-id="342:1888" style={absoluteLayer(41, "calc(50% + -12px)", 256, 24, {
                  overflow: "hidden"
                })}>
                <span data-figma-id="342:1889" style={{
                    ...font_Manrope_13,
                    ...row1,
                    position: "absolute",
                    left: 5,
                    top: 3.25,
                    width: 276
                  }}>
                  {"Minimo 8 caracteres"}
                </span>
              </div>
              <div data-figma-id="342:1890" style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <ClientEyeIcon size={18} color="#82776e" />
              </div>
            </div>
            <div data-figma-id="342:1893" style={{
                ...row3,
                position: "absolute",
                left: 2,
                top: -0.25,
                width: 30,
                bottom: 0.25
              }}>
              <svg data-figma-id="342:1894" viewBox="-0.4 -0.453 11.467 12.989" preserveAspectRatio="none" style={fixedLayer(17.2, 17.2, {
                  left: -0.6,
                  top: -0.6
                })}>
                <path d="M1.333 12.083L9.333 12.083C10.069 12.083 10.667 11.486 10.667 10.75L10.667 6.75C10.667 6.014 10.069 5.417 9.333 5.417L1.333 5.417C0.597 5.417 0 6.014 0 6.75L0 10.75C0 11.486 0.597 12.083 1.333 12.083ZM5.167 0C3.695 0 2.5 1.195 2.5 2.667C2.5 3.708 2.5 4.292 2.5 5.333M5.167 0C6.983 0 8.109 1.195 8.109 2.667L8.109 5.333" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1895" style={fixedLayer(5, 3, {
          overflow: "hidden"
        })} />
    </div>
  </div>
  </>;
}
export default RegistroDeCuenta;