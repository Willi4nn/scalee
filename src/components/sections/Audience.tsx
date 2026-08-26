import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { AUDIENCE_TAGS, type AudienceTag } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

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
    <div className="border-border/80 hover:border-primary/40 flex cursor-default items-center gap-2 rounded-full border bg-white px-5 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md">
      <IconComponent
        className="text-primary h-4 w-4 shrink-0"
        strokeWidth={2.5}
      />
      <span className="text-text-dark text-[0.85rem] font-bold tracking-tight whitespace-nowrap">
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
    <section className="border-border/60 flex flex-col items-center overflow-hidden border-t bg-white py-15 md:py-28">
      <style>{styles}</style>

      <div className="relative z-10 container mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto flex max-w-175 flex-col items-center text-center"
        >
          <SectionHeader eyebrow="Para quem é" eyebrowColor="primary">
            Se existe um processo repetitivo, existe uma oportunidade de
            automatizar.
          </SectionHeader>
        </motion.div>
      </div>

      <div className="mask-edges flex w-full flex-col gap-4 pb-4">
        <div className="animate-scroll-left flex w-max hover:[animation-play-state:paused]">
          <TagBlock tags={ROW_1} />
          <TagBlock tags={ROW_1} />
          <TagBlock tags={ROW_1} />
          <TagBlock tags={ROW_1} />
        </div>

        <div className="animate-scroll-right flex w-max hover:[animation-play-state:paused]">
          <TagBlock tags={ROW_2} />
          <TagBlock tags={ROW_2} />
          <TagBlock tags={ROW_2} />
          <TagBlock tags={ROW_2} />
        </div>
      </div>
    </section>
  );
}
