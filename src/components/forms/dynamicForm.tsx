import type { DynamicFormProps } from "../../common/types";




const DynamicForm: React.FC<DynamicFormProps & { titleClassName?: string }> = ({ 
  title, 
  children, 
  onSubmit, 
  className, 
  titleClassName 
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className={`bg-[#8b88b4] p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4 ${className}`}
        onSubmit={onSubmit}
      >
        {/* Título dinámico con clase personalizada */}
        {title && <h2 className={`text-xl font-bold text-center ${titleClassName}`}>{title}</h2>}

        {/* Contenido dinámico */}
        <div className="space-y-9">{children}</div>
      </form>
    </div>
  );
};

export default DynamicForm;
