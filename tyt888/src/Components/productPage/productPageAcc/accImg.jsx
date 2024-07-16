import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const AccImg = ({ series, size }) => {
	const product = TEXTS.products.accessories[series];

	const acc = {};

	const img = () => {
		if (series === "miniTuner" || series === "redCon") {
			return acc[series + size];
		} else {
			return acc[series];
		}
	};

	return <img src={img()} alt={product.model} loading='lazy' />;
};
