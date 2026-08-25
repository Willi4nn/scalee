import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { PROCESS_STEPS } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

export function Process() {
  return (
    <section
      id="processo"
      className="py-17.5 md:py-35 bg-white border-t border-border/40"
    >
      <div className="container max-w-250 mx-auto px-6">
        <motion.div
          className="mb-12 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionHeader eyebrow="O processo" eyebrowColor="primary">
            Do problema à solução em 4 etapas claras.
          </SectionHeader>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-2.75 left-3 right-3 h-px bg-border/50 z-0" />
          <motion.div
            className="hidden md:block absolute top-2.75 left-3 right-3 h-px bg-text-dark z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.1 }}
          />

          <div className="md:hidden absolute top-3 bottom-3 left-2.75 w-px bg-border/50 z-0" />
          <motion.div
            className="md:hidden absolute top-3 bottom-3 left-2.75 w-px bg-text-dark z-0 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.1 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, i) => {
              const IconComponent = Icons[
                step.icon as keyof typeof Icons
              ] as ElementType;

              return (
                <motion.div
                  key={i}
                  className="flex flex-row md:flex-col items-start group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.2 + i * 0.2 }}
                >
                  <div className="relative shrink-0 mr-6 md:mr-0 md:mb-8 bg-white py-1 md:py-0 md:px-1">
                    <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center group-hover:border-text-dark transition-colors duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-border-strong group-hover:bg-text-dark transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="flex-1 pt-1 md:pt-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[0.7rem] text-text-faint font-medium">
                        {step.num}
                      </span>
                      <IconComponent
                        className="w-7 h-7 text-text-faint group-hover:text-primary transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="text-[1.05rem] font-bold text-text-dark mb-2">
                      {step.title}
                    </h3>

                    <p className="text-[0.95rem] text-text-muted leading-relaxed md:max-w-[90%]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
