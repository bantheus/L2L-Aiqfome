[TYPESCRIPT__BADGE]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[NEXT__BADGE]: https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white
[TAILWINDCSS__BADGE]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[ZUSTAND__BADGE]: https://img.shields.io/badge/Zustand-FF9800?style=for-the-badge&logo=zustand&logoColor=white
[LUCIDE__BADGE]: https://img.shields.io/badge/Lucide-000?style=for-the-badge&logo=lucide&logoColor=white

# 🥡 Cardápio Digital - desafio aiqfome

![NEXT][NEXT__BADGE]
![TAILWINDCSS][TAILWINDCSS__BADGE]
![TYPESCRIPT][TYPESCRIPT__BADGE]
![ZUSTAND][ZUSTAND__BADGE]
![LUCIDE][LUCIDE__BADGE]

---

Este é um projeto para o desafio do aiqfome, simulando um sistema de delivery com cardápio digital, carrinho e fluxo de compra, desenvolvido com [Next.js 15 (App Router)](https://nextjs.org/) e [TypeScript](https://www.typescriptlang.org/).

---

## 🔍 Visão geral

A proposta do projeto é simular a experiência de um usuário navegando por restaurantes, visualizando cardápios, personalizando produtos e finalizando pedidos em um carrinho persistente. Todos os dados são mockados e não há backend real.

---

## 🎨 Design System

O projeto conta com um design system, baseado em princípios de atomic design e inspirado em sistemas modernos de UI. Os principais pontos são:

- **Componentização:** Todos os elementos de interface (botões, inputs, badges, cards, etc) são componentes reutilizáveis, localizados em `components/ui/`.
- **Consistência visual:** Utilização de tokens de cor, espaçamento e tipografia via Tailwind CSS, garantindo identidade visual e responsividade.
- **Acessibilidade:** Componentes com foco em acessibilidade (uso de `aria-*`, foco visível, contraste, navegação por teclado).
- **Extensibilidade:** Fácil de adicionar novos componentes ou variantes, mantendo a base escalável.
- **Ícones:** Uso do Lucide para ícones modernos e personalizáveis.
- **Exemplo de componentes:**
  - `Button`, `Input`, `Checkbox`, `RadioGroup`, `Dialog`, `Accordion`, `Badge`, `Separator`, etc.
- **Padronização:** Todos os componentes seguem convenções de props, estados e estilos, facilitando manutenção e evolução.

---

## 🌐 Deploy

https://l2-l-aiqfome.vercel.app/

## 🚀 Funcionalidades

- ✅ Listagem de restaurantes abertos e fechados
- 📋 Visualização de cardápio por restaurante
- 🍔 Detalhes de produtos (pratos, bebidas, acompanhamentos, extras, talheres)
- ➕ Adição de produtos ao carrinho com customização
- 🛒 Carrinho persistente (localStorage)
- 💰 Cálculo dinâmico de preço total
- 📱 Interface responsiva e acessível

---

## 🧪 Tecnologias utilizadas

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Gerenciamento de estado:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Formulários:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## ⚙️ Como rodar localmente

### ✅ Pré-requisitos

- Node.js 20+
- Um gerenciador de pacotes (npm, yarn ou pnpm)

### 🛠️ Passos para rodar

```bash
# 1. Clone o repositório
git clone https://github.com/bantheus/L2L-Aiqfome.git
cd L2L-Aiqfome

# 2. Instale as dependências
npm install

# 3. Rode o servidor local
npm run dev

# 4. Acesse em:
http://localhost:3000
```

---

## 🗂️ Estrutura do projeto (resumo)

```bash
/
├── app/                  # Páginas e rotas do Next.js
├── components/           # Componentes reutilizáveis (UI, header, footer, etc)
├── hooks/                # Hooks customizados
├── lib/                  # Funções utilitárias
├── mock/                 # Dados mockados
├── public/               # Imagens, ícones e assets
├── store/                # Zustand store do carrinho
└── ...
```

## 📍 Rotas da aplicação

| rota                                               | descrição               |
| -------------------------------------------------- | ----------------------- |
| <kbd>/</kbd>                                       | Home, busca e banners   |
| <kbd>/restaurantes/[id]</kbd>                      | Cardápio do restaurante |
| <kbd>/restaurantes/[id]/produtos/[produtoId]</kbd> | Detalhe do produto      |
| <kbd>/carrinho</kbd>                               | Carrinho de compras     |

## 👽 Desenvolvido por

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/70174902?v=4" width="100px;" alt="Matheus Schmidt"/><br>
        <sub>
          <b>Matheus Schmidt</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
