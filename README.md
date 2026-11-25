# Materio — Analytics Dashboard

A polished, responsive React admin dashboard inspired by the attached Materio reference. It includes business KPIs, sales and earnings visualizations, recent transactions, project/session cards, responsive navigation, search, notification and profile popovers, and a persistent-in-session dark theme toggle.

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production bundle is generated in `dist/`.

## Features

- Responsive sidebar with interactive navigation and mobile drawer.
- Search filters dashboard statistics and transaction rows as you type.
- Dark/light theme toggle, favorite control, notification popover, and profile menu.
- Interactive weekly chart bars and reporting-period selector.
- Animated KPI cards, transaction progress bars, earnings chart, and session indicators.
- Accessible labels, keyboard focus styles, and reduced-motion support.

## Stack

- React 18
- Vite 6
- Lucide React icons
- CSS, no charting framework required
