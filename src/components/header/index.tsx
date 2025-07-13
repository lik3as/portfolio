import { StyledHeader } from "./styles"
import { HEADER_HEIGHTS } from "@/constants/sizing"

export function Header () {
	return (
		<StyledHeader $height={HEADER_HEIGHTS.BIG}>
			misery
		</StyledHeader>
	);
}
