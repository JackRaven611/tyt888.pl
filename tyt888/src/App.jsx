import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./Components/scrollToTop/scrollToTop";
import { BurgerProvider } from "./Components/hamburger/burgerContext/burgerContext";
import { AntennaProvider } from "./Components/productPage/antennaProvider";
import { Nav } from "./Components/nav/nav";
import { Main } from "./Components/pages/main";
import { Footer } from "./Components/footer/footer";
import { Products } from "./Components/pages/products";
import { About } from "./Components/pages/about";
import { Contact } from "./Components/pages/contact";
import { NotFound } from "./Components/pages/notFound";
import { ProductPanel } from "./Components/pages/productPanel";
import { Blog } from "./Components/pages/blog";
import { BlogArticlePage } from "./Components/pages/blogArticlePage";

/*Web Design & Development by: Jakub "Jacek" Bedynek | kuba.xray@gmail.com*/

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className='App'>
				<BurgerProvider>
					<Nav />
				</BurgerProvider>
				<AntennaProvider>
					<Routes>
						<Route
							path='/'
							element={<Main />}
							errorElement={<NotFound />}
						/>
						<Route path='/products' element={<Products />}></Route>

						<Route path='/blog' element={<Blog />} />
						<Route
							path='/blog/article/*'
							element={<BlogArticlePage />}
						/>

						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</AntennaProvider>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
