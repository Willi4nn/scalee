import { ArrowRight } from 'lucide-react';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'md' | 'sm';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-primary hover:bg-primary-hover hover:-translate-y-[2px] hover:shadow-primary-hover',
  ghost:
    'bg-transparent text-text-dark border-2 border-border-strong hover:bg-bg-alt hover:border-text-dark',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-[0.95rem]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      icon = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-200 whitespace-nowrap group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const arrow = icon && (
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
        aria-hidden="true"
      />
    );

    if (href) {
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          className={classes}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
          {arrow}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
        {arrow}
      </button>
    );
  }
);

Button.displayName = 'Button';
