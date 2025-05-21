import React, { useState } from "react";
import Container from "./container";
import Buton from "../ui/buton";
import type { DynamicTransactionsScreenProps } from "../../common/types";

const DynamicTransactionsScreen: React.FC<DynamicTransactionsScreenProps> = ({ children }) => {
  const [activeButton, setActiveButton] = useState<string>("Realizar Compra");

  return (
    <Container customClass="max-w-5xl">
      {/* Botones Centrados */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Buton
          customColor={
            activeButton === "Realizar Compra"
              ? "bg-gray-400 text-white py-2 px-4 rounded-lg"
              : "bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          }
          text="Realizar Compra"
          type="button"
          onClick={() => {
            setActiveButton("Realizar Compra");
            console.log("Realizar Compra");
          }}
        />
        <Buton
          customColor={
            activeButton === "Transacciones"
              ? "bg-gray-400 text-white py-2 px-4 rounded-lg"
              : "bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          }
          text="Transacciones"
          type="button"
          onClick={() => {
            setActiveButton("Transacciones");
            console.log("Transacciones");
          }}
        />
        <Buton
          customColor={
            activeButton === "Notificaciones"
              ? "bg-gray-400 text-white py-2 px-4 rounded-lg"
              : "bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          }
          text="Notificaciones"
          type="button"
          onClick={() => {
            setActiveButton("Notificaciones");
            console.log("Notificaciones");
          }}
        />
        <Buton
          customColor={
            activeButton === "Crear Compra"
              ? "bg-gray-400 text-white py-2 px-4 rounded-lg"
              : "bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          }
          text="Crear Compra"
          type="button"
          onClick={() => {
            setActiveButton("Crear Compra");
            console.log("Crear Compra");
          }}
        />
      </div>

      {/* Contenido Dinámico */}
      <div className="mt-8">{children}</div>

      {/* Botón de Salir */}
      <div className="flex justify-end mt-6">
        <Buton
          customColor="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          text="Salir"
          type="button"
          onClick={() => {
            console.log("Salir");
          }}
        />
      </div>
    </Container>
  );
};

export default DynamicTransactionsScreen;