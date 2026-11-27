// the stack around React: names for the list, icon ids for the diagram (files in public/kit/icons)
const techs = [
  { name: "React", line: "Componentes, hooks, React Router e Context API." },
  { name: "JavaScript", icon: "javascript", line: "ES6+, DOM e APIs REST com Axios; a Pokédex é JS puro." },
  { name: "HTML e CSS", icon: "html", line: "Marcação semântica e design responsivo." },
  { name: "Tailwind CSS", icon: "tailwindcss", line: "Estilo das landing pages e do FinanceFlow." },
  { name: "Vite", icon: "vitejs", line: "Ambiente e build dos projetos em React, com ESLint." },
  { name: "Git e GitHub", icon: "github", line: "Branches e pull requests em cada repositório." },
  { name: "Vercel", icon: "vercel", line: "Deploy de cada projeto, todos com link aberto." },
];

export const studying = "TypeScript, Node.js, Express, Prisma e PostgreSQL";

export const stackDiagram = {
  layout: "hub",
  alt: "React no centro, ligado a JavaScript, HTML e CSS, Tailwind CSS, Vite, GitHub e Vercel.",
  center: { label: "React", icon: "react" },
  spokes: techs.filter((t) => t.icon).map((t) => ({ label: t.name, icon: t.icon })),
};

export default techs;
