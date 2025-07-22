import { ReactNode } from "react";
import { ReactElement, HTMLAttributes } from "react";
import { Header } from "@/components/header";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars";
import { StyledMain } from "./styles";

interface Props {
	children: ReactNode;
	hdrHght: HEADER_HEIGHTS;
	hdrPddg: HEADER_PADDINGS;
}

/**
 *	- The layout depends on the header size
 */
export function ScrollingLayout ({ children, hdrHght, hdrPddg }: Props) {
	return (
		<>
			<Header
				hght={hdrHght}
				pddgX={hdrPddg}
			/>
			<StyledMain
				$pddgTop={hdrHght}
				$pddgX={hdrPddg}
			>
				{ children }
			</StyledMain>
		</>
	)
}
