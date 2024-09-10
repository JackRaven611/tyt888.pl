import { BackgroundStyled } from ".";
import { ImgFadeStyled } from "../imgFade/index";
import { TEXTS } from "../../Consts/Content";
import foto10 from "../../img/TYT_foto10.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Background = () => {
	const main = TEXTS.main;

	return (
		<BackgroundStyled>
			<img src={foto10} alt='Background' loading='lazy' />
			<ImgFadeStyled />
			<header>
				<h1>{main.header}</h1>
				<h3>{main.headerP}</h3>
			</header>
		</BackgroundStyled>
	);
};
