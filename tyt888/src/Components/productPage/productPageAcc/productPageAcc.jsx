import { Link } from "react-router-dom";
import { ProductPageStyled } from "../productPage";
import { VaraintAcc } from "./variantAcc";
import { AccImg } from "./accImg";
import { RedCon } from "./redCon";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPageAcc = ({ series, size }) => {
	const product = TEXTS.products.accessories[series];
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
						link: "/products/accessories#",
						name: TEXTS.breadcrumbs.accessories,
					},
					{
						link: "",
						name: `${
							product[size]
								? product[size].series
								: product.common.series
						}`,
					},
				]}
			/>
			<ProductPageStyled>
				<div className='wrapper'>
					<div className='selectorkWrapper'>
						<AccImg series={series} size={size} />
						<aside>
							<h2>
								{product[size]
									? product[size].series
									: product.common.series}
							</h2>
							{<VaraintAcc series={series} />}
							<div className='descriptionWrapper'>
								<p>
									{product[size]
										? product[size].description
										: product.common.descriptionPage}
								</p>
								<div className='linkWrapper'>
									{TEXTS.common.pl ? (
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={
												product[size]
													? product[size].storeLink
													: product.common.storeLink
											}
										>
											{common.linkTitle}
										</a>
									) : (
										<Link
											to={
												product[size]
													? product[size].storeLink
													: product.common.storeLink
											}
										>
											{common.linkTitle}
										</Link>
									)}
								</div>
							</div>
						</aside>
					</div>
					{series === "redCon" ? (
						<RedCon series={series} size={size} />
					) : null}
				</div>
			</ProductPageStyled>
		</>
	);
};
