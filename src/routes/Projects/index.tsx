import { FC, useState } from "react";
import { Card } from "react-bootstrap";
import { FaCircleArrowRight } from "react-icons/fa6";
import { SiTypescript, SiNextdotjs, SiStyledcomponents, SiReact, SiPostgresql, SiSequelize, SiNginx } from "react-icons/si";

import StyledProjects, { ImgCtn, List, TechItem } from "./styles";
import Project from "../../types/Project";
import { NGINX_COLOR, PSQL_COLOR, REACT_COLOR, SC_COLOR, SQLZ_COLOR, TS_COLOR } from "../../constants";
import ncaMain from "../../assets/images/nca-main.webp"
import idfaceMain from "../../assets/images/idface-main.webp"

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
      {Icon: SiNextdotjs, color: "black"}, {Icon: SiReact, color: REACT_COLOR},
      {Icon: SiTypescript, color: TS_COLOR}, {Icon: SiStyledcomponents, color: SC_COLOR}, 
    ],
    back: [
      {Icon: SiPostgresql, color: PSQL_COLOR}, {Icon: SiSequelize, color: SQLZ_COLOR},
    ]
  }}, {
    name: "IDFace",
    desc: "Authentication Technology",
    repo: "https://github.com/lik3as/IDFace",
    img: idfaceMain,
    stack: {
      front: [
        {Icon: SiReact, color: REACT_COLOR}, {Icon: SiTypescript, color: TS_COLOR},
        {Icon: SiStyledcomponents, color: SC_COLOR}
      ],
      back: [
        {Icon: SiNginx, color: NGINX_COLOR}
      ]
    }
  }
]

const Projects: FC<Props> = () => {
  const [curProjectIndex, setCurProjectIndex] = useState(0);
  const [cardStatus, setCardStatus] = useState("init");

  const nextProject = () => {
    setCardStatus("slide");

    setTimeout(() => {
      const willIndexOverflow = curProjectIndex == projects.length - 1 ;
      setCurProjectIndex((willIndexOverflow ? 0 : curProjectIndex + 1));

      setCardStatus("init");
    }, 300);
  }
  

  return (
    <StyledProjects>
      <div className="d-flex flex-row align-items-center justify-content-center proj-head">
        <Card className={`ms-5 ${cardStatus}`}>
          <Card.Header className="text-center">
            {projects[curProjectIndex].name}
          </Card.Header>
          <Card.Body className="p-0">
            <ImgCtn $width="500px" $height="254px">
              <img src={projects[curProjectIndex].img} alt="insert image here" width="100%" height="100%"/>
            </ImgCtn>
          </Card.Body>
        </Card>
        <FaCircleArrowRight size="2rem" className="ms-5 clickable" onClick={nextProject}/>
      </div>

      <List $stackType="front">
        {projects[curProjectIndex].stack.front.map((tech, i) => (
          <TechItem $color={tech.color} key={i}>
            <tech.Icon size="3rem"/>
          </TechItem>
        ))}
      </List>
      <List $stackType="back">
        {projects[curProjectIndex].stack.back.map((tech, i) => (
          <TechItem $color={tech.color} key={i}>
            <tech.Icon size="3rem"/>
          </TechItem>
        ))}
      </List>

    </StyledProjects>
  )
}

export default Projects;
