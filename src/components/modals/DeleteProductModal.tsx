import { AlertTriangleIcon } from "lucide-react";

import useStore from "../../store/product";
import Modal from "../Modal";

function DeleteProductModal({ isOpen, setModalOpen, product }) {
	const deleteProduct = useStore((state) => state.delete);

	const handleProductDelete = () => {
		console.log("Product is deleted with id:", product.id);
		deleteProduct(product.id);
		setModalOpen(false);
	};

	const onClose = () => {
		setModalOpen(false);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="flex flex-col items-center justify-center py-10 px-14 font-poppins gap-7">
				<img
					src={product?.image}
					alt={product?.name}
					className="object-contain rounded-md shadow-lg w-60 shadow-slate-500"
				/>
				<div className="flex flex-col items-center gap-3">
					<div className="text-rose-500">
						<AlertTriangleIcon size={60} color="currentColor" />
					</div>

					<div className="flex flex-col items-center">
						<h2 className="text-xl font-semibold text-white">Delete this product?</h2>
						<p className="mt-2">Are your sure you want to delete this product?</p>
					</div>
				</div>

				<div className="flex gap-5">
					<button
						className="px-5 py-3 text-white transition-opacity rounded-md bg-slate-800/50 hover:bg-opacity-90"
						onClick={() => onClose()}
					>
						Cancel
					</button>
					<button
						className="px-5 py-3 text-white transition-opacity bg-red-500 rounded-md hover:bg-opacity-80"
						onClick={handleProductDelete}
					>
						Yes, Delete it
					</button>
				</div>
			</div>
		</Modal>
	);
}

export default DeleteProductModal;
