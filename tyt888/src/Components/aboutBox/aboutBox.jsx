import { AboutBoxStyled } from ".";
import { TEXTS } from "../../Consts/Content";
import foto3 from "../../img/x (33).webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutBox = () => {
	const main = TEXTS.main;
	return (
		<AboutBoxStyled>
			<div>
				<img src={foto3} alt='redFed antenna' loading='lazy' />

				<h2>{main.aboutTitle}</h2>
				<p>{main.aboutText}</p>
			</div>
		</AboutBoxStyled>
	);
};
