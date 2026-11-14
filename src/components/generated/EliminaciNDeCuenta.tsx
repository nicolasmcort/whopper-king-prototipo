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
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const row1: React.CSSProperties = {
  display: "flex",
  justifyContent: "center"
};
const row2: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const text3: React.CSSProperties = {
  color: "#695f56",
  whiteSpace: "normal",
  lineHeight: "18px"
};
const layout1: React.CSSProperties = {
  minWidth: 0,
  minHeight: 52,
  boxSizing: "border-box"
};
const row3: React.CSSProperties = {
  ...row2,
  minWidth: 0
};
const col2: React.CSSProperties = {
  ...col1,
  minWidth: 0
};
const row4: React.CSSProperties = {
  ...row1,
  alignItems: "center"
};
const font_Inter_12: React.CSSProperties = {
  ...font_Inter,
  ...text2,
  color: "#82776e",
  whiteSpace: "normal",
  fontSize: 12,
  lineHeight: "17px"
};
export function EliminaciNDeCuenta() {
  return <div data-figma-id="342:1633" style={rootLayer(402, 998, {
    background: "linear-gradient(#ede8e2, #ede8e2)",
    backgroundColor: "#ffffff"
  })}>
    <div data-figma-id="342:1634" style={absoluteLayer("calc(50% + -201px)", "calc(50% + -499px)", 402, 998, {
      background: "#fffcf8",
      filter: "drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.12))"
    })}>
      <div data-figma-id="342:1635" style={{
        ...layout1,
        display: "flex",
        padding: "0 20px",
        alignItems: "center",
        gap: 14,
        position: "absolute",
        left: 0,
        top: 44,
        height: 52,
        right: 0
      }}>
        <div data-figma-id="342:1636" style={fixedLayer(44, 44, row2)}>
          <div data-figma-id="342:1637" style={fixedLayer(22, 22, {
            overflow: "hidden"
          })}>
            <div data-figma-id="342:1638" style={absoluteLayer("20.833%", "20.833%", "58.333%", "58.333%")} />
          </div>
        </div>
        <div data-figma-id="342:1639" style={fixedLayer("max-content", 30, col1)}>
          <span data-figma-id="342:1640" style={{
            ...font_Manrope,
            color: "#29241f",
            fontSize: 22,
            fontWeight: 800,
            fontVariationSettings: "\"wght\" 800",
            lineHeight: "30.052px",
            letterSpacing: "-0.2px",
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
            {"Privacidad y datos"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:1641" style={{
        ...col1,
        padding: "12px 20px 32px",
        boxSizing: "border-box",
        gap: 20,
        position: "absolute",
        left: 0,
        top: 96,
        height: 899,
        right: 0
      }}>
        <div data-figma-id="342:1642" style={{
          background: "#f5efe7",
          borderRadius: 16,
          minWidth: 0,
          display: "flex",
          padding: 16,
          boxSizing: "border-box",
          gap: 14,
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1643" style={fixedLayer(40, 42, {
            ...col1,
            minWidth: 40,
            minHeight: 0,
            padding: "2px 0 0",
            boxSizing: "border-box"
          })}>
            <div data-figma-id="342:1644" style={fixedLayer(40, 40, {
              background: "#fff1eb",
              borderRadius: 10,
              ...row1,
              minWidth: 40,
              minHeight: 0,
              alignItems: "center"
            })}>
              <div data-figma-id="342:1645" style={fixedLayer(22, 22, {
                overflow: "hidden"
              })}>
                <div data-figma-id="342:1646" style={absoluteLayer("16.667%", "8.333%", "66.667%", "83.333%")} />
              </div>
            </div>
          </div>
          <div data-figma-id="342:1647" style={fixedLayer("max-content", 78, {
            ...col1,
            gap: 4
          })}>
            <div data-figma-id="342:1648" style={{
              ...col1,
              minWidth: 266,
              position: "relative",
              height: 20,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="342:1649" style={{
                ...font_Manrope,
                ...text1,
                color: "#29241f",
                fontSize: 15,
                lineHeight: "20.49px",
                ...row3,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                {"Tus datos son tuyos"}
              </span>
            </div>
            <div data-figma-id="342:1650" style={fixedLayer(266, 54, col1)}>
              <span data-figma-id="342:1651" style={{
                ...font_Inter,
                ...text2,
                ...text3,
                fontSize: 13,
                minWidth: 0,
                position: "relative",
                height: 54,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "18px",
                  left: 0,
                  textAlign: "left"
                }}>{"Solo guardamos tu nombre, tu celular y tus \ndirecciones para gestionar tus pedidos. \nNunca guardamos datos de tarjetas."}</span>
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1652" style={{
          ...col1,
          minWidth: 0,
          gap: 16,
          position: "relative",
          height: 357,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1653" style={{
            ...col1,
            minWidth: 0,
            gap: 6,
            position: "relative",
            height: 106,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="342:1654" style={{
              ...col2,
              position: "relative",
              height: 20,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="342:1655" style={{
                ...font_Manrope,
                ...text1,
                color: "#29241f",
                fontSize: 15,
                lineHeight: "20.49px",
                ...row3,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                {"Política y tratamiento de datos"}
              </span>
            </div>
            <div data-figma-id="342:1656" style={{
              ...col2,
              position: "relative",
              height: 80,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="342:1657" style={{
                ...font_Inter,
                ...text2,
                color: "#82776e",
                whiteSpace: "normal",
                fontSize: 13,
                lineHeight: "20px",
                minWidth: 0,
                position: "relative",
                height: 80,
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
                }}>{"En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 \nde 2013, Whopper King recolecta y almacena únicamente \nlos datos indispensables para procesar, facturar y \ndespachar tus pedidos a domicilio."}</span>
              </span>
            </div>
          </div>
          <div data-figma-id="342:1658" style={{
            ...col1,
            minWidth: 0,
            gap: 14,
            position: "relative",
            height: 235,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="342:1659" style={{
              ...col1,
              minWidth: 0,
              gap: 4,
              position: "relative",
              height: 112,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="342:1660" style={{
                ...col2,
                position: "relative",
                height: 18,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="342:1661" style={{
                  ...font_Manrope,
                  ...text1,
                  color: "#29241f",
                  fontSize: 13,
                  lineHeight: "18px",
                  ...row3,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  {"Finalidad del tratamiento"}
                </span>
              </div>
              <div data-figma-id="342:1662" style={{
                ...col2,
                position: "relative",
                height: 90,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="342:1663" style={{
                  ...font_Inter,
                  ...text2,
                  ...text3,
                  fontSize: 12,
                  minWidth: 0,
                  position: "relative",
                  height: 90,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <span style={{
                    position: "absolute",
                    top: 0,
                    whiteSpace: "pre",
                    lineHeight: "18px",
                    left: 0,
                    textAlign: "left"
                  }}>{"• Identificación y registro de clientes para gestión de pedidos.\n• Envío de notificaciones operativas del estado de entrega vía \nWhatsApp o SMS.\n• No comercializamos, cedemos ni compartimos tu información \npersonal con terceros ni entidades financieras."}</span>
                </span>
              </div>
            </div>
            <div data-figma-id="342:1664" style={{
              background: "#ebe4dc",
              minWidth: 0,
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch"
            }} />
            <div data-figma-id="342:1665" style={{
              ...col1,
              minWidth: 0,
              gap: 4,
              position: "relative",
              height: 94,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="342:1666" style={{
                ...col2,
                position: "relative",
                height: 18,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="342:1667" style={{
                  ...font_Manrope,
                  ...text1,
                  color: "#29241f",
                  fontSize: 13,
                  lineHeight: "18px",
                  ...row3,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  {"Ejercicio de derechos (ARCO)"}
                </span>
              </div>
              <div data-figma-id="342:1668" style={{
                ...col2,
                position: "relative",
                height: 72,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="342:1669" style={{
                  ...font_Inter,
                  ...text2,
                  ...text3,
                  fontSize: 12,
                  minWidth: 0,
                  position: "relative",
                  height: 72,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                  <span style={{
                    position: "absolute",
                    top: 0,
                    whiteSpace: "pre",
                    lineHeight: "18px",
                    left: 0,
                    textAlign: "left"
                  }}>{"Como titular puedes conocer, actualizar, rectificar y solicitar la\nsupresión de tus datos o revocar esta autorización en cualquier\nmomento mediante solicitud escrita radicada al correo oficial\nde atención."}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1670" style={{
          ...col1,
          minWidth: 0,
          padding: "4px 6px",
          boxSizing: "border-box",
          gap: 3,
          position: "relative",
          height: 58,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1671" style={{
            ...col2,
            position: "relative",
            height: 13,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1672" style={{
              ...font_Inter,
              color: "#82776e",
              whiteSpace: "pre",
              fontSize: 11,
              fontWeight: 600,
              fontVariationSettings: "\"wght\" 600",
              lineHeight: "13.313px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              ...row3,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              {"RESPONSABLE DE TUS DATOS"}
            </span>
          </div>
          <div data-figma-id="342:1673" style={{
            ...col2,
            position: "relative",
            height: 34,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1674" style={{
              ...font_Inter_12,
              minWidth: 0,
              position: "relative",
              height: 34,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "17px",
                left: 0,
                textAlign: "left"
              }}>{"Whopper King Las Cuadras · NIT 000.000.000-0 ·\ndatos@whopperking.co"}</span>
            </span>
          </div>
        </div>
        <div data-figma-id="342:1675" style={{
          background: "#fff5f2",
          boxShadow: "inset 0 0 0 1px #f5d3cb",
          borderRadius: 14,
          ...col1,
          minWidth: 0,
          padding: "15px 17px",
          boxSizing: "border-box",
          gap: 4,
          position: "relative",
          height: 227,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1676" style={{
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            gap: 8,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="342:1677" style={fixedLayer(16, 16, {
              overflow: "hidden"
            })}>
              <div data-figma-id="342:1678" style={absoluteLayer("8.333%", "8.333%", "83.333%", "83.333%")} />
              <div data-figma-id="342:1679" style={absoluteLayer("50%", "33.333%", "0%", "16.667%")} />
              <div data-figma-id="342:1680" style={absoluteLayer("50%", "66.667%", "0.042%", "0%")} />
            </div>
            <div data-figma-id="342:1681" style={fixedLayer("max-content", 18, col1)}>
              <span data-figma-id="342:1682" style={{
                ...font_Manrope,
                ...text1,
                color: "#ed6047",
                fontSize: 13,
                lineHeight: "18px",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
                {"Supresión definitiva de información"}
              </span>
            </div>
          </div>
          <div data-figma-id="342:1683" style={{
            ...col2,
            position: "relative",
            height: 68,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1684" style={{
              ...font_Inter_12,
              minWidth: 0,
              position: "relative",
              height: 68,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "17px",
                left: 0,
                textAlign: "left"
              }}>{"La solicitud de eliminación de cuenta y revocatoria de\ndatos se atenderá en un plazo máximo de 15 días hábiles\nconforme al régimen general de protección de datos\npersonales."}</span>
            </span>
          </div>
          <div data-figma-id="342:1685" style={{
            ...col1,
            minWidth: 0,
            padding: "6px 0 0",
            boxSizing: "border-box",
            position: "relative",
            height: 103,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="342:1686" style={{
              ...col1,
              minWidth: 0,
              padding: "11px 0 0",
              boxSizing: "border-box",
              gap: 8,
              position: "relative",
              height: 97,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <div data-figma-id="342:1687" style={{
                background: "#ed6047",
                borderRadius: 12,
                filter: "drop-shadow(0px 2px 8px rgba(189, 65, 45, 0.25))",
                ...row1,
                minWidth: 0,
                minHeight: 48,
                padding: "14.5px 0",
                boxSizing: "border-box",
                alignItems: "center",
                gap: 8,
                position: "relative",
                height: "max-content",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <div data-figma-id="342:1688" style={fixedLayer(18, 18, {
                  overflow: "hidden"
                })}>
                  <div data-figma-id="342:1689" style={absoluteLayer("12.5%", "25%", "75%", "0%")} />
                  <div data-figma-id="342:1690" style={absoluteLayer("20.833%", "8.333%", "58.333%", "83.333%")} />
                  <div data-figma-id="342:1691" style={absoluteLayer("41.667%", "45.833%", "0%", "25%")} />
                  <div data-figma-id="342:1692" style={absoluteLayer("58.333%", "45.833%", "0%", "25%")} />
                </div>
                <div data-figma-id="342:1693" style={fixedLayer("max-content", 19, {
                  ...col1,
                  alignItems: "center"
                })}>
                  <span data-figma-id="342:1694" style={{
                    ...font_Manrope,
                    ...text1,
                    color: "#ffffff",
                    fontSize: 14,
                    lineHeight: "19px",
                    textAlign: "center",
                    ...row4,
                    position: "relative",
                    flexShrink: 0
                  }}>
                    {"Solicitar eliminación de cuenta"}
                  </span>
                </div>
              </div>
              <div data-figma-id="342:1695" style={{
                ...col1,
                minWidth: 0,
                alignItems: "center",
                position: "relative",
                height: 30,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
                <span data-figma-id="342:1696" style={{
                  ...font_Inter,
                  ...text2,
                  color: "#82776e",
                  whiteSpace: "pre",
                  fontSize: 11,
                  lineHeight: "15px",
                  textAlign: "center",
                  ...row4,
                  position: "relative",
                  flexShrink: 0
                }}>
                  {"Esta acción es irreversible y requiere confirmación por correo\nregistrado."}
                </span>
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
                borderTop: "1px solid #f5d3cb",
                borderStyle: "dashed"
              }} />
            </div>
          </div>
        </div>
        <div data-figma-id="342:1697" style={fixedLayer(362, 23, {
          ...col1,
          padding: "10px 114px 8px",
          boxSizing: "border-box",
          alignItems: "center"
        })}>
          <div data-figma-id="342:1698" style={fixedLayer(134, 5, {
            opacity: 0.8,
            background: "#29241f",
            borderRadius: 100
          })} />
        </div>
      </div>
      <div data-figma-id="342:1699" style={{
        minWidth: 0,
        minHeight: 44,
        display: "flex",
        padding: "0 24px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        left: 0,
        top: 0,
        height: 44,
        right: 0
      }}>
        <div data-figma-id="342:1700" style={fixedLayer("max-content", 17, col1)}>
          <span data-figma-id="342:1701" style={{
            ...font_Inter,
            color: "#29241f",
            whiteSpace: "pre",
            fontSize: 14,
            fontWeight: 600,
            fontVariationSettings: "\"wght\" 600",
            lineHeight: "17px",
            ...row2,
            position: "relative",
            flexShrink: 0
          }}>
            {"9:41"}
          </span>
        </div>
        <div data-figma-id="342:1702" style={fixedLayer(67, "max-content", {
          display: "flex",
          alignItems: "center",
          gap: 6
        })}>
          <div data-figma-id="342:1703" style={fixedLayer(17, 12, {
            overflow: "hidden"
          })}>
            <div data-figma-id="342:1704" style={absoluteLayer("5.882%", "8.333%", "94.118%", "83.333%")} />
          </div>
          <div data-figma-id="342:1705" style={fixedLayer(16, 12, {
            overflow: "hidden"
          })}>
            <div data-figma-id="342:1706" style={absoluteLayer("3.125%", "20.833%", "93.75%", "104.167%")} />
          </div>
          <div data-figma-id="342:1707" style={fixedLayer(22, 11, {
            overflow: "hidden"
          })}>
            <div data-figma-id="342:1708" style={absoluteLayer("3.409%", "6.818%", "81.818%", "86.364%")} />
            <div data-figma-id="342:1709" style={absoluteLayer("11.364%", "22.727%", "59.091%", "54.545%")} />
            <div data-figma-id="342:1710" style={absoluteLayer("93.182%", "36.364%", "0%", "27.273%")} />
          </div>
        </div>
      </div>
      <div data-figma-id="342:1711" style={{
        background: "rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(1px)",
        position: "absolute",
        left: 0,
        top: 3,
        right: 0,
        bottom: 0
      }} />
      <div data-figma-id="342:1712" style={{
        background: "#fffcf8",
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.32)",
        borderRadius: "24px 24px 0 0",
        filter: "drop-shadow(0px -12px 40px rgba(0, 0, 0, 0.18))",
        position: "absolute",
        left: "calc(50% + -199px)",
        width: 398,
        height: 394.63,
        bottom: 0.37
      }}>
        <div data-figma-id="342:1713" style={{
          ...row1,
          padding: "14px 0 8px",
          boxSizing: "border-box",
          position: "absolute",
          left: 1,
          top: 1,
          height: 26,
          right: 1
        }}>
          <div data-figma-id="342:1714" style={fixedLayer(40, 4, {
            background: "#d1c7bd",
            borderRadius: 9999
          })} />
        </div>
        <div data-figma-id="342:1715" style={{
          ...col1,
          padding: "20px 24px 28px",
          boxSizing: "border-box",
          alignItems: "center",
          position: "absolute",
          left: 1,
          top: 27,
          height: 350.63,
          right: 1
        }}>
          <div data-figma-id="342:1716" style={fixedLayer(64, 84, {
            ...col1,
            padding: "0 0 20px",
            boxSizing: "border-box"
          })}>
            <div data-figma-id="342:1717" style={fixedLayer(64, 64, {
              background: "#f5efe7",
              borderRadius: 9999,
              ...row4
            })}>
              <div data-figma-id="342:1718" style={fixedLayer(28, 28, {
                overflow: "hidden"
              })}>
                <div data-figma-id="342:1719" style={absoluteLayer("12.5%", "25%", "75%", "0%")} />
                <div data-figma-id="342:1720" style={absoluteLayer("20.833%", "8.333%", "58.333%", "83.333%")} />
                <div data-figma-id="342:1721" style={absoluteLayer("41.667%", "45.833%", "0%", "25%")} />
                <div data-figma-id="342:1722" style={absoluteLayer("58.333%", "45.833%", "0%", "25%")} />
              </div>
            </div>
          </div>
          <div data-figma-id="342:1723" style={fixedLayer(305.03, 35.5)}>
            <div data-figma-id="342:1724" style={absoluteLayer("calc(50% + -195.5px)", -1, 390, 28)}>
              <span data-figma-id="342:1725" style={{
                ...font_Manrope,
                ...text1,
                color: "#29241f",
                fontSize: 22,
                lineHeight: "30.052px",
                letterSpacing: "-0.55px",
                textAlign: "center",
                ...row4,
                position: "absolute",
                left: "calc(50% + -131px)",
                top: 0
              }}>
                {"¿Confirma la eliminación?"}
              </span>
            </div>
          </div>
          <div data-figma-id="342:1726" style={fixedLayer(238.98, 79.13, {
            maxWidth: 290
          })}>
            <div data-figma-id="342:1727" style={absoluteLayer(0, -0.72, "max-content", 48, {
              ...col1,
              maxWidth: 290,
              alignItems: "center"
            })}>
              <span data-figma-id="342:1728" style={fixedLayer(239, 48, {
                ...font_Inter,
                ...text2,
                color: "#82776e",
                whiteSpace: "normal",
                fontSize: 14.5,
                lineHeight: "23.56px",
                textAlign: "center"
              })}>
                <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "23.56px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 239,
                  textAlign: "center"
                }}>{"\nEsta acción no se puede deshacer."}</span>
              </span>
            </div>
          </div>
          <div data-figma-id="342:1729" style={{
            background: "#ed6047",
            borderRadius: 16,
            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
            ...row1,
            ...layout1,
            padding: "14px 0",
            alignItems: "center",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1730" style={{
              ...font_Manrope,
              ...text1,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "24px",
              textAlign: "center",
              ...row4,
              position: "relative",
              flexShrink: 0
            }}>
              {"Sí, eliminar"}
            </span>
          </div>
          <div data-figma-id="342:1731" style={{
            ...col1,
            ...layout1,
            padding: "8px 0 0",
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="342:1732" style={{
              ...row1,
              minWidth: 0,
              minHeight: 44,
              padding: "9.75px 0 11.25px",
              boxSizing: "border-box",
              alignItems: "center",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span data-figma-id="342:1733" style={{
                ...font_Inter,
                color: "#82776e",
                whiteSpace: "pre",
                fontSize: 16,
                fontWeight: 500,
                fontVariationSettings: "\"wght\" 500",
                lineHeight: "22.5px",
                textAlign: "center",
                ...row4,
                position: "relative",
                flexShrink: 0
              }}>
                {"Cancelar"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1734" style={{
          ...row1,
          padding: "4px 0 8px",
          boxSizing: "border-box",
          position: "absolute",
          left: 1,
          top: 377.63,
          height: 16,
          right: 1
        }}>
          <div data-figma-id="342:1735" style={fixedLayer(144, 4, {
            opacity: 0.9,
            background: "#1c1917",
            borderRadius: 9999
          })} />
        </div>
        <div data-figma-id="342:1736" style={{
          ...row1,
          padding: "4px 0 8px",
          boxSizing: "border-box",
          position: "absolute",
          left: 1,
          top: 377.63,
          height: 16,
          right: 1
        }}>
          <div data-figma-id="342:1737" style={fixedLayer(144, 4, {
            opacity: 0.9,
            background: "#1c1917",
            borderRadius: 9999
          })} />
        </div>
      </div>
    </div>
  </div>;
}
export default EliminaciNDeCuenta;