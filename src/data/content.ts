export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
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

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  setup?: string;
  highlighted?: boolean;
  features: PricingFeature[];
  cta: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

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

/* =========================================================
   HERO
========================================================= */

export const HERO_FEATURES: Feature[] = [
  {
    icon: 'ThumbsUp',
    title: 'Foco no problema real',
    desc: 'Criamos tecnologia para resolver gargalos da rotina da sua empresa.',
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Tecnologia moderna',
    desc: 'Sistemas rápidos, responsivos e preparados para acompanhar seu negócio.',
  },
  {
    icon: 'Clock',
    title: 'Processo transparente',
    desc: 'Escopo, etapas, prazos e investimento definidos com clareza.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Atendimento próximo',
    desc: 'Você fala diretamente com quem entende e desenvolve sua solução.',
  },
];

/* =========================================================
   SOBRE
========================================================= */

export const ABOUT: Feature[] = [
  {
    icon: 'MessageCircle',
    title: 'Atendimento',
    desc: 'Organizamos mensagens e contatos para sua equipe não perder oportunidades.',
  },
  {
    icon: 'RefreshCw',
    title: 'Processos',
    desc: 'Automatizamos tarefas repetitivas que consomem tempo da equipe.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Organização',
    desc: 'Reunimos informações e processos em ferramentas mais fáceis de acompanhar.',
  },
  {
    icon: 'BarChart3',
    title: 'Controle',
    desc: 'Transformamos dados espalhados em informações mais claras para a gestão.',
  },
  {
    icon: 'TrendingUp',
    title: 'Crescimento',
    desc: 'A tecnologia entra para facilitar a operação e dar espaço para a empresa crescer.',
  },
];

/* =========================================================
   SERVIÇOS
========================================================= */

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Atendimento com IA no\nWhatsApp 24 horas',
    desc: 'Uma inteligência artificial para responder dúvidas, fazer o primeiro atendimento, entender o que o cliente precisa e encaminhar a conversa para sua equipe.',
    link: '#',
    modalDetails: {
      pain: 'Sua empresa recebe mensagens durante o dia, à noite e nos fins de semana, mas nem sempre consegue responder na hora. Quando o cliente precisa esperar, ele pode procurar outra empresa.',
      solution:
        'Criamos um atendimento automatizado com IA no WhatsApp para responder dúvidas frequentes, fazer a triagem inicial e encaminhar o cliente para uma pessoa quando necessário.',
      features: [
        'Atendimento automatizado 24 horas por dia',
        'Respostas para dúvidas frequentes',
        'Perguntas para entender o que o cliente precisa',
        'Qualificação inicial de contatos',
        'Encaminhamento para atendimento humano',
      ],
      whatsappMessage:
        'Olá! Vi a solução de atendimento com IA no WhatsApp e gostaria de entender como ela funcionaria na minha empresa.',
    },
  },

  {
    num: '02',
    title: 'Lembretes e acompanhamento\nde clientes e orçamentos',
    desc: 'Automatize confirmações, lembretes e follow-ups para reduzir esquecimentos e acompanhar oportunidades sem depender de tarefas manuais.',
    link: '#',
    modalDetails: {
      pain: 'Clientes esquecem compromissos e muitos orçamentos deixam de ser acompanhados porque a equipe está ocupada com outras tarefas.',
      solution:
        'Criamos automações para enviar lembretes e fazer o acompanhamento de clientes e orçamentos nos momentos certos, mantendo o contato ativo sem trabalho manual desnecessário.',
      features: [
        'Confirmação automática de agendamentos',
        'Lembretes para clientes',
        'Acompanhamento de orçamentos e oportunidades',
        'Mensagens automáticas em etapas definidas',
        'Avisos para a equipe quando precisar assumir o contato',
      ],
      whatsappMessage:
        'Olá! Gostaria de entender como posso automatizar os lembretes e o acompanhamento dos meus clientes e orçamentos.',
    },
  },

  {
    num: '03',
    title: 'Central de atendimento +\nCRM',
    desc: 'Organize conversas, clientes e oportunidades em um só lugar, com histórico, responsáveis e etapas do atendimento e das vendas.',
    link: '#',
    modalDetails: {
      pain: 'Quando cada atendente trabalha de forma isolada, informações podem se perder, clientes podem ficar sem retorno e o gestor perde visibilidade do que está acontecendo.',
      solution:
        'Estruturamos uma central de atendimento com CRM — gestão de clientes e oportunidades — para organizar conversas, responsáveis, histórico e etapas comerciais.',
      features: [
        'Organização dos atendimentos da equipe',
        'Histórico e informações dos clientes',
        'Distribuição de conversas',
        'Responsáveis por atendimento',
        'Funil e etapas de vendas',
      ],
      whatsappMessage:
        'Olá! Quero organizar melhor os atendimentos, clientes e oportunidades da minha empresa.',
    },
  },

  {
    num: '04',
    title: 'Sites, Landing Pages\n+ SEO local',
    desc: 'Sites e páginas rápidas, profissionais e responsivas, pensadas para apresentar sua empresa, melhorar sua presença no Google e facilitar novos contatos.',
    link: '#',
    modalDetails: {
      pain: 'Muitas empresas têm um site antigo, lento ou pouco claro e acabam perdendo oportunidades de quem encontra o negócio pelo Google ou por anúncios.',
      solution:
        'Desenvolvemos sites e landing pages com foco em experiência no celular, velocidade, clareza e conversão, além de boas práticas de SEO para buscas locais.',
      features: [
        'Site ou landing page responsiva',
        'Estrutura pensada para facilitar o contato',
        'SEO on-page',
        'SEO local para buscas no Google',
        'Integração com WhatsApp e formulários',
      ],
      whatsappMessage:
        'Olá! Quero melhorar meu site e minha presença no Google para gerar mais contatos.',
    },
  },

  {
    num: '05',
    title: 'Sistemas web\nsob medida',
    desc: 'Transforme planilhas, controles e processos manuais em um sistema feito de acordo com a forma como sua empresa realmente trabalha.',
    link: '#',
    modalDetails: {
      pain: 'Planilhas espalhadas, tarefas repetitivas e informações em vários lugares consomem tempo e aumentam a chance de erros conforme a operação cresce.',
      solution:
        'Desenvolvemos sistemas web personalizados para organizar processos, centralizar informações e automatizar tarefas que fazem parte da rotina da empresa.',
      features: [
        'Painéis e dashboards personalizados',
        'Formulários e fluxos digitais',
        'Controle de clientes, pedidos ou serviços',
        'Automação de processos',
        'Relatórios e informações organizadas',
      ],
      whatsappMessage:
        'Olá! Tenho um processo na empresa que gostaria de transformar em um sistema. Podemos conversar?',
    },
  },
];

