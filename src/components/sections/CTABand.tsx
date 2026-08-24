import { Rocket } from 'lucide-react';
import { WHATSAPP_URL } from '../../data/content';
import { Button } from '../ui/Button';
import DarkVeil from '../ui/DarkVeil';

export function CTABand() {
  return (
    <section
      id="contato"
      className="pb-15 md:pb-28 pt-8 md:pt-12 bg-bg relative"
    >
      <div className="container">
        <div className="bg-slate-950 rounded-3xl p-8 md:p-[64px_48px] relative overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] items-center gap-8 border border-white/10">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-primary/30 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-secondary/30 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="absolute inset-0 pointer-events-none z-0 opacity-50 mix-blend-screen">
            <DarkVeil
              hueShift={281}
              speed={0.6}
              scanlineFrequency={1.2}
              resolutionScale={1}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-white text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] mb-4 font-bold tracking-tight">
              Pronto para transformar seu processo em crescimento?
            </h2>
            <p className="text-slate-300 text-[1.1rem] max-w-120 mb-8">
              Agende uma conversa gratuita e descubra onde a tecnologia pode
              gerar mais eficiência para sua empresa.
            </p>
            <Button href={WHATSAPP_URL} icon>
              Agendar conversa gratuita
            </Button>
          </div>

          <div className="hidden md:flex justify-center relative z-10">
            <Rocket className="w-48 h-48 text-white/90" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
