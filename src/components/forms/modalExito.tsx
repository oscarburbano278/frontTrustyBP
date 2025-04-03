import type { SuccessModalProps } from "../../common/types";
import Button from "../ui/buton";

const ModalExito: React.FC<SuccessModalProps> = ({ onClose }) => {
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-xl font-bold mb-4 text-green-600">¡Registro Exitoso!</h2>
                <p className="text-gray-600 mb-6">Tu cuenta ha sido creada correctamente.</p>
                
                {/* Botón de Aceptar */}
                <Button 
                    customColor="w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-800"
                    text="Aceptar"
                    type="button"
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

export default ModalExito;