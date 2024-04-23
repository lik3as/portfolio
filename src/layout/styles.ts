import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const Header = styled.header`
  & {
    height: var(--header-height);
    z-index: 3;
  }
  & hr {
    margin-top: 0;
  }
`;

export const Nav = styled(Navbar)`
  & * {
    z-index: 3;
  }

  & .name {
    font: 1.5rem "Roboto Bold";
    transition: color .3s;
  }

  & .name:hover {
    color: #ff2142;
  }

  & a {
    transition: color .3s;
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }

  & a:hover {
    cursor: pointer;
    color: #ff2142;
  }

  @media screen and (width <= 768px) {
    & .external-media svg {
      width: 2em;
      height: 2em;
    }

    & nav svg {
      width: 2em;
      height: 2em;
    }

  }

`;

export const Main = styled.main`
  padding: var(--padding-main);
`;
