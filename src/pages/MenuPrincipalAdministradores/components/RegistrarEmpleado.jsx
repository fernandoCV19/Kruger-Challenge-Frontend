export function RegistrarEmpleado(){
  return (<section>
    <h3>Formulario de registro de nuevo usuario</h3>
    <form>
      <label htmlFor="ci">Cedula de identidad:</label>
      <input id="ci" type='text'/>
      
      <label htmlFor="nombres">Nombres:</label>
      <input id="nombres" type='text'/>
      
      <label htmlFor="apellidos">Apellidos:</label>
      <input id="apellidos" type='text'/>
      
      <label htmlFor="email">Correo electronico:</label>
      <input id="email" type='email'/>

      <button type="submit">Registrar</button>
    </form>
  </section>);
}