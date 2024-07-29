import { ProductStyled } from ".";
import { Link } from "react-router-dom";
import { TEXTS } from "../../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Product = ({ type, link, image, series }) => {
	return (
		<ProductStyled>
			<Link to={link}>
				<img src={image} alt={`${series}`} loading='lazy' />
				<div className='wrapper'>
					<h3>{}</h3>
					<p>{}</p>
				</div>
			</Link>
		</ProductStyled>
	);
};
