import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CalendarCheck,
  Check,
  CheckCheck,
  ChevronLeft,
  DollarSign,
  MessageCircle,
  Mic,
  Play,
  Plus,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';

const CONTACT_URL = '#contato';

type Message = {
  id: string;
  type: 'bot' | 'user' | 'cta';
  text: string;
  time: string;
  buttons?: string[];
};

type ScenarioMessage = {
  type: 'bot' | 'user';
  text: string;
  buttons?: string[];
};

const SCENARIOS: Record<1 | 2 | 3, ScenarioMessage[]> = {
  1: [
    {
      type: 'user',
      text: 'Oi! Queria saber como funciona e quais são os horários de atendimento.',
    },
    {
      type: 'bot',
      text: 'Olá! 👋 Sou o assistente virtual da empresa.',
    },
    {
      type: 'bot',
      text: 'Posso te ajudar com informações, horários e outras dúvidas. Para entender melhor o que você precisa, qual seu nome e qual serviço você procura?',
    },
    {
      type: 'user',
      text: 'João. Estou procurando atendimento para minha clínica.',
    },
    {
      type: 'bot',
      text: 'Perfeito, João! Vou registrar essas informações e encaminhar seu atendimento para a equipe responsável. ✅',
    },
  ],

  2: [
    {
      type: 'bot',
      text: 'Olá, Maria! 👋 Aqui é o atendimento da Clínica.',
    },
    {
      type: 'bot',
      text: 'Sua consulta de amanhã, às 14h, está confirmada?',
      buttons: ['Sim, confirmar', 'Quero reagendar'],
    },
  ],

  3: [
    {
      type: 'bot',
      text: 'Oi, Carlos! Tudo bem? 👋 Você pediu um orçamento recentemente e estamos entrando em contato para saber se ainda tem interesse.',
    },
    {
      type: 'bot',
      text: 'Posso te ajudar a retomar esse atendimento?',
    },
    {
      type: 'user',
      text: 'Sim, quero continuar.',
    },
    {
      type: 'bot',
      text: 'Perfeito! Vou encaminhar seu atendimento para a equipe continuar com você. ✅',
    },
  ],
};

export const SCENARIO_CTA: Record<1 | 2 | 3, string> = {
  1: 'Esse tipo de atendimento pode cuidar da primeira conversa com seus clientes. Quer entender como funcionaria no seu negócio?',
  2: 'Lembretes automáticos ajudam sua equipe a não precisar lembrar de tudo manualmente. Quer ver como isso funcionaria na sua empresa?',
  3: 'Um simples acompanhamento pode evitar que um orçamento fique esquecido. Quer conversar sobre o seu processo comercial?',
};

const FREE_TYPE_CTA =
  'No seu negócio, a IA pode ser configurada para responder de acordo com as informações e processos da sua empresa. Quer entender como funcionaria na prática?';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getCurrentTimeStr = () =>
  new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
const uid = () => Math.random().toString(36).substring(2, 9);

