import styled from "styled-components";

export const StyledLinks = styled.div`
	width: 50%;
	padding: 0;
	display: flex;
	justify-content: space-evenly;
	list-style: none;

	@media screen and (width <= 768px) {
		width: 100%;
		flex-direction: column;
		justify-content: space-between;
		font-size: 1em;

		& a {
			margin: 0 auto .8em 0;
		}

	}
`;
