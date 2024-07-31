import { CatalogStyled } from ".";
import { Product } from "./product/product";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Catalog = ({ type }) => {
	console.log(type);

	const professional = (
		<>
			<li className='headerWrapper'>
				<h2>{TEXTS.products.professional.common.title}</h2>
				<p>{TEXTS.products.professional.common.title}</p>
			</li>
			<li>
				<Product
					type='professional'
					series='md9600'
					link={`/products/professional/md9600`}
				/>
				<Product
					type='professional'
					series='th9000d'
					link={`/products/professional/th9000d`}
				/>
				<Product
					type='professional'
					series='tcf1'
					link={`/products/professional/tcf1`}
				/>
				<Product
					type='professional'
					series='tc999'
					link={`/products/professional/tc999`}
				/>
				<Product
					type='professional'
					series='md680'
					link={`/products/professional/md680`}
				/>
				<Product
					type='professional'
					series='md390p'
					link={`/products/professional/md390p`}
				/>
				<Product
					type='professional'
					series='md750'
					link={`/products/professional/md750`}
				/>
			</li>
		</>
	);

	const amateur = (
		<>
			<li className='headerWrapper'>
				<h2>{TEXTS.products.amateur.common.title}</h2>
				<p>{TEXTS.products.amateur.common.title}</p>
			</li>
			<li>
				<Product
					type='amateur'
					series='md9600'
					link={`/products/amateur/md9600`}
				/>
			</li>
		</>
	);

	const handleType = () => {
		if (type === "professional") {
			return <>{professional}</>;
		} else if (type === "amateur") {
			return <>{amateur}</>;
		} else {
			return (
				<>
					{professional}
					{amateur}
				</>
			);
		}
	};

	const handleBreadcrumbs = () => {
		if (type === "professional") {
			return [
				{
					link: "/products#",
					name: TEXTS.breadcrumbs.products,
				},
				{
					link: "/products/professional#",
					name: TEXTS.breadcrumbs.professional,
				},
			];
		} else if (type === "amateur") {
			return [
				{
					link: "/products#",
					name: "Produkty",
				},
				{
					link: "/products/amateur#",
					name: TEXTS.breadcrumbs.amateur,
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
