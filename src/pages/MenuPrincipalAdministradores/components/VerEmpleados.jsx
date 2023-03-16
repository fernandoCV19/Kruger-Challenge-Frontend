import { useEmpleados } from '../hooks/useEmpleados';
import { useFiltro } from '../hooks/useFiltro';
import { Filtros } from './Filtros';
import { ListaEmpleados } from './ListaEmpleados';

export function VerEmpleados() {
  const {variables, funciones} = useFiltro();
  const {listaEmpleados, actualizarListaEmpleados} = useEmpleados(variables);

  return (
    <>
      <h3>Listado empleados</h3>
      <Filtros funciones={funciones} actualizarListaEmpleados = {actualizarListaEmpleados}/>
      <ListaEmpleados listaEmpleados={listaEmpleados} />
    </>
  );
}
