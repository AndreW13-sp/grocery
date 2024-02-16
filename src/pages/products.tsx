import ProductCard from "../components/Product";
import { products } from "../constants/data";

function Products() {
	return (
		<div className="grid items-start max-w-6xl gap-6 px-4 mx-auto my-5 lg:gap-12">
			<div className="flex items-start">
				<div className="flex flex-col items-center justify-center w-full">
					<h1 className="p-4 text-4xl text-center md:text-5xl align-center font-poppins">
						Products
					</h1>
					<div className="w-16 mx-auto my-2 border-b-2 border-black"></div>
				</div>
			</div>

			<div className="grid justify-center w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{products.map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
			</div>
		</div>
	);
}

export default Products;
