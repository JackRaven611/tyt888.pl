import styled from "styled-components";
import { COLORS } from "../../Consts/Colors";
import { FONTSIZE } from "../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const NavStyled = styled.nav`
	z-index: 10;
	background-color: ${COLORS.White};
	color: ${COLORS.darkPurple};
	box-shadow: 0 0.2rem 0.4rem ${COLORS.darkBlue + "2d"};
	width: 100%;
	height: 5rem;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;

	.wrapper {
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.navButtons {
			width: 100%;
			min-width: 20%;
			align-self: center;
			padding: 1.65rem 0;
			background-color: ${COLORS.White};
			border-bottom: solid 0.2rem ${COLORS.White};
			font-size: ${FONTSIZE.a};
			font-weight: ${FONTSIZE.weight.medium};
			transition-duration: 0.2s;
		}

		.navButtons:hover {
			color: ${COLORS.mainOrange};
			border-color: ${COLORS.mainOrange};
		}

		.homeButton {
			width: 19rem;
			height: 5rem;
			text-align: left;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			h1 {
				transition-duration: 0.2s;
				font-size: ${FONTSIZE.h1};
				font-weight: ${FONTSIZE.weight.bold};
			}
			p {
				font-size: ${FONTSIZE.p};
				font-weight: ${FONTSIZE.weight.medium};
			}
		}

		.homeButton:hover {
			h1 {
				color: ${COLORS.mainOrange};
			}
		}

		.desktopNav {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			gap: 1rem;
			align-items: center;
			flex-wrap: wrap;

			li {
				display: flex;
				width: 18%;
				height: auto;
			}
		}

		.hamburger {
			display: none;
		}
	}

	.dropdownItem {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 5rem;
		transition-duration: 0.2s;

		.navButtonsDropdown {
			display: none;
			position: absolute;
			transition-duration: 0.2s;
		}
	}

	.dropdownItem:hover {
		box-shadow: 0 0.2rem 0.4rem ${COLORS.darkBlue + "2d"};
		a {
			border-color: ${COLORS.Gray};
		}

		.navButtonsDropdown {
			top: 5rem;
			width: 12%;
			padding: 0;
			height: auto;
			box-shadow: 0 0.2rem 0.4rem ${COLORS.darkBlue + "2d"};
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			a {
				border-color: ${COLORS.Gray};
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				height: 5rem;
				width: 100%;
				padding: 0 0.5rem;
			}

			a:hover {
				border-color: ${COLORS.mainOrange};
			}
		}
	}

	@media screen and (max-width: 1300px) {
		flex-wrap: wrap;

		.wrapper {
			width: 100%;
			.hamburger {
				display: flex;
				padding-top: 0;
				z-index: 1;
			}

			.homeButton {
				margin-left: 5%;
				h1 {
					font-size: ${FONTSIZE.h1Mobile};
				}
				p {
					font-size: 0.87rem;
				}
			}

			.desktopNav {
				z-index: -10;
				gap: 0;
				box-shadow: 0 0.2rem 0.2rem ${COLORS.darkBlue + "2d"};
				display: ${({ $hamburgerOpen }) =>
					$hamburgerOpen ? "flex" : "none"};
				margin-top: 20rem;
				position: absolute;
				flex-direction: column;
				align-items: flex-end;
				width: 100%;
				transition-duration: 0.2s;
				background-color: ${COLORS.White};
				overflow: hidden;

				li {
					width: 100%;
					height: 3.5rem;

					.navButtons {
						padding: 0.5rem 0;
						height: 3.5rem;
						width: 100%;
						border-bottom: solid 0.15rem ${COLORS.Gray};
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: ${FONTSIZE.aMobile};
					}

					.navButtons:hover {
						border-color: ${COLORS.mainOrange};
					}
				}
			}
		}
		.dropdownItem {
			height: auto;

			.navButtonsDropdown {
				top: 0;
				display: none;
				position: absolute;
				transition-duration: 0.2s;
			}
		}

		.dropdownItem:hover {
			box-shadow: none;
			.navButtonsDropdown {
				display: none;
			}
		}
	}
`;
