import { employeesMapper } from '../utils/employeesMapper';
import { REQUEST_URL } from '../../../lib/requestURL';

/**
 * Fetch all employees
 * @param name: name that will be filtered 
 * @returns an object containing the mapped information of the employees
 */

export async function getEmployees({ name }) {
  const fetchData = await fetch(`${REQUEST_URL}/empleados`)
  const json = await fetchData.json();
  const employeesFormatted = employeesMapper(json);
  const employeesList = name === '' ? employeesFormatted : employeesFormatted.filter(employee => employee.fullName.toLowerCase().includes(name.toLowerCase()));
  return employeesList;
}