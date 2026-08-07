# Portfólio — Pablo Victor Borges

Site pessoal / portfólio profissional de **Pablo Victor Borges**, Analista de Infraestrutura e Segurança de TI, com foco em Cloud, Zero Trust e ecossistema Microsoft 365.

🔗 **Site publicado:** `https://SEU-USUARIO.github.io` *(atualize este link depois do deploy)*

## 📋 Sobre o projeto

Site em página única (single page) apresentando:

- Apresentação e destaques de resultados
- Experiência profissional
- Principais realizações
- Competências técnicas
- Formulário de contato

## 🛠️ Tecnologias utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização
- [Lucide React](https://lucide.dev/) — ícones

## 💻 Rodando o projeto localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior instalado.

```bash
# Clonar o repositório
git clone https://github.com/SEU-USUARIO/SEU-USUARIO.github.io.git
cd SEU-USUARIO.github.io

# Instalar as dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

O site abrirá em `http://localhost:5173`.

Para gerar a build de produção localmente:

```bash
npm run build
npm run preview
```

## 🚀 Deploy

O deploy é **automático**: a cada `git push` na branch `main`, o GitHub Actions (veja `.github/workflows/deploy.yml`) compila o projeto e publica no GitHub Pages.

Para habilitar (só precisa fazer uma vez):

1. No GitHub, vá em **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Pronto — o próximo push já vai publicar o site

## 📁 Estrutura do projeto

```
├── .github/workflows/deploy.yml   # Automação de deploy
├── public/                        # Arquivos estáticos
├── src/
│   ├── pages/
│   │   └── Home.tsx                # Página principal do portfólio
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                   # Import do Tailwind CSS
├── index.html
├── vite.config.ts
└── package.json
```

## 📧 Contato

- **E-mail:** pablovictorsantos01@gmail.com
- **Telefone/WhatsApp:** (11) 99858-7409
- **Localização:** São Paulo, SP

---

Feito com 💙 por Pablo Victor Borges.
