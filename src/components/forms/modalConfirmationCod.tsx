import type { SuccessModalProps } from "../../common/types";
import ModalDynamic from "../layout/modalDynamic";

interface ModalConfirmationCodProps extends SuccessModalProps {
  valorEnPesos: string; // Prop para el valor dinámico en pesos
}

const ModalConfirmationCod: React.FC<ModalConfirmationCodProps> = ({ valorEnPesos, onClose }) => {
  return (
    <ModalDynamic
      buttonClass="w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-800"
      buttonText="Aceptar"
      customClass="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
      messageClass="text-gray-600 mb-6"
      title="¡Atención!"
      titleClass="text-xl font-bold mb-4 text-green-600"
      message={
        <>
          
          <p className="text-gray-700">
            Tienes <span className="font-bold text-green-600">{valorEnPesos}</span>. Recuerda retirarlos en un punto físico de Efecty.
          </p>
        </>
      }
      onClose={onClose}
    />
  );
};

export default ModalConfirmationCod;