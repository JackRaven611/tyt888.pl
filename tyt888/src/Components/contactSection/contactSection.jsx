import { ContactSectionStyled } from ".";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ContactSection = () => {
	const common = TEXTS.common;
	const contact = TEXTS.contactSection;

	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "",
						name: ``,
					},
				]}
			/>
			<ContactSectionStyled>
				<article>
					<img src='' alt='red antenna hd' loading='lazy' />

					<div>
						<h2>{TEXTS.footer.contactTitle}</h2>
						<ul>
							<li className='adress'>
								<h3>{common.storeTitle}:</h3>
								<a
									href={common.location}
									target='_blank'
									rel='noopener noreferrer'
								>
									<p>{common.storeLocation}</p>
								</a>
							</li>
							<li>
								<h3>{common.hoursTitle}:</h3>
								<p>{common.open}</p>
							</li>
							<li>
								<h3>{common.emailTitle}:</h3>
								<p>{common.email}</p>
							</li>
							<li>
								<h3>{common.phoneMainTitle}:</h3>
								<p>{common.phoneMain}</p>
							</li>
							<li>
								<h3>{common.phoneServiceTitle}:</h3>
								<p>{common.phoneService}</p>
							</li>
							<li>
								<h3>{common.phoneSecTitle}:</h3>
								<p>{common.phoneSec}</p>
							</li>
							<li>
								<h3>{contact.formTitle}:</h3>
								<a
									href={contact.formLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<p>{contact.form}</p>
								</a>
							</li>
						</ul>
					</div>
				</article>
			</ContactSectionStyled>
		</>
	);
};
