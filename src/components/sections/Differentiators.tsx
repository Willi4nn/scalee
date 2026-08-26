import {
  BrainCircuit,
  Handshake,
  Ruler,
  ScanSearch,
  Target,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { DIFFERENTIATORS } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

const ICONS = { ScanSearch, Ruler, Workflow, BrainCircuit, Target, Handshake };

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function Differentiators() {
  return (
    <section
      id="tecnologia"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 py-16 md:py-28"
    >
      <div aria-hidden="true" />

      <div className="z-10 container">
        <motion.header
          className="mx-auto mb-12 max-w-2xl md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Nosso diferencial"
            eyebrowColor="primary"
            description="Em vez de adaptar sua operação a ferramentas genéricas, entendemos seus processos, identificamos os gargalos e construímos soluções sob medida para gerar eficiência de verdade."
            theme="dark"
          >
            Tecnologia sob medida, pensada para o seu negócio
          </SectionHeader>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {DIFFERENTIATORS.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] as ElementType;

            return (
              <motion.article
                key={item.title}
                className="group hover:border-primary/30 relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-7 transition-colors duration-300 hover:bg-white/10"
              >
                <div
                  className="bg-primary/20 pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="bg-primary/10 border-primary/20 relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
                  {Icon && (
                    <Icon
                      className="text-primary h-5 w-5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="relative mb-2 text-[1.05rem] leading-snug font-semibold text-white">
                  {item.title}
                </h3>
                <p className="relative text-[0.9rem] leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
