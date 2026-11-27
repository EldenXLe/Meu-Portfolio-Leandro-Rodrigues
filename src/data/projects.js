import financeFlow from "../assets/images/projects/financeflow.png";
import loja from "../assets/images/projects/lojaMateriais.png";
import restaurante from "../assets/images/projects/Restaurante.png";
import clima from "../assets/images/projects/ConsultaClima.png";
import pokedex from "../assets/images/projects/pokedex.png";

const projects = [
  {
    id: "financeflow",
    title: "FinanceFlow",
    kind: "Controle financeiro",
    description:
      "Dashboard com gráficos mensais, transações com filtros, importação de extratos OFX com categorização automática, exportação para CSV e rotas protegidas.",
    techs: ["React", "Vite", "Tailwind CSS", "React Router", "Context API", "Recharts", "Axios"],
    image: financeFlow,
    demo: "https://gerenciamento-financeiro-six.vercel.app/",
    github: "https://github.com/EldenXLe/Gerenciamento-Financeiro",
  },
  {
    id: "materiais",
    title: "Loja de Materiais",
    kind: "Landing page",
    description:
      "Landing page para loja de materiais de construção, com vitrine de produtos e pedido de orçamento pelo WhatsApp.",
    techs: ["React", "Vite", "Tailwind CSS"],
    image: loja,
    demo: "https://landing-materials.vercel.app",
    github: "https://github.com/EldenXLe/LandingMaterials",
  },
  {
    id: "restaurante",
    title: "Restaurante",
    kind: "Landing page",
    description:
      "Modelo de site para restaurantes com cardápio, pedidos pelo WhatsApp e mapa de localização.",
    techs: ["React", "Vite", "Tailwind CSS"],
    image: restaurante,
    demo: "https://modelo-restaurantes.vercel.app",
    github: "https://github.com/EldenXLe/LandingRestaurant",
  },
  {
    id: "clima",
    title: "Consulta Clima",
    kind: "API OpenWeather",
    description:
      "Clima da localização atual e busca por cidade, consumindo a API de previsão do tempo da OpenWeather.",
    techs: ["React", "Tailwind CSS", "API REST"],
    image: clima,
    demo: "https://consulta-clima-ten.vercel.app",
    github: "https://github.com/EldenXLe/Consulta-Clima",
  },
  {
    id: "pokedex",
    title: "Pokédex",
    kind: "PokéAPI",
    description:
      "Lista paginada de Pokémon com detalhes e cadeia de evolução, em JavaScript puro consumindo a PokéAPI.",
    techs: ["JavaScript", "CSS", "API REST"],
    image: pokedex,
    demo: "https://pokedex-rho-khaki-63.vercel.app",
    github: "https://github.com/EldenXLe/Pokedex",
  },
];

export default projects;
