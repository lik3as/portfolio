import styled from "styled-components";

export const StyledNav = styled.nav<{
	$spacing: "space-between" | "space-around" | "space-evenly" | "center"
}>`
	display: flex;
	justify-content: ${props => props.$spacing};
	align-content: center;
	width: 100%;

`;

export const NavLinks = styled.div`
	width: 50%;
	padding: 0;
	display: flex;
	justify-content: space-between;
	list-style: none;

	& a {
		margin: auto;
		font-family: "Roboto Bold";
	}
`;

export const Link = styled.a`
	display: inline;
	transition: color .2s ease-in-out;
	color: white;
	text-decoration: none;

	&.name {
		display: inline;
		font-family: "Roboto Bold";
		font-size: 1.5rem;
		margin: auto 0;

	}

	&:hover {
		color: black;
		cursor: pointer;
	}
`;
