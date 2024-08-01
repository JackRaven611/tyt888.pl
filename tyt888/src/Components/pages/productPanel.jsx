import { ProductPage } from "../productPage/productPage/productPage";
import { useContext } from "react";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPanel = ({ series, type }) => {
	return <ProductPage series={series} type={type} />;
};
