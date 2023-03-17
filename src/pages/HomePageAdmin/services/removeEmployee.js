import { REQUEST_URL } from "../../../lib/requestURL";

export async function removeEmployee({ id }) {
  await fetch(`${REQUEST_URL}/empleados/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}