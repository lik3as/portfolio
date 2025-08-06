import { Container } from "./styles";

interface Props {
	src: string;
	width: number;
	height: number;
	onClick?: () => void;
	className?: string;
}

export function Image({ src, width, height, onClick, className }: Props) {
	return (
		<>
			<Container 
			$width={width} $height={height}
			onClick={onClick} className={className}>
				<img src={src}/>
			</Container>
		</>
	)
}
