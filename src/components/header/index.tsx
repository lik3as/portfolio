import { StyledHeader } from "./styles"
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars"

import { Nav } from "@/components/nav";

interface Props {
	hght: HEADER_HEIGHTS;
	pddgX: HEADER_PADDINGS;
}

export function Header ({hght, pddgX}: Props) {
	return (
		<StyledHeader 
		$outlined
		$padding={pddgX}
		$height={hght}
		>
			<Nav
				spacing={"space-between"}
				hdrHght={hght}
				hdrPddg={pddgX}
			/>
		</StyledHeader>
	);
}
