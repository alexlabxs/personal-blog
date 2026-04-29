'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

interface SkillCloudProps {
  skills: Skill[];
}

export function SkillCloud({ skills }: SkillCloudProps) {
  const groupedSkills = skills.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category]!.push(skill);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
        <div key={category}>
          <h3 className="mb-3 text-sm font-semibold text-accent font-mono">
            {category.toUpperCase()}
          </h3>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                className="cursor-default rounded-md bg-code px-3 py-1.5 text-sm font-mono text-secondary transition-colors hover:bg-surface hover:text-accent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