/* =========================================================
   PROCESSO
========================================================= */

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    icon: 'Search',
    title: 'Entendemos seu negócio',
    desc: 'Conhecemos sua rotina, seus processos e o problema que você quer resolver.',
  },
  {
    num: '02',
    icon: 'ClipboardList',
    title: 'Definimos a solução',
    desc: 'Escolhemos a abordagem mais simples e adequada para sua necessidade.',
  },
  {
    num: '03',
    icon: 'Code2',
    title: 'Construímos e testamos',
    desc: 'Desenvolvemos a solução, validamos o funcionamento e fazemos os ajustes necessários.',
  },
  {
    num: '04',
    icon: 'Send',
    title: 'Colocamos para funcionar',
    desc: 'Entregamos a solução e podemos continuar evoluindo conforme o negócio precisa.',
  },
];

/* =========================================================
   DIFERENCIAIS
========================================================= */

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: 'ScanSearch',
    title: 'Problema antes da tecnologia',
    desc: 'Primeiro entendemos o processo e o gargalo. Depois definimos qual tecnologia realmente faz sentido.',
  },
  {
    icon: 'Ruler',
    title: 'Soluções sob medida',
    desc: 'Cada automação ou sistema é pensado de acordo com a realidade e a necessidade da empresa.',
  },
  {
    icon: 'Workflow',
    title: 'Aproveitamos o que você já usa',
    desc: 'Quando for viável, conectamos WhatsApp, planilhas, sistemas e outras ferramentas à nova solução.',
  },
  {
    icon: 'BrainCircuit',
    title: 'IA aplicada com propósito',
    desc: 'Usamos inteligência artificial quando ela pode economizar tempo, melhorar o atendimento ou automatizar uma tarefa.',
  },
  {
    icon: 'Target',
    title: 'Tecnologia com objetivo claro',
    desc: 'O objetivo não é adicionar tecnologia por adicionar, mas tornar a operação mais simples e eficiente.',
  },
  {
    icon: 'Handshake',
    title: 'Contato direto com quem desenvolve',
    desc: 'Você conversa diretamente com quem participa da construção da sua solução.',
  },
];

