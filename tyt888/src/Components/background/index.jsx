import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BackgroundStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	header {
		display: flex;
		justify-content: center;
		gap: 1rem;
		clear: both;
		width: 80%;
		min-height: 7rem;
		border-radius: 0.5rem;
		z-index: 3;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		background-color: ${COLORS.darkBlue + "6d"};
		box-shadow: 0 0.2rem 0.4rem ${COLORS.darkBlue + "2d"};

		h1 {
			color: ${COLORS.White};
			font-size: ${FONTSIZE.h1};
			font-weight: ${FONTSIZE.weight.bold};
			padding: 0.5rem 0 0;
		}
		h3 {
			color: ${COLORS.White};
			font-size: ${FONTSIZE.a};
			font-weight: ${FONTSIZE.weight.medium};
			padding: 0 0.5rem 0.5rem;
		}
	}

	img {
		width: 100%;
		max-height: 75rem;
		object-fit: cover;
	}

	@media screen and (max-width: 1300px) {
		header {
			width: 90%;
			margin-top: -25rem;
			gap: 1rem;
		}
	}

	@media screen and (max-width: 900px) {
		header {
			margin-top: -15rem;
			gap: 0.5rem;
			h1 {
				font-size: ${FONTSIZE.h1Mobile};
				line-height: 2rem;
			}
			h3 {
				font-size: ${FONTSIZE.aMobile};
			}
		}

		img {
			margin-top: 4.5rem;
		}
	}

	@media screen and (max-width: 600px) {
		header {
			margin-top: -7rem;
		}
	}
`;
