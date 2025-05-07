import { useState } from "react";
import DynamicForm from "../components/forms/dynamicForm";
import Container from "../components/layout/container";
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
  const initialFormData = {
    nombre: "",
    cedula: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
    terminos: false,
    datosPersonales: false,
  };

  const [formData, setFormData] = useState(initialFormData);

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
  const handleInputChange = (fieldName: string, value: string | boolean) => {
    setFormData((previous) => ({
      ...previous,
      [fieldName]: value,
    }));
  };

  // Validación del formulario
  const validateForm = (): boolean => {
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
      nombre: "",
      cedula: "",
      correo: "",
      contraseña: "",
      confirmarContraseña: "",
      telefono: "",
      terminos: "",
      datosPersonales: "",
    }); // Limpia los errores
  };

  const fields = [
    {
      name: "nombre",
      placeholder: "Nombre Completo",
      type: "text",
      value: formData.nombre,
      onChange: (value: string): void => { handleInputChange("nombre", value); },
      error: errors.nombre,
    },
    {
      name: "cedula",
      placeholder: "Número de Cédula",
      type: "text",
      value: formData.cedula,
      onChange: (value: string): void => { handleInputChange("cedula", value); },
      error: errors.cedula,
    },
    {
      name: "telefono",
      placeholder: "Teléfono",
      type: "text",
      value: formData.telefono,
      onChange: (value: string): void => { handleInputChange("telefono", value); },
      error: errors.telefono,
    },
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
    {
      name: "confirmarContraseña",
      placeholder: "Confirmar Contraseña",
      type: "password",
      value: formData.confirmarContraseña,
      onChange: (value: string): void => { handleInputChange("confirmarContraseña", value); },
      error: errors.confirmarContraseña,
    },
    {
      name: "terminos",
      label: "Aceptar Términos y Condiciones",
      type: "checkbox",
      checked: formData.terminos,
      onChange: (value: boolean): void => { handleInputChange("terminos", value); },
      error: errors.terminos,
    },
    {
      name: "datosPersonales",
      label: "Aceptar Tratamiento de Datos Personales",
      type: "checkbox",
      checked: formData.datosPersonales,
      onChange: (value: boolean): void => { handleInputChange("datosPersonales", value); },
      error: errors.datosPersonales,
    },
  ];

  const buttons = [
    {
      label: "Registrarse",
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
    <Container customClass="max-w-md mx-auto p-6 lg:p-12 bg-white shadow-md rounded-lg">
      <DynamicForm
        buttons={buttons}
        fields={fields}
        title="Registro de Usuario"
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default FormRegister;
