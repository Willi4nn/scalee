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
      className="bg-bg-alt overflow-hidden py-16 text-center md:py-28"
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Depoimentos"
          eyebrowColor="secondary"
          align="center"
        >
          Quem trabalha com a Scalee sente a diferença.
        </SectionHeader>

        <div className="mb-6 hidden items-center justify-end gap-3 sm:flex">
          <button
            onClick={() => scroll('left')}
            className="border-border text-text-dark hover:border-border-strong focus-visible:ring-primary flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition-all outline-none hover:bg-slate-50 focus-visible:ring-2 active:scale-95"
            aria-label="Rolar para o depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="border-border text-text-dark hover:border-border-strong focus-visible:ring-primary flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition-all outline-none hover:bg-slate-50 focus-visible:ring-2 active:scale-95"
            aria-label="Rolar para o próximo depoimento"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="focus-visible:ring-primary -mx-4 flex snap-x snap-mandatory scrollbar-none gap-4 overflow-x-auto rounded-2xl px-4 pt-2 pb-8 text-left [-ms-overflow-style:none] focus-visible:ring-2 sm:mx-0 sm:gap-6 sm:px-1 [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          aria-label="Lista de depoimentos"
        >
          {TESTIMONIALS.map((test, i) => (
            <motion.div
              key={test.name}
              className="border-border/80 flex w-[75vw] shrink-0 snap-start flex-col rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:w-105 sm:snap-center md:p-8 lg:w-112.5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="text-primary/20 mb-5 h-8 w-8" />
              <p className="text-text-muted mb-8 grow text-[0.95rem] leading-relaxed font-medium md:text-[1rem]">
                "{test.quote}"
              </p>

              <div className="border-border/60 mt-auto flex items-center justify-between border-t pt-5">
                <div className="flex items-center gap-3.5">
                  <div>
                    <p className="text-text-dark text-[0.9rem] leading-tight font-bold">
                      {test.name}
                    </p>
                    <p className="text-text-muted mt-0.5 text-[0.75rem]">
                      {test.role}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={`star-${j}`} className="h-4 w-4 fill-current" />
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
