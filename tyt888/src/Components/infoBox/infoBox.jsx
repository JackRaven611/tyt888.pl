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
					articleText=''
					articleTitle=''
				></BoxArticle>
				<BoxArticle
					imgUrl=''
					articleText=''
					articleTitle=''
				></BoxArticle>
				<BoxArticle
					imgUrl=''
					articleText=''
					articleTitle=''
				></BoxArticle>
			</div>
		</InfoBoxStyled>
	);
};
