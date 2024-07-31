import { HashLink as Link } from "react-router-hash-link";
import { ProductPageStyled } from ".";
import { RadioImg } from "./antennaImg";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPage = ({ series, type }) => {
	const product = TEXTS.products[type][series];
	const common = TEXTS.products.common;

	return (
		<>
			<Breadcrumbs
				paths={[
					{
						link: "/products#",
						name: TEXTS.breadcrumbs.products,
					},
					{
						link: "/products/professional#",
						name: TEXTS.breadcrumbs.wire,
					},
					{
						link: "",
						name: product.title,
					},
				]}
			/>
			<ProductPageStyled>
				<div className='wrapper'>
					<div className='selectorkWrapper'>
						<RadioImg series={series} type={type} />
						<aside>
							<h2>{product.title}</h2>
							<div className='descriptionWrapper'>
								<p>{product.description}</p>
								<div className='linkWrapper'>
									<Link to={product.linkV1}>
										{common.linkTitle}
									</Link>
								</div>
							</div>
						</aside>
					</div>
					<div className='infoWrapper'>
						<div>
							<h3>{}</h3>
							<p>
								{}
								<br />
								<br />
								{TEXTS.common.disclaimer}
							</p>
						</div>
						<div>
							<h3>{common.techSpec}</h3>
							<ul></ul>
						</div>
					</div>
				</div>
			</ProductPageStyled>
		</>
	);
};
