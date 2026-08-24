import { ArrowUpRight, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-28 bg-slate-50 text-center border-t border-border/50"
    >
      <div className="container px-6 md:px-8 mx-auto">
        <SectionHeader
          eyebrow="Cases de Sucesso"
          eyebrowColor="primary"
          description="Sistemas, plataformas e automações desenvolvidos com arquitetura moderna para resolver problemas reais."
        >
          Projetos que entregam{' '}
          <span className="text-gradient">resultado.</span>
        </SectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left mt-8">
          {PROJECTS.map((item, index) => (
            <motion.article
              key={item.title}
              className="group flex flex-col bg-white border border-border/60 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-border-strong transition-all duration-500"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="aspect-video w-full bg-slate-100 relative overflow-hidden border-b border-border/40">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`Tela do projeto ${item.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <span className="text-slate-400 font-medium">
                      Em desenvolvimento
                    </span>
                  </div>
                )}

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-text-dark shadow-sm">
                  {item.year}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-text-dark tracking-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-[1.05rem] text-text-muted leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold rounded-md shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-border/60">
                  {item.projectUrl && item.projectUrl !== '#' && (
                    <a
                      href={item.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[0.9rem] font-bold text-primary hover:text-primary-hover transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm group/link"
                    >
                      Acessar projeto
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        strokeWidth={2.5}
                      />
                    </a>
                  )}

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[0.9rem] font-bold text-text-muted hover:text-text-dark transition-colors outline-none focus-visible:ring-2 focus-visible:ring-text-dark rounded-sm"
                    >
                      Ver código
                      <Code2 className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
