import { Route, Routes } from "react-router-dom";

import "./App.css";
import { About, Blogs, Contact, Home, Locations, Products } from "./pages";
import Dashboard from "./pages/dashboard";
import ProductPage from "./pages/product-details";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			{/* <Navbar2 /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:productId" element={<ProductPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
