import styled from "styled-components";

export default styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  & section {
    z-index: 2;
    font: 1rem "Roboto";
  }
  
  & p {
    font-size: 1.25rem;
  }

  & span,h3 {
    display: block;
    font: 1.8rem "Roboto Bold";
  }
  
  & section {
    width: 45%;
  }

  @media screen and (width <= 765px) {
    & section {
      width: 65%;
    }

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

  & .topics {
    max-height: 70vh;
    overflow-y: scroll;
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
