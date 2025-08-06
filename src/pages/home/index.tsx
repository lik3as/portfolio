import { ScrollingLayout } from "@/layouts/scrolling";
import { HEADER_HEIGHTS, HEADER_PADDINGS, SECTION_PADDINGS } from "@/constants/sizing_vars";
import { WelcomeSection } from "./components/welcome_section"
import { ProjectsSection } from "./components/projects_section"
import { AboutSection } from "./components/about_section"

export function HomePage () {
	return (
		<ScrollingLayout
		hdrHght={HEADER_HEIGHTS.MEDIUM}
		hdrPddg={HEADER_PADDINGS.SMALL}
		sctPddg={SECTION_PADDINGS.MEDIUM}>
			<WelcomeSection/>
			<AboutSection/>
			<ProjectsSection/>
		</ScrollingLayout>
	)
}
