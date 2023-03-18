import PropTypes from 'prop-types';
import { useFields } from '../hooks/useFields';
import { EditableFields } from './EditableFields';
import { StaticFields } from './StaticFields';

/*
 *Component that displays all the information about an employee, and give the option to change some information. Also gives an button to update this information to the api.
 */

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
    <main className='flex w-5/6 p-3'>
      <div className='w-full'>
        <h2 className='text-2xl font-bold my-2 w-full'>
          {staticFields.fullName}
        </h2>
        <form onSubmit={updateFieldsEmployee} className='w-full'>
          <EditableFields
            editableFields={editableFields}
            errors={errors}
            handleChangeCi={handleChangeCi}
            handleChangeNames={handleChangeNames}
            handleChangeLastNames={handleChangeLastNames}
            handleChangeEmail={handleChangeEmail}
          />

          <StaticFields staticFields={staticFields} />

          <button type='submit' className='general-button'>
            Actualizar informacion
          </button>
        </form>
      </div>
    </main>
  );
}

MoreInfoEmployee.propTypes = {
  idEmployee: PropTypes.number,
};
