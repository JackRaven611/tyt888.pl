import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BlogArticleStyled = styled.section`
	margin: 0 0 5rem;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	.wrapper {
		overflow: hidden;
		width: 80%;
		border-radius: 0.5rem;
		overflow: hidden;
		transition-duration: 0.2s;
		box-shadow: 0 0.2rem 0.4rem ${COLORS.darkBlue + "2d"};
		border-bottom: solid 0.2rem transparent;

		.coverImg {
			height: 25rem;
			width: 100%;
			object-fit: cover;
		}

		.textWrapper {
			min-height: 25rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: transparent;

			h2 {
				width: 100%;
				margin: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: ${FONTSIZE.h2};
				font-weight: ${FONTSIZE.weight.bold};
			}

			p {
				text-align: left;
				width: 90%;
				margin-bottom: 1rem;
				font-size: ${FONTSIZE.p};
				font-weight: ${FONTSIZE.weight.medium};
			}

			ul {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				li {
					width: auto;
					max-height: 35rem;
					margin: 0 0 1.5rem;
					border-radius: 0.5rem;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					box-shadow: 0 0.2rem 0.4rem ${COLORS.darkPurple + "2d"};
					img {
						max-height: 30rem;
					}
					p {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 3rem;
						margin: 0;
					}
				}
			}
		}
	}
	@media screen and (max-width: 1300px) {
		.wrapper {
			width: 100%;
			margin: 0;
			box-shadow: none;
			border-radius: 0;

			.coverImg {
				max-height: 20rem;
			}

			.textWrapper {
				ul {
					width: 90%;
					li {
						max-height: 28rem;
						img {
							max-height: 25rem;
							width: 100%;
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 900px) {
		.wrapper {
			.coverImg {
				max-height: 15rem;
			}

			.textWrapper {
				ul {
					li {
						max-height: 18rem;
						img {
							max-height: 15rem;
						}
					}
				}
			}
		}
	}
`;
