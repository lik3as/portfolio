import styled from "styled-components";
import { HEADER_HEIGHTS, HEADER_PADDINGS, SECTION_PADDINGS } from "@/constants/sizing_vars";

export const StyledMain = styled.main<{
	$pddgTop: HEADER_HEIGHTS,
	$pddgX: HEADER_PADDINGS
	$sctPddg?: SECTION_PADDINGS
}>`
	position: absolute;
	padding: var(${props => props.$pddgTop}) var(${props => props.$pddgX});
	padding-bottom: 0;

	& > section {
		width: calc(100vw - var(${props => props.$pddgX}) * 2); /* x2 because its paddingX */
		height: calc(100vh - var(${props => props.$pddgTop}));
	}

	& > section:not(:first-child) {
		padding-top: var(${props => props.$pddgTop ?? "none"});
	}

	@media screen and (width <= 768px) {
		& > section {
			font-size: .8rem;
		}
	}
`;
