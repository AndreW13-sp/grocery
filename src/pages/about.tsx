import { useEffect, useState } from "react";

import HomeBackground2 from "../assets/img/homebg2.jpg";
import HomeBackground3 from "../assets/img/homebg3.jpg";
import Logo from "../assets/img/logo.png";

function About() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [Logo, HomeBackground2, HomeBackground3];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 2000);

		return () => {
			clearInterval(timer);
		};
	}, [images.length]);

	return (
		<section className="p-8 m-8 bg-white rounded shadow-lg">
			<div className="flex flex-col md:flex-row items-center justify-center bg-[#f3f4f6] p-4 rounded">
				<div className="w-full md:w-1/2">
					{images.map((img, index) => (
						<img
							key={index}
							style={{
								display: currentIndex === index ? "block" : "none",
							}}
							src={img}
							className="object-cover object-center w-full h-64 transition duration-200 ease-in-out rounded md:h-auto"
							alt="Image"
						/>
					))}
					<div className="flex justify-center mt-4">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full mr-2 ${
									currentIndex === index ? "bg-black" : "bg-gray-400"
								}`}
							></button>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full mt-4 text-center md:w-1/2 md:mt-0 md:pl-8">
					<h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
						About Us
					</h1>
					<div className="w-16 mx-auto my-2 border-b-2 border-black"></div>
					<p className="mx-auto text-base leading-relaxed text-gray-700 lg:w-2/3">
						We are a dedicated team committed to providing you with the
						freshest and highest quality grocery products. Our mission is
						to make grocery shopping easy, efficient, and enjoyable.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
