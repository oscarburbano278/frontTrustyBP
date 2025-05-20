import { useState } from "react";
import Container from "../components/layout/container";

const CreateSale: React.FC = () => {
  const [tipoVenta, setTipoVenta] = useState("producto");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [horasExpiracion, setHorasExpiracion] = useState("1");
  const [llaveGenerada, setLlaveGenerada] = useState("");

  // Función para generar la llave
  const generarLlave = ():void => {
    const llave = `${tipoVenta}-${descripcion}-${precio}-${horasExpiracion}-${Date.now()}`;
    setLlaveGenerada(llave);
  };

  // Función para cancelar el proceso
  const cancelarProceso = ():void => {
    setTipoVenta("producto");
    setDescripcion("");
    setPrecio("");
    setHorasExpiracion("1");
    setLlaveGenerada("");
  };

  // Función para aceptar la generación de la llave
  const aceptarProceso = ():void => {
    console.log("Llave generada:", llaveGenerada);
    alert("Llave aceptada: " + llaveGenerada);
    cancelarProceso(); // Reinicia el formulario después de aceptar
  };

  return (
    <Container customClass="max-w-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Crear Venta</h1>
      <form className="space-y-4">
        {/* Tipo de Venta */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Tipo de Venta</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={tipoVenta}
            onChange={(event) => { setTipoVenta(event.target.value); }}
          >
            <option value="producto">Producto</option>
            <option value="servicio">Servicio</option>
          </select>
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Descripción</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Descripción del producto o servicio"
            type="text"
            value={descripcion}
            onChange={(event) => { setDescripcion(event.target.value); }}
          />
        </div>

        {/* Precio */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Precio</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Precio"
            type="number"
            value={precio}
            onChange={(event) => { setPrecio(event.target.value); }}
          />
        </div>

        {/* Horas de Expiración */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Horas de Expiración de la Llave</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            value={horasExpiracion}
            onChange={(event) => { setHorasExpiracion(event.target.value); }}
          >
            <option value="1">1 Hora</option>
            <option value="2">2 Horas</option>
            <option value="4">4 Horas</option>
            <option value="8">8 Horas</option>
            <option value="24">24 Horas</option>
            <option value="24">48 Horas</option>
          </select>
        </div>

        {/* Botón para Generar Llave */}
        <div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            type="button"
            onClick={generarLlave}
          >
            Generar Llave
          </button>
        </div>

        {/* Mostrar Llave Generada */}
        {llaveGenerada && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 font-bold">Llave Generada:</p>
            <p className="text-gray-800 break-all">{llaveGenerada}</p>
            <button
              className="mt-2 bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-700"
              type="button"
              onClick={() => navigator.clipboard.writeText(llaveGenerada)}
            >
              Copiar Llave
            </button>
          </div>
        )}

        {/* Botones de Cancelar y Aceptar */}
        <div className="flex justify-between">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            type="button"
            onClick={cancelarProceso}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            type="button"
            onClick={aceptarProceso}
          >
            Aceptar
          </button>
        </div>
      </form>
    </Container>
  );
};

export default CreateSale;