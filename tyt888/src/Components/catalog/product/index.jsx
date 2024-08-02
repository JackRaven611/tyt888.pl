import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductStyled = styled.article`
	width: 48.25%;
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition-duration: 0.2s;
	box-shadow: 0 0.2rem 0.4rem ${COLORS.darkBlue + "2d"};
	border-bottom: solid 0.2rem transparent;

	&&:hover {
		color: ${COLORS.mainOrange};
		border-color: ${COLORS.mainOrange};
	}

	a {
		width: 100%;
		position: relative;
		transition-duration: 0.2s;
		font-weight: ${FONTSIZE.weight.medium};
		text-transform: uppercase;
		font-size: ${FONTSIZE.a};
	}

	a:hover {
		h3 {
			color: ${COLORS.mainOrange};
		}
	}

	img {
		height: 27.5rem;

		transition-duration: 0.2s;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition-duration: 0.2s;
		padding: 1rem 0;

		h3 {
			font-size: ${FONTSIZE.h3};
			font-weight: ${FONTSIZE.weight.bold};
			margin-bottom: 0.5rem;
		}

		p {
			font-size: ${FONTSIZE.p};
			font-weight: ${FONTSIZE.weight.medium};
			width: 80%;
		}
	}

	@media screen and (max-width: 1300px) {
		width: 100%;

		img {
			height: 25rem;
		}
	}

	@media screen and (max-width: 900px) {
		img {
			height: 15rem;
		}

		a {
			font-size: ${FONTSIZE.aMobile};
			font-weight: ${FONTSIZE.weight.bold};
		}

		.wrapper {
			h3 {
				font-size: ${FONTSIZE.h3Mobile};
			}
			p {
				font-size: ${FONTSIZE.pMobile};
			}
		}
	}
`;
