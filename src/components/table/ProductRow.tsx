import { Link } from "react-router-dom";

function ProductRow({ product, isSelected, onSelectionChange, onDeleteClick }) {
	return (
		<tr className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
			<td className="w-4 p-4">
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected}
						onChange={(e) => onSelectionChange(e.target.checked)}
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label htmlFor="checkbox-table-search-1" className="sr-only">
						checkbox
					</label>
				</div>
			</td>
			<th
				scope="row"
				className="flex-grow px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				<div className="inline-flex items-center gap-3">
					<img
						src={product.image}
						alt="Product"
						className="object-cover w-8 h-8 rounded-full"
					/>
					<span className="truncate lg:max-w-[400px] text-sm">
						{product.title || product.name}
					</span>
				</div>
			</th>
			<td className="px-6 py-4 text-xs">{product.color}</td>
			<td className="px-6 py-4 text-xs">{product.category}</td>
			<td className="px-6 py-4">₹{product.price}</td>
			<td className="px-6 py-4">
				<div className="flex gap-2">
					<Link
						to={`/admin/edit-product/${product.id}`}
						className="px-3 py-1.5 text-xs font-medium text-blue-400 bg-blue-200/20 rounded hover:bg-blue-500 focus:outline-none hover:text-white"
					>
						Edit
					</Link>
					<button
						className="px-3 py-1.5 text-xs font-medium text-red-400 bg-red-200/20 rounded hover:bg-red-500 focus:outline-none hover:text-white"
						onClick={onDeleteClick}
					>
						Delete
					</button>
				</div>
			</td>
		</tr>
	);
}

export default ProductRow;
