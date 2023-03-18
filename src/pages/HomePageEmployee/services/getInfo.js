import { REQUEST_URL } from "../../../lib/requestURL"
import { employeeMapper } from "../../../utils/employeeMapper";

export async function getInfo({id}){
  const fetchData = await fetch(`${REQUEST_URL}/empleados/${id}`);
  const json = await fetchData.json();
  const formattedEmployee = employeeMapper(json);
  return formattedEmployee;
}