import { FC } from "react";
import Section from "./styles"

interface Props {
  className?: string;
  title: string;
  children?: React.ReactNode;
  id: string;
}

const ProjectSection: FC<Props> = ({className, title, children, id}) => { 
  return (
    <Section className={className}>
      <h3 id={id}><a href={`#${id}`}>{title}</a></h3>
      <p>{children}</p>
    </Section>
  )
}

export default ProjectSection;
