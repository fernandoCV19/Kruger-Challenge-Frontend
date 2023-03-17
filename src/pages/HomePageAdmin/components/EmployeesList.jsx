import PropTypes from 'prop-types';
import { Employee } from './Employee';

export function EmployeesList({ employeesList, updateEmployeesList }) {
  return (
    <main>
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
          <p>No hay employees que concuerden con los filtros de busqueda</p>
        )}
      </section>
    </main>
  );
}

EmployeesList.propTypes = {
  employeesList: PropTypes.array,
  updateEmployeesList: PropTypes.func,
};
