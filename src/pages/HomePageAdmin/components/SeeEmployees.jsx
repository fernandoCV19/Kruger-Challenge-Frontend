import { useEmployees } from '../hooks/useEmployees';
import { useFilter } from '../hooks/useFilter';
import { Filters } from './Filters';
import { EmployeesList } from './EmployeesList';

/*
 * Component that displays all the employees registered at the application, and also gives filters that modify the employees listed in the component.
 */

export function SeeEmployees() {
  const {
    filterVariables,
    updateVaccinated,
    updateType,
    updateStartRange,
    updateEndRange,
  } = useFilter();
  const { employeesList, updateEmployeesList } = useEmployees(filterVariables);

  return (
    <div className='flex w-5/6 p-3'>
      <div className='w-full'>
        <h3 className='text-2xl font-bold my-2'>Listado empleados</h3>
        <Filters
          updateVaccinated={updateVaccinated}
          updateType={updateType}
          updateStartRange={updateStartRange}
          updateEndRange={updateEndRange}
          vaccinated={filterVariables.vaccinated}
          updateEmployeesList={updateEmployeesList}
        />
        <EmployeesList
          employeesList={employeesList}
          updateEmployeesList={updateEmployeesList}
        />
      </div>
    </div>
  );
}
