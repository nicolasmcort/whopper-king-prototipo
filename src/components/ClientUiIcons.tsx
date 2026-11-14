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
) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    aria-hidden
    style={{ display: 'block', flexShrink: 0, ...style }}
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
