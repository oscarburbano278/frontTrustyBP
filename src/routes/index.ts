import { createFileRoute } from "@tanstack/react-router";
import FormRegister from "../pages/formRegister";
import compForm from "../components/forms/dynamicForm";
// import { Home } from "../pages/Home";
import Aut from "../pages/Aut";
// import Container from "../components/layout/container";

export const Route = createFileRoute("/")({
	// component: Home,
	component: Aut,
	// component: Container,
	//component: FormRegister,
	//component: compForm,
});
