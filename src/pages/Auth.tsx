import AutRegister from "../components/layout/autRegster";
import Logo from "../assets/images/logo.png";
import type { FunctionComponent } from "react";


const Auth: FunctionComponent = () => {
    return (
        <div className="bg-[#131127]  font-bold w-screen h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center min-h-screen bg-[#131127] p-6">
      
                <h1 className="text-white text-4xl font-bold mb-6">Trusty</h1>
                    
            <div className="flex w-full max-w-5xl  shadow-lg rounded-lg overflow-hidden">

                {/* Sección de Registro */}
                <div className="w-1/3 p-8 flex flex-col justify-center">

                <AutRegister />
                </div>

                {/* Sección de Logo */}
                <div className="w-1/3 flex justify-center items-center  p-6">
                <img
                    alt="Logo Trusty"
                    src={Logo}
                />
                </div>

                {/* Sección de Inicio de Sesión */}
                <div className="w-1/3 p-8 flex flex-col justify-center">
                
                    

                </div>

                </div>
            </div>
        </div>
    );
};

export default Auth;