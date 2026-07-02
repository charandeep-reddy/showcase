import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Food Login",
    description:
      "Took a food brand with 42k social media followers from Instagram DMs to a full e-commerce platform — 41 products across 7 categories with cart, Razorpay payments, and a protected admin panel.",
    thumbnail: "/projects/foodlogin.webp",
    category: "E-commerce",
    technologies: ["Next.js", "Supabase", "TypeScript", "Razorpay"],
    url: "https://foodlog.in",
  },
  {
    id: "2",
    title: "Minikyu",
    description:
      "Compress images in your browser — JPEG, PNG, WebP, AVIF — with zero uploads. Batch processing, before/after preview, and resize controls. Everything stays on your machine.",
    thumbnail: "/projects/minikyu.webp",
    category: "Tool",
    technologies: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Canvas API"],
    url: "https://minikyu.psydevx.app",
  },
  {
    id: "3",
    title: "SaaS King",
    description:
      "7+ page SaaS marketing site with animated UI and type-safe forms. Shipped with zero post-launch defects — enforced by zod + react-hook-form across the entire component system.",
    thumbnail: "/projects/saasking.webp",
    category: "SaaS",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "zod", "shadcn/ui"],
    url: "https://saasking.ai",
  },
  {
    id: "4",
    title: "CodeDale",
    description:
      "Killed rendering jank on 3 agency pages — Brands, Contact, Works — bringing interactions under 100ms. Targeted performance fixes, no rewrites.",
    thumbnail: "/projects/codedale.webp",
    category: "Agency",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    url: "https://codedale.tech",
  },
  {
    id: "5",
    title: "BGMI Vault",
    description:
      "100+ game wiki articles written by an AI agent — zero manual data entry. Weapons, maps, vehicles, and event modes scraped and published to Sanity CMS through an MCP-driven content pipeline.",
    thumbnail: "/projects/bgmi-vault.webp",
    category: "Content",
    technologies: ["Next.js", "Sanity CMS", "MCP Protocol", "TypeScript", "Tailwind"],
    url: "https://bgmi-vault.vercel.app",
  },
  {
    id: "6",
    title: "PayAtom",
    description:
      "Landing page for a global payments platform that makes complex fintech feel clear and trustworthy. Optimized for international markets with fast load times and clear conversion paths.",
    thumbnail: "/projects/payatom.webp",
    category: "Fintech",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://payatom.vercel.app",
  },
];
