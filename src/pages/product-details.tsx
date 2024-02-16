import Accordion from "../components/Accordion";

function ProductPage() {
	return (
		<div className="flex flex-col p-6 mx-auto lg:flex-row lg:space-x-8 max-w-7xl">
			<div className="flex flex-col space-y-6 lg:w-1/2">
				<div className="flex items-center justify-center">
					<img
						src="https://cdn.dribbble.com/userupload/2844479/file/original-4bcc2720bd625703a9b5b42824e6dc32.png?resize=1024x768"
						alt="Icha Chair"
						className="object-cover w-full h-auto"
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

			<div className="flex flex-col space-y-4 lg:w-1/2">
				<h1 className="text-4xl font-bold">ICHA CHAIR</h1>
				<div className="flex items-center justify-between">
					<p className="text-lg font-semibold">FROM ₹5450</p>
					<p className="text-sm">IN STOCK - SHIPS WITHIN 6 WEEKS</p>
				</div>

				<p className="text-gray-600">
					Japanese and Scandinavian design meet in daadsakdl sdl
					Massproductions lada series, an elegant furniture family with a
					light yet sturdy construction. Lorem ipsum dolor sit amet
					consectetur abet adtum dolore abent u ustro.
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
						<p>RED LACQUERED BEECH</p>
					</div>

					<div className="flex items-center justify-between">
						<h2 className="font-semibold">FABRIC SUPPLIER</h2>
						<p>CAMIRA</p>
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
