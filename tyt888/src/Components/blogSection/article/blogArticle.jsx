import { BlogArticleStyled } from ".";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";
import { useLocation } from "react-router-dom";
import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const BlogArticle = () => {
	const location = useLocation();
	const index = location.pathname.slice(-1);

	const imgs = [[], [], []];

	const coverImgs = [];

	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "/blog#",
						name: TEXTS.breadcrumbs.blog,
					},
					{
						link: `/blog/article/${index}`,
						name: TEXTS.blogSection.articles[index].title,
					},
				]}
			/>
			<BlogArticleStyled>
				<div className='wrapper'>
					<img
						src={coverImgs[index]}
						alt='cover'
						className='coverImg'
					/>
					<div className='textWrapper'>
						<h2>{TEXTS.blogSection.articles[index].title}</h2>
						<p>{TEXTS.blogSection.articles[index].content[0]}</p>
						<ul>
							{imgs[index].map((img) => {
								return (
									<li key={img.description}>
										<img
											src={img.img}
											alt={img.description}
										/>
										<p>{img.description}</p>
									</li>
								);
							})}
						</ul>
						{TEXTS.blogSection.articles[index].content[1] ? (
							<p>
								{TEXTS.blogSection.articles[index].content[1]}
							</p>
						) : null}
						{TEXTS.blogSection.articles[index].content[2] ? (
							<p>
								{TEXTS.blogSection.articles[index].content[2]}
							</p>
						) : null}
					</div>
				</div>
			</BlogArticleStyled>
		</>
	);
};