/* =========================================================
   PROJETOS
========================================================= */

export const PROJECTS: Project[] = [
  {
    tag: 'Sistema de gestão',
    title: 'Renova ERP',
    year: 2026,
    description:
      'Sistema web desenvolvido para uma estofaria organizar pedidos, custos, produção e informações financeiras em um só lugar, substituindo parte dos controles manuais.',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    projectUrl: 'https://renova-manager.vercel.app',
    githubUrl: 'https://github.com/Willi4nn/renova',
    image: '/images/renova.png',
  },

  {
    tag: 'Site + Google',
    title: 'Foto Teka',
    year: 2026,
    description:
      'Site profissional criado para apresentar os serviços da empresa, facilitar pedidos de orçamento e fortalecer sua presença nas buscas do Google, especialmente no celular.',
    skills: ['Next.js', 'React', 'TypeScript'],
    projectUrl: 'https://www.fototeka.com.br',
    image: '/images/foto-teka.png',
  },

  {
    tag: 'IA + WhatsApp',
    title: 'Assistente Inteligente',
    year: 2026,
    description:
      'Demonstração de atendimento com inteligência artificial no WhatsApp para responder dúvidas, fazer o primeiro atendimento e encaminhar clientes para a equipe.',
    skills: ['Node.js', 'TypeScript', 'WhatsApp API', 'OpenAI', 'n8n'],
    projectUrl: '#',
    image: '/images/whatsapp.png',
  },
];

/* =========================================================
   DEPOIMENTOS
========================================================= */

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Eu já tinha tentado fazer o site algumas vezes, mas nunca chegava num resultado que realmente tivesse a nossa cara. O Willian e o Arthur entenderam a proposta da Foto Teka e conseguiram trazer o estilo retrô que a gente queria. Ficou bonito e fácil para o cliente pedir orçamento.',
    name: 'Estephane',
    role: 'Foto Teka',
    avatar: 'ET',
  },
  {
    quote:
      'Antes era muito papel e muita coisa anotada. Às vezes precisava procurar um pedido e demorava para achar. Com o Renova ficou bem mais fácil acompanhar os serviços e saber o que está pendente. No dia a dia fez bastante diferença.',
    name: 'José Eustáquio',
    role: 'Estofados Piaba',
    avatar: 'PI',
  },
  {
    quote:
      'Antes eu resolvia praticamente tudo pelo Instagram e acabava me perdendo um pouco com as mensagens. O site deixou a loja mais organizada e ficou muito a cara da Bela Vista. Hoje a cliente consegue ver as peças e já chegar no WhatsApp sabendo o que quer.',
    name: 'Mariana',
    role: 'Boutique Bela Vista',
    avatar: 'MB',
  },
  {
    quote:
      'A gente queria um site para passar confiança e ajudar quem procura oficina pela internet. O pessoal da Scalee foi bem direto e não complicou o projeto. O resultado ficou profissional e começamos a receber contatos de pessoas que encontraram a oficina pelo Google.',
    name: 'Carlos',
    role: 'Auto Mecânica Central',
    avatar: 'CA',
  },
];

/* =========================================================
   CONTATO / REDES
========================================================= */

