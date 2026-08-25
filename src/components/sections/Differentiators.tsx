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
      className="relative py-16 md:py-28 bg-slate-950 overflow-hidden scroll-mt-24"
    >
      <div aria-hidden="true" />

      <div className="container z-10">
        <motion.header
          className="max-w-2xl mx-auto mb-12 md:mb-16"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-7 transition-colors duration-300 hover:border-primary/30 hover:bg-white/10"
              >
                <div
                  className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5 transition-transform duration-300 group-hover:scale-105">
                  {Icon && (
                    <Icon
                      className="w-5 h-5 text-primary"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="relative text-white font-semibold text-[1.05rem] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="relative text-slate-400 text-[0.9rem] leading-relaxed">
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
