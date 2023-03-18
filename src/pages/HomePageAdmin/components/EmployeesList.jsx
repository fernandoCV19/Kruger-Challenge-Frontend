import PropTypes from 'prop-types';
import { Employee } from './Employee';

/*
 * Component meant to be used to display a list with the employees that match the filters selected by the admin.
 */

export function EmployeesList({ employeesList, updateEmployeesList }) {
  return (
    <main className='w-full'>
      <h3 className='text-xl font-bold my-2'>Resultados</h3>
      <section>
        {employeesList.length > 0 ? (
          employeesList.map((employee) => (
            <Employee
              key={employee.id}
              id={employee.id}
              names={employee.names}
              lastNames={employee.lastNames}
              ci={employee.ci}
              email={employee.email}
              phone={employee.phone}
              vaccine={employee.vaccine}
              updateEmployeesList={updateEmployeesList}
            />
          ))
        ) : (
          <p>No hay empleados que concuerden con los filtros de busqueda</p>
        )}
      </section>
    </main>
  );
}

EmployeesList.propTypes = {
  employeesList: PropTypes.array,
  updateEmployeesList: PropTypes.func,
};
