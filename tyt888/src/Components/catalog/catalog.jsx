import { CatalogStyled } from ".";
import { Product } from "./product/product";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Catalog = ({ type }) => {
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
					link={`/products/profesional/md9600`}
				/>
				<Product
					type='professional'
					series='th9000d'
					link={`/products/profesional/th9000d`}
				/>
				<Product
					type='professional'
					series='tcf1'
					link={`/products/profesional/tcf1`}
				/>
				<Product
					type='professional'
					series='tc999'
					link={`/products/profesional/tc999`}
				/>
				<Product
					type='professional'
					series='md680'
					link={`/products/profesional/md680`}
				/>
				<Product
					type='professional'
					series='md390p'
					link={`/products/profesional/md390p`}
				/>
				<Product
					type='professional'
					series='md750'
					link={`/products/profesional/md750`}
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
		} else if (type === "accessories") {
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
