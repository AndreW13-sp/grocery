import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeftIcon, ChevronDownIcon, IndianRupeeIcon, LinkIcon } from "lucide-react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import * as yup from "yup";

import { products } from "../../constants/data";
import AdminLayout from "../../layouts/AdminLayout";

const validationSchema = yup
	.object({
		title: yup.string().required(),
		imageUrl: yup.string().url("Please provide the valid image url").required(),
		description: yup.string().required(),
		price: yup.number().positive().min(10, "Minimun price is 10").required(),
		color: yup.string().required(),
		category: yup.string().required(),
	})
	.required();

function EditProduct() {
	const { productId } = useParams();
	const product = useMemo(() => products.find((p) => p.id === productId), [productId]);
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			title: product?.name || "",
			imageUrl: product?.image || "",
			description: product?.description || "",
			price: product?.price || 10,
			color: product?.color || "",
			category: product?.category || "",
		},
	});

	const onProductSave = (data) => {
		console.log(data);
	};

	return (
		<AdminLayout>
			<div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between font-poppins">
				<h2 className="text-2xl font-medium text-white">Edit Product</h2>
				<Link
					to=".."
					className="inline-flex items-center gap-1 px-3 py-2 transition rounded bg-slate-400/15 hover:bg-slate-400/10 hover:text-white"
				>
					<ArrowLeftIcon size={16} />
					<span className="text-sm">Go Back</span>
				</Link>
			</div>

			<div className="grid items-start grid-cols-1 gap-4 sm:grid-cols-12 md:grid-cols-12">
				<div className="relative col-span-1 p-3 overflow-hidden rounded-md bg-slate-200/10 md:col-span-5 group">
					<img
						src={product?.image}
						alt={product?.name}
						className="object-contain w-full h-full max-h-[450px] rounded-md"
					/>
					<div className="absolute inset-0 z-10 items-center justify-center hidden bg-black/60 group-hover:flex">
						<div className="flex items-center justify-center p-2 rounded-md bg-gray-400/50 font-poppins">
							<label
								htmlFor="dropzone-file"
								className="flex flex-col items-center justify-center w-full border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:border-gray-500 hover:bg-gray-600"
							>
								<div className="flex flex-col items-center justify-center p-3">
									<svg
										className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-semibold">Click to upload</span> or drag and
										drop
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										SVG, PNG, JPG or GIF (MAX. 800x400px)
									</p>
								</div>
								<input id="dropzone-file" type="file" className="hidden" />
							</label>
						</div>
					</div>
				</div>

				<div className="col-span-1 p-6 rounded-md md:col-span-7 bg-slate-200/10">
					<form className="font-poppins" onSubmit={handleSubmit(onProductSave)}>
						<div className="mb-5">
							<label htmlFor="title" className="block mb-3 text-sm font-medium text-white">
								Title
							</label>
							<input
								type="text"
								id="title"
								className="w-full px-5 py-3 text-sm font-normal text-white transition border-2 rounded-lg outline-none bg-gray-800/40 border-slate-400 active:border-blue-500 disabled:cursor-default disabled:bg-slate-300/15 focus:border-purple-400 placeholder:text-slate-500"
								placeholder="name@flowbite.com"
								{...register("title")}
							/>
						</div>

						<div className="mb-5">
							<label
								htmlFor="imageUrl"
								className="block mb-3 text-sm font-medium text-white"
							>
								Image URL
							</label>
							<div className="inline-flex w-full transition border-2 rounded-lg border-slate-400 focus-within:text-purple-400 focus-within:border-purple-400 bg-gray-800/40">
								<span className="inline-flex items-center px-3 bg-slate-300/10">
									<LinkIcon size={20} color="currentColor" />
								</span>
								<input
									type="url"
									id="imageUrl"
									className="w-full p-3 text-sm text-white bg-transparent outline-none active:border-blue-500 disabled:cursor-default disabled:bg-slate-300/15 placeholder:text-slate-500"
									placeholder="https://www.yoursite.com/path/to/image.png"
									{...register("imageUrl")}
								/>
							</div>
						</div>

						<div className="mb-5">
							<label
								htmlFor="description"
								className="block mb-3 text-sm font-medium text-white"
							>
								Description
							</label>
							<textarea
								id="description"
								rows={5}
								placeholder="Enter your prroduct description"
								className="w-full px-5 py-3 text-sm font-normal text-white transition border-2 rounded-lg outline-none bg-gray-800/40 border-slate-400 active:border-blue-500 disabled:cursor-default disabled:bg-slate-300/15 focus:border-purple-400 placeholder:text-slate-500"
								{...register("description")}
							></textarea>
						</div>

						<div className="flex flex-col gap-3 mb-5 lg:flex-row">
							<div className="w-full xl:w-1/3">
								<label
									htmlFor="price"
									className="block mb-3 text-sm font-medium text-white"
								>
									Price
								</label>
								<div className="inline-flex w-full transition border-2 rounded-lg border-slate-400 focus-within:text-purple-400 focus-within:border-purple-400 bg-gray-800/40">
									<span className="inline-flex items-center px-3 bg-slate-300/10">
										<IndianRupeeIcon size={20} color="currentColor" />
									</span>
									<input
										type="number"
										id="price"
										className="w-full p-2.5 text-white bg-transparent outline-none active:border-blue-500 disabled:cursor-default disabled:bg-slate-300/15 placeholder:text-slate-500 appearance-none"
										placeholder="499"
										{...register("price")}
									/>
								</div>
							</div>

							<div className="w-full lg:w-1/3">
								<label
									htmlFor="color"
									className="block mb-3 text-sm font-medium text-white"
								>
									Color
								</label>
								<input
									id="color"
									type="text"
									className="w-full px-3 py-3 text-sm font-normal text-white transition border-2 rounded-lg outline-none bg-gray-800/40 border-slate-400 active:border-blue-500 disabled:cursor-default disabled:bg-slate-300/15 focus:border-purple-400 placeholder:text-slate-500"
									placeholder="name@flowbite.com"
									{...register("color")}
								/>
							</div>

							<div className="w-full lg:w-1/3">
								<label
									htmlFor="category"
									className="block mb-3 text-sm font-medium text-white"
								>
									Category
								</label>
								<div className="inline-flex items-center w-full transition border-2 rounded-lg border-slate-400 bg-gray-800/40 focus-within:border-purple-400">
									<select
										id="category"
										className="w-full p-3 text-sm font-normal text-white bg-transparent outline-none appearance-none active:border-purple-400 disabled:cursor-default disabled:bg-slate-300/15 placeholder:text-slate-500"
										{...register("category")}
									>
										<option value="1" className="text-white bg-slate-600">
											One
										</option>
										<option value="2" className="text-white bg-slate-600">
											Two
										</option>
										<option value="3" className="text-white bg-slate-600">
											Three
										</option>
									</select>

									<span className="mr-2">
										<ChevronDownIcon size={20} />
									</span>
								</div>
							</div>
						</div>

						<button
							type="submit"
							className="inline-flex items-center justify-center w-full px-4 py-3 mt-2 font-medium text-center text-white bg-purple-500 rounded-md hover:bg-opacity-70"
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
}

export default EditProduct;
