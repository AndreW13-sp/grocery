import { useRef } from "react";
import useOutsideClick from "../hooks/useClickOutside";

function Modal({
	isOpen,
	children,
	onClose,
}: {
	isOpen: boolean;
	onClose: (open: boolean) => void;
	children: React.ReactNode;
}) {
	const modalRef = useRef<HTMLDivElement>(null);

	useOutsideClick(modalRef, () => {
		onClose(false);
	});

	return (
		<div
			tabIndex={-1}
			aria-hidden="true"
			className={`overflow-y-auto overflow-x-hidden absolute inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-slate-800/50 ${
				isOpen ? "" : "hidden"
			}`}
		>
			<div className="max-w-2xl max-h-full p-4">
				<div ref={modalRef} className="bg-gray-700 rounded-lg shadow">
					{children}
				</div>
			</div>
		</div>
	);
}

export default Modal;
