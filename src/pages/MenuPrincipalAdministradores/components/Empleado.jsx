import PropTypes from 'prop-types';
import { eliminarEmpleado as eliminar } from '../services/eliminarEmpleado';

export function Empleado({
  id,
  nombres,
  apellidos,
  ci,
  email,
  telefono,
  vacuna,
  actualizarListaEmpleados,
}) {
  const eliminarEmpleado = async () => {
    await eliminar({ id });
    alert(`El usuario: ${nombres + ' ' + apellidos} ha sido eliminado`)
    await actualizarListaEmpleados({nuevaBusqueda: null});
  };

  return (
    <article>
      <header>
        <h4>{nombres + ' ' + apellidos}</h4>{' '}
      </header>
      <section>
        <p>CI: {ci}</p>
        <p>Correo: {email}</p>
        <p>Telefono: {telefono}</p>
        <p>
          Vacunado:{' '}
          {vacuna
            ? `Vacunado - ${vacuna.tipo} - ${vacuna.fecha}`
            : 'No vacunado'}
        </p>
      </section>
      <footer>
        <button>Mas informacion</button>
        <button>Editar datos</button>
        <button onClick={eliminarEmpleado}>Eliminar</button>
      </footer>
    </article>
  );
}

Empleado.propTypes = {
  id: PropTypes.number,
  nombres: PropTypes.string,
  apellidos: PropTypes.string,
  ci: PropTypes.string,
  email: PropTypes.string,
  telefono: PropTypes.string,
  vacuna: PropTypes.object,
  actualizarListaEmpleados: PropTypes.func,
};
