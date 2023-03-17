import { vacunas } from '../enums/vacunas';
import PropTypes from 'prop-types';
import { useBusqueda } from '../hooks/useBusqueda';

export function Filtros({
  actualizarVacunado,
  actualizarTipo,
  actualizarRangoInicio,
  actualizarRangoFin,
  actualizarListaEmpleados,
  vacunado,
}) {
  const { busqueda, handleChangeBusqueda } = useBusqueda({
    actualizarListaEmpleados,
  });

  return (
    <section>
      <form>
        <label htmlFor='nombre'>Nombre empleado:</label>
        <input
          id='nombre'
          type='search'
          onChange={handleChangeBusqueda}
          value={busqueda}
        />

        <label htmlFor='vacunado'>Vacunado</label>
        <select id='vacunado' onChange={actualizarVacunado}>
          <option value={'ambos'}>Ambos</option>
          <option value={'vacunados'}>Vacunados</option>
          <option value={'sin-vacuna'}>Sin vacuna</option>
        </select>

        {vacunado === 'ambos' || vacunado === 'vacunados' ? (
          <>
            <label htmlFor='tipo'>Tipo vacuna:</label>
            <select id='tipo' onChange={actualizarTipo}>
              <option value={'todos'}>Todas las vacunas</option>
              {Object.entries(vacunas).map(([vacuna, valor]) => (
                <option value={valor} key={vacuna}>
                  {valor}
                </option>
              ))}
            </select>

            <h4>Rangos</h4>
            <label htmlFor='rangoInicio'>Rango inicio:</label>
            <input id='rangoInicio' type='date' onChange={actualizarRangoInicio}/>

            <label htmlFor='rangoFin'>Rango fin:</label>
            <input id='rangoFIn' type='date' onChange={actualizarRangoFin}/>
          </>
        ) : null}
      </form>
    </section>
  );
}

Filtros.propTypes = {
  actualizarVacunado: PropTypes.func,
  actualizarTipo: PropTypes.func,
  actualizarRangoInicio: PropTypes.func,
  actualizarRangoFin: PropTypes.func,
  actualizarListaEmpleados: PropTypes.func,
  vacunado: PropTypes.string
};
