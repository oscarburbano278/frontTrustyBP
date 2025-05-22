import type { ReactNode } from "react";

export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

export type ButtonProps = {  //tipos para el botón
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  disabled?: boolean;
}


export type InputProps = {  //tipos para el input
  type: "text" | "email" | "password" | "checkbox"; // Tipos de input soportados
  placeholder?: string; // Placeholder opcional
  label?: string; // Etiqueta opcional
  value?: string; // Valor para inputs de texto, email, password
  checked?: boolean; // Estado para checkboxes
  name: string; // Nombre del input
  onChange: (value: string | boolean) => void; // Función para manejar cambios (texto o booleano)
  onBlur?: () => void; // Evento opcional para manejar blur
  error?: string; 
  required?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "error";
  key?: number;
  maxLength?: number;
  className?: string;
}

export type LabelLinkProps = {  //tipos para el link
	text: string;
	href: string;
	className?: string;
}

export type CenteredImageProps = {  //tipos para la imagen
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  onclick?: () => void;
  
}

export type ContainerProps = {  //tipos para el contenedor
  title?: string; // Título opcional
  showLogo?: boolean; // Mostrar o no el logo
  logoPosition?: "left" | "center" | "right"; // Posición del logo y título
  children?: ReactNode; // Contenido dinámico
  customClass?: string; // Clases personalizadas para el contenedor
  
}

// export type DynamicFormProps = {
//   title?: string;
//   titleClassName?: string; // Clase personalizada para el título
//   children?: React.ReactNode; // Aquí van los inputs, botones, etc.
//   onSubmit?: (event_: React.FormEvent<HTMLFormElement>) => void;
//   className?: string; // Permite personalizar clases adicionales
// }

export type ValidateFormProps = {
  correo: string;
  contraseña: string;
  nombre: string;
  cedula: string;
  telefono: string;
  confirmarContraseña: string;
  terminos: boolean;
  datosPersonales: boolean;
} 

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export type ModalDynamicProps = {
  title?: string;
  message?: string;
  buttonText?: string;
  onClose: () => void;
  customClass?: string; // clases personalizadas para el contenedor
  titleClass?: string;  // clases personalizadas para el título
  messageClass?: string; // clases personalizadas para el mensaje
  buttonClass?: string;  // clases personalizadas para el botón
}

export type FieldConfig = {
  error: string | undefined;
  label?: string | undefined;
  name: string;
  placeholder: string;
  type: "text" | "email" | "password" | "checkbox"; // Tipos de input soportados 
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
  key?: number;
  // Agrega más propiedades según tus necesidades
};
export type ButtonConfig = {
  label: string;
  type: "button" | "submit";
  onClick: () => void;
  className?: string;
  // Agrega más propiedades según tus necesidades
};
export type DynamicFormProps = {
  title?: string;
  label?: string;
  fields: FieldConfig[];
  buttons: ButtonConfig[];
  onSubmit: (event: React.FormEvent) => void;
  className?: string; // Permite personalizar clases adicionales
  titleClassName?: string; // Clase personalizada para el título
  children?: React.ReactNode; // Aquí van los inputs, botones, etc.
  //onSubmit?: (event_: React.FormEvent<HTMLFormElement>) => void;
  // Agrega más propiedades según tus necesidades
};
export type PaymentNotificationProps = {
  monto: string | number;
  nombre: string;
  identificacion: string;
  
}

export type TransactionTableProps = {
  // eslint-disable-next-line no-use-before-define
  transactions: Transaction[]; // Lista de transacciones
  customClass?: string; // Clases personalizadas para el contenedor
  title?: string; // Título opcional
  titleClassName?: string; // Clase personalizada para el título
  children?: React.ReactNode; // Aquí van los inputs, botones, etc.
  onSubmit?: (event_: React.FormEvent<HTMLFormElement>) => void;
}
export type Transaction = {
  producto: string;
  fecha: string;
  usuario: string;
  precio: string;
  estado: string;
  tipo: string;
}

export type DynamicTransactionsScreenProps = {
  children?: React.ReactNode; // Contenido dinámico que se mostrará en el centro
}

export type Field = {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  readOnly: boolean;
}