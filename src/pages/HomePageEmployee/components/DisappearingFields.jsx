import { vaccines } from '../../HomePageAdmin/enums/vaccines';
import { getCalendarFormatFromDate } from '../utils/getCalendarFormatFromDate';
import PropTypes from 'prop-types';

/**
 * Component meant to be in the view and edit section of the employee. That component contains fields that can be disable on the screen.
 */

export function DisappearingFields({
  fields,
  isVaccinated,
  handlerIsVaccinated,
}) {
  return (
    <>
      <label htmlFor='is-vaccinated'>Vacunado:</label>
      <input
        id='is-vaccinated'
        type='checkbox'
        checked={isVaccinated}
        onChange={handlerIsVaccinated}
        className='general-checkbox m-2'
      />
      {isVaccinated ? (
        <div className=''>
          <label htmlFor='type'>Tipo vacuna:</label>
          <select
            id='type'
            name='type'
            defaultValue={fields.vaccine?.type}
            className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-1/6 mx-4'
          >
            {Object.entries(vaccines).map(([vaccine, value]) => (
              <option value={value} key={vaccine}>
                {value}
              </option>
            ))}
          </select>
          <label htmlFor='date'>Fecha aplicacion:</label>
          <input
            id='date'
            type='date'
            defaultValue={
              fields.vaccine
                ? getCalendarFormatFromDate({
                    date: fields.vaccine.date,
                  })
                : null
            }
            name='dateVaccine'
            className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-1/6 mx-4'
          />
          <label htmlFor='dose'>Numero de dosis:</label>
          <input
            id='dose'
            type='number'
            defaultValue={fields.vaccine?.doseNumber}
            name='doseNumber'
            className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-1/12 mx-4'
          />
        </div>
      ) : null}
    </>
  );
}

DisappearingFields.propTypes = {
  fields: PropTypes.object,
  isVaccinated: PropTypes.any,
  handlerIsVaccinated: PropTypes.func,
};
