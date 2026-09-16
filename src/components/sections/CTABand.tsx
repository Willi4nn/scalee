import { Rocket } from 'lucide-react';
import { WHATSAPP_URL } from '../../data/content';
import { Button } from '../ui/Button';
import DarkVeil from '../ui/DarkVeil';

export function CTABand() {
  return (
    <section
      id="contato"
      className="bg-bg relative pt-8 pb-15 md:pt-12 md:pb-28"
    >
      <div className="container">
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl md:grid-cols-[1.5fr_0.5fr] md:p-[64px_48px]">
          <div className="bg-primary/30 pointer-events-none absolute top-[-20%] left-[-10%] z-0 h-[70%] w-[50%] rounded-full blur-[120px]" />
          <div className="bg-secondary/30 pointer-events-none absolute right-[-10%] bottom-[-20%] z-0 h-[70%] w-[50%] rounded-full blur-[120px]" />

          <div className="pointer-events-none absolute inset-0 z-0 opacity-50 mix-blend-screen">
            <DarkVeil
              hueShift={320}
              speed={0.6}
              scanlineFrequency={1.2}
              resolutionScale={1}
            />
          </div>

          <div className="relative z-10">
            <h2 className="mb-4 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] font-bold tracking-tight text-white">
              Pronto para transformar seu processo em crescimento?
            </h2>
            <p className="mb-8 max-w-120 text-[1.1rem] text-slate-300">
              Agende uma conversa gratuita e descubra onde a tecnologia pode
              gerar mais eficiência para sua empresa.
            </p>
            <Button href={WHATSAPP_URL} icon>
              Agendar conversa gratuita
            </Button>
          </div>

          <div className="relative z-10 hidden justify-center md:flex">
            <Rocket className="h-48 w-48 text-white/90" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
