import { REQUEST_URL } from "../../../lib/requestURL"

export async function verificarCI({ ci }) {

  const fetchData = await fetch(`${REQUEST_URL}/empleados?ci=${ci}`)
  const json = await fetchData.json();
  if (json.length > 0) return true;
  return false;
}