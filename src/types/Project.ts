import { IconType } from "react-icons";

type Tech = {
  Icon: IconType,
  color: string,
  title: string
}

type Section = {
  id: string, 
  title: string,
  content: string,
 
}
export default interface Project {
  name: string,
  desc: string,
  img: string,
  repo: string,
  stack: {
    front: Tech[],
    back: Tech[]
  },
  sections: Section[]
}
