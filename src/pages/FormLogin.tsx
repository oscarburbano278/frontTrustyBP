import { useState } from "react";
import DynamicForm from "../components/forms/dynamicForm";
import Button from "../components/ui/buton";
import Input from "../components/ui/input";
import type { ValidateFormProps } from "../common/types";
import { validateCorreo, validateContraseña } from '../components/utils/validators';


const FormLogin: React.FC = () => {
  

  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });

  const [errors, setErrors] = useState({
    correo: "",
    contraseña: "",
  });

  // Función para manejar cambios en los inputs
  const handleChange = (event_: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = event_.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  
      const validateForm: React.FC<ValidateFormProps> = () => {
        const newErrors = {
          correo: validateCorreo(formData.correo),
          contraseña: validateContraseña(formData.contraseña),
        };
      
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
      };


  const handleSubmit = (event_: React.FormEvent): void => {
    event_.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido", formData);
      // Aquí podrías enviar los datos al backend
    } else {
      console.log("Formulario con errores", errors);
    }
  };

  return (
    
      <DynamicForm 
      title="Login"
      titleClassName="mt-2 text-3xl font-extrabold mb-2 text-center text-blue-800 hover:scale-105 transition-transform duration-200"
      onSubmit={handleSubmit}>     


        {/* Correo */}
        <Input name="correo" placeholder="Correo electrónico" type="email" value={formData.correo} onChange={handleChange} />
        {errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}

        {/* Contraseña */}
        <Input name="contraseña" placeholder="Contraseña" type="password" value={formData.contraseña} onChange={handleChange} />
        {errors.contraseña && <p className="text-red-500 text-sm">{errors.contraseña}</p>} 

        {/* Botón de Envío */}
        <div className="mt-8 flex flex-col space-y-4">
            <Button             
            customColor="bg-[#2EBB93] text-white hover:scale-105" 
            text="Ingresar" 
            type="submit"
            onClick={() => {}}
            />
        </div>

        {/* Enlace para recuperar contraseña */}
        <div className="flex justify-center mt-4">
            <a className="text-gray-800 hover:underline" href="/recoverPass">
                ¿Olvidaste tu contraseña?
            </a>
        </div>
      </DynamicForm>
    
  );
};

export default FormLogin;
