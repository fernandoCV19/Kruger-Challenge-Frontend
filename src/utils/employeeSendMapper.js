/**
 * Function that maps the information that will be sent to the api
 * @param employee: Object that contains the information that wil be sent
 * @returns object: that contains the same information but with name fields that are compatible with the api
 */

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