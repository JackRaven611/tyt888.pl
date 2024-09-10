import { AboutBoxStyled } from ".";
import { TEXTS } from "../../Consts/Content";
import foto3 from "../../img/TYT_foto3.webp";
import foto4 from "../../img/TYT_foto4.webp";
import foto5 from "../../img/TYT_foto5.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutBox = () => {
	const main = TEXTS.main;
	return (
		<AboutBoxStyled>
			<div>
				<div>
					<img src={foto3} alt='redFed antenna' loading='lazy' />
					<img src={foto4} alt='redFed antenna' loading='lazy' />
					<img src={foto5} alt='redFed antenna' loading='lazy' />
				</div>

				<h2>{main.aboutTitle}</h2>
				<p>{main.aboutText}</p>
			</div>
		</AboutBoxStyled>
	);
};
