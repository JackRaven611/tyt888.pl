import { CatalogStyled } from ".";
import { useEffect, useContext } from "react";
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
					link={`/products/profesional/`}
					image=''
				/>
			</li>
		</>
	);

	const accessories = (
		<>
			<li className='headerWrapper'>
				<h2>{}</h2>
				<p>{}</p>
			</li>
			<li>
				<Product type='' series='' link='' image='' />
				<Product type='' series='' link='' image='' />
				<Product type='' series='' link='' image='' />
				<Product type='' series='' link='' image='' />
				<Product type='' series='' link='' image='' />
			</li>
		</>
	);

	const handleType = () => {
		if (type === "professional") {
			return <>{professional}</>;
		} else if (type === "accessories") {
			return accessories;
		} else {
			return (
				<>
					{professional}

					{accessories}
				</>
			);
		}
	};

	const handleBreadcrumbs = () => {
		if (type === "professional") {
			return [
				{
					link: "/products#",
					name: "",
				},
				{
					link: "",
					name: "",
				},
			];
		} else if (type === "accessories") {
			return [
				{
					link: "/products#",
					name: "",
				},
				{
					link: "",
					name: "",
				},
			];
		} else {
			return [
				{
					link: "",
					name: "",
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
