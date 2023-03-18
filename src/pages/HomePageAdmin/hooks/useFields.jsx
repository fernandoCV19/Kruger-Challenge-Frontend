import { useState, useEffect } from 'react';
import { getEmployee } from '../services/getEmployee';
import { verifyCI } from '../services/verifyCI';
import { getEditableFields } from '../utils/getEditableFields';
import { getStaticFields } from '../utils/getStaticFields';
import { updateEmployee } from '../../../services/updateEmployee';

/**
 * Hook that store all fields, editable and non editable, in the more information about an employee section. This hook stores that fields and give functions that modify it. It also notifies is the new fields are correct.
 * @param id: id of the employee that we want his information
 * @returns editableFields: fields meant to be editable in the form,
    @returns staticFields: fields meant to be static in the form,
    @returns errors: errors that happened when the admin put an incorrect value,
    @returns handleChangeCi: handler to change the ci value,
    @returns handleChangeNames: handler to change the names value,
    @returns handleChangeLastNames: handler to change the last names value,
    @returns handleChangeEmail: handler to change the email value,
    @returns updateFieldsEmployee: function that update the information of the employee in the api,
 */

export function useFields({ id }) {
  const [editableFields, setEditableFields] = useState({
    ci: '',
    names: '',
    lastNames: '',
    email: '',
  });
  const [staticFields, setStaticFields] = useState({
    fullName: '',
    birthDate: '',
    address: '',
    phone: '',
    vaccine: '',
  });

  const [errors, setErrors] = useState({
    ciError: null,
    namesError: null,
    lastNamesError: null,
    emailError: null,
  });

  useEffect(() => {
    getEmployee({ id }).then((data) => {
      setEditableFields(getEditableFields(data));
      setStaticFields({
        fullName: data.fullName,
        birthDate: data.birthDate || 'Aun no se ingreso este campo',
        address: data.address || 'Aun no se ingreso este campo',
        phone: data.phone || 'Aun no se ingreso este campo',
        vaccine: data.vaccine,
      });
    });
  }, []);

  const handleChangeCi = (event) => {
    const regCi = /^\d{10}$/;
    const newCi = event.target.value;

    setEditableFields({ ...editableFields, ci: newCi });

    if (newCi === '') {
      setErrors({ ...errors, ciError: null });
      return;
    }
    if (newCi.match(regCi)) {
      setErrors({ ...errors, ciError: null });
      return;
    }

    setErrors({
      ...errors,
      ciError: 'El CI debe ser un valor numero de 10 digitos',
    });
  };

  const handleChangeNames = (event) => {
    const regNames = /^([a-z]|[A-Z]|[^0-9]| )+$/;
    const newName = event.target.value;
    setEditableFields({ ...editableFields, names: newName });

    if (newName === '') {
      setErrors({ ...errors, namesError: null });
      return;
    }
    if (newName.match(regNames)) {
      setErrors({ ...errors, namesError: null });
      return;
    }

    setErrors({
      ...errors,
      namesError: 'Los nombres solo deben contener caracteres',
    });
  };

  const handleChangeLastNames = (event) => {
    const regLastNames = /^([a-z]|[A-Z]|[^0-9]| )+$/;
    const newLastNames = event.target.value;
    setEditableFields({ ...editableFields, lastNames: newLastNames });

    if (newLastNames === '') {
      setErrors({ ...errors, lastNamesError: null });
      return;
    }
    if (newLastNames.match(regLastNames)) {
      setErrors({ ...errors, lastNamesError: null });
      return;
    }

    setErrors({
      ...errors,
      lastNamesError: 'Los apellidos solo deben contener caracteres',
    });
  };

  const handleChangeEmail = async (event) => {
    const regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const newEmail = event.target.value;
    setEditableFields({ ...editableFields, email: newEmail });

    if (newEmail === '') {
      setErrors({ ...errors, emailError: null });
      return;
    }
    if (newEmail.match(regEmail)) {
      setErrors({ ...errors, emailError: null });
      return;
    }

    setErrors({
      ...errors,
      emailError: 'Ingresa un formato de email valido',
    });
  };

  const updateFieldsEmployee = async (event) => {
    event.preventDefault();

    const exist = await verifyCI({ ci: editableFields.ci });
    if (exist) {
      setErrors({
        ...errors,
        ciError: 'Este numero de CI ya se encuentra registrado',
      });
      return;
    }
    setErrors({ ...errors, ciError: null });

    const newData = { ...editableFields, ...staticFields };

    const res = await updateEmployee({ employee: newData, id });
    setEditableFields(getEditableFields(res));
    setStaticFields(getStaticFields(res));
    alert('Los datos del usuario han sido actualizados');
  };

  return {
    editableFields,
    staticFields,
    errors,
    handleChangeCi,
    handleChangeNames,
    handleChangeLastNames,
    handleChangeEmail,
    updateFieldsEmployee,
  };
}