export function Simulator() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);
  const [completedScenarios, setCompletedScenarios] = useState<Set<number>>(
    new Set()
  );
  const [isTyping, setIsTyping] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [waitingForChoice, setWaitingForChoice] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: 'initial-1',
      type: 'bot',
      text: 'Olá! 👋 Sou o assistente virtual da Scalee.',
      time: getCurrentTimeStr(),
    },
    {
      id: 'initial-2',
      type: 'bot',
      text: 'Escolha um exemplo abaixo para ver como um atendimento automático pode funcionar.',
      time: getCurrentTimeStr(),
    },
  ]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const chatRef = useRef<HTMLDivElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  const pushMessage = (msg: Omit<Message, 'id' | 'time'>) => {
    setMessages((prev) => [
      ...prev,
      { ...msg, id: uid(), time: getCurrentTimeStr() },
    ]);
  };

  const triggerScenario = async (id: 1 | 2 | 3) => {
    if (isSimulating) return;

    if (window.innerWidth < 1024 && phoneContainerRef.current) {
      phoneContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

    setIsSimulating(true);
    setActiveScenario(id);
    setWaitingForChoice(false);
    setMessages([]);

    const sequence = SCENARIOS[id];

    for (const msg of sequence) {
      if (msg.type === 'bot') {
        setIsTyping(true);
        const typingTime = Math.max(800, msg.text.length * 30);
        await sleep(typingTime);
        setIsTyping(false);
      } else {
        await sleep(600);
      }

      pushMessage({
        type: msg.type,
        text: msg.text,
        buttons: msg.buttons,
      });

      if (id === 2 && msg.buttons) {
        setWaitingForChoice(true);
        setIsSimulating(false);
        return;
      }

      await sleep(400);
    }

    await sleep(500);
    pushMessage({ type: 'cta', text: SCENARIO_CTA[id] });

    setCompletedScenarios((prev) => new Set(prev).add(id));
    setIsSimulating(false);
  };

  const handleChoiceClick = async (choiceText: string) => {
    if (!waitingForChoice || isSimulating) return;
    setWaitingForChoice(false);
    setIsSimulating(true);

    pushMessage({ type: 'user', text: choiceText });
    await sleep(600);

    setIsTyping(true);
    await sleep(1200);
    setIsTyping(false);

    const botReply = choiceText.includes('reagendar')
      ? 'Sem problemas! Para reagendar, entre em contato com nossa equipe. ✅'
      : 'Pronto! Seu horário foi confirmado com sucesso. Te esperamos amanhã. ✅';

    pushMessage({ type: 'bot', text: botReply });
    await sleep(500);
    pushMessage({ type: 'cta', text: SCENARIO_CTA[2] });

    setCompletedScenarios((prev) => new Set(prev).add(2));
    setIsSimulating(false);
    setActiveScenario(null);
  };

  const handleFreeTyping = async () => {
    const text = inputValue.trim();
    if (!text || isSimulating || waitingForChoice) return;

    setInputValue('');
    pushMessage({ type: 'user', text });

    setIsSimulating(true);
    await sleep(500);
    setIsTyping(true);
    await sleep(1500);
    setIsTyping(false);

    const palavras = text.trim().split(/\s+/);
    const termo =
      palavras.length > 2
        ? 'sua dúvida'
        : text.replace(/[^a-zA-Z0-9À-ÿ\s]/g, '').trim() || 'isso';

    pushMessage({
      type: 'bot',
      text: `Entendi sua mensagem sobre *${termo}*! Em um ambiente real, eu já estaria conectada ao seu sistema para resolver isso instantaneamente. 🤖`,
    });

    await sleep(600);
    pushMessage({ type: 'cta', text: FREE_TYPE_CTA });

    setIsSimulating(false);
    setActiveScenario(null);
  };

  const formatText = (text: string) => {
    const parts = text.split(/(\*.*?\*)/g);
    return parts.map((part, i) =>
      part.startsWith('*') && part.endsWith('*') ? (
        <strong key={i} className="font-bold">
          {part.slice(1, -1)}
        </strong>
      ) : (
        part
      )
    );
  };

  const scenarios = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'Atendimento automático',
      desc: 'A IA responde dúvidas e faz o primeiro atendimento.',
    },
    {
      id: 2,
      icon: CalendarCheck,
      title: 'Lembrete de agendamento',
      desc: 'A empresa confirma o horário automaticamente.',
    },
    {
      id: 3,
      icon: DollarSign,
      title: 'Acompanhamento de orçamento',
      desc: 'A empresa retoma o contato com quem não respondeu.',
    },
  ] as const;

  return (
    <section
      className="border-border/50 border-t bg-slate-50 py-24"
      id="simulador"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Simulador em Tempo Real"
              align="left"
              className="mb-8"
            >
              Veja a IA funcionando na prática.
            </SectionHeader>
            <p className="text-text-muted mb-8 text-lg leading-relaxed font-medium">
              Escolha um exemplo abaixo e veja como um atendimento automático
              pode responder dúvidas, confirmar horários e acompanhar clientes
              pelo WhatsApp.
            </p>

            <div className="space-y-4">
              {scenarios.map((item) => {
                const isActive = activeScenario === item.id;
                const isDone = completedScenarios.has(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => triggerScenario(item.id)}
                    disabled={isSimulating}
                    aria-pressed={isActive}
                    className={cn(
                      'group relative flex w-full items-center justify-between rounded-2xl border-2 p-5 text-left transition-all duration-300',
                      isActive
                        ? 'border-primary bg-primary/5 scale-[1.02] shadow-md'
                        : 'border-border hover:border-primary/40 disabled:hover:border-border hover:-translate-y-1 hover:shadow-md disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none'
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          'flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors',
                          isActive
                            ? 'bg-primary shadow-primary/30 text-white shadow-lg'
                            : 'group-hover:text-primary group-hover:bg-primary/10 bg-slate-100 text-slate-500'
                        )}
                      >
                        <item.icon className="h-6 w-6" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3
                          className={cn(
                            'mb-1 flex items-center gap-2 text-[1.1rem] font-bold transition-colors',
                            isActive
                              ? 'text-primary'
                              : 'text-text-dark group-hover:text-primary'
                          )}
                        >
                          {item.title}
                          {isDone && (
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500">
                              <Check
                                className="h-2.5 w-2.5 text-white"
                                strokeWidth={3}
                              />
                            </span>
                          )}
                        </h3>
                        <p className="text-text-muted text-sm font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                        isActive
                          ? 'bg-primary scale-110 text-white shadow-md'
                          : 'group-hover:bg-primary bg-slate-100 group-hover:scale-110 group-hover:text-white group-hover:shadow-md'
                      )}
                    >
                      <Play
                        className="ml-0.5 h-4 w-4"
                        fill="currentColor"
                        strokeWidth={2}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            ref={phoneContainerRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:col-span-7 lg:justify-end"
          >
            <div
              className="shadow-float relative z-10 mx-auto flex w-full max-w-85 shrink-0 flex-col overflow-hidden rounded-[3rem] border-10 border-slate-900 bg-white"
              style={{ height: 'min(680px, 80vh)' }}
            >
              <div className="absolute top-0 z-50 flex w-full justify-center">
                <div className="h-6 w-32 rounded-b-2xl bg-slate-900"></div>
              </div>

              <div className="relative z-40 flex items-center gap-3 bg-slate-900 p-4 pt-10 text-white">
                <button
                  className="text-slate-300 transition-colors hover:text-white"
                  aria-label="Voltar"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="flex items-center gap-1 truncate text-[15px] leading-tight font-bold text-white">
                    Agente Scalee
                    <BadgeCheck
                      className="h-4 w-4 text-emerald-400"
                      fill="currentColor"
                      stroke="white"
                    />
                  </h4>
                  <p className="flex items-center gap-1.5 truncate text-[12px] font-medium text-slate-400">
                    {!isTyping && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    )}
                    {isTyping ? 'digitando...' : 'Online'}
                  </p>
                </div>
              </div>

              <div
                ref={chatRef}
                role="log"
                aria-live="polite"
                aria-label="Conversa de demonstração"
                className="bg-whatsapp-bg relative z-30 flex flex-1 scrollbar-none flex-col gap-3 overflow-y-auto p-4 pb-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' opacity='0.05'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                <div className="my-2 text-center">
                  <span className="border-border/50 rounded-lg border bg-white/80 px-3 py-1.5 text-[11px] font-bold tracking-wider text-slate-500 uppercase shadow-sm backdrop-blur-sm">
                    {activeScenario ? 'Novo Cenário' : 'Hoje'}
                  </span>
                </div>

                {messages.map((msg) => {
                  if (msg.type === 'cta') {
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex w-full flex-col items-start"
                      >
                        <div className="border-primary/20 bg-primary/5 relative max-w-[90%] rounded-2xl rounded-tl-none border px-4 py-3 shadow-sm">
                          <p className="text-text-dark mb-3 leading-relaxed font-medium whitespace-pre-wrap">
                            {formatText(msg.text)}
                          </p>
                          <a
                            href={CONTACT_URL}
                            className="bg-primary hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold text-white shadow-sm transition-colors"
                          >
                            Agendar conversa gratuita
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        'flex w-full flex-col',
                        msg.type === 'user' ? 'items-end' : 'items-start'
                      )}
                    >
                      <div
                        className={cn(
                          'relative max-w-[85%] rounded-2xl border px-4 py-3 text-[14px] font-medium shadow-sm',
                          msg.type === 'user'
                            ? [
                                'border-whatsapp-border',
                                'bg-whatsapp-out',
                                'text-slate-900',
                                'rounded-tr-none',
                              ]
                            : [
                                'border-border/50',
                                'bg-white',
                                'text-slate-800',
                                'rounded-tl-none',
                              ]
                        )}
                      >
                        <p className="leading-relaxed whitespace-pre-wrap">
                          {formatText(msg.text)}
                        </p>

                        {msg.buttons && (
                          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-2">
                            {msg.buttons.map((btn, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleChoiceClick(btn)}
                                disabled={!waitingForChoice}
                                className={cn(
                                  'w-full text-center text-[14px] font-bold transition-colors',
                                  waitingForChoice
                                    ? 'cursor-pointer text-[#00a884] hover:text-[#008f6f] hover:underline'
                                    : 'cursor-default text-slate-400'
                                )}
                              >
                                {btn}
                              </button>
                            ))}
                          </div>
                        )}

                        <span className="float-right mt-2 ml-3 flex items-center gap-1 text-[10px] font-semibold text-slate-400">
                          {mounted ? msg.time : '--:--'}
                          {msg.type === 'user' && (
                            <CheckCheck className="h-3 w-3 text-blue-500" />
                          )}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex w-full flex-col items-start"
                  >
                    <div className="border-border/50 rounded-2xl rounded-tl-none border bg-white px-4 py-3 shadow-sm">
                      <div className="flex h-4 items-center gap-1.5">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: 0,
                          }}
                          className="bg-primary h-2 w-2 rounded-full opacity-60"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: 0.2,
                          }}
                          className="bg-primary h-2 w-2 rounded-full opacity-60"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            delay: 0.4,
                          }}
                          className="bg-primary h-2 w-2 rounded-full opacity-60"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="border-border absolute bottom-0 z-40 w-full border-t bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <button
                    className="hover:text-primary text-slate-400 transition-colors"
                    aria-label="Anexar"
                  >
                    <Plus className="h-6 w-6" />
                  </button>
                  <div className="border-border flex h-10.5 flex-1 items-center rounded-full border bg-white px-4 transition-all focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/30">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleFreeTyping()}
                      placeholder="Digite algo e veja a IA responder..."
                      aria-label="Digite uma mensagem para testar a IA"
                      className="w-full bg-transparent text-[14px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                      autoComplete="off"
                    />
                  </div>

                  <button
                    onClick={handleFreeTyping}
                    disabled={isSimulating || waitingForChoice}
                    aria-label={
                      inputValue.trim() ? 'Enviar mensagem' : 'Gravar áudio'
                    }
                    className={cn(
                      'group flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300',
                      inputValue.trim()
                        ? 'bg-emerald-500 hover:bg-emerald-600'
                        : 'bg-emerald-500/90 hover:bg-emerald-500 disabled:opacity-50'
                    )}
                  >
                    {inputValue.trim() ? (
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110" />
                    ) : (
                      <Mic className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
