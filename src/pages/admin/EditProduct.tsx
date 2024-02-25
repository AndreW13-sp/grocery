import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeftIcon, IndianRupeeIcon, LinkIcon } from "lucide-react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import * as yup from "yup";

import Input, { IconInput, SelectInput } from "../../components/form/Input";
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
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			title: product?.name || "",
			imageUrl: product?.image || "",
			description: "",
			price: product?.price || 10,
			color: product?.color || "",
			category: product?.category || "",
		},
	});

	const imageUrl = watch("imageUrl");

	const onProductSave = (data) => {
		console.log(data);
	};

	return (
		<AdminLayout>
			<div className="flex items-center justify-between gap-3 mb-6 sm:flex-row font-poppins">
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
						src={imageUrl || product?.image}
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
						<Input
							id="title"
							label="Title"
							placeholder="Product title"
							error={errors.title}
							wire={register("title")}
							className="mb-5"
						/>

						<IconInput
							id="imageUrl"
							label="Image URL"
							placeholder="Product title"
							icon={<LinkIcon size={20} color="currentColor" />}
							error={errors.imageUrl}
							wire={register("imageUrl")}
							className="mb-5"
						/>

						<Input
							id="description"
							label="Description"
							placeholder="Product description"
							error={errors.description}
							wire={register("description")}
							className="mb-5"
						/>

						<div className="flex flex-col gap-3 mb-5 lg:flex-row">
							<IconInput
								id="price"
								label="Price"
								placeholder="Price"
								error={errors.price}
								wire={register("price")}
								icon={<IndianRupeeIcon size={20} color="currentColor" />}
								className="lg:w-1/3"
								mobileErrorOnly
							/>

							<Input
								id="color"
								label="Color"
								placeholder="Color"
								error={errors.color}
								wire={register("color")}
								className="lg:w-1/3"
								mobileErrorOnly
							/>

							<SelectInput
								id="category"
								label="Category"
								wire={register("category")}
								placeholder="Select Category"
								options={[{ value: "one", label: "One" }]}
								className="lg:w-1/3"
							/>
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
