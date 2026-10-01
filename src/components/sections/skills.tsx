"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { skillCategories, marqueeHighlightSkills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-b border-slate-200/80 bg-slate-50/50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <BlurFade inView>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Technical Competencies & Tools
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Verified skills across industrial instrumentation, embedded microcontrollers, simulation software, and workshop fabrication.
            </p>
          </div>
        </BlurFade>

        {/* Marquee (Max 1 per page per skill taste rule) */}
        <BlurFade delay={0.1} inView>
          <div className="mt-8 rounded-xl border border-slate-200/80 bg-white py-3 shadow-2xs overflow-hidden">
            <Marquee pauseOnHover repeat={4} className="[--duration:28s]">
              {marqueeHighlightSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-lg bg-slate-50 px-3.5 py-1.5 font-mono text-xs font-medium text-slate-800 border border-slate-200/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                  <span>{skill}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Categorized Skills Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => (
            <BlurFade key={cat.title} delay={0.15 + idx * 0.05} inView>
              <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {cat.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="muted"
                        className="bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 gap-1.5 py-1 text-xs"
                      >
                        <Icon name={skill.icon} size={13} className="text-slate-500" />
                        <span>{skill.name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
