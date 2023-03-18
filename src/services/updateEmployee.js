import { REQUEST_URL } from "../lib/requestURL";
import { employeeSendMapper } from "../utils/employeeSendMapper";
import { employeeMapper } from "../utils/employeeMapper";

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