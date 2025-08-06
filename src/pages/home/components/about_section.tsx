import { AboutSection as SCAboutSection } from "./styled-sections";
import { EDUCATION_MARKUP_TEXT } from "@/constants/texts";
import { ABOUT_SECTION_ID } from "@/constants/dom_ids";

export function AboutSection () {
	return (
			<SCAboutSection id={ABOUT_SECTION_ID}>
				<div className="about-header">	
					<h2>
						<a href={`#${ABOUT_SECTION_ID}`}>Sobre mim</a>
					</h2>
					<p>
						Nesta seção você encontrará informações relacionadas às minhas habilidades na área de computação, minha educação formal e meus objetivos.
					</p>
				</div>
				<div className="education">
					<h3>Formação</h3>
					<p>{EDUCATION_MARKUP_TEXT}</p>
				</div>
				<div className="skills">
					<h3>Habilidades</h3>
					<p>Pato no tucupi</p>
				</div>
			</SCAboutSection>
	)
}

Object.assign(AboutSection, SCAboutSection);
