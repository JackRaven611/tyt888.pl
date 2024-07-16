import { BoxArticleStyled } from ".";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BoxArticle = ({ imgUrl, articleText, articleTitle }) => {
	return (
		<BoxArticleStyled>
			<div className='infoWrapper'>
				<img src={imgUrl} alt='article img' loading='lazy' />
			</div>
			<h3>{articleTitle}</h3>
			<p>{articleText}</p>
		</BoxArticleStyled>
	);
};
