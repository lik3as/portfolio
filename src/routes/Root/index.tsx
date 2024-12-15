import { FC, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"
import StyledRoot, { TechStack } from "./styles";
import { Link } from "react-router-dom";
import Canvas from "../../components/Canvas";
import { Col } from "react-bootstrap";
import photo from "../../assets/images/selfie.jpeg"
import star from "../../assets/images/star.gif"
import redStar from "../../assets/images/red-star.gif"

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
      <Canvas />
      <StyledRoot>
        <Col md={3}>
          <div className="ms-auto me-auto mb-5 photo-container">
            <img src={photo}/>
          </div>
          <div className="ms-auto me-auto mt-2 star-container">
            <img src={redStar}/>
            <img src={star} style={{marginTop: "-40px", rotate: "40deg", marginLeft: "-30px"}}/>
          </div>
        </Col>
        <Col md={6} className="topics">
          <section className="mt-4">
            <p>
              <Link to="#" className="clickable topic">
                <span>Soft Skills <FaStar className="mb-2" /></span>
              </Link>
              são coisas que aprimorei bastante durante minha jornada na área, principalmente a <b>honestinade</b> com outras
              pessoas e comigo mesmo. <br />
              Durante esse tempo, aprendi a <b>trabalhar em equipe</b> e como lidar com <b>prazos</b> e <b>adversidades</b>, sempre
              tentando manter controle sobre a situação e <b>reduzir o estresse</b>.
            </p>
          </section>

          <section className="mt-4">
            <p>
              <Link to="projects" className="clickable topic">
                <span>Meus Trabalhos <FaStar className="mb-2" /></span>
              </Link>
              podem ser realizados tanto de uma maneira mais <b>tradicional</b>, utilizando o máximo das linguagens de programação e suas ferramentas,
              como turbinado com as tecnologias <b>atuais</b>.
            </p>
          </section>

          <section>
            <p>
              <Link to="#" className="clickable topic">
                <span>
                  Desenvolvedor Fullstack <FaStar className="mb-2" />
                </span>
              </Link>
              que há quase 2 anos trabalha na área com as tecnologias <b >Next</b>
              , <b >React</b>, <b >Node</b>, <b >PostgreSQL </b>
              e algumas outras como <TechStack className={techStack[currentIndex].toLowerCase()}>{techStack[currentIndex]}</TechStack>,
              possuindo também conhecimento intermediário em <b>Linux</b>
              .
            </p>
          </section>
        </Col>
        <Col md={3}>
          <div className="ms-auto me-5 mt-4 star-container">
            <img src={star}/>
          </div>
        </Col>
      </StyledRoot>
    </>
  )
}

export default Root;
