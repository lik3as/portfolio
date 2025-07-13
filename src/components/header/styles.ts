import styled from "styled-components";
import { HEADER_HEIGHTS } from "@/constants/sizing"
import { THEME_COLORS } from "@/constants/colors"

export const StyledHeader = styled.header<{ $height: HEADER_HEIGHTS }>`
	height: ${props => props.$height}px;
	background-color: ${THEME_COLORS.DARKEST_BLUE};
`;
