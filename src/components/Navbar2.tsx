import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/img/logo.png';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const getActiveLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? 'block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-200 ml-8 text-blue-700 dark:text-blue-500'
			: 'block mt-4 lg:inline-block lg:mt-0 text-black hover:text-text-gray-200 ml-8 text-gray-500 dark:text-gray-400';

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-[#e4e7eb] p-6">
			<div className="flex items-center flex-shrink-0 text-[#62acb4] mr-6">
				<img src={Logo} alt="logo" className="h-20 mr-2 w-30" />
			</div>
			<div className="block lg:hidden">
				<button
					onClick={toggleMenu}
					className="flex items-center px-3 py-2 border rounded text-black border-[#62acb4] hover:text-[#62acb4] hover:border-[#62acb4]"
				>
					<svg
						className="w-3 h-3 fill-current"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
					</svg>
				</button>
			</div>

			<div
				className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
					isOpen ? '' : 'hidden'
				} lg:justify-end space-x-4`}
			>
				<div className="space-x-8 text-sm lg:flex-grow lg:flex lg:justify-end">
					<NavLink to="/" className={getActiveLinkClass}>
						HOME
					</NavLink>
					<NavLink to="/about" className={getActiveLinkClass}>
						ABOUT
					</NavLink>
					<NavLink to="/products" className={getActiveLinkClass}>
						PRODUCTS
					</NavLink>
					<NavLink to="/blogs" className={getActiveLinkClass}>
						BLOGS
					</NavLink>
					<NavLink to="/contact" className={getActiveLinkClass}>
						CONTACT
					</NavLink>
					<NavLink to="/locations" className={getActiveLinkClass}>
						LOCATIONS
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
