import { HashLink as Link } from "react-router-hash-link";
import { ProductPageStyled } from ".";
import { AntennaImg } from "./antennaImg";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPage = ({ series, type, size }) => {
	const product = TEXTS.products;
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
						link: "/products/profesional#",
						name: TEXTS.breadcrumbs.wire,
					},
					{
						link: "",
						name: `${
							product[size] ? product[size].model : product.model
						}`,
					},
				]}
			/>
			<ProductPageStyled>
				<div className='wrapper'>
					<div className='selectorkWrapper'>
						<AntennaImg series={series} type={type} size={size} />
						<aside>
							<h2>
								{product[size]
									? product[size].model
									: product.model}
							</h2>
							<div className='descriptionWrapper'>
								<p>
									{size === "max"
										? product.max.description
										: product.description}
									{type === "extreme"
										? product[size].description
										: null}
								</p>
								<div className='linkWrapper'>
									{TEXTS.common.pl ? (
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={
												product[size]
													? product[size].storeLink
													: product.storeLink
											}
										>
											{common.linkTitle}
										</a>
									) : (
										<Link
											to={
												product[size]
													? product[size].storeLink
													: product.storeLink
											}
										>
											{common.linkTitle}
										</Link>
									)}
								</div>
							</div>
						</aside>
					</div>
					<div className='infoWrapper'>
						<div>
							<h3>
								{
									TEXTS.products.wire[series].common
										.descriptionPageTitle
								}
							</h3>
							<p>
								{
									TEXTS.products.wire[series].common
										.descriptionPage
								}
								<br />
								<br />
								{TEXTS.common.disclaimer}
							</p>
						</div>
						<div>
							<h3>{common.techSpec}</h3>
							<ul>
								<li className='description'>
									<h3>{common.bandsTitle}</h3>
									<p>
										{product[size]
											? product[size].bands
											: product.bands}
									</p>
								</li>
								<li className='description'>
									<h3>{common.spanTitle}</h3>
									<p>
										{product[size]
											? product[size].span
											: product.span}
									</p>
								</li>
								<li className='description'>
									<h3>{common.weightTitle}</h3>
									<p>
										{product[size]
											? product[size].weight
											: product.weight}
									</p>
								</li>
								<li className='description'>
									<h3>{common.sizeTitle}</h3>
									<p>{product.size}</p>
								</li>
								<li className='description'>
									<h3>{common.rangeTitle}</h3>
									<p>
										{size === "max"
											? product.max.range
											: product.range}
									</p>
								</li>
								<li className='description'>
									<h3>{common.swrTitle}</h3>
									<p>{product.swr}</p>
								</li>
								<li className='description'>
									<h3>{common.powerTitle}</h3>
									<p>
										{product.ssb}, {product.cw},{" "}
										{product.digi}
									</p>
								</li>
								<li className='description'>
									<h3>{common.connectors}</h3>
									<p>
										{product.feeder}, {product.antenna}
									</p>
								</li>
								<li className='description'>
									<h3>{common.coreTitle}</h3>
									<p>
										{size === "max"
											? product.max.core
											: product.core}
									</p>
								</li>
								<li className='description'>
									<h3>{common.windingsTitle}</h3>
									<p>{product.windings}</p>
								</li>
								<li className='description'>
									<h3>{common.antennaWireTitle}</h3>
									<p>
										{product.antennaWire}
										<sup>2</sup>
									</p>
								</li>
								<li className='description'>
									<h3>{common.wireTitle}</h3>
									<p>{product.wire}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</ProductPageStyled>
		</>
	);
};
