import { Button as BSButton, Container } from "react-bootstrap";
import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: inherit;
    color: inherit;
  }
 
  & .clickable:hover {
    transition: color .3s;
    color: #ff2142;
    cursor: pointer;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  @keyframes slideLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  @keyframes slideRight {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  & .card {
    transition: translate .3s ease;
  }

  & .card.init {
    animation: fadeIn .3s;
  }
  
  & .card.slide-left {
    animation: slideLeft .3s;
  }

  & .card.slide-right {
    animation: slideRight .3s;
  }

  @media screen and (width <= 768px) {
    .arrow-down {
      margin-bottom: 2rem;
    }
  }
 
`;

export const Grid = styled(Container)`
  margin-top: 25px;
  font-family: "Roboto Bold";

  & .last-col {
    justify-content: start;
      
    .prev-proj  {
      display: none;
    }
  }

  @media screen and (width <= 768px) {

    & .first-col * {
      display: none;
    }

    & .last-col {
      margin-top: 1rem;
      justify-content: space-between;

      .prev-proj {
        display: inline;
        margin-start: auto;
      }
      .next-proj {
        margin-left: auto;
      }
    } 
  }

`;

export const ImgCtn = styled.div<{$width: string, $height?: string}>`
  max-width: ${props => props.$width};
  max-height: ${props => props.$height ?? "auto"};
  
  & > img {
    object-fit: fill;
    
    @media screen and (width <= 468px) {
      height: 200px;
    }
  }
`;

export const Button = styled(BSButton)`
  &.unstyled {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export const List = styled.ul<{$stackType: "front" | "back"}>`
  margin-top: ${props => props.$stackType == "front" ? "3rem" : "0"};
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justiy-content: space-between;
  padding: 0;
  
`;

export const TechItem = styled.li<{$color: string}>`
  &:hover {
    transition: color ease .4s;
    color: ${props => props.$color};
    cursor: pointer;
  }

  & {
    margin-right: 1rem;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &.init{
    animation: fadeIn .3s;
  }

  &.slide{
    animation: fadeOut .3s;
  }

`;
