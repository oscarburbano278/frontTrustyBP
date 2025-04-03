import type { ModalProps } from "../../common/types";

import { useState } from "react";
import Button from "../ui/buton";
import Input from "../ui/input";


const ModalCodigo: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [code, setCode] = useState<Array<string>>(Array(6).fill(""));
    const [error, setError] = useState<string>("");

    const handleChange = (index: number, value: string) => {
        if (value.match(/^[0-9]$/)) {
            setCode((previous) => {
                const newCode = [...previous];
                newCode[index] = value;
                return newCode;
            });
            setError("");
        } else {
            setError("Por favor, solo ingresar datos numéricos.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-2 text-center">Verificación</h2>
                <p className="text-gray-600 text-center mb-4">
                    Ingresa el código de 6 dígitos enviado a tu correo.
                </p>

                {/* Inputs para el código */}
                <div className="flex justify-center gap-2 mb-4">
                    {code.map((number_, index) => (
                        <Input
                            key={index}
                            maxLength={1}
                            name="code"
                            placeholder=" _ "
                            type="text"
                            value={number_}
                            onChange={(event) => { handleChange(index, event.target.value); }}
                        />
                    ))}
                </div>

                {/* Mensaje de error */}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                {/* Botón de Validar */}
                <Button 
                    customColor="w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-800"
                    text="Validar"
                    type="submit"
                    onClick={() => {}}
                />
                
                {/* Link para reenviar código */}
                <p className="text-sm text-center text-gray-600 mt-4">
                    ¿No recibiste el código?{" "}
                    <a className="text-blue-600 hover:underline" href="#">
                        Volver a enviar código
                    </a>
                </p>

                {/* Botón de Cerrar */}
                <Button 
                    customColor="w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-800"
                    text="Cerrar"
                    type="button"
                    onClick={onClose}
                />
            </div>
        </div>
    );
}

export default ModalCodigo;