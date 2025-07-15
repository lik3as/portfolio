import { createGlobalStyle } from "styled-components";
import { DARK_THEME_COLORS } from "@/constants/colors";
import RobotoBold from "@/assets/fonts/roboto/Roboto-Bold.ttf";
import RobotoMedium from "@/assets/fonts/roboto/Roboto-Medium.ttf";
import RobotoRegular from "@/assets/fonts/roboto/Roboto-Regular.ttf";

export default createGlobalStyle`
	@font-face {
		font-family: "Roboto";
		src:
			local("Roboto"),
			url("${RobotoRegular}") format("truetype");
		font-weight: normal;
	}

	@font-face {
		font-family: "Roboto Medium";
		src:
			local("Roboto Medium"),
			url("${RobotoMedium}") format("truetype");
	}

	@font-face {
		font-family: "Roboto Bold";
		src:
			local("Roboto Medium"),
			url("${RobotoBold}") format("truetype");
		font-weight: bold;
	}

	body {
		margin: 0;
		background-color: ${DARK_THEME_COLORS.BLACK};
		color: white;
		font-family: "Roboto Medium";
	}
`;
