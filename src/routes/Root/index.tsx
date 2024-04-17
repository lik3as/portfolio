import { FC, useState, useEffect } from "react";
import StyledRoot, { TechStack } from "./styles";
import { Link } from "react-router-dom";
import Canvas from "../../components/Canvas";

interface Props {
  
};

const techStack = ["Docker", "NGINX", "Git", "Typescript", "Sequelize"];

const Root: FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % techStack.length);  
    }, 1300);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <Canvas/>
      <StyledRoot>
        <section>
          <p>
            Sou um
            <span className="clickable">Desenvolvedor Web Fullstack</span>
            que há quase 2 anos trabalha na área com as tecnologias <b className="clickable">Next</b>
            , <b className="clickable">React</b>, <b className="clickable">Node</b>, <b className="clickable">PostgreSQL </b>
            e algumas outras como <TechStack className={ techStack[currentIndex].toLowerCase()}>{techStack[currentIndex]}</TechStack>
            .
          </p>
        </section>

        <Link to="/projects" className="works clickable">
          <h3>Meus Trabalhos</h3>
        </Link>

      </StyledRoot>
    </>
  )
}

export default Root;
