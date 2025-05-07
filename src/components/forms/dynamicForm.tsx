import Input from '../ui/input'; // Tu componente de input personalizado
import Button from '../ui/buton'; // Tu componente de botón personalizado
import type { DynamicFormProps } from '../../common/types'; // Importa los tipos necesarios


const DynamicForm: React.FC<DynamicFormProps> = ({ title, fields, buttons, onSubmit }) => {
  return (
    <form className="p-4 bg-white rounded-lg shadow-md" onSubmit={onSubmit}>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

      {/* Renderizar los campos dinámicamente */}
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <Input
            error={field.error}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            type={field.type}
            value={field.value || ""} // Asegúrate de que el valor no sea undefined
            onChange={(value) => { field.onChange(String(value)); }} // Asegúrate de pasar siempre un string
          />
        </div>
      ))}

      {/* Renderizar los botones dinámicamente */}
      <div className="flex gap-2 mt-4">
        {buttons.map((button, index) => (
          <Button 
            key={index}
            customColor="w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-800"
            text={button.label}
            type={button.type || "button"}
            onClick={button.onClick}
          />
        ))}
      </div>
    </form>
  );
};

export default DynamicForm;