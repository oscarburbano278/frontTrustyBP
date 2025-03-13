import type React from "react";
import type { InputProps } from "../../common/types";



const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value = "",
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
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
      disabled={disabled}
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
