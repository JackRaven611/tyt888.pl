import { InfoBoxStyled } from ".";
import { BoxArticle } from "./boxArticle/boxArticle";
import { TEXTS } from "../../Consts/Content";
import foto7 from "../../img/TYT_foto7.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const InfoBox = () => {
	const main = TEXTS.main;

	return (
		<InfoBoxStyled>
			<div>
				<BoxArticle
					imgUrl={foto7}
					articleText={main.handmadeText}
					articleTitle={main.handmadeTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl={foto7}
					articleText={main.designText}
					articleTitle={main.designTitle}
				></BoxArticle>
				<BoxArticle
					imgUrl={foto7}
					articleText={main.effectiveness}
					articleTitle={main.effectivenessTitle}
				></BoxArticle>
			</div>
		</InfoBoxStyled>
	);
};
