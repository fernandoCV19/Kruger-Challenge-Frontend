import { mapeadorEmpleados } from '../utils/mapeadorEmpleados';
import { REQUEST_URL } from '../../../lib/requestURL';

export async function obtenerEmpleados({ nombre }) {
  const fetchData = await fetch(`${REQUEST_URL}/empleados`)
  const json = await fetchData.json();
  const empleadosFormated = mapeadorEmpleados(json);
  const listaEmpleados = nombre === '' ? empleadosFormated : empleadosFormated.filter(empleado => empleado.nombreCompleto.toLowerCase().includes(nombre.toLowerCase()));
  return listaEmpleados;
}