import PropTypes from 'prop-types';
import { useFields } from '../hooks/useFields';
import { EditableFields } from './EditableFields';
import { StaticFields } from './StaticFields';

export function MoreInfoEmployee({ idEmployee }) {
  const {
    editableFields,
    staticFields,
    errors,
    handleChangeCi,
    handleChangeNames,
    handleChangeLastNames,
    handleChangeEmail,
    updateFieldsEmployee,
  } = useFields({ id: idEmployee });

  return (
    <main>
      <h2>{staticFields.fullName}</h2>
      <form onSubmit={updateFieldsEmployee}>
        <EditableFields
          editableFields={editableFields}
          errors={errors}
          handleChangeCi={handleChangeCi}
          handleChangeNames={handleChangeNames}
          handleChangeLastNames={handleChangeLastNames}
          handleChangeEmail={handleChangeEmail}
        />

        <StaticFields staticFields={staticFields}/>

        <button type='submit'>Actualizar informacion</button>
      </form>
    </main>
  );
}

MoreInfoEmployee.propTypes = {
  idEmployee: PropTypes.number,
};
