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
const text2: React.CSSProperties = {
  fontWeight: 400,
  fontVariationSettings: "\"wght\" 400"
};
const text3: React.CSSProperties = {
  fontSize: 16,
  lineHeight: "19.364px"
};
const text4: React.CSSProperties = {
  fontSize: 14,
  lineHeight: "17px"
};
const col1: React.CSSProperties = {
  display: "flex",
  flexDirection: "column"
};
const row1: React.CSSProperties = {
  display: "flex",
  alignItems: "center"
};
const col2: React.CSSProperties = {
  ...col1,
  minWidth: 0
};
const row2: React.CSSProperties = {
  ...row1,
  minWidth: 0
};
const surface1: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "inset 0 0 0 1px #ebe4dc",
  borderRadius: 12
};
const text1: React.CSSProperties = {
  color: "#29241f",
  whiteSpace: "pre",
  fontWeight: 600,
  fontVariationSettings: "\"wght\" 600"
};
const col5: React.CSSProperties = {
  ...col2,
  overflow: "hidden"
};
const col3: React.CSSProperties = {
  ...col2,
  padding: "0 0 8px",
  boxSizing: "border-box"
};
const col4: React.CSSProperties = {
  ...col5,
  padding: "15.5px 17px",
  boxSizing: "border-box"
};
const font_Inter_14: React.CSSProperties = {
  ...font_Inter,
  ...text2,
  ...text4,
  color: "#82776e",
  whiteSpace: "pre"
};
function DirecciN(p: {
  "data-figma-id": string;
  text: string;
  text2: string;
}) {
  return <div data-figma-id={p["data-figma-id"]} style={{
    ...col2,
    position: "relative",
    height: 75,
    flexShrink: 0,
    alignSelf: "stretch"
  }}>
      <div data-figma-id="342:1317" style={{
      ...col3,
      position: "relative",
      height: 27,
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
        <div data-figma-id="342:1318" style={{
        ...col2,
        position: "relative",
        height: 19,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
          <span data-figma-id="342:1319" style={{
          ...font_Inter,
          ...text1,
          ...text3,
          ...row2,
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
            {p.text}
          </span>
        </div>
      </div>
      <div data-figma-id="342:1320" style={{
      ...surface1,
      ...col4,
      position: "relative",
      height: 48,
      flexShrink: 0,
      alignSelf: "stretch"
    }}>
        <div data-figma-id="342:1321" style={{
        ...col5,
        opacity: 0.85,
        position: "relative",
        height: 17,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
          <span data-figma-id="342:1322" style={{
          ...font_Inter_14,
          ...row2,
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
            {p.text2}
          </span>
        </div>
      </div>
    </div>;
}
export function AgregarDirecciN() {
  return <div data-figma-id="342:1302" style={rootLayer(402, 940, {
    background: "linear-gradient(#fffcf8, #fffcf8), linear-gradient(#e5e7eb, #e5e7eb)",
    backgroundColor: "#ffffff",
    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    overflow: "hidden"
  })}>
    <div data-figma-id="342:1303" style={{
      display: "flex",
      padding: "0 20px",
      boxSizing: "border-box",
      alignItems: "center",
      gap: 12,
      position: "absolute",
      left: 0,
      top: 40,
      height: 56,
      right: 0
    }}>
      <div data-figma-id="342:1304" style={fixedLayer(44, 45)}>
        <div data-figma-id="342:1305" style={absoluteLayer("calc(50% + -6px)", "calc(50% + -6.5px)", 12.833, 12.833)} />
      </div>
      <div data-figma-id="342:1306" style={fixedLayer("max-content", 30, col1)}>
        <span data-figma-id="342:1307" style={{
          color: "#29241f",
          whiteSpace: "pre",
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontSize: 22,
          fontWeight: 800,
          fontVariationSettings: "\"wght\" 800",
          lineHeight: "30.052px",
          letterSpacing: "-0.4px",
          ...row1,
          position: "relative",
          flexShrink: 0
        }}>
          {"Agregar dirección"}
        </span>
      </div>
    </div>
    <div data-figma-id="342:1308" style={{
      ...col1,
      overflow: "hidden",
      padding: "14px 20px 110px",
      boxSizing: "border-box",
      gap: 20,
      position: "absolute",
      left: 0,
      top: 100,
      right: 0,
      bottom: 0
    }}>
      <div data-figma-id="342:1309" style={{
        ...col2,
        position: "relative",
        height: 75,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="342:1310" style={{
          ...col3,
          position: "relative",
          height: 27,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1311" style={{
            ...col2,
            position: "relative",
            height: 19,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1312" style={{
              ...font_Inter,
              ...text1,
              ...text3,
              ...row2,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              {"Nombre de la dirección"}
            </span>
          </div>
        </div>
        <div data-figma-id="342:1313" style={{
          ...surface1,
          ...col4,
          position: "relative",
          height: 48,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1314" style={{
            ...col5,
            position: "relative",
            height: 17,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1315" style={{
              ...font_Inter,
              ...text2,
              ...text4,
              color: "#29241f",
              whiteSpace: "pre",
              ...row2,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              {"Casa"}
            </span>
          </div>
        </div>
      </div>
      <DirecciN data-figma-id="342:1316" text="Dirección" text2="Ej: Calle 18 # 25-40" />
      <DirecciN data-figma-id="342:1323" text="Barrio" text2="Ej: Las Cuadras" />
      <DirecciN data-figma-id="342:1330" text="Apartamento, torre o conjunto (opcional)" text2="Ej: Apto 302, Torre B" />
      <div data-figma-id="342:1337" style={{
        ...col2,
        position: "relative",
        height: 123,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="342:1338" style={{
          ...col3,
          position: "relative",
          height: 27,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1339" style={{
            ...col2,
            position: "relative",
            height: 19,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1340" style={{
              ...font_Inter,
              ...text1,
              ...text3,
              ...row2,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              {"Indicaciones para el domiciliario (opcional)"}
            </span>
          </div>
        </div>
        <div data-figma-id="342:1341" style={{
          ...surface1,
          ...col1,
          minWidth: 0,
          overflow: "hidden",
          padding: "12.295px 17px 43.81px",
          boxSizing: "border-box",
          position: "relative",
          height: 96,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
          <div data-figma-id="342:1342" style={{
            ...col2,
            opacity: 0.85,
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1343" style={{
              ...font_Inter,
              ...text2,
              color: "#82776e",
              whiteSpace: "normal",
              fontSize: 14,
              lineHeight: "19.6px",
              minWidth: 0,
              position: "relative",
              height: 40,
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
              <span style={{
                position: "absolute",
                top: 0,
                whiteSpace: "pre",
                lineHeight: "19.6px",
                left: 0,
                textAlign: "left"
              }}>{"Ej: Casa esquinera de rejas negras, timbre de la \nizquierda"}</span>
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1344" style={{
        background: "#f5efe7",
        borderRadius: 12,
        minWidth: 0,
        display: "flex",
        padding: "12px 16px",
        boxSizing: "border-box",
        gap: 12,
        position: "relative",
        height: "max-content",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="342:1345" style={fixedLayer("max-content", 26, {
          ...col1,
          padding: "2px 0 4px",
          boxSizing: "border-box"
        })}>
          <div data-figma-id="342:1346" style={fixedLayer(20, 20, {
            overflow: "hidden"
          })}>
            <div data-figma-id="342:1347" style={absoluteLayer("12.5%", "4.167%", "75%", "91.667%")} />
            <div data-figma-id="342:1348" style={absoluteLayer("37.5%", "29.167%", "25%", "25%")} />
          </div>
        </div>
        <div data-figma-id="342:1349" style={fixedLayer("max-content", 34, {
          ...col1,
          gap: 2
        })}>
          <div data-figma-id="342:1350" style={{
            ...col1,
            minWidth: 263,
            position: "relative",
            height: 17,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1351" style={{
              ...font_Inter,
              ...text1,
              ...text4,
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
              {"Ciudad: Pasto, Nariño"}
            </span>
          </div>
          <div data-figma-id="342:1352" style={{
            ...col1,
            minWidth: 263,
            position: "relative",
            height: 15,
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
            <span data-figma-id="342:1353" style={{
              ...font_Inter,
              ...text2,
              color: "#82776e",
              whiteSpace: "pre",
              fontSize: 12.5,
              lineHeight: "15.128px",
              ...row1,
              position: "relative",
              flexShrink: 0
            }}>
              {"Por ahora solo hacemos domicilios en Pasto."}
            </span>
          </div>
        </div>
      </div>
      <div data-figma-id="342:1354" style={{
        minWidth: 0,
        display: "flex",
        padding: "6px 0 4px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        height: "max-content",
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <div data-figma-id="342:1355" style={fixedLayer("max-content", 19, col1)}>
          <span data-figma-id="342:1356" style={{
            ...font_Inter,
            ...text3,
            color: "#29241f",
            whiteSpace: "pre",
            fontWeight: 500,
            fontVariationSettings: "\"wght\" 500",
            ...row1,
            position: "relative",
            flexShrink: 0
          }}>
            {"Usar como dirección predeterminada"}
          </span>
        </div>
        <div data-figma-id="342:1358" style={fixedLayer(48, 28, {
          background: "#ed6047",
          borderRadius: 28,
          ...col1,
          padding: "3px 3px 3px 23px",
          boxSizing: "border-box",
          justifyContent: "flex-end"
        })}>
          <div data-figma-id="342:1359" style={fixedLayer(22, 22, {
            background: "#ffffff",
            borderRadius: 11,
            filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))"
          })} />
        </div>
      </div>
    </div>
    <div data-figma-id="342:1360" style={{
      display: "flex",
      padding: "12px 24px 0",
      boxSizing: "border-box",
      alignItems: "center",
      justifyContent: "space-between",
      position: "absolute",
      left: 0,
      top: 0,
      height: 44,
      right: 0
    }}>
      <div data-figma-id="342:1361" style={fixedLayer("max-content", 17, col1)}>
        <span data-figma-id="342:1362" style={{
          ...font_Inter,
          ...text1,
          ...text4,
          ...row1,
          position: "relative",
          flexShrink: 0
        }}>
          {"9:41"}
        </span>
      </div>
      <div data-figma-id="342:1363" style={fixedLayer(68, "max-content", {
        display: "flex",
        alignItems: "center",
        gap: 6
      })}>
        <div data-figma-id="342:1364" style={fixedLayer(17, 11, {
          overflow: "hidden"
        })}>
          <div data-figma-id="342:1365" style={absoluteLayer("5.882%", "13.636%", "82.353%", "72.727%")} />
        </div>
        <div data-figma-id="342:1366" style={fixedLayer(15, 11, {
          overflow: "hidden"
        })}>
          <div data-figma-id="342:1367" style={absoluteLayer("3.556%", "6.667%", "92.889%", "83.333%")} />
        </div>
        <div data-figma-id="342:1368" style={fixedLayer(24, 11, {
          overflow: "hidden"
        })}>
          <div data-figma-id="342:1369" style={absoluteLayer("2.083%", "4.545%", "83.333%", "90.909%")} />
          <div data-figma-id="342:1370" style={absoluteLayer("8.333%", "18.182%", "62.5%", "63.636%")} />
          <div data-figma-id="342:1371" style={absoluteLayer("91.667%", "31.818%", "4.167%", "36.364%")} />
        </div>
      </div>
    </div>
    <div data-figma-id="342:1372" style={{
      background: "linear-gradient(180deg, rgba(255, 252, 248, 0) 0%, rgba(255, 252, 248, 0.95) 20%, #fffcf8 100%)",
      ...col1,
      padding: "12px 20px 24px",
      boxSizing: "border-box",
      gap: 12,
      position: "absolute",
      left: 0,
      height: 109,
      right: 0,
      bottom: 0
    }}>
      <div data-figma-id="342:1373" style={{
        background: "#ed6047",
        borderRadius: 12,
        filter: "drop-shadow(0px 4px 12px rgba(237, 96, 71, 0.25))",
        minWidth: 0,
        position: "relative",
        height: 52,
        flexShrink: 0,
        alignSelf: "stretch"
      }}>
        <span data-figma-id="342:1374" style={{
          color: "#ffffff",
          whiteSpace: "pre",
          fontFamily: "'Manrope', system-ui, sans-serif",
          fontSize: 16,
          fontWeight: 800,
          fontVariationSettings: "\"wght\" 800",
          lineHeight: "22px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: "calc(50% + -71px)",
          top: "calc(50% + -11px)"
        }}>
          {"Guardar dirección"}
        </span>
      </div>
      <div data-figma-id="342:1375" style={fixedLayer(362, 9, {
        ...col1,
        padding: "4px 114px 0",
        boxSizing: "border-box",
        alignItems: "center"
      })}>
        <div data-figma-id="342:1376" style={fixedLayer(134, 5, {
          opacity: 0.85,
          background: "#29241f",
          borderRadius: 3
        })} />
      </div>
    </div>
  </div>;
}
export default AgregarDirecciN;