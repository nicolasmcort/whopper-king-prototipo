const MASCOT_URL =
  'https://storage.googleapis.com/storage.magicpath.ai/user/426091581041446912/figma-assets/0355044e-9a24-46a6-a40c-7853e3d0f90a.png';

/** Modal centrado: «Esta opción aún no está disponible». */
export function FuncionNoDisponible() {
  return (
    <div
      data-figma-id="404:689"
      style={{
        width: '100%',
        maxWidth: 362,
        background: '#ffffff',
        borderRadius: 24,
        boxShadow: '0 24px 64px rgba(0, 0, 0, 0.28)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '28px 24px 24px',
        boxSizing: 'border-box',
        gap: 18,
      }}
    >
      <div
        data-figma-id="404:701"
        style={{
          width: 220,
          height: 190,
          backgroundImage: `url("${MASCOT_URL}")`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          flexShrink: 0,
        }}
        role="img"
        aria-label="Whopper King"
      />
      <span
        data-figma-id="404:690"
        style={{
          fontFamily: "'Manrope', system-ui, sans-serif",
          color: '#111111',
          fontSize: 20,
          fontWeight: 800,
          lineHeight: '28px',
          textAlign: 'center',
          alignSelf: 'stretch',
        }}
      >
        Esta opción aún no está disponible.
      </span>
      <span
        data-figma-id="404:691"
        style={{
          fontFamily: "'Manrope', system-ui, sans-serif",
          color: '#5c6270',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '24px',
          textAlign: 'center',
          alignSelf: 'stretch',
        }}
      >
        Puedes continuar explorando.
      </span>
      <div
        data-figma-id="404:692"
        data-proto-action="cerrar"
        style={{
          background: '#ed6047',
          borderRadius: 90,
          minHeight: 52,
          height: 52,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 16px',
          boxSizing: 'border-box',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <span
          data-figma-id="404:686"
          style={{
            fontFamily: "'Manrope', system-ui, sans-serif",
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 800,
            lineHeight: '22px',
          }}
        >
          Cerrar
        </span>
      </div>
    </div>
  );
}

export default FuncionNoDisponible;
