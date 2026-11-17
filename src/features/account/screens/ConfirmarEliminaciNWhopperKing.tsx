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
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const text2: React.CSSProperties = {
  color: "#82776e",
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text3: React.CSSProperties = {
  color: "#29241f",
  fontSize: 14,
  lineHeight: "20px"
};
const row2: React.CSSProperties = {
  ...row1,
  justifyContent: "center"
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #efeae3",
  borderRadius: 16
};
const col4: React.CSSProperties = {
  ...col1,
  minWidth: 154.38
};
const col5: React.CSSProperties = {
  ...col1,
  minWidth: 126.47
};
const col2: React.CSSProperties = {
  ...col1,
  padding: "0 0 0 8px",
  boxSizing: "border-box"
};
const col3: React.CSSProperties = {
  ...col1,
  padding: "0 0 0 14px",
  boxSizing: "border-box"
};
export function ConfirmarEliminaciNWhopperKing() {
  return <div data-figma-id="342:1377" style={rootLayer("100%", "max-content", {
    background: "linear-gradient(#1c1917, #1c1917)",
    backgroundColor: "#ffffff",
    ...row1,
    minWidth: 0,
    justifyContent: "center"
  })}>
    <div data-figma-id="342:1378" style={fixedLayer(399, 940, {
      background: "#fffcf8",
      boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      minWidth: 0,
      minHeight: 940,
      maxHeight: 940,
      overflow: "hidden",
      display: "flex",
      padding: "546.38px 0 0",
      boxSizing: "border-box",
      flexDirection: "column"
    })}>
      <div data-figma-id="342:1379" style={{
        background: "#fffcf8",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }}>
        <div data-figma-id="342:1380" style={{
          ...row1,
          minWidth: 0,
          padding: "12px 32px 0",
          boxSizing: "border-box",
          justifyContent: "space-between",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1381" style={fixedLayer("max-content", 20, col1)}>
            <span data-figma-id="342:1382" style={{
              ...font_Manrope,
              ...text3,
              fontWeight: 600,
              fontVariationSettings: "\"wght\" 600",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
              {"9:41"}
            </span>
          </div>
          <div data-figma-id="342:1383" style={fixedLayer(72, "max-content", row1)}>
            <div data-figma-id="342:1384" style={fixedLayer(16, 16, {
              overflow: "hidden"
            })}>
              <ClientTrashIcon size={24} color="#ed6047" />
            </div>
            <div data-figma-id="342:1386" style={fixedLayer(24, 16, col2)}>
              <div data-figma-id="342:1387" style={fixedLayer(16, 16, {
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              })}>
                <div data-figma-id="342:1388" style={{
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
            <div data-figma-id="342:1390" style={fixedLayer(32, 12, col2)}>
              <div data-figma-id="342:1391" style={fixedLayer(24, 12, {
                boxShadow: "inset 0 0 0 1px #29241f",
                borderRadius: 2,
                ...row1,
                padding: 3,
                boxSizing: "border-box"
              })}>
                <div data-figma-id="342:1392" style={{
                  background: "#29241f",
                  borderRadius: 1,
                  minWidth: 0,
                  minHeight: 0,
                  position: "relative",
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 0,
                  alignSelf: "stretch"
                }} />
              </div>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1393" style={{
          ...row1,
          minWidth: 0,
          padding: "20px 24px 12px",
          boxSizing: "border-box",
          position: "relative",
          height: "max-content",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1394" style={fixedLayer(52, 40, {
            display: "flex",
            padding: "0 12px 0 0",
            boxSizing: "border-box",
            flexDirection: "column"
          })}>
            <div data-figma-id="342:1395" style={fixedLayer(40, 40, {
              background: "#f5f5f4",
              borderRadius: 9999,
              ...row2
            })}>
              <div data-figma-id="342:1396" style={fixedLayer(20, 20, {
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
                <ClientBackIcon size={20} color="#29241f" />
          </div>
            </div>
          </div>
          <div data-figma-id="342:1398" style={fixedLayer("max-content", 28, col1)}>
            <span data-figma-id="342:1399" style={{
              ...font_Manrope,
              ...text1,
              color: "#29241f",
              fontSize: 20,
              lineHeight: "28px",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
              {"Mis direcciones"}
            </span>
          </div>
        </div>
        <div data-figma-id="342:1400" style={{
          minWidth: 0,
          display: "flex",
          padding: "16px 24px",
          boxSizing: "border-box",
          flexDirection: "column",
          gap: 12,
          position: "relative",
          height: 218,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1401" style={{
            ...surface1,
            ...row1,
            minWidth: 0,
            padding: 17,
            boxSizing: "border-box",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="342:1402" style={fixedLayer(212.38, "max-content", row1)}>
              <div data-figma-id="342:1403" style={fixedLayer(44, 44, {
                background: "#f5efe7",
                borderRadius: 9999,
                ...row2
              })}>
                <div data-figma-id="342:1404" style={fixedLayer(20, 20, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                  <ClientBackIcon size={20} color="#29241f" />
          </div>
              </div>
              <div data-figma-id="342:1406" style={fixedLayer("max-content", 53, col3)}>
                <div data-figma-id="342:1407" style={fixedLayer("max-content", 53, col1)}>
                  <div data-figma-id="342:1408" style={{
                    ...col4,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="342:1409" style={{
                      ...font_Inter,
                      color: "#ed6047",
                      whiteSpace: "pre",
                      fontSize: 11,
                      fontWeight: 700,
                      fontVariationSettings: "\"wght\" 600",
                      lineHeight: "16.5px",
                      letterSpacing: "0.55px",
                      textTransform: "uppercase",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"PREDETERMINADA"}
                    </span>
                  </div>
                  <div data-figma-id="342:1410" style={{
                    ...col4,
                    position: "relative",
                    height: 20,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="342:1411" style={{
                      ...font_Manrope,
                      ...text1,
                      ...text3,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"Casa · Calle 18 # 25-40"}
                    </span>
                  </div>
                  <div data-figma-id="342:1412" style={{
                    ...col4,
                    position: "relative",
                    height: 16,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="342:1413" style={{
                      ...font_Inter,
                      ...text2,
                      whiteSpace: "pre",
                      fontSize: 12,
                      lineHeight: "16px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"Barrio Las Cuadras, Pasto"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-id="342:1414" style={{
            ...surface1,
            ...row1,
            minWidth: 0,
            padding: 17,
            boxSizing: "border-box",
            position: "relative",
            height: "max-content",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <div data-figma-id="342:1415" style={fixedLayer(184.47, "max-content", row1)}>
              <div data-figma-id="342:1416" style={fixedLayer(44, 44, {
                background: "#f5efe7",
                borderRadius: 9999,
                ...row2
              })}>
                <div data-figma-id="342:1417" style={fixedLayer(20, 20, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                  <ClientBackIcon size={20} color="#29241f" />
          </div>
              </div>
              <div data-figma-id="342:1419" style={fixedLayer("max-content", 53, col3)}>
                <div data-figma-id="342:1420" style={fixedLayer("max-content", 53, col1)}>
                  <div data-figma-id="342:1421" style={{
                    ...col5,
                    position: "relative",
                    height: 17,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="342:1422" style={{
                      ...font_Inter,
                      color: "#78716c",
                      whiteSpace: "pre",
                      fontSize: 11,
                      fontWeight: 700,
                      fontVariationSettings: "\"wght\" 600",
                      lineHeight: "16.5px",
                      letterSpacing: "0.55px",
                      textTransform: "uppercase",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"TRABAJO"}
                    </span>
                  </div>
                  <div data-figma-id="342:1423" style={{
                    ...col5,
                    position: "relative",
                    height: 20,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="342:1424" style={{
                      ...font_Manrope,
                      ...text1,
                      ...text3,
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"Carrera 27 # 14-30"}
                    </span>
                  </div>
                  <div data-figma-id="342:1425" style={{
                    ...col5,
                    position: "relative",
                    height: 16,
                    flexShrink: 0,
                    alignSelf: "stretch"
                  }}>
                    <span data-figma-id="342:1426" style={{
                      ...font_Inter,
                      ...text2,
                      whiteSpace: "pre",
                      fontSize: 12,
                      lineHeight: "16px",
                      ...row1,
                      position: "relative",
                      flexShrink: 0
                    }}>
                      {"Centro, Pasto"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1427" style={{
        background: "rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(1px)",
        position: "absolute",
        left: -0.5,
        top: 0,
        right: -2.5,
        bottom: 56
      }} />
      <div data-figma-id="342:1428" style={{
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
        height: 394.63,
        bottom: 0.37
      }}>
        <div data-figma-id="342:1429" style={{
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
          <div data-figma-id="342:1430" style={fixedLayer(40, 4, {
            background: "#d1c7bd",
            borderRadius: 9999
          })} />
        </div>
        <div data-figma-id="342:1431" style={{
          ...row1,
          minWidth: 0,
          padding: "20px 24px 28px",
          boxSizing: "border-box",
          flexDirection: "column",
          position: "relative",
          height: 350.63,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1432" style={fixedLayer(64, 84, {
            display: "flex",
            padding: "0 0 20px",
            boxSizing: "border-box",
            flexDirection: "column"
          })}>
            <div data-figma-id="342:1433" style={fixedLayer(64, 64, {
              background: "#f5efe7",
              borderRadius: 9999,
              ...row2
            })}>
              <div data-figma-id="342:1434" style={fixedLayer(28, 28, {
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
                <ClientAlertIcon size={28} color="#ed6047" />
          </div>
            </div>
          </div>
          <div data-figma-id="342:1439" style={fixedLayer(305.03, 35.5)}>
            <span data-figma-id="342:1441" style={absoluteLayer("calc(50% + -113.5px)", -1, 227, 28, {
              ...font_Manrope,
              ...text1,
              color: "#29241f",
              fontSize: 22,
              lineHeight: "30.052px",
              letterSpacing: "-0.55px",
              textAlign: "center",
              ...row2
            })}>
              {"¿Eliminar la dirección?"}
            </span>
          </div>
          <div data-figma-id="342:1442" style={fixedLayer(238.98, 79.13, {
            maxWidth: 290
          })}>
            <div data-figma-id="342:1443" style={absoluteLayer(0, -0.72, "max-content", 48, {
              ...row1,
              maxWidth: 290,
              flexDirection: "column"
            })}>
              <span data-figma-id="342:1444" style={fixedLayer(247, 48, {
                ...font_Inter,
                ...text2,
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
                  width: 247,
                  textAlign: "center"
                }}>{"Esta seguro de eliminar la dirección.\nEsta acción no se puede deshacer."}</span>
              </span>
            </div>
          </div>
          <div data-figma-id="342:1445" style={{
            background: "#ed6047",
            borderRadius: 16,
            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))",
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
            <span data-figma-id="342:1446" style={{
              ...font_Manrope,
              ...text1,
              color: "#ffffff",
              fontSize: 16,
              lineHeight: "24px",
              textAlign: "center",
              ...row2,
              position: "relative",
              flexShrink: 0
            }}>
              {"Sí, eliminar"}
            </span>
          </div>
          <div data-figma-id="342:1447" style={{
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
            <div data-figma-id="342:1448" style={{
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
              <span data-figma-id="342:1449" style={{
                ...font_Inter,
                color: "#82776e",
                whiteSpace: "pre",
                fontSize: 16,
                fontWeight: 500,
                fontVariationSettings: "\"wght\" 500",
                lineHeight: "22.5px",
                textAlign: "center",
                ...row2,
                position: "relative",
                flexShrink: 0
              }}>
                {"Cancelar"}
              </span>
            </div>
          </div>
        </div>
        <div data-figma-id="342:1450" style={{
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
          <div data-figma-id="342:1451" style={fixedLayer(144, 4, {
            opacity: 0.9,
            background: "#1c1917",
            borderRadius: 9999
          })} />
        </div>
      </div>
    </div>
  </div>;
}
export default ConfirmarEliminaciNWhopperKing;