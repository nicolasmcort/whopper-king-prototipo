/** Íconos UI cliente — relleno de capas vacías que MagicPath/Canva no exportó como path. */
import type { CSSProperties, ReactNode } from 'react';

type Props = {
  size?: number;
  color?: string;
  style?: CSSProperties;
};

const base = (
  size: number,
  style: CSSProperties | undefined,
  children: ReactNode,
  viewBox = '0 0 24 24',
  attrs: Record<string, string> = {},
) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    aria-hidden
    style={{ display: 'block', flexShrink: 0, ...style }}
    {...attrs}
  >
    {children}
  </svg>
);

/** Flecha atrás (chevron) — path alineado a figma-derived-880. */
export function ClientBackIcon({ size = 20, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M15 18L9 12L15 6"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    '0 0 24 24',
    { 'data-proto-action': 'volver' },
  );
}

/** Cubiertos — pedido en el local. */
export function ClientUtensilsIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M7 3v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 13v8" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M7 3h4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <path
        d="M16 3v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 11v10" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </>,
  );
}

/** Pin / domicilio. */
export function ClientPinIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.2" stroke={color} strokeWidth={1.5} />
    </>,
  );
}

/** Reloj ETA. */
export function ClientClockIcon({ size = 16, color = '#2d8659', style }: Props) {
  return base(
    size,
    style,
    <>
      <circle cx="12" cy="12" r="8.25" stroke={color} strokeWidth={1.5} />
      <path
        d="M12 8.5V12l2.5 1.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
  );
}

/** Candado — pago seguro. */
export function ClientLockIcon({ size = 14, color = '#82776e', style }: Props) {
  return base(
    size,
    style,
    <>
      <rect
        x="5.5"
        y="11"
        width="13"
        height="9"
        rx="2"
        stroke={color}
        strokeWidth={1.4}
      />
      <path
        d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </>,
  );
}

/** Tienda / local. */
export function ClientStoreIcon({ size = 18, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M4 10.5 5.5 5h13L20 10.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10.5V19h14v-8.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d="M10 19v-5h4v5" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
      <path
        d="M4 10.5h3.2a2.2 2.2 0 0 0 4.3 0h1a2.2 2.2 0 0 0 4.3 0H20"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </>,
  );
}

/** Tarjeta. */
export function ClientCardIcon({ size = 20, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <>
      <rect
        x="3.5"
        y="6"
        width="17"
        height="12"
        rx="2"
        stroke={color}
        strokeWidth={1.5}
      />
      <path d="M3.5 10h17" stroke={color} strokeWidth={1.5} />
      <path d="M7 14.5h4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </>,
  );
}

/** Efectivo. */
export function ClientCashIcon({ size = 20, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <>
      <rect
        x="3"
        y="7"
        width="18"
        height="11"
        rx="2"
        stroke={color}
        strokeWidth={1.5}
      />
      <circle cx="12" cy="12.5" r="2.2" stroke={color} strokeWidth={1.5} />
      <path
        d="M6.5 10.5v4M17.5 10.5v4"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </>,
  );
}

/** Nequi — marca simplificada (N). */
export function ClientNequiIcon({ size = 20, color = '#200020', style }: Props) {
  return base(
    size,
    style,
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke={color} strokeWidth={1.4} />
      <path
        d="M8 15.5V8.5h1.4L14.2 13V8.5H16v7h-1.4L9.8 10.5v5H8Z"
        fill={color}
      />
    </>,
    '0 0 24 24',
  );
}

/** Bre-B — transferencia / llaves. */
export function ClientBrebIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M7 8H4.5a1.5 1.5 0 0 0 0 3H7"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M17 13h2.5a1.5 1.5 0 0 0 0-3H17"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M8 9.5h8M8 14.5h8"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M14.5 7.5 17 9.5l-2.5 2M9.5 12.5 7 14.5l2.5 2"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
  );
}

/** Basura — quitar ítem (qty = 1). */
export function ClientTrashIcon({ size = 16, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M4 7h16"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d="M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d="M6.5 7l.8 11.2A1.5 1.5 0 0 0 8.8 19.5h6.4a1.5 1.5 0 0 0 1.5-1.3L17.5 7"
        stroke={color}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </>,
  );
}

/** Ayuda (?). */
export function ClientHelpIcon({ size = 20, color = '#82776e', style }: Props) {
  return base(
    size,
    style,
    <>
      <circle cx="12" cy="12" r="8.25" stroke={color} strokeWidth={1.5} />
      <path
        d="M9.8 9.6a2.4 2.4 0 1 1 3.5 2.1c-.7.4-1.3.9-1.3 1.8"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.6" r="0.9" fill={color} />
    </>,
  );
}

