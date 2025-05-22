import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";
import CreateSale from "../pages/CreateSale";
import TransactionsScreen from "../pages/TransactionsScreen";
import TransactionTable from "../components/forms/transactionTable";
import DynamicTransactionsScreen from "../components/layout/DynamicTransactionsScreen";
import TransactionsDetailsScreen from "../pages/TransactionsDetailsScreen";
import FormDataEntry from "../pages/FormDataEntry";





export const Route = createFileRoute("/")({
	//component: Home;
	//component: CreateSale,
	//component: TransactionsScreen,
	//component: TransactionsDetailsScreen,
	component: FormDataEntry
});
