import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowColor?: 'primary' | 'secondary';
  children: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  theme?: 'light' | 'dark';
}

export function SectionHeader({
  eyebrow,
  eyebrowColor = 'primary',
  children,
  description,
  align = 'center',
  className,
  theme = 'light',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={cn(
        'mb-12 max-w-175 md:mb-16',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-4 block font-mono text-[0.75rem] font-bold tracking-[0.08em] uppercase',
            eyebrowColor === 'primary' ? 'text-primary' : 'text-secondary'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display mb-5 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] font-bold tracking-tight',
          theme === 'dark' ? 'text-white' : 'text-text-dark'
        )}
      >
        {children}
      </h2>
      {description && (
        <p
          className={cn(
            'text-[1.05rem] leading-relaxed',
            theme === 'dark' ? 'text-slate-400' : 'text-text-muted'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
