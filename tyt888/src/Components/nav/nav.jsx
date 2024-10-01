import { NavStyled } from ".";
import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import { Hamburger } from "../hamburger/hamburger";
import { BurgerContext } from "../hamburger/burgerContext/burgerContext";
import { Dropdown } from "./dropdown";
import { TEXTS } from "../../Consts/Content";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

export const Nav = () => {
	const nav = TEXTS.nav;
	const { hamburgerOpen, setHamburgerOpen } = useContext(BurgerContext);
	const toggleBurgerNav = () => {
		hamburgerOpen
			? setHamburgerOpen(!hamburgerOpen)
			: setHamburgerOpen(hamburgerOpen);
	};

	return (
		<NavStyled $hamburgerOpen={hamburgerOpen}>
			<div className='wrapper'>
				<Link className='homeButton' to='/#' onClick={toggleBurgerNav}>
					<h1>{nav.brandName}</h1>
				</Link>
				<Hamburger className='hamburger' />
				<ul className='desktopNav'>
					<li>
						<Dropdown toggleBurgerNav={toggleBurgerNav} />
					</li>
					{/* <li>
						<Link
							className='navButtons'
							to='/blog#'
							onClick={toggleBurgerNav}
						>
							{nav.navBtnBlog}
						</Link>
					</li> */}
					<li>
						<Link
							className='navButtons'
							to='/contact#'
							onClick={toggleBurgerNav}
						>
							{nav.navBtnContact}
						</Link>
					</li>
				</ul>
			</div>
		</NavStyled>
	);
};
