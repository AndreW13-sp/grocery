import { useState } from "react";

import { Navbar, Sidebar } from "../components/dashboard";

function AdminLayout({ children }: { children: React.ReactNode }) {
	const [isSidebarActive, setIsSidebarActive] = useState(false);

	return (
		<div className="bg-boxdark-2 text-bodydark">
			<div className="flex h-screen overflow-hidden">
				<Sidebar
					isOpen={isSidebarActive}
					toggleSidebar={setIsSidebarActive}
				/>

				<div className="relative flex flex-col flex-grow overflow-x-hidden overflow-y-auto">
					<Navbar
						isOpen={isSidebarActive}
						toggleSidebar={setIsSidebarActive}
					/>

					<main>
						<div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
							{children}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default AdminLayout;
