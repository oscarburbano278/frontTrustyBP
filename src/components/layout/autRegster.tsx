import { useNavigate } from "@tanstack/react-router";
import Button from "../ui/buton";


const AutRegister: React.FC = () => {

    const navigate = useNavigate();

    return(
        <div className="bg-white p-6 rounded-lg shadow-lg w-78">
            
            <h2 className="mt-4 text-3xl font-extrabold mb-4 text-center text-blue-800 hover:scale-105 transition-transform duration-200">
                Regístrate
            </h2>

            <div >
              <p className="text-2md font-bold text-black text-center">
              Optimiza tus ventas y construye una excelente reputación como vendedor. Regístrate ahora y mejora tu calificación.
                </p>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
                <Button 
                    customColor="bg-[#2EBB93] text-white hover:scale-105"
                    disabled={false}
                    text="Registrarse"
                    type="button"
                    onClick={() => navigate({ to: "/register" })} 
                />
            </div>
        </div>
    )
}

export default AutRegister;