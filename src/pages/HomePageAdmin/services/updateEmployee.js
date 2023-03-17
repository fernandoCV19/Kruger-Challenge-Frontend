import { REQUEST_URL } from "../../../lib/requestURL";
import { employeeMapper } from "../utils/employeeMapper";
import { employeeSendMapper } from "../utils/employeeSendMapper";

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