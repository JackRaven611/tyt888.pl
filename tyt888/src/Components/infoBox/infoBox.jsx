import { InfoBoxStyled } from ".";
import { BoxArticle } from "./boxArticle/boxArticle";
import { TEXTS } from "../../Consts/Content";
import foto4 from "../../img/TYT_foto4.webp";
import foto5 from "../../img/TYT_foto5.webp";
import foto3 from "../../img/TYT_foto3.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const InfoBox = () => {
	const main = TEXTS.main;

	return (
		<InfoBoxStyled>
			<div>
				<BoxArticle
					imgUrl={foto3}
					articleText=''
					articleTitle=''
				></BoxArticle>
				<BoxArticle
					imgUrl={foto4}
					articleText=''
					articleTitle=''
				></BoxArticle>
				<BoxArticle
					imgUrl={foto5}
					articleText=''
					articleTitle=''
				></BoxArticle>
			</div>
		</InfoBoxStyled>
	);
};
