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

- **Framework:** [Next.js App Router](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
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
To generate an optimized static build inside the `out/` directory:
```bash
npm run build
```

---

## 📁 Directory Structure

```text
├── components.json          # shadcn-ui configuration
├── eslint.config.js         # ESLint configuration
├── netlify.toml             # Netlify build configurations
├── next-env.d.ts            # Next.js TypeScript environment declarations
├── next.config.mjs          # Next.js configuration (configured for static export)
├── package.json             # Scripts and dependencies
├── tailwind.config.ts       # Tailwind theme and styling system
├── tsconfig.json            # TypeScript configuration
├── public/                  # Static assets (robots.txt, images, logos)
└── src/
    ├── app/                 # Next.js App Router folders
    │   ├── globals.css      # Base Tailwind styles and design variables
    │   ├── layout.tsx       # Root layout with premium loaded Google Fonts
    │   ├── page.tsx         # Main landing page view
    │   ├── providers.tsx    # QueryClient and Tooltip providers wrapper
    │   └── [subpages]       # Subpages (about, rings, necklaces, etc.) & products/[id]
    ├── components/          # Reusable page sections (Hero, FeaturedProducts, WhyChooseUs)
    │   ├── layout/          # Layout wrappers (Header, Footer)
    │   └── ui/              # Low-level accessible UI components (buttons, sheets, toast)
    ├── hooks/               # Custom React hooks (e.g., useIsMobile)
    └── lib/                 # Shared utilities (class merger helper)
```

---

## 🌐 Deployment on Netlify

This project is configured to build and deploy to Netlify using the `netlify.toml` file.

- **Build Command:** `npm run build`
- **Publish Directory:** `out`
- **Routing Rules:** Static export generates directory-based `index.html` files (e.g., `/rings/index.html`) using `trailingSlash: true`, which Netlify serves correctly on page reloads without needing wildcard redirect rules.