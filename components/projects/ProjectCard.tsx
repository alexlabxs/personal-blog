'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaHammer, FaArchive, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';

interface ProjectCardProps {
  project: Project;
  index: number;
  lang: Locale;
}

const statusIcons = {
  active: FaRocket,
  developing: FaHammer,
  completed: FaCheckCircle,
  archived: FaArchive,
};

const statusLabels = {
  active: '上线中',
  developing: '开发中',
  completed: '已完成',
  archived: '已归档',
};

const statusColors = {
  active: 'text-green-400',
  developing: 'text-yellow-400',
  completed: 'text-blue-400',
  archived: 'text-gray-400',
};

export function ProjectCard({ project, index, lang }: ProjectCardProps) {
  const StatusIcon = statusIcons[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-lg bg-code p-6 border border-transparent hover:border-border"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        {project.featured && (
          <span className="rounded-full bg-surface px-2 py-0.5 text-xs text-accent font-mono">
            FEATURED
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-4 text-secondary">{project.description}</p>

      {/* Tech Stack */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-background px-2 py-1 text-xs font-mono text-secondary border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-2 text-sm text-secondary">
          <StatusIcon className={statusColors[project.status]} />
          <span>{statusLabels[project.status]}</span>
        </div>
        <div className="flex gap-4">
          <Link
            href={`/${lang}/projects/${project.slug}`}
            className="text-secondary transition-colors hover:text-accent text-sm font-mono"
            aria-label="Case study"
          >
            Case →
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-accent"
              aria-label="GitHub Repository"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary transition-colors hover:text-accent"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
