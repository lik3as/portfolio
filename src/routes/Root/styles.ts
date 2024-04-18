import styled from "styled-components";

export default styled.div`
  margin-top: 120px;
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
  
  & .works {
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
