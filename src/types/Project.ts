import { IconType } from "react-icons";

type TechType = {
  Icon: IconType,
  color: string
}

export default interface Project {
  name: string,
  desc: string,
  img: string,
  repo: string,
  stack: {
    front: TechType[],
    back: TechType[]
  }
}
