# Portfólio — Leandro Rodrigues

Meu portfólio de desenvolvedor front-end: apresentação, tecnologias, projetos com links de demo e código, experiência profissional e contato.

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

**Site:** [meu-portfolio-leandro-rodrigues.vercel.app](https://meu-portfolio-leandro-rodrigues.vercel.app)

![Página inicial do portfólio](docs/desktop.png)

## Destaques técnicos

- **Componentes por responsabilidade:** `layout/` (Header, Footer), `sections/` (Hero, About, Tech, Projects, Experience, Contact) e `ui/` (Button, ProjectCard, TechBadge, SectionTitle).
- **Conteúdo separado da interface:** projetos, tecnologias e experiências ficam em `src/data/`. Para adicionar um projeto, basta incluir um objeto em `projects.js`.
- Animações de rolagem com AOS.
- Estilização em CSS puro, com layout responsivo.

## Estrutura

```
src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/        # projects.js, techs.js, experiences.js
└── styles/
```

## Como executar

```bash
git clone https://github.com/EldenXLe/Meu-Portfolio-Leandro-Rodrigues.git
cd Meu-Portfolio-Leandro-Rodrigues
npm install
npm run dev
```

## Contato

[LinkedIn](https://www.linkedin.com/in/leandrorodrigues-dev/) · [GitHub](https://github.com/EldenXLe)
