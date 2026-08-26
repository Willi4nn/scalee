import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../data/content';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';

export function Projects() {
  return (
    <section
      id="projects"
      className="border-border/50 overflow-hidden border-t bg-white py-20 text-center md:py-32"
    >
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Cases de Sucesso"
          eyebrowColor="primary"
          description="Sistemas, plataformas e automações desenvolvidos com arquitetura moderna para resolver problemas reais."
        >
          Projetos que entregam resultado.
        </SectionHeader>

        <div className="mt-16 flex flex-col gap-24 text-left md:mt-28 md:gap-40">
          {PROJECTS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={item.title}
                className={cn(
                  'group flex flex-col gap-10 md:gap-16 lg:items-center',
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="relative flex w-full items-center justify-center lg:w-[55%]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`Mockup do projeto ${item.title}`}
                      className="relative z-10 h-auto max-h-100 w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] lg:max-h-125"
                      loading="lazy"
                    />
                  ) : (
                    <div className="border-border/50 relative z-10 flex aspect-16/10 max-h-87.5 w-full items-center justify-center rounded-2xl border bg-slate-100">
                      <span className="font-medium text-slate-400">
                        Em desenvolvimento
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex w-full flex-col items-start lg:w-[45%] lg:py-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-primary font-mono text-[0.75rem] font-bold tracking-widest uppercase">
                      {item.tag || 'Case de Sucesso'}
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[0.7rem] font-bold text-slate-500">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-display text-text-dark group-hover:text-primary mb-5 text-[2rem] leading-[1.1] font-bold tracking-tight transition-colors duration-300 md:text-[2.5rem]">
                    {item.title}
                  </h3>

                  <p className="text-text-muted mb-8 text-[1.05rem] leading-relaxed md:text-[1.1rem]">
                    {item.description}
                  </p>

                  <div className="mb-10 flex flex-wrap gap-2.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border-border/80 text-text-muted rounded-full border bg-white px-3.5 py-1.5 text-[0.8rem] font-semibold shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="border-border/60 mt-auto flex w-full items-center gap-8 border-t pt-6">
                    {item.projectUrl && item.projectUrl !== '#' && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary group/link focus-visible:ring-primary relative inline-flex items-center gap-2 overflow-hidden rounded-sm text-[0.95rem] font-bold outline-none focus-visible:ring-2"
                      >
                        <span className="relative z-10">Acessar projeto</span>
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          strokeWidth={2.5}
                        />
                        <span className="bg-primary/20 absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
