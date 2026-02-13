# Portfolio Project Demos - Build Plan

## Overview
Interactive visual demos for portfolio projects, deployable as standalone sites that open when clicking project images on the portfolio "Work" page.

## Tech Stack (Matching Reference Demo)
- **Framework:** Vite + React 18
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **Deployment:** Netlify/Vercel

---

## Project 1: Sales Pipeline Automation Engine
**Route:** `/` (Index page - Kanban Board)

### Features to Build
- [x] Kanban board with drag-and-drop (5 columns: Quote → Proposal → Contract → Booked → Won)
- [ ] Deal cards with client info, event type, value, probability
- [ ] Stage transition animations with automation log sidebar
- [ ] Stats bar: Pipeline value, conversion rate, deal count, avg deal size
- [ ] Auto-generated task indicator (Phase 3 simulation)
- [ ] 65-field sync notification on stage change

### Sample Data
- 7-8 deals across stages
- Mix of corporate events, weddings, conferences
- Values: $15K - $150K range

---

## Project 2: Executive BI Dashboard
**Route:** `/dashboard`

### Features to Build
- [ ] KPI cards row: Revenue, Active Projects, Vendor Response Rate, Avg Margin
- [ ] Revenue bar chart (6 months)
- [ ] Service breakdown pie chart (DJ, Photo, Lighting, Catering, Other)
- [ ] Conversion rate line chart
- [ ] Top projects table with margin bars
- [ ] Date range selector
- [ ] Export buttons (PDF, Excel - visual only)
- [ ] Customize layout toggle

### Chart Types
- Bar chart (revenue over time)
- Pie chart (service breakdown)
- Line chart (conversion trend)
- Progress bars (project margins)

---

## Project 3: Vendor Portal
**Route:** `/vendor`

### Features to Build
- [x] Work orders table with 6-state status badges
- [ ] Vendor header with partner badge
- [ ] Pending work order accept/decline buttons
- [ ] RFQ workflow panel
- [ ] Compliance status sidebar (certificates, expiry dates)
- [ ] Notification bell with badge
- [ ] Token expiry countdown display
- [ ] Record-level isolation notice banner

### Work Order Statuses
1. Pending (amber)
2. Sent (blue)
3. Accepted/Confirmed (green)
4. Declined (red)
5. In Progress (purple)
6. Completed (gray)

---

## File Structure
```
portfolio-demos/
├── client/
│   ├── components/
│   │   ├── layout/
│   │   │   └── DashboardLayout.tsx
│   │   └── ui/
│   │       └── [shadcn components]
│   ├── pages/
│   │   ├── Index.tsx          # Sales Pipeline Kanban
│   │   ├── Dashboard.tsx      # BI Dashboard
│   │   ├── VendorPortal.tsx   # Vendor Portal
│   │   └── NotFound.tsx
│   ├── App.tsx
│   └── global.css
├── public/
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Integration with Portfolio

### Option A: External Links (Recommended)
1. Deploy demos to Netlify/Vercel
2. Update portfolio `/work/[slug]` pages to include "View Live Demo" button
3. Links open in new tab to deployed demo sites

### Option B: iFrame Embeds
1. Embed demos in modal/drawer on portfolio
2. Project images click → open fullscreen modal with iframe
3. More seamless but heavier

### Portfolio Changes Required
```tsx
// In work project MDX or component:
<Button href="https://sales-pipeline-demo.netlify.app" target="_blank">
  View Interactive Demo
</Button>
```

---

## Deployment Checklist
- [ ] Build all 3 pages
- [ ] Test responsive design
- [ ] Add demo disclaimer banner
- [ ] Connect to Netlify
- [ ] Add custom domain (optional)
- [ ] Update portfolio with demo links

---

## Current Progress
- ✅ Reference demo analyzed
- ✅ Base structure copied
- ⏳ Index page (Sales Pipeline) - in template
- ⏳ Dashboard page - in template  
- ⏳ VendorPortal page - in template
- ⬜ Custom enhancements for each project

## Next Steps
1. Customize Index.tsx to match Sales Pipeline Automation project
2. Enhance Dashboard.tsx with more drill-down interactions
3. Add RFQ workflow to VendorPortal.tsx
4. Deploy to Netlify
5. Add "View Demo" buttons to portfolio
