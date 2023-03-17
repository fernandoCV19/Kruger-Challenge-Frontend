export function employeesMapper(employeesList) {
  return employeesList.map((employee) => {
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
  })
}