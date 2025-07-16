import { StyledDrawer } from "./styles";
import {NavLinks} from "../links";

import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars"

interface Props {
	visible: boolean;
	topOffset: HEADER_HEIGHTS;
	padding: HEADER_PADDINGS;
}

export function NavDrawer({topOffset,padding,visible}: Props) {	
	return (
		<StyledDrawer
			$topOffset={topOffset}
			$padding={padding}
			$visible={visible}
		>
			<NavLinks/>
		</StyledDrawer>
	)
}
