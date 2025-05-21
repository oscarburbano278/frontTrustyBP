import DynamicTransactionsScreen from "../components/layout/DynamicTransactionsScreen";
import TransactionTable from "../components/forms/transactionTable";

const TransactionsPage: React.FC = () => {
  const transactions = [
    {
      producto: "Producto A",
      fecha: "2025-05-13",
      usuario: "Juan Pérez",
      precio: "$100.00",
      estado: "Retenido",
      tipo: "Compra",
    },
    {
      producto: "Servicio B",
      fecha: "2025-05-14",
      usuario: "Ana Gómez",
      precio: "$200.00",
      estado: "Liberado",
      tipo: "Venta",
    },
  ];
  

  return (
    <DynamicTransactionsScreen>
      <TransactionTable transactions={transactions} />
    </DynamicTransactionsScreen>
  );
};

export default TransactionsPage;