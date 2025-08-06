import { PROJECTS_SECTION_ID } from "@/constants/dom_ids";
import { ProjectsSection as SCProjectsSection } from "./styled_sections";

export function ProjectsSection () {
	return (
		<SCProjectsSection id={PROJECTS_SECTION_ID}>
			
		</SCProjectsSection>
	)
}

Object.assign(ProjectsSection, { target: "section" })
