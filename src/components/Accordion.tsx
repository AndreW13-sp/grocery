import { useState } from "react";

const Accordion = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<div className="relative font-poppins">
			<h6 className="mb-0">
				<button
					onClick={toggleOpen}
					className={`relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t group`}
				>
					<span>{title}</span>
					{!isOpen && (
						<i className="absolute pt-1 text-xs right-5 fa fa-plus"></i>
					)}
					{isOpen && (
						<i className="absolute pt-1 text-xs right-5 fa fa-minus"></i>
					)}
				</button>
			</h6>
			{isOpen && (
				<div className="p-4 text-sm leading-normal text-blue-gray-500/80">
					{description}
				</div>
			)}
		</div>
	);
};

export default Accordion;
