import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { HERO_FEATURES } from '../../data/content';

export function Benefits() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-border relative z-10">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {HERO_FEATURES.map((item, index) => {
            const IconComponent = Icons[
              item.icon as keyof typeof Icons
            ] as ElementType;

            return (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-3 rounded-2xl bg-primary/5 text-primary shrink-0 transition-colors group-hover:bg-primary/10">
                  <IconComponent
                    className="w-6 h-6"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <div className="pt-1">
                  <h4 className="text-base md:text-[0.95rem] font-bold text-text-dark leading-snug mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-[0.8rem] text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
