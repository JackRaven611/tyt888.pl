import { AboutSectionStyled } from ".";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AboutSection = () => {
	const aboutSection = TEXTS.aboutSection;
	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "",
						name: `${TEXTS.breadcrumbs.about}`,
					},
				]}
			/>
			<AboutSectionStyled>
				<article>
					<img src='{baluny}' alt='baluny' loading='lazy' />
					<div>
						<h2>{aboutSection.title}</h2>
						<p>{aboutSection.text}</p>
						<p>{aboutSection.wsrp}</p>
					</div>
				</article>
			</AboutSectionStyled>
		</>
	);
};
