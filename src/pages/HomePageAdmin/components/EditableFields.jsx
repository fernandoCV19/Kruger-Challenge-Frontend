import PropTypes from 'prop-types';

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
      <label htmlFor='ci'>Cedula de identidad:</label>
      <input
        required
        id='ci'
        type='text'
        onChange={handleChangeCi}
        value={editableFields.ci}
      />
      {errors.ciError ? <p>{errors.ciError}</p> : null}

      <label htmlFor='names'>Nombres:</label>
      <input
        required
        id='names'
        type='text'
        onChange={handleChangeNames}
        value={editableFields.names}
      />
      {errors.namesError ? <p>{errors.namesError}</p> : null}

      <label htmlFor='lastNames'>Apellidos:</label>
      <input
        required
        id='lastNames'
        type='text'
        onChange={handleChangeLastNames}
        value={editableFields.lastNames}
      />
      {errors.lastNamesError ? <p>{errors.lastNamesError}</p> : null}

      <label htmlFor='email'>Correo electronico:</label>
      <input
        required
        id='email'
        type='text'
        onChange={handleChangeEmail}
        value={editableFields.email}
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
}