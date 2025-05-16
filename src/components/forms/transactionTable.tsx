import type { TransactionTableProps } from "../../common/types";


const TransactionTable : React.FC<TransactionTableProps> = ({transactions}) => {
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="flex justify-center text-xl font-bold text-gray-800 mb-4">
        Lista de Transacciones
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Producto o Servicio</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Fecha</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Nombre de Usuario</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Precio</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Estado del Dinero</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Tipo de Transacción</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{transaction.producto}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.fecha}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.usuario}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.precio}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.estado}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.tipo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                colSpan={6}
              >
                No hay transacciones disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
