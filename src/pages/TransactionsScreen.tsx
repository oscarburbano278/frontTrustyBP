import React, { useState } from "react";
import Container from "../components/layout/container";
import Buton from "../components/ui/buton";
import TransactionTable from "../components/forms/transactionTable";

const TransactionsScreen: React.FC = () => {
  const [transactions, setTransactions] = useState([
  //   {
  //     producto: "Producto A",
  //     fecha: "2025-05-13",
  //     usuario: "Juan Pérez",
  //     precio: "$100.00",
  //     estado: "Retenido",
  //     tipo: "Compra",
  //   },
  //   {
  //     producto: "Servicio B",
  //     fecha: "2025-05-14",
  //     usuario: "Ana Gómez",
  //     precio: "$200.00",
  //     estado: "Liberado",
  //     tipo: "Venta",
  //   },
  // ]);

  {
    producto: "Producto A",
    fecha: "2025-05-13",
    usuario: "Juan Pérez",
    precio: "$100.00",
    estado: "Retenido",
    tipo: "Compra",
  },
]);

// Función para agregar una nueva transacción
// const addTransaction = () => {
//   const nuevaTransaccion = {
//     producto: "Nuevo Producto",
//     fecha: new Date().toISOString().split("T")[0], // Fecha actual en formato YYYY-MM-DD
//     usuario: "Usuario Ejemplo",
//     precio: `$${(Math.random() * 100 + 1).toFixed(2)}`, // Precio aleatorio
//     estado: "Pendiente",
//     tipo: "Venta",
//   };

  // Actualizar el estado con la nueva transacción
  setTransactions((prevTransactions) => [...prevTransactions, nuevaTransaccion]);
};

  return (
    <Container customClass="max-w-5xl">
      {/* Botones Centrados */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Buton
          customColor="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          text="Realizar Compra"
          type="button"
          onClick={() => {
            console.log("Realizar Compra");
          }}
        />
        <Buton
          customColor="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          text="Transacciones"
          type="button"
          onClick={() => {
            console.log("Transacciones");
          }}
        />
        <Buton
          customColor="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          text="Notificaciones"
          type="button"
          onClick={() => {
            console.log("Notificaciones");
          }}
        />
        <Buton
          customColor="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-800"
          text="Crear Compra"
          type="button"
          onClick={() => {
            console.log("Crear Compra");
          }}
        />
      </div>

      {/* Tabla de Transacciones */}
      <TransactionTable transactions={transactions} />

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

        {/* Botón para agregar una nueva transacción */}
            {/* <button
              onClick={addTransaction}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mb-4"
            >
              Agregar Transacción
            </button> */}
      </div>
    </Container>
  );
};

export default TransactionsScreen;