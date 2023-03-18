/**
 * Function that maps the information send by the api.
 * @param employee: Object that contains the information sent by the API
 * @returns object: that contains the same information but with name fields that are compatible with the application
 */

export function employeeMapper(employee) {
    return {
      id: employee.id,
      ci: employee.ci,
      names: employee.nombres,
      lastNames: employee.apellidos,
      fullName: employee.nombres + ' ' + employee.apellidos,
      email: employee.correo,
      birthDate: employee.fechaNacimiento,
      address: employee.direccion,
      phone: employee.telefono,
      vaccine: employee.vacuna
        ? {
          type: employee.vacuna.tipo,
          date: new Date(employee.vacuna.fecha),
          doseNumber: employee.vacuna.numeroDosis,
        }
        : null,
    };
}