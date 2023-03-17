export function mapeadorEmpleados(listaEmpleados){
  return listaEmpleados.map((empleado) => {
    return {
      id: empleado.id,
      ci: empleado.ci,
      email: empleado.mail,
      nombres: empleado.nombres,
      apellidos: empleado.apellidos,
      nombreCompleto: empleado.nombres + ' ' + empleado.apellidos,
      correo: empleado.correo,
      fechaNacimiento: empleado.fechaNacimiento,
      direccion: empleado.direccion,
      telefono: empleado.telefono,
      vacuna: empleado.vacuna
        ? {
            tipo: empleado.vacuna.tipo,
            fecha: new Date(empleado.vacuna.fecha),
            numeroDosis: empleado.vacuna.numeroDosis,
          }
        : null,
    };
  })
}