import Accordion from "../components/Accordion";

function ProductPage() {
	return (
		<div className="flex flex-col p-6 mx-auto lg:flex-row lg:space-x-8 max-w-7xl">
			<div className="flex flex-col space-y-6 lg:w-1/2">
				<div className="flex items-center justify-center">
					<img
						src="https://m.media-amazon.com/images/I/7128GOUxSCL._AC_SX425_.jpg"
						alt="Icha Chair"
						className="object-contain w-full h-auto"
						width="400"
						height="400"
						style={{ aspectRatio: "400 / 400" }}
					/>
				</div>

				<div className="flex items-center gap-4 py-4">
					<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-black rounded-md whitespace-nowrap focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
						Prev
					</button>
					<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-black rounded-md whitespace-nowrap focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
						Next
					</button>
				</div>
			</div>

			<div className="flex flex-col space-y-4 lg:w-1/2 font-poppins">
				<h1 className="text-xl font-semibold">
					iBUYPOWER SlateMR Gaming PC Computer Desktop SlateMR 2150V2
					(Intel Core i5 12400F 2.5 GHz, GeForce GTX 1650 4GB, 8 GB DDR4
					RAM, 500 GB NVMe SSD, WiFi Ready, Windows 11 Home),Black
				</h1>
				<div className="flex items-center justify-between">
					<p className="text-2xl font-bold">FROM ₹60000</p>
					<p className="text-sm">IN STOCK - SHIPS WITHIN 6 WEEKS</p>
				</div>

				<p className="text-gray-600">
					Get started on your gaming PC journey with the iBUYPOWER SlateMR
					2150V2. This prebuilt utilizes expertly vetted components to
					create the perfect entry-level gaming desktop computer that
					supports your favorite videogames. The Intel Core i5 12400F
					processor and Nvidia GeForce GTX 1650 4GB graphics card lets you
					play games at a better frame rate and gives you the opportunity
					to start streaming and creating content. With 8GB of DDR4 memory,
					you’ll be able to run multiple processes and browser tabs at
					once. Optimize your desktop experience with iBUYPOWER. - RGB
					gaming keyboard and mouse included - Intel Core i5-12400F 2.50
					GHz (up to 4.40 GHz Max Turbo) 6-core 12-thread processor -
					Nvidia GeForce GTX 1650 4GB graphics card - 500GB NVMe
					solid-state drive - 8 GB of DDR4 3000 MHz Ram - 600W 80+ gold
					power supply unit - 802.11AC Onboard Wi-Fi - Fan cooler - Comes
					with Windows 11 Home installed so you can quickly connect with
					your community through a smooth, modern interface
				</p>

				<div className="flex flex-col space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold">COLORS</h2>
						<div className="flex space-x-2">
							<div className="w-4 h-4 bg-purple-500 rounded-xl" />
							<div className="w-4 h-4 bg-violet-500 rounded-xl" />
							<div className="w-4 h-4 bg-pink-500 rounded-xl" />
						</div>
					</div>

					<div className="flex items-center justify-between">
						<h2 className="font-semibold">FINISH</h2>
						<p>Metal Finishing</p>
					</div>

					<div className="flex items-center justify-between">
						<h2 className="font-semibold">FABRIC SUPPLIER</h2>
						<p>Dellas</p>
					</div>
				</div>

				<div className="flex items-center py-4 space-x-6">
					<div className="space-x-4">
						<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-700 rounded-md whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800">
							-
						</button>
						<span>1</span>
						<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-700 rounded-md whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800">
							+
						</button>
					</div>

					<button className="inline-flex items-center justify-center flex-grow h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-700 rounded-md whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800">
						ADD TO CART
					</button>
				</div>

				<div className="flex flex-col">
					<Accordion
						title="Description"
						description="This is a test description"
					/>

					<Accordion
						title="Awards"
						description="This is a test 1 description"
					/>

					<Accordion
						title="Care & Maintenance Information"
						description="This is a test 1 description"
					/>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
