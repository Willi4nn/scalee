import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { HERO_FEATURES } from '../../data/content';

export function Benefits() {
  return (
    <section className="border-border relative z-10 border-b bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HERO_FEATURES.map((item, index) => {
            const IconComponent = Icons[
              item.icon as keyof typeof Icons
            ] as ElementType;

            return (
              <motion.div
                key={item.title}
                className="group flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/5 text-primary group-hover:bg-primary/10 shrink-0 rounded-2xl p-3 transition-colors">
                  <IconComponent
                    className="h-6 w-6"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <div className="pt-1">
                  <h4 className="text-text-dark mb-1.5 text-base leading-snug font-bold md:text-[0.95rem]">
                    {item.title}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed md:text-[0.8rem]">
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
