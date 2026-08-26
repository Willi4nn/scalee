import { motion } from 'motion/react';
import { WHATSAPP_URL } from '../../data/content';
import { Button } from '../ui/Button';
import Prism from '../ui/Prism';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-42 lg:pb-22"
      id="top"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-70">
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
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        >
          <p className="text-primary mb-6 font-mono text-xs font-bold tracking-widest uppercase md:text-sm">
            Software • Sites • Automações com IA
          </p>

          <h1 className="font-display text-text-dark mb-6 text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
            Transformamos processos em sistemas que fazem sua empresa{' '}
            <span className="text-gradient">escalar de verdade.</span>
          </h1>

          <p className="text-text-muted mb-10 max-w-2xl text-base leading-relaxed md:text-lg">
            Transformamos processos que hoje dependem de planilhas, mensagens e
            tarefas manuais em sistemas simples, testados e monitorados para sua
            empresa trabalhar com mais controle e menos retrabalho.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Button href={WHATSAPP_URL} icon className="w-full sm:w-auto">
              Agendar conversa gratuita
            </Button>
            <Button
              href="#processo"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Ver como funciona
            </Button>
          </div>
        </motion.header>
      </div>
    </section>
  );
}
