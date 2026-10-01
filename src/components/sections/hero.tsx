import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const roles = [
    "Industrial Automation Engineer",
    "IoT & Control Systems Specialist",
    "Electrical Panel & Wiring Engineer",
  ];

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center border-b border-slate-200/70 bg-gradient-to-b from-white via-slate-50/50 to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Element 1: Status Badge (Eyebrow 1 of max allowed) */}
        <BlurFade delay={0.1} inView>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1 text-xs font-mono text-slate-700 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>Industrial Electronics Graduate (PNJ)</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Bekasi, ID</span>
          </div>
        </BlurFade>

        {/* Element 2: Headline (Max 2 lines, controlled scale) */}
        <BlurFade delay={0.2} inView>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {personalInfo.name}
          </h1>
          <div className="mt-3 text-lg font-semibold tracking-tight text-sky-700 sm:text-2xl">
            <TypingAnimation words={roles} duration={70} pauseDelay={2200} />
          </div>
        </BlurFade>

        {/* Element 3: Subtext (Strictly <= 20 words, <= 4 lines) */}
        <BlurFade delay={0.3} inView>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
            Engineering reliable automation, sensor instrumentation, panel wiring, and embedded control systems with hands-on manufacturing line experience.
          </p>
        </BlurFade>

        {/* Element 4: Primary & Secondary CTAs */}
        <BlurFade delay={0.4} inView>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link href="#projects">
              <Button variant="primary" size="md" className="gap-2">
                <span>View Projects</span>
                <Icon name="arrow-right" size={15} />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="md" className="gap-2">
                <Icon name="mail" size={15} />
                <span>Get in Touch</span>
              </Button>
            </Link>
            <a
              href={personalInfo.cvPdfPath}
              download="CV-Tiar-Rizky-Budiyono.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="md" className="gap-2 text-slate-600">
                <Icon name="document" size={15} />
                <span>Resume (PDF)</span>
              </Button>
            </a>
          </div>
        </BlurFade>

        {/* Technical quick-facts pill line */}
        <BlurFade delay={0.5} inView>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="award" size={14} className="text-sky-600" />
              BNSP Certified 2026
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="briefcase" size={14} className="text-sky-600" />
              PT Akebono Brake Astra (Intern)
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="cpu" size={14} className="text-sky-600" />
              ESP32 / Arduino / PLC
            </span>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
