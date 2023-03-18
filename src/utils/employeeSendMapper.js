export function employeeSendMapper({employee}){
  return {
    id: employee.id,
    ci: employee.ci,
    nombres: employee. names,
    apellidos: employee. lastNames,
    correo: employee. email,
    fechaNacimiento: employee. birthDate,
    direccion: employee. address,
    telefono: employee. phone,
    vacuna: employee.vaccine
      ? {
        tipo: employee.vaccine.type,
        fecha: new Date(employee.vaccine.date),
        numeroDosis: employee.vaccine.doseNumber,
      }
      : null,
  };
}