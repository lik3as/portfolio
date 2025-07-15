import { createGlobalStyle } from "styled-components";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars";

export default createGlobalStyle`
	#root {
		${HEADER_HEIGHTS.BIG}: 73px;
		${HEADER_HEIGHTS.MEDIUM}: 63px;
		${HEADER_HEIGHTS.SMALL}: 53px;

		${HEADER_PADDINGS.BIGGEST}: 20%;
		${HEADER_PADDINGS.BIG}: 8rem;
		${HEADER_PADDINGS.MEDIUM}: 4rem;
		${HEADER_PADDINGS.SMALL}: 2rem;

		@media screen and (width <= 768px) {
			${HEADER_HEIGHTS.BIG}: 43px;
			${HEADER_HEIGHTS.MEDIUM}: 33px;
			${HEADER_HEIGHTS.SMALL}: 23px;	

			${HEADER_PADDINGS.BIGGEST}: 20%;
			${HEADER_PADDINGS.BIG}: 4rem;
			${HEADER_PADDINGS.MEDIUM}: 2rem;
			${HEADER_PADDINGS.SMALL}: 1px;
		}
	}
`;
