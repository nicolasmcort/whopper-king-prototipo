# Whopper King — Prototipo UX (revisión)

Prototipo interactivo (Vite + React) con pantallas de **cliente** y **dueña/local** exportadas desde MagicPath/Figma.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que imprima Vite (por defecto `http://127.0.0.1:5173`).

## Rutas útiles (hash)

| Pantalla | URL |
|---|---|
| Inicio cliente | `/#/whopper-inicio` |
| Menú / Almuerzo | `/#/menu` · `/#/menu-almuerzo` |
| Carrito local | `/#/tu-carrito-local` |
| Inventario (dueña) | `/#/inventario` |
| Números del negocio | `/#/numeros-negocio` |

## Estado actual (nov 2026)

- Navegación cliente (categorías, carrito, `<-` → inicio)
- Íconos de inicio alineados al SVG de Figma
- Pantallas dueña (inventario / estadísticas) ya montadas

WIP: fidelidad 1:1 de íconos/espaciado y flujos de pago/PQRS.
