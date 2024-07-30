import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const RadioImg = ({ series, type, size }) => {
	const product = TEXTS.products[type][series];

	return <img src='' alt={product.model} loading='lazy' />;
};
