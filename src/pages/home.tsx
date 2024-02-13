import { BackgroundCarousel } from '../components';

function Home() {
	return (
		<section>
			<BackgroundCarousel>
				<div className="text-center text-white">
					<h1 className="mb-4 text-4xl font-bold">Welcome to Our Site</h1>
					<p className="text-xl">
						Enjoy the view with our changing background images.
					</p>
				</div>
			</BackgroundCarousel>
		</section>
	);
}

export default Home;
