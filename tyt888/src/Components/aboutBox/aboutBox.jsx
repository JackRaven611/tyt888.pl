import { AboutBoxStyled } from ".";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutBox = () => {
	const main = TEXTS.main;
	return (
		<AboutBoxStyled>
			<div>
				<img src='' alt='redFed antenna' loading='lazy' />
				<h2>{main.aboutTitle}</h2>
				<p>{main.aboutText}</p>
			</div>
		</AboutBoxStyled>
	);
};
