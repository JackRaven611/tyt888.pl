import { CatalogStyled } from ".";
import { Product } from "./product/product";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Catalog = ({ type }) => {
	console.log(type);

	const DMR = (
		<>
			<li className='headerWrapper'>
				<h2>{TEXTS.products.DMR.common.title}</h2>
				<p>{TEXTS.products.DMR.common.title}</p>
			</li>
			<li>
				<Product
					type='DMR'
					series='md9600'
					link={`/products/DMR/md9600`}
				/>

				<Product
					type='DMR'
					series='md680'
					link={`/products/DMR/md680`}
				/>
				<Product
					type='DMR'
					series='md380'
					link={`/products/DMR/md380`}
				/>
				<Product
					type='DMR'
					series='md390'
					link={`/products/DMR/md390`}
				/>
				<Product
					type='DMR'
					series='md390p'
					link={`/products/DMR/md390p`}
				/>

				<Product
					type='DMR'
					series='md750'
					link={`/products/DMR/md750`}
				/>
				<Product
					type='DMR'
					series='md790'
					link={`/products/DMR/md790`}
				/>
			</li>
		</>
	);

	const analog = (
		<>
			<li className='headerWrapper'>
				<h2>{TEXTS.products.analog.common.title}</h2>
				<p>{TEXTS.products.analog.common.title}</p>
			</li>
			<li>
				<Product
					type='analog'
					series='th9000d'
					link={`/products/analog/th9000d`}
				/>
				<Product
					type='analog'
					series='th8600'
					link={`/products/analog/th8600`}
				/>
				<Product
					type='analog'
					series='tcf1'
					link={`/products/analog/tcf1`}
				/>
				<Product
					type='analog'
					series='tc999'
					link={`/products/analog/tc999`}
				/>
				<Product
					type='analog'
					series='thuv88'
					link={`/products/analog/thuv88`}
				/>
				<Product
					type='analog'
					series='thuv99'
					link={`/products/analog/thuv99`}
				/>
			</li>
		</>
	);

	const poc = (
		<>
			<li className='headerWrapper'>
				<h2>{TEXTS.products.poc.common.title}</h2>
				<p>{TEXTS.products.poc.common.title}</p>
			</li>
			<li>
				<Product type='poc' series='ip66' link={`/products/poc/ip66`} />
				<Product type='poc' series='ip77' link={`/products/poc/ip77`} />
				<Product
					type='poc'
					series='ip398'
					link={`/products/poc/ip398`}
				/>
			</li>
		</>
	);

	const handleType = () => {
		if (type === "DMR") {
			return <>{DMR}</>;
		} else if (type === "analog") {
			return <>{analog}</>;
		} else if (type === "poc") {
			return <>{poc}</>;
		} else {
			return (
				<>
					{analog}
					{DMR}
					{poc}
				</>
			);
		}
	};

	const handleBreadcrumbs = () => {
		if (type === "DMR") {
			return [
				{
					link: "/products#",
					name: TEXTS.breadcrumbs.products,
				},
				{
					link: "/products/DMR#",
					name: TEXTS.breadcrumbs.DMR,
				},
			];
		} else if (type === "analog") {
			return [
				{
					link: "/products#",
					name: "Produkty",
				},
				{
					link: "/products/analog#",
					name: TEXTS.breadcrumbs.analog,
				},
			];
		} else if (type === "poc") {
			return [
				{
					link: "/products#",
					name: "Produkty",
				},
				{
					link: "/products/poc#",
					name: TEXTS.breadcrumbs.poc,
				},
			];
		} else {
			return [
				{
					link: "/products#",
					name: TEXTS.breadcrumbs.products,
				},
			];
		}
	};

	return (
		<>
			<Breadcrumbs paths={handleBreadcrumbs()} />
			<CatalogStyled>
				<ul>{handleType()}</ul>
			</CatalogStyled>
		</>
	);
};
