import React, { useEffect, useState } from 'react';
import { ClientCartIcon, ClientCartIconOutline } from '@/shared/components/ui/ClientCartIcon';
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
  ClientBriefcaseIcon,
  ClientMoreVerticalIcon,
  ClientStarIcon,
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
function AddressOptionsMenu({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  const itemRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "18px",
    whiteSpace: "nowrap",
    cursor: "pointer",
  };

  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <div
        role="button"
        aria-label="Opciones de dirección"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          background: "#f5efe7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <ClientMoreVerticalIcon size={16} color="#29241f" />
      </div>
      {open ? (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            top: 42,
            right: 0,
            minWidth: 220,
            background: "#ffffff",
            borderRadius: 12,
            boxShadow: "0 10px 28px rgba(41, 36, 31, 0.16)",
            overflow: "hidden",
            zIndex: 40,
          }}
        >
          <div style={{ ...itemRow, color: "#29241f" }}>
            <ClientStarIcon size={18} color="#29241f" />
            <span>Usar como predeterminada</span>
          </div>
          <div style={{ height: 1, background: "#ebe4dc", margin: "0 12px" }} />
          <div style={{ ...itemRow, color: "#ed6047" }}>
            <ClientTrashIcon size={16} color="#ed6047" />
            <span>Eliminar</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function MisDireccionesWhopperKing() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!openMenu) return;
    const close = () => setOpenMenu(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [openMenu]);

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
  <div data-figma-id="342:1452" style={rootLayer("100%", "100%", {
      background: "linear-gradient(#ece5de, #ece5de)",
      backgroundColor: "#ffffff",
      ...row1,
      minWidth: 0,
      minHeight: "100%",
      justifyContent: "center",
      alignItems: "stretch"
    })}>
    <div data-figma-id="342:1453" style={{
        position: "relative",
        width: 402,
        maxWidth: "100%",
        height: "100%",
        minHeight: "100%",
        background: "#fffcf8",
        boxShadow: "0px 25px 50px -12px rgba(41, 36, 31, 0.25)",
        minWidth: 0,
        overflow: "hidden",
        flexShrink: 0
      }}>
      <div data-figma-id="342:1454" style={{
          display: "flex",
          padding: "12px 20px 0",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 4,
          position: "absolute",
          left: 0,
          top: 8,
          height: "max-content",
          right: 0
        }}>
        <div data-figma-id="342:1455" style={{
            ...row1,
            alignItems: "center",
            gap: 8,
            width: "100%"
          }}>
          <div data-figma-id="342:1456" style={fixedLayer(40, 40, {
              ...row3,
              cursor: "pointer"
            })}>
            <div data-figma-id="342:1457" style={fixedLayer(24, 24, {
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              })}>
              <ClientBackIcon size={22} color="#1e1e1e" />
            </div>
          </div>
          <span data-figma-id="342:1550" style={{
              ...font_Manrope,
              color: "#29241f",
              fontSize: 22,
              fontWeight: 800,
              fontVariationSettings: "\"wght\" 800",
              lineHeight: "30.052px",
              letterSpacing: "-0.4px",
            }}>
            {"Mis direcciones"}
          </span>
        </div>
        <div data-figma-id="342:1458" style={{
            ...col2,
            minWidth: 0,
            paddingLeft: 48,
            position: "relative",
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
      <div data-figma-id="342:1461" style={{
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          padding: "0 20px 16px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 32,
          position: "absolute",
          left: 0,
          top: 100,
          right: 0,
          bottom: 84
        }}>
        <div data-figma-id="342:1462" style={{
            boxShadow: "inset 0 1px 0 0 #ebe4dc",
            minWidth: 0,
            display: "flex",
            padding: "1px 0 0",
            boxSizing: "border-box",
            flexDirection: "column",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1463" style={{
              boxShadow: "inset 0 -1px 0 0 #ebe4dc",
              ...layout1,
              minWidth: 0,
              display: "flex",
              padding: "18px 0 17px",
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
                      overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                    })}>
                    <ClientHomeIcon size={20} color="#ed6047" />
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
            <div data-figma-id="342:1479" style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 0,
                flexShrink: 0
              }}>
              <div data-figma-id="342:1480" style={{
                  ...fixedLayer(44, 44),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <ClientEditIcon size={18} color="#82776e" />
              </div>
              <AddressOptionsMenu
                open={openMenu === "casa"}
                onToggle={() => setOpenMenu((cur) => (cur === "casa" ? null : "casa"))}
              />
            </div>
          </div>
          <div data-figma-id="342:1487" style={{
              boxShadow: "inset 0 -1px 0 0 #ebe4dc",
              ...layout1,
              minWidth: 0,
              display: "flex",
              padding: "18px 0 17px",
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
                      overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                    })}>
                    <ClientBriefcaseIcon size={20} color="#ed6047" />
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
            <div data-figma-id="342:1499" style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 0,
                flexShrink: 0
              }}>
              <div data-figma-id="342:1500" style={fixedLayer(44, 44, row3)}>
                <div data-figma-id="342:1501" style={fixedLayer(20, 20, {
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  })}>
                  <ClientEditIcon size={18} color="#82776e" />
                </div>
              </div>
              <AddressOptionsMenu
                open={openMenu === "trabajo"}
                onToggle={() => setOpenMenu((cur) => (cur === "trabajo" ? null : "trabajo"))}
              />
            </div>
          </div>
        </div>
        <div data-figma-id="342:1521" style={{
            background: "#f5efe7",
            boxShadow: "inset 0 0 0 1px rgba(235, 228, 220, 0.4)",
            borderRadius: 16,
            ...row2,
            minWidth: 0,
            gap: 12,
            padding: "20px 17px",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1522" style={fixedLayer("max-content", 22, col1)}>
            <div data-figma-id="342:1523" style={fixedLayer(20, 20, {
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
              <ClientPinIcon size={20} color="#ed6047" />
            </div>
          </div>
          <div data-figma-id="342:1526" style={fixedLayer(274, 59, {
              display: "flex",
              padding: "0",
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
                <svg viewBox="0 0 19 12" width="100%" height="100%" fill="none" aria-hidden><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#29241f"/><rect x="5" y="5.5" width="3" height="6.5" rx="0.5" fill="#29241f"/><rect x="10" y="3" width="3" height="9" rx="0.5" fill="#29241f"/><rect x="15" y="0.5" width="3" height="11.5" rx="0.5" fill="#29241f"/></svg>
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
      {/* CTA anclado al borde inferior del marco (no del mock 940px) */}
      <div data-figma-id="342:1551" style={{
          background: "linear-gradient(180deg, rgba(255, 252, 248, 0) 0%, rgba(255, 252, 248, 0.95) 18%, #fffcf8 100%)",
          display: "flex",
          padding: "16px 20px 20px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 20
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
      </div>
    </div>
  </div>
  </>;
}
export default MisDireccionesWhopperKing;