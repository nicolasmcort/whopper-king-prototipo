import React from 'react';
import {
  ClientBackIcon,
  ClientShieldIcon,
  ClientAlertIcon,
  ClientTrashIcon,
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
const row4: React.CSSProperties = {
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
  <div data-figma-id="342:1556" style={rootLayer(402, "auto", {
      margin: "0 auto",
      maxWidth: "100%",
      overflow: "hidden",
    })}>
    <div data-figma-id="342:1557" style={{
        background: "#fffcf8",
        ...col1,
        padding: "0 16px 32px",
        boxSizing: "border-box",
        width: "100%",
        position: "relative",
      }}>
      <div data-figma-id="342:1558" style={{
          minWidth: 0,
          display: "flex",
          padding: "16px 4px 0",
          boxSizing: "border-box",
          alignItems: "center",
          gap: 12,
          position: "relative",
          height: 56,
          flexShrink: 0,
          alignSelf: "stretch"
        }}>
        <div data-figma-id="342:1559" style={fixedLayer(36, 40)}>
          <div data-figma-id="342:1560" style={absoluteLayer(-4, 0, 40, 40, {
              ...row1,
              cursor: "pointer"
            })}>
            <div data-figma-id="342:1560b" style={fixedLayer(24, 24, {
                ...col1,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                display: "flex"
              })}>
              <ClientBackIcon size={22} color="#1e1e1e" />
            </div>
          </div>
        </div>
        <div data-figma-id="342:1561" style={fixedLayer("max-content", 30, col1)}>
          <span data-figma-id="342:1562" style={{
              ...font_Manrope,
              color: "#29241f",
              whiteSpace: "pre",
              fontSize: 22,
              fontWeight: 800,
              fontVariationSettings: "\"wght\" 800",
              lineHeight: "30.052px",
              letterSpacing: "-0.2px",
              ...row4,
              position: "relative",
              flexShrink: 0
            }}>
            {"Privacidad y datos"}
          </span>
        </div>
      </div>

      <div data-figma-id="342:1563" style={{
          ...col1,
          padding: "12px 9px 0",
          boxSizing: "border-box",
          gap: 20,
          position: "relative",
          width: "100%",
          flexShrink: 0,
          alignSelf: "stretch"
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
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientShieldIcon size={20} color="#ed6047" />
              </div>
            </div>
          </div>
          <div data-figma-id="342:1569" style={{
              ...col1,
              gap: 4,
              minWidth: 0,
              flex: 1
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
            <span data-figma-id="342:1573" style={{
                ...font_Inter,
                ...text1,
                ...text3,
                fontSize: 13,
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Solo guardamos tu nombre, tu celular y tus direcciones para gestionar tus pedidos. Nunca guardamos datos de tarjetas."}
            </span>
          </div>
        </div>

        <div data-figma-id="342:1574" style={{
            ...col1,
            minWidth: 0,
            gap: 16,
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch"
          }}>
          <div data-figma-id="342:1575" style={{
              ...col1,
              minWidth: 0,
              gap: 6,
              position: "relative",
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
            <span data-figma-id="342:1579" style={{
                ...font_Inter,
                ...text1,
                color: "#82776e",
                whiteSpace: "normal",
                fontSize: 13,
                lineHeight: "20px",
                minWidth: 0,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, Whopper King recolecta y almacena únicamente los datos indispensables para procesar, facturar y despachar tus pedidos a domicilio."}
            </span>
          </div>

          <div data-figma-id="342:1580" style={{
              ...col1,
              minWidth: 0,
              gap: 14,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            <div data-figma-id="342:1581" style={{
                ...col1,
                minWidth: 0,
                gap: 4,
                position: "relative",
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
              <span data-figma-id="342:1585" style={{
                  ...font_Inter,
                  ...text1,
                  ...text3,
                  fontSize: 12,
                  minWidth: 0,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  whiteSpace: "pre-line"
                }}>
                {"• Identificación y registro de clientes para gestión de pedidos.\n• Envío de notificaciones operativas del estado de entrega vía WhatsApp o SMS.\n• No comercializamos, cedemos ni compartimos tu información personal con terceros ni entidades financieras."}
              </span>
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
              <span data-figma-id="342:1591" style={{
                  ...font_Inter,
                  ...text1,
                  ...text3,
                  fontSize: 12,
                  minWidth: 0,
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch"
                }}>
                {"Como titular puedes conocer, actualizar, rectificar y solicitar la supresión de tus datos o revocar esta autorización en cualquier momento mediante solicitud escrita radicada al correo oficial de atención."}
              </span>
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
          <span data-figma-id="342:1596" style={{
              ...font_Inter_12,
              minWidth: 0,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "pre-line"
            }}>
            {"Whopper King Las Cuadras · NIT 000.000.000-0 ·\ndatos@whopperking.co"}
          </span>
        </div>

        <div data-figma-id="342:1597" style={{
            background: "#fff5f2",
            boxShadow: "inset 0 0 0 1px #f5d3cb",
            borderRadius: 14,
            ...col1,
            minWidth: 0,
            padding: "15px 17px",
            boxSizing: "border-box",
            gap: 8,
            position: "relative",
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
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              })}>
              <ClientAlertIcon size={16} color="#ed6047" />
            </div>
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
          <span data-figma-id="342:1606" style={{
              ...font_Inter_12,
              minWidth: 0,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch"
            }}>
            {"La solicitud de eliminación de cuenta y revocatoria de datos se atenderá en un plazo máximo de 15 días hábiles conforme al régimen general de protección de datos personales."}
          </span>
          <div data-figma-id="342:1607" style={{
              ...col1,
              minWidth: 0,
              padding: "10px 0 0",
              boxSizing: "border-box",
              gap: 8,
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              borderTop: "1px dashed #f5d3cb"
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
                alignSelf: "stretch",
                cursor: "pointer"
              }}>
              <div data-figma-id="342:1610" style={fixedLayer(18, 18, {
                  overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                })}>
                <ClientTrashIcon size={18} color="#ffffff" />
              </div>
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
            <span data-figma-id="342:1618" style={{
                ...font_Inter,
                ...text1,
                color: "#82776e",
                whiteSpace: "pre-line",
                fontSize: 11,
                lineHeight: "15px",
                textAlign: "center",
                ...row1,
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch"
              }}>
              {"Esta acción es irreversible y requiere confirmación por correo\nregistrado."}
            </span>
          </div>
        </div>

        <div data-figma-id="342:1619" style={{
            ...col1,
            alignItems: "center",
            padding: "16px 0 8px",
            boxSizing: "border-box",
            width: "100%",
            flexShrink: 0
          }}>
          <div data-figma-id="342:1620" style={fixedLayer(134, 5, {
              opacity: 0.8,
              background: "#29241f",
              borderRadius: 100
            })} />
        </div>
      </div>
    </div>
  </div>
  </>;
}
export default PrivacidadYDatos;
