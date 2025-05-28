import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";

import Conformity from "../pages/Conformity";
import ModalDynamic from "../components/layout/modalDynamic";
import ModalCodigo from "../components/forms/modalCodigo";
import ModalRecovPass from "../components/forms/modalRecovPass";
import ModalConfirmationCod from "../components/forms/modalConfirmationCod";
import paymentNotification from "../pages/paymentNotification";





export const Route = createFileRoute("/")({
	//component: Home,
	//component: paymentNotification,
	//component: ModalDynamic,
	//component: ModalCodigo,
	component: ModalConfirmationCod,
});
