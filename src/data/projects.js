import loja from "../assets/images/projects/lojaMateriais.png";
import pokedex from "../assets/images/projects/pokedex.png";
import clima from "../assets/images/projects/ConsultaClima.png";
import restaurante from "../assets/images/projects/Restaurante.png";
import financeFlow from "../assets/images/projects/FinanceFlow.png";

const projects = [
  {
    id: 1,
    title: "Gerenciamento Financeiro - FinanceFlow",
    description:
      "Aplicação web completa de gerenciamento financeiro pessoal para gerenciar as despesas e receitas.",
    techs: ["React", "Vite", "JavaScript", "Tailwind CSS", "React Router DOM", "Context API", "Recharts", "Axios", "UUID"],
    image: financeFlow,
    demo: "https://gerenciamento-financeiro-six.vercel.app/",
    github: "https://github.com/EldenXLe/Gerenciamento-Financeiro",
  },

  {
    id: 2,
    title: "Landing Page - Loja de Materiais",
    description:
      "Landing page moderna desenvolvida para uma loja de materiais, com foco em apresentação de produtos, organização visual e experiência do usuário.",
    techs: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    image: loja,
    demo: "https://landing-materials.vercel.app",
    github: "https://github.com/EldenXLe/LandingMaterials",
  },
  {
    id: 3,
    title: "Pokédex",
    description:
      "Aplicação que consome a PokéAPI para listar e exibir informações de Pokémon, demonstrando integração com API e manipulação dinâmica de dados.",
    techs: ["JavaScript", "CSS", "API REST"],
    image: pokedex,
    demo: "https://pokedex-rho-khaki-63.vercel.app",
    github: "https://github.com/EldenXLe/Pokedex",
  },
  {
    id: 4,
    title: "Landing Page - Restaurante",
    description:
      "Landing page desenvolvida para um restaurante, com destaque para cardápio, localização e informações de contato em uma interface moderna e fluida.",
    techs: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    image: restaurante,
    demo: "https://modelo-restaurantes.vercel.app",
    github: "https://github.com/seuusuario/projeto",
  },
];

export default projects;