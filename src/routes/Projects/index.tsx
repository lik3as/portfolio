import { FC, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

import StyledProjects, { Grid, ImgCtn, List, TechItem } from "./styles";
import ProjectSection from "../../components/ProjectSection";

import projects from "../../store/projects";

const Projects: FC = () => {
  const [curProjectIndex, setCurProjectIndex] = useState(0);
  const [projectStatus, setProjectStatus] = useState("init");
  const isFinalIndex = curProjectIndex == projects.length - 1;
  const project = projects[curProjectIndex];

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
                {project.name}
              </Card.Header>
              <Card.Body className="p-0">
                <ImgCtn $width="100%">
                  <img src={project.img} alt={`projeto ${project.name}`} width="100%" height="225px"/>
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
        {project.stack.front.map((tech, i) => (
          <TechItem $color={tech.color} key={i} className={projectStatus}>
            <tech.Icon size="3rem" title={tech.title}/>
          </TechItem>
        ))}
      </List>
      <List $stackType="back">
        {project.stack.back.map((tech, i) => (
          <TechItem $color={tech.color} key={i} className={projectStatus}>
            <tech.Icon size="3rem" title={tech.title}/>
          </TechItem>
        ))}
      </List>

      <a href={`#${project.sections ? project.sections[0].id : ""}`}>
        <MdArrowForwardIos className="clickable justify-self-end mb-5" transform="rotate(90)" size="1.6rem"/>
      </a>

      {project.sections?.map((sectData) => (
        <ProjectSection title={sectData.title} id={sectData.id}>
          {sectData.content}
        </ProjectSection>
      ))}
    </StyledProjects>
  )
}

export default Projects;
