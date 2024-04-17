import { createGlobalStyle } from "styled-components";
import RobotoBold from "../assets/fonts/roboto/Roboto-Bold.ttf"
import Roboto from "../assets/fonts/roboto/Roboto-Regular.ttf"
import { HEADER_HEIGHT } from "../constants";

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
  }
 
  @media screen and (width <= 768px) {
    html {
      font-size: .75rem;
      overflow: hidden;
    }
  }
`;
