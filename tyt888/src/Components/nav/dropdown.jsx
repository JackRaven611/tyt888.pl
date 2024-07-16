import { Link } from "react-router-dom";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Dropdown = ({ toggleBurgerNav }) => {
	return (
		<div className='dropdownItem'>
			<Link
				className='navButtons'
				to='/products#'
				onClick={toggleBurgerNav}
			>
				{TEXTS.nav.navBtnProducts}
			</Link>
			<div className='navButtonsDropdown'>
				<Link
					className=' navButtons'
					to='/products/wire#'
					onClick={toggleBurgerNav}
				>
					{TEXTS.products.wire.common.title}
				</Link>
				<Link
					className='navButtons'
					to='/products/vertical#'
					onClick={toggleBurgerNav}
				></Link>
				<Link
					className='navButtons'
					to='/products/accessories#'
					onClick={toggleBurgerNav}
				>
					{TEXTS.products.accessories.common.title}
				</Link>
			</div>
		</div>
	);
};
