// from the 2026 resume (curriculo_leandro_rodrigues_2026.pdf)
const experiences = [
  {
    id: "oficina",
    role: "Analista de suporte técnico, sistemas ERP",
    company: "Oficina Inteligente",
    period: "Out 2023 – Mai 2026",
    tasks: [
      "Investigava falhas no ERP de oficinas e borracharias até a causa, incluindo integrações via API, bases de dados e lotes.",
      "Resolvia ocorrências de emissão fiscal (SEFAZ, CFOP, NF-e e NFS-e) e parametrizava vendas, estoque, financeiro e DRE.",
    ],
  },
  {
    id: "poupatempo",
    role: "Atendente multifunções",
    company: "Poupatempo",
    period: "Nov 2022 – Jul 2023",
    tasks: ["Conferia documentos e registrava RG, CNH e transferências de veículos em sistemas internos."],
  },
  {
    id: "concentrix",
    role: "Suporte técnico L2",
    company: "Concentrix Brasil",
    period: "Mai 2022 – Nov 2022",
    tasks: ["Diagnosticava e isolava incidentes em computadores, celulares e sistemas, documentando cada solução."],
  },
  {
    id: "valid",
    role: "Assistente administrativo (aprendiz)",
    company: "Valid",
    period: "Abr 2019 – Abr 2021",
    tasks: ["Controlava e atualizava dados em sistemas internos e acompanhava solicitações administrativas."],
  },
];

export const education = [
  { course: "Análise e Desenvolvimento de Sistemas", school: "Universidade Cruzeiro do Sul", year: "2021" },
  { course: "Gestão da Tecnologia da Informação", school: "UNINTER", year: "2026" },
];

export const courses = [
  {
    group: "Alura",
    items:
      "React com JavaScript e com TypeScript, JavaScript para Web, manipulação do DOM, consumo de APIs, métodos de array, HTML5 e CSS3, Git e GitHub, UX",
  },
  {
    group: "Outros",
    items: "Microsoft Dynamics 365 (Minsait), SAP S/4HANA Simple Finance (GPLUX), TIC (SENAI), inglês (CNA)",
  },
];

export default experiences;
