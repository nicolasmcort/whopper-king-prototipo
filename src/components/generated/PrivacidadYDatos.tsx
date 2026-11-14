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
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const text3: React.CSSProperties = {
  color: "#695f56",
  whiteSpace: "normal",
  lineHeight: "18px"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const row2: React.CSSProperties = {
  minWidth: 0,
  display: "flex",
  alignItems: "center"
};
const col2: React.CSSProperties = {
  ...col1,
  minWidth: 0
};
const text2: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  fontVariationSettings: "\"wght\" 700",
  lineHeight: "22px"
};
const font_Manrope_16: React.CSSProperties = {
  ...font_Manrope,
  ...text2,
  color: "#29241f"
};
const font_Inter_12: React.CSSProperties = {
  ...font_Inter,
  ...text1,
  color: "#82776e",
  whiteSpace: "normal",
  fontSize: 12,
  lineHeight: "17px"
};
export function PrivacidadYDatos() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-391" d="M10.5 3L10.5 13.5C10.5 14.328 9.828 15 9 15L1.5 15C0.672 15 0 14.328 0 13.5L0 3M2.25 3L2.25 1.5C2.25 0.672 2.922 0 3.75 0L6.75 0C7.578 0 8.25 0.672 8.25 1.5L8.25 3" fillRule="nonzero" />
        <path id="figma-vector-392" d="M0 0L0 4.5" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="342:1556" style={rootLayer(402, 998, {
      background: "linear-gradient(#ede8e2, #ede8e2)",
      backgroundColor: "#ffffff"
    })}>
    <div data-figma-id="342:1557" style={absoluteLayer("calc(50% + -201px)", "calc(50% + -499px)", 402, 998, {
        background: "#fffcf8",
        filter: "drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.12))"
      })}>
      <div data-figma-id="342:1558" style={{
          minWidth: 0,
          minHeight: 52,
          display: "flex",
          padding: "0 20px",
          boxSizing: "border-box",
          alignItems: "center",
          gap: 14,
          position: "absolute",
          left: 0,
          top: 44,
          height: 52,
          right: 0
        }}>
        <div data-figma-id="342:1559" style={fixedLayer(44, 45)}>
          <div data-figma-id="342:1560" style={absoluteLayer("calc(50% + -6px)", "calc(50% + -6.5px)", 12.833, 12.833)} />
        </div>
        <div data-figma-id="342:1561" style={fixedLayer("max-content", 30, col1)}>
          <span data-figma-id="342:1562" style={{
              ...font_Manrope,
              color: "#29241f",
              fontSize: 22,
              fontWeight: 800,
              fontVariationSettings: "\"wght\" 800",
              lineHeight: "30.052px",
              letterSpacing: "-0.2px",
              display: "flex",
              alignItems: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"Privacidad y datos"}
          </span>
        </div>
      </div>
      <div data-figma-id="342:1563" style={{
          ...col1,
          padding: "12px 25px 32px",
          boxSizing: "border-box",
          gap: 20,
          position: "absolute",
          left: 0,
          top: 96,
          height: 956,
          right: 0
        }}>
        <div data-figma-id="342:1564" style={{
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
          <div data-figma-id="342:1565" style={fixedLayer(40, 42, {
              ...col1,
              minWidth: 40,
              minHeight: 0,
              padding: "2px 0 0",
              boxSizing: "border-box"
            })}>
            <div data-figma-id="342:1566" style={fixedLayer(40, 40, {
                background: "#ffffff",
                borderRadius: 10,
                ...row1,
                minWidth: 40,
                minHeight: 0
              })}>
              <div data-figma-id="342:1567" style={fixedLayer(22, 22, {
                  overflow: "hidden"
                })}>
                <div data-figma-id="342:1568" style={absoluteLayer("16.667%", "8.333%", "66.667%", "83.333%")} />
              </div>
            </div>
          </div>
          <div data-figma-id="342:1569" style={fixedLayer("max-content", 80, {
              ...col1,
              gap: 4
            })}>
            <div data-figma-id="342:1570" style={{
                ...col1,
                minWidth: 266,
                position: "relative",
                height: 22,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="342:1571" style={{
                  ...font_Manrope_16,
                  ...row2,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                {"Tus datos son tuyos"}
              </span>
            </div>
            <div data-figma-id="342:1572" style={fixedLayer(266, 54, col1)}>
              <span data-figma-id="342:1573" style={{
                  ...font_Inter,
                  ...text1,
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
        <div data-figma-id="342:1574" style={{
            ...col1,
            minWidth: 0,
            gap: 16,
            position: "relative",
            height: 385,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1575" style={{
              ...col1,
              minWidth: 0,
              gap: 6,
              position: "relative",
              height: 108,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1576" style={{
                ...col2,
                position: "relative",
                height: 22,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="342:1577" style={{
                  ...font_Manrope_16,
                  ...row2,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                {"Política y tratamiento de datos"}
              </span>
            </div>
            <div data-figma-id="342:1578" style={{
                ...col2,
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <span data-figma-id="342:1579" style={{
                  ...font_Inter,
                  ...text1,
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
                  }}>{"En cumplimiento de la Ley 1581 de 2012 y el Decreto \n1377 de 2013, Whopper King recolecta y almacena \núnicamente los datos indispensables para procesar, \nfacturar y despachar tus pedidos a domicilio."}</span>
              </span>
            </div>
          </div>
          <div data-figma-id="342:1580" style={{
              ...col1,
              minWidth: 0,
              gap: 14,
              position: "relative",
              height: 261,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1581" style={{
                ...col1,
                minWidth: 0,
                gap: 4,
                position: "relative",
                height: 134,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="342:1582" style={{
                  ...col2,
                  position: "relative",
                  height: 22,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:1583" style={{
                    ...font_Manrope_16,
                    ...row2,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Finalidad del tratamiento"}
                </span>
              </div>
              <div data-figma-id="342:1584" style={{
                  ...col2,
                  position: "relative",
                  height: 108,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:1585" style={{
                    ...font_Inter,
                    ...text1,
                    ...text3,
                    fontSize: 12,
                    minWidth: 0,
                    position: "relative",
                    height: 108,
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
                    }}>{"• Identificación y registro de clientes para gestión de \npedidos.\n• Envío de notificaciones operativas del estado de entrega vía \nWhatsApp o SMS.\n• No comercializamos, cedemos ni compartimos tu \ninformación personal con terceros ni entidades financieras."}</span>
                </span>
              </div>
            </div>
            <div data-figma-id="342:1586" style={{
                background: "#ebe4dc",
                minWidth: 0,
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch"
              }} />
            <div data-figma-id="342:1587" style={{
                ...col1,
                minWidth: 0,
                gap: 4,
                position: "relative",
                height: 98,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="342:1588" style={{
                  ...col2,
                  position: "relative",
                  height: 22,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:1589" style={{
                    ...font_Manrope_16,
                    ...row2,
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  {"Ejercicio de derechos (ARCO)"}
                </span>
              </div>
              <div data-figma-id="342:1590" style={{
                  ...col2,
                  position: "relative",
                  height: 72,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:1591" style={{
                    ...font_Inter,
                    ...text1,
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
                    }}>{"Como titular puedes conocer, actualizar, rectificar y solicitar \nla supresión de tus datos o revocar esta autorización en \ncualquier momento mediante solicitud escrita radicada al \ncorreo oficial de atención."}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1592" style={{
            ...col1,
            minWidth: 0,
            padding: "4px 6px",
            boxSizing: "border-box",
            gap: 3,
            position: "relative",
            height: 61,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1593" style={{
              ...col2,
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="342:1594" style={{
                ...font_Inter,
                color: "#82776e",
                whiteSpace: "pre",
                fontSize: 13,
                fontWeight: 600,
                fontVariationSettings: "\"wght\" 600",
                lineHeight: "16px",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                ...row2,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"RESPONSABLE DE TUS DATOS"}
            </span>
          </div>
          <div data-figma-id="342:1595" style={{
              ...col2,
              position: "relative",
              height: 34,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="342:1596" style={{
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
        <div data-figma-id="342:1597" style={{
            background: "#fff5f2",
            boxShadow: "inset 0 0 0 1px #f5d3cb",
            borderRadius: 14,
            ...col1,
            minWidth: 0,
            padding: "15px 17px",
            boxSizing: "border-box",
            gap: 4,
            position: "relative",
            height: 251,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1598" style={{
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              gap: 8,
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1599" style={fixedLayer(16, 16, {
                overflow: "hidden"
              })}>
              <div data-figma-id="342:1600" style={absoluteLayer("8.333%", "8.333%", "83.333%", "83.333%")} />
              <div data-figma-id="342:1601" style={absoluteLayer("50%", "33.333%", "0%", "16.667%")} />
              <div data-figma-id="342:1602" style={absoluteLayer("50%", "66.667%", "0.042%", "0%")} />
            </div>
            <div data-figma-id="342:1603" style={fixedLayer("max-content", 22, col1)}>
              <span data-figma-id="342:1604" style={{
                  ...font_Manrope,
                  ...text2,
                  color: "#ed6047",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  flexShrink: 0
                }}>
                {"Supresión definitiva de información"}
              </span>
            </div>
          </div>
          <div data-figma-id="342:1605" style={{
              ...col2,
              position: "relative",
              height: 85,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="342:1606" style={{
                ...font_Inter_12,
                minWidth: 0,
                position: "relative",
                height: 85,
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
                }}>{"La solicitud de eliminación de cuenta y revocatoria de\ndatos se atenderá en un plazo máximo de 15 días \nhábiles\nconforme al régimen general de protección de datos\npersonales."}</span>
            </span>
          </div>
          <div data-figma-id="342:1607" style={{
              ...col1,
              minWidth: 0,
              padding: "6px 0 0",
              boxSizing: "border-box",
              position: "relative",
              height: 106,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1608" style={{
                ...col1,
                minWidth: 0,
                padding: "11px 0 0",
                boxSizing: "border-box",
                gap: 8,
                position: "relative",
                height: 100,
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              <div data-figma-id="342:1609" style={{
                  background: "#ed6047",
                  borderRadius: 12,
                  filter: "drop-shadow(0px 2px 8px rgba(189, 65, 45, 0.25))",
                  ...row1,
                  minWidth: 0,
                  minHeight: 48,
                  padding: "14.5px 0",
                  boxSizing: "border-box",
                  gap: 8,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:1610" style={fixedLayer(18, 18, {
                    overflow: "hidden"
                  })}>
                  <div data-figma-id="342:1611" style={absoluteLayer("12.5%", "25%", "75%", "0%")} />
                  <svg data-figma-id="342:1612" viewBox="-0.825 -0.825 12.15 16.65" preserveAspectRatio="none" style={absoluteLayer("calc(20.833% - 0.825px)", "calc(8.333% - 0.825px)", "calc(58.333% + 1.65px)", "calc(83.333% + 1.65px)")}>
                    <use href="#figma-vector-391" fill="transparent" stroke="#ffffff" strokeWidth={1.65} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg data-figma-id="342:1613" viewBox="-825 -0.825 1651 6.15" preserveAspectRatio="none" style={absoluteLayer("calc(41.667% - 0.825px)", "calc(45.833% - 0.825px)", 1, "calc(25% + 1.65px)")}>
                    <path d="M0 0L0 4.5" fill="transparent" fillRule="nonzero" stroke="#ffffff" strokeWidth={1.65} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div data-figma-id="342:1614" style={absoluteLayer("58.333%", "45.833%", "0%", "25%")} />
                </div>
                <div data-figma-id="342:1615" style={fixedLayer("max-content", 22, {
                    ...col1,
                    alignItems: "center"
                  })}>
                  <span data-figma-id="342:1616" style={{
                      ...font_Manrope,
                      ...text2,
                      color: "#ffffff",
                      textAlign: "center",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Solicitar eliminación de cuenta"}
                  </span>
                </div>
              </div>
              <div data-figma-id="342:1617" style={{
                  ...col1,
                  minWidth: 0,
                  alignItems: "center",
                  position: "relative",
                  height: 30,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <span data-figma-id="342:1618" style={{
                    ...font_Inter,
                    ...text1,
                    color: "#82776e",
                    whiteSpace: "pre",
                    fontSize: 11,
                    lineHeight: "15px",
                    textAlign: "center",
                    ...row1,
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
        <div data-figma-id="342:1619" style={fixedLayer(362, 23, {
            ...col1,
            padding: "10px 114px 8px",
            boxSizing: "border-box",
            alignItems: "center"
          })}>
          <div data-figma-id="342:1620" style={fixedLayer(134, 5, {
              opacity: 0.8,
              background: "#29241f",
              borderRadius: 100
            })} />
        </div>
      </div>
      <div data-figma-id="342:1621" style={{
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
        <div data-figma-id="342:1622" style={fixedLayer("max-content", 17, col1)}>
          <span data-figma-id="342:1623" style={{
              ...font_Inter,
              color: "#29241f",
              whiteSpace: "pre",
              fontSize: 14,
              fontWeight: 600,
              fontVariationSettings: "\"wght\" 600",
              lineHeight: "17px",
              display: "flex",
              alignItems: "center",
              position: "relative",
              flexShrink: 0
            }}>
            {"9:41"}
          </span>
        </div>
        <div data-figma-id="342:1624" style={fixedLayer(67, "max-content", {
            display: "flex",
            alignItems: "center",
            gap: 6
          })}>
          <div data-figma-id="342:1625" style={fixedLayer(17, 12, {
              overflow: "hidden"
            })}>
            <div data-figma-id="342:1626" style={absoluteLayer("5.882%", "8.333%", "94.118%", "83.333%")} />
          </div>
          <div data-figma-id="342:1627" style={fixedLayer(16, 12, {
              overflow: "hidden"
            })}>
            <div data-figma-id="342:1628" style={absoluteLayer("3.125%", "20.833%", "93.75%", "104.167%")} />
          </div>
          <div data-figma-id="342:1629" style={fixedLayer(22, 11, {
              overflow: "hidden"
            })}>
            <div data-figma-id="342:1630" style={absoluteLayer("3.409%", "6.818%", "81.818%", "86.364%")} />
            <div data-figma-id="342:1631" style={absoluteLayer("11.364%", "22.727%", "59.091%", "54.545%")} />
            <div data-figma-id="342:1632" style={absoluteLayer("93.182%", "36.364%", "0%", "27.273%")} />
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default PrivacidadYDatos;