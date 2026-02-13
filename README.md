# Ashton Portfolio - Interactive Project Demos

Live visual demos for portfolio projects. These demos showcase the functionality of real systems I've built, rendered as interactive web applications.

## 🎯 Projects

### 1. Sales Pipeline Automation Engine (`/`)
A Kanban-style CRM pipeline showing the 6-phase automation chain from Quote to Delivery.
- Drag-and-drop deal cards between stages
- Real-time automation log showing field syncs
- Stats bar with pipeline metrics

### 2. Executive BI Dashboard (`/dashboard`)
Configurable analytics dashboard with drill-down to live records.
- KPI cards with trend indicators
- Revenue charts, service breakdowns
- Export functionality (PDF, Excel)

### 3. Vendor Portal (`/vendor`)
Self-service vendor portal with tokenized access workflow.
- Work order table with 6-state lifecycle
- Accept/Decline actions with e-signature simulation
- Compliance status sidebar
- RFQ workflow panel

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

## 🛠 Tech Stack

- **Vite** - Build tool
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Recharts** - Charts
- **Lucide React** - Icons

## 📁 Structure

```
client/
├── pages/
│   ├── Index.tsx        # Sales Pipeline Kanban
│   ├── Dashboard.tsx    # BI Dashboard
│   └── VendorPortal.tsx # Vendor Portal
├── components/
│   ├── layout/
│   └── ui/
└── App.tsx
```

## 🌐 Deployment

Deploy to Netlify:
```bash
pnpm build
# Deploy dist/spa folder
```

## 📝 Notes

These are **demonstration UIs** that showcase the look and feel of production systems. They use mock data and simulated interactions to illustrate functionality.

---

Built by [Ashton Medina](https://ashtonmedina.com)
