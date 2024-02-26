import { ChevronDownIcon } from "lucide-react";
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

import { cn } from "../../utils";

interface InputProps {
	id: string;
	label: string;
	type?: "text" | "number" | "url" | "email" | "password";
	placeholder?: string;
	error?: FieldError;
	wire: ReturnType<UseFormRegister<FieldValues>>;
	className?: string;
	labelStyles?: string;
	mobileErrorOnly?: boolean;
}

function Input({
	error,
	wire,
	id,
	label,
	placeholder,
	type = "text",
	className = "",
	labelStyles = "",
	mobileErrorOnly = false,
}: InputProps) {
	return (
		<div className={`w-full ${className}`}>
			<div className="inline-flex flex-col gap-1 mb-3 md:flex-row md:items-center md:gap-2">
				<label
					htmlFor={id}
					className={cn(
						"block text-sm font-medium",
						error ? "text-rose-500" : "text-white",
						labelStyles
					)}
				>
					{label}
				</label>
				{error && (
					<span className={`text-xs text-rose-300 ${mobileErrorOnly ? "lg:hidden" : ""}`}>
						<span className="hidden sm:inline-block">- &nbsp;</span> {error.message}
					</span>
				)}
			</div>
			<input
				type={type || "text"}
				id={id}
				className={`w-full px-5 py-3 text-sm font-normal text-white transition border-2 rounded-lg outline-none bg-gray-800/40 disabled:cursor-default disabled:bg-slate-300/15 focus:border-purple-400 placeholder:text-slate-500 ${
					error ? "border-rose-500" : "border-slate-400"
				}`}
				placeholder={placeholder || "This is a default placeholder"}
				{...wire}
			/>
		</div>
	);
}

interface IconInputProps extends InputProps {
	icon: React.ReactNode;
}

export function IconInput({
	error,
	wire,
	id,
	label,
	placeholder,
	type = "text",
	icon,
	className = "",
	mobileErrorOnly = false,
}: IconInputProps) {
	return (
		<div className={`w-full ${className}`}>
			<div className="inline-flex flex-col gap-1 mb-3 md:flex-row md:items-center md:gap-2">
				<label
					htmlFor={id}
					className={`block text-sm font-medium ${error ? "text-rose-500" : "text-white"}`}
				>
					{label}
				</label>
				{error && (
					<span className={`text-xs text-rose-300 ${mobileErrorOnly ? "lg:hidden" : ""}`}>
						<span className="hidden sm:inline-block">- &nbsp;</span> {error.message}
					</span>
				)}
			</div>
			<div
				className={`inline-flex w-full transition border-2 rounded-lg focus-within:text-purple-400 focus-within:border-purple-400 bg-gray-800/40 ${
					error ? "border-rose-500" : "border-slate-400"
				}`}
			>
				<span className="inline-flex items-center px-3 bg-slate-300/10">{icon}</span>
				<input
					type={type || "text"}
					id={id}
					className="w-full p-3 text-sm text-white bg-transparent outline-none disabled:cursor-default disabled:bg-slate-300/15 placeholder:text-slate-500"
					placeholder={placeholder || "https://www.yoursite.com/path/to/image.png"}
					{...wire}
				/>
			</div>
		</div>
	);
}

interface SelectInputProps extends InputProps {
	options: { value: string; label: string }[];
}

export function SelectInput({
	error,
	wire,
	id,
	label,
	placeholder,
	className = "",
	options = [],
}: SelectInputProps) {
	return (
		<div className={`w-full ${className}`}>
			<div className="inline-flex flex-col gap-1 mb-3 md:flex-row md:items-center md:gap-2">
				<label
					htmlFor={id}
					className={`block text-sm font-medium ${error ? "text-rose-500" : "text-white"}`}
				>
					{label}
				</label>
				{error && (
					<span className="text-xs text-rose-300">
						<span className="hidden sm:inline-block">- &nbsp;</span> {error.message}
					</span>
				)}
			</div>
			<div
				className={`inline-flex items-center w-full transition border-2 rounded-lg bg-gray-800/40 focus-within:border-purple-400 ${
					error ? "border-rose-500" : "border-slate-400"
				}`}
			>
				<select
					id={id}
					className="w-full p-3 text-sm font-normal text-white bg-transparent outline-none appearance-none active:border-purple-400 disabled:cursor-default disabled:bg-slate-300/15 placeholder:text-slate-500"
					{...wire}
				>
					<option value="" className="text-white bg-slate-600">
						{placeholder || "Select"}
					</option>
					{options.map((opt) => {
						return (
							<option key={opt.value} value={opt.value} className="text-white bg-slate-600">
								{opt.label}
							</option>
						);
					})}
				</select>

				<span className="mr-2">
					<ChevronDownIcon size={20} />
				</span>
			</div>
		</div>
	);
}

export default Input;
