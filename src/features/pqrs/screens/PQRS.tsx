import React, { useRef, useState } from 'react';
import { ClientBackIcon } from '@/shared/components/ui/ClientUiIcons';

type TipoSolicitud = 'Petición' | 'Queja' | 'Reclamo' | 'Sugerencia' | 'Felicitación';

const TIPOS: TipoSolicitud[] = ['Petición', 'Queja', 'Reclamo', 'Sugerencia', 'Felicitación'];
const MAX_DESC = 600;

const fontInter: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
};

const fontManrope: React.CSSProperties = {
  fontFamily: "'Manrope', system-ui, sans-serif",
};

const fieldShell: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 12,
  boxShadow: 'inset 0 0 0 1px #ebe4dc',
  width: '100%',
  minHeight: 48,
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  boxSizing: 'border-box',
  minWidth: 0,
};

const labelStyle: React.CSSProperties = {
  ...fontInter,
  fontSize: 16,
  fontWeight: 600,
  color: '#1c1b1b',
  lineHeight: '20px',
};

const inputStyle: React.CSSProperties = {
  ...fontInter,
  fontSize: 14,
  fontWeight: 400,
  color: '#1c1b1b',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  width: '100%',
  minWidth: 0,
  padding: 0,
  margin: 0,
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%',
        minWidth: 0,
        alignSelf: 'stretch',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0 }}>
        <span style={labelStyle}>{label}</span>
        {required ? (
          <span style={{ color: '#e75338', fontSize: 14, fontWeight: 600, lineHeight: '20px' }}>*</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function AttachIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect width="36" height="36" rx="18" fill="#FAF5F0" />
      <path
        d="M18 18.875V18.875M12.167 26.375C11.708 26.375 11.316 26.212 10.99 25.885C10.663 25.559 10.5 25.167 10.5 23.708V12.042C10.5 11.583 10.663 11.191 10.99 10.865C11.316 10.538 11.708 10.375 12.167 10.375H18.833C18.833 10.611 18.833 10.868 18.833 11.146C18.833 11.424 18.833 11.722 18.833 12.042H12.167V23.708H23.833V17.042C24.153 17.042 24.451 17.042 24.729 17.042C25.007 17.042 25.264 17.042 25.5 17.042V23.708C25.5 24.167 25.337 24.559 25.01 24.885C24.684 25.212 24.292 25.375 23.833 25.375H12.167V25.375M13 22.042H23L19.875 17.875L17.375 21.208L15.5 18.708L13 22.042V22.042M22.167 15.375V13.708H20.5V12.042H22.167V10.375H23.833V12.042H25.5V13.708H23.833V15.375H22.167V15.375"
        fill="#E75338"
      />
    </svg>
  );
}

