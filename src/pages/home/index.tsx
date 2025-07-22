import { ScrollingLayout } from "@/layouts/scrolling";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars";
import { EDUCATION_MARKUP_TEXT } from "@/constants/texts";
import { 
	WelcomeSection,
	AboutSection
} from "./styles";

export function HomePage () {
	return (
		<ScrollingLayout
			hdrHght={HEADER_HEIGHTS.MEDIUM}
			hdrPddg={HEADER_PADDINGS.SMALL}
		>
			<WelcomeSection>
				<h1>Olá, Mundo</h1>
				<p>
					Sou um desenvolvedor de sotfware com experiência em desenvolvimento web
					e foco no segmento de backend.
				</p>
			</WelcomeSection>
			<AboutSection>
				<div className="title">
					<h2>Sobre mim</h2>
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
			</AboutSection>
			<WelcomeSection>
				<h1>Lorem</h1>
			</WelcomeSection>
			<WelcomeSection>
				<h1>Ipsum</h1>
			</WelcomeSection>
		</ScrollingLayout>
	)
}
