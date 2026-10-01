import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { certificates, activities } from "@/data/portfolio";

export function Certificates() {
  return (
    <section id="certificates" className="border-b border-slate-200/80 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <BlurFade inView>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Certifications & Leadership
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              National professional credentials (BNSP, LSP), industrial plant certifications, and technical organization activities.
            </p>
          </div>
        </BlurFade>

        {/* Certificates Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, idx) => (
            <BlurFade key={cert.id} delay={0.1 + idx * 0.05} inView>
              <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Badge
                      variant={
                        cert.category === "Professional"
                          ? "accent"
                          : cert.category === "Language"
                          ? "muted"
                          : "default"
                      }
                      className="text-[11px]"
                    >
                      {cert.category}
                    </Badge>
                    <span className="font-mono text-xs text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-base font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="mt-2 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                    {cert.logoUrl ? (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-200 bg-white p-0.5">
                        <Image
                          src={cert.logoUrl}
                          alt={`${cert.issuer} Logo`}
                          width={16}
                          height={16}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ) : (
                      <Icon name="certificate" size={13} className="text-sky-600 shrink-0" />
                    )}
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Verified Credential</span>
                  <span className="text-slate-500 font-semibold">Active</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Technical Committees & Organization */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <BlurFade inView>
            <h3 className="text-lg font-bold text-slate-900">
              Co-Curricular & Organization Service
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Student leadership, national electronics competition committee, and community charity outreach.
            </p>
          </BlurFade>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {activities.map((act, idx) => (
              <BlurFade key={act.id} delay={0.15 + idx * 0.05} inView>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-sky-700 font-semibold">
                      {act.role}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {act.year}
                    </span>
                  </div>
                  <h4 className="mt-1 font-bold text-slate-900 text-sm">
                    {act.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