export function PQRS() {
  const [tipo, setTipo] = useState<TipoSolicitud>('Petición');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [evidenciaNombre, setEvidenciaNombre] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const descLen = Math.min(descripcion.length, MAX_DESC);

  return (
    <div
      style={{
        background: '#fffcf8',
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        overflow: 'hidden',
        ...fontInter,
        color: '#1c1b1b',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 0,
          right: 0,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '0 20px',
          boxSizing: 'border-box',
          zIndex: 10,
        }}
      >
        <div
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
          <ClientBackIcon size={22} color="#1c1b1b" />
        </div>
        <span
          style={{
            ...fontManrope,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.5px',
            lineHeight: '27px',
            color: '#1c1b1b',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          PQRS y Atención
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 72,
          bottom: 84,
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          padding: '0 20px 28px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16, minWidth: 0 }}>
          <h1
            style={{
              margin: 0,
              ...fontManrope,
              fontSize: 26,
              fontWeight: 700,
              lineHeight: '32.5px',
              letterSpacing: '-0.65px',
              color: '#1c1b1b',
            }}
          >
            Tu experiencia es lo más importante
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '22.75px',
              color: '#5d3f3d',
            }}
          >
            Cuéntanos qué sucedió o comparte tus sugerencias. Cada comentario nos ayuda a
            perfeccionar el auténtico sabor a la parrilla.
          </p>
        </div>

        <div style={{ height: 1, background: '#eae5df', marginBottom: 16 }} />

        <div style={{ marginBottom: 16, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 12,
              marginBottom: 12,
              minWidth: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0, flexShrink: 0 }}>
              <span style={{ ...labelStyle, ...fontManrope }}>Tipo de Solicitud</span>
              <span style={{ color: '#e75338', fontSize: 14, fontWeight: 600 }}>*</span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: '#e75338',
                textAlign: 'right',
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {tipo} seleccionada
            </span>
          </div>

          <div
            className="pqrs-chips-scroll"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: 8,
              overflowX: 'auto',
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: 2,
              marginLeft: -20,
              marginRight: -20,
              paddingLeft: 20,
              paddingRight: 20,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              width: 'calc(100% + 40px)',
              maxWidth: 'calc(100% + 40px)',
              boxSizing: 'border-box',
            }}
          >
            {TIPOS.map((t) => {
              const selected = tipo === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTipo(t)}
                  style={{
                    flex: '0 0 auto',
                    height: 38,
                    padding: '0 16px',
                    borderRadius: 9999,
                    border: selected ? '1px solid transparent' : '1px solid #e2dcd5',
                    background: selected ? '#e75338' : '#ffffff',
                    color: selected ? '#ffffff' : '#1c1b1b',
                    ...fontInter,
                    fontSize: 13,
                    fontWeight: selected ? 500 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    lineHeight: '38px',
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ height: 1, background: '#eae5df', marginBottom: 20 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
          <Field label="Nombre" required>
            <div style={fieldShell}>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Camila Rendón"
                style={inputStyle}
                aria-label="Nombre"
              />
            </div>
          </Field>

          <Field label="Teléfono" required>
            <div style={fieldShell}>
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="+57 300 000 0000"
                style={inputStyle}
                aria-label="Teléfono"
              />
            </div>
          </Field>

          <Field label="Correo" required>
            <div style={fieldShell}>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="correo@ejemplo.com"
                style={inputStyle}
                aria-label="Correo"
              />
            </div>
          </Field>

          <Field label="Descripción detallada" required>
            <div
              style={{
                ...fieldShell,
                minHeight: 124,
                alignItems: 'stretch',
                padding: '12px 16px',
                flexDirection: 'column',
              }}
            >
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value.slice(0, MAX_DESC))}
                placeholder="Describe con detalle lo ocurrido..."
                rows={4}
                style={{
                  ...inputStyle,
                  resize: 'none',
                  flex: 1,
                  minHeight: 72,
                  lineHeight: '20px',
                }}
                aria-label="Descripción detallada"
              />
              <div
                style={{
                  alignSelf: 'flex-end',
                  fontSize: 12,
                  color: '#5d3f3d',
                  marginTop: 6,
                  flexShrink: 0,
                }}
              >
                {descLen} / {MAX_DESC}
              </div>
            </div>
          </Field>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', minWidth: 0 }}>
            <span style={labelStyle}>Evidencia o Foto</span>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              style={{
                width: '100%',
                minHeight: 120,
                borderRadius: 12,
                border: '1.5px dashed #d2cac2',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                cursor: 'pointer',
                padding: '20px 16px',
                boxSizing: 'border-box',
                minWidth: 0,
              }}
            >
              <AttachIcon />
              <div style={{ textAlign: 'center', minWidth: 0, maxWidth: '100%' }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#1c1b1b',
                    marginBottom: 4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {evidenciaNombre ? evidenciaNombre : 'Subir archivo'}
                </div>
                <div style={{ fontSize: 12, color: '#5d3f3d', lineHeight: '18px' }}>
                  JPG, PNG o PDF · Máx. 10 MB
                </div>
              </div>
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
              style={{ display: 'none' }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                setEvidenciaNombre(f ? f.name : null);
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            padding: '4px 0 8px',
            minWidth: 0,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden style={{ flexShrink: 0 }}>
            <path
              d="M14 24.5C8.201 24.5 3.5 19.799 3.5 14S8.201 3.5 14 3.5 24.5 8.201 24.5 14 19.799 24.5 14 24.5ZM14 22.75C18.832 22.75 22.75 18.832 22.75 14S18.832 5.25 14 5.25 5.25 9.168 5.25 14 9.168 22.75 14 22.75ZM14.875 14V8.75H13.125V15.75H19.25V14H14.875Z"
              fill="#E75338"
            />
          </svg>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: '20px',
              color: '#5d3f3d',
              minWidth: 0,
            }}
          >
            Tiempo de Respuesta Oficial: recibirás una confirmación y respuesta en un plazo de{' '}
            <strong style={{ color: '#5d3f3d', fontWeight: 600 }}>24 a 48 horas hábiles</strong>.
          </p>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '12px 20px 20px',
          background: 'linear-gradient(180deg, rgba(255,252,248,0) 0%, #fffcf8 28%)',
          boxSizing: 'border-box',
          zIndex: 10,
        }}
      >
        <div
          data-proto-action="enviar"
          role="button"
          tabIndex={0}
          style={{
            background: '#e75338',
            borderRadius: 12,
            width: '100%',
            minHeight: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 16px rgba(231, 83, 56, 0.35)',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              ...fontManrope,
              fontSize: 16,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.2px',
            }}
          >
            Radicar PQRS
          </span>
        </div>
      </div>

      <style>{`
        .pqrs-chips-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

export default PQRS;
