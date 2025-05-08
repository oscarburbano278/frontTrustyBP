import Container from "../components/layout/container";
import type { PaymentNotificationProps } from "../common/types";


const PaymentNotification: React.FC<PaymentNotificationProps> = ({
  monto,
  nombre,
  identificacion,
}) => {
  const formattedMonto = isNaN(Number(monto)) ? "0.00" : Number(monto).toFixed(2);

  return (
    <Container customClass="max-w-lg">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Notificación de Pago</h2>
        <p className="text-gray-700">
          Trusty le informa que nuestra aplicación tiene un monto de{" "}
          <span className="font-bold text-blue-800">${formattedMonto}</span> retenido por el
          Sr(a): <span className="font-bold text-blue-800">{nombre}</span> con número de
          identificación: <span className="font-bold text-blue-800">{identificacion}</span>.
        </p>
      </div>
    </Container>
  );
};

export default PaymentNotification;

// ejemplo de uso
// <PaymentNotification
//   monto={100}
//   nombre="Juan Perez"
//   identificacion="123456789"
// />