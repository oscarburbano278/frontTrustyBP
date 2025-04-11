
export const nameRegex = /^[A-Za-z\s]{2,50}$/;
export const cedulaRegex = /^\d{6,12}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
export const phoneRegex = /^\d{10}$/;
export const codigoRegex = /^\d{6}$/;

export const validateCodigo = (codigo: string) => {
  if (!codigo.trim()) return "El código es obligatorio";
  if (!codigoRegex.test(codigo)) return "El código debe contener 6 caracteres numéricos";
  return "";
}

export const validateNombre = (nombre: string) => {
  if (!nombre.trim()) return "El nombre es obligatorio";
  if (!nameRegex.test(nombre)) return "El nombre solo puede contener letras y espacios (2-50 caracteres)";
  return "";
};

export const validateCedula = (cedula: string) => {
  if (!cedula.trim()) return "La cédula es obligatoria";
  if (!cedulaRegex.test(cedula)) return "La cédula debe contener entre 6 y 12 dígitos numéricos";
  return "";
};

export const validateCorreo = (correo: string) => {
  if (!correo.trim()) return "El correo es obligatorio";
  if (!emailRegex.test(correo)) return "Ingrese un correo válido";
  return "";
};

export const validateContraseña = (contraseña: string) => {
  if (!contraseña) return "La contraseña es obligatoria";
  if (!passwordRegex.test(contraseña)) return "Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial";
  return "";
};

export const validateConfirmarContraseña = (contraseña: string, confirmar: string) => {
  if (confirmar !== contraseña) return "Las contraseñas no coinciden";
  return "";
};

export const validateTelefono = (telefono: string) => {
  if (!telefono.trim()) return "El teléfono es obligatorio";
  if (!phoneRegex.test(telefono)) return "El número de teléfono debe tener 10 dígitos";
  return "";
};

export const validateCheck = (value: boolean, mensaje: string) => {
  if (!value) return mensaje;
  return "";
};
