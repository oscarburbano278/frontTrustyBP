import Button from "../ui/buton";
import type { ModalDynamicProps } from "../../common/types";

const ModalDynamic: React.FC<ModalDynamicProps> = ({
    title,
  message,
  buttonText,
  onClose,
  customClass = "bg-white p-6 rounded-lg shadow-lg w-80 text-center",
  titleClass = "text-xl font-bold mb-4 text-green-600",
  messageClass = "text-gray-600 mb-6",
  buttonClass = "w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-800"
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={customClass}>
        <h2 className={titleClass}>{title}</h2>
        <p className={messageClass}>{message}</p>

        <Button 
          customColor={buttonClass}
          text={buttonText || "Default Text"}
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalDynamic;
