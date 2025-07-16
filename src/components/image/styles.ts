import styled from "styled-components";

export const Container = styled.div<{
	$width: number,
	$height: number
}>`
	max-width: ${props => props.$width}px;
	max-height: ${props => props.$height}px;

	& img {
		width: 100%;
		height: 100%;
	}
`;
