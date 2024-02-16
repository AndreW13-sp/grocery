import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Footer } from "./components";
import Navbar2 from "./components/Navbar2";
import { About, Blogs, Contact, Home, Locations, Products } from "./pages";
import ProductPage from "./pages/product-details";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Navbar2 />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:productId" element={<ProductPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
