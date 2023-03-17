import PropTypes from 'prop-types';
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { removeEmployee as remove } from '../services/removeEmployee';

export function Employee({
  id,
  names,
  lastNames,
  ci,
  email,
  phone,
  vaccine,
  updateEmployeesList,
}) {

  const {setIdEmployee, changePage} = useContext(PageContext);

  const removeEmployee = async () => {
    await remove({ id });
    alert(`El usuario: ${names + ' ' + lastNames} ha sido eliminado`)
    await updateEmployeesList({newSearch: null});
  };

  const editAndMoreInfoEmployee = () => {
    setIdEmployee(id);
    changePage('more-info-employee');
  }

  return (
    <article>
      <header>
        <h4>{names + ' ' + lastNames}</h4>{' '}
      </header>
      <section>
        <p>CI: {ci}</p>
        <p>Correo: {email}</p>
        <p>Telefono: {phone}</p>
        <p>
          Vacunado:{' '}
          {vaccine
            ? `Vacunado - ${vaccine.type} - ${vaccine.date}`
            : 'No vacunado'}
        </p>
      </section>
      <footer>
        <button onClick={editAndMoreInfoEmployee}>Mas informacion</button>
        <button onClick={removeEmployee}>Eliminar</button>
      </footer>
    </article>
  );
}

Employee.propTypes = {
  id: PropTypes.number,
  names: PropTypes.string,
  lastNames: PropTypes.string,
  ci: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  vaccine: PropTypes.object,
  updateEmployeesList: PropTypes.func,
};
