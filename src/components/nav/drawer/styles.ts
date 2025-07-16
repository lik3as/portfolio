import styled from "styled-components";
import { DARK_THEME_COLORS } from "@/constants/colors"

import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars"

export const StyledDrawer = styled.div<{
	$topOffset: HEADER_HEIGHTS,
	$padding: HEADER_PADDINGS,
	$visible: boolean
}>`
	width: 100%;
	display: flex;
	position: fixed;
	top: var(${props => props.$topOffset});
	left: 0;
	background-color: ${DARK_THEME_COLORS.DARK_RED};
	padding: 0 var(${props => props.$padding});
	visibility: ${props => props.$visible ? "visible" : "hidden"};
	opacity: ${props => props.$visible ? 1 : 0};

	transition: opacity .2s ease-in-out;
`;
