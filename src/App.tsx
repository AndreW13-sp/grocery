import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const AboutPage = lazy(() => import("./pages/about"));
const BlogsPage = lazy(() => import("./pages/blogs"));
const ContactPage = lazy(() => import("./pages/contact"));
const HomePage = lazy(() => import("./pages/home"));
const LocationsPage = lazy(() => import("./pages/locations"));
const ProductsPage = lazy(() => import("./pages/products"));
const EditProduct = lazy(() => import("./pages/admin/EditProduct"));
const ProductDetailPage = lazy(() => import("./pages/product-details"));

const DashboardPage = lazy(() => import("./pages/dashboard"));
const AdminPage = lazy(() => import("./pages/admin"));
const AdminLoginPage = lazy(() => import("./pages/admin/login"));

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
				<Route path="/products/:productId" element={<ProductDetailPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/admin/edit-product/:productId" element={<EditProduct />} />
				<Route path="/admin/login" element={<AdminLoginPage />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
