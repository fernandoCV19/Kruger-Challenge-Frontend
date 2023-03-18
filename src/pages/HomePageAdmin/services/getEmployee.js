import { REQUEST_URL } from "../../../lib/requestURL"
import { employeeMapper } from "../../../utils/employeeMapper";

/**
 * Fetch the information of an employee based on the id;
 * @param id: The id of the employee 
 * @returns an object containing the mapped information of the employee
 */

export async function getEmployee({id}){
  const fetchData = await fetch(`${REQUEST_URL}/empleados/${id}`);
  const json = await fetchData.json();
  const formattedEmployee = employeeMapper(json);
  return formattedEmployee;
}