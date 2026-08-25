import { ArrowUpRight, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../data/content';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-white text-center border-t border-border/50 overflow-hidden"
    >
      <div className="container px-6 md:px-8 mx-auto">
        <SectionHeader
          eyebrow="Cases de Sucesso"
          eyebrowColor="primary"
          description="Sistemas, plataformas e automações desenvolvidos com arquitetura moderna para resolver problemas reais."
        >
          Projetos que entregam resultado.
        </SectionHeader>

        <div className="flex flex-col gap-24 md:gap-40 mt-16 md:mt-28 text-left">
          {PROJECTS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={item.title}
                className={cn(
                  'flex flex-col lg:items-center gap-10 md:gap-16 group',
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="w-full lg:w-[55%] relative flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`Mockup do projeto ${item.title}`}
                      className="relative z-10 w-full h-auto max-h-100 lg:max-h-125 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative z-10 w-full max-h-87.5 aspect-16/10 flex items-center justify-center bg-slate-100 rounded-2xl border border-border/50">
                      <span className="text-slate-400 font-medium">
                        Em desenvolvimento
                      </span>
                    </div>
                  )}
                </div>

                <div className="w-full lg:w-[45%] flex flex-col items-start lg:py-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[0.75rem] font-bold tracking-widest uppercase text-primary">
                      {item.tag || 'Case de Sucesso'}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[0.7rem] font-bold font-mono">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-[2rem] md:text-[2.5rem] leading-[1.1] font-display font-bold text-text-dark tracking-tight mb-5 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-[1.05rem] md:text-[1.1rem] text-text-muted leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-white border border-border/80 text-text-muted text-[0.8rem] font-semibold rounded-full shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-8 mt-auto pt-6 border-t border-border/60 w-full">
                    {item.projectUrl && item.projectUrl !== '#' && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-primary relative overflow-hidden group/link outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                      >
                        <span className="relative z-10">Acessar projeto</span>
                        <ArrowUpRight
                          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          strokeWidth={2.5}
                        />
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300" />
                      </a>
                    )}

                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-text-muted hover:text-text-dark transition-colors outline-none focus-visible:ring-2 focus-visible:ring-text-dark rounded-sm"
                      >
                        Ver código
                        <Code2 className="w-4 h-4" />
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
