import { useState } from "react";

import EditProductModal from "../components/modals/EditProductModal";
import ProductTable from "../components/table/ProductTable";
import { products } from "../constants/data";
import AdminLayout from "../layouts/AdminLayout";

function Admin() {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(null);

	const handleEditClick = (product) => {
		setCurrentProduct(product);
		setIsEditModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsEditModalOpen(false);
		setCurrentProduct(null);
	};

	return (
		<AdminLayout>
			<ProductTable products={products} onEditClick={handleEditClick} />
			<EditProductModal
				isOpen={isEditModalOpen}
				onClose={handleCloseModal}
				product={currentProduct}
			/>
		</AdminLayout>
	);
}

export default Admin;
