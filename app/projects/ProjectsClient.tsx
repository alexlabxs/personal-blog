'use client';

import { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/lib/projects';

export function ProjectsClient() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // 获取所有唯一技术栈并排序
  const allTechs = useMemo(() => {
    return Array.from(new Set(projects.flatMap(project => project.techStack))).sort();
  }, [projects]);

  // 根据选中的技术栈过滤项目
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter(project => project.techStack.includes(selectedTech));
  }, [projects, selectedTech]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);

  // 统计每个技术栈的项目数量
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

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="font-mono text-terminal-green text-sm mb-4">~/projects</div>
          <h1 className="text-4xl font-bold mb-2">项目展示</h1>
          <p className="text-gray-400">正在构建和已经完成的项目</p>
        </div>

        {/* Tech Stack Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => handleTechClick(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTech === null
                  ? 'bg-brand-primary text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              全部 ({projects.length})
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechClick(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTech === tech
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tech} ({techCounts[tech] || 0})
              </button>
            ))}
          </div>
          {selectedTech && (
            <p className="text-sm text-gray-400">
              正在筛选: <span className="text-brand-primary">{selectedTech}</span>
              <button
                onClick={() => setSelectedTech(null)}
                className="ml-2 text-gray-500 hover:text-white underline"
              >
                清除筛选
              </button>
            </p>
          )}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 font-mono text-terminal-green text-sm">
              <span className="mr-2">★</span>FEATURED
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section>
          <h2 className="mb-6 font-mono text-gray-400 text-sm">ALL PROJECTS</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p>没有找到使用 {selectedTech} 技术栈的项目</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}