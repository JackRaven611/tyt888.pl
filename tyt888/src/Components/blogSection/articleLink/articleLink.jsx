import { ArticleLinkStyled } from ".";
import { Link } from "react-router-dom";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ArticleLink = ({ index, title }) => {
	return (
		<ArticleLinkStyled>
			<Link to={`/blog/article/${index}`}>
				<img src='' alt={title} />
				<h3>{title}</h3>
			</Link>
		</ArticleLinkStyled>
	);
};
