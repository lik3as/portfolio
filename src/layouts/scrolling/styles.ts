import styled from "styled-components";
import { HEADER_HEIGHTS, HEADER_PADDINGS, SECTION_PADDINGS } from "@/constants/sizing_vars";

export const StyledMain = styled.main<{
	$pddgTop: HEADER_HEIGHTS,
	$pddgX: HEADER_PADDINGS
	$sctPddg?: SECTION_PADDINGS
}>`
	position: absolute;
	/*
	 *	since the first section now implements a top padding,
	 *	there's no need of a content offset.
	 *	------------------------------------
	 *	padding: var(${props => props.$pddgTop}) var(${props => props.$pddgX});
	 */
	padding-bottom: 0;

	& > section {
		/*	no content offset means no need to adjust section width.
		 *	(height still is decremented beacuse of fixed header)
		 *	----------------------------------
		 *	width: calc(100vw - var(${props => props.$pddgX}) * 2);
		 */
		padding-top: var(${props => props.$pddgTop ?? "none"});
		height: calc(100vh - var(${props => props.$pddgTop}));
	}

	@media screen and (width <= 768px) {
		& > section {
			font-size: .8rem;
		}
	}
`;
