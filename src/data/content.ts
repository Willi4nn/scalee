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
  { label: 'Simulador', href: '#simulador' },
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
    title: 'Agentes de IA para\nWhatsApp (24/7)',
    desc: 'O cliente decide comprar no domingo à noite? Nossa Inteligência Artificial atende com linguagem natural, qualifica o lead e faz o agendamento direto no seu calendário. O fim definitivo do cliente ignorado.',
    link: '#',
    modalDetails: {
      pain: 'Sua equipe perde vendas porque demora a responder. Fora do horário comercial ou em picos de movimento, o cliente desiste e fecha com o concorrente que atende na hora.',
      solution:
        'Implementamos agentes inteligentes que qualificam contatos, tiram dúvidas operacionais e realizam agendamentos direto na sua agenda. Tudo integrado ao seu fluxo atual, sem parecer um robô.',
      features: [
        'Atendimento, triagem e agendamento 24 horas por dia',
        'Respostas humanizadas com linguagem natural',
        'Transbordo inteligente e silencioso para o atendente humano',
        'Captura e organização automática de leads no seu funil',
      ],
      whatsappMessage:
        'Olá! Vi no site sobre os Agentes de IA para WhatsApp e quero entender como parar de perder vendas.',
    },
  },
  {
    num: '02',
    title: 'Régua Anti-Falta e\nFollow-up Comercial',
    desc: 'Automações invisíveis que confirmam compromissos da sua agenda e resgatam orçamentos esquecidos. Recupere imediatamente até 20% do faturamento que ficava abandonado por falha humana.',
    link: '#',
    modalDetails: {
      pain: 'Clientes esquecem agendamentos (gerando horários ociosos) e orçamentos esfriam porque sua equipe não tem tempo hábil de fazer o acompanhamento constante de cada um.',
      solution:
        'Criamos réguas de comunicação que rodam sozinhas no WhatsApp. O sistema lembra o cliente do compromisso e reativa propostas não respondidas, recuperando dinheiro que estava na mesa.',
      features: [
        'Confirmação automática de agendamentos via WhatsApp',
        'Mensagens de remarketing para resgate de propostas abandonadas',
        'Redução drástica nas taxas de falta (no-show)',
        'Geração de alertas para a equipe agir nos clientes mais quentes',
      ],
      whatsappMessage:
        'Olá! Gostaria de saber como a automação de Follow-up pode recuperar minhas vendas perdidas.',
    },
  },
  {
    num: '03',
    title: 'Central Multiatendente\ne CRM Integrado',
    desc: 'Toda a sua equipe de vendas e suporte utilizando um único número oficial de WhatsApp. Histórico auditável, gestão centralizada e proteção absoluta da sua carteira de contatos.',
    link: '#',
    modalDetails: {
      pain: 'Cada funcionário usa o próprio celular para atender clientes. Se ele sai da empresa, leva os contatos junto. Além disso, você não faz ideia da qualidade do atendimento prestado.',
      solution:
        'Centralizamos toda a operação em um único número oficial. Você ganha um painel para distribuir conversas, monitorar a qualidade do atendimento e proteger a base de clientes da sua empresa.',
      features: [
        'Vários atendentes usando simultaneamente o mesmo número',
        'Histórico de conversas 100% gravado e à prova de exclusões',
        'CRM integrado com etiquetas, funil de vendas e anotações',
        'Relatórios de desempenho e tempo de resposta da equipe',
      ],
      whatsappMessage:
        'Olá! Preciso organizar minha equipe em um único número e proteger meus contatos. Como funciona?',
    },
  },
  {
    num: '04',
    title: 'Landing Pages de Alta\nConversão + GMB',
    desc: 'Pare de queimar orçamento publicitário com sites lentos. Construímos páginas ultrarrápidas focadas em um único objetivo: fazer o visitante do Google clicar diretamente no seu WhatsApp.',
    link: '#',
    modalDetails: {
      pain: 'Você investe em tráfego ou o cliente te procura no Google, mas cai num site amador que demora a carregar. A frustração é imediata e ele volta para o buscador para achar o concorrente.',
      solution:
        'Desenvolvemos Landing Pages desenhadas com engenharia de conversão e velocidade extrema. Otimizamos também sua ficha no Google para dominar as buscas locais e atrair clientes.',
      features: [
        'Carregamento instantâneo (abaixo de 1 segundo no 4G)',
        'Otimização completa do Google Meu Negócio para buscas locais',
        'Copywriting e arquitetura focados em cliques para o WhatsApp',
        'Blindagem contra a lentidão de criadores de sites genéricos',
      ],
      whatsappMessage:
        'Olá! Quero transformar meu site numa máquina de conversão e dominar as buscas. Como podem me ajudar?',
    },
  },
  {
    num: '05',
    title: 'Sistemas Web Sob\nMedida e ERPs',
    desc: 'O fim do caos das planilhas repetitivas. Substituímos o trabalho braçal por plataformas exclusivas que conectam sua operação, vendas e financeiro em um único ambiente seguro.',
    link: '#',
    modalDetails: {
      pain: 'A empresa cresceu e as planilhas saíram de controle. Softwares de prateleira são caros e engessados, forçando a equipe a continuar usando controles paralelos para conseguir trabalhar.',
      solution:
        'Desenvolvemos portais operacionais e ERPs focados apenas no que a sua empresa realmente precisa. A tecnologia se adapta à rotina da sua equipe, e não o contrário.',
      features: [
        'Painéis operacionais fechados e seguros para sua equipe',
        'Digitalização total do controle de fluxos, O.S e estoques',
        'Dashboards e relatórios visuais em tempo real para tomada de decisão',
        'Garantia de estabilidade com automação de testes (QA)',
      ],
      whatsappMessage:
        'Olá! A desorganização das planilhas virou um gargalo aqui. Quero conversar sobre um sistema sob medida.',
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
    { label: 'Simulador', href: '#simulador' },
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
