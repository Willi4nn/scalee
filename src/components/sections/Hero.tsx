import { motion } from 'motion/react';
import { WHATSAPP_NUMBER } from '../../data/content';
import { Button } from '../ui/Button';
import Prism from '../ui/Prism';

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-42 lg:pb-22"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-70"
        aria-hidden="true"
      >
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
          suspendWhenOffscreen={true}
        />

        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        >
          <p className="text-secondary mb-5 text-xs font-bold tracking-[0.16em] uppercase md:text-sm">
            Software house em Patos de Minas · MG
          </p>

          <h1
            id="hero-title"
            className="font-display text-text-dark mb-6 text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-[4rem]"
          >
            Sites, sistemas, automações e IA para sua empresa{' '}
            <span className="text-gradient">
              vender mais e perder menos tempo.
            </span>
          </h1>

          <p className="text-text-muted mb-10 max-w-2xl text-base leading-relaxed md:text-lg">
            A Scalee desenvolve sites, sistemas web, automações e agentes de IA
            para WhatsApp que ajudam empresas a organizar processos, atender
            melhor seus clientes e aproveitar mais oportunidades. De Patos de
            Minas para empresas de todo o Brasil.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20Scalee.`}
              icon
              className="w-full sm:w-auto"
            >
              Falar com a Scalee
            </Button>

            <Button
              href="#solucoes"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Ver soluções
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
