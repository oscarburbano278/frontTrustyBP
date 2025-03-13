import Button from "../ui/buton";


const AutRegister: React.FC = () => {

    return(
        <div className="bg-white p-6 rounded-lg shadow-lg w-78">
            <h2 className="mt-6 text-xl font-bold mb-4 text-center">Registrate</h2>
            <div >
              <p className="text-2md font-bold text-black text-center">
                Haz tus ventas mas facil, resgistrate y asi tener una buena calificacion 
                como un buen vendedor
                </p>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
                <Button 
                    customColor="bg-[#2EBB93] hover:bg-[#2EBB80] text-white"
                    disabled={false}
                    text="Registrarse"
                    type="button"
                    onClick={ () => { console.log("Hola"); }} 
                />
            </div>
        </div>
    )
}

export default AutRegister;