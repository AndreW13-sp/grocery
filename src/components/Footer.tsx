import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.png';

function Footer() {
	return (
		<footer className="w-full py-6 border-t">
			<div className="container grid grid-cols-1 gap-4 px-4 mx-auto md:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-5">
				{/* Logo Section */}
				<div className="flex items-center justify-center md:col-span-1 lg:col-span-1 md:justify-start">
					<img alt="Logo" src={Logo} className="object-cover w-52" />
				</div>

				{/* Content Sections */}
				<div className="grid grid-cols-1 gap-4 md:col-span-1 lg:col-span-4 md:grid-cols-2 lg:grid-cols-4">
					{/* Contact Section */}
					<div className="space-y-2">
						<div>
							<h3 className="text-sm font-semibold tracking-wide uppercase">
								Contact Us
							</h3>
							<p className="text-sm text-gray-500">
								Have questions? Call us.
							</p>
						</div>

						<div>
							<h3 className="text-sm font-semibold tracking-wide uppercase">
								Email
							</h3>
							<p className="text-sm text-gray-500">Email@example.com</p>
						</div>
					</div>

					{/* Information Section */}
					<div>
						<h3 className="text-sm font-semibold tracking-wide uppercase">
							Information
						</h3>
						<ul className="space-y-1">
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="/about"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="/products"
								>
									Our Products
								</Link>
							</li>
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="/blogs"
								>
									Blogs
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media Section */}
					<div>
						<h3 className="text-sm font-semibold tracking-wide uppercase">
							Social Media
						</h3>
						<ul className="space-y-1">
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="#"
								>
									Twitter
								</Link>
							</li>
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="#"
								>
									Facebook
								</Link>
							</li>
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="#"
								>
									Instagram
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service Section */}
					<div>
						<h3 className="text-sm font-semibold tracking-wide uppercase">
							Customer Service
						</h3>
						<ul className="space-y-1">
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="/contact"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									className="text-sm text-gray-500 underline"
									to="/locations"
								>
									Locations
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
