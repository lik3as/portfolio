import { FC } from "react";
import Section from "./styles"

interface Props {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
}

const ProjectSection: FC<Props> = ({className, title, children, href}) => { 
  return (
    <Section className={className}>
      <h3 id={href}><a href={`#${href}`}>{title}</a></h3>
      <p>{children}</p>
    </Section>
  )
}

export default ProjectSection;
