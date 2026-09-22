import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { FAQS } from '../../data/content';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-border/50 border-t bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Dúvidas Frequentes"
              eyebrowColor="secondary"
              align="left"
              className="mb-4 md:mb-6"
            >
              Tudo o que você precisa saber antes de escalar.
            </SectionHeader>
            <p className="text-text-muted mb-6 text-[0.95rem] leading-relaxed">
              Não encontrou a resposta que procurava? Fale diretamente com a
              nossa equipe no WhatsApp para um diagnóstico personalizado da sua
              operação.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn(
                    'overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl',
                    isOpen
                      ? 'border-primary/20 bg-primary/5 shadow-sm'
                      : 'border-border/60 hover:border-border-strong bg-white'
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left outline-none focus-visible:bg-slate-50 sm:p-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-text-dark text-[0.95rem] font-bold sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'text-text-faint h-4 w-4 shrink-0 transition-transform duration-300 sm:h-5 sm:w-5',
                        isOpen && 'text-primary rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="text-text-muted px-4 pb-4 text-sm leading-relaxed sm:px-5 sm:pb-5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
