import type React from "react";
import type { InputProps } from "../../common/types";



const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  variant = "primary",
}) => {
  const baseStyles =
    "w-full px-4 py-2 border rounded-lg outline-none transition duration-300";

  const variantStyles = {
    primary: "border-gray-300 focus:border-blue-500",
    secondary: "border-gray-400 focus:border-green-500",
    error: "border-red-500 focus:border-red-700",
  };

  return (
    <input    
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 " : ""}`}
      disabled={disabled}
      
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export default Input;
