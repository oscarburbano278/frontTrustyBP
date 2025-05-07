import { useState } from "react";
import DynamicForm from "../components/forms/dynamicForm";
import Container from "../components/layout/container";
import {
  validateNombre,
  validateCedula,
  validateCorreo,
  validateTelefono,
} from "../components/utils/validators";

const FormDataEntry: React.FC = () => {
  const initialFormData = {
    nombre: "",
    cedula: "",
    correo: "",
    telefono: "",
  };

  const [formDataComprador, setFormDataComprador] = useState(initialFormData);
  const [formDataVendedor, setFormDataVendedor] = useState(initialFormData);

  const [errorsComprador, setErrorsComprador] = useState(initialFormData);
  const [errorsVendedor, setErrorsVendedor] = useState(initialFormData);

  // Función para manejar cambios en los inputs
  const handleInputChange = (
    fieldName: string,
    value: string,
    setFormData: React.Dispatch<React.SetStateAction<typeof initialFormData>>
  ): void => {
    setFormData((previous) => ({
      ...previous,
      [fieldName]: value,
    }));
  };

  // Validación del formulario
  const validateForm = (
    formData: typeof initialFormData,
    setErrors: React.Dispatch<React.SetStateAction<typeof initialFormData>>
  ): boolean => {
    const newErrors = {
      nombre: validateNombre(formData.nombre),
      cedula: validateCedula(formData.cedula),
      correo: validateCorreo(formData.correo),
      telefono: validateTelefono(formData.telefono),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (
    formData: typeof initialFormData,
    setErrors: React.Dispatch<React.SetStateAction<typeof initialFormData>>
  ): void => {
    if (validateForm(formData, setErrors)) {
      console.log("Formulario válido", formData);
      // Aquí podrías enviar los datos al backend
    } else {
      console.log("Formulario con errores", formData);
    }
  };

  // Función para reiniciar los formularios
  const resetForm = (): void => {
    setFormDataComprador(initialFormData);
    setFormDataVendedor(initialFormData);
    setErrorsComprador(initialFormData);
    setErrorsVendedor(initialFormData);
  };

  // Campos del formulario
  const fields = (
    formData: typeof initialFormData,
    errors: typeof initialFormData,
    setFormData: React.Dispatch<React.SetStateAction<typeof initialFormData>>
  ) => [
    {
      name: "nombre",
      placeholder: "Nombre Completo",
      type: "text",
      value: formData.nombre,
      onChange: (value: string): void => {
        handleInputChange("nombre", value, setFormData);
      },
      error: errors.nombre,
    },
    {
      name: "cedula",
      placeholder: "Número de Cédula",
      type: "text",
      value: formData.cedula,
      onChange: (value: string): void => {
        handleInputChange("cedula", value, setFormData);
      },
      error: errors.cedula,
    },
    {
      name: "telefono",
      placeholder: "Teléfono",
      type: "text",
      value: formData.telefono,
      onChange: (value: string): void => {
        handleInputChange("telefono", value, setFormData);
      },
      error: errors.telefono,
    },
    {
      name: "correo",
      placeholder: "Correo Electrónico",
      type: "email",
      value: formData.correo,
      onChange: (value: string): void => {
        handleInputChange("correo", value, setFormData);
      },
      error: errors.correo,
    },
  ];

  const buttons = [
    {
      label: "Pagar",
      type: "button",
      onClick: (): void => {
        handleSubmit(formDataComprador, setErrorsComprador);
        handleSubmit(formDataVendedor, setErrorsVendedor);
      },
      className: "bg-green-500 text-white py-2 px-4 rounded",
    },
    {
      label: "Cancelar",
      type: "button",
      onClick: resetForm,
      className: "bg-gray-500 text-white py-2 px-4 rounded",
    },
  ];

  return (
    <div>
      {/* Contenedor Principal */}
      <Container customClass="max-w-5xl">
        <div className="flex flex-col items-center w-full mt-8">
          <h2 className="text-2xl font-bold mb-4">Ingreso De Datos</h2>
          <p className="text-gray-600 mb-6">Por favor, completa los siguientes campos:</p>

          {/* Contenedor de Formularios y Botones */}
          <div className="flex flex-row gap-8 justify-center items-start w-full">
            {/* Formulario Comprador */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
              <DynamicForm
                buttons={[]}
                fields={fields(formDataComprador, errorsComprador, setFormDataComprador)}
                title="Datos del Comprador"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Datos del Comprador:", formDataComprador);
                }}
              />
            </div>

            {/* Formulario Vendedor */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
              <DynamicForm
                buttons={[]}
                fields={fields(formDataVendedor, errorsVendedor, setFormDataVendedor)}
                title="Datos del Vendedor"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Datos del Vendedor:", formDataVendedor);
                }}
              />
            </div>
          </div>

          {/* Botones para Pagar y Cancelar */}
          <div className="flex gap-4 mt-6">
            {buttons.map((button, index) => (
              <button
                key={index}
                type={button.type}
                onClick={button.onClick}
                className={button.className}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FormDataEntry;
