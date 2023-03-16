export function mapeadorEmpleados(listaEmpleados){
  return listaEmpleados.resultado.map((empleado) => {
    return {
      id: empleado.id,
      ci: empleado.ci,
      email: empleado.mail,
      nombres: empleado.nombres,
      apellidos: empleado.apellidos,
      correo: empleado.correo,
      fechaNacimiento: empleado.fechaNacimiento,
      direccion: empleado.direccion,
      telefono: empleado.telefono,
      vacuna: empleado.vacuna
        ? {
            tipo: empleado.vacuna.tipo,
            fecha: empleado.vacuna.fecha,
            numeroDosis: empleado.vacuna.numeroDosis,
          }
        : null,
    };
  })
}