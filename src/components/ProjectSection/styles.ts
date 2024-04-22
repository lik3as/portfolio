import styled from "styled-components";

export default styled.section`
  width: 100%;
  padding: 15px 30px;
  font-family: "Roboto";
  
  & h1,h2,h3,h4,h5 {
    font-family: "Roboto Bold";
  }

  & a { 
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }

  & a::before {
    content: "#";
    opacity: .6;
    left: 20px;
    display: inline-block;
    box-sizing: border-box;
    visibility: hidden;
    margin-left: -.6em;
  }

  & a:hover {
    text-decoration: underline;
  }

  & a:hover::before {
    visibility: visible;
  }

`;
