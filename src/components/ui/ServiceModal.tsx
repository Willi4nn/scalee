import { CheckCircle2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import type { Service } from '../../data/content';
import { useBodyLock } from '../../hooks/useBodyLock';
import { Button } from './Button';

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
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <header className="flex items-center justify-between p-6 md:px-10 md:pt-8 shrink-0">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-mono font-bold text-lg">
                  {service.num}
                </span>
                <h2
                  id="modal-title"
                  className="text-xl md:text-2xl font-bold text-text-dark tracking-tight"
                >
                  {service.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full text-text-faint hover:text-text-dark hover:bg-slate-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Fechar modal"
              >
                <X className="w-6 h-6" strokeWidth={2} />
              </button>
            </header>

            <main className="p-6 md:px-10 md:pb-12 overflow-y-auto text-center space-y-12 flex-1">
              <section className="max-w-2xl mx-auto space-y-4">
                <SectionBadge
                  color="bg-secondary"
                  textColor="text-secondary"
                  label="O Problema"
                />
                <p className="text-text-muted text-lg leading-relaxed">
                  {service.modalDetails.pain}
                </p>
              </section>

              <section className="max-w-3xl mx-auto space-y-6">
                <SectionBadge
                  color="bg-primary"
                  textColor="text-primary"
                  label="A Solução Scalee"
                />
                <p className="text-text-dark font-bold text-lg md:text-xl leading-relaxed">
                  {service.modalDetails.solution}
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 text-left w-fit mx-auto pt-2">
                  {service.modalDetails.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-emerald-500 shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-[0.95rem] text-text-muted font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            <footer className="p-6 md:px-10 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0">
              <p className="text-text-muted text-center sm:text-left">
                Vamos entender o seu cenário de forma{' '}
                <strong className="text-text-dark font-bold">
                  100% gratuita
                </strong>
                .
              </p>
              <Button
                href={whatsappLink}
                icon
                className="w-full sm:w-auto shadow-primary"
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

/* ==========================================================================
   SUBCOMPONENTE REUTILIZÁVEL (DRY)
========================================================================== */
function SectionBadge({
  color,
  textColor,
  label,
}: {
  color: string;
  textColor: string;
  label: string;
}) {
  return (
    <h3
      className={`font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2.5 ${textColor}`}
    >
      <span className={`w-2 h-2 rounded-full ${color}`} />
      {label}
    </h3>
  );
}
