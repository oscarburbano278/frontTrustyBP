import { createFileRoute } from "@tanstack/react-router";
import FormRegister from "../pages/FormRegister";

export const Route = createFileRoute("/register")({
	component: FormRegister,
});
