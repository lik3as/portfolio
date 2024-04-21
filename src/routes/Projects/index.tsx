import { FC, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { SiTypescript, SiNextdotjs, SiStyledcomponents, SiReact, SiPostgresql, SiSequelize, SiNginx, SiDocker, SiJavascript, SiGulp } from "react-icons/si";

import StyledProjects, { Grid, ImgCtn, List, TechItem } from "./styles";
import Project from "../../types/Project";
import { DOCKER_COLOR, GULP_COLOR, JS_COLOR, NGINX_COLOR, PSQL_COLOR, REACT_COLOR, SC_COLOR, SQLZ_COLOR, TS_COLOR } from "../../constants";
import ncaMain from "../../assets/images/nca-main.webp"
import idfaceMain from "../../assets/images/idface-main.webp"
import abcbWeb from "../../assets/images/abcb.webp"
import ProjectSection from "../../components/ProjectSection";

interface Props {

}

const projects: Project[] =  [
  {
    name: "NCA Parts",
    desc: "Ecommerce made for NCA Parts",
    repo: "https://github.com/lik3as/ncaparts",
    img: ncaMain,
    stack: {
      front: [
        {Icon: SiNextdotjs, color: "black", title: "Next.js"}, {Icon: SiReact, color: REACT_COLOR, title: "React"},
        {Icon: SiTypescript, color: TS_COLOR, title: "Typescript"}, {Icon: SiStyledcomponents, color: SC_COLOR, title: "Styled-Components"}, 
      ],
      back: [
        {Icon: SiPostgresql, color: PSQL_COLOR, title: "PostgreSQL"}, {Icon: SiSequelize, color: SQLZ_COLOR, title: "Sequelize ORM"},
      ]
    }
  }, {
    name: "IDFace",
    desc: "Authentication Technology",
    repo: "https://github.com/lik3as/IDFace",
    img: idfaceMain,
    stack: {
      front: [
        {Icon: SiReact, color: REACT_COLOR, title: "React"}, {Icon: SiTypescript, color: TS_COLOR, title: "Typescript"},
        {Icon: SiStyledcomponents, color: SC_COLOR, title: "Styled-Components"}
      ],
      back: [
        {Icon: SiNginx, color: NGINX_COLOR, title: "NGINX"}, {Icon: SiDocker, color: DOCKER_COLOR, title: "Docker"}
      ]
    }
  }, {
    name: "ABCB",
    desc: "Abcb Application made with templates",
    repo: "https://github.com/lik3as/abcb-web",
    img: abcbWeb,
    stack: {
      front: [
        {Icon: SiJavascript, color: JS_COLOR, title: "Javascript"}, {Icon: SiGulp, color: GULP_COLOR, title: "Gulp.js"},
      ],
      back: [
        {Icon: SiDocker, color: DOCKER_COLOR, title: "Docker"}
      ]
    }
  }
]

const Projects: FC<Props> = () => {
  const [curProjectIndex, setCurProjectIndex] = useState(0);
  const [projectStatus, setProjectStatus] = useState("init");
  const isFinalIndex = curProjectIndex == projects.length - 1;

  const nextProject = () => {
    setProjectStatus("slide-left");

    setTimeout(() => {
      setCurProjectIndex(curProjectIndex + 1);

      setProjectStatus("init");
    }, 300);
  }

  const prevProject = () => {
    setProjectStatus("slide-right");

    setTimeout(() => {
      setCurProjectIndex(curProjectIndex - 1);

      setProjectStatus("init");
    }, 300);
  }
  

  return (
    <StyledProjects>
      <Grid>
        <Row>
          <Col className="d-flex align-items-center justify-content-end first-col">
            {curProjectIndex ? <FaCircleArrowLeft size="2rem" className="clickable" onClick={prevProject}/> : <></>}
          </Col>
          <Col xs="12" sm="7" md="8" lg="5">
            <Card className={`${projectStatus}`}>
              <Card.Header className="text-center">
                {projects[curProjectIndex].name}
              </Card.Header>
              <Card.Body className="p-0">
                <ImgCtn $width="100%">
                  <img src={projects[curProjectIndex].img} alt={`projeto ${projects[curProjectIndex].name}`} width="100%" height="225px"/>
                </ImgCtn>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex align-items-center last-col">
            {curProjectIndex ? <FaCircleArrowLeft size="2rem" className="clickable prev-proj" onClick={prevProject}/> : <></>}
            {!isFinalIndex ? <FaCircleArrowRight size="2rem" className="clickable next-proj" onClick={nextProject}/> : <></>}
          </Col>
        </Row>
      </Grid>

      <List $stackType="front">
        {projects[curProjectIndex].stack.front.map((tech, i) => (
          <TechItem $color={tech.color} key={i} className={projectStatus}>
            <tech.Icon size="3rem" title={tech.title}/>
          </TechItem>
        ))}
      </List>
      <List $stackType="back">
        {projects[curProjectIndex].stack.back.map((tech, i) => (
          <TechItem $color={tech.color} key={i} className={projectStatus}>
            <tech.Icon size="3rem" title={tech.title}/>
          </TechItem>
        ))}
      </List>

      <MdArrowForwardIos className="clickable justify-self-end mb-5" transform="rotate(90)" size="2rem"/>

      <ProjectSection title="Banco de dados" href="about_database">
        Insert datbase desc here
      </ProjectSection>
    </StyledProjects>
  )
}

export default Projects;
