import type { justify_content } from "@/utils/typings";

import menuSvg from "@/assets/svgs/hamburger-menu.svg"
import xSvg from "@/assets/svgs/x.svg"
import { useState } from "react";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars"
import { useWindowWidth } from "@/hooks/use_window_width";

import { Image } from "@/components/image";
import { NavLinks } from "./links";
import { NavDrawer } from "./drawer";
import { StyledNav, Link } from "./styles";


interface Props {
	spacing: justify_content;
	hdrHght: HEADER_HEIGHTS;
	hdrPddg: HEADER_PADDINGS;
	
}


/**
 *	Why not to use context here?
 *	because react docs says that you shouldn't overuse it.
 *	Prop drilling (if not excessive) is good for readability.
 */
export function Nav ({ spacing, hdrHght, hdrPddg }: Props) {	
	const { width } = useWindowWidth();
	const [showDrawer, setShowDrawer] = useState(false);

	return (
		<StyledNav
			$spacing={spacing}
		>
			<Link className="name">
				DAVI ALMEIDA
			</Link>
			{ 
				width >= 768 ?  <NavLinks/> : (
					<Image
					src={ showDrawer ? xSvg : menuSvg}
					width={40}
					height={40}
					onClick={() => setShowDrawer(!showDrawer)}/>
				)
			}
			<NavDrawer visible={showDrawer} topOffset={hdrHght} padding={hdrPddg}/>
		</StyledNav>
	);
}
