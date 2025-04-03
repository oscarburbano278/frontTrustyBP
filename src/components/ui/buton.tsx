import type React from "react";
import type { ButtonProps } from "../../common/types";



const Button: React.FC<ButtonProps & { customColor?: string }> = ({
  text,
  onClick,
  type,
  variant = "primary",
  size = "medium",
  icon,
  disabled = false,
  customColor,
}) => {
  const baseStyles =
    "flex items-center justify-center rounded-lg transition duration-300 font-semibold focus:outline-none";
  
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  return (
    <button
    className={`${baseStyles} ${customColor ? customColor : variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "w-full bg-green-500 hover:bg-green-800 text-white font-semibold py-3 rounded-md transition duration-300" : ""}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
