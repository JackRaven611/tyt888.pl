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
					to='/products/DMR#'
					onClick={toggleBurgerNav}
				>
					{TEXTS.nav.categoryDMR}
				</Link>
				<Link
					className='navButtons'
					to='/products/analog#'
					onClick={toggleBurgerNav}
				>
					{TEXTS.nav.categoryanalog}
				</Link>
				<Link
					className='navButtons'
					to='/products/accessories#'
					onClick={toggleBurgerNav}
				>
					{TEXTS.nav.categoryAccessories}
				</Link>
			</div>
		</div>
	);
};