export const WHATSAPP_NUMBER = '553499069861';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    icon: 'Instagram',
    href: 'https://www.instagram.com/scalee.tech',
  },
  {
    platform: 'LinkedIn',
    icon: 'Linkedin',
    href: '#',
  },
  {
    platform: 'WhatsApp',
    icon: 'MessageCircle',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Quero%20conhecer%20as%20soluções%20da%20Scalee.`,
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'scaleetecnologia@gmail.com',
  phone: '553499069861',
  phoneFormatted: '(34) 9 9906-9861',
  address: 'Patos de Minas — MG',
};

/* =========================================================
   FOOTER
========================================================= */

export const FOOTER_LINKS: FooterLinks = {
  solucoes: [
    { label: 'Atendimento com IA no WhatsApp', href: '#solucoes' },
    { label: 'Lembretes e acompanhamento', href: '#solucoes' },
    { label: 'Central de atendimento + CRM', href: '#solucoes' },
    { label: 'Sites, Landing Pages + SEO', href: '#solucoes' },
    { label: 'Sistemas sob medida', href: '#solucoes' },
  ],

  empresa: [
    { label: 'Sobre a Scalee', href: '#sobre' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Como funciona', href: '#processo' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Perguntas frequentes', href: '#faq' },
  ],

  recursos: [
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
};

/* =========================================================
   MENU
========================================================= */

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Simulador', href: '#simulador' },
  { label: 'Planos', href: '#planos' },
  { label: 'Projetos', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
];

/* =========================================================
   PLANOS
========================================================= */

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Presença e Conversão',

    description:
      'Site profissional para apresentar sua empresa, melhorar sua presença no Google e gerar novos contatos.',

    price: 'R$ 990',
    period: '/projeto',

    setup: 'Manutenção opcional a partir de R$ 79/mês.',

    features: [
      {
        name: 'Site profissional e responsivo',
        included: true,
      },
      {
        name: 'Estrutura pensada para gerar contatos',
        included: true,
      },
      {
        name: 'SEO on-page (otimização para o Google)',
        included: true,
      },
      {
        name: 'Estrutura para buscas locais',
        included: true,
      },
      {
        name: 'Integração com WhatsApp e formulário',
        included: true,
      },
      {
        name: 'Configuração básica do Perfil da Empresa no Google',
        included: true,
      },
    ],

    cta: 'Quero meu site',
    href: '#contato',
  },

  {
    name: 'Atendimento e Automação',

    description:
      'Automatize parte do atendimento, dos lembretes e do acompanhamento de clientes pelo WhatsApp.',

    price: 'R$ 297',
    period: '/mês',

    setup:
      'Implantação a partir de R$ 790, conforme a estrutura e as necessidades do projeto.',

    highlighted: true,

    features: [
      {
        name: 'Atendimento automático com IA',
        included: true,
      },
      {
        name: 'Respostas para dúvidas frequentes',
        included: true,
      },
      {
        name: 'Perguntas para entender o que o cliente precisa',
        included: true,
      },
      {
        name: 'Encaminhamento para atendimento humano',
        included: true,
      },
      {
        name: 'Lembretes e acompanhamento automáticos',
        included: true,
      },
    ],

    cta: 'Quero automatizar',
    href: '#contato',
  },

  {
    name: 'Solução Sob Medida',

    description:
      'Sistema, painel ou automação desenvolvidos de acordo com os processos da sua empresa.',

    price: 'A partir de R$ 2.500',
    period: '/projeto',

    setup:
      'O valor varia conforme o tamanho do projeto, funcionalidades e integrações necessárias.',

    features: [
      {
        name: 'Sistemas web e MVPs (versões iniciais)',
        included: true,
      },
      {
        name: 'Painéis e áreas internas',
        included: true,
      },
      {
        name: 'Automação de processos',
        included: true,
      },
      {
        name: 'Integrações com outras ferramentas, quando aplicável',
        included: true,
      },
      {
        name: 'Desenvolvimento por etapas',
        included: true,
      },
    ],

    cta: 'Falar sobre meu projeto',
    href: '#contato',
  },
];

/* =========================================================
   FAQ
========================================================= */

export const FAQS: FAQItem[] = [
  {
    question: 'A IA vai parecer um robô para meus clientes?',
    answer:
      'A conversa pode ser configurada de acordo com a forma como sua empresa atende. A IA responde com base nas informações definidas para o negócio e, quando necessário, encaminha a conversa para uma pessoa da equipe.',
  },

  {
    question: 'Preciso trocar meu número de WhatsApp?',
    answer:
      'Depende da solução e da estrutura atual da empresa. Avaliamos o seu cenário antes da implantação e definimos a forma mais adequada de usar o número que sua empresa já possui ou criar uma nova estrutura de atendimento.',
  },

  {
    question: 'Existe contrato de fidelidade?',
    answer:
      'As condições dependem do serviço contratado. Antes de começar, você recebe claramente o que será entregue, o investimento e as condições do projeto ou da assinatura.',
  },

  {
    question: 'Quanto tempo leva para colocar a solução no ar?',
    answer:
      'Depende do projeto. Um site pode ter um prazo menor, enquanto automações e sistemas sob medida exigem mais etapas. Depois de entender sua necessidade, definimos um cronograma claro.',
  },

  {
    question: 'E se a IA não souber responder uma pergunta?',
    answer:
      'A IA trabalha dentro das informações e regras definidas para sua empresa. Quando a pergunta estiver fora desse contexto ou precisar de uma pessoa, o atendimento pode ser encaminhado para sua equipe.',
  },

  {
    question: 'Vocês dão suporte depois da entrega?',
    answer:
      'Sim. Dependendo da solução contratada, oferecemos suporte, manutenção e evolução para manter a tecnologia funcionando e acompanhando as necessidades da empresa.',
  },
];
