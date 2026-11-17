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
export function WhopperPersonalizaTuPedido() {
  return <div data-figma-id="552:3586" style={rootLayer("100%", "max-content", {
    background: "linear-gradient(#e5e5e5, #e5e5e5)",
    backgroundColor: "#ffffff",
    minWidth: 0,
    display: "flex",
    justifyContent: "center"
  })}>
    <div data-figma-id="552:3587" style={{
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
      <div data-figma-id="552:3588" style={{
        background: "rgba(255, 255, 255, 0.002)",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }} />
      <div data-figma-id="552:3589" style={{
        ...row1,
        padding: "12px 20px",
        boxSizing: "border-box",
        position: "absolute",
        left: 0,
        top: 34.5,
        height: "max-content",
        right: 0
      }}>
        <div data-figma-id="552:3590" style={fixedLayer(176.78, "max-content", {
          display: "flex",
          alignItems: "center",
          gap: 14
        })}>
          <div data-figma-id="552:3591" style={fixedLayer(40, 40, {
            ...surface1,
            borderRadius: 9999,
            display: "flex",
            padding: 1,
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center"
          })}>
            <div data-figma-id="552:3592" style={fixedLayer(20, 20, {
              overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
            })}>
              <ClientBackIcon size={20} color="#29241f" />
          </div>
          </div>
          <div data-figma-id="552:3595" style={fixedLayer("max-content", 41, col1)}>
            <div data-figma-id="552:3596" style={{
              ...col1,
              minWidth: 122.78,
              position: "relative",
              height: 23,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="552:3597" style={{
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
            <div data-figma-id="552:3598" style={{
              ...col1,
              minWidth: 122.78,
              position: "relative",
              height: 18,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="552:3599" style={{
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
        <div data-figma-id="552:3600" aria-hidden="true" style={fixedLayer(40, 40, {
          visibility: "hidden",
          pointerEvents: "none"
        })} />
      </div>
      <div data-figma-id="552:3602" style={{
        ...col1,
        position: "absolute",
        left: 0,
        top: 99,
        height: 746.78,
        right: 0
      }}>
        <div data-figma-id="552:3603" style={{
          ...col1,
          minWidth: 0,
          padding: "4px 20px 0",
          boxSizing: "border-box",
          position: "relative",
          height: 214,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="556:4013" style={{
            background: "#f3f4f6",
            borderRadius: 20,
            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
            ...col1,
            minWidth: 0,
            overflow: "hidden",
            justifyContent: "center",
            position: "relative",
            height: 210,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="556:4014" style={fixedLayer(354, 264, {
              background: "url(\"https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/5cdef993-0dbb-4774-9e93-d1809f98a59d.png\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              aspectRatio: "1200 / 896"
            })} />
          </div>
        </div>
        <div data-figma-id="552:3606" style={{
          ...col1,
          minWidth: 0,
          padding: "20px 0 0",
          boxSizing: "border-box",
          position: "relative",
          height: 110.78,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="552:3607" style={{
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
            <div data-figma-id="552:3608" style={{
              minWidth: 0,
              position: "relative",
              height: 45,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="552:3609" style={{
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
                {"Whopper"}
              </span>
              <div data-figma-id="552:3610" style={absoluteLayer(247.94, 1, "max-content", 44, {
                ...col1,
                alignItems: "flex-end"
              })}>
                <div data-figma-id="552:3611" style={fixedLayer("max-content", 30, col1)}>
                  <span data-figma-id="552:3612" style={{
                    ...font_Manrope,
                    ...text3,
                    color: "#29241f",
                    fontSize: 24,
                    lineHeight: "30px",
                    ...row2,
                    position: "relative",
                    flexShrink: 0
                  }}>
                    {"$ 10.400"}
                  </span>
                </div>
                <div data-figma-id="552:3613" style={fixedLayer("max-content", 14, {
                  ...col1,
                  ...layout1
                })}>
                  <span data-figma-id="552:3614" style={{
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
            <div data-figma-id="552:3615" style={{
              ...col1,
              minWidth: 0,
              padding: "0 0 0.835px",
              boxSizing: "border-box",
              position: "relative",
              height: 38.835,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="552:3616" style={{
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
                }}>{"Hamburguesa gigante americano · 150 gr de res ·\nLechuga · Tomate · Pepino"}</span>
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="552:3617" style={{
          ...col1,
          minWidth: 0,
          padding: "24px 0 0",
          boxSizing: "border-box",
          position: "relative",
          height: 422,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="552:3618" style={{
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
            <div data-figma-id="552:3619" style={{
              ...row1,
              minWidth: 0,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="552:3620" style={fixedLayer("max-content", 30, col1)}>
                <span data-figma-id="552:3621" style={{
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
              <div data-figma-id="552:3622" style={fixedLayer("max-content", 24, {
                background: "#f5efe7",
                borderRadius: 8,
                ...col1,
                padding: "4px 10px",
                boxSizing: "border-box"
              })}>
                <span data-figma-id="552:3623" style={{
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
            <div data-figma-id="552:3624" style={{
              ...col2,
              position: "relative",
              height: 21,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="552:3625" style={{
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
            <div data-figma-id="552:3626" style={{
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
              <div data-figma-id="552:3627" data-proto-action="sencilla" style={{
                background: "#fff1eb",
                boxShadow: "inset 0 0 0 1px #ed6047",
                borderRadius: 16,
                ...row5,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="552:3628" style={{
                  ...col3,
                  position: "relative",
                  height: 41,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                  <div data-figma-id="552:3629" style={{
                    minWidth: 0,
                    display: "flex",
                    gap: 14,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <div data-figma-id="552:3630" style={fixedLayer(20, 22, {
                      ...col1,
                      ...layout1
                    })}>
                      <div data-figma-id="552:3631" style={fixedLayer(20, 20, {
                        boxShadow: "inset 0 0 0 2px #ed6047",
                        borderRadius: 9999,
                        display: "flex",
                        padding: 2,
                        boxSizing: "border-box",
                        alignItems: "center",
                        justifyContent: "center"
                      })}>
                        <div data-figma-id="552:3632" style={fixedLayer(10, 10, {
                          background: "#ed6047",
                          borderRadius: 9999
                        })} />
                      </div>
                    </div>
                    <div data-figma-id="552:3633" style={{
                      ...col2,
                      position: "relative",
                      height: 41,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                      <div data-figma-id="552:3634" style={{
                        ...col2,
                        position: "relative",
                        height: 20,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <span data-figma-id="552:3635" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          {"Sencilla"}
                        </span>
                      </div>
                      <div data-figma-id="552:3636" style={{
                        ...col4,
                        position: "relative",
                        height: 21,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="552:3637" style={{
                          ...col2,
                          position: "relative",
                          height: 20,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="552:3638" style={{
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
                <div data-figma-id="552:3639" style={fixedLayer(96, 26, {
                  ...col1,
                  ...layout1,
                  ...layout2
                })}>
                  <div data-figma-id="552:3640" style={fixedLayer(96, 24, col5)}>
                    <span data-figma-id="552:3641" style={{
                      ...font_Manrope_16,
                      ...row6,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"$ 10.400"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="552:3642" data-proto-action="mini combo" style={{
                ...surface1,
                borderRadius: 16,
                ...row5,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="552:3643" style={{
                  ...col3,
                  position: "relative",
                  height: 82,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                  <div data-figma-id="552:3644" style={{
                    minWidth: 0,
                    display: "flex",
                    gap: 14,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <div data-figma-id="552:3645" style={fixedLayer(20, 22, {
                      ...col1,
                      ...layout1
                    })}>
                      <div data-figma-id="552:3646" style={fixedLayer(20, 20, {
                        border: "2px solid #d1c8be",
                        borderRadius: 9999
                      })} />
                    </div>
                    <div data-figma-id="552:3647" style={{
                      ...col2,
                      position: "relative",
                      height: 82,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                      <div data-figma-id="552:3648" style={{
                        ...col2,
                        position: "relative",
                        height: 20,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <span data-figma-id="552:3649" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          {"Mini Combo"}
                        </span>
                      </div>
                      <div data-figma-id="552:3650" style={{
                        ...col6,
                        position: "relative",
                        height: 41,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="552:3651" style={{
                          ...col7,
                          position: "relative",
                          height: 39.75,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="552:3652" style={{
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
                      <div data-figma-id="552:3653" style={{
                        ...col4,
                        position: "relative",
                        height: 21,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="552:3654" style={{
                          ...col2,
                          position: "relative",
                          height: 20,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="552:3655" style={{
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
                <div data-figma-id="552:3656" style={fixedLayer(96, 26, {
                  ...col1,
                  ...layout1,
                  ...layout2
                })}>
                  <div data-figma-id="552:3657" style={fixedLayer(96, 24, col5)}>
                    <span data-figma-id="552:3658" style={{
                      ...font_Manrope_16,
                      ...row6,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"$ 17.100"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="552:3659" data-proto-action="maxi combo" style={{
                ...surface1,
                borderRadius: 16,
                ...row5,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="552:3660" style={{
                  ...col3,
                  position: "relative",
                  height: 82,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                  <div data-figma-id="552:3661" style={{
                    minWidth: 0,
                    display: "flex",
                    gap: 14,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <div data-figma-id="552:3662" style={fixedLayer(20, 22, {
                      ...col1,
                      ...layout1
                    })}>
                      <div data-figma-id="552:3663" style={fixedLayer(20, 20, {
                        border: "2px solid #d1c8be",
                        borderRadius: 9999
                      })} />
                    </div>
                    <div data-figma-id="552:3664" style={{
                      ...col2,
                      position: "relative",
                      height: 82,
                      flexShrink: 1,
                      flexGrow: 1,
                      flexBasis: 0
                    }}>
                      <div data-figma-id="552:3665" style={{
                        ...col2,
                        position: "relative",
                        height: 20,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <span data-figma-id="552:3666" style={{
                          ...font_Inter_16,
                          ...row4,
                          position: "relative",
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          {"Maxi Combo"}
                        </span>
                      </div>
                      <div data-figma-id="552:3667" style={{
                        ...col6,
                        position: "relative",
                        height: 41,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="552:3668" style={{
                          ...col7,
                          position: "relative",
                          height: 39.75,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="552:3669" style={{
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
                      <div data-figma-id="552:3670" style={{
                        ...col4,
                        position: "relative",
                        height: 21,
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                        <div data-figma-id="552:3671" style={{
                          ...col2,
                          position: "relative",
                          height: 20,
                          flexShrink: 0,
                          alignSelf: "stretch"
                        }}>
                          <span data-figma-id="552:3672" style={{
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
                <div data-figma-id="552:3673" style={fixedLayer(96, 26, {
                  ...col1,
                  ...layout1,
                  ...layout2
                })}>
                  <div data-figma-id="552:3674" style={fixedLayer(96, 24, col5)}>
                    <span data-figma-id="552:3675" style={{
                      ...font_Manrope_16,
                      ...row6,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"$ 19.600"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="552:3676" style={{
        ...row1,
        padding: "12px 28px 0",
        boxSizing: "border-box",
        position: "absolute",
        left: 0,
        top: 0,
        height: "max-content",
        right: 0
      }}>
        <div data-figma-id="552:3677" style={fixedLayer(28.73, 22.5)}>
          <span data-figma-id="552:3678" style={{
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
        <div data-figma-id="552:3679" style={fixedLayer(72, "max-content", {
          display: "flex",
          alignItems: "center",
          gap: 6
        })}>
          <div data-figma-id="552:3680" style={fixedLayer(16, 14, {
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
          })}>
            <ClientBackIcon size={16} color="#29241f" />
          </div>
          <div data-figma-id="552:3685" style={fixedLayer(18, 14, {
            ...col1,
            padding: "0 0 0 2px",
            boxSizing: "border-box"
          })}>
            <div data-figma-id="552:3686" style={fixedLayer(16, 14, {
              ...col1,
              overflow: "hidden",
              justifyContent: "center"
            })}>
              <div data-figma-id="552:3687" style={{
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
          <div data-figma-id="552:3689" style={fixedLayer(26, 14, {
            ...col1,
            padding: "0 0 0 2px",
            boxSizing: "border-box"
          })}>
            <div data-figma-id="552:3690" style={fixedLayer(24, 14, {
              ...col1,
              overflow: "hidden",
              justifyContent: "center"
            })}>
              <div data-figma-id="552:3691" style={{
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
    <div data-figma-id="552:3695" style={{
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
      <div data-figma-id="552:3696" style={{
        ...col1,
        minWidth: 0,
        padding: "0 0 12px",
        boxSizing: "border-box",
        position: "relative",
        height: 50.75,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="552:3697" style={{
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
          <div data-figma-id="552:3698" style={{ position: "relative", width: "auto", maxWidth: "calc(100% - 108px)", minWidth: 0, height: 38.75, display: "flex", flexDirection: "column", overflow: "hidden", paddingRight: 8, boxSizing: "border-box" }}
            data-proto-qty-label="1">
            <div data-figma-id="552:3699" style={{
              ...col7,
              position: "relative",
              height: 19.75,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="552:3700" style={{
                ...font_Inter,
                ...text1,
                color: "#29241f",
                fontSize: 15,
                lineHeight: "18.75px",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
                {"Whopper sencilla"}
              </span>
            </div>
            <div data-figma-id="552:3701" style={{
              ...col1,
              ...layout1,
              minWidth: 0,
              position: "relative",
              height: 20,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="552:3702" style={{
                ...col2,
                position: "relative",
                height: 18,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="552:3703" style={{
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
          <div data-figma-id="552:3704" style={{
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
            <div data-figma-id="552:3705" style={fixedLayer("max-content", 16, {
              ...col1,
              alignItems: "center",
              justifyContent: "center"
            })}>
              <span data-figma-id="552:3706" style={{
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
            <div data-figma-id="552:3707" style={{
              position: "relative",
              width: 18,
              minWidth: 18,
              height: 22.5,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span data-figma-id="552:3708" style={{
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
            <div data-figma-id="552:3709" style={fixedLayer("max-content", 16, {
              ...col1,
              alignItems: "center",
              justifyContent: "center"
            })}>
              <span data-figma-id="552:3710" style={{
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
      <div data-figma-id="552:3711" style={{
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
        <div data-figma-id="552:3712" style={{
          background: "rgba(255, 255, 255, 0.002)",
          borderRadius: 16,
          boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
          position: "absolute",
          left: 0,
          top: 0,
          height: 56,
          right: 0
        }} />
        <div data-figma-id="552:3713" style={fixedLayer("max-content", 24, {
          ...col1,
          alignItems: "center"
        })}>
          <span data-figma-id="552:3714" style={{
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
        <div data-figma-id="552:3715" style={fixedLayer("max-content", 26, {
          ...col1,
          alignItems: "center"
        })}>
          <span data-figma-id="552:3716" style={{
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
            {"$ 10.400"}
          </span>
        </div>
      </div>
      <div data-figma-id="552:3717" style={fixedLayer(358, 18, {
        ...col1,
        padding: "10px 107px 4px",
        boxSizing: "border-box",
        alignItems: "center"
      })}>
        <div data-figma-id="552:3718" style={fixedLayer(144, 4, {
          opacity: 0.9,
          background: "#000000",
          borderRadius: 9999
        })} />
      </div>
    </div>
  </div>;
}
export default WhopperPersonalizaTuPedido;