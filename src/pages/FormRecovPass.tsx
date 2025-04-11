import Container from "../components/layout/container";
import Button from "../components/ui/buton";
import Input from "../components/ui/input";
import { useState } from "react";
import { validateCorreo } from "../components/utils/validators";
import type { ValidateFormProps } from "../common/types";



const RecoverPassword: React.FC = () => {

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        correo: "",
    });
    // Estado para almacenar los errores de validación
    const [errors, setErrors] = useState({
        correo: "",
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
            correo: validateCorreo(formData.correo),
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
            logoPosition="center"           
            title="Recuperar Contraseña">

            <div className="flex justify-center items-center">
                <form 
                    className="bg-[#8b88b4] p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4"
                    onSubmit= {handleSubmit}
                >
                    <h2 className="text-xl font-bold text-center">Ingrese su correo electrónico</h2>
                    <div className="space-y-9">
                        {/* Aquí puedes agregar tus campos de formulario */}
                        <Input
                           name="correo"
                            placeholder="Correo electrónico"
                            type="email"
                            value={formData.correo}
                            onChange={handleChange}
                        />

                        {errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}

                        {/* Botón de Envío */}
                        <div className="flex justify-center items-center gap-6">
                            <Button
                                customColor="bg-[#2EBB93] text-white hover:scale-105 w-32" // tamaño fijo
                                text="Cancelar"
                                type="button" // Cambiado a button para no enviar el form
                                onClick={() => {}}
                            />

                            <Button
                                customColor="bg-[#2EBB93] text-white hover:scale-105 w-32"
                                text="Enviar"
                                type="submit"
                                onClick={() => {}}
                            />
                        </div>                         
                        
                    </div>
                </form>
            </div>
        </Container>
    );
    }
export default RecoverPassword;
