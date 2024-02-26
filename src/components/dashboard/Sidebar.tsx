import { useState } from "react";
import { Link } from "react-router-dom";

import CalendarIcon from "../icons/Calendar";
import DashboardIcon from "../icons/Dashboard";
import ProfileIcon from "../icons/ProfileIcons";

const links = [
	{
		icon: <DashboardIcon />,
		text: "Dashboard",
		href: "#",
		childLinks: [
			{ icon: "", text: "eCommerce", href: "#" },
			{ icon: "", text: "Analytics", href: "#" },
			{ icon: "", text: "Marketing", href: "#" },
			{ icon: "", text: "CRM", href: "#" },
			{ icon: "", text: "Stocks", href: "#" },
		],
	},
	{
		icon: <CalendarIcon />,
		text: "Calender",
		href: "#",
		childLinks: [
			{ icon: "", text: "eCommerce", href: "#" },
			{ icon: "", text: "Analytics", href: "#" },
			{ icon: "", text: "Marketing", href: "#" },
			{ icon: "", text: "CRM", href: "#" },
			{ icon: "", text: "Stocks", href: "#" },
		],
	},
	{
		icon: <ProfileIcon />,
		text: "Profile",
		href: "#",
		childLinks: [
			{ icon: "", text: "eCommerce", href: "#" },
			{ icon: "", text: "Analytics", href: "#" },
			{ icon: "", text: "Marketing", href: "#" },
			{ icon: "", text: "CRM", href: "#" },
			{ icon: "", text: "Stocks", href: "#" },
		],
	},
];

function Sidebar({
	isOpen,
	toggleSidebar,
}: {
	isOpen: boolean;
	toggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [active, setActive] = useState("");

	return (
		<aside
			className={`absolute top-0 left-0 flex flex-col h-screen overflow-y-hidden duration-300 ease-linear -translate-x-full bg-slate-800 lg:static lg:translate-x-0 shrink-0 lg:min-w-[250px] ${
				isOpen ? "translate-x-0 z-[100]" : "-translate-x-full"
			}`}
		>
			{/* Sidebar Header */}
			<div className="flex items-center justify-between gap-8 px-6 py-5 border-b lg:py-6 border-slate-700">
				<Link to="/" className="inline-flex items-center gap-3 text-white">
					<img
						src="https://th.bing.com/th/id/OIG3.GXgDPVptnOnDH47OeZJT?w=1024&h=1024&rs=1&pid=ImgDetMain"
						alt="logo"
						className="object-contain w-5 h-5 rounded md:w-8 md:h-8"
					/>
					<span className="text-base font-semibold md:text-xl">Grocery.in</span>
				</Link>
				<button className="block text-white lg:hidden" onClick={() => toggleSidebar(false)}>
					<svg
						className="fill-current"
						width="15"
						height="18"
						viewBox="0 0 20 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
							fill=""
						></path>
					</svg>
				</button>
			</div>

			{/* Links */}
			<div className="flex flex-col px-2 py-4 overflow-y-auto sm:p-4">
				<h3 className="ml-2 tracking-wider uppercase text-slate-400 font-poppins">Menu</h3>

				<ul className="mt-3 space-y-1">
					{links.map((link) => (
						<li key={link.text}>
							<Link
								to={link.href}
								onClick={(e) => {
									e.preventDefault();
									setActive((prevLink) => (prevLink === link.text ? "" : link.text));
								}}
							>
								<div
									className={`inline-flex items-center w-full gap-2 p-3 text-white rounded-md font-poppins hover:bg-slate-100/10 ${
										active === link.text && "bg-slate-100/20"
									}`}
								>
									{link.icon}
									<span className="flex-grow text-sm">{link.text}</span>
									<svg
										className={`fill-current transition ${
											active === link.text ? "rotate-180" : ""
										}`}
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
											fill=""
										></path>
									</svg>
								</div>
							</Link>

							{link?.childLinks && (
								<div className={`mt-3 ml-6 ${active === link.text ? "block" : "hidden"}`}>
									<ul className="space-y-2 text-sm font-poppins text-slate-400">
										{link.childLinks.map((child) => (
											<li className="cursor-pointer hover:text-white">
												<Link key={child.text} to={child.href}>
													{child.text}
												</Link>
											</li>
										))}
									</ul>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
