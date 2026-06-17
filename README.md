# Chandralekha Jewels

An exquisite showcase web application for **Chandralekha Jewels**, a trusted family-owned jeweler based in Coimbatore, India, with over 35 years of heritage. The application highlights handcrafted BIS 916 Hallmarked and HUID-certified gold, diamond, and antique jewelry collections.

**Live Application:** [chandralekhajewels.netlify.app](https://chandralekhajewels.netlify.app/)

---

## 🚀 Key Features

- **Product Collection Showcases:** Dedicated pages highlighting elegant handcrafted designs for Rings, Necklaces, and Earrings.
- **Local SEO Optimized:** Pre-configured meta descriptions, open-graph tags, and dynamic titles targeting gold buyers in the Coimbatore region.
- **Custom UI Components:** Interactive components built using Tailwind CSS and Radix UI primitives (via shadcn-ui) for a smooth and cohesive user experience.
- **Fully Responsive Design:** Tailored layouts for desktops, tablets, and mobile devices (utilizing customized sidebars and mobile sheets).
- **FAQ & Information Guides:** Informative guides on gold purity (BIS 916 Hallmarking), HUID validation, and general jewelry care.

---

## 🛠️ Tech Stack

This project is built using a modern front-end stack:

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **State & Queries:** [TanStack React Query](https://tanstack.com/query/latest)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 💻 Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd ranilmukesh-clj-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The application will be accessible locally at `http://localhost:8080/` (or your configured port).

### 4. Build for Production
To generate an optimized build inside the `dist/` directory:
```bash
npm run build
```

---

## 📁 Directory Structure

```text
├── components.json          # shadcn-ui configuration
├── eslint.config.js         # ESLint configuration
├── netlify.toml             # Netlify build and redirect configurations
├── package.json             # Scripts and dependencies
├── tailwind.config.ts       # Tailwind theme and styling system
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite bundler configurations
├── public/                  # Static assets (robots.txt, images, etc.)
└── src/
    ├── components/          # Reusable page sections (Hero, FeaturedProducts, WhyChooseUs)
    │   ├── layout/          # Layout wrappers, Header, and Footer
    │   └── ui/              # Low-level accessible components (buttons, dialogs, accordions)
    ├── hooks/               # Custom React hooks (e.g., useIsMobile)
    ├── lib/                 # Shared utilities (class merger helper)
    ├── pages/               # Top-level page views (Index, About, Contact, Rings, etc.)
    ├── App.tsx              # Main routing and provider wrapper
    ├── index.css            # Base Tailwind styles and design variables
    └── main.tsx             # React entry point
```

---

## 🌐 Deployment on Netlify

This project is configured to build and deploy to Netlify using the `netlify.toml` file.

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Routing Rules:** Includes a wildcard redirect (`/* -> /index.html`) to ensure clean URL reloads work on subpages such as `/rings` and `/about`.