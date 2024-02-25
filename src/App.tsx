import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Admin from "./pages/admin";
import EditProduct from "./pages/admin/EditProduct";

const AboutPage = lazy(() => import("./pages/about"));
const BlogsPage = lazy(() => import("./pages/blogs"));
const ContactPage = lazy(() => import("./pages/contact"));
const HomePage = lazy(() => import("./pages/home"));
const LocationsPage = lazy(() => import("./pages/locations"));
const ProductsPage = lazy(() => import("./pages/products"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
// const AdminPage = lazy(() => import("./pages/admin"));
const ProductDetailPage = lazy(() => import("./pages/product-details"));

function App() {
	return (
		<>
			{/* <Navbar /> */}
			{/* <Navbar2 /> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/blogs" element={<BlogsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/locations" element={<LocationsPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route
					path="/products/:productId"
					element={<ProductDetailPage />}
				/>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/admin" element={<Admin />} />
				<Route
					path="/admin/edit-product/:productId"
					element={<EditProduct />}
				/>
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
