import { products } from "../constants/data";

export function createProduct(newProduct: (typeof products)[number]) {
	return [...products, newProduct];
}

export function readProduct(id: string) {
	return products.find((product) => product.id === id);
}

export function updateProduct(id: string, updatedProduct: Partial<(typeof products)[number]>) {
	return products.map((product) =>
		product.id === id ? { ...product, ...updatedProduct } : product
	);
}

export function deleteProduct(id: string) {
	return products.filter((product) => product.id !== id);
}
