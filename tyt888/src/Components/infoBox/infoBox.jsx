import { InfoBoxStyled } from ".";
import { BoxArticle } from "./boxArticle/boxArticle";
import { TEXTS } from "../../Consts/Content";
import md390p from "../../img/mduv390.webp";
import th9000d from "../../img/th9000dpro.webp";
import ip66 from "../../img/IP66.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const InfoBox = () => {
	const main = TEXTS.main;

	return (
		<InfoBoxStyled>
			<div>
				<BoxArticle
					link='/products/analog'
					imgUrl={th9000d}
					articleText={main.handmadeText}
					articleTitle={main.handmadeTitle}
				></BoxArticle>
				<BoxArticle
					link='products/DMR'
					imgUrl={md390p}
					articleText={main.designText}
					articleTitle={main.designTitle}
				></BoxArticle>
				<BoxArticle
					link='/products/poc'
					imgUrl={ip66}
					articleText={main.effectiveness}
					articleTitle={main.effectivenessTitle}
				></BoxArticle>
			</div>
		</InfoBoxStyled>
	);
};
