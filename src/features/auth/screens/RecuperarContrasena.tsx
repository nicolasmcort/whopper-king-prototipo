import { ClientMailIcon, ClientPhoneCallIcon } from '@/shared/components/ui/ClientUiIcons';

/** Sheet: elegir canal para recuperar contraseña (SMS o correo). */
export function RecuperarContrasena() {
  return (
    <div
      style={{
        width: '100%',
        background: '#fffcf8',
        borderRadius: '24px 24px 0 0',
        boxShadow: '0 -12px 40px rgba(0, 0, 0, 0.18)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '14px 24px 28px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 40,
          height: 4,
          background: '#d1c7bd',
          borderRadius: 9999,
          flexShrink: 0,
          marginBottom: 16,
        }}
      />
      <span
        style={{
          fontFamily: "'Manrope', system-ui, sans-serif",
          color: '#29241f',
          fontSize: 22,
          fontWeight: 800,
          lineHeight: '30px',
          letterSpacing: '-0.55px',
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        ¿Olvidaste tu contraseña?
      </span>
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          color: '#82776e',
          fontSize: 14.5,
          fontWeight: 400,
          lineHeight: '22px',
          textAlign: 'center',
          marginBottom: 24,
          maxWidth: 300,
        }}
      >
        Elige cómo quieres recibir el código de verificación.
      </span>
      <div
        data-proto-action="sms"
        style={{
          width: '100%',
          minHeight: 56,
          borderRadius: 16,
          border: '1px solid #e5ddd4',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '12px 16px',
          boxSizing: 'border-box',
          cursor: 'pointer',
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 9999,
            background: '#f5efe7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <ClientPhoneCallIcon size={18} color="#ed6047" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <span
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              color: '#29241f',
              fontSize: 15,
              fontWeight: 700,
              lineHeight: '20px',
            }}
          >
            Recibir SMS
          </span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              color: '#82776e',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '18px',
            }}
          >
            Código al teléfono registrado
          </span>
        </div>
      </div>
      <div
        data-proto-action="correo"
        style={{
          width: '100%',
          minHeight: 56,
          borderRadius: 16,
          border: '1px solid #e5ddd4',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '12px 16px',
          boxSizing: 'border-box',
          cursor: 'pointer',
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 9999,
            background: '#f5efe7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <ClientMailIcon size={18} color="#ed6047" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <span
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              color: '#29241f',
              fontSize: 15,
              fontWeight: 700,
              lineHeight: '20px',
            }}
          >
            Recibir correo
          </span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              color: '#82776e',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '18px',
            }}
          >
            Código al correo registrado
          </span>
        </div>
      </div>
      <div
        data-proto-action="cancelar"
        style={{
          width: '100%',
          minHeight: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 0 12px',
          boxSizing: 'border-box',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            color: '#82776e',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '22px',
            textAlign: 'center',
          }}
        >
          Cancelar
        </span>
      </div>
    </div>
  );
}

export default RecuperarContrasena;
