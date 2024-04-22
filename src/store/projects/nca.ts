import { SiNextdotjs, SiPostgresql, SiReact, SiSequelize, SiStyledcomponents, SiTypescript, SiExpress, SiBootstrap } from "react-icons/si";
import ncaMain from "../../assets/images/nca-main.webp";
import { PSQL_COLOR, REACT_COLOR, SC_COLOR, SQLZ_COLOR, TS_COLOR, BS_COLOR } from "../../constants";
import Project from "../../types/Project";

export default  {
  name: "NCA Parts",
  desc: "Ecommerce made for NCA Parts",
  repo: "https://github.com/lik3as/ncaparts",
  img: ncaMain,
  stack: {
    front: [
      {Icon: SiNextdotjs, color: "black", title: "Next.js"}, {Icon: SiReact, color: REACT_COLOR, title: "React"},
      {Icon: SiTypescript, color: TS_COLOR, title: "Typescript"}, {Icon: SiStyledcomponents, color: SC_COLOR, title: "Styled-Components"},
      {Icon: SiBootstrap, color: BS_COLOR, title: "Bootstrap"}
    ],
    back: [
      {Icon: SiPostgresql, color: PSQL_COLOR, title: "PostgreSQL"}, {Icon: SiSequelize, color: SQLZ_COLOR, title: "Sequelize ORM"},
      {Icon: SiExpress, color: "black", title: "Express.js"}
    ]
  },
  sections: [
    {
      id: "frontend",
      title: "Front-end",
      content: "O visual foi inspirado em diversos e-commerces de sucesso, visando sempre a simplicidade para melhor experiência do usuário. " +
      "O motivo de ter escolhido o Next.js como framework, foi a sua eficiência e total suporte a renderização no lado do servidor (SSR), que é " +
      "uma metodologia crucial quando se faz necessário o melhor uso do SEO, que é o caso. Next.js faz uso do React como lib de UI, e a escolha " +
      "do typescript foi algo pessoal pois acho uma linguagem bem mais segura para se trabalhar com. Styledcomponents também foi utilizado para " +
      "aumentar a organização do CSS entre os componentes React."
    },
    {
      id: "database",
      title: "Banco de dados",
      content: "O banco de dados foi modelado cuidadosamente já nas formas normais (1, 2 e 3), e implementado no DBSM PostgreSQL. Depois " +
      "de fazer as tabelas, foi só implementar na API com o ORM Sequelize."
    },
    {
      id: "api",
      title: "API",
      content: "Foi construída um API na arquitetura RESTful com o propósito de melhor escalabilidade e organização da aplicação. A linguagem " +
      "utilizada foi Typescript, e a lib Express.js, com Models, Controllers e Services."
    }
  ]
} as Project
