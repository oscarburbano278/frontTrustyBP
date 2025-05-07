import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";
import FormNewPass from "../pages/FormNewPass";
import FormLogin from "../pages/FormLogin";
import FormDataEntry from "../pages/FormDataEntry";
import FormRecovPass from "../pages/FormRecovPass";



export const Route = createFileRoute("/")({
	//component: Home,
	component: FormDataEntry,
	//component: FormRecovPass,
	//component: FormLogin,	
});
