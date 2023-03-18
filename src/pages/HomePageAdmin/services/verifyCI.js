import { REQUEST_URL } from "../../../lib/requestURL"

/**
 * Function that verify if an ci exists in the api
 * @param ci: ci that will be checked
 * @returns true of false
 */

export async function verifyCI({ ci }) {
  const fetchData = await fetch(`${REQUEST_URL}/empleados?ci=${ci}`)
  const json = await fetchData.json();
  if (json.length > 0) return true;
  return false;
}