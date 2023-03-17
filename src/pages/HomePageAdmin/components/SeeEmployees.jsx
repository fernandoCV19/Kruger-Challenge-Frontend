import {  useEmployees } from '../hooks/useEmployees';
import { useFilter} from '../hooks/useFilter';
import { Filters } from './Filters';
import { EmployeesList} from './EmployeesList';

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
    <>
      <h3>Listado empleados</h3>
      <Filters 
        updateVaccinated={updateVaccinated}
        updateType={updateType}
        updateStartRange={updateStartRange}
        updateEndRange={updateEndRange}
        vaccinated={filterVariables.vaccinated}
        updateEmployeesList={updateEmployeesList}
      />
      <EmployeesList employeesList={employeesList} updateEmployeesList={updateEmployeesList}/>
    </>
  );
}
