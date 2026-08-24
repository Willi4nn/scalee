# Contexto do Projeto
Stack: Astro, React, Tailwind CSS v4, TypeScript, Vite.
Arquitetura: Astro Islands (Estático por padrão, React apenas para interatividade).

# Regras de Arquitetura (Astro vs React)
1. Single Responsibility Principle (SRP): Separe lógica de apresentação de dados.
2. Componentes Puramente Visuais/Estáticos: DEVEM ser escritos em `.astro` (ex: Footers, Headers estáticos, Grids de texto, Seções de Sobre). Nunca envie JavaScript desnecessário ao cliente.
3. Componentes Interativos: DEVEM ser `.tsx` (React) apenas se usarem hooks (`useState`, `useEffect`), WebGL/OGL, framer-motion complexo ou manipulação do DOM.
4. Ao usar componentes `.tsx` dentro de `.astro`, SEMPRE utilize as diretivas de hidratação (ex: `client:only="react"`, `client:load`, `client:visible`).

# Clean Code & SOLID
1. DRY (Don't Repeat Yourself): Elimine códigos duplicados. Extraia padrões repetitivos de UI para componentes reaproveitáveis (ex: `SectionHeader.astro` para títulos de seções).
2. DRY Utilitários: Mantenha apenas uma função de união de classes (`cn` combinando `clsx` e `tailwind-merge`) em `src/lib/utils.ts`. Exclua arquivos redundantes como `classNames.ts`.
3. Tipagem Estrita: O arquivo `src/data/content.ts` DEVE ter suas estruturas de dados exportadas com interfaces claras (ex: `interface Testimonial { ... }`) e usar `as const` quando apropriado para inferência literal.
4. Nomenclatura: Use nomes descritivos em inglês ou português de forma consistente. PascalCase para componentes, camelCase para variáveis/funções.

# Boas Práticas Tailwind CSS v4
1. Proibido o uso de Magic Numbers e Arbitrary Values excessivos (ex: `bg-[#0B0B14]`).
2. Valores hexadecimais repetidos DEVEM ser extraídos para o bloco `@theme` no arquivo `src/styles/global.css` (ex: `--color-surface-dark: #0b0b14`) e consumidos através de classes utilitárias (ex: `bg-surface-dark`).
3. Use o utilitário `cn()` para classes dinâmicas e condicionais. Não concatene strings manualmente.
4. Para variações complexas de componentes (como `Button.tsx`), utilize bibliotecas como `class-variance-authority` (CVA) ou mapeamento de objetos para evitar condicionais complexas e encadeadas.

# Regra Mestre de Refatoração
Sempre que alterar um arquivo, aplique o "Escoteiro": deixe o código mais limpo do que encontrou. Se detectar imports não utilizados ou tipagens implícitas de `any`, corrija-os silenciosamente.
