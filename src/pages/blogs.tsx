import HomeBg1 from "../assets/img/homebg1.jpg";
import HomeBg2 from "../assets/img/homebg2.jpg";
import HomeBg3 from "../assets/img/homebg3.jpg";

function Blogs() {
	return (
		<section className="p-4 m-8 bg-black rounded shadow-lg">
			<div className="flex flex-col md:flex-row items-center justify-center bg-[#f3f4f6] p-4 rounded font-poppins">
				<div className="w-full md:w-1/2">
					<img
						className="object-cover object-center w-full h-64 rounded md:h-auto"
						alt="hero"
						src={HomeBg1}
					/>
				</div>
				<div className="flex flex-col w-full mt-4 text-center md:w-1/2 md:mt-0 md:pl-8">
					<h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
						BLOG
					</h1>
					<div className="w-16 mx-auto my-2 border-b-2 border-black"></div>
					<p className="mx-auto text-base leading-relaxed text-gray-700 lg:w-2/3">
						We are a dedicated team committed to providing you with the
						freshest and highest quality grocery products. Our mission is
						to make grocery shopping easy, efficient, and enjoyable.
					</p>
				</div>
			</div>
			<div className="w-16 mx-auto my-2 border-b-2 border-black"></div>
			<div className="flex flex-col md:flex-row items-center justify-center bg-[#f3f4f6] p-4 rounded font-poppins">
				<div className="flex flex-col w-full mt-4 text-center md:w-1/2 md:mt-0 md:pl-8">
					<h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
						BLOG
					</h1>
					<div className="w-16 mx-auto my-2 border-b-2 border-black"></div>
					<p className="mx-auto text-base leading-relaxed text-gray-700 lg:w-2/3">
						We are a dedicated team committed to providing you with the
						freshest and highest quality grocery products. Our mission is
						to make grocery shopping easy, efficient, and enjoyable.
					</p>
				</div>
				<div className="w-full md:w-1/2">
					<img
						className="object-cover object-center w-full h-64 rounded md:h-auto"
						alt="hero"
						src={HomeBg2}
					/>
				</div>
			</div>
			<div className="w-16 mx-auto my-2 border-b-2 border-black"></div>
			<div className="flex flex-col md:flex-row items-center justify-center bg-[#f3f4f6] p-4 rounded font-poppins">
				<div className="w-full md:w-1/2">
					<img
						className="object-cover object-center w-full h-64 rounded md:h-auto"
						alt="hero"
						src={HomeBg3}
					/>
				</div>
				<div className="flex flex-col w-full mt-4 text-center md:w-1/2 md:mt-0 md:pl-8 font-poppins">
					<h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
						BLOG
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

export default Blogs;
