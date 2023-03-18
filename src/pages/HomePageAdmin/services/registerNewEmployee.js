import { REQUEST_URL } from "../../../lib/requestURL"

/**
 * Function that send a post request to the api with a new employee
 * @param ci: ci of the employee,
 * @param names: names of the new employee,
 * @param lastNames: last names of the new employee
 * @param email: email of the new employee
 * @returns an object containing the mapped information of the employee
 */

export async function registerNewEmployee({ ci, names, lastNames, email }) {
  const fetchData = await fetch(`${REQUEST_URL}/empleados`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ci, nombres: names, apellidos: lastNames, correo: email })
  })
  const json = await fetchData.json();
  return json
}