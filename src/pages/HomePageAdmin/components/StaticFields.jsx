import PropTypes from 'prop-types';

/*
* Component that contains fields that are non editable in the form that is available when the admin wants to see more information or modify it about an employee
*/

export function StaticFields({ staticFields }) {
  return (
    <>
      <label htmlFor='birth' className='text-l font-bold'>Fecha de nacimiento:</label>
      <input
        required
        id='birth'
        type='text'
        value={staticFields.birthDate}
        readOnly
        className='general-disabled-input w-1/2 my-2'
      />

      <label htmlFor='address' className='text-l font-bold'>Direccion:</label>
      <input
        required
        id='address'
        type='text'
        value={staticFields.address}
        readOnly
        className='general-disabled-input w-1/2 my-2'
      />

      <label htmlFor='phone' className='text-l font-bold'>Telefono:</label>
      <input
        required
        id='phone'
        type='text'
        value={staticFields.phone}
        readOnly
        className='general-disabled-input w-1/2 my-2'
      />

      {staticFields.vaccine ? (
        <>
          <p>Vacuna: Se encuentra vacunado</p>
          <label htmlFor='type' className='text-l font-bold'>Tipo vacuna:</label>
          <input
            required
            id='type'
            type='text'
            value={staticFields.vaccine.type}
            readOnly
            className='general-disabled-input w-1/2 my-2'
          />
          <label htmlFor='date' className='text-l font-bold'>Fecha aplicacion:</label>
          <input
            required
            id='date'
            type='text'
            value={staticFields.vaccine.date}
            readOnly
            className='general-disabled-input w-1/2 my-2'
          />
          <label htmlFor='dose' className='text-l font-bold'>Numero de dosis:</label>
          <input
            required
            id='dose'
            type='text'
            value={staticFields.vaccine.doseNumber}
            readOnly
            className='general-disabled-input w-1/2 my-2'
          />
        </>
      ) : (
        <p className='text-l font-bold'>Vacuna: No se encuentra vacunado</p>
      )}
    </>
  );
}

StaticFields.propTypes = {
  staticFields: PropTypes.object
}