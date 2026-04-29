'use client';

import { motion } from 'framer-motion';
import { WorkExperience } from '@/lib/types';

interface TimelineProps {
  experiences: WorkExperience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          className="relative border-l-2 border-border pl-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

          <div className="mb-1 text-sm text-accent font-mono">{exp.period}</div>
          <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
          <div className="mb-2 text-secondary">{exp.company}</div>
          <ul className="ml-4 list-disc space-y-1 text-secondary">
            {exp.description.map((item, i) => (
              <li key={i} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
