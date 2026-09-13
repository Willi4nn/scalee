import {
  ArrowRight,
  CalendarClock,
  MapPin,
  MessageCircle,
  Shield,
  User,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { SERVICES, type Service } from '../../data/content';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceModal } from '../ui/ServiceModal';

const CARD_SPANS = [
  'sm:col-span-2 lg:col-span-7',
  'sm:col-span-2 lg:col-span-5',
  'sm:col-span-2 lg:col-span-4',
  'sm:col-span-1 lg:col-span-4',
  'sm:col-span-1 lg:col-span-4',
];

export function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section
      id="solucoes"
      className="border-border/50 relative overflow-hidden border-t bg-slate-50 py-28 text-center max-sm:py-15"
    >
      <div
        className="from-primary/5 pointer-events-none absolute top-0 left-1/2 h-75 w-full max-w-250 -translate-x-1/2 bg-linear-to-b to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 container">
        <SectionHeader
          eyebrow="Soluções"
          eyebrowColor="primary"
          description="Da automação no WhatsApp aos sistemas internos, cada solução é construída para eliminar gargalos e acelerar sua operação."
        >
          Tudo o que sua empresa precisa para operar melhor.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.num}
              className={cn(
                'border-border/60 hover:border-border-strong group relative flex flex-col rounded-2xl border bg-white p-7 hover:shadow-lg sm:p-8',
                CARD_SPANS[index]
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              transition={{
                delay: index * 0.08,
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              {index === 0 && (
                <span className="absolute top-6 right-6 z-20 px-2.5 py-1 font-mono text-[0.6rem] font-bold tracking-wide text-emerald-600 uppercase sm:top-7 sm:right-7">
                  Mais procurado
                </span>
              )}

              <span className="text-primary/40 mb-4 block font-mono text-[0.7rem] font-semibold tracking-[0.12em]">
                {service.num}
              </span>

              <div className="bg-bg-alt/60 border-border/40 group-hover:bg-bg-alt relative mb-7 flex h-37.5 items-center overflow-hidden rounded-2xl border transition-colors duration-500 sm:h-42.5">
                <ServiceIllustration index={index} />
              </div>

              <h3 className="text-text-dark group-hover:text-primary mb-3 text-[1.2rem] leading-tight font-bold whitespace-pre-line transition-colors">
                {service.title}
              </h3>

              <p className="text-text-muted mb-8 grow text-[0.95rem] leading-relaxed">
                {service.desc}
              </p>

              <button
                onClick={() => setActiveService(service)}
                className="text-primary focus-visible:ring-primary relative mt-auto inline-flex w-fit items-center gap-2 overflow-hidden rounded-sm text-[0.9rem] font-bold outline-none before:absolute before:inset-0 before:-m-10 focus-visible:ring-2 focus-visible:ring-offset-2"
                aria-label={`Conhecer solução: ${service.title.replace('\n', ' ')}`}
              >
                <span className="relative z-10">Conhecer solução</span>
                <ArrowRight
                  className="h-4 w-4 transform transition-all duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
                <span className="bg-primary/20 absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
        service={activeService}
      />
    </section>
  );
}

function ServiceIllustration({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <div className="absolute h-20 w-20 rounded-full bg-emerald-400/20 blur-xl transition-colors group-hover:bg-emerald-400/30" />
          <div className="relative flex h-16 w-16 transform items-center justify-center rounded-2xl rounded-bl-sm bg-linear-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-transform group-hover:-rotate-3">
            <MessageCircle strokeWidth={2.5} className="h-8 w-8" />
          </div>
          <div className="border-border/60 absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border bg-white px-2.5 py-1.5 shadow-md">
            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500"
              style={{ animationDelay: '0ms' }}
            />
            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500"
              style={{ animationDelay: '150ms' }}
            />
            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
      );

    case 1:
      return (
        <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <div className="absolute h-20 w-20 rounded-full bg-amber-400/20 blur-xl transition-colors group-hover:bg-amber-400/30" />
          <div className="relative flex h-16 w-16 transform items-center justify-center rounded-2xl bg-linear-to-br from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-500/20 transition-transform group-hover:rotate-12">
            <CalendarClock strokeWidth={2.5} className="h-8 w-8" />
          </div>
          <div className="absolute top-1/2 left-1/2 -mt-12 -ml-12 h-24 w-24 animate-[spin_6s_linear_infinite] rounded-full border-[3px] border-dashed border-amber-400/30" />
        </div>
      );

    case 2:
      return (
        <div className="relative flex h-full w-full items-center justify-center gap-2 transition-transform duration-500 group-hover:scale-105">
          <div className="flex translate-x-3 flex-col gap-2">
            <div className="border-border relative z-10 flex h-9 w-9 items-center justify-center rounded-lg border bg-white text-indigo-500 shadow-sm">
              <User strokeWidth={2.5} className="h-4 w-4" />
            </div>
            <div className="border-border relative z-10 flex h-9 w-9 items-center justify-center rounded-lg border bg-white text-indigo-500 shadow-sm">
              <User strokeWidth={2.5} className="h-4 w-4" />
            </div>
          </div>

          <div className="bg-border relative z-0 h-12 w-[2px]">
            <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
          </div>

          <div className="relative z-10 flex h-16 w-16 -translate-x-3 transform items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-110">
            <Shield strokeWidth={2.5} className="h-7 w-7" />
          </div>
        </div>
      );

    case 3:
      return (
        <div className="relative flex h-full w-full items-center justify-center px-6 transition-transform duration-500 group-hover:scale-105">
          <div className="relative flex h-24 w-full flex-col overflow-hidden rounded-t-xl border-x border-t border-slate-800 bg-slate-900 shadow-2xl">
            <div className="flex h-5 shrink-0 items-center gap-1.5 border-b border-slate-700/50 bg-slate-800/50 px-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="relative flex flex-1 items-center justify-center">
              <div className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <Zap
                className="h-10 w-10 animate-pulse text-rose-500/80 transition-colors group-hover:text-rose-400"
                strokeWidth={1.5}
              />
            </div>
          </div>
          <div className="border-border absolute right-3 bottom-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-md">
            <MapPin className="h-4 w-4 text-rose-500" strokeWidth={2.5} />
          </div>
        </div>
      );

    case 4:
      return (
        <div className="relative flex h-full w-full items-end justify-center px-6 pt-8 transition-transform duration-500 group-hover:scale-105">
          <div className="border-border flex h-full w-full overflow-hidden rounded-t-xl border-x border-t bg-white shadow-md">
            <div className="border-border/60 bg-bg-alt/50 flex w-[30%] flex-col gap-2 border-r p-2">
              <div className="bg-border h-2 w-full rounded-full" />
              <div className="bg-border/60 h-2 w-3/4 rounded-full" />
              <div className="bg-border/60 mt-auto h-2 w-full rounded-full" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-3">
              <div className="bg-primary/20 h-3 w-1/3 rounded-full" />
              <div className="flex flex-1 gap-2">
                <div className="bg-border/30 flex flex-1 items-end gap-1 rounded-lg p-1.5">
                  <div className="bg-primary/40 h-[40%] w-1.5 rounded-sm" />
                  <div className="bg-primary/60 h-[75%] w-1.5 rounded-sm" />
                  <div className="bg-primary/80 h-full w-1.5 rounded-sm" />
                </div>
                <div className="bg-border/30 flex-1 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
