import { REQUEST_URL } from "../../../lib/requestURL"

export async function registrarNuevoEmpleado({ ci, nombres, apellidos, email }) {
  const fetchData = await fetch(`${REQUEST_URL}/empleados`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ci, nombres, apellidos, correo: email })
  })
  const json = await fetchData.json();
  return json
}