import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { TESTIMONIALS } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left:
          direction === 'left'
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="depoimentos"
      className="py-16 md:py-28 bg-bg-alt text-center overflow-hidden"
    >
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <div className="text-left max-w-xl">
            <SectionHeader eyebrow="Depoimentos" eyebrowColor="secondary">
              Quem trabalha com a Scalee sente a diferença.
            </SectionHeader>
          </div>

          <div className="hidden sm:flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-border text-text-dark hover:bg-slate-50 hover:border-border-strong transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              aria-label="Rolar para o depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-border text-text-dark hover:bg-slate-50 hover:border-border-strong transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              aria-label="Rolar para o próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 text-left overflow-x-auto snap-x snap-mandatory pb-8 pt-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
          tabIndex={0}
          aria-label="Lista de depoimentos"
        >
          {TESTIMONIALS.map((test, i) => (
            <motion.div
              key={test.name}
              className="w-[85vw] sm:w-105 lg:w-112.5 shrink-0 snap-center bg-white border border-border/80 rounded-2xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-5" />
              <p className="text-[0.95rem] md:text-[1rem] text-text-muted leading-relaxed mb-8 grow font-medium">
                "{test.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-border/60 pt-5 mt-auto">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-sm shrink-0">
                    {test.avatar}
                  </div>
                  <div>
                    <p className="text-[0.9rem] font-bold text-text-dark leading-tight">
                      {test.name}
                    </p>
                    <p className="text-[0.75rem] text-text-muted mt-0.5">
                      {test.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-400 shrink-0">
                  {[...Array(5)].map((_, j) => (
                    <Star key={`star-${j}`} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
