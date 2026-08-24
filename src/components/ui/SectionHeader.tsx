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
}

export function SectionHeader({
  eyebrow,
  eyebrowColor = 'primary',
  children,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={cn(
        'max-w-175 mb-12 md:mb-16',
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
            'font-mono text-[0.75rem] font-bold tracking-[0.08em] uppercase block mb-4',
            eyebrowColor === 'primary' ? 'text-primary' : 'text-secondary'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-display font-bold text-text-dark leading-[1.1] tracking-tight mb-5">
        {children}
      </h2>
      {description && (
        <p className="text-[1.05rem] text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
