import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/img/logo.png";

function Navbar() {
	const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "text-blue-700 dark:text-blue-500"
			: "text-gray-500 dark:text-gray-400";

	return (
		<div className="grid items-center w-full h-16 px-4 border-b font-poppins md:px-6">
			<nav className="sticky top-0 flex items-center w-full space-x-4 text-sm">
				<Link to="/">
					<img src={Logo} alt="logo" className="object-contain w-24" />
				</Link>

				<div className="block lg:hidden">
					<button
						id="menu-button"
						className="flex items-center px-3 py-2 border rounded text-black border-[#62acb4] hover:text-[#62acb4] hover:border-[#62acb4]"
					>
						<svg
							id="menu-icon"
							className="w-3 h-3 fill-current"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
						</svg>
					</button>
				</div>

				<div className="flex-grow block w-full space-x-4 lg:flex lg:items-center lg:w-auto lg:justify-end">
					<nav className="space-x-8 lg:flex-grow lg:flex lg:justify-end">
						<NavLink to="/" className={getNavLinkClass}>
							Home
						</NavLink>
						<NavLink to="/about" className={getNavLinkClass}>
							About
						</NavLink>
						<NavLink to="/products" className={getNavLinkClass}>
							Products
						</NavLink>
						<NavLink to="/blogs" className={getNavLinkClass}>
							Blogs
						</NavLink>
						<NavLink to="/contact" className={getNavLinkClass}>
							Contact
						</NavLink>
						<NavLink to="/locations" className={getNavLinkClass}>
							Locations
						</NavLink>
					</nav>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
