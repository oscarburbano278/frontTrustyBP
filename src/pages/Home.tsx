import type { FunctionComponent } from "react";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "@tanstack/react-router";



export const Home: FunctionComponent = () => {

	const navigate = useNavigate();

	return (
		<div className="bg-[#131127]  font-bold w-screen h-screen flex flex-col justify-center items-center">
			<img 
				alt="Logo" 
				className="cursor-pointer hover:opacity-80 transition"
				src={Logo}
				onClick={() => navigate({ to: "/auth" })}
				/>
			<h1 className="mt-4 text-white text-4xl">Trusty</h1>
			<h2 className="mt-4 text-white text-2xl">Tu Dinero Seguro</h2>
			
			
		</div>
	);
};
