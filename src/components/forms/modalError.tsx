import type { SuccessModalProps } from "../../common/types";
import ModalDynamic from "../layout/modalDynamic";


const ModalError: React.FC<SuccessModalProps> =() => {


  return <ModalDynamic
    buttonClass="w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-800"
    buttonText="Aceptar"
    customClass="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
    message="Verifica los datos ingresados y vuelve a intentarlo."
    messageClass="text-gray-600 mb-6"
    title="¡Información Incorrecta!"
    titleClass="text-xl font-bold mb-4 text-green-600"
    onClose={() => { } } />;
}

export default ModalError;  