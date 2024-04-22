import { SiBootstrap, SiDocker, SiNginx, SiReact, SiStyledcomponents, SiTypescript } from "react-icons/si"
import idfaceMain from "../../assets/images/idface-main.webp"
import { DOCKER_COLOR, NGINX_COLOR, REACT_COLOR, SC_COLOR, TS_COLOR, BS_COLOR } from "../../constants"
import Project from "../../types/Project"

export default {
  name: "IDFace",
  desc: "Authentication Technology",
  repo: "https://github.com/lik3as/IDFace",
  img: idfaceMain,
  stack: {
    front: [
      {Icon: SiReact, color: REACT_COLOR, title: "React"}, {Icon: SiTypescript, color: TS_COLOR, title: "Typescript"},
      {Icon: SiStyledcomponents, color: SC_COLOR, title: "Styled-Components"}, {Icon: SiBootstrap, color: BS_COLOR, title: "Bootstrap"}
    ],
    back: [
      {Icon: SiNginx, color: NGINX_COLOR, title: "NGINX"}, {Icon: SiDocker, color: DOCKER_COLOR, title: "Docker"}
    ]
  },
  sections: [
    {
      id: "frontend",
      title: "Front-end",
      content: "A aplicação é uma SPA feita em React e react-router-dom, além de styled-components para organizar melhor o CSS e typescript " +
      "para a redução da indeterminística na aplicação. A aplicação é containerizada com Docker, servida e proxiada com NGINX. A aplicação " +
      "Trata-se de um sistema de autorização de documentos."
    }
  ]
} as Project;
