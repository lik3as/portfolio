import { ReactElement, HTMLAttributes } from "react";
import { Header } from "@/components/header";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars";
import {StyledMain} from "./styles";
import { assert } from "@/utils/assert";

interface Props {
	children: ReactElement<HTMLAttributes<HTMLElement>, "section">[];
	hdrHght: HEADER_HEIGHTS;
	hdrPddg: HEADER_PADDINGS;
}

/**
 *	- The layout depends on the header size
 *	- Apparently it's not possible to (easily) know the child type at compile time
 */
export function ScrollingLayout ({ children, hdrHght, hdrPddg }: Props) {
	assert(
		children.every((child) => ((child.type as any).target === "section")),
		"EVERY CHILD MUST BE A STYLED <section>"
	);

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
