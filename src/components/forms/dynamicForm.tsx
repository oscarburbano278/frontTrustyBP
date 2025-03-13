import type { DynamicFormProps } from "../../common/types";




const DynamicForm: React.FC<DynamicFormProps> = ({ title, children, onSubmit, className }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className={`bg-[#8b88b4] p-6 rounded-lg shadow-lg w-96 ${className}`}
        onSubmit={onSubmit}
      >
        {/* Título dinámico */}
        {title && <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>}

        {/* Contenido dinámico */}
        <div className="space-y-4">{children}</div>
      </form>
    </div>
  );
};

export default DynamicForm;
