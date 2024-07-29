import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AntennaImg = ({ series, type, size }) => {
	const product = TEXTS.products.wire[series][type];

	return <img src='' alt={product.model} loading='lazy' />;
};
