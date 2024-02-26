import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

import Input from "../../components/form/Input";

const loginSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

function Login() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	const onLogin = (data) => {
		console.log(data);
	};

	return (
		<main className="flex items-center justify-center h-screen font-poppins bg-boxdark md:px-24">
			<div className="border rounded-lg shadow-lg border-strokedark bg-boxdark">
				<div className="flex flex-wrap items-center">
					<div className="hidden w-full xl:block xl:w-1/2">
						<div className="px-24 py-5 text-center">
							<Link to="#" className="inline-flex items-start gap-3 mb-4">
								<img
									src="https://th.bing.com/th/id/OIG3.GXgDPVptnOnDH47OeZJT?w=1024&h=1024&rs=1&pid=ImgDetMain"
									alt="logo"
									className="object-contain w-5 h-5 rounded md:w-10 md:h-10"
								/>
								<span className="text-base font-semibold text-white md:text-4xl">
									Grocery.in
								</span>
							</Link>
							<p className="font-medium 2xl:px-20 text-slate-400">
								Login to the admin area and see how is your business performing
							</p>

							<span className="inline-block mt-10">
								<img
									src="https://demo.tailadmin.com/src/images/illustration/illustration-03.svg"
									alt="illustration"
								/>
							</span>
						</div>
					</div>

					<div className="w-full border-strokedark xl:w-1/2 xl:border-l-2">
						<div className="w-full p-4 sm:p-12 xl:p-12">
							<span className="block mb-2 font-medium text-slate-400">Let's get going</span>
							<h2 className="text-2xl font-bold text-white mb-9 sm:text-3xl">
								Sign In to Grocery Admin Panel
							</h2>

							<form onSubmit={handleSubmit(onLogin)}>
								<Input
									id="email"
									type="email"
									label="Email"
									wire={register("email")}
									placeholder="Enter your email"
									error={errors.email}
									className="mb-5"
									labelStyles="text-lg"
								/>

								<Input
									id="password"
									type="password"
									label="Password"
									wire={register("password")}
									placeholder="Enter your password"
									error={errors.password}
									className="mb-5"
									labelStyles="text-lg"
								/>

								<div className="mb-5">
									<input
										type="submit"
										value="Sign In"
										className="w-full p-4 font-medium text-white transition border rounded-lg cursor-pointer border-primary bg-primary hover:bg-opacity-90"
									/>
								</div>

								<button className="flex w-full items-center justify-center gap-3.5 rounded-lg border bg-gray p-4 font-medium border-strokedark bg-meta-4 hover:bg-opacity-70 text-slate-300">
									<span>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0_191_13499)">
												<path
													d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
													fill="#4285F4"
												></path>
												<path
													d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
													fill="#34A853"
												></path>
												<path
													d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
													fill="#FBBC05"
												></path>
												<path
													d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
													fill="#EB4335"
												></path>
											</g>
											<defs>
												<clipPath id="clip0_191_13499">
													<rect width="20" height="20" fill="white"></rect>
												</clipPath>
											</defs>
										</svg>
									</span>
									Sign in with Google
								</button>

								<div className="mt-6 text-center text-slate-400">
									<p className="font-medium">
										Don’t have any account? &nbsp;
										<Link to="#" className="text-primary">
											Sign Up
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Login;
