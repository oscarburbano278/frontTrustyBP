import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";
import TransactionsScreen from "../pages/TransactionsScreen";
import TransactionTable from "../components/forms/transactionTable";



export const Route = createFileRoute("/")({
	//component: Home,		
	component: TransactionsScreen,	
	//component: TransactionTable,
	
});
