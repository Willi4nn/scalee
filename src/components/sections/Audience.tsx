import {
  Building2,
  Factory,
  Stethoscope,
  Store,
  Users,
  Wrench,
} from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';
import { SectionHeader } from '../ui/SectionHeader';

const niches = [
  {
    icon: Stethoscope,
    title: 'Clínicas e Consultórios',
    description:
      'O fim da cadeira vazia. Automatizamos agendamentos, confirmamos consultas e realizamos a triagem de pacientes 24/7. Acabe com o buraco financeiro das faltas não avisadas.',
  },
  {
    icon: Building2,
    title: 'Imobiliárias e Corretores',
    description:
      'Resgate de propostas e atendimento imediato. Não perca leads de domingo para a concorrência. Seus corretores focam em fechar negócio, a IA cuida da qualificação.',
  },
  {
    icon: Wrench,
    title: 'Prestadores de Serviços',
    description:
      'De assistências técnicas a escritórios. Centralização do atendimento, orçamentos ágeis e automação de follow-up. O cliente sempre recebe uma resposta imediata.',
  },
  {
    icon: Store,
    title: 'Varejo e Comércio Local',
    description:
      'Converta cliques em vendas. Landing pages de carregamento em milissegundos e catálogos integrados ao WhatsApp para reter e converter a demanda instantaneamente.',
  },
  {
    icon: Users,
    title: 'Estética e Beleza',
    description:
      'Agenda previsível e blindada. Lembretes automáticos, recuperação de clientes inativos e atendimento humanizado que opera enquanto sua equipe descansa.',
  },
  {
    icon: Factory,
    title: 'Empresas B2B e Indústrias',
    description:
      'Processos blindados. Desenvolvemos ERPs e sistemas web sob medida para integrar operação, financeiro e vendas, acabando definitivamente com o caos das planilhas.',
  },
];

export function Audience() {
  return (
    <section
      id="publico-alvo"
      className="border-border/60 relative flex flex-col items-center overflow-hidden border-t bg-white py-15 md:py-28"
    >
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-40"></div>

      <div className="relative z-10 container flex flex-col items-center">
        <SectionHeader
          eyebrow="Público-alvo"
          eyebrowColor="secondary"
          description="Atendemos empresas de todos os tamanhos e segmentos, que buscam automatizar processos, reduzir gargalos e aumentar a eficiência operacional."
        >
          Nichos que já ajudamos a transformar
        </SectionHeader>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {niches.map((niche) => (
            <FeatureCard
              key={niche.title}
              theme="light"
              icon={niche.icon}
              title={niche.title}
              description={niche.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
