import { motion, type HTMLMotionProps } from 'motion/react';
import type { ElementType } from 'react';

interface FeatureCardProps extends HTMLMotionProps<'article'> {
  icon: ElementType;
  title: string;
  description: string;
  theme?: 'light' | 'dark';
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  theme = 'light',
  className = '',
  ...props
}: FeatureCardProps) {
  const isDark = theme === 'dark';

  return (
    <motion.article
      className={`group relative flex flex-col overflow-hidden rounded-lg border p-8 transition-all duration-300 ${
        isDark
          ? 'hover:border-primary/50 border-white/10 bg-white/5 hover:bg-white/10'
          : 'border-border hover:border-primary/30 hover:shadow-float bg-white'
      } ${className}`}
      {...props}
    >
      {isDark && (
        <div
          className="bg-primary/20 pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
      )}

      <div
        className={`group-hover:bg-primary border-primary relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-(--radius-md) border-2 transition-colors group-hover:text-white ${
          isDark ? 'text-primary' : 'bg-bg-alt text-primary border-primary'
        }`}
      >
        <Icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
      </div>

      <h3
        className={`relative z-10 mb-3 text-xl font-bold ${
          isDark ? 'text-white' : 'text-text-dark'
        }`}
      >
        {title}
      </h3>

      <p
        className={`relative z-10 leading-relaxed transition-colors ${
          isDark ? 'text-slate-400 group-hover:text-slate-300' : 'text-text'
        }`}
      >
        {description}
      </p>
    </motion.article>
  );
}
