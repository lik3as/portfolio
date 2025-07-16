import styled from "styled-components";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars"
import { DARK_THEME_COLORS } from "@/constants/colors"

export const StyledHeader = styled.header<{
	$outlined?: boolean,
	$padding: HEADER_PADDINGS,
	$height: HEADER_HEIGHTS,
}>`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	box-sizing: border-box;
	width: 100%;

	align-content: center;

	height: var(${props => props.$height});
	background-color: ${DARK_THEME_COLORS.DARK_RED};
	box-shadow: 0px 1px 28px black;
	padding: 0 var(${props => props.$padding});

	@media screen and (width <= 768px) {
		font-size: 1.2rem;
	}
`;
