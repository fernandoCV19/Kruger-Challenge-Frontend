import PropTypes from 'prop-types';
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
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

  const {setIdEmployee, cambiarPagina} = useContext(PageContext);

  const eliminarEmpleado = async () => {
    await eliminar({ id });
    alert(`El usuario: ${nombres + ' ' + apellidos} ha sido eliminado`)
    await actualizarListaEmpleados({nuevaBusqueda: null});
  };

  const editAndMoreInfoEmployee = () => {
    setIdEmployee(id);
    cambiarPagina('more-info-employee');
  }

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
        <button onClick={editAndMoreInfoEmployee}>Mas informacion</button>
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
