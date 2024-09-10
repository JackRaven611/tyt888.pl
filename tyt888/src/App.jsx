import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./Components/scrollToTop/scrollToTop";
import { BurgerProvider } from "./Components/hamburger/burgerContext/burgerContext";
import { Nav } from "./Components/nav/nav";
import { Main } from "./Components/pages/main";
import { Footer } from "./Components/footer/footer";
import { Products } from "./Components/pages/products";
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

				<Routes>
					<Route
						path='/'
						element={<Main />}
						errorElement={<NotFound />}
					/>
					<Route path='/products' element={<Products />}></Route>
					<Route
						path='/products/DMR'
						element={<Products type='DMR' />}
					></Route>
					<Route
						path='/products/analog'
						element={<Products type='analog' />}
					></Route>
					<Route
						path='/products/poc'
						element={<Products type='poc' />}
					></Route>

					<Route
						path='/products/DMR/md9600'
						element={<ProductPanel type='DMR' series='md9600' />}
					></Route>
					<Route
						path='/products/DMR/md750'
						element={<ProductPanel type='DMR' series='md750' />}
					></Route>
					<Route
						path='/products/DMR/md680'
						element={<ProductPanel type='DMR' series='md680' />}
					></Route>
					<Route
						path='/products/analog/md380'
						element={<ProductPanel type='DMR' series='md380' />}
					></Route>
					<Route
						path='/products/analog/md390'
						element={<ProductPanel type='DMR' series='md390' />}
					></Route>
					<Route
						path='/products/DMR/md390p'
						element={<ProductPanel type='DMR' series='md390p' />}
					></Route>
					<Route
						path='/products/analog/tcf1'
						element={<ProductPanel type='analog' series='tcf1' />}
					></Route>
					<Route
						path='/products/analog/tc999'
						element={<ProductPanel type='analog' series='tc999' />}
					></Route>
					<Route
						path='/products/analog/thuv88'
						element={<ProductPanel type='analog' series='thuv88' />}
					></Route>
					<Route
						path='/products/analog/thuv99'
						element={<ProductPanel type='analog' series='thuv99' />}
					></Route>
					<Route
						path='/products/analog/th8600'
						element={<ProductPanel type='analog' series='th8600' />}
					></Route>
					<Route
						path='/products/analog/th9000d'
						element={
							<ProductPanel type='analog' series='th9000d' />
						}
					></Route>
					<Route
						path='/products/poc/ip66'
						element={<ProductPanel type='poc' series='ip66' />}
					></Route>
					<Route
						path='/products/poc/ip77'
						element={<ProductPanel type='poc' series='ip77' />}
					></Route>
					<Route
						path='/products/poc/ip398'
						element={<ProductPanel type='poc' series='ip398' />}
					></Route>

					<Route path='/blog' element={<Blog />} />
					<Route
						path='/blog/article/*'
						element={<BlogArticlePage />}
					/>

					<Route path='/contact' element={<Contact />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
