import {
  ArrowRight,
  Database,
  MapPin,
  MessageCircle,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { SERVICES, type Service } from '../../data/content';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceModal } from '../ui/ServiceModal';

const CARD_SPANS = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
];

export function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section
      id="solucoes"
      className="py-28 max-sm:py-15 bg-slate-50 text-center border-t border-border/50 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-75 bg-linear-to-b from-primary/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeader
          eyebrow="Soluções"
          eyebrowColor="primary"
          description="Da automação no WhatsApp aos sistemas internos, cada solução é construída para eliminar gargalos e acelerar sua operação."
        >
          Tudo o que sua empresa precisa para operar melhor.
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 text-left">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.num}
              className={cn(
                'relative bg-white border border-border/60 rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-500 hover:shadow-lg hover:border-border-strong group',
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
                <span className="absolute top-6 right-6 sm:top-7 sm:right-7 z-20 font-mono text-[0.6rem] font-bold tracking-wide uppercase text-emerald-600 px-2.5 py-1">
                  Mais procurado
                </span>
              )}

              <span className="font-mono text-[0.7rem] font-semibold text-primary/40 tracking-[0.12em] mb-4 block">
                {service.num}
              </span>

              <div className="h-37.5 sm:h-42.5 rounded-2xl mb-7 flex items-center overflow-hidden relative bg-bg-alt/60 border border-border/40 group-hover:bg-bg-alt transition-colors duration-500">
                <ServiceIllustration index={index} />
              </div>

              <h3 className="text-[1.2rem] font-bold text-text-dark leading-tight mb-3 whitespace-pre-line group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-[0.95rem] text-text-muted grow mb-8 leading-relaxed">
                {service.desc}
              </p>

              <button
                onClick={() => setActiveService(service)}
                className="inline-flex items-center gap-2 text-[0.9rem] font-bold text-primary mt-auto relative overflow-hidden w-fit outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm before:absolute before:inset-0 before:-m-10"
                aria-label={`Conhecer solução: ${service.title}`}
              >
                <span className="relative z-10">Conhecer solução</span>
                <ArrowRight
                  className="w-4 h-4 transition-all duration-300 transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
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
        <div className="relative flex items-center justify-center w-full h-full group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-20 h-20 bg-emerald-400/20 rounded-full blur-xl group-hover:bg-emerald-400/30 transition-colors" />
          <div className="relative w-16 h-16 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-2xl rounded-bl-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center text-white transform group-hover:-rotate-3 transition-transform">
            <MessageCircle strokeWidth={2.5} className="w-8 h-8" />
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white rounded-full px-2.5 py-1.5 shadow-md border border-border/60">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"
              style={{ animationDelay: '0ms' }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"
              style={{ animationDelay: '150ms' }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
      );

    case 1:
      return (
        <div className="relative flex items-center justify-center w-full h-full group-hover:scale-105 transition-transform duration-500 px-6">
          <div className="w-full h-24 bg-slate-900 rounded-t-xl border-x border-t border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="h-5 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-2.5 gap-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex-1 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-full blur-[20px] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="w-1/2 h-2 bg-slate-800 rounded-full mx-auto mt-4" />
              <div className="w-3/4 h-1.5 bg-slate-800/50 rounded-full mx-auto mt-2" />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md border border-border flex items-center justify-center z-20">
            <MapPin className="w-4 h-4 text-red-500" strokeWidth={2.5} />
          </div>
        </div>
      );

    case 2:
      return (
        <div className="relative flex items-center justify-center w-full h-full group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-size-[12px_12px]" />
          <div className="flex items-center relative z-10">
            <div className="w-10 h-10 bg-white border border-border rounded-xl shadow-sm flex items-center justify-center text-emerald-500 transform group-hover:-translate-y-1 transition-transform">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="w-7 h-0.5 bg-border relative overflow-visible mx-0.5">
              <span className="absolute top-1/2 left-0 w-2 h-2 bg-primary rounded-full -translate-y-1/2 group-hover:translate-x-5 transition-transform duration-1000" />
            </div>
            <div className="w-10 h-10 bg-white border border-border rounded-xl shadow-sm flex items-center justify-center text-primary">
              <Workflow className="w-4 h-4" />
            </div>
            <div className="w-7 h-0.5 bg-border relative overflow-visible mx-0.5">
              <span className="absolute top-1/2 left-0 w-2 h-2 bg-secondary rounded-full -translate-y-1/2 group-hover:translate-x-5 transition-transform duration-1000 delay-300" />
            </div>
            <div className="w-10 h-10 bg-white border border-border rounded-xl shadow-sm flex items-center justify-center text-secondary transform group-hover:translate-y-1 transition-transform">
              <Database className="w-4 h-4" />
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="relative flex items-end justify-center w-full h-full group-hover:scale-105 transition-transform duration-500 pt-8 px-6">
          <div className="w-full h-full bg-white rounded-t-xl border-x border-t border-border shadow-md flex overflow-hidden">
            <div className="w-[30%] border-r border-border/60 bg-bg-alt/50 p-2 flex flex-col gap-2">
              <div className="w-full h-2 bg-border rounded-full" />
              <div className="w-3/4 h-2 bg-border/60 rounded-full" />
              <div className="w-full h-2 bg-border/60 rounded-full mt-auto" />
            </div>
            <div className="flex-1 p-3 flex flex-col gap-2">
              <div className="w-1/3 h-3 bg-primary/20 rounded-full" />
              <div className="flex gap-2 flex-1">
                <div className="flex-1 bg-border/30 rounded-lg flex items-end gap-1 p-1.5">
                  <div className="w-1.5 bg-primary/40 rounded-sm h-[40%]" />
                  <div className="w-1.5 bg-primary/60 rounded-sm h-[75%]" />
                  <div className="w-1.5 bg-primary/80 rounded-sm h-full" />
                </div>
                <div className="flex-1 bg-border/30 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
