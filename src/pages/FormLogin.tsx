import { useState } from "react";
import DynamicForm from "../components/forms/dynamicForm";
import {
  validateCorreo,
  validateContraseña,
} from '../components/utils/validators';

const FormRegister: React.FC = () => {
  const initialFormData = {
    correo: "",
    contraseña: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    correo: "",
    contraseña: "",
  });

  // Función para manejar cambios en los inputs
  const handleInputChange = (fieldName: string, value: string ) => {
    setFormData((previous) => ({
      ...previous,
      [fieldName]: value,
    }));
  };

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors = {
      correo: validateCorreo(formData.correo),
      contraseña: validateContraseña(formData.contraseña),      
    };

    setErrors(newErrors);

    // Devuelve true si todos los errores están vacíos
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido", formData); // Aquí se capturan los datos
      // Aquí podrías enviar los datos al backend
    } else {
      console.log("Formulario con errores", errors);
    }
  };

  // Función para limpiar los campos del formulario
  const handleReset = () => {
    setFormData(initialFormData); // Reinicia el estado del formulario
    setErrors({
      correo: "",
      contraseña: "",     
    }); // Limpia los errores
  };

  const fields = [    
    {
      name: "correo",
      placeholder: "Correo Electrónico",
      type: "email",
      value: formData.correo,
      onChange: (value: string): void => { handleInputChange("correo", value); },
      error: errors.correo,
    },
    {
      name: "contraseña",
      placeholder: "Contraseña",
      type: "password",
      value: formData.contraseña,
      onChange: (value: string): void => { handleInputChange("contraseña", value); },
      error: errors.contraseña,
    },    
  ];

  const buttons = [
    {
      label: "Enviar",
      type: "submit",
      className: "bg-blue-500 text-white py-2 px-4 rounded",
    },
    {
      label: "Cancelar",
      type: "button",
      onClick: handleReset, // Llama a la función para limpiar los campos
      className: "bg-gray-500 text-white py-2 px-4 rounded",
    },
  ];

  return (    
    
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
      <DynamicForm
        buttons={buttons}
        fields={fields}
        title="Inicio de Sesión"
        onSubmit={handleSubmit}
        
      />

      {/* Enlace para "¿Olvidaste tu contraseña?" */}
      <div className="text-center mt-4">
          <a className="text-gray-800 hover:underline" href="/recoverPass">
               ¿Olvidaste tu contraseña?
          </a>
      </div>

    </div>
  
  );
};

export default FormRegister;
