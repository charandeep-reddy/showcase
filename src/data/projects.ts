import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Lumina Health",
    description:
      "A modern telehealth platform connecting patients with healthcare providers through seamless video consultations.",
    thumbnail: "/projects/placeholder-1.svg",
    category: "Healthcare",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    url: "https://example.com",
  },
  {
    id: "2",
    title: "Meridian Finance",
    description:
      "A sleek fintech dashboard for tracking investments, portfolio performance, and market trends in real time.",
    thumbnail: "/projects/placeholder-2.svg",
    category: "Fintech",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    url: "https://example.com",
  },
  {
    id: "3",
    title: "Atlas Commerce",
    description:
      "A high-performance e-commerce storefront with dynamic filtering, cart management, and optimized checkout.",
    thumbnail: "/projects/placeholder-3.svg",
    category: "E-commerce",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "Vercel"],
    url: "https://example.com",
  },
  {
    id: "4",
    title: "Nova Studio",
    description:
      "A creative agency portfolio featuring bold typography, smooth page transitions, and a custom CMS.",
    thumbnail: "/projects/placeholder-4.svg",
    category: "Portfolio",
    technologies: ["Next.js", "Sanity CMS", "Framer Motion", "Tailwind CSS"],
    url: "https://example.com",
  },
  {
    id: "5",
    title: "Prism Dashboard",
    description:
      "An analytics dashboard with interactive charts, role-based access, and real-time data synchronization.",
    thumbnail: "/projects/placeholder-5.svg",
    category: "SaaS",
    technologies: ["React", "D3.js", "Supabase", "Tailwind CSS"],
    url: "https://example.com",
  },
  {
    id: "6",
    title: "Harvest Market",
    description:
      "A farm-to-table marketplace connecting local producers with consumers through an intuitive ordering system.",
    thumbnail: "/projects/placeholder-6.svg",
    category: "Marketplace",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    url: "https://example.com",
  },
];
