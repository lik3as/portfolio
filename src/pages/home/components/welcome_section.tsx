import { WelcomeSection as SCWelcomeSection } from "./styled_sections";
import { Image } from "@/components/image/";
import arrowSvg from "@/assets/svgs/arrow-down.svg";

import { WELCOME_SECTION_ID, ABOUT_SECTION_ID } from "@/constants/dom_ids";

export function WelcomeSection () {
	return (
			<SCWelcomeSection id={WELCOME_SECTION_ID}>
				<div className="text">
					<h1>Olá, Mundo</h1>
					<p>
						Sou um desenvolvedor de sotfware com experiência em desenvolvimento web
						e foco no segmento de backend.
					</p>
				</div>
				<a href={`#${ABOUT_SECTION_ID}`}>
					<Image
					className="arrow-down"
					src={arrowSvg} width={40} height={40}/>
				</a>
			</SCWelcomeSection>
	);
}

Object.assign(WelcomeSection, SCWelcomeSection);
