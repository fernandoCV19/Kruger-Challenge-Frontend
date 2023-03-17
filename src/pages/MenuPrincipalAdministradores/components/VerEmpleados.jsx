import { useEmpleados } from '../hooks/useEmpleados';
import { useFiltro } from '../hooks/useFiltro';
import { Filtros } from './Filtros';
import { ListaEmpleados } from './ListaEmpleados';

export function VerEmpleados() {
  const {
    variables,
    actualizarVacunado,
    actualizarTipo,
    actualizarRangoInicio,
    actualizarRangoFin,
  } = useFiltro();
  const { listaEmpleados, actualizarListaEmpleados } = useEmpleados(variables);

  return (
    <>
      <h3>Listado empleados</h3>
      <Filtros
        actualizarVacunado={actualizarVacunado}
        actualizarTipo={actualizarTipo}
        actualizarRangoFin={actualizarRangoFin}
        actualizarRangoInicio={actualizarRangoInicio}
        actualizarListaEmpleados={actualizarListaEmpleados}
        vacunado={variables.vacunado}
      />
      <ListaEmpleados listaEmpleados={listaEmpleados} actualizarListaEmpleados={actualizarListaEmpleados}/>
    </>
  );
}
