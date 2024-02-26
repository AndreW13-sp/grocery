import { SearchIcon } from "lucide-react";
import { useCallback, useState } from "react";
import Select, { type StylesConfig } from "react-select";

import NotFound from "../../assets/img/not-found.svg";
import { TProduct } from "../../constants/data";
import ProductRow from "./ProductRow";

const options = [
	{ value: "ayush", label: "Ayush" },
	{ value: "dedhia", label: "Dedhia" },
];

const customStyles: StylesConfig<{ value: string; label: string }, false> = {
	container: (styles) => ({
		...styles,
		minWidth: 240,
	}),
	control: (styles) => ({
		...styles,
		fontSize: 14,
		fontFamily: "Poppins, sans-serif",
		background: "transparent",
		border: "1px solid rgba(241 245 249 / 0.3)",
	}),
	menu: (styles) => ({ ...styles, backgroundColor: "rgb(51 65 85)" }),
	singleValue: (styles) => ({ ...styles, color: "white" }),
};

function ProductTable({
	products,
	onDeleteClick,
}: {
	products: TProduct[];
	onDeleteClick: (product: TProduct) => void;
}) {
	const [, setFilterOption] = useState("");
	const [selectedProductIds, setSelectedProductIds] = useState(new Set());

	const toggleSelectAll = useCallback(
		(isChecked: boolean) => {
			if (isChecked) {
				const allProductIds = new Set(products.map((product) => product.id));
				setSelectedProductIds(allProductIds);
			} else {
				setSelectedProductIds(new Set());
			}
		},
		[products]
	);

	const handleProductSelectToggle = useCallback((productId: string, isChecked: boolean) => {
		setSelectedProductIds((prevSelectedProductIds) => {
			const updatedSet = new Set(prevSelectedProductIds);
			if (isChecked) {
				updatedSet.add(productId);
			} else {
				updatedSet.delete(productId);
			}
			return updatedSet;
		});
	}, []);

	const isAllSelected = products.length > 0 && selectedProductIds.size === products.length;

	return (
		<div className="relative shadow-md md:border md:rounded-lg border-slate-500/50 font-poppins">
			<div className="flex flex-col-reverse mb-5 sm:mb-0 items-center justify-between gap-2.5 py-2 sm:p-5 sm:px-7 sm:flex-row">
				<div className="w-full sm:w-auto">
					<Select
						isClearable
						options={options}
						onChange={(selectedOption) => setFilterOption(selectedOption?.value as string)}
						styles={customStyles}
					/>
				</div>

				<div className="w-full sm:w-auto">
					<div className="inline-flex w-full gap-3 px-3 py-2 border rounded-md sm:w-auto border-slate-700 focus-within:ring-2 focus-within:ring-blue-600 group">
						<span className="mt-[2px] group-focus-within:text-blue-500">
							<SearchIcon size={20} color="currentColor" />
						</span>
						<input
							type="text"
							className="font-light bg-transparent focus:outline-none"
							placeholder="Search for items"
						/>
					</div>
				</div>
			</div>

			{products.length > 0 ? (
				<div className="overflow-x-auto">
					<table className="w-full overflow-x-auto text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-4">
									<div className="flex items-center">
										<input
											id="checkbox-all-search"
											type="checkbox"
											checked={isAllSelected}
											onChange={(e) => toggleSelectAll(e.target.checked)}
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label htmlFor="checkbox-all-search" className="sr-only">
											checkbox
										</label>
									</div>
								</th>
								<th scope="col" className="px-6 py-3">
									Product name
								</th>
								<th scope="col" className="px-6 py-3">
									Color
								</th>
								<th scope="col" className="px-6 py-3">
									Category
								</th>
								<th scope="col" className="px-6 py-3">
									Price
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<ProductRow
									key={product.id}
									product={product}
									isSelected={selectedProductIds.has(product.id)}
									onSelectionChange={(isChecked) =>
										handleProductSelectToggle(product.id, isChecked)
									}
									onDeleteClick={() => onDeleteClick(product)}
								/>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-5 rounded-md sm:border mx-7 mb-7 border-slate-600">
					<img src={NotFound} alt="No products listed" className="object-contain sm:w-72" />
					<p className="-mt-6 text-sm font-light sm:-mt-8 sm:text-base">
						There are no products listed yet!
					</p>
				</div>
			)}
		</div>
	);
}

export default ProductTable;
