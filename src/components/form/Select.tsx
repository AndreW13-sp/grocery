import { FieldValues, UseControllerProps, useController } from "react-hook-form";
import ReactSelect from "react-select";

import { cn } from "../../utils";

type OptionType = {
	value: string;
	label: string;
};

type SelectFieldProps<T extends FieldValues> = UseControllerProps<T> & {
	options: OptionType[];
	styles?: Record<string, string>;
	label: string;
};

function Select<T extends FieldValues>({
	options,
	styles,
	label,
	...controllerProps
}: SelectFieldProps<T>) {
	const {
		field: { onChange },
		formState: { errors },
	} = useController(controllerProps);

	return (
		<div className={cn("w-full", styles?.mainContainer)}>
			<div className="flex flex-col">
				<label
					className={`block text-sm font-medium mb-3 ${
						errors?.category ? "text-rose-500" : "text-white"
					}`}
				>
					{label}
				</label>
				<ReactSelect
					onChange={(newValue) => onChange(newValue?.value)}
					options={options}
					classNames={{
						container: () =>
							cn(
								"w-full border-2 border-slate-600 bg-gray-800/40 rounded-lg overflow-hidden",
								styles?.container
							),
						control: () => cn("bg-transparent", styles?.control),
						valueContainer: () => cn("py-2", styles?.valueContainer),
						input: () => cn("", styles?.input),
						menu: () => cn("", styles?.menu),
						menuList: () => cn("", styles?.menuList),
						option: () => cn("", styles?.option),
					}}
				/>
			</div>
		</div>
	);
}

export default Select;
