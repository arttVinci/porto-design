"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, ProjectItem } from "@/data/portfolio";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="border-b border-slate-200/80 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header (Eyebrow 2 of max allowed across page) */}
        <BlurFade inView>
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-700 font-semibold">
              Engineering Portfolio
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Featured Systems & Hardware Projects
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Practical electronics, embedded controllers, and industrial training apparatus built from schematic calculation to functional deployment.
            </p>
          </div>
        </BlurFade>

        {/* Bento Grid: 4 items -> exactly 4 cells */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const isFeatured = project.featured;

            return (
              <BlurFade
                key={project.id}
                delay={0.1 + idx * 0.08}
                inView
                className={isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="h-full cursor-pointer"
                >
                  <MagicCard className="h-full p-6 transition-all">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs text-sky-700 font-semibold uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="font-mono text-xs text-slate-400">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                          {project.title}
                        </h3>

                        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="default" className="text-[11px] py-0.5">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-800">
                          <span>View Details</span>
                          <Icon name="arrow-right" size={13} />
                        </div>
                      </div>
                    </div>
                  </MagicCard>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Project Detail Modal Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <div className="flex items-center gap-2 font-mono text-xs text-sky-700 font-semibold uppercase">
                  <span>{selectedProject.category}</span>
                  <span className="text-slate-300">•</span>
                  <span>{selectedProject.year}</span>
                </div>
                <DialogTitle className="text-xl font-bold mt-1 text-slate-900">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 text-sm text-slate-700">
                <DialogDescription className="text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>

                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Engineered Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="accent" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-200/70 text-xs text-slate-600 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-500">Repository</span>
                    <span className="font-mono text-slate-700">
                      {selectedProject.repoUrl ? selectedProject.repoUrl : "Internal Hardware Project"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-500">Validation Status</span>
                    <span className="font-mono text-emerald-700 font-medium">
                      Physically Assembled & Tested
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Specification
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
