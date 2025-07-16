import { Container } from "./styles";

interface Props {
	src: string;
	width: number;
	height: number;
	onClick: () => void;
}

export function Image({ src, width, height, onClick }: Props) {
	return (
		<>
			<Container $width={width} $height={height} onClick={onClick}>
				<img src={src}/>
			</Container>
		</>
	)
}
