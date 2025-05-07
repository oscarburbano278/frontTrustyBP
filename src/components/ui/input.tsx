import type React from "react";
import type { InputProps } from "../../common/types";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  label,
  value,
  checked,
  name,
  onChange,
  onBlur,
  error,
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
    <label className="block">
      {label && <span className="text-gray-700">{label}</span>}
      <input
        checked={type === "checkbox" ? checked : undefined} // Usar `checked` para checkboxes
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        value={type === "checkbox" ? undefined : value || ""} // Usar `undefined` para checkboxes
        className={`${baseStyles} ${variantStyles[variant]} ${
          disabled ? "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 " : ""
        }`}
        onBlur={onBlur}
        onChange={(event) =>
          type === "checkbox"
            ? onChange(event.target.checked) // Pasar `checked` para checkboxes
            : onChange(event.target.value) // Pasar `value` para otros inputs
        }
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </label>
  );
};

export default Input;
