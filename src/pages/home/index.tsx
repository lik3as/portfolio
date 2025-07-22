import { ScrollingLayout } from "@/layouts/scrolling";
import { HEADER_HEIGHTS, HEADER_PADDINGS } from "@/constants/sizing_vars";
import { EDUCATION_MARKUP_TEXT } from "@/constants/texts";

export function HomePage () {
	return (
		<ScrollingLayout
			hdrHght={HEADER_HEIGHTS.MEDIUM}
			hdrPddg={HEADER_PADDINGS.SMALL}
		>
		</ScrollingLayout>
	)
}
