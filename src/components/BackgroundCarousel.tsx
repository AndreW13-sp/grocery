import { useEffect, useState } from 'react';

import HomeBackground1 from '../assets/img/homebg1.jpg';
import HomeBackground2 from '../assets/img/homebg2.jpg';
import HomeBackground3 from '../assets/img/homebg3.jpg';

const slides = [
	{ src: HomeBackground1 },
	{ src: HomeBackground2 },
	{ src: HomeBackground3 },
];

function BackgroundCarousel({ children }: { children: React.ReactNode }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(timer);
	}, []);

	return (
		<div
			className="w-full h-screen transition-opacity duration-500 ease-in-out bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url(${slides[currentSlide].src})`,
			}}
		>
			<div className="flex items-center justify-center w-full h-full">
				<div className="flex items-center justify-center w-full h-full bg-black overlay bg-opacity-40">
					{children}
				</div>
			</div>
		</div>
	);
}

export default BackgroundCarousel;
