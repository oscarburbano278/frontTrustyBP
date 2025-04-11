import { useState } from "react";
import DynamicForm from "../components/forms/dynamicForm";
import Container from "../components/layout/container";
import Button from "../components/ui/buton";
import Input from "../components/ui/input";
import type { ValidateFormProps } from "../common/types";

import {
  validateNombre,
  validateCedula,
  validateCorreo,
  validateContraseña,
  validateConfirmarContraseña,
  validateTelefono,
  validateCheck,
} from '../components/utils/validators';


const FormRegister: React.FC = () => {
  

  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
    terminos: false,
    datosPersonales: false,
  });

  const [errors, setErrors] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
    terminos: "",
    datosPersonales: "",
  });

  // Función para manejar cambios en los inputs
  const handleChange = (event_: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = event_.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Expresiones regulares para validaciones
  // const nameRegex = /^[A-Za-z\s]{2,50}$/;
  // const cedulaRegex = /^\d{6,12}$/; // Ajustar la longitud según el país
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  // const phoneRegex = /^\d{10}$/; // Para 10 dígitos (ajustar según país)

  // const validateForm: React.FC<ValidateFormProps> = () => {
  //   const newErrors = { nombre: "", cedula: "", correo: "", contraseña: "", confirmarContraseña: "", telefono: "", terminos: "", datosPersonales: "" };
  //   let isValid = true;

  //   // 1️⃣ Validar Nombre y Apellido
  //   if (!formData.nombre.trim()) {
  //     newErrors.nombre = "El nombre es obligatorio";
  //     isValid = false;
  //   } else if (!nameRegex.test(formData.nombre)) {
  //     newErrors.nombre = "El nombre solo puede contener letras y espacios (2-50 caracteres)";
  //     isValid = false;
  //   }

  //   // 2️⃣ Validar Número de Cédula
  //   if (!formData.cedula.trim()) {
  //     newErrors.cedula = "La cédula es obligatoria";
  //     isValid = false;
  //   } else if (!cedulaRegex.test(formData.cedula)) {
  //     newErrors.cedula = "La cédula debe contener entre 6 y 12 dígitos numéricos";
  //     isValid = false;
  //   }

  //   // 3️⃣ Validar Correo Electrónico
  //   if (!formData.correo.trim()) {
  //     newErrors.correo = "El correo es obligatorio";
  //     isValid = false;
  //   } else if (!emailRegex.test(formData.correo)) {
  //     newErrors.correo = "Ingrese un correo válido";
  //     isValid = false;
  //   }

  //   // 4️⃣ Validar Contraseña
  //   if (!formData.contraseña) {
  //     newErrors.contraseña = "La contraseña es obligatoria";
  //     isValid = false;
  //   } else if (!passwordRegex.test(formData.contraseña)) {
  //     newErrors.contraseña = "Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial";
  //     isValid = false;
  //   }

  //   // 5️⃣ Validar Confirmación de Contraseña
  //   if (formData.confirmarContraseña !== formData.contraseña) {
  //     newErrors.confirmarContraseña = "Las contraseñas no coinciden";
  //     isValid = false;
  //   }

  //   // 6️⃣ Validar Teléfono
  //   if (!formData.telefono.trim()) {
  //     newErrors.telefono = "El teléfono es obligatorio";
  //     isValid = false;
  //   } else if (!phoneRegex.test(formData.telefono)) {
  //     newErrors.telefono = "El número de telefono debe tener 10 dígitos";
  //     isValid = false;
  //   }

  //   // 7️⃣ Validar que se acepten los términos
  //   if (!formData.terminos) {
  //     newErrors.terminos = "Debe aceptar los términos y condiciones";
  //     isValid = false;
  //   }

  //   // 8️⃣ Validar aceptación del uso de datos personales
  //   if (!formData.datosPersonales) {
  //     newErrors.datosPersonales = "Debe aceptar el tratamiento de datos personales";
  //     isValid = false;
  //   }

  //   setErrors(newErrors);
  //   return isValid;
  // };

  // Validación del formulario
  // Separa la lógica de validación en una función independiente
  // y utiliza las funciones de validación específicas para cada campo
  // y devuelve un objeto con los errores
  // y un booleano indicando si el formulario es válido o no
  const validateForm: React.FC<ValidateFormProps> = () => {
    const newErrors = {
      nombre: validateNombre(formData.nombre),
      cedula: validateCedula(formData.cedula),
      correo: validateCorreo(formData.correo),
      contraseña: validateContraseña(formData.contraseña),
      confirmarContraseña: validateConfirmarContraseña(formData.contraseña, formData.confirmarContraseña),
      telefono: validateTelefono(formData.telefono),
      terminos: validateCheck(formData.terminos, "Debe aceptar los términos y condiciones"),
      datosPersonales: validateCheck(formData.datosPersonales, "Debe aceptar el tratamiento de datos personales"),
    };
  
    setErrors(newErrors);
  
    // Devuelve true si todos los errores están vacíos
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
    <Container>
      <DynamicForm title="Registro de Usuario" onSubmit={handleSubmit}>
        
        {/* Nombre */}
        <Input name="nombre" placeholder="Nombre Completo" type="text" value={formData.nombre} onChange={handleChange} />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Cédula */}
        <Input name="cedula" placeholder="Nº Cédula" type="text" value={formData.cedula} onChange={handleChange} />
        {errors.cedula && <p className="text-red-500 text-sm">{errors.cedula}</p>}

        {/* Teléfono (Ahora es obligatorio) */}
        <Input name="telefono" placeholder="Teléfono" type="text" value={formData.telefono} onChange={handleChange} />
        {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
        </div>

        {/* Correo */}
        <Input name="correo" placeholder="Correo electrónico" type="email" value={formData.correo} onChange={handleChange} />
        {errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}

        {/* Contraseña */}
        <Input name="contraseña" placeholder="Contraseña" type="password" value={formData.contraseña} onChange={handleChange} />
        {errors.contraseña && <p className="text-red-500 text-sm">{errors.contraseña}</p>}        

        {/* Confirmar Contraseña */}
        <Input name="confirmarContraseña" placeholder="Confirmar Contraseña" type="password" value={formData.confirmarContraseña} onChange={handleChange} />
        {errors.confirmarContraseña && <p className="text-red-500 text-sm">{errors.confirmarContraseña}</p>}        

        {/* Términos y condiciones */}
        <div className="flex items-center">
          <input checked={formData.terminos} name="terminos" type="checkbox" onChange={handleChange} />
          <label className="ml-2 text-sm text-gray-700 cursor-pointer">Acepto los términos y condiciones</label>
        </div>
        {errors.terminos && <p className="text-red-500 text-sm">{errors.terminos}</p>}

        {/* Confirmación de Uso de Datos */}
        <div className="flex items-center">
          <input checked={formData.datosPersonales} name="datosPersonales" type="checkbox" onChange={handleChange} />
          <label className="ml-2 text-sm text-gray-700 cursor-pointer">Autorizo el tratamiento de mi número de cédula</label>
        </div>
        {errors.datosPersonales && <p className="text-red-500 text-sm">{errors.datosPersonales}</p>}

        {/* Botón de Envío */}
        <Button 
          customColor="bg-green-500 hover:bg-green-600 text-white" 
          text="Registrarse" 
          type="submit"
          onClick={() => {}}
        />
      </DynamicForm>
    </Container>
  );
};

export default FormRegister;
