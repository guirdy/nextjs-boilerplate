# Next.js 15 Boilerplate

Boilerplate para aplicações **Next.js 15** com as seguintes configurações:

- **SEO** configurado.
- **Internacionalização (i18n)**.
- **Tema Light/Dark** alternável com Tailwind CSS.
- **Shadcn UI Components** para interface.
- **Tailwind CSS** configurado.
- **Layout Padrão** com cabeçalho, conteúdo e rodapé.
- **pnpm** gerenciador de pacotes

## Tecnologias

- **Next.js 15**
- **Typescript**
- **Tailwind CSS**
- **Shadcn UI**
- **i18n**
- **ESLint** e **Prettier**

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/guirdy/nextjs-boilerplate.git
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   pnpm dev
   ```

4. Acesse em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
/src                        
  └── /pages                 # Páginas do Next.js
  └── /public                # Arquivos públicos (imagens)
  └── /locales               # Traduções (i18n)
      └── /en/common.json    # Traduções (English)
      └── /pt/common.json    # Traduções (Português)
  └── /styles                # Estilos globais
      └── globals.css        # Estilos globais
  └── /components            # Componentes reutilizáveis
      └── Layouts/Default.ts # Layout padrão
      └── ThemeModeToggle.ts # Alternância de tema
      └── /ui                # Shadcn componentes

```

Desenvolvido por [Guilherme Leandro](https://github.com/guirdy)
