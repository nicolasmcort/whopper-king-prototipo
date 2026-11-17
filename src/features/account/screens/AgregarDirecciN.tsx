import React, { useState } from 'react';
import {
  ClientBackIcon,
  ClientPinIcon,
} from '@/shared/components/ui/ClientUiIcons';

const font_Inter: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
};

const labelStyle: React.CSSProperties = {
  ...font_Inter,
  color: '#29241f',
  fontSize: 16,
  lineHeight: '19.364px',
  fontWeight: 600,
  fontVariationSettings: '"wght" 600',
  marginBottom: 10,
};

const fieldShell: React.CSSProperties = {
  background: '#ffffff',
  boxShadow: 'inset 0 0 0 1px #ebe4dc',
  borderRadius: 12,
  padding: '0 17px',
  boxSizing: 'border-box',
  height: 48,
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  width: '100%',
};

const inputStyle: React.CSSProperties = {
  ...font_Inter,
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: 14,
  lineHeight: '17px',
  fontWeight: 400,
  color: '#29241f',
  padding: 0,
  margin: 0,
};

const placeholderColor = '#82776e';

function Field({
  label,
  value,
  onChange,
  placeholder,
  filled,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  filled?: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch', width: '100%' }}>
      <div style={labelStyle}>{label}</div>
      <div style={fieldShell}>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            ...inputStyle,
            color: filled && value ? '#29241f' : undefined,
            opacity: !value ? 0.85 : 1,
          }}
        />
      </div>
    </div>
  );
}

export function AgregarDirecciN() {
  const [nombre, setNombre] = useState('Casa');
  const [direccion, setDireccion] = useState('');
  const [barrio, setBarrio] = useState('');
  const [apto, setApto] = useState('');
  const [indicaciones, setIndicaciones] = useState('');
  const [predeterminada, setPredeterminada] = useState(true);

  return (
    <div
      data-figma-id="342:1302"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        background: '#fffcf8',
        overflow: 'hidden',
      }}
    >
      <div
        data-figma-id="342:1303"
        style={{
          display: 'flex',
          padding: '0 20px',
          boxSizing: 'border-box',
          alignItems: 'center',
          gap: 10,
          position: 'absolute',
          left: 0,
          top: 16,
          height: 48,
          right: 0,
          zIndex: 10,
        }}
      >
        <div
          data-figma-id="342:1305"
          role="button"
          aria-label="Volver"
          style={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <ClientBackIcon size={22} color="#29241f" />
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <span
            data-figma-id="342:1307"
            style={{
              color: '#29241f',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontFamily: "'Manrope', system-ui, sans-serif",
              fontSize: 22,
              fontWeight: 800,
              fontVariationSettings: '"wght" 800',
              lineHeight: '30px',
              letterSpacing: '-0.4px',
            }}
          >
            Agregar dirección
          </span>
        </div>
      </div>

      <div
        data-figma-id="342:1308"
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '8px 20px 24px',
          boxSizing: 'border-box',
          gap: 24,
          position: 'absolute',
          left: 0,
          top: 72,
          right: 0,
          bottom: 84,
        }}
      >
        <Field
          label="Nombre de la dirección"
          value={nombre}
          onChange={setNombre}
          placeholder="Ej: Casa"
          filled
        />
        <Field
          label="Dirección"
          value={direccion}
          onChange={setDireccion}
          placeholder="Ej: Calle 18 # 25-40"
        />
        <Field
          label="Barrio"
          value={barrio}
          onChange={setBarrio}
          placeholder="Ej: Las Cuadras"
        />
        <Field
          label="Apartamento, torre o conjunto (opcional)"
          value={apto}
          onChange={setApto}
          placeholder="Ej: Apto 302, Torre B"
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch', width: '100%' }}>
          <div style={labelStyle}>Indicaciones para el domiciliario (opcional)</div>
          <div
            style={{
              ...fieldShell,
              height: 'auto',
              minHeight: 96,
              padding: '14px 17px',
              alignItems: 'flex-start',
            }}
          >
            <textarea
              value={indicaciones}
              onChange={(e) => setIndicaciones(e.target.value)}
              placeholder="Ej: Casa esquinera de rejas negras, timbre de la izquierda"
              rows={3}
              style={{
                ...inputStyle,
                resize: 'none',
                lineHeight: '19.6px',
                opacity: !indicaciones ? 0.85 : 1,
                minHeight: 68,
              }}
            />
          </div>
        </div>

        <div
          data-figma-id="342:1344"
          style={{
            background: '#f5efe7',
            borderRadius: 12,
            display: 'flex',
            padding: '14px 16px',
            boxSizing: 'border-box',
            gap: 12,
            alignItems: 'flex-start',
            alignSelf: 'stretch',
          }}
        >
          <div style={{ width: 20, height: 20, marginTop: 2, flexShrink: 0 }}>
            <ClientPinIcon size={20} color="#ed6047" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            <span
              style={{
                ...font_Inter,
                color: '#29241f',
                fontSize: 14,
                lineHeight: '17px',
                fontWeight: 600,
                fontVariationSettings: '"wght" 600',
              }}
            >
              Ciudad: Pasto, Nariño
            </span>
            <span
              style={{
                ...font_Inter,
                color: '#82776e',
                fontSize: 12.5,
                lineHeight: '15.128px',
                fontWeight: 400,
              }}
            >
              Por ahora solo hacemos domicilios en Pasto.
            </span>
          </div>
        </div>

        <div
          data-figma-id="342:1354"
          style={{
            display: 'flex',
            padding: '6px 0 4px',
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            gap: 12,
          }}
        >
          <span
            style={{
              ...font_Inter,
              fontSize: 16,
              lineHeight: '19.364px',
              color: '#29241f',
              fontWeight: 500,
              fontVariationSettings: '"wght" 500',
            }}
          >
            Usar como dirección predeterminada
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={predeterminada}
            aria-label="Usar como dirección predeterminada"
            onClick={() => setPredeterminada((v) => !v)}
            style={{
              width: 48,
              height: 28,
              borderRadius: 28,
              border: 'none',
              padding: 3,
              boxSizing: 'border-box',
              background: predeterminada ? '#ed6047' : '#d6cfc6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: predeterminada ? 'flex-end' : 'flex-start',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 0.15s ease',
            }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                background: '#ffffff',
                filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))',
                display: 'block',
              }}
            />
          </button>
        </div>
      </div>

      <div
        data-figma-id="342:1372"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 252, 248, 0) 0%, rgba(255, 252, 248, 0.95) 18%, #fffcf8 100%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 20px 20px',
          boxSizing: 'border-box',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 20,
        }}
      >
        <div
          data-figma-id="342:1373"
          role="button"
          style={{
            background: '#ed6047',
            borderRadius: 12,
            filter: 'drop-shadow(0px 4px 12px rgba(237, 96, 71, 0.25))',
            height: 52,
            alignSelf: 'stretch',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span
            data-figma-id="342:1374"
            style={{
              color: '#ffffff',
              fontFamily: "'Manrope', system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 800,
              fontVariationSettings: '"wght" 800',
              lineHeight: '22px',
              textAlign: 'center',
            }}
          >
            Guardar dirección
          </span>
        </div>
      </div>

      <style>{`
        input::placeholder,
        textarea::placeholder {
          color: ${placeholderColor};
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default AgregarDirecciN;
