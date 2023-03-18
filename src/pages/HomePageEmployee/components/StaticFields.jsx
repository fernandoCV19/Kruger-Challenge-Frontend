import { getCalendarFormatFromDate } from '../utils/getCalendarFormatFromDate';
import PropTypes from 'prop-types';

export function StaticFields({ fields }) {
  return (
    <>
      <label htmlFor='ci'>Cedula de identidad:</label>
      <input id='ci' type='text' value={fields.ci} readOnly name='ci' />

      <label htmlFor='names'>Nombres:</label>
      <input
        id='names'
        type='text'
        value={fields.names}
        readOnly
        name='names'
      />

      <label htmlFor='lastNames'>Apellidos:</label>
      <input
        id='lastNames'
        type='text'
        value={fields.lastNames}
        readOnly
        name='lastNames'
      />

      <label htmlFor='email'>Correo electronico:</label>
      <input
        id='email'
        type='text'
        value={fields.email}
        readOnly
        name='email'
      />

      <label htmlFor='birth'>Fecha de nacimiento:</label>
      <input
        id='birth'
        type='date'
        defaultValue={getCalendarFormatFromDate({ date: fields.birthDate })}
        name='birthDate'
      />

      <label htmlFor='address'>Direccion:</label>
      <input
        id='address'
        type='text'
        defaultValue={fields.address}
        name='address'
      />

      <label htmlFor='phone'>Telefono:</label>
      <input id='phone' type='text' defaultValue={fields.phone} name='phone' />
    </>
  );
}

StaticFields.propTypes = {
  fields: PropTypes.object,
  isVaccinated: PropTypes.any,
  handlerIsVaccinated: PropTypes.func,
};
