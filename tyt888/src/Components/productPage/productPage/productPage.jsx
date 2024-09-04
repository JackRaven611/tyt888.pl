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
						link: `/products/${type}#`,
						name: TEXTS.breadcrumbs[type],
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
									{product.linkV2 ? (
										<>
											<Link
												to={product.linkV1}
												target='_blank'
												rel='noopener noreferrer'
											>
												{product.linkV1Title}
											</Link>
											<Link
												to={product.linkV2}
												target='_blank'
												rel='noopener noreferrer'
											>
												{product.linkV2Title}
											</Link>
										</>
									) : (
										<Link
											to={product.linkV1}
											target='_blank'
											rel='noopener noreferrer'
										>
											{product.linkV1Title}
										</Link>
									)}
								</div>
							</div>
						</aside>
					</div>
					<div className='infoWrapper'>
						<div>
							<h3>{common.functionsTitle}</h3>
							<ul>
								{product.functions.map((func) => {
									return <li>{func}</li>;
								})}
							</ul>
						</div>
						<div>
							{product.spec ? (
								<>
									<h3>{common.specTitle}</h3>
									<ul>
										{product.spec.map((s) => {
											return <li>{s}</li>;
										})}
									</ul>
								</>
							) : null}
						</div>
					</div>
				</div>
			</ProductPageStyled>
		</>
	);
};
