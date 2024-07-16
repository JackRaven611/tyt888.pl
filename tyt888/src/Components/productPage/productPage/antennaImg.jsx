import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AntennaImg = ({ series, type, size }) => {
	const product = TEXTS.products.wire[series][type];

	// const img = () => {
	// 	if (series === "redFed") {
	// 		return redFed[type + size];
	// 	} else if (series === "redDipole") {
	// 		return redDipole[type];
	// 	} else {
	// 		return redWire[type + size];
	// 	}
	// };

	return <img src='' alt={product.model} loading='lazy' />;
};
