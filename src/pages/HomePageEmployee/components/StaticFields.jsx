import { getCalendarFormatFromDate } from '../utils/getCalendarFormatFromDate';
import PropTypes from 'prop-types';

/**
 * Fields that are non editable in the view and edit section of the employee
 */

export function StaticFields({ fields }) {
  return (
    <>
      <label htmlFor='ci'>Cedula de identidad:</label>
      <input
        id='ci'
        type='text'
        value={fields.ci}
        readOnly
        name='ci'
        className='general-disabled-input w-1/2'
      />

      <label htmlFor='names'>Nombres:</label>
      <input
        id='names'
        type='text'
        value={fields.names}
        readOnly
        name='names'
        className='general-disabled-input w-1/2 my-1'
      />

      <label htmlFor='lastNames'>Apellidos:</label>
      <input
        id='lastNames'
        type='text'
        value={fields.lastNames}
        readOnly
        name='lastNames'
        className='general-disabled-input w-1/2 my-1'
      />

      <label htmlFor='email'>Correo electronico:</label>
      <input
        id='email'
        type='text'
        value={fields.email}
        readOnly
        name='email'
        className='general-disabled-input w-1/2 my-1'
      />

      <label htmlFor='birth'>Fecha de nacimiento:</label>
      <input
        id='birth'
        type='date'
        defaultValue={getCalendarFormatFromDate({ date: fields.birthDate })}
        name='birthDate'
        className='general-input-text w-1/2 my-1'
      />

      <label htmlFor='address'>Direccion:</label>
      <input
        id='address'
        type='text'
        defaultValue={fields.address}
        name='address'
        className='general-input-text w-1/2 my-1'
      />

      <label htmlFor='phone'>Telefono:</label>
      <input
        id='phone'
        type='text'
        defaultValue={fields.phone}
        name='phone'
        className='general-input-text w-1/2 my-1'
      />
    </>
  );
}

StaticFields.propTypes = {
  fields: PropTypes.object,
  isVaccinated: PropTypes.any,
  handlerIsVaccinated: PropTypes.func,
};
