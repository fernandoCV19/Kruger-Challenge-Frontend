import { REQUEST_URL } from "../lib/requestURL";
import { employeeSendMapper } from "../utils/employeeSendMapper";
import { employeeMapper } from "../utils/employeeMapper";

/**
 * Function that updates the information of an employee
 * @param employee: new information that will be updated
 * @param id: if of the employee that his information will be updated 
 * @returns an object with the updated information
 */

export async function updateEmployee({employee, id}){
  const employeeFormatted = employeeSendMapper({employee})
  const response = await fetch(`${REQUEST_URL}/empleados/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(employeeFormatted)
  });

  const json = await response.json();
  return employeeMapper(json);
}