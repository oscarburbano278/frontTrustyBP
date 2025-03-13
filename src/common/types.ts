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
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "error";
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
  
}

export type DynamicFormProps = {
  title?: string;
  children: React.ReactNode; // Aquí van los inputs, botones, etc.
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string; // Permite personalizar clases adicionales
}