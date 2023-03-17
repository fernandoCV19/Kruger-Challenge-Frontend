export function Login() {

  const login = (event) => {
    event.preventDefault();
    const {username, password} = Object.fromEntries(new window.FormData(event.target));
    console.log(username)
    console.log(password);
  }

  return (
    <>
      <header>
        <h2>Inventario de vacunacion de empleados</h2>
      </header>
      <main>
        <form onSubmit={login}>
          <label htmlFor="username" >Nombre usuario:</label>
          <input id="username" type="text" name="username"/>

          <label htmlFor="password">Contraseña:</label>
          <input id="password" type='password' name="password"/>

          <button type="submit">Ingresar</button>
        </form>
      </main>
    </>
  );
}
