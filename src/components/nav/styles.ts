import styled from "styled-components";
import { justify_content } from "@/utils/typings";
import { DARK_THEME_COLORS } from "@/constants/colors";

export const StyledNav = styled.nav<{
	$spacing: justify_content
}>`
	display: flex;
	justify-content: ${props => props.$spacing};
	align-content: center;
	width: 100%;

	& * {
		margin: auto 0;
	}
`;

export const Link = styled.a`
	display: inline;
	transition: color .2s ease-in-out;
	color: ${DARK_THEME_COLORS.CREAM};
	text-decoration: none;
	margin: auto 0;

	&.name {
		font-family: "MPLUS Medium";
		font-size: 1.5em;
	}

	&:hover {
		color: black;
		cursor: pointer;
	}
`;
