"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="bg-slate-50/70 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <BlurFade inView>
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-semibold">
              Contact & Inquiries
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
              Available for full-time and project opportunities in industrial automation, IoT integration, and electrical control engineering.
            </p>
          </div>
        </BlurFade>

        {/* Contact Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <BlurFade delay={0.1} inView>
            <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <Icon name="mail" size={18} />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  Direct Email
                </h3>
                <p className="mt-1 text-xs text-slate-600 font-mono break-all">
                  {personalInfo.email}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="w-full gap-1.5 text-xs font-mono"
                >
                  <Icon name={copied ? "check" : "copy"} size={13} className={copied ? "text-emerald-600" : ""} />
                  <span>{copied ? "Copied" : "Copy Email"}</span>
                </Button>
              </div>
            </div>
          </BlurFade>

          {/* Phone / WhatsApp Card */}
          <BlurFade delay={0.2} inView>
            <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <Icon name="phone" size={18} />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  Telephone & WhatsApp
                </h3>
                <p className="mt-1 text-xs text-slate-600 font-mono">
                  {personalInfo.phone}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}>
                  <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs font-mono">
                    <Icon name="phone" size={13} />
                    <span>Call Directly</span>
                  </Button>
                </a>
              </div>
            </div>
          </BlurFade>

          {/* Professional Network Card */}
          <BlurFade delay={0.3} inView>
            <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs sm:col-span-2 lg:col-span-1">
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <Icon name="linkedin" size={18} />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  LinkedIn Network
                </h3>
                <p className="mt-1 text-xs text-slate-600 font-mono">
                  Bekasi, Indonesia
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs font-mono">
                    <Icon name="external-link" size={13} />
                    <span>Open Profile</span>
                  </Button>
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
