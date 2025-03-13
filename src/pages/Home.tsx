import type { FunctionComponent } from "react";
import Logo from "../assets/images/logo.png";



export const Home: FunctionComponent = () => {

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleClick = () => {
		window.location.href = "/Auth";
	}

	return (
		<div className="bg-[#131127]  font-bold w-screen h-screen flex flex-col justify-center items-center">
			<img 
				alt="Logo" 
				className="cursor-pointer hover:opacity-80 transition"
				src={Logo}
				onClick={handleClick}
				/>
			<h1 className="mt-4 text-white text-4xl">Trusty</h1>
			<h2 className="mt-4 text-white text-2xl">Tu Dinero Seguro</h2>
			
			
		</div>
	);
};
