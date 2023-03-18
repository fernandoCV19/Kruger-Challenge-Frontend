import { vaccines } from '../enums/vaccines';
import PropTypes from 'prop-types';
import { useSearchByName } from '../hooks/useSearchByName';

/**
 * Component that contains the filters available in the search employees section.
 */

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
    <section className='w-full'>
      <form>
        <label htmlFor='name' className='text-l font-bold'>
          Nombre empleado:
        </label>
        <input
          id='name'
          type='search'
          onChange={handleChangeSearch}
          value={search}
          className='general-input-text w-1/2 m-2'
        />

        <label htmlFor='vaccinated' className='text-l font-bold'>
          Vacunado
        </label>
        <select
          id='vaccinated'
          onChange={updateVaccinated}
          className='general-input-text w-1/6 m-2'
        >
          <option value={'both'}>Ambos</option>
          <option value={'vaccinated'}>Vacunados</option>
          <option value={'without-vaccine'}>Sin vacuna</option>
        </select>

        {vaccinated === 'both' || vaccinated === 'vaccinated' ? (
          <>
            <label htmlFor='type' className='text-l font-bold'>
              Tipo vacuna:
            </label>
            <select
              id='type'
              onChange={updateType}
              className='general-input-text w-1/6 m-2 inline-block'
            >
              <option value={'all'}>Todas las vacunas</option>
              {Object.entries(vaccines).map(([vaccine, value]) => (
                <option value={value} key={vaccine}>
                  {value}
                </option>
              ))}
            </select>

            <label htmlFor='startRange' className='text-l font-bold'>
              Rango inicio:
            </label>
            <input
              id='startRange'
              type='date'
              onChange={updateStartRange}
              className='general-input-text w-1/6 m-2 inline-block'
            />

            <label htmlFor='endRange' className='text-l font-bold'>
              Rango fin:
            </label>
            <input
              id='endRange'
              type='date'
              onChange={updateEndRange}
              className='general-input-text w-1/6 m-2 inline-block'
            />
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
