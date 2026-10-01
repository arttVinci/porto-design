import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Icon } from "@/components/ui/icon";
import { education } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-b border-slate-200/80 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header: Clean vertical stack, no split-header */}
        <BlurFade inView>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Engineering Background & Education
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            From hands-on workshop wiring to embedded IoT automation and sensor control systems.
          </p>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Story (7 cols) */}
          <div className="space-y-5 text-slate-700 lg:col-span-7 leading-relaxed">
            <BlurFade delay={0.1} inView>
              <p className="text-base text-slate-800 font-medium">
                I am an Industrial Electronics Engineering graduate from Politeknik Negeri Jakarta (PNJ) with a core dedication to industrial automation, control engineering, and manufacturing process optimization.
              </p>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <p className="text-sm text-slate-600 sm:text-base">
                My technical journey began with vocational electrical fundamentals at SMKN 5 Kota Bekasi, progressing into complex microcontroller architectures (ESP32, Arduino), PLC programming, and industrial panel wiring. During my internships at PT Akebono Brake Astra, I developed RFID operator verification systems, configured HMI terminals, and wired high-demand production machinery panels.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-sm text-slate-600 sm:text-base">
                Whether deploying 3D digital twin telemetry for motor speed control or diagnosing live production lines under Occupational Health and Safety (K3) standards, I utilize a data-driven troubleshooting method to ensure high machine reliability, safety compliance, and operational excellence.
              </p>
            </BlurFade>

            {/* Core Values / Work Principles */}
            <BlurFade delay={0.4} inView>
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg bg-slate-50/80 p-3.5 border border-slate-200/60">
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 uppercase tracking-wider font-mono">
                    <Icon name="wrench" size={14} className="text-sky-600" />
                    <span>Troubleshooting</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Systematic root-cause diagnosis on electrical and mechanical automation lines.
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50/80 p-3.5 border border-slate-200/60">
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 uppercase tracking-wider font-mono">
                    <Icon name="zap" size={14} className="text-sky-600" />
                    <span>Safety (K3)</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Certified in Safety & Maintenance Dojo practices for industrial facilities.
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50/80 p-3.5 border border-slate-200/60">
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 uppercase tracking-wider font-mono">
                    <Icon name="cpu" size={14} className="text-sky-600" />
                    <span>Control & IoT</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Bridging sensor signals, embedded controllers, and modern telemetry.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Education Summary Rail (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <BlurFade delay={0.15} inView>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Formal Academic Training
              </div>
            </BlurFade>

            {education.map((item, idx) => (
              <BlurFade key={item.id} delay={0.2 + idx * 0.1} inView>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-300 transition-colors">
                  <div className="flex items-start gap-3.5">
                    {item.logoUrl && (
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-white p-1 shadow-2xs">
                        <Image
                          src={item.logoUrl}
                          alt={`${item.institution} Logo`}
                          width={38}
                          height={38}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-slate-900 text-base leading-snug">
                          {item.institution}
                        </h3>
                        <span className="font-mono text-xs text-slate-500 rounded bg-slate-100 px-2 py-0.5 shrink-0">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-sky-700 mt-0.5">
                        {item.degree} - {item.major}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Academic Metric</span>
                      <span className="font-mono font-semibold text-slate-900">
                        {item.score}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Language Test</span>
                      <span className="font-mono font-medium text-slate-800">
                        {item.languageScore}
                      </span>
                    </div>

                    <div className="mt-2 text-slate-700 bg-slate-50 p-2 rounded border border-slate-100 font-mono text-[11px] leading-snug">
                      {item.certifications[0]}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
