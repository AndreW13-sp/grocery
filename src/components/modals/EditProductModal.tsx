import Modal from "../Modal";

function EditProductModal({ isOpen, onClose, product }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<h1>Title: {product?.name}</h1>
		</Modal>
	);
}

export default EditProductModal;
