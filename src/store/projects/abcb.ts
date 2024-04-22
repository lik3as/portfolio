import { SiDocker, SiGulp, SiJavascript } from "react-icons/si"
import abcbWeb from "../../assets/images/abcb.webp"
import { DOCKER_COLOR, GULP_COLOR, JS_COLOR } from "../../constants"
import Project from "../../types/Project";

export default {
  name: "ABCB",
  desc: "Abcb Application made with templates",
  repo: "https://github.com/lik3as/abcb-web",
  img: abcbWeb,
  stack: {
    front: [
      {Icon: SiJavascript, color: JS_COLOR, title: "Javascript"}, {Icon: SiGulp, color: GULP_COLOR, title: "Gulp.js"},
    ],
    back: [
      {Icon: SiDocker, color: DOCKER_COLOR, title: "Docker"}
    ]
  },
  sections: [
    {
      id: "frontend",
      title: "Front-end",
      content: "Feito com apenas com HTML, CSS, JS e o workflow do Gulp.js, a aplicação tem é uma interface gráfica de um sistema de SAC " +
      "onde você pode gerenciar clientes, ver estatísticas e gerar relatórios."
    }
  ]
} as Project;
