import HomeBg1 from "../assets/img/homebg1.jpg";

function Locations() {
	return (
		<section className="p-8 m-4">
			<h1 className="p-4 text-4xl text-center md:text-5xl align-center">
				LOCATIONS
			</h1>
			<div className="w-16 mx-auto my-2 border-b-2 border-black"></div>
			<div className="grid grid-cols-4 gap-4 p-8">
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
				<div className="p-4 bg-gray-100 rounded-lg">
					<img src={HomeBg1} alt="Petticoat" />
					<p>MUMBAI</p>
					<span className="text-sm text-gray-500">Address: </span>
				</div>
			</div>
		</section>
	);
}

export default Locations;
