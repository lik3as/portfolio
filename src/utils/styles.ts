import { createGlobalStyle } from "styled-components";
import RobotoBold from "../assets/fonts/roboto/Roboto-Bold.ttf"
import Roboto from "../assets/fonts/roboto/Roboto-Regular.ttf"
import { DOCKER_COLOR, GIT_COLOR, HEADER_HEIGHT, NGINX_COLOR, PADDING_MAIN, SQLZ_COLOR, TS_COLOR } from "../constants";

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto Bold";
    src: 
      local("Roboto Bold"),
      url(${RobotoBold}) format("truetype");
    font-weight: "bold";
    font-style: "normal";
  }

  @font-face {
    font-family: "Roboto";
    src: 
      local("Roboto"),
      url(${Roboto}) format("truetype");
    font-weight: "normal";
    font-style: "normal"; 
  }

  :root {
    --header-height: ${HEADER_HEIGHT}px;
    --padding-main: ${PADDING_MAIN}px;

    --docker-color: ${DOCKER_COLOR};
    --nginx-color: ${NGINX_COLOR};
    --git-color: ${GIT_COLOR};
    --ts-color: ${TS_COLOR};
    --sqlz-color: ${SQLZ_COLOR};
  } 

  @media screen and (width <= 768px) {
    html {
      font-size: .8rem;
    }
  }
`;
