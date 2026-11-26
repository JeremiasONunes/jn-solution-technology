# JNunes Tech Tecnológicas — Landing Page

Landing page institucional da **JNunes Tech Tecnológicas**: infraestrutura de TI, suporte técnico e desenvolvimento de soluções digitais. Frontend estático, com o WhatsApp como canal principal de conversão.

## Stack

| Ferramenta | Uso |
|---|---|
| React 19 + Vite 8 | Aplicação e build |
| Tailwind CSS v4 (`@tailwindcss/vite`) | Estilos, sem `tailwind.config.js` (tokens em CSS via `@theme`) |
| Lucide React | Ícones |
| Google Fonts | Roboto (títulos e texto) |
| Oxlint | Lint |

Não há backend, banco de dados nem biblioteca de animação.

## Executar localmente

Requer Node.js 20.19+ (ou 22.12+).

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # build de produção em dist/
npm run preview   # serve o build localmente
npm run lint      # verificação de código
```

## ⚠️ Antes de publicar

Edite [`src/config/site.js`](src/config/site.js):

| Campo | O que preencher |
|---|---|
| `whatsapp` | Número da empresa, só dígitos: `55` + DDD + número. Configurado: `5535998500813` — (35) 99850-0813. |
| `email` | Opcional. Quando preenchido, aparece no rodapé. |
| `location` | Opcional. Cidade/região exibida no rodapé. |
| `communityLinks` | Grupos de ofertas (lançamento futuro). Hoje a seção mostra "Em breve". Ao lançar, preencha `whatsappGroup` (`https://chat.whatsapp.com/...`) e `telegram` (`https://t.me/...`) e troque `launched` para `true`. |

As mensagens iniciais do WhatsApp ficam no mesmo arquivo (`whatsappMessages`).

Em [`index.html`](index.html), há um bloco comentado com `canonical`, `og:url` e `og:image` para preencher quando o domínio estiver definido.

## Estrutura

```text
public/
  favicon.ico          escudo JN em 16/32/48px (ícone da aba e do Google)
  favicon-48.png       escudo JN 48px
  favicon-96.png       escudo JN 96px
  apple-touch-icon.png escudo JN 180px com fundo branco (iPhone e logo no JSON-LD)
  jn-logo-mark.png     escudo JN (usado no header e no chat)
  jn-logo-shield.png   logo completa (escudo + nome)
src/
  config/site.js       nome, WhatsApp, mensagens, navegação, getWhatsAppLink()
  data/
    services.js        os três serviços (cards, rodapé e atalhos de contato)
    company.js         destaques do Hero, pilares, etapas e diferenciais
    cases.js           cases de desenvolvimento (RestroGestão, Conta Que Vai)
    chatbot.js         roteiro do assistente, necessidades e mensagem final
  hooks/
    useChatFlow.js       máquina de estados do assistente
    useActiveSection.js  seção visível → link ativo no menu
    useInView.js         entrada progressiva ao rolar
    useScrolled.js       muda o header após rolar
  components/
    Header.jsx  Footer.jsx  Logo.jsx  Container.jsx
    SectionTitle.jsx  ServiceCard.jsx  BenefitCard.jsx  CaseCard.jsx
    Reveal.jsx         wrapper de animação de entrada
    WhatsAppLink.jsx   link padrão (nova aba + rel de segurança)
    icons/             glifos do WhatsApp e do Telegram
    ExternalLink.jsx   link externo padrão (nova aba + rel de segurança)
    chat/              assistente de pré-atendimento (widget, janela, mensagens, resumo)
    buttonStyles.js    variantes de botão
  sections/
    Hero.jsx  Services.jsx  Cases.jsx  About.jsx  Benefits.jsx  Contact.jsx  Offers.jsx
  styles/globals.css   tokens (@theme), base, animações, reduced motion
  App.jsx  main.jsx
```

Para editar textos, prefira os arquivos de `config/` e `data/`; as seções só cuidam da apresentação.

## Cases

Os projetos ficam em [`src/data/cases.js`](src/data/cases.js). Para adicionar um novo, coloque a captura (WebP, ~1600px de largura + versão de 800px) em `src/assets/images/` e inclua um objeto com a mesma forma do RestroGestão. Use apenas informações reais do projeto.

## Assistente de atendimento

O botão flutuante (ícone do WhatsApp) abre uma janela de chat que conduz o visitante em etapas:

1. **Nome** (obrigatório)
2. **Necessidade**: Manutenção, Infraestrutura, Site/sistema/automação ou Outro assunto
3. **Descrição** breve (10 a 500 caracteres)
4. **Resumo** com a solução indicada, baseada nos serviços de `src/data/services.js`

Ao final, o botão "Enviar resumo pelo WhatsApp" abre o WhatsApp com a mensagem pronta; o visitante revisa e envia. Não há backend: nada é armazenado. Textos, opções e formato da mensagem ficam em [`src/data/chatbot.js`](src/data/chatbot.js).

## Identidade visual

A paleta da marca coincide com tokens nativos do Tailwind, então as classes padrão já são as cores da marca:

| Cor | Hex | Classe |
|---|---|---|
| Fundo | `#080F1E` | `bg-ink` (token próprio) |
| Superfícies | `#111827` | `gray-900` |
| Ação | `#2563EB` | `blue-600` |
| Interação | `#3B82F6` | `blue-500` |
| Detalhes | `#60A5FA` | `blue-400` |
| Texto secundário | `#94A3B8` | `slate-400` |

## Acessibilidade e SEO

- `lang="pt-BR"`, title, meta description, `theme-color` e Open Graph básico.
- Um único `h1`; seções com `h2` ligados por `aria-labelledby`.
- Link "Pular para o conteúdo", foco visível em todos os elementos interativos.
- Menu mobile com `aria-expanded`, fecha com `Esc` (devolvendo o foco), ao clicar num link e ao chegar ao layout desktop; fica `inert` quando fechado.
- Links externos anunciam a abertura em nova aba para leitores de tela.
- Animações desativadas com `prefers-reduced-motion`.

## Publicar na Vercel

1. Suba o projeto para um repositório no GitHub, GitLab ou Bitbucket.
2. Na Vercel, **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite automaticamente:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Clique em **Deploy**.

O [`vercel.json`](vercel.json) já define build e saída, cache de longo prazo para `/assets` (arquivos com hash) e cabeçalhos básicos de segurança. Também é possível publicar pela CLI com `npx vercel` na raiz do projeto.

## Domínio e Google

Domínio principal: **https://jnsolucoestecnologicas.com.br** (sem www; o www redireciona para ele).

O código já inclui: URL canônica, Open Graph com imagem de prévia (`public/og-image.jpg`), dados estruturados (JSON-LD) no `index.html`, `public/robots.txt` e `public/sitemap.xml`. Se o domínio mudar, atualize esses quatro lugares.

**Vercel:** Project → Settings → Domains → adicionar `jnsolucoestecnologicas.com.br` e `www.jnsolucoestecnologicas.com.br`, configurando o www para redirecionar ao domínio sem www.

**Hostinger (DNS):** Domínios → DNS / Nameservers → remover os registros A/AAAA/CNAME padrão de `@` e `www` e criar os que a Vercel indicar (normalmente `A @ 76.76.21.21` e `CNAME www cname.vercel-dns.com`).

**Google Search Console:** adicionar propriedade do tipo *Domínio*, verificar com o registro TXT na Hostinger e enviar `sitemap.xml` em Sitemaps. Depois, em Inspeção de URL, solicitar a indexação da página inicial.

Ao publicar mudanças relevantes de conteúdo, atualize o `<lastmod>` do `sitemap.xml`.
