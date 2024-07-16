import { BlogSectionStyled } from ".";
import { ArticleLink } from "./articleLink/articleLink";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BlogSection = () => {
	const blogSection = TEXTS.blogSection;

	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "",
						name: TEXTS.breadcrumbs.blog,
					},
				]}
			/>
			<BlogSectionStyled>
				<h2>{blogSection.header}</h2>
				<ul>
					{blogSection.articles.map((article) => {
						return (
							<li key={article.title}>
								<ArticleLink
									index={article.index}
									title={article.title}
									content={article.content}
									imageLabels={article.imageLabels}
									key={article.index}
								/>
							</li>
						);
					})}
				</ul>
			</BlogSectionStyled>
		</>
	);
};
