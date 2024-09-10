import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ImgFadeStyled = styled.div`
	width: 100%;
	height: 30rem;
	z-index: 2;
	background-image: linear-gradient(
		to bottom,
		rgba(255, 0, 0, 0),
		rgb(238, 238, 239, 0.5) 65%,
		${COLORS.White} 90%
	);
	margin-top: -26rem;

	@media screen and (max-width: 900px) {
		background-image: linear-gradient(
			to bottom,
			rgba(255, 0, 0, 0) 50%,
			rgb(238, 238, 239, 0.5) 75%,
			${COLORS.White} 90%
		);
	}
`;
