import styled from "styled-components";

export const StyledNav = styled.nav<{
	$spacing: "space-between" | "space-around" | "space-evenly" | "center"
}>`
	display: flex;
	justify-content: ${props => props.$spacing};

`;

export const NavLinks = styled.ul`
	width: 50%;
	padding: 0;
	display: flex;
	justify-content: space-between;
	list-style: none;

	& li {
		margin: auto;
	}
`;
