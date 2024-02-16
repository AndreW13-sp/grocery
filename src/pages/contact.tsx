const Map = () => (
	<div className="md:w-1/2 pt-12 container mx-auto bg-[#f3f4f6] w-full rounded-md shadow-md p-8 m-8 relative">
		<iframe
			src="https://maps.google.com/maps?q=your_address_here&output=embed"
			width="100%"
			height="500"
			className="border-0"
			allowFullScreen
		></iframe>
	</div>
);

function ContactForm() {
	return (
		<div className="flex justify-center w-full p-4 md:w-1/2">
			<div className="w-full max-w-lg">
				<h1 className="p-4 text-3xl text-center md:text-4xl align-center">
					CONTACT US
				</h1>
				<div className="w-16 mx-auto border-b-2 border-black"></div>
				<form className="w-full max-w-lg">
					<div className="flex flex-wrap pt-8 mb-6 -mx-3">
						<div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
							<label
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
								htmlFor="grid-first-name"
							>
								First Name
							</label>
							<input
								className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
								id="grid-first-name"
								type="text"
								placeholder="Jane"
							/>
						</div>
						<div className="w-full px-3 md:w-1/2">
							<label
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
								htmlFor="grid-last-name"
							>
								Last Name
							</label>
							<input
								className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
								id="grid-last-name"
								type="text"
								placeholder="Doe"
							/>
						</div>
					</div>
					<div className="flex flex-wrap mb-6 -mx-3">
						<div className="w-full px-3 mb-6 md:mb-0">
							<label
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
								htmlFor="grid-email"
							>
								Email
							</label>
							<input
								className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
								id="grid-email"
								type="text"
								placeholder="abc@example.com"
							/>
						</div>
					</div>
					<div className="flex flex-wrap mb-6 -mx-3">
						<div className="w-full px-3">
							<label
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
								htmlFor="grid-message"
							>
								Message
							</label>
							<textarea
								className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-message"
							></textarea>
						</div>
					</div>
					<div className="md:flex md:items-center">
						<div className="md:w-1/3">
							<button
								className="shadow bg-[#f3f4f6] hover:bg-gray-200 focus:shadow-outline focus:outline-none text-black py-2 px-4 rounded"
								type="submit"
							>
								Send
							</button>
						</div>
						<div className="md:w-2/3"></div>
					</div>
				</form>
			</div>
		</div>
	);
}

function Main() {
	return (
		<section className="flex flex-wrap">
			<Map />
			<ContactForm />
		</section>
	);
}

export default Main;
