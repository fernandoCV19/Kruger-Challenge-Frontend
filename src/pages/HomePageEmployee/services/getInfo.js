import { REQUEST_URL } from "../../../lib/requestURL"
import { employeeMapper } from "../../../utils/employeeMapper";

/**
 * Function that makes a get request to the api, it ask the information of an employee based on an id. 
 * @param id: id of the employee 
 * @returns an object with the mapped information
 */

export async function getInfo({id}){
  const fetchData = await fetch(`${REQUEST_URL}/empleados/${id}`);
  const json = await fetchData.json();
  const formattedEmployee = employeeMapper(json);
  return formattedEmployee;
}