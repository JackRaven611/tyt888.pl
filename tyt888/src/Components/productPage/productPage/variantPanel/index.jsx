import styled from "styled-components";
import { COLORS } from "../../../../Consts/Colors";
import { FONTSIZE } from "../../../../Consts/FontSize";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const VariantPanelStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: center;

	&&.variant {
		flex-direction: row;
	}

	select {
		background-color: transparent;
		border: none;
		margin-right: 2rem;
		height: 2.3rem;
		min-width: 6rem;
		text-align: center;
		font-size: ${FONTSIZE.p};
		font-weight: ${FONTSIZE.weight.bold};
		transition-duration: 0.2s;
		border-bottom: solid 0.15rem ${COLORS.darkBlue};
	}

	select:hover {
		color: ${COLORS.mainOrange};
		border-color: ${COLORS.mainOrange};
	}

	.checkboxes {
		width: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 1rem;

		margin: 0;

		li {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2.3rem;

			label {
				display: flex;
				align-items: center;
				border-radius: 0.5rem;
				padding: 0 1rem;
				height: 2.3rem;
				margin: 0;
				font-size: ${FONTSIZE.p};
				font-weight: ${FONTSIZE.weight.bold};
				border: solid 0.15rem ${COLORS.darkBlue};
				transition-duration: 0.2s;
			}

			label:hover {
				border-color: ${COLORS.mainOrange};
				color: ${COLORS.mainOrange};
			}

			.label {
				border-color: ${COLORS.mainOrange};
				color: ${COLORS.mainOrange};
			}

			input {
				opacity: 0;
				position: absolute;
			}
		}
	}

	@media screen and (max-width: 1300px) {
		width: 100%;
		justify-content: center;
		margin: 1rem 0;

		.checkboxes {
			margin: 0;
			gap: 0.5rem;
		}
	}

	@media screen and (max-width: 520px) {
		margin: 0;

		select {
			margin: 0 1rem 0 0;
		}

		.checkboxes {
			gap: 0.5rem;
			li {
				label {
					padding: 0 0.5rem;
				}
			}
		}
	}
`;
