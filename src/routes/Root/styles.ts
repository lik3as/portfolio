import styled from "styled-components";
import { Row } from "react-bootstrap"

export default styled(Row)`
  & .photo-container {
    max-width: 80%;
  }

  & .photo-container img {
    max-width: 100%;
    object-fit: contain;
  }

  & .star-container {
    max-width: 30%;
  }

  & .star-container img {
    max-width: 100%;
    object-fit: contain;
  }

  & .topics {
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    z-index: 1;
    overflow-y: scroll;
    max-height: 70vh;

    & section {
      z-index: 2;
      font: 1rem "Roboto";
    }

    & section p {
      margin: 0 auto;
    }

    & section:nth-of-type(1) {
      margin-bottom: 40%;
    }
    
    & p {
      font-size: 1.25rem;
    }

    & span,h3 {
      display: block;
      font: 1.8rem "Roboto Bold";
    }

    & .topic {
      margin-top: 14%;
      text-decoration: none;
      color: black;
      z-index: 2;
    }

    & .clickable:hover {
      transition: color .3s;
      color: #ff2142;
      cursor: pointer;
    }

    & .no-style {
      text-decoration: inherit;
      color: inherit;
      cursor: auto;
    }

  }

  @media screen and (width <= 765px) {

    & .topics {
      max-height: 100vh;
      overflow: hidden;
    }

    & .star-container {
      display: none;
    }
  }

  @media screen and (height <= 632px and width >= 768px) {
    & .topics section:last-of-type {
      margin-top: 20%;
    }
  }
}

`;

export const TechStack = styled.b`
  & {
    font-size: 1.5rem
  }

  &.docker {
    color: var(--docker-color);
  }

  &.nginx {
    color: var(--nginx-color);
  }
  
  &.git {
    color: var(--git-color);
  }
  
  &.typescript {
    color: var(--ts-color);
  }

  &.sequelize {
    color: var(--sqlz-color);
  }

`;
