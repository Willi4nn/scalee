import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_LINKS, WHATSAPP_URL } from '../../data/content';
import { useBodyLock } from '../../hooks/useBodyLock';
import { useScroll } from '../../hooks/useScroll';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function Navbar() {
  const scrolled = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useBodyLock(mobileMenuOpen);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out',
          scrolled || mobileMenuOpen
            ? 'border-border/50 border-b bg-white/80 shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div
          className={cn(
            'container flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-16' : 'h-20 lg:h-24'
          )}
        >
          <a
            href="#top"
            className="font-display text-text-dark group focus-visible:ring-primary relative z-50 flex items-center gap-2 rounded-md text-2xl font-bold tracking-tight outline-none focus-visible:ring-2"
            aria-label="Voltar para o topo"
          >
            <img
              src="/scalee-logo.svg"
              alt="Scalee Logo"
              className="h-7 w-auto transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            Scalee
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-primary-hover focus-visible:text-primary group relative py-2 text-[0.95rem] font-medium transition-colors duration-300 outline-none"
              >
                {link.label}
                <span className="bg-primary-hover absolute bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="relative z-50 flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
              <Button href={WHATSAPP_URL} size="sm" icon>
                Falar com especialista
              </Button>
            </div>

            <button
              className="text-text-dark focus-visible:ring-primary -mr-2 flex items-center justify-center rounded-xl p-2.5 transition-colors outline-none hover:bg-slate-100 focus-visible:ring-2 active:scale-95 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-40 overflow-y-auto bg-white/95 backdrop-blur-md transition-all duration-300 ease-out md:hidden',
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="flex min-h-dvh flex-col px-6 pt-24 pb-12"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="mt-4 flex flex-1 flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display text-text-dark border-border/40 active:text-primary border-b py-4 text-2xl font-bold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button
              href={WHATSAPP_URL}
              className="shadow-primary w-full justify-center"
              size="md"
              icon
            >
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
