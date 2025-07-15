import { StyledNav, NavLinks } from "./styles";

interface Props {
	socials?: boolean;
}

export function Nav (_props: Props) {
	
	return (
		<StyledNav
			$spacing={"space-between"}
		>
			<NavLinks>
				<li>ola</li>
				<li>ola</li>
				<li>ola</li>
				<li>ola</li>
			</NavLinks>
		</StyledNav>
	);
}
