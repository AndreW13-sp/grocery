import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/img/logo.png';

function Navbar() {
	const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? 'text-blue-700 dark:text-blue-500'
			: 'text-gray-500 dark:text-gray-400';

	return (
		<div className="grid items-center w-full h-16 px-4 border-b font-poppins md:px-6">
			<nav className="sticky top-0 flex items-center w-full space-x-4 text-sm">
				<Link to="/">
					<img src={Logo} alt="logo" className="object-contain w-24" />
				</Link>

				<div className="flex-1 ml-auto">
					<nav className="flex justify-end space-x-4">
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
