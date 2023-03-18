import { REQUEST_URL } from "../../../lib/requestURL";

/**
 * Function that send a delete request to the api
 * @param id: id of the employee that will be deleted
 */

export async function removeEmployee({ id }) {
  await fetch(`${REQUEST_URL}/empleados/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}