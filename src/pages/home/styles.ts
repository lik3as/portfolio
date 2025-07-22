import styled from "styled-components";
import { DARK_THEME_COLORS } from "@/constants/colors"

const TitledSection = styled.section`
	& h1,h2,h3 {
		font-family: "MPLUS Medium";
		margin: 0 0;
		color: ${DARK_THEME_COLORS.CREAM};
	}

	& h1 {
		font-size: 6em;
	}

	& h2 {
		font-size: 4em;
	}

	& h3 {
		font-size: 2em;
	}

	& p {
		color: ${DARK_THEME_COLORS.GREY};
	}

	& p b {
		font-family: "MPLUS Bold";
	}
`;

export const WelcomeSection = styled(TitledSection)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const AboutSection = styled(TitledSection)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto 1fr;

	& .title {
		grid-row: 1;
		grid-column: 1 / 3;
		text-align: center;
	}

	& .education {
		padding: 3em;

		& h3 {
			border-bottom: 2px solid #333;
			width: 100%;
		}
	}

	& .skills {
		padding: 3em;

		& h3 {
			border-bottom: 2px solid #333;
			width: 100%;
		}
	}
`;
