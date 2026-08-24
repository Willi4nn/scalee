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
          'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out',
          scrolled || mobileMenuOpen
            ? 'bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm'
            : 'bg-transparent border-b border-transparent'
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
            className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight text-text-dark group relative z-50 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="Voltar para o topo"
          >
            <img
              src="/assets/scalee-logo.svg"
              alt="Scalee Logo"
              className="h-7 w-auto group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            Scalee
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[0.95rem] font-medium text-text-muted hover:text-text-dark transition-colors duration-300 py-2 outline-none focus-visible:text-primary group"
              >
                {link.label}
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-text-dark origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4 relative z-50">
            <div className="hidden md:block">
              <Button href={WHATSAPP_URL} size="sm" icon>
                Falar com especialista
              </Button>
            </div>

            <button
              className="md:hidden flex items-center justify-center p-2.5 -mr-2 text-text-dark rounded-xl hover:bg-slate-100 transition-colors active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
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
          'fixed inset-0 z-40 overflow-y-auto transition-all duration-300 ease-out md:hidden bg-white/95 backdrop-blur-md',
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="flex flex-col px-6 pt-24 pb-8 min-h-screen"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-1 flex-1 mt-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-4 text-2xl font-display font-bold text-text-dark border-b border-border/40 active:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 mb-safe">
            <Button
              href={WHATSAPP_URL}
              className="w-full justify-center"
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
