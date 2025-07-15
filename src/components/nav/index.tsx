import { StyledNav, NavLinks, Link } from "./styles";

interface Props {
	socials?: boolean;
}

export function Nav (_props: Props) {
	
	return (
		<StyledNav
			$spacing={"space-between"}
		>
			<Link className="name">
				DAVI ALMEIDA
			</Link>
			<NavLinks>
				<Link href="#about">SOBRE</Link>
				<Link>PROJETOS</Link>
				<Link>EXPERIÊNCIA</Link>
				<Link>CONTATO</Link>
			</NavLinks>
		</StyledNav>
	);
}
