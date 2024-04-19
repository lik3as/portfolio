import { Button as BSButton } from "react-bootstrap";
import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & .clickable:hover {
    transition: color .3s;
    color: #ff2142;
    cursor: pointer;
  }

  & .proj-head {
    margin-top: 70px;
    font-family: "Roboto Bold";
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
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
  
  & .card {
    transition: translate .3s ease;
    margin-left: calc(48px + 32px);
  }

  & .card.init {
    animation: fadeIn .3s;
  }
  
  & .card.slide {
    animation: slideLeft .3s;
  }
  
`;

export const ImgCtn = styled.div<{$width: string, $height?: string}>`
  width: ${props => props.$width};
  height: ${props => props.$height ?? "auto"};

  & > img {
    object-fit: fill;
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

`;
