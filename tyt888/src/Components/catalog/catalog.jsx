import { CatalogStyled } from ".";
import { useEffect, useContext } from "react";
import { AntennaContext } from "../productPage/antennaProvider";
import { Product } from "./product/product";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Catalog = ({ type }) => {
	const { setType, setSize } = useContext(AntennaContext);

	useEffect(() => {
		setType("standard");
		setSize("long");
	}, []);

	const wire = (
		<>
			<li className='headerWrapper'>
				<h2>{TEXTS.products.wire.common.title}</h2>
				<p>{TEXTS.products.wire.common.description}</p>
			</li>
			<li>
				<Product
					type='wire'
					series='redFed'
					link='/products/wire/redFed#'
					image=''
				/>
				<Product
					type='wire'
					series='redDipole'
					link='/products/wire/redDipole#'
					image=''
				/>
				<Product
					type='wire'
					series='redWire'
					link='/products/wire/redWire#'
					image=''
				/>
			</li>
		</>
	);

	const accessories = (
		<>
			<li className='headerWrapper'>
				<h2>{TEXTS.products.accessories.common.title}</h2>
				<p>{TEXTS.products.accessories.common.description}</p>
			</li>
			<li>
				<Product
					type='accessories'
					series='miniTuner'
					link='/products/accessories/miniTuner#'
					image=''
				/>
				<Product
					type='accessories'
					series='redChoke'
					link='/products/accessories/redChoke#'
					image=''
				/>
				<Product
					type='accessories'
					series='redMount'
					link='/products/accessories/redMount#'
					image=''
				/>
				<Product
					type='accessories'
					series='redCon'
					link='/products/accessories/redCon#'
					image=''
				/>
				<Product
					type='accessories'
					series='redLine'
					link='/products/accessories/redLine#'
					image=''
				/>
			</li>
		</>
	);

	const handleType = () => {
		if (type === "wire") {
			return <>{wire}</>;
		} else if (type === "accessories") {
			return accessories;
		} else {
			return (
				<>
					{wire}
					<li className='headerWrapper'></li>
					<li className='placeHolder'>
						<h3>{TEXTS.common.placeHolder}</h3>
					</li>
					{accessories}
				</>
			);
		}
	};

	const handleBreadcrumbs = () => {
		if (type === "wire") {
			return [
				{
					link: "/products#",
					name: TEXTS.breadcrumbs.products,
				},
				{
					link: "",
					name: TEXTS.breadcrumbs.wire,
				},
			];
		} else if (type === "accessories") {
			return [
				{
					link: "/products#",
					name: TEXTS.breadcrumbs.products,
				},
				{
					link: "",
					name: TEXTS.breadcrumbs.accessories,
				},
			];
		} else {
			return [
				{
					link: "",
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
