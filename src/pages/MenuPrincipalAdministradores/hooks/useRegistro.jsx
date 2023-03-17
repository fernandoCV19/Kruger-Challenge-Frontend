import { useState } from 'react';
import { verificarCI } from '../services/verificarCI';
import { registrarNuevoEmpleado as registrar } from '../services/registrarNuevoEmpleado';

export function useRegistro() {
  const [campos, setCampos] = useState(
    JSON.parse(window.localStorage.getItem('registro')) || {
      ci: '',
      nombres: '',
      apellidos: '',
      email: '',
    }
  );

  const [errores, setErrores] = useState({
    ciError: null,
    nombresError: null,
    apellidosError: null,
    emailError: null,
  });

  const handleChangeCi = (event) => {
    const regCi = /^\d{10}$/;
    const nuevoCi = event.target.value;

    setCampos({ ...campos, ci: nuevoCi });
    window.localStorage.setItem(
      'registro',
      JSON.stringify({ ...campos, ci: nuevoCi })
    );
    if (nuevoCi === '') {
      setErrores({ ...errores, ciError: null });
      return;
    }
    if (nuevoCi.match(regCi)) {
      setErrores({ ...errores, ciError: null });
      return;
    }

    setErrores({
      ...errores,
      ciError: 'El CI debe ser un valor numero de 10 digitos',
    });
  };

  const handleChangeNombres = (event) => {
    const regNombres = /^([a-z]|[A-Z]|[^0-9]| )+$/;
    const nuevoNombre = event.target.value;
    setCampos({ ...campos, nombres: nuevoNombre });
    window.localStorage.setItem(
      'registro',
      JSON.stringify({ ...campos, nombres: nuevoNombre })
    );
    if (nuevoNombre === '') {
      setErrores({ ...errores, nombresError: null });
      return;
    }
    if (nuevoNombre.match(regNombres)) {
      setErrores({ ...errores, nombresError: null });
      return;
    }

    setErrores({
      ...errores,
      nombresError: 'Los nombres solo deben contener caracteres',
    });
  };

  const handleChangeApellidos = (event) => {
    const regApellido = /^([a-z]|[A-Z]|[^0-9]| )+$/;
    const nuevoApellido = event.target.value;
    setCampos({ ...campos, apellidos: nuevoApellido });
    window.localStorage.setItem(
      'registro',
      JSON.stringify({ ...campos, apellidos: nuevoApellido })
    );
    if (nuevoApellido === '') {
      setErrores({ ...errores, apellidosError: null });
      return;
    }
    if (nuevoApellido.match(regApellido)) {
      setErrores({ ...errores, apellidosError: null });
      return;
    }

    setErrores({
      ...errores,
      nombresError: 'Los apellidos solo deben contener caracteres',
    });
  };

  const handleChangeMail = async (event) => {
    const regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const nuevoEmail = event.target.value;
    setCampos({ ...campos, email: nuevoEmail });
    window.localStorage.setItem(
      'registro',
      JSON.stringify({ ...campos, email: nuevoEmail })
    );
    if (nuevoEmail === '') {
      setErrores({ ...errores, emailError: null });
      return;
    }
    if (nuevoEmail.match(regEmail)) {
      setErrores({ ...errores, emailError: null });
      return;
    }

    setErrores({
      ...errores,
      nombresError: 'Ingresa un formato de email valido',
    });
  };

  const registrarNuevoEmpleado = async (event) => {
    event.preventDefault();

    const existeCI = await verificarCI({ ci: campos.ci });
    if (existeCI) {
      setErrores({
        ...errores,
        ciError: 'Este numero de CI ya se encuentra registrado',
      });
      return;
    }
    setErrores({ ...errores, ciError: null });

    const res = await registrar(campos);
    alert(
      `El usuario: ${res.nombres + ' ' + res.apellidos} con ci: ${
        res.ci
      } ha sido registrado en la plataforma`
    );
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setCampos({
      ci: '',
      nombres: '',
      apellidos: '',
      email: '',
    });
    setErrores({
      ciError: null,
      nombresError: null,
      apellidosError: null,
      emailError: null,
    });
    window.localStorage.removeItem('registro')
  };

  return {
    campos,
    errores,
    handleChangeCi,
    handleChangeNombres,
    handleChangeApellidos,
    handleChangeMail,
    registrarNuevoEmpleado,
  };
}
