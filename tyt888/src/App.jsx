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
						path='/products/professional'
						element={<Products type='professional' />}
					></Route>
					<Route
						path='/products/amateur'
						element={<Products type='amateur' />}
					></Route>

					<Route
						path='/products/professional/md9600'
						element={
							<ProductPanel type='professional' series='md9600' />
						}
					></Route>
					<Route
						path='/products/professional/th9000d'
						element={
							<ProductPanel
								type='professional'
								series='th9000d'
							/>
						}
					></Route>
					<Route
						path='/products/professional/tcf1'
						element={
							<ProductPanel type='professional' series='tcf1' />
						}
					></Route>
					<Route
						path='/products/professional/tc999'
						element={
							<ProductPanel type='professional' series='tc999' />
						}
					></Route>
					<Route
						path='/products/professional/md680'
						element={
							<ProductPanel type='professional' series='md680' />
						}
					></Route>
					<Route
						path='/products/professional/md390p'
						element={
							<ProductPanel type='professional' series='md390p' />
						}
					></Route>
					<Route
						path='/products/professional/md750'
						element={
							<ProductPanel type='professional' series='md750' />
						}
					></Route>
					<Route
						path='/products/amateur/md9600'
						element={
							<ProductPanel type='amateur' series='md9600' />
						}
					></Route>
					<Route
						path='/products/amateur/th8600'
						element={
							<ProductPanel type='amateur' series='th8600' />
						}
					></Route>
					<Route
						path='/products/amateur/thuv88'
						element={
							<ProductPanel type='amateur' series='thuv88' />
						}
					></Route>
					<Route
						path='/products/amateur/thuv99'
						element={
							<ProductPanel type='amateur' series='thuv99' />
						}
					></Route>
					<Route
						path='/products/amateur/md750'
						element={<ProductPanel type='amateur' series='md750' />}
					></Route>
					<Route
						path='/products/amateur/md380'
						element={<ProductPanel type='amateur' series='md380' />}
					></Route>
					<Route
						path='/products/amateur/md390'
						element={<ProductPanel type='amateur' series='md390' />}
					></Route>
					<Route
						path='/products/amateur/md390p'
						element={
							<ProductPanel type='amateur' series='md390p' />
						}
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
