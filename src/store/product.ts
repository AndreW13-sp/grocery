import { create } from "zustand";

import { TProduct, products } from "../constants/data";

type Store = {
	products: TProduct[];
	create: (newProduct: TProduct) => void;
	update: (id: string, updatedProduct: Partial<TProduct>) => void;
	delete: (id: string) => void;
};

const useStore = create<Store>((set) => ({
	products: products,
	create: (newProduct) => set((state) => ({ products: [...state.products, newProduct] })),
	update: (id, updatePatch) =>
		set((state) => ({
			products: state.products.map((product) =>
				product.id === id ? { ...product, ...updatePatch } : product
			),
		})),
	delete: (id: string) => {
		console.log("Product id:", id);
		set((state) => ({
			products: state.products.filter((product) => product.id !== id),
		}));
	},
}));

export default useStore;
