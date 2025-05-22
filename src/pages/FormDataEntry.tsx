import { useState } from "react";
import DynamicForm from "../components/forms/dynamicForm";
import Container from "../components/layout/container";
import type { Field } from "../common/types";


const FormDataEntry: React.FC = () => {
  const initialFormData = {
    nombre: "",
    cedula: "",
    correo: "",
    telefono: "",
  };

  const [formDataComprador, setFormDataComprador] = useState(initialFormData);
  const [formDataVendedor, setFormDataVendedor] = useState(initialFormData);
  const [llave, setLlave] = useState("");

  // Simulación de datos del comprador (pueden venir de una API)
  const compradorRegistrado = {
    nombre: "Juan Pérez",
    cedula: "12345678",
    correo: "juan.perez@example.com",
    telefono: "555123456",
  };

  // Función para cargar automáticamente los datos del comprador
  const cargarDatosComprador = ():void => {
    setFormDataComprador(compradorRegistrado);
  };

  // Función para cargar los datos del vendedor al ingresar la llave
  const cargarDatosVendedor = (llave: string):void => {
    // Simulación de datos del vendedor (pueden venir de una API)
    const vendedorRegistrado = {
      nombre: "Ana Gomez",
      cedula: "87654321",
      correo: "anagomez@example.com",
      telefono: "555654321",
    };

    // Mostrar datos enmascarados
    const enmascararDato = (dato: string):string =>
      dato.length > 4
        ? `${dato.slice(0, 2)}${"*".repeat(dato.length - 4)}${dato.slice(-2)}`
        : dato;

    setFormDataVendedor({
      nombre: enmascararDato(vendedorRegistrado.nombre),
      cedula: enmascararDato(vendedorRegistrado.cedula),
      correo: enmascararDato(vendedorRegistrado.correo),
      telefono: enmascararDato(vendedorRegistrado.telefono),
    });
  };

  // Campos del formulario
  const fields = (formData: typeof initialFormData):Array<Field> => [
    {
      name: "nombre",
      placeholder: "Nombre Completo",
      type: "text",
      value: formData.nombre,
      readOnly: true, // Campo no editable
    },
    {
      name: "cedula",
      placeholder: "Número de Cédula",
      type: "text",
      value: formData.cedula,
      readOnly: true, // Campo no editable
    },
    {
      name: "telefono",
      placeholder: "Teléfono",
      type: "text",
      value: formData.telefono,
      readOnly: true, // Campo no editable
    },
    {
      name: "correo",
      placeholder: "Correo Electrónico",
      type: "email",
      value: formData.correo,
      readOnly: true, // Campo no editable
    },
  ];

  const buttons = [
    {
      label: "Pagar",
      type: "button",
      onClick: (): void => {
        console.log("Datos del Comprador:", formDataComprador);
        console.log("Datos del Vendedor:", formDataVendedor);
      },
      className: "bg-green-500 text-white py-2 px-4 rounded",
    },
    {
      label: "Cancelar",
      type: "button",
      onClick: (): void => {
        setFormDataComprador(initialFormData);
        setFormDataVendedor(initialFormData);
        setLlave("");
      },
      className: "bg-gray-500 text-white py-2 px-4 rounded",
    },
  ];

  return (
    <div>
      {/* Contenedor Principal */}
      <Container customClass="max-w-5xl">
        <div className="flex flex-col items-center w-full mt-8">
          <h2 className="text-2xl font-bold mb-4">Datos de los Participantes</h2>
          <p className="text-gray-600 mb-6">Por favor, Ingresa la Llave:</p>

          {/* Contenedor de Formularios y Botones */}
          <div className="flex flex-row gap-8 justify-center items-start w-full">
            {/* Formulario Comprador */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700"
                onClick={cargarDatosComprador}
              >
                Cargar Datos del Comprador
              </button>
              <DynamicForm
                buttons={[]}
                fields={fields(formDataComprador)}
                title="Datos del Comprador"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              />
            </div>

            {/* Formulario Vendedor */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
              {/* Campo para ingresar la llave */}
              <div className="classname">
                <label className="block text-gray-700 font-bold mb-2">Llave</label>
                <input
                  className="border border-gray-300 rounded-md p-2 w-full mb-4"
                  placeholder="Llave"
                  type="text"
                  value={llave}
                  onChange={(event) => {
                    setLlave(event.target.value);
                    cargarDatosVendedor(event.target.value);
                  }}
                />
              </div>

              <DynamicForm
                buttons={[]}
                fields={fields(formDataVendedor)}
                title="Datos del Vendedor"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              />
            </div>
          </div>

          {/* Botones para Pagar y Cancelar */}
          <div className="flex gap-4 mt-6">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={button.className}
                type={button.type}
                onClick={button.onClick}
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

// LLAVE: 12345-ABCDE