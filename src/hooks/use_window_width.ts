import { useState, useEffect } from "react";

export function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	
	useEffect(() => {
		if (width != window.innerWidth) {
			setWidth(window.innerWidth);
		}
	}, [window.innerWidth]);

	return { width };
}
