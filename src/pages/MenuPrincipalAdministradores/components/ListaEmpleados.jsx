import { Empleado } from './Empleado';
import PropTypes from 'prop-types'

export function ListaEmpleados({ listaEmpleados }) {
  return (
    <section>
      {listaEmpleados.map((empleado) => (
        <Empleado
          key={empleado.id}
          nombres={empleado.nombres}
          apellidos={empleado.apellidos}
          ci={empleado.ci}
          email={empleado.email}
          telefono={empleado.telefono}
          vacuna={empleado.vacuna}
        />
      ))}
    </section>
  );
}

ListaEmpleados.propTypes = {
  listaEmpleados: PropTypes.array
}