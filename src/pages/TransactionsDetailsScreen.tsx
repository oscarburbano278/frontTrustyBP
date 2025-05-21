import type React from "react";
import DynamicTransactionsScreen from "../components/layout/DynamicTransactionsScreen";

const TransactionsDetailsScreen: React.FC = () => {
  // Datos de ejemplo para la transacción
  const transactionDetails = {
    razon: "Compra de Producto A",
    colaborador: "Juan Pérez",
    fechaCreacion: "2025-05-13 10:00 AM",
    fechaPago: "2025-05-14 03:00 PM",
    montoTotal: "$100.00",
    estado: "Completado", // Puede ser: Depositado, Retenido, Completado, Disputa
    numRef: "TXN123456789",
  };

  // Función para obtener el color del estado
  const getEstadoColor = (estado: string):string => {
    switch (estado) {
      case "Depositado":
        return "text-blue-500";
      case "Retenido":
        return "text-orange-500";
      case "Completado":
        return "text-green-500";
      case "Disputa":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <DynamicTransactionsScreen>
      <div className="p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Detalle de la Transacción</h2>
        <div className="space-y-4">
          {/* Razón de la Transacción */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Razón de la Transacción:</span>
            <span className="text-gray-800">{transactionDetails.razon}</span>
          </div>

          {/* Colaborador */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Colaborador:</span>
            <span className="text-gray-800">{transactionDetails.colaborador}</span>
          </div>

          {/* Fecha y Hora de Creación */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Fecha y Hora de Creación:</span>
            <span className="text-gray-800">{transactionDetails.fechaCreacion}</span>
          </div>

          {/* Fecha y Hora de Pago */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Fecha y Hora de Pago:</span>
            <span className="text-gray-800">{transactionDetails.fechaPago}</span>
          </div>

          {/* Monto Total */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Monto Total:</span>
            <span className="text-gray-800">{transactionDetails.montoTotal}</span>
          </div>

          {/* Estado Actual */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Estado Actual:</span>
            <span className={`${getEstadoColor(transactionDetails.estado)} font-bold`}>
              {transactionDetails.estado}
            </span>
          </div>

          {/* Número de Referencia */}
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Número de Referencia:</span>
            <span className="text-gray-800">{transactionDetails.numRef}</span>
          </div>
        </div>

        {/* Botones de Conformidad */}
        {transactionDetails.estado === "Completado" && (
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              onClick={() => { console.log("Conformidad aceptada"); }}
            >
              Conformidad
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              onClick={() => { console.log("Conformidad rechazada"); }}
            >
              No Conformidad
            </button>
          </div>
        )}
      </div>
    </DynamicTransactionsScreen>
  );
};

export default TransactionsDetailsScreen;