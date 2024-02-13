import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Footer, Navbar } from './components';
import { About, Blogs, Contact, Home, Locations, Products } from './pages';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/products" element={<Products />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
