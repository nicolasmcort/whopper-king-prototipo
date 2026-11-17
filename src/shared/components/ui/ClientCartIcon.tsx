/** Ícono de carrito — paths exactos del SVG Figma WHOPPER INICIO. */
import type { CSSProperties } from 'react';

type Props = {
  size?: number;
  color?: string;
  style?: CSSProperties;
};

/** Relleno/header (stroke #29241F, sw 1.575) — coords absolutas del export normalizadas. */
export function ClientCartIcon({ size = 21, color = '#29241f', style }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="275.294 75.294 17.535 17.456"
      fill="none"
      aria-hidden
      style={style}
    >
      <path
        d="M275.294 75.2937H277.044L279.371 86.1612C279.547 86.9822 280.282 87.5624 281.121 87.5437H289.679C290.499 87.5424 291.209 86.9712 291.385 86.17L292.829 79.6687H277.98"
        stroke={color}
        strokeWidth={1.575}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M279.625 91.875C279.625 92.3579 280.017 92.75 280.5 92.75C280.983 92.75 281.375 92.3579 281.375 91.875C281.375 91.3921 280.983 91 280.5 91C280.017 91 279.625 91.3921 279.625 91.875V91.875"
        stroke={color}
        strokeWidth={1.575}
      />
      <path
        d="M289.25 91.875C289.25 92.3579 289.642 92.75 290.125 92.75C290.608 92.75 291 92.3579 291 91.875C291 91.3921 290.608 91 290.125 91C289.642 91 289.25 91.3921 289.25 91.875V91.875"
        stroke={color}
        strokeWidth={1.575}
      />
    </svg>
  );
}

/** Outline (nav inferior, stroke #82776E, sw 1.5). */
export function ClientCartIconOutline({
  size = 20,
  color = '#82776e',
  style,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="241.167 1239.83 18.333 17.5"
      fill="none"
      aria-hidden
      style={style}
    >
      <path
        d="M241.167 1239.83H244.5L246.733 1250.99C246.89 1251.78 247.593 1252.35 248.4 1252.33H256.5C257.307 1252.35 258.009 1251.78 258.167 1250.99L259.5 1244H245.333"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M247 1256.5C247 1256.96 247.373 1257.33 247.833 1257.33C248.293 1257.33 248.667 1256.96 248.667 1256.5C248.667 1256.04 248.293 1255.67 247.833 1255.67C247.373 1255.67 247 1256.04 247 1256.5V1256.5"
        stroke={color}
        strokeWidth={1.5}
      />
      <path
        d="M256.167 1256.5C256.167 1256.96 256.54 1257.33 257 1257.33C257.46 1257.33 257.833 1256.96 257.833 1256.5C257.833 1256.04 257.46 1255.67 257 1255.67C256.54 1255.67 256.167 1256.04 256.167 1256.5V1256.5"
        stroke={color}
        strokeWidth={1.5}
      />
    </svg>
  );
}
