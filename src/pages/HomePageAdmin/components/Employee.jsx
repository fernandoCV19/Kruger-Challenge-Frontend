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
  const { setIdEmployee, changePage } = useContext(PageContext);

  const removeEmployee = async () => {
    await remove({ id });
    alert(`El usuario: ${names + ' ' + lastNames} ha sido eliminado`);
    await updateEmployeesList({ newSearch: null });
  };

  const editAndMoreInfoEmployee = () => {
    setIdEmployee(id);
    changePage('more-info-employee');
  };

  return (
    <article className='m-5 border border-black p-3 rounded-lg shadow-lg bg-gray-100'>
      <header>
        <h4 className='text-l font-bold my-2'>{names + ' ' + lastNames}</h4>{' '}
      </header>
      <section className='space-y-2 m-2'>
        <p>CI: {ci}</p>
        <p>Correo: {email}</p>
        <p>Telefono: {phone}</p>
        <p>
          Vacunado:{' '}
          {vaccine
            ? `${vaccine.type} - ${vaccine.date} `
            : 'No vacunado'}
        </p>
      </section>
      <footer>
        <button onClick={editAndMoreInfoEmployee} className='general-button m-2'>
          Ver y editar informacion
        </button>
        <button onClick={removeEmployee} className='general-button m-2'>
          Eliminar
        </button>
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
