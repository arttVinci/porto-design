import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white">
            <Icon name="cpu" size={13} />
          </span>
          <span className="font-semibold">{personalInfo.name}</span>
          <span className="font-mono text-xs text-slate-400">({personalInfo.degree})</span>
        </div>

        <p className="text-center text-xs text-slate-500 sm:text-right">
          © 2026 Tiar Rizky Budiyono. Built with Next.js, Tailwind CSS, Magic UI, and Koboyo Icons.
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
          <Link href="#about" className="hover:text-slate-900 transition-colors">
            About
          </Link>
          <span>/</span>
          <Link href="#projects" className="hover:text-slate-900 transition-colors">
            Projects
          </Link>
          <span>/</span>
          <Link href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
