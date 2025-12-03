# Academia Performance - Landing Page

Uma landing page moderna e de alta performance para Academia Performance, focada em conversão de leads e SEO. A página apresenta as modalidades, planos e diferenciais da academia com design dark mode e otimização para Google Lighthouse 95+.

## 🎯 Objetivo

Transformar visitantes em alunos através de uma experiência web envolvente, com foco em conversão através de CTAs estratégicos para WhatsApp.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **Tailwind CSS** - Framework CSS via CDN para prototipagem rápida
- **JavaScript ES6+** - Funcionalidades interativas e otimizações
- **Google Fonts (Inter)** - Tipografia profissional e otimizada
- **Imagens AI** - Imagens geradas por IA para demonstração

## 📱 Características

### Design
- **Dark Mode** - Tema escuro moderno e profissional
- **Mobile-First** - Design responsivo com breakpoints padrão Tailwind
- **Cores**: Preto (#000000), Cinza Chumbo (#1a1a1a, #2d2d2d), Amarelo/Verde Neon (#ffff00, #00ff00)
- **Tipografia**: Inter (400, 600, 700) via Google Fonts

### Performance
- **Lighthouse 95+** - Otimizado para todas as métricas Core Web Vitals
- **Carregamento Rápido** - Imagens otimizadas, CSS/JS minificados
- **SEO Completo** - Meta tags, schema markup, URLs amigáveis
- **Acessibilidade WCAG 2.1 AA** - Contraste adequado, navegação por teclado

### Funcionalidades
- **Navegação Smooth Scroll** - Transições suaves entre seções
- **Menu Mobile** - Hambúrguer com animações suaves
- **Animações de Scroll** - Elementos aparecem ao rolar
- **Lazy Loading** - Imagens carregadas sob demanda
- **WhatsApp Integration** - CTAs diretos para WhatsApp Business

## 📋 Seções da Landing Page

1. **Header/Navbar** - Logo, navegação com scroll suave e CTA principal
2. **Hero Section** - Headline impactante, subtítulo e botão CTA com background otimizado
3. **Sobre/Diferenciais** - Apresentação da academia com ícones destacando modalidades
4. **Modalidades** - Cards interativos de musculação e jiu-jitsu
5. **Grade de Horários** - Tabela responsiva de horários das aulas
6. **Planos de Preço** - Cards de preços com destaque para plano mais vantajoso
7. **Footer** - Informações de contato, endereço e redes sociais

## 🎯 Fluxo do Usuário

1. Usuário acessa a landing page
2. Visualiza hero section com CTA principal
3. Scroll para explorar modalidades e diferenciais
4. Verifica grade de horários disponíveis
5. Analisa planos de preços
6. Clica em CTA para WhatsApp para matrícula

## 🚀 Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação
1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `index.html` em seu navegador
3. Ou use um servidor web local para melhor experiência de desenvolvimento

### Desenvolvimento
```bash
# Usando Python (se disponível)
python -m http.server 8000

# Usando Node.js (se disponível)
npx serve .

# Usando PHP (se disponível)
php -S localhost:8000
```

## 📁 Estrutura de Arquivos

```
academia-performance/
├── index.html              # Landing page completa
├── assets/
│   ├── css/
│   │   └── custom.css      # Estilos adicionais e animações
│   ├── js/
│   │   └── main.js         # JavaScript funcionalidades
│   └── img/                # Imagens otimizadas (se houver)
└── README.md              # Documentação
```

## 🎨 Personalização

### Cores
Edite as classes Tailwind no `index.html` para alterar cores:
- `bg-yellow-400` - Fundo amarelo
- `text-yellow-400` - Texto amarelo
- `bg-gray-900` - Fundo cinza escuro

### Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua URLs no `index.html` ou adicione imagens na pasta `assets/img/`
- **Links WhatsApp**: Atualize os números de telefone nos links `wa.me`

### Informações de Contato
Atualize as informações no footer:
- Endereço: Linha 382-387 no `index.html`
- Telefone: Links `wa.me` em todo o documento
- Email: Linha 385 no `index.html`

## 📊 Otimizações de Performance

### Implementadas
- ✅ CSS crítico inline
- ✅ JavaScript deferido
- ✅ Imagens com lazy loading
- ✅ Fontes otimizadas com `font-display: swap`
- ✅ Meta tags SEO completas
- ✅ Schema markup para local business

### Métricas Alvo (Lighthouse)
| Métrica | Target Score |
|---------|--------------|
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

## 🔧 Funcionalidades JavaScript

### Navegação
- **Smooth Scroll**: Transições suaves entre seções
- **Header Fixo**: Navbar permanece visível ao rolar
- **Menu Mobile**: Toggle com animações suaves

### Animações
- **Fade In**: Elementos aparecem ao rolar (Intersection Observer)
- **Parallax**: Efeito parallax na hero section
- **Hover Effects**: Transições suaves em cards e botões

### Performance
- **Lazy Loading**: Imagens carregadas sob demanda
- **Preload**: Imagens críticas pré-carregadas
- **Debounced Scroll**: Otimização de eventos de scroll

## 📱 Responsividade

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px

### Mobile-First
- Touch-friendly com áreas de clique mínimas 44x44px
- Fontes legíveis em todas as resoluções
- Menu hambúrguer em telas pequenas
- Tabelas responsivas com scroll horizontal

## 🔒 Acessibilidade

### Implementações
- ✅ Contraste WCAG 2.1 AA
- ✅ Navegação por teclado
- ✅ Atributos ARIA onde necessário
- ✅ Textos alternativos em imagens
- ✅ Estrutura semântica HTML5
- ✅ Suporte a modo de alto contraste
- ✅ Suporte a preferência de movimento reduzido

## 📞 Integração WhatsApp

Todos os CTAs redirecionam para WhatsApp com mensagem pré-preenchida:

```
https://wa.me/[numero]?text=[mensagem_pre_definida]
```

### Exemplos de Mensagens
- **Matrícula**: "Olá! Gostaria de me matricular na academia."
- **Planos**: "Olá! Gostaria de saber mais sobre os planos disponíveis."
- **Horários**: "Olá! Gostaria de saber mais sobre os horários disponíveis."

## 🌐 Meta Tags

### Meta Tags Implementadas
- **Title**: Otimizado com palavras-chave locais
- **Description**: Resumo com diferenciais e localização
- **Keywords**: Academia, musculação, jiu-jitsu, Ipameri, Goiás
- **Open Graph**: Para compartilhamento social
- **Twitter Card**: Para compartilhamento no Twitter
- **Schema Markup**: Para local business 

---

**Desenvolvido com ❤️ para Academia Performance**