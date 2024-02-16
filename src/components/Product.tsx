type ProductCardProps = {
	data: {
		id: string;
		name: string;
		image: string;
		price: number;
		rating: number;
	};
};

function ProductCard({ data }: ProductCardProps) {
	return (
		<div className="overflow-hidden bg-white rounded shadow-lg font-poppins">
			<img
				src={data.image}
				alt="House"
				className="object-cover w-full h-48"
			/>
			<div className="px-6 py-4">
				<div className="mb-2 text-lg font-bold text-gray-900 line-clamp-2">
					{data.name}
				</div>
				<p className="text-xl font-bold text-slate-700">₹{data.price}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<button className="w-full px-4 py-2 font-medium text-white bg-gray-800 rounded hover:bg-blue-700">
					Buy Now
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
