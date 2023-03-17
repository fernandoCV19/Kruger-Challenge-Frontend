import { useRegistro } from '../hooks/useRegistro';


export function RegistrarEmpleado() {
  const {
    campos,
    errores,
    handleChangeCi,
    handleChangeNombres,
    handleChangeApellidos,
    handleChangeMail,
    registrarNuevoEmpleado
  } = useRegistro();

  return (
    <section>
      <h3>Formulario de registro de nuevo usuario</h3>
      <form onSubmit={registrarNuevoEmpleado}>
        <label htmlFor='ci'>Cedula de identidad:</label>
        <input
          required
          id='ci'
          type='text'
          onChange={handleChangeCi}
          value={campos.ci}
        />
        {errores.ciError ? <p>{errores.ciError}</p> : null}

        <label htmlFor='nombres'>Nombres:</label>
        <input
          required
          id='nombres'
          type='text'
          onChange={handleChangeNombres}
          value={campos.nombres}
        />
        {errores.nombresError ? <p>{errores.nombresError}</p> : null}

        <label htmlFor='apellidos'>Apellidos:</label>
        <input
          required
          id='apellidos'
          type='text'
          onChange={handleChangeApellidos}
          value={campos.apellidos}
        />
        {errores.apellidosError ? <p>{errores.apellidosError}</p> : null}

        <label htmlFor='email'>Correo electronico:</label>
        <input
          required
          id='email'
          type='text'
          onChange={handleChangeMail}
          value={campos.email}
        />
        {errores.emailError ? <p>{errores.emailError}</p> : null}

        <button type='submit'>Registrar</button>
      </form>
    </section>
  );
}