export function ClientChevronRightIcon({ size = 12, color = '#82776e', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M9 6L15 12L9 18"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  );
}

export function ClientAlertIcon({ size = 28, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth={1.6} />
      <path d="M12 8v5" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <circle cx="12" cy="16.2" r="1" fill={color} />
    </>,
  );
}

export function ClientCheckIcon({ size = 18, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M6 12.5L10 16.5L18 8"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  );
}

export function ClientEyeIcon({ size = 20, color = '#82776e', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke={color} strokeWidth={1.5} />
    </>,
  );
}

export function ClientShieldIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M12 3.5 19 6.5v5c0 4.5-3.2 7.6-7 8.5-3.8-.9-7-4-7-8.5v-5L12 3.5Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />,
  );
}

export function ClientHeadsetIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M5 13.5V12a7 7 0 0 1 14 0v1.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M5 13.5h2.5V18H5a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 5 13.5ZM19 13.5h-2.5V18H19a1.5 1.5 0 0 0 1.5-1.5v-1.5A1.5 1.5 0 0 0 19 13.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </>,
  );
}

export function ClientHomeIcon({ size = 20, color = '#82776e', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-7.5Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />,
  );
}

export function ClientUserIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <circle cx="12" cy="8" r="3.2" stroke={color} strokeWidth={1.5} />
      <path
        d="M5.5 18.5c1.5-3 4-4.5 6.5-4.5s5 1.5 6.5 4.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </>,
  );
}

export function ClientSearchIcon({ size = 20, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <>
      <circle cx="11" cy="11" r="6" stroke={color} strokeWidth={1.5} />
      <path d="M16 16.5 20 20.5" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </>,
  );
}

export function ClientHeartIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M12 19s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 7.2a3.8 3.8 0 0 1 7 2.6C19 14.7 12 19 12 19Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />,
  );
}

export function ClientLogoutIcon({ size = 20, color = '#ed6047', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M10 5H6.5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19H10"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M13 12h7M17 8.5 20.5 12 17 15.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
  );
}

export function ClientCloseIcon({ size = 20, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M7 7l10 10M17 7 7 17"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
    />,
  );
}

export function ClientEditIcon({ size = 16, color = '#82776e', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M14 5.5 18.5 10M4 20l1.2-5.5L15.5 4.2a2 2 0 0 1 2.8 0l1.5 1.5a2 2 0 0 1 0 2.8L9.5 18.8 4 20Z"
      stroke={color}
      strokeWidth={1.4}
      strokeLinejoin="round"
    />,
  );
}

/** Teléfono / celular. */
export function ClientPhoneIcon({ size = 20, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <path
      d="M8.2 4.2c.3-.7.2-1.2-.4-1.5L6.3 1.8c-.5-.3-1.2-.1-1.5.4C3.2 5.2 4.1 9.2 7.2 12.3c3.1 3.1 7.1 4 10.1 2.4.5-.3.7-1 .4-1.5l-.9-1.5c-.3-.6-.8-.7-1.5-.4l-1.7.8c-.7.3-1.4.1-1.9-.4l-2.9-2.9c-.5-.5-.7-1.2-.4-1.9l.8-1.7Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />,
  );
}

/** WhatsApp (chat + phone). */
export function ClientWhatsAppIcon({ size = 22, color = '#16a34a', style }: Props) {
  return base(
    size,
    style,
    <>
      <path
        d="M12 3.5a8.2 8.2 0 0 0-7 12.5L4.2 20l4.2-.8A8.2 8.2 0 1 0 12 3.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.4c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .4-.1.6l-.3.4c-.1.2-.1.4.1.6.4.5 1 .9 1.6 1.2.2.1.4.1.6-.1l.5-.4c.2-.1.4-.1.6 0l1.3.7c.2.1.3.3.3.5v.4c0 .3 0 .6-.5.9-.4.2-1 .4-1.7.3-1.7-.1-3.5-1.2-4.8-2.5-1.2-1.2-2.1-2.8-2.3-4.4-.1-.7.1-1.3.4-1.7Z"
        fill={color}
      />
    </>,
  );
}

/** Instagram. */
export function ClientInstagramIcon({ size = 20, color = '#29241f', style }: Props) {
  return base(
    size,
    style,
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke={color} strokeWidth={1.5} />
      <circle cx="12" cy="12" r="4.1" stroke={color} strokeWidth={1.5} />
      <circle cx="17.1" cy="6.9" r="1.05" fill={color} />
    </>,
  );
}
