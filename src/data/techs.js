// the stack around React: names for the list, icon ids for the diagram (files in public/kit/icons)
const techs = [
  { name: "React", line: "Componentes, hooks e Context API em todos os apps." },
  { name: "JavaScript", icon: "javascript", line: "Lógica e consumo de APIs; a Pokédex é JS puro." },
  { name: "HTML e CSS", icon: "html", line: "Marcação semântica e layouts com grid e flexbox." },
  { name: "Tailwind CSS", icon: "tailwindcss", line: "Estilo das landing pages e do FinanceFlow." },
  { name: "Vite", icon: "vitejs", line: "Ambiente e build de todos os projetos em React." },
  { name: "Git e GitHub", icon: "github", line: "Branches e pull requests em cada repositório." },
  { name: "Vercel", icon: "vercel", line: "Deploy de cada projeto, todos com link aberto." },
];

export const stackDiagram = {
  layout: "hub",
  alt: "React no centro, ligado a JavaScript, HTML e CSS, Tailwind CSS, Vite, GitHub e Vercel.",
  center: { label: "React", icon: "react" },
  spokes: techs.filter((t) => t.icon).map((t) => ({ label: t.name, icon: t.icon })),
};

export default techs;
