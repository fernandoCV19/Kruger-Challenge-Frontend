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
    <main className='flex w-5/6 p-3'>
      <section className='w-full'>
        <h3 className='text-xl font-bold my-2'>
          Formulario de registro de nuevo usuario
        </h3>
        <form onSubmit={registerNewEmployee}>
          <label htmlFor='ci' className='text-l font-bold'>
            Cedula de identidad:
          </label>
          <input
            required
            id='ci'
            type='text'
            onChange={handleChangeCi}
            value={fields.ci}
            className={`general-input-text w-1/2 my-2 ${
              errors.ciError
                ? 'border-red-500 drop-shadow-md focus:border-red-500'
                : ''
            }`}
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
            value={fields.names}
            className={`general-input-text w-1/2 my-2 ${
              errors.namesError
                ? 'border-red-500 drop-shadow-md focus:border-red-500'
                : ''
            }`}
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
            value={fields.lastNames}
            className={`general-input-text w-1/2 my-2 ${
              errors.lastNamesError
                ? 'border-red-500 drop-shadow-md focus:border-red-500'
                : ''
            }`}
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
            value={fields.email}
            className={`general-input-text w-1/2 my-2 ${
              errors.emailError
                ? 'border-red-500 drop-shadow-md focus:border-red-500'
                : ''
            }`}
          />
          {errors.emailError ? <p>{errors.emailError}</p> : null}

          <button type='submit' className='general-button'>
            Registrar
          </button>
        </form>
      </section>
    </main>
  );
}
