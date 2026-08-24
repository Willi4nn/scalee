import { motion } from 'motion/react';
import { WHATSAPP_URL } from '../../data/content';
import { Button } from '../ui/Button';
import Prism from '../ui/Prism';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 lg:pt-42 lg:pb-22 bg-white"
      id="top"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 pointer-events-none">
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

      <div className="container relative z-10 flex flex-col items-center justify-center mx-auto px-6 h-full">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center w-full max-w-4xl mx-auto"
        >
          <p className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase text-primary mb-6">
            Software • Sites • Automações com IA
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] leading-[1.15] font-display font-bold text-text-dark mb-6 tracking-tight">
            Transformamos processos em sistemas que fazem sua empresa{' '}
            <span className="text-gradient">escalar de verdade.</span>
          </h1>

          <p className="text-base md:text-lg text-text-muted max-w-2xl mb-10 leading-relaxed">
            Transformamos processos que hoje dependem de planilhas, mensagens e
            tarefas manuais em sistemas simples, testados e monitorados para sua
            empresa trabalhar com mais controle e menos retrabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
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
