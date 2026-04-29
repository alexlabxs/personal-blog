'use client';

import { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/lib/projects';
import { Locale } from '@/lib/i18n';
import { useTranslation } from '@/lib/i18n/client';

interface ProjectsClientProps {
  lang: Locale;
}

export function ProjectsClient({ lang }: ProjectsClientProps) {
  const dict = useTranslation(lang);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechs = useMemo(() => {
    return Array.from(new Set(projects.flatMap(project => project.techStack))).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter(project => project.techStack.includes(selectedTech));
  }, [projects, selectedTech]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);

  const techCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach(project => {
      project.techStack.forEach(tech => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });
    return counts;
  }, [projects]);

  const handleTechClick = (tech: string | null) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  };

  const allLabel = lang === 'zh' ? '全部' : 'All';
  const filteringLabel = lang === 'zh' ? '正在筛选' : 'Filtering';
  const clearLabel = lang === 'zh' ? '清除筛选' : 'Clear';
  const noProjectsLabel = lang === 'zh' ? '没有找到使用' : 'No projects found with';
  const techStackLabel = lang === 'zh' ? '技术栈的项目' : 'tech stack';

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16 md:px-8">
      <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
          <div className="font-mono text-accent text-sm mb-4">~/projects</div>
          <h1 className="text-4xl font-bold mb-2 text-primary">{dict.projects.title}</h1>
          <p className="text-secondary">{lang === 'zh' ? '正在构建和已经完成的项目' : 'Projects I\'m building and have completed'}</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => handleTechClick(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTech === null
                  ? 'bg-accent text-white'
                  : 'bg-surface text-secondary border border-border hover:bg-surface'
              }`}
            >
              {allLabel} ({projects.length})
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechClick(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTech === tech
                    ? 'bg-accent text-white'
                    : 'bg-surface text-secondary border border-border hover:bg-surface'
                }`}
              >
                {tech} ({techCounts[tech] || 0})
              </button>
            ))}
          </div>
          {selectedTech && (
            <p className="text-sm text-secondary">
              {filteringLabel}: <span className="text-accent">{selectedTech}</span>
              <button
                onClick={() => setSelectedTech(null)}
                className="ml-2 text-muted hover:text-primary underline"
              >
                {clearLabel}
              </button>
            </p>
          )}
        </div>

        {featuredProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 font-mono text-accent text-sm">
              <span className="mr-2">★</span>FEATURED
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-6 font-mono text-muted text-sm">ALL PROJECTS</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-secondary">
              <p>{noProjectsLabel} {selectedTech} {techStackLabel}</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
