import empleados from '../../../mocks/empleados.json'
import { mapeadorEmpleados } from '../utils/mapeadorEmpleados';

export function obtenerEmpleados({nombre}){
  const empleadosFormated = mapeadorEmpleados(empleados)
  return empleadosFormated;
}