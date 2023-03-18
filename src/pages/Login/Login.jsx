import { useLogin } from './hooks/useLogin';

export function Login() {
  const { handlerSubmit } = useLogin();

  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-400 font-bold'>
      <main className='h-3/4 w-1/2 bg-white text-left border-solid rounded-lg p-10 drop-shadow-lg'>
        <h2 className='block text-center text-3xl'>Iniciar sesion</h2>

        <form onSubmit={handlerSubmit} className=''>
          <label htmlFor='username' className='block my-6'>
            Nombre usuario:
          </label>
          <input
            id='username'
            type='text'
            name='username'
            className='general-input-text w-full my-6'
          />

          <label htmlFor='password' className='block my-6'>
            Contraseña:
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='general-input-text w-full my-6'
          />

          <button
            type='submit'
            className='general-button w-full my-6 float-right'
          >
            Ingresar
          </button>
        </form>
      </main>
    </div>
  );
}
