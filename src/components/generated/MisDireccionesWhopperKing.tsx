import React from 'react';
import { ClientCartIcon, ClientCartIconOutline } from '../ClientCartIcon';
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
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const layout1: React.CSSProperties = {
  boxSizing: "border-box",
  justifyContent: "space-between"
};
const col3: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const text2: React.CSSProperties = {
  color: "#29241f",
  fontWeight: 500,
  fontVariationSettings: "\"wght\" 500"
};
const text3: React.CSSProperties = {
  color: "#82776e",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text4: React.CSSProperties = {
  whiteSpace: "pre",
  fontSize: 14,
  lineHeight: "20px"
};
const row2: React.CSSProperties = {
  display: "flex",
  boxSizing: "border-box",
  gap: 14
};
const col2: React.CSSProperties = {
  ...col3,
  gap: 2
};
const row3: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const col1: React.CSSProperties = {
  ...col3,
  padding: "2px 0 0",
  boxSizing: "border-box"
};
const col4: React.CSSProperties = {
  ...col3,
  padding: "0 0 0 8px",
  boxSizing: "border-box"
};
export function MisDireccionesWhopperKing() {
  return <>
    <svg aria-hidden="true" data-mp-layer-tree-ignore="true" style={{
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden"
    }}>
      <defs>
        <path id="figma-vector-315" d="M12.177 1.864L13.582 0.457C14.192 -0.152 15.183 -0.152 15.792 0.457C16.402 1.067 16.402 2.058 15.792 2.667L3.818 14.642C3.378 15.082 2.834 15.406 2.237 15.583L0 16.25L0.667 14.012C0.844 13.415 1.168 12.872 1.608 12.432L12.177 1.864L12.177 1.864" fillRule="nonzero" />
      </defs>
    </svg>
  <div data-figma-id="342:1452" style={rootLayer("100%", "max-content", {
      background: "linear-gradient(#ece5de, #ece5de)",
      backgroundColor: "#ffffff",
      ...row1,
      minWidth: 0,
      justifyContent: "center"
    })}>
    <div data-figma-id="342:1453" style={fixedLayer(402, 940, {
        background: "#fffcf8",
        boxShadow: "0px 25px 50px -12px rgba(41, 36, 31, 0.25)",
        minWidth: 0,
        minHeight: 940,
        overflow: "hidden"
      })}>
      <div data-figma-id="342:1454" style={{
          display: "flex",
          padding: "8px 20px 12px",
          boxSizing: "border-box",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 8,
          position: "absolute",
          left: 0,
          top: 38.5,
          height: 92,
          right: 0
        }}>
        <div data-figma-id="342:1455" style={fixedLayer(358, "max-content", row1)}>
          <div data-figma-id="342:1456" style={fixedLayer(44, 44, row3)}>
            <div data-figma-id="342:1457" style={fixedLayer(24, 24, {
                overflow: "hidden"
              })} />
          </div>
        </div>
        <div data-figma-id="342:1458" style={{
            ...col2,
            minWidth: 0,
            position: "relative",
            height: 20,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1459" style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              height: 20,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <span data-figma-id="342:1460" style={{
                ...font_Inter,
                ...text3,
                ...text4,
                ...row1,
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Elige dónde quieres recibir tus domicilios."}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1461" style={{
          overflow: "hidden",
          display: "flex",
          padding: "0 20px 24px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 32,
          position: "absolute",
          left: 0,
          top: 131,
          right: 0,
          bottom: 101
        }}>
        <div data-figma-id="342:1462" style={{
            boxShadow: "inset 0 1px 0 0 #ebe4dc",
            minWidth: 0,
            display: "flex",
            padding: "1px 0 0",
            boxSizing: "border-box",
            flexDirection: "column",
            position: "relative",
            height: 250,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1463" style={{
              boxShadow: "inset 0 -1px 0 0 #ebe4dc",
              ...layout1,
              minWidth: 0,
              display: "flex",
              padding: "16px 0 17px",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1464" style={fixedLayer(255.13, "max-content", {
                ...row2,
                padding: "0 8px 0 0"
              })}>
              <div data-figma-id="342:1465" style={fixedLayer(44, 46, col1)}>
                <div data-figma-id="342:1466" style={fixedLayer(44, 44, {
                    background: "#f5efe7",
                    borderRadius: 16,
                    ...row3
                  })}>
                  <div data-figma-id="342:1467" style={fixedLayer(24, 24, {
                      overflow: "hidden"
                    })}>
                    <div data-figma-id="342:1468" style={absoluteLayer("9.375%", "11.316%", "81.25%", "76.184%")} />
                  </div>
                </div>
              </div>
              <div data-figma-id="342:1469" style={fixedLayer("max-content", 101, col2)}>
                <div data-figma-id="342:1470" style={{
                    ...row1,
                    minWidth: 189.13,
                    gap: 8,
                    position: "relative",
                    height: "max-content",
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <div data-figma-id="342:1471" style={fixedLayer("max-content", 24, col3)}>
                    <span data-figma-id="342:1472" style={{
                        ...font_Manrope,
                        ...text1,
                        color: "#29241f",
                        fontSize: 16,
                        lineHeight: "24px",
                        ...row1,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Casa"}
                    </span>
                  </div>
                  <div data-figma-id="342:1473" style={fixedLayer("max-content", 21, {
                      background: "#fff1eb",
                      borderRadius: 9999,
                      display: "flex",
                      padding: "2px 8px",
                      boxSizing: "border-box",
                      flexDirection: "column"
                    })}>
                    <span data-figma-id="342:1474" style={{
                        ...font_Manrope,
                        ...text1,
                        color: "#ed6047",
                        fontSize: 11,
                        lineHeight: "16.5px",
                        letterSpacing: "0.275px",
                        ...row1,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Predeterminada"}
                    </span>
                  </div>
                </div>
                <div data-figma-id="342:1475" style={{
                    ...col1,
                    minWidth: 189.13,
                    position: "relative",
                    height: 41,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:1476" style={{
                      ...font_Inter,
                      ...text2,
                      whiteSpace: "pre",
                      fontSize: 14,
                      lineHeight: "19.25px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Calle 18 # 25-40 · Barrio Las\nCuadras"}
                  </span>
                </div>
                <div data-figma-id="342:1477" style={{
                    minWidth: 189.13,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    height: 32,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:1478" style={fixedLayer(189, 32, {
                      ...font_Inter,
                      ...text3,
                      whiteSpace: "normal",
                      fontSize: 12,
                      lineHeight: "16px"
                    })}>
                    <span style={{
                        position: "absolute",
                        top: 0,
                        whiteSpace: "pre",
                        lineHeight: "16px",
                        left: 0,
                        textAlign: "left"
                      }}>{"Apto 302 · Casa esquinera de \nrejas negras"}</span>
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="342:1479" style={fixedLayer(88, "max-content", row1)}>
              <div data-figma-id="342:1480" style={fixedLayer(44, 44)}>
                <svg data-figma-id="342:1481" viewBox="-0.75 -0.75 17.75 17.75" preserveAspectRatio="none" style={absoluteLayer(11.25, 13.25, 17.75, 17.75)}>
                  <use href="#figma-vector-315" fill="transparent" stroke="#82776e" strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div data-figma-id="342:1482" style={fixedLayer(44, 44, row3)}>
                <div data-figma-id="342:1483" style={fixedLayer(20, 20, {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            })}>
            <ClientCartIconOutline size={20} color="#82776e" />
          </div>
              </div>
            </div>
          </div>
          <div data-figma-id="342:1487" style={{
              boxShadow: "inset 0 -1px 0 0 #ebe4dc",
              ...layout1,
              minWidth: 0,
              display: "flex",
              padding: "16px 0 17px",
              position: "relative",
              height: "max-content",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1488" style={fixedLayer(249.39, "max-content", {
                ...row2,
                padding: "0 8px 0 0"
              })}>
              <div data-figma-id="342:1489" style={fixedLayer(44, 46, col1)}>
                <div data-figma-id="342:1490" style={fixedLayer(44, 44, {
                    background: "#f5efe7",
                    borderRadius: 16,
                    ...row3
                  })}>
                  <div data-figma-id="342:1491" style={fixedLayer(24, 24, {
                      overflow: "hidden"
                    })}>
                    <div data-figma-id="342:1492" style={absoluteLayer("12.5%", "12.5%", "75%", "75%")} />
                  </div>
                </div>
              </div>
              <div data-figma-id="342:1493" style={fixedLayer("max-content", 82, col2)}>
                <span data-figma-id="342:1494" style={{
                    ...font_Manrope,
                    ...text1,
                    color: "#29241f",
                    fontSize: 16,
                    lineHeight: "24px",
                    ...row1,
                    position: "relative",
                    flexShrink: 0
                  }}>
                  {"Trabajo"}
                </span>
                <div data-figma-id="342:1495" style={{
                    ...col1,
                    minWidth: 183.39,
                    position: "relative",
                    height: 22,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:1496" style={{
                      ...font_Inter,
                      ...text2,
                      whiteSpace: "pre",
                      fontSize: 14,
                      lineHeight: "19.25px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Carrera 27 # 14-30 · Centro"}
                  </span>
                </div>
                <div data-figma-id="342:1497" style={{
                    minWidth: 183.39,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    height: 32,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                  <span data-figma-id="342:1498" style={{
                      ...font_Inter,
                      ...text3,
                      whiteSpace: "pre",
                      fontSize: 12,
                      lineHeight: "16px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Oficina 204 · Preguntar en\nportería"}
                  </span>
                </div>
              </div>
            </div>
            <div data-figma-id="342:1499" style={fixedLayer(88, "max-content", row1)}>
              <div data-figma-id="342:1500" style={fixedLayer(44, 44, row3)}>
                <div data-figma-id="342:1501" style={fixedLayer(20, 20, {
                    overflow: "hidden"
                  })}>
                  <svg data-figma-id="342:1502" viewBox="-0.75 -0.75 17.75 17.75" preserveAspectRatio="none" style={absoluteLayer("calc(10% - 0.75px)", "calc(10% - 0.75px)", "calc(81.249% + 1.5px)", "calc(81.249% + 1.5px)")}>
                    <use href="#figma-vector-315" fill="transparent" stroke="#82776e" strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div data-figma-id="342:1503" style={fixedLayer(44, 44, {
                  background: "#f5efe7",
                  borderRadius: 9999,
                  ...row3
                })}>
                <div data-figma-id="342:1504" style={fixedLayer(20, 20, {
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            })}>
            <ClientCartIconOutline size={20} color="#82776e" />
          </div>
              </div>
            </div>
            <div data-figma-id="342:1508" style={{
                background: "#ffffff",
                boxShadow: "inset 0 0 0 1px #ebe4dc, 0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 10px 25px -5px rgba(0, 0, 0, 0.1)",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex",
                padding: 1,
                boxSizing: "border-box",
                flexDirection: "column",
                position: "absolute",
                top: 56,
                width: 256,
                height: 95,
                right: 0
              }}>
              <div data-figma-id="342:1509" style={{
                  ...row1,
                  minWidth: 0,
                  minHeight: 46,
                  padding: "13px 16px",
                  boxSizing: "border-box",
                  gap: 12,
                  position: "relative",
                  height: "max-content",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:1510" style={fixedLayer(20, 20, {
                    overflow: "hidden"
                  })}>
                  <div data-figma-id="342:1511" style={absoluteLayer("11.854%", "13.126%", "76.297%", "72.802%")} />
                </div>
                <div data-figma-id="342:1512" style={fixedLayer("max-content", 20, col3)}>
                  <span data-figma-id="342:1513" style={{
                      ...font_Inter,
                      ...text2,
                      ...text4,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                    {"Usar como predeterminada"}
                  </span>
                </div>
              </div>
              <div data-figma-id="342:1514" style={{
                  background: "rgba(235, 228, 220, 0.7)",
                  minWidth: 0,
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }} />
              <div data-figma-id="342:1515" style={{
                  minWidth: 0,
                  minHeight: 46,
                  position: "relative",
                  height: 46,
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                <div data-figma-id="342:1516" style={absoluteLayer(16, 10, 92, 23, {
                    overflow: "hidden"
                  })}>
                  <div data-figma-id="342:1517" style={absoluteLayer(0, 2, 20, 20, {
                      overflow: "hidden"
                    })}>
                    <div data-figma-id="342:1518" style={absoluteLayer("15.625%", "9.373%", "68.75%", "81.252%")} />
                  </div>
                  <div data-figma-id="342:1519" style={absoluteLayer(32, 2, "max-content", 20, col3)}>
                    <span data-figma-id="342:1520" style={{
                        ...font_Inter,
                        ...text4,
                        color: "#ed6047",
                        fontWeight: 600,
                        fontVariationSettings: "\"wght\" 600",
                        ...row1,
                        position: "relative",
                        flexShrink: 0
                      }}>
                      {"Eliminar"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1521" style={{
            background: "#f5efe7",
            boxShadow: "inset 0 0 0 1px rgba(235, 228, 220, 0.4)",
            borderRadius: 16,
            ...row2,
            minWidth: 0,
            padding: 17,
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1522" style={fixedLayer("max-content", 22, col1)}>
            <div data-figma-id="342:1523" style={fixedLayer(20, 20, {
                overflow: "hidden"
              })}>
              <div data-figma-id="342:1524" style={absoluteLayer("37.5%", "31.25%", "25%", "25%")} />
              <div data-figma-id="342:1525" style={absoluteLayer("18.75%", "12.5%", "62.5%", "78.125%")} />
            </div>
          </div>
          <div data-figma-id="342:1526" style={fixedLayer(274, 59, {
              display: "flex",
              padding: "0 25.84px 0 0",
              boxSizing: "border-box",
              flexDirection: "column"
            })}>
            <span data-figma-id="342:1527" style={fixedLayer(274, 59, {
                ...font_Inter,
                ...text2,
                whiteSpace: "normal",
                fontSize: 12,
                lineHeight: "19.5px"
              })}>
              <span style={{
                  position: "absolute",
                  top: 0,
                  whiteSpace: "pre",
                  lineHeight: "19.5px",
                  left: 0,
                  textAlign: "left"
                }}>{"Por ahora solo hacemos domicilios en Pasto. \nPróximamente habilitaremos más zonas de \ncobertura."}</span>
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1528" style={{
          ...row1,
          ...layout1,
          padding: "12px 32px 4px",
          position: "absolute",
          left: 0,
          top: 0,
          height: "max-content",
          right: 0
        }}>
        <div data-figma-id="342:1529" style={fixedLayer(28.73, 22.5)}>
          <span data-figma-id="342:1530" style={{
              ...font_Inter,
              color: "#29241f",
              whiteSpace: "pre",
              fontSize: 15,
              fontWeight: 600,
              fontVariationSettings: "\"wght\" 600",
              lineHeight: "22.5px",
              letterSpacing: "-0.375px",
              ...row1,
              position: "absolute",
              left: 0,
              top: -1
            }}>
            {"9:41"}
          </span>
        </div>
        <div data-figma-id="342:1531" style={fixedLayer(76, "max-content", row1)}>
          <div data-figma-id="342:1532" style={fixedLayer(16, 14, {
              overflow: "hidden"
            })}>
            <div data-figma-id="342:1533" style={absoluteLayer("0%", "66.807%", "17.647%", "20.168%")} />
            <div data-figma-id="342:1534" style={absoluteLayer("26.471%", "50%", "17.647%", "36.975%")} />
            <div data-figma-id="342:1535" style={absoluteLayer("52.941%", "33.193%", "17.647%", "53.782%")} />
            <div data-figma-id="342:1536" style={absoluteLayer("79.412%", "16.387%", "17.647%", "70.588%")} />
          </div>
          <div data-figma-id="342:1537" style={fixedLayer(24, 14, col4)}>
            <div data-figma-id="342:1538" style={fixedLayer(16, 14, {
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              })}>
              <div data-figma-id="342:1539" style={{
                  minHeight: 0,
                  overflow: "hidden",
                  position: "relative",
                  width: 16,
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0
                }}>
                <div data-figma-id="342:1540" style={absoluteLayer("-2.545%", "10.035%", "105.438%", "82.822%")} />
              </div>
            </div>
          </div>
          <div data-figma-id="342:1541" style={fixedLayer("max-content", 12, col4)}>
            <div data-figma-id="342:1542" style={fixedLayer(28, "max-content", row1)}>
              <div data-figma-id="342:1543" style={fixedLayer(24, 12, {
                  boxShadow: "inset 0 0 0 1px #29241f",
                  borderRadius: 4,
                  ...row1,
                  padding: 3,
                  boxSizing: "border-box"
                })}>
                <div data-figma-id="342:1544" style={fixedLayer(16, 8, {
                    background: "#29241f",
                    borderRadius: 2
                  })} />
              </div>
              <div data-figma-id="342:1545" style={fixedLayer(4, 6, {
                  display: "flex",
                  padding: "0 0 0 2px",
                  boxSizing: "border-box",
                  flexDirection: "column"
                })}>
                <div data-figma-id="342:1546" style={fixedLayer(2, 6, {
                    background: "#29241f",
                    borderRadius: "0 2px 2px 0"
                  })} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1547" style={{
          ...row1,
          padding: "8px 20px",
          boxSizing: "border-box",
          position: "absolute",
          left: 0,
          top: 36,
          height: "max-content",
          right: 0
        }}>
        <div data-figma-id="342:1548" style={fixedLayer(42.833, "max-content", {
            ...row1,
            padding: "16px 15px",
            boxSizing: "border-box",
            gap: 10
          })}>
          <div data-figma-id="342:1549" style={fixedLayer(12.833, 12.833)} />
        </div>
        <span data-figma-id="342:1550" style={{
            ...font_Manrope,
            color: "#29241f",
            fontSize: 22,
            fontWeight: 800,
            fontVariationSettings: "\"wght\" 800",
            lineHeight: "30.052px",
            letterSpacing: "-0.4px",
            ...row1,
            position: "relative",
            flexShrink: 0
          }}>
          {"   Mis direcciones"}
        </span>
      </div>
      <div data-figma-id="342:1551" style={{
          background: "linear-gradient(180deg, rgba(255, 252, 248, 0) 0%, rgba(255, 252, 248, 0.95) 20%, #fffcf8 100%)",
          display: "flex",
          padding: "12px 20px 24px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 12,
          position: "absolute",
          left: 0,
          height: 109,
          right: 0,
          bottom: 0
        }}>
        <div data-figma-id="342:1552" style={{
            background: "#ed6047",
            borderRadius: 12,
            filter: "drop-shadow(0px 4px 12px rgba(237, 96, 71, 0.25))",
            ...row1,
            minWidth: 0,
            justifyContent: "center",
            position: "relative",
            height: 52,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <span data-figma-id="342:1553" style={{
              ...font_Manrope,
              ...text1,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "22.5px",
              textAlign: "center",
              ...row3,
              position: "relative",
              flexShrink: 0
            }}>
            {"+   Agregar nueva dirección"}
          </span>
        </div>
        <div data-figma-id="342:1554" style={fixedLayer(362, 9, {
            ...row1,
            padding: "4px 114px 0",
            boxSizing: "border-box",
            flexDirection: "column"
          })}>
          <div data-figma-id="342:1555" style={fixedLayer(134, 5, {
              opacity: 0.85,
              background: "#29241f",
              borderRadius: 3
            })} />
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default MisDireccionesWhopperKing;