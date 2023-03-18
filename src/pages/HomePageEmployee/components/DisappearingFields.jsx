import { vaccines } from '../../HomePageAdmin/enums/vaccines';
import { getCalendarFormatFromDate } from '../utils/getCalendarFormatFromDate';
import PropTypes from 'prop-types';

export function DisappearingFields({
  fields,
  isVaccinated,
  handlerIsVaccinated,
}) {
  return (
    <>
      {' '}
      <label htmlFor='is-vaccinated'>Vacunado:</label>
      <input
        id='is-vaccinated'
        type='checkbox'
        checked={isVaccinated}
        onChange={handlerIsVaccinated}
      />
      {isVaccinated ? (
        <div>
          <label htmlFor='type'>Tipo vacuna:</label>
          <select id='type' name='type' defaultValue={fields.vaccine?.type}>
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
          />
          <label htmlFor='dose'>Numero de dosis:</label>
          <input
            id='dose'
            type='number'
            defaultValue={fields.vaccine?.doseNumber}
            name='doseNumber'
          />
        </div>
      ) : null}
    </>
  );
}

DisappearingFields.propTypes = {
  fields: PropTypes.object,
  isVaccinated: PropTypes.any,
  handlerIsVaccinated: PropTypes.func
}