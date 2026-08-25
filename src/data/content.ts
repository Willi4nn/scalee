export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Service {
  num: string;
  title: string;
  desc: string;
  link: string;
}

export interface ProcessStep {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export interface Differentiator {
  icon: string;
  title: string;
  desc: string;
}

export interface Project {
  tag: string;
  title: string;
  year: number;
  description: string;
  skills: string[];
  projectUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface AudienceTag {
  icon: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinks {
  solucoes: FooterLinkItem[];
  empresa: FooterLinkItem[];
  recursos: FooterLinkItem[];
}

export interface ServiceModalDetails {
  pain: string;
  solution: string;
  features: string[];
  whatsappMessage: string;
}

export interface Service {
  num: string;
  title: string;
  desc: string;
  link: string;
  modalDetails: ServiceModalDetails;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Processo', href: '#processo' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export const HERO_FEATURES: Feature[] = [
  {
    icon: 'ThumbsUp',
    title: 'Foco em resultado',
    desc: 'Soluções pensadas para gerar impacto real no negócio.',
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Tecnologia de ponta',
    desc: 'As melhores ferramentas e práticas modernas.',
  },
  {
    icon: 'Clock',
    title: 'Entrega rápida',
    desc: 'Processos objetivos e prazos claros.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Parceria contínua',
    desc: 'Acompanhamento próximo para evoluir junto.',
  },
];

export const ABOUT: Feature[] = [
  {
    icon: 'MessageCircle',
    title: 'WhatsApp',
    desc: 'Mensagens dispersas e sem organização',
  },
  {
    icon: 'RefreshCw',
    title: 'Processo',
    desc: 'Tarefas manuais e retrabalho constante',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Sistema',
    desc: 'Informação centralizada e processos digitais',
  },
  {
    icon: 'BarChart3',
    title: 'Dados',
    desc: 'Relatórios e indicadores em tempo real',
  },
  {
    icon: 'TrendingUp',
    title: 'Resultado',
    desc: 'Mais eficiência, tempo e crescimento',
  },
];

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Atendimento Inteligente no WhatsApp',
    desc: 'Triagem automática, respostas rápidas e agendamento 24h conectados ao seu funil de vendas sem parecer um robô engessado e sem perder clientes por demora.',
    link: '#',
    modalDetails: {
      pain: 'Sua equipe repete as mesmas respostas o dia inteiro e, fora do horário comercial ou nos picos de movimento, o cliente desiste e fecha com o concorrente que responde primeiro.',
      solution:
        'Um fluxo de atendimento automatizado e humanizado que tria contatos, tira dúvidas com respostas assistidas por IA (revisadas em 1 clique por um atendente) e organiza agendamentos e orçamentos direto em um painel, nada de plataforma de bot genérica.',
      features: [
        'Atendimento e triagem 24 horas por dia, todos os dias',
        'Respostas assistidas por IA, sem parecer um robô engessado',
        'Transbordo inteligente para o atendente humano quando preciso',
        'Captura e organização automática de leads em um painel próprio',
      ],
      whatsappMessage:
        'Olá! Vi no site sobre a Automação de WhatsApp e gostaria de saber como aplicar na minha empresa para não perder mais vendas.',
    },
  },
  {
    num: '02',
    title: 'Landing Pages de Alta Velocidade & Google Meu Negócio',
    desc: 'Páginas ultrarrápidas em Astro que colocam seu negócio no topo das buscas locais e transformam visitante em cliente pelo WhatsApp.',
    link: '#',
    modalDetails: {
      pain: 'Seu cliente pesquisa "[seu serviço] perto de mim" no Google e fecha com o concorrente, porque sua empresa ainda não tem uma presença digital rápida e profissional.',
      solution:
        'Construímos com Astro para um carregamento quase instantâneo sem o peso desnecessário de frameworks genéricos, otimizado para SEO local em Patos de Minas e região, e conectado ao seu Google Meu Negócio para dominar as buscas da cidade.',
      features: [
        'Carregamento em menos de 1 segundo, mesmo em conexão 4G',
        'Otimização direta e completa do Google Meu Negócio',
        'Design pensado 100% para converter visitante em conversa no WhatsApp',
        'Sem mensalidades de plataformas engessadas tipo builders genéricos',
      ],
      whatsappMessage:
        'Olá! Gostaria de um diagnóstico gratuito sobre a presença digital da minha empresa e saber mais sobre a criação de Landing Pages.',
    },
  },
  {
    num: '03',
    title: 'Automação de Processos e Integrações',
    desc: 'Conectamos WhatsApp, planilhas, CRM e ERP para que conversem sozinhos, eliminando retrabalho manual e acelerando pedidos e orçamentos.',
    link: '#',
    modalDetails: {
      pain: 'Informação duplicada, ordens de serviço perdidas e funcionários gastando horas redigitando os mesmos dados de um sistema para uma planilha.',
      solution:
        'Conectamos as ferramentas que você já usa WhatsApp, CRM, ERP, Google Sheets, PDFs de notas e pedidos via APIs e webhooks, incluindo leitura automática de documentos por IA, para que tudo flua sozinho.',
      features: [
        'Fim das tarefas repetitivas de redigitação manual',
        'Notificações automáticas para a equipe certa, na hora certa',
        'Leitura e organização automática de PDFs, notas e pedidos por IA',
        'Retorno sobre o investimento (ROI) perceptível em dias',
      ],
      whatsappMessage:
        'Olá! Minha operação tem muitos processos manuais. Como funciona o serviço de Automação de Processos e Integrações?',
    },
  },
  {
    num: '04',
    title: 'Sistemas e Portais sob Medida',
    desc: 'Controle de estoque, ordens de serviço e relatórios em um só lugar feito para a rotina real da sua empresa, não o contrário.',
    link: '#',
    modalDetails: {
      pain: 'Você já tentou softwares de prateleira, mas eles são complexos demais, cheios de função inútil e não se adaptam à forma como sua equipe realmente trabalha.',
      solution:
        'Desenvolvemos portais, mini-ERPs e dashboards exatos para o seu gargalo específico. A tecnologia se adapta ao seu processo, e não o contrário e tudo passa por testes de ponta a ponta antes de ir para o ar.',
      features: [
        'Áreas logadas seguras para clientes ou equipe',
        'Controle exato de ordens de serviço, estoque e cadastros',
        'Testes automatizados (QA) garantindo que nada quebre em produção',
        'Dashboards visuais em tempo real para decisões rápidas',
      ],
      whatsappMessage:
        'Olá! Gostaria de conversar sobre a criação de um sistema/portal sob medida para resolver um gargalo na minha empresa.',
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    icon: 'Search',
    title: 'Descoberta',
    desc: 'Entendemos seu negócio, processos, objetivos e gargalos.',
  },
  {
    num: '02',
    icon: 'ClipboardList',
    title: 'Planejamento',
    desc: 'Criamos a estratégia e definimos a solução ideal.',
  },
  {
    num: '03',
    icon: 'Code2',
    title: 'Desenvolvimento',
    desc: 'Construímos com foco em qualidade, velocidade e performance.',
  },
  {
    num: '04',
    icon: 'Send',
    title: 'Entrega & Suporte',
    desc: 'Testamos, entregamos e continuamos próximos para evoluir a solução.',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: 'ScanSearch',
    title: 'Diagnóstico antes da tecnologia',
    desc: 'Entendemos o problema e o processo antes de desenvolver qualquer solução.',
  },
  {
    icon: 'Ruler',
    title: 'Soluções sob medida',
    desc: 'Cada sistema, automação ou integração é construído de acordo com a realidade da sua empresa.',
  },
  {
    icon: 'Workflow',
    title: 'Tecnologia que se integra ao que você já usa',
    desc: 'Conectamos WhatsApp, CRM, ERP, planilhas, APIs e outras ferramentas sem exigir uma mudança completa da sua operação.',
  },
  {
    icon: 'BrainCircuit',
    title: 'IA aplicada a problemas reais',
    desc: 'Usamos inteligência artificial onde ela realmente gera ganho de tempo, eficiência e produtividade.',
  },
  {
    icon: 'Target',
    title: 'Desenvolvimento com foco em resultado',
    desc: 'Nosso objetivo não é entregar mais tecnologia, mas eliminar gargalos, reduzir trabalho manual e tornar sua operação mais eficiente.',
  },
  {
    icon: 'Handshake',
    title: 'Proximidade e acompanhamento',
    desc: 'Você fala diretamente com quem entende o negócio e participa da construção da solução do início à entrega.',
  },
];

export const PROJECTS: Project[] = [
  {
    tag: 'ERP Customizado',
    title: 'Renova ERP',
    year: 2026,
    description:
      'Sistema web completo desenvolvido para transformar a gestão financeira e produtiva de uma estofaria. Automatiza o cálculo preciso de custos de insumos e mão de obra, entregando um dashboard estratégico em tempo real. Arquitetura de nível enterprise com autenticação segura e testes automatizados.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Zustand'],
    projectUrl: 'https://renova-manager.vercel.app',
    githubUrl: 'https://github.com/Willi4nn/renova',
    image: '/images/renova.png',
  },
  {
    tag: 'Site de Alta Conversão',
    title: 'Foto Teka',
    year: 2026,
    description:
      'Plataforma institucional de alta performance com foco absoluto em SEO Local para captação de leads. Construída com Server Components, conta com uma galeria imersiva e formulário dinâmico de orçamentos, gerando digitalização e valor real para o negócio.',
    skills: ['Next.js', 'React', 'TypeScript', 'Framer Motion'],
    projectUrl: 'https://www.fototeka.com.br',
    image: '/images/foto-teka.png',
  },
  {
    tag: 'Automação WPP',
    title: 'Assistente Inteligente',
    year: 2026,
    description:
      'Agente de inteligência artificial integrado ao WhatsApp para qualificação de leads e agendamento de serviços 24/7. Elimina o tempo de espera do cliente, responde dúvidas frequentes de forma humanizada e transforma o canal de atendimento da empresa em uma máquina autônoma de captação.',
    skills: ['Node.js', 'TypeScript', 'WhatsApp API', 'OpenAI', 'n8n'],
    projectUrl: '#',
    image: '/images/whatsapp.png',
  },
];

export const AUDIENCE_TAGS: AudienceTag[] = [
  { icon: 'Stethoscope', label: 'Clínicas e Consultórios' },
  { icon: 'Sparkles', label: 'Clínicas de Estética' },
  { icon: 'Scale', label: 'Escritórios de Advocacia' },
  { icon: 'Calculator', label: 'Contabilidades' },
  { icon: 'Store', label: 'Comércios e Varejo' },
  { icon: 'Wrench', label: 'Oficinas Mecânicas' },
  { icon: 'Settings', label: 'Autopeças' },
  { icon: 'Truck', label: 'Distribuidoras e Logística' },
  { icon: 'Wind', label: 'Climatização e Manutenção' },
  { icon: 'HardHat', label: 'Depósitos de Construção' },
  { icon: 'Armchair', label: 'Estofarias' },
  { icon: 'Ruler', label: 'Marcenarias sob Medida' },
  { icon: 'Factory', label: 'Pequenas Indústrias' },
  { icon: 'Sprout', label: 'Agroindústria' },
  { icon: 'Tractor', label: 'Implementos Agrícolas' },
  { icon: 'Megaphone', label: 'Agências de Marketing' },
  { icon: 'Building2', label: 'Empresas B2B' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Eu já tinha tentado fazer o site algumas vezes, mas nunca conseguia chegar num resultado que realmente tivesse a nossa cara. O Willian e o Arthur entenderam bem a proposta da Foto Teka e conseguiram trazer aquele estilo retrô que a gente queria. Ficou muito bonito e, principalmente, ficou fácil para o cliente pedir orçamento.',
    name: 'Estephane',
    role: 'Foto Teka',
    avatar: 'ET',
  },
  {
    quote:
      'Antes era muito papel e muita coisa anotada. Às vezes precisava procurar pedido e demorava até achar. Com o Renova ficou bem mais fácil acompanhar os serviços e saber o que está pendente. No dia a dia fez bastante diferença aqui na oficina.',
    name: 'José Eustáquio',
    role: 'Estofados Piaba',
    avatar: 'PI',
  },
  {
    quote:
      'Antes eu resolvia praticamente tudo pelo Instagram e acabava ficando um pouco perdida com as mensagens. O site deixou a loja bem mais organizada e ficou muito a cara da Bela Vista. Hoje a cliente consegue ver as peças com calma e já chegar no WhatsApp sabendo o que quer.',
    name: 'Mariana',
    role: 'Boutique Bela Vista',
    avatar: 'MB',
  },
  {
    quote:
      'A gente queria um site mais para passar confiança e ajudar quem procura oficina pela internet. O pessoal da Scalee foi bem direto e não ficou complicando o projeto. O resultado ficou profissional e, depois que colocamos no ar, começamos a receber mais contatos de gente que encontrou a oficina pelo Google.',
    name: 'Carlos',
    role: 'Auto Mecânica Central',
    avatar: 'CA',
  },
];

export interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneFormatted: string;
  address: string;
}

export const WHATSAPP_URL =
  'https://wa.me/553499069861?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito.';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    icon: 'Instagram',
    href: 'https://www.instagram.com/scalee_tech/',
  },
  { platform: 'LinkedIn', icon: 'Linkedin', href: '#' },
  { platform: 'WhatsApp', icon: 'MessageCircle', href: WHATSAPP_URL },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'scaleetecnologia@gmail.com',
  phone: '553499069861',
  phoneFormatted: '(34) 9 9906-9861',
  address: 'Patos de Minas — MG',
};

export const FOOTER_LINKS: FooterLinks = {
  solucoes: [
    { label: 'Atendimento Inteligente no WhatsApp', href: '#solucoes' },
    { label: 'Landing Pages & GMB', href: '#solucoes' },
    { label: 'Automação de Processos', href: '#solucoes' },
    { label: 'Sistemas sob Medida', href: '#solucoes' },
  ],
  empresa: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Processo', href: '#processo' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ],
  recursos: [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
  ],
};
