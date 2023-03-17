import { employeesMapper } from '../utils/employeesMapper';
import { REQUEST_URL } from '../../../lib/requestURL';

export async function getEmployees({ name }) {
  const fetchData = await fetch(`${REQUEST_URL}/empleados`)
  const json = await fetchData.json();
  const employeesFormatted = employeesMapper(json);
  const employeesList = name === '' ? employeesFormatted : employeesFormatted.filter(employee => employee.fullName.toLowerCase().includes(name.toLowerCase()));
  return employeesList;
}