import { useRegister } from '../hooks/useRegister';

export function EmployeeRegister() {
  const {
    fields,
    errors,
    handleChangeCi,
    handleChangeNames,
    handleChangeLastNames,
    handleChangeEmail,
    registerNewEmployee,
  } = useRegister();

  return (
    <main>
      <section>
        <h3>Formulario de registro de nuevo usuario</h3>
        <form onSubmit={registerNewEmployee}>
          <label htmlFor='ci'>Cedula de identidad:</label>
          <input
            required
            id='ci'
            type='text'
            onChange={handleChangeCi}
            value={fields.ci}
          />
          {errors.ciError ? <p>{errors.ciError}</p> : null}

          <label htmlFor='names'>Nombres:</label>
          <input
            required
            id='names'
            type='text'
            onChange={handleChangeNames}
            value={fields.names}
          />
          {errors.namesError ? <p>{errors.namesError}</p> : null}

          <label htmlFor='lastNames'>Apellidos:</label>
          <input
            required
            id='lastNames'
            type='text'
            onChange={handleChangeLastNames}
            value={fields.lastNames}
          />
          {errors.lastNamesError ? <p>{errors.lastNamesError}</p> : null}

          <label htmlFor='email'>Correo electronico:</label>
          <input
            required
            id='email'
            type='text'
            onChange={handleChangeEmail}
            value={fields.email}
          />
          {errors.emailError ? <p>{errors.emailError}</p> : null}

          <button type='submit'>Registrar</button>
        </form>
      </section>
    </main>
  );
}
