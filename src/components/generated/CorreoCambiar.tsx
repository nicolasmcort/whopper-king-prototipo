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
const font_Manrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const surface1: React.CSSProperties = {
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const text2: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  minHeight: 0
};
const col2: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const layout2: React.CSSProperties = {
  minWidth: 0,
  overflow: "hidden"
};
const text1: React.CSSProperties = {
  color: "rgba(0, 0, 0, 0.5)",
  whiteSpace: "pre",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const col1: React.CSSProperties = {
  ...col2,
  alignItems: "flex-end",
  gap: 6
};
const surface2: React.CSSProperties = {
  ...surface1,
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #e0bfb9",
  borderRadius: 12
};
const row2: React.CSSProperties = {
  ...row1,
  padding: "0 0 0 14px",
  boxSizing: "border-box"
};
const font_Manrope_12: React.CSSProperties = {
  ...font_Manrope,
  ...text2,
  color: "#201d1d",
  whiteSpace: "pre",
  fontSize: 12,
  lineHeight: "18px"
};
const font_Manrope_13: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  fontSize: 13,
  lineHeight: "18px"
};
const font_Manrope_25: React.CSSProperties = {
  ...font_Manrope,
  ...text1,
  fontSize: 25,
  lineHeight: "34.15px"
};
function Container(p: {
  "data-figma-id": string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={{
    ...row1,
    ...layout1,
    position: "relative",
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    alignSelf: "stretch"
  }}>
      <div data-figma-id="802:4237" style={{
      ...surface2,
      ...layout2,
      position: "relative",
      height: 44,
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
        <span data-figma-id="802:4238" style={{
        ...font_Manrope_25,
        ...row1,
        position: "absolute",
        left: 9,
        top: 5,
        width: 16
      }}>
          {"X"}
        </span>
      </div>
    </div>;
}
export function CorreoCambiar() {
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
        <path id="figma-vector-457" d="M0 0L402 0L402 940L0 940L0 0Z" fillRule="nonzero" />
        <path id="figma-vector-927" d="M1.667 13.333C1.208 13.333 0.816 13.17 0.49 12.844C0.163 12.517 0 12.125 0 11.667L0 1.667C0 1.208 0.163 0.816 0.49 0.49C0.816 0.163 1.208 0 1.667 0L15 0C15.458 0 15.851 0.163 16.177 0.49C16.503 0.816 16.667 1.208 16.667 1.667L16.667 11.667C16.667 12.125 16.503 12.517 16.177 12.844C15.851 13.17 15.458 13.333 15 13.333L1.667 13.333ZM8.333 7.5L1.667 3.333L1.667 11.667L15 11.667L15 3.333L8.333 7.5ZM8.333 5.833L15 1.667L1.667 1.667L8.333 5.833Z" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="802:4158" style={rootLayer(402, 862, {
      background: "linear-gradient(#e5e7eb, #e5e7eb)",
      backgroundColor: "#ffffff",
      aspectRatio: "402 / 862"
    })}>
    <div data-figma-id="802:4159" style={absoluteLayer("calc(50% + -201px)", "calc(50% + -431px)", 402, 862, {
        background: "#fffcf8",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        overflow: "hidden"
      })}>
      <div data-figma-id="802:4160" style={{
          ...row1,
          padding: "12px 24px 0",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "absolute",
          left: 0,
          top: 0,
          height: 44,
          right: 0
        }}>
        <div data-figma-id="802:4161" style={fixedLayer("max-content", 17, col2)}>
          <span data-figma-id="802:4162" style={{
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
        <div data-figma-id="802:4163" style={fixedLayer(68, "max-content", {
            ...row1,
            gap: 6
          })}>
          <div data-figma-id="802:4164" style={fixedLayer(17, 11, {
              overflow: "hidden"
            })}>
            <svg data-figma-id="802:4165" viewBox="0 0 14 8" preserveAspectRatio="none" style={absoluteLayer("5.882%", "13.636%", "82.353%", "72.727%")}>
              <use href="#figma-vector-172" fill="#29241f" />
            </svg>
          </div>
          <div data-figma-id="802:4166" style={fixedLayer(15, 11, {
              overflow: "hidden"
            })}>
            <div data-figma-id="802:4167" style={absoluteLayer("3.556%", "6.667%", "92.889%", "83.333%")} />
          </div>
          <div data-figma-id="802:4168" style={fixedLayer(24, 11, {
              overflow: "hidden"
            })}>
            <div data-figma-id="802:4169" style={absoluteLayer("2.083%", "4.545%", "83.333%", "90.909%")} />
            <div data-figma-id="802:4170" style={absoluteLayer("8.333%", "18.182%", "62.5%", "63.636%")} />
            <div data-figma-id="802:4171" style={absoluteLayer("91.667%", "31.818%", "4.167%", "36.364%")} />
          </div>
        </div>
      </div>
      <div data-figma-id="802:4172" style={{
          boxShadow: "inset 0 -1px 0 0 rgba(0, 0, 0, 0)",
          ...row1,
          padding: "0 20px 1px",
          boxSizing: "border-box",
          gap: 12,
          position: "absolute",
          left: 0,
          top: 44,
          height: 56,
          right: 0
        }}>
        <div data-figma-id="802:4173" style={fixedLayer(261, 27, col2)}>
          <span data-figma-id="802:4174" style={{
              ...font_Manrope,
              color: "#29241f",
              whiteSpace: "pre",
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
      <div data-figma-id="802:4175" style={absoluteLayer(0, 100, 402, 461, {
          overflow: "hidden",
          display: "flex",
          padding: "26px 30px 39px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 18
        })}>
        <div data-figma-id="802:4176" style={{
            ...layout1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            position: "relative",
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="802:4177" style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              height: 330,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="802:4178" style={fixedLayer(342, 82, col1)}>
              <div data-figma-id="802:4179" style={fixedLayer(340, 18, col2)}>
                <span data-figma-id="802:4180" style={{
                    ...font_Manrope_12,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Nombre Completo"}
                </span>
              </div>
              <div data-figma-id="802:4181" style={{
                  ...row1,
                  minWidth: 0,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="802:4182" style={{
                    ...surface2,
                    ...layout2,
                    position: "relative",
                    height: 44,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="802:4183" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                      overflow: "hidden"
                    })}>
                    <span data-figma-id="802:4184" style={{
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
                <div data-figma-id="802:4185" style={{
                    ...row2,
                    position: "absolute",
                    left: 2,
                    top: -0.25,
                    width: 56.905,
                    bottom: 0.25
                  }}>
                  <svg data-figma-id="802:4186" viewBox="0 0 13.518 13.661" preserveAspectRatio="none" style={fixedLayer(13.518, 13.661, {
                      marginLeft: 0.027,
                      marginRight: 0.027,
                      marginTop: 0.027,
                      marginBottom: 0.027,
                      transformOrigin: "center",
                      transform: "matrix(1, 0.004, -0.004, 1, 0, 0)"
                    })}>
                    <use href="#figma-vector-432" fill="#ed6047" />
                  </svg>
                  <div data-figma-id="802:4187" style={fixedLayer("max-content", 13.333, col2)} />
                  <div data-figma-id="802:4188" style={fixedLayer(16, 16, {
                      overflow: "hidden"
                    })} />
                </div>
              </div>
            </div>
            <div data-figma-id="802:4189" style={fixedLayer(342, 82, col1)}>
              <div data-figma-id="802:4190" style={fixedLayer(340, 18, col2)}>
                <span data-figma-id="802:4191" style={{
                    ...font_Manrope_12,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Correo electrónico (opcional)"}
                </span>
              </div>
              <div data-figma-id="802:4192" style={{
                  ...row1,
                  minWidth: 0,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="802:4193" style={{
                    ...surface2,
                    ...layout2,
                    position: "relative",
                    height: 44,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="802:4194" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                      overflow: "hidden"
                    })}>
                    <span data-figma-id="802:4195" style={{
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
                <div data-figma-id="802:4196" style={{
                    ...row2,
                    position: "absolute",
                    left: 2,
                    top: -0.25,
                    width: 30.667,
                    bottom: 0.25
                  }}>
                  <svg data-figma-id="802:4197" viewBox="0 0 16.667 13.333" preserveAspectRatio="none" style={fixedLayer(16.667, 13.333)}>
                    <use href="#figma-vector-441" fill="#ed6047" />
                  </svg>
                </div>
              </div>
            </div>
            <div data-figma-id="802:4198" style={fixedLayer(342, 82, col1)}>
              <div data-figma-id="802:4199" style={fixedLayer(340, 18, col2)}>
                <span data-figma-id="802:4200" style={{
                    ...font_Manrope_12,
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Telefóno"}
                </span>
              </div>
              <div data-figma-id="802:4201" style={{
                  ...row1,
                  minWidth: 0,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="802:4202" style={{
                    ...surface2,
                    ...layout2,
                    position: "relative",
                    height: 44,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="802:4203" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                      overflow: "hidden"
                    })}>
                    <span data-figma-id="802:4204" style={{
                        ...font_Manrope_13,
                        ...row1,
                        position: "absolute",
                        left: 6,
                        top: 2.75,
                        width: 24
                      }}>
                      {"+57"}
                    </span>
                    <span data-figma-id="802:4205" style={{
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
                <div data-figma-id="802:4206" style={{
                    ...row2,
                    position: "absolute",
                    left: 2,
                    top: -0.25,
                    width: 46.5,
                    bottom: 0.25
                  }}>
                  <div data-figma-id="802:4207" style={fixedLayer(16.5, 16.5)} />
                  <div data-figma-id="802:4208" style={fixedLayer(16, 16, {
                      overflow: "hidden"
                    })} />
                </div>
              </div>
            </div>
            <div data-figma-id="802:4209" style={fixedLayer(342, 84, {
                ...col1,
                padding: "0 0 8px",
                boxSizing: "border-box"
              })}>
              <div data-figma-id="802:4210" style={fixedLayer(340, "max-content", {
                  ...row1,
                  justifyContent: "space-between"
                })}>
                <div data-figma-id="802:4211" style={fixedLayer("max-content", 18, col2)}>
                  <span data-figma-id="802:4212" style={{
                      ...font_Manrope_12,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Contraseña"}
                  </span>
                </div>
              </div>
              <div data-figma-id="802:4213" style={{
                  ...row1,
                  minWidth: 0,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="802:4214" style={{
                    ...surface2,
                    ...layout2,
                    position: "relative",
                    height: 44,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0
                  }}>
                  <div data-figma-id="802:4215" style={absoluteLayer(41, "calc(50% + -12.25px)", 286, 24, {
                      overflow: "hidden"
                    })}>
                    <span data-figma-id="802:4216" style={{
                        ...font_Manrope_13,
                        ...row1,
                        position: "absolute",
                        left: 5,
                        top: 3.25,
                        width: 276
                      }}>
                      {"Minimo 8 caracteres"}
                    </span>
                    <div data-figma-id="802:4217" style={absoluteLayer("96.63%", "41.319%", "1.399%", "16.667%")} />
                    <svg data-figma-id="802:4218" viewBox="-0.6 -0.6 13.923 10.533" preserveAspectRatio="none" style={absoluteLayer("calc(95.105% - 0.6px)", "calc(30.208% - 0.6px)", "calc(4.448% + 1.201px)", "calc(38.889% + 1.2px)")}>
                      <use href="#figma-vector-452" fill="transparent" stroke="#4a4545" strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div data-figma-id="802:4219" style={{
                    ...row2,
                    position: "absolute",
                    left: 2,
                    top: -0.25,
                    width: 30,
                    bottom: 0.25
                  }}>
                  <svg data-figma-id="802:4220" viewBox="-0.4 -0.453 11.467 12.989" preserveAspectRatio="none" style={fixedLayer(17.2, 17.2, {
                      left: -0.6,
                      top: -0.6
                    })}>
                    <path d="M1.333 12.083L9.333 12.083C10.069 12.083 10.667 11.486 10.667 10.75L10.667 6.75C10.667 6.014 10.069 5.417 9.333 5.417L1.333 5.417C0.597 5.417 0 6.014 0 6.75L0 10.75C0 11.486 0.597 12.083 1.333 12.083ZM5.167 0C3.695 0 2.5 1.195 2.5 2.667C2.5 3.708 2.5 4.292 2.5 5.333M5.167 0C6.983 0 8.109 1.195 8.109 2.667L8.109 5.333" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="802:4221" style={{
            background: "#ed6047",
            borderRadius: 12,
            filter: "drop-shadow(0px 6px 16px rgba(237, 96, 71, 0.35))",
            ...row1,
            minWidth: 0,
            justifyContent: "center",
            gap: 8,
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="802:4222" style={fixedLayer("max-content", 21, {
              ...row1,
              flexDirection: "column"
            })}>
            <span data-figma-id="802:4223" style={{
                ...font_Manrope,
                ...text2,
                color: "#ffffff",
                whiteSpace: "pre",
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
      <svg data-figma-id="802:4224" viewBox="0 0 402 940" preserveAspectRatio="none" style={{
          backdropFilter: "blur(1px)",
          position: "absolute",
          left: 0,
          top: -1,
          right: 0,
          bottom: 0
        }}>
        <use href="#figma-vector-457" fill="rgba(0, 0, 0, 0.15)" />
      </svg>
      <div data-figma-id="802:4225" style={{
          background: "#fffcf8",
          boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.32)",
          borderRadius: "24px 24px 0 0",
          filter: "drop-shadow(0px -12px 40px rgba(0, 0, 0, 0.18))",
          display: "flex",
          padding: 1,
          boxSizing: "border-box",
          flexDirection: "column",
          position: "absolute",
          left: "calc(50% + -199px)",
          width: 398,
          height: 410,
          bottom: 0
        }}>
        <div data-figma-id="802:4226" style={{
            minWidth: 0,
            display: "flex",
            padding: "14px 0 8px",
            boxSizing: "border-box",
            justifyContent: "center",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="802:4227" style={fixedLayer(40, 4, {
              background: "#d1c7bd",
              borderRadius: 9999
            })} />
        </div>
        <div data-figma-id="802:4228" style={{
            ...row1,
            minWidth: 0,
            padding: "20px 24px 28px",
            boxSizing: "border-box",
            flexDirection: "column",
            position: "relative",
            height: 366,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="802:4229" style={fixedLayer(64, 84, {
              display: "flex",
              padding: "0 0 20px",
              boxSizing: "border-box",
              flexDirection: "column"
            })}>
            <div data-figma-id="802:4288" style={fixedLayer(64, 64, {
                background: "#f5efe7",
                borderRadius: 9999
              })}>
              <div data-figma-id="802:4289" style={absoluteLayer(18, 22, 28, 20, {
                  overflow: "hidden"
                })}>
                <svg data-figma-id="802:4290" viewBox="0 0 16.667 13.333" preserveAspectRatio="none" style={absoluteLayer(1, 0, 25, 20)}>
                  <use href="#figma-vector-927" fill="#ed6047" />
                </svg>
              </div>
            </div>
          </div>
          <div data-figma-id="802:4233" style={fixedLayer(306, 54)}>
            <span data-figma-id="802:4234" style={absoluteLayer("calc(50% + -174px)", "calc(50% + -39px)", 347, 55, {
                ...font_Manrope,
                ...text2,
                color: "#29241f",
                whiteSpace: "normal",
                fontSize: 22,
                lineHeight: "30.052px",
                letterSpacing: "-0.55px",
                textAlign: "center"
              })}>
              <span data-figma-text-line="0" style={{
                  position: "absolute",
                  left: "calc(50% + 2.202px)",
                  transform: "translateX(-50%)",
                  top: 0,
                  width: 290.495,
                  height: 27.5,
                  display: "block",
                  whiteSpace: "pre",
                  lineHeight: "27.5px",
                  textAlign: "left"
                }}>{"Con el código que recibe por "}</span>
              <span data-figma-text-line="1" style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: 27.5,
                  width: 296.549,
                  height: 27.5,
                  display: "block",
                  whiteSpace: "pre",
                  lineHeight: "27.5px",
                  textAlign: "left"
                }}>{"correo, digilencia lo siguiente"}</span>
            </span>
          </div>
          <div data-figma-id="802:4235" style={fixedLayer(239, 76, {
              overflow: "hidden",
              display: "flex",
              padding: "8px 7px 24px 3px",
              boxSizing: "border-box",
              gap: 5
            })}>
            <Container data-figma-id="802:4236" />
            <Container data-figma-id="802:4239" />
            <Container data-figma-id="802:4242" />
            <Container data-figma-id="802:4245" />
            <Container data-figma-id="802:4248" />
            <Container data-figma-id="802:4251" />
          </div>
          <div data-figma-id="802:4254" style={{
              ...surface1,
              background: "#ed6047",
              borderRadius: 16,
              ...row1,
              minWidth: 0,
              minHeight: 52,
              padding: "14px 0",
              boxSizing: "border-box",
              justifyContent: "center",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="802:4255" style={{
                ...font_Manrope,
                ...text2,
                color: "#ffffff",
                whiteSpace: "pre",
                fontSize: 16,
                lineHeight: "24px",
                textAlign: "center",
                ...row1,
                justifyContent: "center",
                position: "relative",
                flexShrink: 0
              }}>
              {"Confirmar"}
            </span>
          </div>
          <div data-figma-id="802:4256" style={{
              minWidth: 0,
              minHeight: 52,
              display: "flex",
              padding: "8px 0 0",
              boxSizing: "border-box",
              flexDirection: "column",
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="802:4257" style={{
                ...row1,
                minWidth: 0,
                minHeight: 44,
                padding: "9.75px 0 11.25px",
                boxSizing: "border-box",
                justifyContent: "center",
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="802:4258" style={{
                  color: "#82776e",
                  whiteSpace: "pre",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  fontVariationSettings: "\"wght\" 500",
                  lineHeight: "22.5px",
                  textAlign: "center",
                  ...row1,
                  justifyContent: "center",
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Cancelar"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="802:4259" style={{
            minWidth: 0,
            display: "flex",
            padding: "4px 0 8px",
            boxSizing: "border-box",
            justifyContent: "center",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="802:4260" style={fixedLayer(144, 4, {
              opacity: 0.9,
              background: "#1c1917",
              borderRadius: 9999
            })} />
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default CorreoCambiar;