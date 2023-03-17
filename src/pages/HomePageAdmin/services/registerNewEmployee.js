import { REQUEST_URL } from "../../../lib/requestURL"

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