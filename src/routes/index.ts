import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";
import CreateSale from "../pages/CreateSale";





export const Route = createFileRoute("/")({
	//component: Home;
	component: CreateSale,
});
