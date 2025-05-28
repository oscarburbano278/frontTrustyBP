import Container from "../components/layout/container";
import Buton from "../components/ui/buton";

const Conformity = () => {
  return (
    <Container customClass="max-w-lg">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Conformidad con el Proceso</h2>
        <p className="text-gray-700">
          ¿Está conforme con el servicio o producto recibido?
        </p>
      </div>

      <div className="mt-4 p-6 bg-white rounded-lg shadow-md flex items-center justify-between">
        <Buton
          customColor="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          text="No Conforme"
          type="button"
          onClick={() => {
            console.log("No Conforme");
          }}
        />
        <Buton
          customColor="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          text="Conforme"
          type="button"
          onClick={() => {
            console.log("Conforme");
          }}
        />
      </div>
    </Container>
  );
};

export default Conformity;