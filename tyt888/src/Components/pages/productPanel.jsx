import { ProductPage } from "../productPage/productPage/productPage";
import { ProductPageAcc } from "../productPage/productPageAcc/productPageAcc";
import { useContext } from "react";
import { AntennaContext } from "../productPage/antennaProvider";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const ProductPanel = ({ series }) => {
	const { type, size } = useContext(AntennaContext);

	const handleSeries = () => {
		if (
			series === "redFed" ||
			series === "redDipole" ||
			series === "redWire"
		) {
			return <ProductPage type={type} size={size} series={series} />;
		} else {
			return <ProductPageAcc type={type} size={size} series={series} />;
		}
	};
	return <>{handleSeries()}</>;
};
