import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          Showcase
        </Link>
        <Link
          href="#projects"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
