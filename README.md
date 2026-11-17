# Whopper King — Prototipo UX (Vite + React)

Prototipo interactivo cliente + admin, organizado por **features** y **shared** (Módulo II · Hito 2).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL de Vite (por defecto `http://127.0.0.1:5173`).

## Estructura modular

```text
src/
  features/     # auth, home, menu, cart, checkout, account, pqrs, admin-*
  shared/       # layout, ui, interactive, hooks, lib, settings
  desktop/      # shells nativos PC
  App.tsx       # marco móvil + responsive
  screens.tsx   # registro de pantallas (hash routes)
```

Detalle del inventario: `../Hitos/Hito 2/Inventario_de_Componentes.md`  
Traspaso a otro directorio: `../Hitos/Hito 2/Guia_Traspaso_Modular.md`

## Rutas útiles (hash)

| Pantalla | URL |
|---|---|
| Inicio cliente | `/#/whopper-inicio` |
| Menú / Almuerzo | `/#/menu` · `/#/menu-almuerzo` |
| Carrito local | `/#/tu-carrito-local` |
| Inventario (admin) | `/#/inventario` |
| Números del negocio | `/#/numeros-negocio` |
| PQRS | `/#/pqrs` |

## Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Desarrollo |
| `npm run build` | Typecheck + bundle |
| `npm run preview` | Preview del build |
