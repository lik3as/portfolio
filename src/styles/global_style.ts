import { createGlobalStyle } from "styled-components";
import { DARK_THEME_COLORS } from "@/constants/colors";

export default createGlobalStyle`
	body {
		margin: 0;
		background-color: ${DARK_THEME_COLORS.BLACK};
		color: white;
		font-family: "MPLUS";
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
