import PropTypes from 'prop-types';

/*
* Component that contains fields that are editable in the form that is available when the admin wants to see more information or modify it about an employee
*/

export function EditableFields({
  editableFields,
  errors,
  handleChangeCi,
  handleChangeNames,
  handleChangeLastNames,
  handleChangeEmail,
}) {
  return (
    <>
      <label htmlFor='ci' className='text-l font-bold'>
        Cedula de identidad:
      </label>
      <input
        required
        id='ci'
        type='text'
        onChange={handleChangeCi}
        value={editableFields.ci}
        className='general-input-text w-1/2 my-2'
      />
      {errors.ciError ? <p>{errors.ciError}</p> : null}

      <label htmlFor='names' className='text-l font-bold'>
        Nombres:
      </label>
      <input
        required
        id='names'
        type='text'
        onChange={handleChangeNames}
        value={editableFields.names}
        className='general-input-text w-1/2 my-2'
      />
      {errors.namesError ? <p>{errors.namesError}</p> : null}

      <label htmlFor='lastNames' className='text-l font-bold'>
        Apellidos:
      </label>
      <input
        required
        id='lastNames'
        type='text'
        onChange={handleChangeLastNames}
        value={editableFields.lastNames}
        className='general-input-text w-1/2 my-2'
      />
      {errors.lastNamesError ? <p>{errors.lastNamesError}</p> : null}

      <label htmlFor='email' className='text-l font-bold'>
        Correo electronico:
      </label>
      <input
        required
        id='email'
        type='text'
        onChange={handleChangeEmail}
        value={editableFields.email}
        className='general-input-text w-1/2 my-2'
      />
      {errors.emailError ? <p>{errors.emailError}</p> : null}
    </>
  );
}

EditableFields.propTypes = {
  editableFields: PropTypes.object,
  errors: PropTypes.object,
  handleChangeCi: PropTypes.func,
  handleChangeNames: PropTypes.func,
  handleChangeLastNames: PropTypes.func,
  handleChangeEmail: PropTypes.func,
};
