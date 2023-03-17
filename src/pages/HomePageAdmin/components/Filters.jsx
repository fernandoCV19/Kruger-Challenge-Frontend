import { vaccines } from '../enums/vaccines';
import PropTypes from 'prop-types';
import { useSearchByName } from '../hooks/useSearchByName';

export function Filters({
  updateVaccinated,
  updateType,
  updateStartRange,
  updateEndRange,
  updateEmployeesList,
  vaccinated,
}) {
  const { search, handleChangeSearch } = useSearchByName({
    updateEmployeesList,
  });

  return (
    <section>
      <form>
        <label htmlFor='name'>Nombre empleado:</label>
        <input
          id='name'
          type='search'
          onChange={handleChangeSearch}
          value={search}
          
        />

        <label htmlFor='vaccinated'>Vacunado</label>
        <select id='vaccinated' onChange={updateVaccinated}>
          <option value={'both'}>Ambos</option>
          <option value={'vaccinated'}>Vacunados</option>
          <option value={'without-vaccine'}>Sin vacuna</option>
        </select>

        {vaccinated === 'both' || vaccinated === 'vaccinated' ? (
          <>
            <label htmlFor='type'>Tipo vacuna:</label>
            <select id='type' onChange={updateType}>
              <option value={'all'}>Todas las vacunas</option>
              {Object.entries(vaccines).map(([vaccine, value]) => (
                <option value={value} key={vaccine}>
                  {value}
                </option>
              ))}
            </select>

            <h4>Rangos</h4>
            <label htmlFor='startRange'>Rango inicio:</label>
            <input id='startRange' type='date' onChange={updateStartRange} />

            <label htmlFor='endRange'>Rango fin:</label>
            <input id='endRange' type='date' onChange={updateEndRange} />
          </>
        ) : null}
      </form>
    </section>
  );
}

Filters.propTypes = {
  updateVaccinated: PropTypes.func,
  updateType: PropTypes.func,
  updateStartRange: PropTypes.func,
  updateEndRange: PropTypes.func,
  updateEmployeesList: PropTypes.func,
  vaccinated: PropTypes.string,
};
