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
const font_PlusJakartaS: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const font_Manrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif"
};
const surface1: React.CSSProperties = {
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
};
const text1: React.CSSProperties = {
  whiteSpace: "pre",
  lineHeight: "20px"
};
const text2: React.CSSProperties = {
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const surface2: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #e2dcd5"
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
  minWidth: 0,
  overflow: "hidden"
};
const layout3: React.CSSProperties = {
  padding: "0 0 16px",
  boxSizing: "border-box"
};
const row3: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const text3: React.CSSProperties = {
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700",
  textAlign: "center"
};
const text4: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 14,
  lineHeight: "17px"
};
const layout4: React.CSSProperties = {
  minWidth: 0,
  padding: "8px 0",
  boxSizing: "border-box"
};
const row2: React.CSSProperties = {
  ...layout1,
  display: "flex"
};
const col2: React.CSSProperties = {
  ...col1,
  alignItems: "center"
};
const row4: React.CSSProperties = {
  ...row3,
  minWidth: 0
};
const row1: React.CSSProperties = {
  ...row4,
  justifyContent: "space-between"
};
const col4: React.CSSProperties = {
  ...col1,
  minWidth: 0,
  gap: 6
};
const surface3: React.CSSProperties = {
  ...surface1,
  ...surface2,
  borderRadius: 12
};
const col3: React.CSSProperties = {
  ...col1,
  ...layout1,
  padding: "9px 17px",
  boxSizing: "border-box"
};
const col5: React.CSSProperties = {
  ...col1,
  ...layout2,
  padding: "14px 17px",
  boxSizing: "border-box"
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text4,
  color: "#9ca3af",
  fontWeight: 400
};
const font_PlusJakartaS_13: React.CSSProperties = {
  ...font_PlusJakartaS,
  ...text1,
  ...text2,
  color: "#1c1b1b",
  fontSize: 13
};
const font_Inter_13: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  color: "#1c1b1b",
  fontSize: 13,
  fontWeight: 400,
  textAlign: "center"
};
function Button(p: {
  "data-figma-id": string;
  left: number;
  text: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={absoluteLayer(p.left, "calc(50% + -21px)", "max-content", 38, {
    ...surface2,
    borderRadius: 9999,
    ...col3
  })}>
      <span data-figma-id="512:1796" style={{
      ...font_Inter_13,
      ...row2,
      position: "relative",
      flexShrink: 0
    }}>
        {p.text}
      </span>
    </div>;
}
export function PQRSRadicacion() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-936" d="M0 37L35 72L100 0" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="512:1768" style={rootLayer(438, 1140)}>
    <div data-figma-id="512:1769" style={absoluteLayer(0, 0, 438, 1140, {
        background: "linear-gradient(#fcf9f8, #fcf9f8)",
        backgroundColor: "#ffffff",
        ...col1
      })}>
      <div data-figma-id="512:1770" style={{
          background: "#fcf9f8",
          ...col1,
          minWidth: 0,
          padding: "64px 0 96px",
          boxSizing: "border-box",
          position: "relative",
          height: 1140,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="512:1771" style={fixedLayer("100%", 1078, {
            ...col1,
            minWidth: 0,
            maxWidth: 512,
            padding: "8px 16px 32px",
            boxSizing: "border-box",
            alignSelf: "flex-start"
          })}>
          <div data-figma-id="512:1772" style={fixedLayer(202, "max-content", {
              display: "flex",
              alignItems: "center",
              gap: 8
            })}>
            <div data-figma-id="512:1773" style={fixedLayer(40, 40, row2)}>
              <div data-figma-id="512:1774" style={fixedLayer("max-content", 16, col2)}>
                <div data-figma-id="512:1775" style={fixedLayer(16, 16)} />
              </div>
            </div>
            <div data-figma-id="512:1776" style={fixedLayer("max-content", 20, col1)}>
              <span data-figma-id="512:1777" style={{
                  ...font_Manrope,
                  color: "#1c1b1b",
                  whiteSpace: "pre",
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: "27.32px",
                  letterSpacing: "-0.5px",
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"PQRS y Atención"}
              </span>
            </div>
          </div>
          <div data-figma-id="512:1778" style={{
              ...col1,
              minWidth: 0,
              padding: "11.25px 0 12px",
              boxSizing: "border-box",
              gap: 7.25,
              position: "relative",
              height: 165.25,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1779" style={{
                ...col1,
                minWidth: 0,
                padding: "0 0 0.75px",
                boxSizing: "border-box",
                position: "relative",
                height: 65.75,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="512:1780" style={{
                  ...font_Manrope,
                  color: "#1c1b1b",
                  whiteSpace: "normal",
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: "35.516px",
                  letterSpacing: "-0.65px",
                  minWidth: 0,
                  position: "relative",
                  height: 65,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span style={{
                    position: "absolute",
                    top: 0,
                    whiteSpace: "pre",
                    lineHeight: "32.5px",
                    left: 0,
                    textAlign: "left"
                  }}>{"Tu experiencia es lo más\nimportante"}</span>
              </span>
            </div>
            <div data-figma-id="512:1781" style={{
                ...col1,
                minWidth: 0,
                position: "relative",
                height: 69,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="512:1782" style={{
                  ...font_Inter,
                  color: "#5d3f3d",
                  whiteSpace: "normal",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "22.75px",
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
                  }}>{"Cuéntanos qué sucedió o comparte tus sugerencias.\nCada comentario nos ayuda a perfeccionar el\nauténtico sabor a la parrilla."}</span>
              </span>
            </div>
          </div>
          <div data-figma-id="512:1783" style={{
              ...col1,
              ...layout4,
              position: "relative",
              height: 17,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1784" style={{
                background: "#eae5df",
                minWidth: 0,
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
          </div>
          <div data-figma-id="512:1785" style={{
              ...col1,
              minWidth: 0,
              padding: "12px 0",
              boxSizing: "border-box",
              gap: 8,
              position: "relative",
              height: 94,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1786" style={{
                ...row1,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="512:1787" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="512:1788" style={{
                    ...font_PlusJakartaS_13,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  <span data-figma-text-run="23" style={{
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"Tipo de Solicitud "}</span><span data-figma-text-run="22" style={{
                      color: "#e75338",
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"*"}</span>
                </span>
              </div>
              <div data-figma-id="512:1789" style={fixedLayer("max-content", 20, col1)}>
                <span data-figma-id="512:1790" style={{
                    ...font_Inter,
                    ...text1,
                    color: "#e75338",
                    fontSize: 12,
                    fontWeight: 400,
                    ...row3,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Petición seleccionada"}
                </span>
              </div>
            </div>
            <div data-figma-id="512:1791" style={{
                minWidth: 0,
                position: "relative",
                height: 42,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="512:1792" style={{
                  overflow: "hidden",
                  position: "absolute",
                  left: -16,
                  top: 0,
                  height: 42,
                  right: -16
                }}>
                <div data-figma-id="512:1793" style={absoluteLayer(16, "calc(50% + -21px)", "max-content", 38, {
                    ...surface1,
                    background: "#e75338",
                    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0)",
                    borderRadius: 9999,
                    ...col3
                  })}>
                  <span data-figma-id="512:1794" style={{
                      ...font_Inter,
                      ...text1,
                      color: "#ffffff",
                      fontSize: 13,
                      fontWeight: 400,
                      textAlign: "center",
                      ...row2,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Petición"}
                  </span>
                </div>
                <Button data-figma-id="512:1795" left={108.86} text="Queja" />
                <Button data-figma-id="512:1797" left={188.14} text="Reclamo" />
                <Button data-figma-id="512:1799" left={284.63} text="Sugerencia" />
                <div data-figma-id="512:1801" style={absoluteLayer(397.13, "calc(50% + -21px)", "max-content", 38, {
                    ...surface2,
                    borderRadius: 9999,
                    ...col3
                  })}>
                  <span data-figma-id="512:1802" style={{
                      ...font_PlusJakartaS,
                      ...text1,
                      color: "#1c1b1b",
                      fontSize: 13,
                      fontWeight: 500,
                      fontVariationSettings: "\"wght\" 400",
                      textAlign: "center",
                      ...row2,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Felicitación"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="512:1803" style={{
              ...col1,
              ...layout4,
              position: "relative",
              height: 17,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1804" style={{
                background: "#eae5df",
                minWidth: 0,
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
          </div>
          <div data-figma-id="512:1805" style={{
              ...col1,
              ...layout4,
              gap: 20,
              position: "relative",
              height: 609.875,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1806" style={{
                ...col4,
                position: "relative",
                height: 71,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="512:1807" style={{
                  ...col1,
                  minWidth: 0,
                  position: "relative",
                  height: 20,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="512:1808" style={{
                    ...font_PlusJakartaS_13,
                    ...row4,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-text-run="23" style={{
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"Nombre Completo "}</span><span data-figma-text-run="22" style={{
                      color: "#e75338",
                      fontFamily: "'Manrope', system-ui, sans-serif",
                      fontWeight: 600
                    }}>{"*"}</span>
                </span>
              </div>
              <div data-figma-id="512:1809" style={{
                  ...surface3,
                  ...col5,
                  position: "relative",
                  height: 45,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="512:1810" style={{
                    ...col1,
                    ...layout2,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="512:1811" style={{
                      ...font_Inter_14,
                      ...row4,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    {"Ej. Camila Rendón"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="512:1812" style={{
                ...col1,
                minWidth: 0,
                gap: 16,
                position: "relative",
                height: 158,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="512:1813" style={{
                  ...col4,
                  position: "relative",
                  height: 71,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="512:1814" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 20,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="512:1815" style={{
                      ...font_PlusJakartaS_13,
                      ...row4,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-text-run="23" style={{
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Teléfono / WhatsApp "}</span><span data-figma-text-run="22" style={{
                        color: "#e75338",
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"*"}</span>
                  </span>
                </div>
                <div data-figma-id="512:1816" style={{
                    ...surface3,
                    ...col5,
                    position: "relative",
                    height: 45,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="512:1817" style={{
                      ...col1,
                      ...layout2,
                      position: "relative",
                      height: 17,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="512:1818" style={{
                        ...font_Inter_14,
                        ...row4,
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      {"+57 300 000 0000"}
                    </span>
                  </div>
                </div>
              </div>
              <div data-figma-id="512:1819" style={{
                  ...col4,
                  position: "relative",
                  height: 71,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="512:1820" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 20,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="512:1821" style={{
                      ...font_PlusJakartaS_13,
                      ...row4,
                      position: "relative",
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-text-run="23" style={{
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Correo Electrónico "}</span><span data-figma-text-run="22" style={{
                        color: "#e75338",
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"*"}</span>
                  </span>
                </div>
                <div data-figma-id="512:1822" style={{
                    ...surface3,
                    ...col5,
                    position: "relative",
                    height: 45,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="512:1823" style={{
                      ...col1,
                      ...layout2,
                      position: "relative",
                      height: 17,
                      flexShrink: 0,
                      alignSelf: "stretch"
                    }}>
                    <span data-figma-id="512:1824" style={{
                        ...font_Inter_14,
                        ...row4,
                        position: "relative",
                        flexShrink: 0,
                        alignSelf: "stretch"
                      }}>
                      {"tu-correo@ejemplo.com"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div data-figma-id="512:1825" style={{
                ...col4,
                position: "relative",
                height: 150.875,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="512:1826" style={{
                  ...row1,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="512:1827" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="512:1828" style={{
                      ...font_PlusJakartaS_13,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    <span data-figma-text-run="23" style={{
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Descripción detallada "}</span><span data-figma-text-run="22" style={{
                        color: "#e75338",
                        fontFamily: "'Manrope', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"*"}</span>
                  </span>
                </div>
                <div data-figma-id="512:1829" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="512:1830" style={{
                      ...font_Inter,
                      ...text1,
                      color: "#5d3f3d",
                      fontSize: 12,
                      fontWeight: 400,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"0 / 600"}
                  </span>
                </div>
              </div>
              <div data-figma-id="512:1831" style={{
                  ...surface3,
                  ...col1,
                  ...layout2,
                  padding: "16.375px 17px 62.5px",
                  boxSizing: "border-box",
                  position: "relative",
                  height: 124.875,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="512:1832" style={{
                    ...col1,
                    minWidth: 0,
                    position: "relative",
                    height: 46,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="512:1833" style={{
                      ...font_Inter,
                      color: "#9ca3af",
                      whiteSpace: "normal",
                      fontSize: 14,
                      fontWeight: 400,
                      lineHeight: "22.75px",
                      minWidth: 0,
                      position: "relative",
                      height: 46,
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
                      }}>{"Indícanos la fecha, sucursal, productos y \ncualquier detalle relevante..."}</span>
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="512:1834" style={{
                ...col4,
                position: "relative",
                height: 154,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="512:1835" style={{
                  ...row1,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="512:1836" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="512:1837" style={{
                      ...text1,
                      ...font_Manrope,
                      color: "#1c1b1b",
                      fontSize: 13,
                      fontWeight: 600,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Evidencia o Foto"}
                  </span>
                </div>
                <div data-figma-id="512:1838" style={fixedLayer("max-content", 20, col1)}>
                  <span data-figma-id="512:1839" style={{
                      ...font_Inter,
                      ...text1,
                      color: "#5d3f3d",
                      fontSize: 12,
                      fontWeight: 600,
                      ...row3,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"JPG, PNG o PDF"}
                  </span>
                </div>
              </div>
              <div data-figma-id="512:1840" style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  ...col1,
                  ...layout1,
                  minWidth: 0,
                  padding: 21,
                  boxSizing: "border-box",
                  position: "relative",
                  height: 128,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="512:1841" style={fixedLayer(36, 44, {
                    ...col1,
                    padding: "0 0 8px",
                    boxSizing: "border-box"
                  })}>
                  <div data-figma-id="512:1842" style={fixedLayer(36, 36, {
                      background: "#faf5f0",
                      borderRadius: 9999,
                      ...row2
                    })}>
                    <div data-figma-id="512:1843" style={fixedLayer("max-content", 15, col2)}>
                      <div data-figma-id="512:1844" style={fixedLayer(15, 15)} />
                    </div>
                  </div>
                </div>
                <div data-figma-id="512:1845" style={fixedLayer("max-content", 20, col2)}>
                  <span data-figma-id="512:1846" style={{
                      ...font_Inter_13,
                      ...row2,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Adjuntar foto del ticket o producto"}
                  </span>
                </div>
                <div data-figma-id="512:1847" style={fixedLayer("max-content", 22, {
                    ...col1,
                    padding: "2px 0 0",
                    boxSizing: "border-box"
                  })}>
                  <div data-figma-id="512:1848" style={fixedLayer("max-content", 20, col2)}>
                    <span data-figma-id="512:1849" style={{
                        ...font_Inter,
                        ...text1,
                        color: "#5d3f3d",
                        fontSize: 11,
                        fontWeight: 400,
                        textAlign: "center",
                        ...row2,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Máximo 10 MB"}
                    </span>
                  </div>
                </div>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 12,
                    pointerEvents: "none",
                    border: "1px solid #d2cac2",
                    borderStyle: "dashed"
                  }} />
              </div>
            </div>
          </div>
          <div data-figma-id="512:1850" style={{
              background: "#ed6047",
              borderRadius: 12,
              filter: "drop-shadow(0px 6px 16px rgba(237, 96, 71, 0.35))",
              ...layout1,
              minWidth: 0,
              display: "flex",
              gap: 8,
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1851" style={fixedLayer("max-content", 21, col2)}>
              <span data-figma-id="512:1852" style={{
                  ...text3,
                  ...font_Manrope,
                  color: "#ffffff",
                  whiteSpace: "pre",
                  fontSize: 16,
                  lineHeight: "21.856px",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Radicar PQRS"}
              </span>
            </div>
          </div>
          <div data-figma-id="512:1853" style={{
              ...col1,
              minWidth: 0,
              padding: "8px 0 0",
              boxSizing: "border-box",
              position: "relative",
              height: 79,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1854" style={{
                boxShadow: "inset 0 1px 0 0 #eae5df",
                minWidth: 0,
                display: "flex",
                padding: "25px 0 16px",
                boxSizing: "border-box",
                alignItems: "center",
                gap: 12,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="512:1855" style={fixedLayer("max-content", 18.333, col1)}>
                <div data-figma-id="512:1856" style={fixedLayer(18.333, 18.333)} />
              </div>
              <div data-figma-id="512:1857" style={fixedLayer("max-content", 30, {
                  ...col1,
                  padding: "0 35.2px 0 0",
                  boxSizing: "border-box"
                })}>
                <span data-figma-id="512:1858" style={fixedLayer(292, 30, {
                    ...font_PlusJakartaS,
                    ...text2,
                    color: "#1c1b1b",
                    whiteSpace: "normal",
                    fontSize: 12,
                    lineHeight: "15px"
                  })}>
                  <span style={{
                      position: "absolute",
                      top: 0,
                      whiteSpace: "pre",
                      lineHeight: "15px",
                      left: 0,
                      textAlign: "left"
                    }}><span data-figma-text-run="16" style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontWeight: 600
                      }}>{"Tiempo de Respuesta Oficial:"}</span><span data-figma-text-run="17" style={{
                        color: "#5d3f3d",
                        fontFamily: "'Inter', system-ui, sans-serif"
                      }}>{" Las radicaciones son"}</span>{"\n"}<span data-figma-text-run="17" style={{
                        color: "#5d3f3d",
                        fontFamily: "'Inter', system-ui, sans-serif"
                      }}>{"atendidas en un plazo de 24 a 48 horas hábiles."}</span></span>
                </span>
              </div>
            </div>
          </div>
          <div data-figma-id="512:1859" style={{
              ...layout1,
              minWidth: 0,
              display: "flex",
              padding: "24px 0",
              boxSizing: "border-box",
              gap: 6,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="512:1860" style={fixedLayer("max-content", 20, col1)} />
            <div data-figma-id="512:1861" style={fixedLayer("max-content", 40, col1)} />
          </div>
        </div>
      </div>
      <div data-figma-id="512:1862" style={absoluteLayer(0, 0, 390, 56, {
          background: "rgba(252, 249, 248, 0.8)",
          filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.04))",
          backdropFilter: "blur(48px)",
          ...col1
        })}>
        <div data-figma-id="512:1863" style={{
            minWidth: 0,
            display: "flex",
            padding: "0 16px",
            boxSizing: "border-box",
            alignItems: "center",
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="512:1864" style={fixedLayer(438, 44, {
              ...row1,
              minHeight: 44,
              padding: "0 24px",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="512:1865" style={fixedLayer("max-content", 17, col1)}>
              <span data-figma-id="512:1866" style={{
                  ...font_Inter,
                  ...text2,
                  ...text4,
                  color: "#29241f",
                  ...row3,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"9:41"}
              </span>
            </div>
            <div data-figma-id="512:1867" style={fixedLayer(67, "max-content", {
                display: "flex",
                alignItems: "center",
                gap: 6
              })}>
              <div data-figma-id="512:1868" style={fixedLayer(17, 12, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientBackIcon size={17} color="#29241f" />
          </div>
              <div data-figma-id="512:1870" style={fixedLayer(16, 12, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientBackIcon size={16} color="#29241f" />
          </div>
              <div data-figma-id="512:1872" style={fixedLayer(22, 11, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <svg viewBox="0 0 27 13" width="100%" height="100%" fill="none" aria-hidden><rect x="0.7" y="1.2" width="22.5" height="10.6" rx="2.2" stroke="#29241f" strokeWidth="1.3"/><rect x="2.4" y="2.9" width="17" height="7.2" rx="1.2" fill="#29241f"/><path d="M24.2 4.2h1.6a1.2 1.2 0 0 1 1.2 1.2v2.2a1.2 1.2 0 0 1-1.2 1.2h-1.6" stroke="#29241f" strokeWidth="1.3" strokeLinecap="round"/></svg>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="512:1876" style={{
          background: "rgba(0, 0, 0, 0.2)",
          ...layout1,
          display: "flex",
          padding: 16,
          boxSizing: "border-box",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }} />
    </div>
    <div data-figma-id="512:1877" style={absoluteLayer("calc(50% + -170px)", "calc(50% + -181px)", 340, 362, {
        background: "#fffcf8",
        boxShadow: "inset 0 0 0 1px #adaba9",
        borderRadius: 24,
        ...col1,
        maxWidth: 340,
        padding: 24,
        boxSizing: "border-box",
        alignItems: "center"
      })}>
      <div data-figma-id="512:1879" style={fixedLayer(64, 80, {
          ...col1,
          ...layout3
        })}>
        <div data-figma-id="876:3007" style={fixedLayer(64, 64, {
            ...surface1,
            background: "#faf5f0",
            borderRadius: 9999,
            ...row2
          })}>
          <div data-figma-id="876:3008" style={fixedLayer("max-content", 20, col2)}>
            <svg data-figma-id="876:3009" viewBox="-10 -7.2 120 86.4" preserveAspectRatio="none" style={fixedLayer(24, 24, {
                left: -2,
                top: -2
              })}>
              <path d="M0 37L35 72L100 0" fill="transparent" fillRule="nonzero" stroke="#ed6047" strokeWidth={4} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div data-figma-id="512:1883" style={fixedLayer("max-content", 44, {
          ...col1,
          ...layout3
        })}>
        <div data-figma-id="512:1884" style={fixedLayer("max-content", 28, col2)}>
          <span data-figma-id="512:1885" style={{
              ...text3,
              color: "#1c1b1b",
              whiteSpace: "pre",
              fontFamily: "'Epilogue', system-ui, sans-serif",
              fontSize: 20,
              lineHeight: "27.5px",
              letterSpacing: "-0.5px",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
            {"¡Tu PQRS ha sido radicada!"}
          </span>
        </div>
      </div>
      <div data-figma-id="512:1886" style={{
          ...col1,
          ...layout3,
          minWidth: 0,
          position: "relative",
          height: 66,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="512:1887" style={{
            background: "#f6f3f2",
            boxShadow: "inset 0 0 0 1px #e0bfb9",
            borderRadius: 16,
            ...col1,
            ...layout1,
            minWidth: 0,
            padding: "12px 16px",
            boxSizing: "border-box",
            position: "relative",
            height: 66,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="512:1888" style={fixedLayer("max-content", 20, col2)}>
            <span data-figma-id="512:1889" style={{
                ...font_PlusJakartaS,
                ...text1,
                ...text3,
                color: "#5d3f3d",
                fontSize: 10,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
              {"NÚMERO DE RADICADO"}
            </span>
          </div>
          <div data-figma-id="512:1890" style={fixedLayer("max-content", 22, {
              ...col1,
              padding: "2px 0 0",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="512:1891" style={fixedLayer("max-content", 20, col2)}>
              <span data-figma-id="512:1892" style={{
                  ...font_PlusJakartaS,
                  ...text1,
                  ...text3,
                  color: "#e75338",
                  fontSize: 17,
                  letterSpacing: "0.425px",
                  ...row2,
                  position: "relative",
                  flexShrink: 0
                }}>
                {"#PQRS-2024-8492"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="512:1907" style={fixedLayer("max-content", 76, {
          ...col1,
          ...layout1,
          padding: "0 4.09px",
          boxSizing: "border-box"
        })}>
        <span data-figma-id="512:1908" style={{
            ...font_PlusJakartaS,
            color: "#5d3f3d",
            whiteSpace: "pre",
            fontSize: 13,
            fontWeight: 400,
            fontVariationSettings: "\"wght\" 400",
            lineHeight: "21.13px",
            textAlign: "center",
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
          {"Hemos recibido tu solicitud correctamente. Te\nresponderemos en 24 a 48 horas hábiles a tu\ncorreo y WhatsApp."}
        </span>
      </div>
      <div data-figma-id="512:1896" style={fixedLayer(292, 48, {
          ...surface1,
          background: "#e75338",
          borderRadius: 16,
          ...col1,
          ...layout1,
          padding: "14px 0",
          boxSizing: "border-box"
        })}>
        <span data-figma-id="512:1897" style={{
            ...font_PlusJakartaS,
            ...text1,
            ...text3,
            color: "#ffffff",
            fontSize: 15,
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
          {"Entendido"}
        </span>
      </div>
    </div>
  </div>
  </>;
}
export default PQRSRadicacion;