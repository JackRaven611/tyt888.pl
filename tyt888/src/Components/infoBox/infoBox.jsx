import { InfoBoxStyled } from ".";
import { BoxArticle } from "./boxArticle/boxArticle";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const InfoBox = () => {
	const main = TEXTS.main;

	return (
		<InfoBoxStyled>
			<div>
				<BoxArticle
					imgUrl=''
					articleText={main.handmadeText}
					articleTitle={main.handmadeTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl=''
					articleText={main.designText}
					articleTitle={main.designTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl=''
					articleText={main.effectiveness}
					articleTitle={main.effectivenessTitle}
				></BoxArticle>
			</div>
		</InfoBoxStyled>
	);
};
