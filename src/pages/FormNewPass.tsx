import Container from "../components/layout/container";
import Button from "../components/ui/buton";
import Input from "../components/ui/input";
import { useState } from "react";
import type { ValidateFormProps } from "../common/types";
import {
    validateContraseña,
    validateConfirmarContraseña,
    validateCodigo,
} from '../components/utils/validators';



const NewPassword: React.FC = () => {

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        contraseña: "",
        confirmarContraseña: "",
        codigo: "",
    });
    // Estado para almacenar los errores de validación
    const [errors, setErrors] = useState({
        contraseña: "",
        confirmarContraseña: "",
        codigo: "",
    });
    // Función para manejar cambios en los inputs
    const handleChange = (event_: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event_.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    // Función para validar el formulario
  const validateForm: React.FC<ValidateFormProps> = () => {
        const newErrors = {
            contraseña: validateContraseña(formData.contraseña),
            confirmarContraseña: validateConfirmarContraseña(
                formData.contraseña,
                formData.confirmarContraseña
            ),
            codigo: validateCodigo(formData.codigo),
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };
    // Función para manejar el envío del formulario
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
        <Container
            customClass="max-w-md"
            logoPosition="center"           
            title="Recuperar Contraseña">

            <div className="flex justify-center items-center">
                <form 
                    className="bg-[#8b88b4] p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4"
                    onSubmit= {handleSubmit}
                >
                    <div className="flex flex-col items-center mb-4">
                    <input
                        className="w-24 text-center" // Esto reduce el ancho y centra el texto dentro del input
                        name="codigo"
                        placeholder="Código"
                        type="text"
                        value={formData.codigo}
                        onChange={handleChange}
                    />
                    {errors.codigo && (
                        <p className="text-red-500 text-sm mt-1 text-center">{errors.codigo}</p>
                    )}
                    </div>                      
                    

                    <h4 className="text-xl font-bold text-center">Ingrese su nueva contraseña</h4>
                    <div className="space-y-9">
                        {/* Aquí puedes agregar tus campos de formulario */}
                        
                        <Input
                            name="contraseña"
                            placeholder="Nueva Contraseña"
                            type="password"
                            value={formData.contraseña}
                            onChange={handleChange}
                        />
                        {errors.contraseña && <p className="text-red-500 text-sm">{errors.contraseña}</p>}
                        <Input
                            name="confirmarContraseña"
                            placeholder="Confirmar Contraseña"
                            type="password"
                            value={formData.confirmarContraseña}
                            onChange={handleChange}
                        />
                        {errors.confirmarContraseña && <p className="text-red-500 text-sm">{errors.confirmarContraseña}</p>}

                        {/* Botón de Envío */}
                        <Button                            
                            customColor="bg-[#2EBB93] text-white hover:scale-105"                            
                            text="Aceptar"
                            type="submit"
                            onClick={() => {}}
                        />                            
                        
                    </div>
                </form>
            </div>
        </Container>
    );
    }
export default NewPassword;
