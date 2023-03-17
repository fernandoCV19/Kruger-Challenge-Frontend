import PropTypes from 'prop-types';

export function StaticFields({ staticFields }) {
  return (
    <>
      <label htmlFor='birth'>Fecha de nacimiento:</label>
      <input
        required
        id='birth'
        type='text'
        value={staticFields.birthDate}
        readOnly
      />

      <label htmlFor='address'>Direccion:</label>
      <input
        required
        id='address'
        type='text'
        value={staticFields.address}
        readOnly
      />

      <label htmlFor='phone'>Telefono:</label>
      <input
        required
        id='phone'
        type='text'
        value={staticFields.phone}
        readOnly
      />

      {staticFields.vaccine ? (
        <div>
          <p>Vacuna: Se encuentra vacunado</p>
          <label htmlFor='type'>Tipo vacuna:</label>
          <input
            required
            id='type'
            type='text'
            value={staticFields.vaccine.type}
            readOnly
          />
          <label htmlFor='date'>Fecha aplicacion:</label>
          <input
            required
            id='date'
            type='text'
            value={staticFields.vaccine.date}
            readOnly
          />
          <label htmlFor='dose'>Numero de dosis:</label>
          <input
            required
            id='dose'
            type='text'
            value={staticFields.vaccine.doseNumber}
            readOnly
          />
        </div>
      ) : (
        <p>Vacuna: No se encuentra vacunado</p>
      )}
    </>
  );
}

StaticFields.propTypes = {
  staticFields: PropTypes.object
}