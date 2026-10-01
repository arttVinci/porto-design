import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Icon } from "@/components/ui/icon";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-b border-slate-200/80 bg-slate-50/50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <BlurFade inView>
          <div className="text-center sm:text-left max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Industrial Experience
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Hands-on engineering internships in automotive manufacturing, automated lines, and factory floor IoT support.
            </p>
          </div>
        </BlurFade>

        {/* Minimal Vertical Timeline */}
        <div className="mt-14 relative pl-6 sm:pl-8 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 space-y-12">
          {experiences.map((exp, idx) => (
            <BlurFade key={exp.id} delay={0.15 + idx * 0.1} inView>
              <div className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border-2 border-slate-900 text-slate-900 shadow-2xs group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon
                    name={exp.id === "akebono-workshop" ? "wrench" : "cpu"}
                    size={13}
                  />
                </div>

                {/* Card Container */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs transition-shadow hover:shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      {exp.logoUrl && (
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-white p-1 shadow-2xs">
                          <Image
                            src={exp.logoUrl}
                            alt={`${exp.company} Logo`}
                            width={38}
                            height={38}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5 text-sm font-medium text-sky-800">
                          <span>{exp.company}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-normal text-slate-500">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-medium text-slate-500 rounded-md bg-slate-100 px-2.5 py-1 shrink-0 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points from CV */}
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
