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
const font_Inter: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif"
};
const font_Manrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const text5: React.CSSProperties = {
  fontSize: 13,
  lineHeight: "19.5px"
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
  padding: "2px 0 0",
  boxSizing: "border-box"
};
const layout2: React.CSSProperties = {
  minWidth: 96,
  minHeight: 0
};
const row2: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700"
};
const text2: React.CSSProperties = {
  color: "#82776e",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text3: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 800,
  fontVariationSettings: "\"wght\" 800"
};
const text4: React.CSSProperties = {
  whiteSpace: "pre",
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const row1: React.CSSProperties = {
  ...row2,
  justifyContent: "space-between"
};
const row3: React.CSSProperties = {
  ...row2,
  justifyContent: "center"
};
const surface2: React.CSSProperties = {
  background: "#f3f4f6",
  borderRadius: 20,
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const col2: React.CSSProperties = {
  ...col1,
  minWidth: 0
};
const row4: React.CSSProperties = {
  ...row2,
  minWidth: 0
};
const row6: React.CSSProperties = {
  ...row2,
  justifyContent: "flex-end"
};
const row5: React.CSSProperties = {
  minWidth: 0,
  display: "flex",
  padding: 17,
  boxSizing: "border-box"
};
const col3: React.CSSProperties = {
  ...col2,
  padding: "0 12px 0 0",
  boxSizing: "border-box"
};
const col4: React.CSSProperties = {
  ...col2,
  padding: "1px 0 0",
  boxSizing: "border-box"
};
const col5: React.CSSProperties = {
  ...col1,
  ...layout2,
  alignItems: "flex-end"
};
const col6: React.CSSProperties = {
  ...col2,
  padding: "1.25px 0 0",
  boxSizing: "border-box"
};
const col7: React.CSSProperties = {
  ...col2,
  padding: "0 0 0.75px",
  boxSizing: "border-box"
};
const font_Inter_16: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  color: "#29241f",
  fontSize: 16,
  lineHeight: "20px"
};
const font_Manrope_16: React.CSSProperties = {
  ...text1,
  ...font_Manrope,
  color: "#29241f",
  fontSize: 16,
  lineHeight: "24px",
  textAlign: "right"
};
export function DescripciNTexana() {
  return <div data-figma-id="549:3162" style={rootLayer("100%", "max-content", {
    background: "linear-gradient(#e5e5e5, #e5e5e5)",
    backgroundColor: "#ffffff",
    minWidth: 0,
    display: "flex",
    justifyContent: "center"
  })}>
    <div data-figma-id="549:3163" style={{
      background: "#fffcf8",
      minWidth: 0,
      minHeight: 1023,
      maxWidth: 402,
      position: "relative",
      height: 1023.28,
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0
    }}>
      <div data-figma-id="549:3164" style={{
        background: "rgba(255, 255, 255, 0.002)",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }} />
      <div data-figma-id="549:3165" style={{
        ...row1,
        padding: "12px 20px",
        boxSizing: "border-box",
        position: "absolute",
        left: 0,
        top: 34.5,
        height: "max-content",
        right: 0
      }}>
        <div data-figma-id="549:3166" style={fixedLayer(176.78, "max-content", {
          display: "flex",
          alignItems: "center",
          gap: 14
        })}>
          <div data-figma-id="549:3167" style={fixedLayer(40, 40, {
            ...surface1,
            borderRadius: 9999,
            display: "flex",
            padding: 1,
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center"
          })}>
            <div data-figma-id="549:3168" style={fixedLayer(20, 20, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
              <ClientBackIcon size={20} color="#29241f" />
          </div>
          </div>
          <div data-figma-id="549:3171" style={fixedLayer("max-content", 41, col1)}>
            <div data-figma-id="549:3172" style={{
              ...col1,
              minWidth: 122.78,
              position: "relative",
              height: 23,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="549:3173" style={{
                ...text1,
                ...font_Manrope,
                color: "#29241f",
                fontSize: 18,
                lineHeight: "22.5px",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
                {"Whopper King"}
              </span>
            </div>
            <div data-figma-id="549:3174" style={{
              ...col1,
              minWidth: 122.78,
              position: "relative",
              height: 18,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="549:3175" style={{
                ...font_Inter,
                ...text2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: 12,
                lineHeight: "18px",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
                {"Hamburguesas"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="549:3176" aria-hidden="true" style={fixedLayer(40, 40, {
          visibility: "hidden",
          pointerEvents: "none"
        })} />
      </div>
      <div data-figma-id="549:3178" style={{
        ...col1,
        position: "absolute",
        left: 0,
        top: 99,
        height: 746.78,
        right: 0
      }}>
        <div data-figma-id="549:3179" style={{
          ...col1,
          minWidth: 0,
          padding: "4px 20px 0",
          boxSizing: "border-box",
          position: "relative",
          height: 214,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="549:3180" style={{
            ...surface2,
            ...col1,
            minWidth: 0,
            overflow: "hidden",
            justifyContent: "center",
            position: "relative",
            height: 210,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="554:4002" style={{
              ...surface2,
              ...col1,
              minWidth: 0,
              overflow: "hidden",
              justifyContent: "center",
              position: "relative",
              height: 210,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="554:4003" style={{
                background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/83ad0840-e0a8-4d29-bf61-31af1a7a6cc0.png\")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minWidth: 0,
                aspectRatio: "1200 / 896",
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
            </div>
          </div>
        </div>
        <div data-figma-id="549:3182" style={{
          ...col1,
          minWidth: 0,
          padding: "20px 0 0",
          boxSizing: "border-box",
          position: "relative",
          height: 110.78,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="549:3183" style={{
            ...col1,
            minWidth: 0,
            padding: "0 20px",
            boxSizing: "border-box",
            gap: 6.945,
            position: "relative",
            height: 90.78,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="549:3184" style={{
              minWidth: 0,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="549:3185" style={{
                ...font_Manrope,
                ...text3,
                color: "#29241f",
                fontSize: 28,
                lineHeight: "28px",
                letterSpacing: "-0.7px",
                ...row2,
                position: "absolute",
                left: 0,
                top: 0
              }}>
                {"Texana Especial"}
              </span>
              <div data-figma-id="549:3186" style={absoluteLayer(246.95, 1, "max-content", 44, {
                ...col1,
                alignItems: "flex-end"
              })}>
                <div data-figma-id="549:3187" style={fixedLayer("max-content", 30, col1)}>
                  <span data-figma-id="549:3188" style={{
                    ...font_Manrope,
                    ...text3,
                    color: "#29241f",
                    fontSize: 24,
                    lineHeight: "30px",
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                    {"$ 23.500"}
                  </span>
                </div>
                <div data-figma-id="549:3189" style={fixedLayer("max-content", 14, {
                  ...col1,
                  ...layout1
                })}>
                  <span data-figma-id="549:3190" style={{
                    ...font_Inter,
                    color: "#82776e",
                    whiteSpace: "pre",
                    fontSize: 12,
                    fontWeight: 500,
                    fontVariationSettings: "\"wght\" 500",
                    lineHeight: "12px",
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                    {"COP"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="549:3191" style={{
              ...col1,
              minWidth: 0,
              padding: "0 0 0.835px",
              boxSizing: "border-box",
              position: "relative",
              height: 38.835,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="549:3192" style={{
                ...font_Inter,
                ...text2,
                whiteSpace: "normal",
                fontSize: 14,
                lineHeight: "18.9px",
                minWidth: 0,
                position: "relative",
                height: 38,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "18.9px",
                  left: 0,
                  textAlign: "left"
                }}>{"Hamburguesa gigante americano · 150 gr de res ·\n140 gr de pollo · Huevo"}</span>
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="549:3193" style={{
          ...col1,
          minWidth: 0,
          padding: "24px 0 0",
          boxSizing: "border-box",
          position: "relative",
          height: 422,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="549:3194" style={{
            ...col1,
            minWidth: 0,
            padding: "0 20px",
            boxSizing: "border-box",
            gap: 2,
            position: "relative",
            height: 398,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="549:3195" style={{
              ...row1,
              minWidth: 0,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="549:3196" style={fixedLayer("max-content", 30, col1)}>
                <span data-figma-id="549:3197" style={{
                  ...text1,
                  ...font_Manrope,
                  color: "#29241f",
                  fontSize: 20,
                  lineHeight: "30px",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                  {"¿La quieres en combo?"}
                </span>
              </div>
              <div data-figma-id="549:3198" style={fixedLayer("max-content", 24, {
                background: "#f5efe7",
                borderRadius: 8,
                ...col1,
                padding: "4px 10px",
                boxSizing: "border-box"
              })}>
                <span data-figma-id="549:3199" style={{
                  ...font_Inter,
                  ...text4,
                  color: "#82776e",
                  fontSize: 12,
                  lineHeight: "16px",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                  {"Opcional"}
                </span>
              </div>
            </div>
            <div data-figma-id="549:3200" style={{
              ...col2,
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="549:3201" style={{
                ...font_Inter,
                ...text2,
                whiteSpace: "pre",
                fontSize: 14,
                lineHeight: "21px",
                ...row4,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                {"Elige una opción. El combo es opcional."}
              </span>
            </div>
            <div data-figma-id="549:3202" style={{
              ...col1,
              minWidth: 0,
              padding: "12px 0 0",
              boxSizing: "border-box",
              gap: 12,
              position: "relative",
              height: 343,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="549:3203" style={{
                background: "#fff1eb",
                boxShadow: "inset 0 0 0 1px #ed6047",
                borderRadius: 16,
                ...row5,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="549:3204" style={{
                  ...col3,
                  position: "relative",
                  height: 41,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                  <div data-figma-id="549:3205" style={{
                    minWidth: 0,
                    display: "flex",
                    gap: 14,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <div data-figma-id="549:3206" style={fixedLayer(20, 22, {
                      ...col1,
                      ...layout1
                    })}>
                      <div data-figma-id="549:3207" style={fixedLayer(20, 20, {
                        boxShadow: "inset 0 0 0 2px #ed6047",
                        borderRadius: 9999,
                        display: "flex",
                        padding: 2,
                        boxSizing: "border-box",
                        alignItems: "center",
                        justifyContent: "center"
                      })}>
                        <div data-figma-id="549:3208" style={fixedLayer(10, 10, {
                          background: "#ed6047",
                          borderRadius: 9999
                        })} />
                      </div>
                    </div>
                    <div data-figma-id="549:3209" style={{
                      ...col2,
                      position: "relative",
                      height: 41,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                      <div data-figma-id="549:3210" style={{
                        ...col2,
                        position: "relative",
                        height: 20,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <span data-figma-id="549:3211" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          {"Sencilla"}
                        </span>
                      </div>
                      <div data-figma-id="549:3212" style={{
                        ...col4,
                        position: "relative",
                        height: 21,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="549:3213" style={{
                          ...col2,
                          position: "relative",
                          height: 20,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="549:3214" style={{
                            ...font_Inter,
                            ...text2,
                            ...text5,
                            whiteSpace: "pre",
                            ...row4,
                            position: "relative",
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                            {"Solo la hamburguesa"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-figma-id="549:3215" style={fixedLayer(96, 26, {
                  ...col1,
                  ...layout1,
                  ...layout2
                })}>
                  <div data-figma-id="549:3216" style={fixedLayer(96.01, 24, col5)}>
                    <span data-figma-id="549:3217" style={{
                      ...font_Manrope_16,
                      ...row6,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"$ 23.500"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="549:3218" style={{
                ...surface1,
                borderRadius: 16,
                ...row5,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="549:3219" style={{
                  ...col3,
                  position: "relative",
                  height: 82,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                  <div data-figma-id="549:3220" style={{
                    minWidth: 0,
                    display: "flex",
                    gap: 14,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <div data-figma-id="549:3221" style={fixedLayer(20, 22, {
                      ...col1,
                      ...layout1
                    })}>
                      <div data-figma-id="549:3222" style={fixedLayer(20, 20, {
                        border: "2px solid #d1c8be",
                        borderRadius: 9999
                      })} />
                    </div>
                    <div data-figma-id="549:3223" style={{
                      ...col2,
                      position: "relative",
                      height: 82,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                      <div data-figma-id="549:3224" style={{
                        ...col2,
                        position: "relative",
                        height: 20,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <span data-figma-id="549:3225" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          {"Mini Combo"}
                        </span>
                      </div>
                      <div data-figma-id="549:3226" style={{
                        ...col6,
                        position: "relative",
                        height: 41,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="549:3227" style={{
                          ...col7,
                          position: "relative",
                          height: 39.75,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="549:3228" style={{
                            ...font_Inter,
                            ...text2,
                            ...text5,
                            whiteSpace: "normal",
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
                            }}>{"Papas a la francesa +\ngaseosa 250 cc"}</span>
                          </span>
                        </div>
                      </div>
                      <div data-figma-id="549:3229" style={{
                        ...col4,
                        position: "relative",
                        height: 21,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="549:3230" style={{
                          ...col2,
                          position: "relative",
                          height: 20,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="549:3231" style={{
                            ...font_Inter,
                            ...text1,
                            ...text5,
                            color: "#bd412d",
                            ...row4,
                            position: "relative",
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                            {"+$ 6.700 sobre la sencilla"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-figma-id="549:3232" style={fixedLayer(96, 26, {
                  ...col1,
                  ...layout1,
                  ...layout2
                })}>
                  <div data-figma-id="549:3233" style={fixedLayer(96, 24, col5)}>
                    <span data-figma-id="549:3234" style={{
                      ...font_Manrope_16,
                      ...row6,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"$ 30.200"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="549:3235" style={{
                ...surface1,
                borderRadius: 16,
                ...row5,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="549:3236" style={{
                  ...col3,
                  position: "relative",
                  height: 82,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                  <div data-figma-id="549:3237" style={{
                    minWidth: 0,
                    display: "flex",
                    gap: 14,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <div data-figma-id="549:3238" style={fixedLayer(20, 22, {
                      ...col1,
                      ...layout1
                    })}>
                      <div data-figma-id="549:3239" style={fixedLayer(20, 20, {
                        border: "2px solid #d1c8be",
                        borderRadius: 9999
                      })} />
                    </div>
                    <div data-figma-id="549:3240" style={{
                      ...col2,
                      position: "relative",
                      height: 82,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                      <div data-figma-id="549:3241" style={{
                        ...col2,
                        position: "relative",
                        height: 20,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <span data-figma-id="549:3242" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          {"Maxi Combo"}
                        </span>
                      </div>
                      <div data-figma-id="549:3243" style={{
                        ...col6,
                        position: "relative",
                        height: 41,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="549:3244" style={{
                          ...col7,
                          position: "relative",
                          height: 39.75,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="549:3245" style={{
                            ...font_Inter,
                            ...text2,
                            ...text5,
                            whiteSpace: "normal",
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
                            }}>{"Papas a la francesa +\ngaseosa 400 cc"}</span>
                          </span>
                        </div>
                      </div>
                      <div data-figma-id="549:3246" style={{
                        ...col4,
                        position: "relative",
                        height: 21,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="549:3247" style={{
                          ...col2,
                          position: "relative",
                          height: 20,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="549:3248" style={{
                            ...font_Inter,
                            ...text1,
                            ...text5,
                            color: "#bd412d",
                            ...row4,
                            position: "relative",
                            flexShrink: 0,
                            alignSelf: "stretch"
                          }}>
                            {"+$ 9.200 sobre la sencilla"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-figma-id="549:3249" style={fixedLayer(96, 26, {
                  ...col1,
                  ...layout1,
                  ...layout2
                })}>
                  <div data-figma-id="549:3250" style={fixedLayer(96, 24, col5)}>
                    <span data-figma-id="549:3251" style={{
                      ...font_Manrope_16,
                      ...row6,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"$ 32.700"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="549:3252" style={{
        ...row1,
        padding: "12px 28px 0",
        boxSizing: "border-box",
        position: "absolute",
        left: 0,
        top: 0,
        height: "max-content",
        right: 0
      }}>
        <div data-figma-id="549:3253" style={fixedLayer(28.73, 22.5)}>
          <span data-figma-id="549:3254" style={{
            ...font_Inter,
            ...text4,
            color: "#29241f",
            fontSize: 15,
            lineHeight: "22.5px",
            letterSpacing: "-0.375px",
            ...row2,
            position: "absolute",
            left: 0,
            top: -1
          }}>
            {"9:41"}
          </span>
        </div>
        <div data-figma-id="549:3255" style={fixedLayer(72, "max-content", {
          display: "flex",
          alignItems: "center",
          gap: 6
        })}>
          <div data-figma-id="549:3256" style={fixedLayer(16, 14, {
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
          })}>
            <ClientBackIcon size={16} color="#29241f" />
          </div>
          <div data-figma-id="549:3261" style={fixedLayer(18, 14, {
            ...col1,
            padding: "0 0 0 2px",
            boxSizing: "border-box"
          })}>
            <div data-figma-id="549:3262" style={fixedLayer(16, 14, {
              ...col1,
              overflow: "hidden",
              justifyContent: "center"
            })}>
              <div data-figma-id="549:3263" style={{
                minHeight: 0,
                overflow: "hidden",
                position: "relative",
                width: 16,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
                <svg viewBox="0 0 19 12" width="100%" height="100%" fill="none" aria-hidden><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#29241f"/><rect x="5" y="5.5" width="3" height="6.5" rx="0.5" fill="#29241f"/><rect x="10" y="3" width="3" height="9" rx="0.5" fill="#29241f"/><rect x="15" y="0.5" width="3" height="11.5" rx="0.5" fill="#29241f"/></svg>
                </div>
            </div>
          </div>
          <div data-figma-id="549:3265" style={fixedLayer(26, 14, {
            ...col1,
            padding: "0 0 0 2px",
            boxSizing: "border-box"
          })}>
            <div data-figma-id="549:3266" style={fixedLayer(24, 14, {
              ...col1,
              overflow: "hidden",
              justifyContent: "center"
            })}>
              <div data-figma-id="549:3267" style={{
                minHeight: 0,
                overflow: "hidden",
                position: "relative",
                width: 24,
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0
              }}>
                <svg viewBox="0 0 27 13" width="100%" height="100%" fill="none" aria-hidden><rect x="0.7" y="1.2" width="22.5" height="10.6" rx="2.2" stroke="#29241f" strokeWidth="1.3"/><rect x="2.4" y="2.9" width="17" height="7.2" rx="1.2" fill="#29241f"/><path d="M24.2 4.2h1.6a1.2 1.2 0 0 1 1.2 1.2v2.2a1.2 1.2 0 0 1-1.2 1.2h-1.6" stroke="#29241f" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-figma-id="549:3271" style={{
      background: "#fffcf8",
      boxShadow: "inset 0 1px 0 0 #ebe4dc",
      filter: "drop-shadow(0px -4px 20px rgba(0, 0, 0, 0.04))",
      ...col1,
      maxWidth: 402,
      padding: "13px 16px 8px",
      boxSizing: "border-box",
      position: "absolute",
      left: 0,
      height: 145.75,
      right: 0,
      bottom: 0
    }}>
      <div data-figma-id="549:3272" style={{
        ...col1,
        minWidth: 0,
        padding: "0 0 12px",
        boxSizing: "border-box",
        position: "relative",
        height: 50.75,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="549:3273" style={{
          ...row1,
          width: "100%",
          minWidth: 0,
          gap: 12,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch",
          boxSizing: "border-box"
        }}
          data-proto-qty-row="1">
          <div data-figma-id="549:3274" style={{ position: "relative", width: "auto", maxWidth: "calc(100% - 108px)", minWidth: 0, height: 38.75, display: "flex", flexDirection: "column", overflow: "hidden", paddingRight: 8, boxSizing: "border-box" }}
            data-proto-qty-label="1">
            <div data-figma-id="549:3275" style={{
              ...col7,
              position: "relative",
              height: 19.75,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="549:3276" style={{
                ...font_Inter,
                ...text1,
                color: "#29241f",
                fontSize: 15,
                lineHeight: "18.75px",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
                {"Texana Especial sencilla"}
              </span>
            </div>
            <div data-figma-id="549:3277" style={{
              ...col1,
              ...layout1,
              minWidth: 0,
              position: "relative",
              height: 20,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="549:3278" style={{
                ...col2,
                position: "relative",
                height: 18,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="549:3279" style={{
                  ...font_Inter,
                  ...text2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: 12,
                  lineHeight: "18px",
                  ...row4,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  {"Sin bebida ni papas · Precios en COP"}
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="549:3280" style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            flex: "none",
            width: 96,
            minWidth: 96,
            maxWidth: 96,
            height: 36,
            ...surface1,
            borderRadius: 12,
            display: "flex",
            padding: "0 10px",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 0
          }} data-proto-qty="1">
            <div data-figma-id="549:3281" style={fixedLayer("max-content", 16, {
              ...col1,
              alignItems: "center",
              justifyContent: "center"
            })}>
              <span data-figma-id="549:3282" style={{
                ...font_Inter,
                ...text4,
                color: "#82776e",
                fontSize: 16,
                lineHeight: "16px",
                textAlign: "center",
                ...row3,
                position: "relative",
                flexShrink: 0
              }}>
                {"−"}
              </span>
            </div>
            <div data-figma-id="549:3283" style={{
              position: "relative",
              width: 18,
              minWidth: 18,
              height: 22.5,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span data-figma-id="549:3284" style={{
                ...font_Inter,
                ...text1,
                color: "#29241f",
                fontSize: 15,
                lineHeight: "22.5px",
                textAlign: "center"
              }}>
                {"1"}
              </span>
            </div>
            <div data-figma-id="549:3285" style={fixedLayer("max-content", 16, {
              ...col1,
              alignItems: "center",
              justifyContent: "center"
            })}>
              <span data-figma-id="549:3286" style={{
                ...font_Inter,
                ...text1,
                color: "#ed6047",
                fontSize: 16,
                lineHeight: "16px",
                textAlign: "center",
                ...row3,
                position: "relative",
                flexShrink: 0
              }}>
                {"+"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="549:3287" style={{
        background: "#ed6047",
        borderRadius: 16,
        ...row1,
        minWidth: 0,
        padding: "0 24px",
        boxSizing: "border-box",
        position: "relative",
        height: 56,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="549:3288" style={{
          background: "rgba(255, 255, 255, 0.002)",
          borderRadius: 16,
          boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
          position: "absolute",
          left: 0,
          top: 0,
          height: 56,
          right: 0
        }} />
        <div data-figma-id="549:3289" style={fixedLayer("max-content", 24, {
          ...col1,
          alignItems: "center"
        })}>
          <span data-figma-id="549:3290" style={{
            ...text1,
            ...font_Manrope,
            color: "#ffffff",
            fontSize: 16,
            lineHeight: "24px",
            textAlign: "center",
            ...row3,
            position: "relative",
            flexShrink: 0
          }}>
            {"Agregar al pedido"}
          </span>
        </div>
        <div data-figma-id="549:3291" style={fixedLayer("max-content", 26, {
          ...col1,
          alignItems: "center"
        })}>
          <span data-figma-id="549:3292" style={{
            ...font_Manrope,
            ...text3,
            color: "#ffffff",
            fontSize: 17,
            lineHeight: "25.5px",
            letterSpacing: "-0.425px",
            textAlign: "center",
            ...row3,
            position: "relative",
            flexShrink: 0
          }}>
            {"$ 23.500"}
          </span>
        </div>
      </div>
      <div data-figma-id="549:3293" style={fixedLayer(358, 18, {
        ...col1,
        padding: "10px 107px 4px",
        boxSizing: "border-box",
        alignItems: "center"
      })}>
        <div data-figma-id="549:3294" style={fixedLayer(144, 4, {
          opacity: 0.9,
          background: "#000000",
          borderRadius: 9999
        })} />
      </div>
    </div>
  </div>;
}
export default DescripciNTexana;