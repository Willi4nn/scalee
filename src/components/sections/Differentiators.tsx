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
import { FeatureCard } from '../ui/FeatureCard';
import { SectionHeader } from '../ui/SectionHeader';

const ICONS = { ScanSearch, Ruler, Workflow, BrainCircuit, Target, Handshake };

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            eyebrowColor="secondary"
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
              <FeatureCard
                key={item.title}
                theme="dark"
                icon={Icon}
                title={item.title}
                description={item.desc}
                variants={cardVariants}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
