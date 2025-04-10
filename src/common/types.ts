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
  type?: "text" | "password" | "email" | "number" | "checkbox";
  placeholder: string;
  value?: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "error";
  key?: number;
  maxLength?: number;
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
  
}

export type DynamicFormProps = {
  title: string;
  titleClassName?: string; // Clase personalizada para el título
  children?: React.ReactNode; // Aquí van los inputs, botones, etc.
  onSubmit?: (event_: React.FormEvent<HTMLFormElement>) => void;
  className?: string; // Permite personalizar clases adicionales
}

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

