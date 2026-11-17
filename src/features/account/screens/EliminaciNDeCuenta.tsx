import { ClientTrashIcon } from '@/shared/components/ui/ClientUiIcons';

/** Sheet inferior: confirmar eliminación de cuenta (se muestra sobre Privacidad). */
export function EliminaciNDeCuenta() {
  return (
    <div
      data-figma-id="342:1712"
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
        gap: 0,
      }}
    >
      <div
        data-figma-id="342:1714"
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
        data-figma-id="342:1717"
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
        <ClientTrashIcon size={24} color="#ed6047" />
      </div>
      <span
        data-figma-id="342:1725"
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
        ¿Confirma la eliminación?
              </span>
      <span
        data-figma-id="342:1728"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          color: '#82776e',
          fontSize: 14.5,
          fontWeight: 400,
          lineHeight: '22px',
          textAlign: 'center',
          marginBottom: 24,
              maxWidth: 290,
        }}
      >
        Esta acción no se puede deshacer.
              </span>
      <div
        data-figma-id="342:1729"
        data-proto-action="si, eliminar"
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
          data-figma-id="342:1730"
          style={{
            fontFamily: "'Manrope', system-ui, sans-serif",
            color: '#ffffff',
              fontSize: 16,
            fontWeight: 800,
            lineHeight: '24px',
            textAlign: 'center',
          }}
        >
          Sí, eliminar
            </span>
          </div>
      <div
        data-figma-id="342:1732"
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
          data-figma-id="342:1733"
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

export default EliminaciNDeCuenta;
