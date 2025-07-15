import styled from "styled-components";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars"
import { DARK_THEME_COLORS } from "@/constants/colors"

export const StyledHeader = styled.header<{
	$outlined?: boolean,
	$padding: HEADER_PADDINGS,
	$height: HEADER_HEIGHTS,
}>`
	display: flex;
	align-content: center;

	height: var(${props => props.$height});
	background-color: ${DARK_THEME_COLORS.DARK_RED};
	box-shadow: 0px 1px 28px black;
	padding: 0 var(${props => props.$padding});
`;
