import { CheckCircle2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import type { Service } from '../../data/content';
import { useBodyLock } from '../../hooks/useBodyLock';
import { Button } from './Button';
import { SectionBadge } from './SectionBadge';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useBodyLock(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!service) return null;

  const whatsappLink = `https://wa.me/553499069861?text=${encodeURIComponent(
    service.modalDetails.whatsappMessage
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm sm:block"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative flex h-dvh w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-4xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <header className="border-border/40 flex shrink-0 items-start justify-between border-b p-5 pt-8 sm:items-center sm:p-8 md:px-10">
              <div className="flex items-start gap-3 pr-3 sm:items-center sm:gap-4">
                <span className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-base font-bold sm:h-12 sm:w-12 sm:text-lg">
                  {service.num}
                </span>
                <h2
                  id="modal-title"
                  className="text-text-dark mt-1.5 text-[1.1rem] leading-tight font-bold tracking-tight sm:mt-0 sm:text-xl md:text-2xl"
                >
                  {service.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-text-faint hover:text-text-dark focus-visible:ring-primary -mr-2 shrink-0 rounded-full p-2 transition-colors outline-none hover:bg-slate-100 focus-visible:ring-2 sm:mr-0"
                aria-label="Fechar modal"
              >
                <X className="h-6 w-6" strokeWidth={2} />
              </button>
            </header>

            <main className="flex-1 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent space-y-8 overflow-y-auto p-5 pb-8 text-left hover:scrollbar-thumb-slate-400 sm:space-y-12 sm:p-8 sm:text-center md:px-10">
              <section className="mx-auto max-w-2xl space-y-3 sm:space-y-4">
                <SectionBadge
                  color="bg-secondary"
                  textColor="text-secondary"
                  label="O Problema"
                />
                <p className="text-text-muted text-[0.95rem] leading-relaxed sm:text-lg">
                  {service.modalDetails.pain}
                </p>
              </section>

              <section className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
                <SectionBadge
                  color="bg-primary"
                  textColor="text-primary"
                  label="A Solução Scalee"
                />
                <p className="text-text-dark text-[1.05rem] leading-relaxed font-bold sm:text-lg md:text-xl">
                  {service.modalDetails.solution}
                </p>

                <ul className="mx-auto flex w-full flex-col gap-3 pt-2 text-left sm:grid sm:w-fit sm:grid-cols-2 sm:gap-4">
                  {service.modalDetails.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                        strokeWidth={2.5}
                      />
                      <span className="text-text-muted text-[0.9rem] leading-snug font-medium sm:text-[0.95rem]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            <footer className="border-border/40 relative z-10 flex shrink-0 flex-col items-center justify-between gap-4 border-t bg-slate-50 p-5 pb-8 shadow-[0_-8px_20px_-3px_rgba(0,0,0,0.05)] sm:flex-row sm:p-6 sm:pb-6 md:px-10">
              <p className="text-text-muted text-center text-[0.9rem] sm:text-left sm:text-base">
                Vamos entender o seu cenário de forma{' '}
                <strong className="text-text-dark font-bold">
                  100% gratuita
                </strong>
                .
              </p>
              <Button
                href={whatsappLink}
                icon
                className="shadow-primary w-full py-3 sm:w-auto sm:py-2"
              >
                Falar com especialista
              </Button>
            </footer>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
