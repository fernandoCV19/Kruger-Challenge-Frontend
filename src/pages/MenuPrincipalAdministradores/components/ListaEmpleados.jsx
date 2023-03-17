import { Empleado } from './Empleado';
import PropTypes from 'prop-types';

export function ListaEmpleados({ listaEmpleados, actualizarListaEmpleados }) {
  return (
    <section>
      {listaEmpleados.length > 0? (
        listaEmpleados.map((empleado) => (
          <Empleado
            key={empleado.id}
            id={empleado.id}
            nombres={empleado.nombres}
            apellidos={empleado.apellidos}
            ci={empleado.ci}
            email={empleado.correo}
            telefono={empleado.telefono}
            vacuna={empleado.vacuna}
            actualizarListaEmpleados={actualizarListaEmpleados}
          />
        ))
      ) : (
        <p>No hay empleados que concuerden con los filtros de busqueda</p>
      )}
    </section>
  );
}

ListaEmpleados.propTypes = {
  listaEmpleados: PropTypes.array,
  actualizarListaEmpleados: PropTypes.func
};
