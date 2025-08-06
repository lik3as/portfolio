import { createGlobalStyle } from "styled-components";
import { HEADER_HEIGHTS, HEADER_PADDINGS, SECTION_PADDINGS } from "@/constants/sizing_vars";

export default createGlobalStyle`
	#root {
		${HEADER_HEIGHTS.BIG}: 83px;
		${HEADER_HEIGHTS.MEDIUM}: 73px;
		${HEADER_HEIGHTS.SMALL}: 63px;

		${HEADER_PADDINGS.BIGGEST}: 20%;
		${HEADER_PADDINGS.BIG}: 8rem;
		${HEADER_PADDINGS.MEDIUM}: 4rem;
		${HEADER_PADDINGS.SMALL}: 2rem;

		${SECTION_PADDINGS.MEDIUM}: 10rem;

		@media screen and (width <= 768px) {
			${HEADER_HEIGHTS.BIG}: 63px;
			${HEADER_HEIGHTS.MEDIUM}: 53px;
			${HEADER_HEIGHTS.SMALL}: 43px;	

			${HEADER_PADDINGS.BIGGEST}: 20%;
			${HEADER_PADDINGS.BIG}: 4rem;
			${HEADER_PADDINGS.MEDIUM}: 2rem;
			${HEADER_PADDINGS.SMALL}: 1rem;
		}
	}
`;
