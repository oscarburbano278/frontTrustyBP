import type { FunctionComponent} from "react";
import CompImage from "../ui/compImage";
import Logo from "../../assets/images/logo.png";
import type { ContainerProps } from "../../common/types";


const Container: FunctionComponent<ContainerProps> = ({
  title = "Trusty",
  showLogo = true,
  logoPosition = "center",
  
}) => {
  // Clases dinámicas para la alineación del encabezado
  const headerAlignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[logoPosition];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#131127] p-6">
      
      {/* Encabezado con opciones dinámicas */}
      <header className={`flex ${headerAlignment} items-center gap-4 w-full max-w-5xl p-6`}>
        {showLogo && <CompImage height="h-18" src={Logo} width="w-16" />}
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </header>

      {/* Contenedor Principal dinámico */}
      <div className="w-full max-w-5xl bg-[#231f4e] shadow-lg rounded-lg p-8 mt-6">
        
      </div>
    </div>
  );
};

export default Container;
