import styled from "styled-components";
import { COLORS } from "../../../Consts/Colors";
import { FONTSIZE } from "../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPageStyled = styled.section`
	background-color: ${COLORS.White};
	min-height: 90vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	.wrapper {
		background-color: ${COLORS.White};
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0 0 5rem;
		overflow: hidden;
		border-radius: 0.5rem;

		.selectorkWrapper {
			width: 80%;
			overflow: hidden;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: stretch;
			gap: 5%;
			img {
				width: 47.5%;
				min-height: 35rem;
				max-height: 40rem;
				object-fit: contain;
				border-radius: 0.5rem;
			}

			aside {
				width: 47.5%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1.5rem;
				min-height: 28rem;

				h2 {
					width: 100%;
					text-align: left;
					margin: 0 0 0rem 0;
					font-weight: ${FONTSIZE.weight.medium};
					font-size: ${FONTSIZE.h2};
				}

				.descriptionWrapper {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: auto;
					width: 100%;

					p {
						width: 100%;
						text-align: left;
						min-height: 23rem;
						padding: 0;
						font-weight: ${FONTSIZE.weight.medium};
						font-size: ${FONTSIZE.p};
						border-bottom: solid 0.15rem ${COLORS.Gray};
					}
					.linkWrapper {
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: row;

						a {
							min-width: 15rem;
							padding: 1.7rem;
							margin: 0;
							border-bottom: solid 0.3rem transparent;
							transition-duration: 0.2s;
							font-weight: ${FONTSIZE.weight.bold};
							font-size: ${FONTSIZE.a};
							text-transform: uppercase;
							text-align: center;
						}

						a:hover {
							color: ${COLORS.mainOrange};
							border-color: ${COLORS.mainOrange};
						}
					}
				}
			}
		}
	}

	div {
		display: flex;
		flex-direction: column;

		.infoWrapper {
			display: flex;
			flex-direction: row;
			gap: 5%;
			width: 80%;
			margin: 2rem 0;
			div {
				width: 47.5%;
				margin: 1rem 0;

				h3 {
					font-weight: ${FONTSIZE.weight.bold};
					font-size: ${FONTSIZE.a};
					text-align: center;
					margin-bottom: 1rem;
				}

				p {
					font-weight: ${FONTSIZE.weight.medium};
					font-size: ${FONTSIZE.p};
					text-align: left;
				}
			}

			ul {
				display: flex;
				width: 100%;
				flex-direction: column;
				align-items: flex-start;
				margin: 0;
				li {
					width: 100%;
					height: 3.5rem;
					display: flex;
					align-items: center;
					text-align: left;
					padding: 0.5rem 0 0.5rem;
					border-bottom: solid 0.15rem ${COLORS.Gray};

					h3 {
						font-weight: ${FONTSIZE.weight.bold};
						font-size: ${FONTSIZE.p};
						text-align: left;
						margin: 0;
					}

					p {
						font-weight: ${FONTSIZE.weight.medium};
						font-size: ${FONTSIZE.p};
						text-align: left;
					}
				}
			}
		}
	}
	@media screen and (max-width: 1360px) {
		.wrapper {
			.selectorkWrapper {
				width: 90%;
			}
		}
	}

	@media screen and (max-width: 1200px) {
		min-height: 50vh;
		.wrapper {
			width: 100%;
			margin: 0;

			.redConTitle {
				font-size: ${FONTSIZE.h3Mobile};
			}

			.infoWrapper {
				flex-direction: column;
				width: 90%;

				div {
					width: 100%;
					margin: 2.5rem 0 1.5rem;

					h3 {
						width: 100%;
					}

					p {
						width: 100%;
					}
				}

				ul {
					width: 100%;
					margin: 1.5rem 0 0;
					li {
						width: 100%;
						height: auto;

						h3 {
							font-size: ${FONTSIZE.pMobile};
						}

						p {
							font-size: ${FONTSIZE.pMobile};
						}
					}
				}
			}

			.selectorkWrapper {
				flex-direction: column;
				width: 90%;

				img {
					width: 100%;
					min-height: auto;
					max-height: 20rem;
				}

				aside {
					width: 100%;
					min-height: 10rem;

					h2 {
						font-size: ${FONTSIZE.h2Mobile};
						width: 100%;
						margin: 1rem 0 0;
						text-align: center;
					}
					.descriptionWrapper {
						width: 100%;

						p {
							width: 100%;
							min-height: 10rem;
							font-size: ${FONTSIZE.pMobile};
						}

						.linkWrapper {
							a {
							}
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 950px) {
		.wrapper {
			width: 100%;
			margin: 0;
			.selectorkWrapper {
				aside {
					h2 {
						font-size: ${FONTSIZE.h2Mobile};
					}

					p {
						font-size: ${FONTSIZE.pMobile};
					}

					.descriptionWrapper {
						.linkWrapper {
							a {
								font-size: ${FONTSIZE.aMobile};
								padding: 1rem;
								min-width: 10rem;
							}
						}
					}
				}
			}

			.infoWrapper {
				margin: 0;

				ul {
					.description {
						width: 100%;
						height: auto;
						padding: 0.5rem 0;

						h3 {
							font-size: ${FONTSIZE.pMobile};
						}

						p {
							font-size: ${FONTSIZE.pMobile};
						}
					}
				}
			}
		}
	}
`;
