import PropTypes from 'prop-types';

export function Empleado({id, nombres, apellidos, ci, email, telefono, vacuna}){
  return (
    <article>
      <header>
        <h4>{nombres + ' ' + apellidos}</h4>{' '}
      </header>
      <section>
        <p>CI: {ci}</p>
        <p>Correo: {email}</p>
        <p>Telefono: {telefono}</p>
        <p>Vacunado: {vacuna?`Vacunado - ${vacuna.tipo} - ${vacuna.fecha}`:'No vacunado'}</p>
      </section>
      <footer>
        <button>Mas informacion</button>
        <button>Editar datos</button>
        <button>Eliminar</button>
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
  vacuna: PropTypes.object
}