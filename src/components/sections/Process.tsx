import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { PROCESS_STEPS } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

export function Process() {
  return (
    <section
      id="processo"
      className="border-border/40 border-t bg-white py-17.5 md:py-35"
    >
      <div className="container mx-auto max-w-250 px-6">
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
          <div className="bg-border/50 absolute top-2.75 right-3 left-3 z-0 hidden h-px md:block" />
          <motion.div
            className="bg-text-dark absolute top-2.75 right-3 left-3 z-0 hidden h-px origin-left md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.1 }}
          />

          <div className="bg-border/50 absolute top-3 bottom-3 left-2.75 z-0 w-px md:hidden" />
          <motion.div
            className="bg-text-dark absolute top-3 bottom-3 left-2.75 z-0 w-px origin-top md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.1 }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const IconComponent = Icons[
                step.icon as keyof typeof Icons
              ] as ElementType;

              return (
                <motion.div
                  key={i}
                  className="group flex cursor-default flex-row items-start md:flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.2 + i * 0.2 }}
                >
                  <div className="relative mr-6 shrink-0 bg-white py-1 md:mr-0 md:mb-8 md:px-1 md:py-0">
                    <div className="border-border group-hover:border-text-dark flex h-6 w-6 items-center justify-center rounded-full border transition-colors duration-500">
                      <div className="bg-border-strong group-hover:bg-text-dark h-1.5 w-1.5 rounded-full transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="flex-1 pt-1 md:pt-0">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-text-faint font-mono text-[0.7rem] font-medium">
                        {step.num}
                      </span>
                      <IconComponent
                        className="text-text-faint group-hover:text-primary h-7 w-7 transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="text-text-dark mb-2 text-[1.05rem] font-bold">
                      {step.title}
                    </h3>

                    <p className="text-text-muted text-[0.95rem] leading-relaxed md:max-w-[90%]">
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
