import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";
import Container from "../components/layout/container";
import PaymentNotification from "../pages/paymentNotification";



export const Route = createFileRoute("/")({
	//component: Home,
	component: PaymentNotification
	//component:Container
	
});
