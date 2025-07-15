import { StyledHeader } from "./styles"
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars"
import { Nav } from "@/components/nav";

export function Header () {
	return (
		<StyledHeader 
		$outlined
		$padding={HEADER_PADDINGS.SMALL}
		$height={HEADER_HEIGHTS.BIG}
		>
			<Nav/>
		</StyledHeader>
	);
}
