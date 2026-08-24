import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { AUDIENCE_TAGS, type AudienceTag } from '../../data/content';

const ROW_1 = AUDIENCE_TAGS.slice(0, Math.ceil(AUDIENCE_TAGS.length / 2));
const ROW_2 = AUDIENCE_TAGS.slice(Math.ceil(AUDIENCE_TAGS.length / 2));

const styles = `
  .mask-edges {
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .animate-scroll-left {
    animation: scroll-left 40s linear infinite;
  }
  .animate-scroll-right {
    animation: scroll-right 40s linear infinite;
  }
`;

const TagItem = ({ tag }: { tag: AudienceTag }) => {
  const IconComponent = Icons[tag.icon as keyof typeof Icons] as ElementType;
  return (
    <div className="flex items-center gap-2 bg-white border border-border/80 hover:border-primary/40 hover:shadow-md transition-all duration-300 rounded-full py-2.5 px-5 shadow-sm cursor-default">
      <IconComponent
        className="w-4 h-4 text-primary shrink-0"
        strokeWidth={2.5}
      />
      <span className="text-[0.85rem] font-bold text-text-dark tracking-tight whitespace-nowrap">
        {tag.label}
      </span>
    </div>
  );
};

const TagBlock = ({ tags }: { tags: typeof AUDIENCE_TAGS }) => (
  <div className="flex gap-4 pr-4">
    {tags.map((tag) => (
      <TagItem key={tag.label} tag={tag} />
    ))}
  </div>
);

export function Audience() {
  return (
    <section className="py-15 md:py-28 bg-white border-t border-border/60 overflow-hidden flex flex-col items-center">
      <style>{styles}</style>

      <div className="container relative z-10 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col items-center text-center max-w-175 mx-auto"
        >
          <span className="font-mono text-[0.7rem] md:text-xs font-bold tracking-[0.12em] uppercase text-secondary mb-4">
            PARA QUEM É
          </span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-display font-bold leading-[1.1] tracking-[-0.02em] text-text-dark">
            Se existe um processo repetitivo, existe uma oportunidade de
            automatizar.
          </h2>
        </motion.div>
      </div>

      <div className="w-full mask-edges flex flex-col gap-4 pb-4">
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          <TagBlock tags={ROW_1} />
          <TagBlock tags={ROW_1} />
          <TagBlock tags={ROW_1} />
          <TagBlock tags={ROW_1} />
        </div>

        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
          <TagBlock tags={ROW_2} />
          <TagBlock tags={ROW_2} />
          <TagBlock tags={ROW_2} />
          <TagBlock tags={ROW_2} />
        </div>
      </div>
    </section>
  );
}
