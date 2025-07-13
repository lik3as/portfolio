import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	header: ReactNode;
}

export function ScrollingLayout ({ children, header }: Props) {
	return (
		<div>
			{ header }
			{ children }
		</div>
	)
}
