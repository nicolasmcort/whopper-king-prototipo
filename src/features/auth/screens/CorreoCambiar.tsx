import { ClientMailIcon } from '@/shared/components/ui/ClientUiIcons';

function OtpBox() {
  return (
    <div
      style={{
        width: 36,
        height: 44,
        borderRadius: 10,
        border: '1px solid #e5ddd4',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#c4bbb2',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 18,
        fontWeight: 500,
      }}
    >
      X
    </div>
  );
}

/** Sheet OTP por correo — se muestra sobre login o registro. */
export function CorreoCambiar() {
  return (
    <div
      data-figma-id="802:4225"
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
      <div
        style={{
          width: 64,
          height: 64,
          background: '#f5efe7',
          borderRadius: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginBottom: 16,
        }}
      >
        <ClientMailIcon size={24} color="#ed6047" />
      </div>
      <span
        style={{
          fontFamily: "'Manrope', system-ui, sans-serif",
          color: '#29241f',
          fontSize: 22,
          fontWeight: 800,
          lineHeight: '30px',
          letterSpacing: '-0.55px',
          textAlign: 'center',
          marginBottom: 16,
          maxWidth: 320,
        }}
      >
        Con el código que recibe por correo, digilencia lo siguiente
      </span>
      <div
        style={{
          display: 'flex',
          gap: 5,
          marginBottom: 20,
          justifyContent: 'center',
        }}
      >
        <OtpBox />
        <OtpBox />
        <OtpBox />
        <OtpBox />
        <OtpBox />
        <OtpBox />
      </div>
      <div
        data-proto-action="confirmar"
        style={{
          background: '#ed6047',
          borderRadius: 16,
          width: '100%',
          minHeight: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '14px 0',
          boxSizing: 'border-box',
          cursor: 'pointer',
          flexShrink: 0,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', system-ui, sans-serif",
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 800,
            lineHeight: '24px',
            textAlign: 'center',
          }}
        >
          Confirmar
        </span>
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

export default CorreoCambiar;
