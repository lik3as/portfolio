import { createGlobalStyle } from "styled-components";
import RobotoBold from "@/assets/fonts/roboto/Roboto-Bold.ttf";
import RobotoMedium from "@/assets/fonts/roboto/Roboto-Medium.ttf";
import RobotoRegular from "@/assets/fonts/roboto/Roboto-Regular.ttf";

import MPLUSMedium from "@/assets/fonts/mplus/MPLUSCodeLatin-Medium.ttf";
import MPLUSRegular from "@/assets/fonts/mplus/MPLUSCodeLatin-Regular.ttf";
import MPLUSBold from "@/assets/fonts/mplus/MPLUSCodeLatin-Bold.ttf";

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

	@font-face {
		font-family: "MPLUS";
		src:
			local("MPLUS"),
			url("${MPLUSRegular}") format("truetype");
		font-weight: normal;
	}

	@font-face {
		font-family: "MPLUS Medium";
		src:
			local("MPLUS Medium"),
			url("${MPLUSMedium}") format("truetype");
	}

	@font-face {
		font-family: "MPLUS Bold";
		src:
			local("MPLUS Bold"),
			url("${MPLUSBold}") format("truetype");
		font-weight: bold;
	}
`;
