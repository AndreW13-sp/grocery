import { useState } from "react";

import DeleteProductModal from "../components/modals/DeleteProductModal";
import ProductTable from "../components/table/ProductTable";
import { TProduct } from "../constants/data";
import AdminLayout from "../layouts/AdminLayout";
import useStore from "../store/product";

function Admin() {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [currentProduct, setCurrentProduct] = useState<TProduct | null>(null);
	const products = useStore((state) => state.products);

	const handleDeleteClick = (product: TProduct) => {
		setCurrentProduct(product);
		setIsEditModalOpen(true);
	};

	return (
		<AdminLayout>
			<ProductTable products={products} onDeleteClick={handleDeleteClick} />
			<DeleteProductModal
				isOpen={isEditModalOpen}
				setModalOpen={setIsEditModalOpen}
				product={currentProduct}
			/>
		</AdminLayout>
	);
}

export default Admin;
