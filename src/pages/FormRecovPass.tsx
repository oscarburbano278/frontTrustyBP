import Container from "../components/layout/container";
import Button from "../components/ui/buton";
import Input from "../components/ui/input";


const RecoverPassword: React.FC = () => {
    return (
        <Container>
            <div className="flex justify-center items-center">
                <form
                    className="bg-[#8b88b4] p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4"
                    onSubmit={(event) => {
                        event.preventDefault();
                        // Aquí puedes manejar el envío del formulario
                    }}
                >
                    <h2 className="text-xl font-bold text-center">Recuperar Contraseña</h2>
                    <div className="space-y-9">
                        {/* Aquí puedes agregar tus campos de formulario */}
                        <Input
                           name="correo"
                            placeholder="Correo electrónico"
                            type="email"
                            value=""
                            onChange={() => {}}
                        />
                        <Button                            
                            customColor="bg-[#2EBB93] text-white hover:scale-105"                            
                            text="Enviar Correo de Recuperación"
                            type="submit"
                            onClick={() => {}}
                        />                            
                        
                    </div>
                </form>
            </div>
        </Container>
    );
    }
export default RecoverPassword;
