import { ProductStyled } from ".";
import { Link } from "react-router-dom";
import { TEXTS } from "../../../Consts/Content";

import md680 from "../../../img/md680.webp";
import md750 from "../../../img/md750.webp";
import md9600 from "../../../img/md9600.webp";
import tcf1 from "../../../img/tcf1.webp";
import tc999 from "../../../img/tc999.webp";
import th9000d from "../../../img/th9000dpro.webp";
import md390p from "../../../img/mduv390.webp";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Product = ({ type, link, series }) => {
	const img = {
		md9600: md9600,
		th9000d: th9000d,
		tcf1: tcf1,
		tc999: tc999,
		md680: md680,
		md390p: md390p,
		md750: md750,
	};

	return (
		<ProductStyled>
			<Link to={link}>
				<img src={img[series]} alt={`${series}`} loading='lazy' />
				<div className='wrapper'>
					<h3>{TEXTS.products[type][series].title}</h3>
				</div>
			</Link>
		</ProductStyled>
	);
};
