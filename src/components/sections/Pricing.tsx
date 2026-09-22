import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../../data/content';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

export function Pricing() {
  return (
    <section
      id="planos"
      className="mesh-bg border-border/50 relative overflow-hidden border-t bg-slate-50 py-16 md:py-24"
      aria-labelledby="planos-heading"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Planos e investimento"
          eyebrowColor="secondary"
          description="Escolha uma solução pronta ou monte um projeto sob medida, com escopo e investimento definidos com clareza."
        >
          Soluções digitais que cabem no seu momento.
        </SectionHeader>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {PRICING_PLANS.map((plan, index) => {
            const isHighlighted = plan.highlighted;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={cn(
                  'relative flex flex-col rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 lg:p-7',
                  isHighlighted
                    ? [
                        'z-10',
                        'border-primary/40 border-2',
                        'bg-white',
                        'shadow-md',
                        'ring-primary/5 ring-4',
                        'md:scale-[1.02]',
                      ]
                    : [
                        'border-border/80 border',
                        'bg-white/90',
                        'shadow-sm',
                        'hover:border-border-strong',
                        'hover:bg-white',
                        'hover:shadow-md',
                      ]
                )}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 right-0 left-0 flex justify-center">
                    <span className="bg-gradient-brand rounded-full px-4 py-1 text-[0.6rem] font-bold tracking-widest text-white uppercase shadow-sm ring-2 ring-white">
                      Mais escolhido
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-text-dark text-xl font-bold">
                    {plan.name}
                  </h3>

                  <p className="text-text-muted mt-2 min-h-10 text-[0.875rem] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-2 flex flex-wrap items-baseline gap-1.5">
                  <span className="font-display text-text-dark text-4xl leading-none font-bold tracking-tight">
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span className="text-text-faint text-sm font-medium tracking-wide">
                      {plan.period}
                    </span>
                  )}
                </div>

                {plan.setup && (
                  <p className="text-text-muted mb-6 text-[0.8rem] leading-relaxed">
                    {plan.setup}
                  </p>
                )}

                <div className="via-border mb-6 h-px w-full bg-linear-to-r from-transparent to-transparent" />

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      <div
                        className={cn(
                          'mt-0.5 flex shrink-0 rounded-full p-1',
                          isHighlighted
                            ? 'bg-primary/10 text-primary'
                            : 'bg-slate-100 text-slate-400'
                        )}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </div>

                      <span
                        className={cn(
                          'text-sm leading-snug',
                          feature.included
                            ? 'text-text-dark font-medium'
                            : 'text-text-faint'
                        )}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.href}
                  variant={isHighlighted ? 'primary' : 'ghost'}
                  className={cn(
                    'w-full text-[0.9rem]',
                    !isHighlighted &&
                      'ring-border/50 bg-white ring-1 hover:bg-slate-50'
                  )}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/40 bg-white/40 p-5 text-center shadow-sm ring-1 ring-black/5 backdrop-blur-md lg:p-6"
        >
          <p className="text-text-muted text-sm leading-relaxed">
            Precisa de algo diferente? Podemos combinar serviços ou criar
            funcionalidades específicas. Custos de ferramentas externas, como
            WhatsApp, APIs ou IA, são informados separadamente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
