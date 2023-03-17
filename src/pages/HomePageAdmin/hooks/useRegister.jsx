import { useState } from 'react';
import { verifyCI } from '../services/verifyCI';
import { registerNewEmployee as register } from '../services/registerNewEmployee';

export function useRegister() {
  const [fields, setFields] = useState(
    JSON.parse(window.localStorage.getItem('register')) || {
      ci: '',
      names: '',
      lastNames: '',
      email: '',
    }
  );

  const [errors, setErrors] = useState({
    ciError: null,
    namesError: null,
    lastNamesError: null,
    emailError: null,
  });

  const handleChangeCi = (event) => {
    const regCi = /^\d{10}$/;
    const newCi = event.target.value;

    setFields({ ...fields, ci: newCi });
    window.localStorage.setItem(
      'register',
      JSON.stringify({ ...fields, ci: newCi })
    );
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
    setFields({ ...fields, names: newName });
    window.localStorage.setItem(
      'register',
      JSON.stringify({ ...fields, names: newName })
    );
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
    setFields({ ...fields, lastNames: newLastNames });
    window.localStorage.setItem(
      'register',
      JSON.stringify({ ...fields, lastNames: newLastNames })
    );
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
    setFields({ ...fields, email: newEmail });
    window.localStorage.setItem(
      'register',
      JSON.stringify({ ...fields, email: newEmail })
    );
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

  const registerNewEmployee = async (event) => {
    event.preventDefault();

    const exist = await verifyCI({ ci: fields.ci });
    if (exist) {
      setErrors({
        ...errors,
        ciError: 'Este numero de CI ya se encuentra registrado',
      });
      return;
    }
    setErrors({ ...errors, ciError: null });

    const res = await register(fields);
    alert(
      `El usuario: ${res.nombres + ' ' + res.apellidos} con ci: ${
        res.ci
      } ha sido registrado en la plataforma`
    );
    cleanFields();
  };

  const cleanFields = () => {
    setFields({
      ci: '',
      names: '',
      lastNames: '',
      email: '',
    });
    setErrors({
      ciError: null,
      namesError: null,
      lastNamesError: null,
      emailError: null,
    });
    window.localStorage.removeItem('register')
  };

  return {
    fields,
    errors,
    handleChangeCi,
    handleChangeNames,
    handleChangeLastNames,
    handleChangeEmail,
    registerNewEmployee
  };
}
