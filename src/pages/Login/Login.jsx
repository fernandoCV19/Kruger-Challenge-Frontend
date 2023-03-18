import { useContext } from "react";
import { useNavigate } from "react-router";
import {AuthContext} from './../../context/AuthContext';
import { roles } from "../../enums/roles";

export function Login() {

  const navigate = useNavigate();
  const {login, getRole} = useContext(AuthContext);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const {username, password} = Object.fromEntries(new window.FormData(event.target));
    const res = await login({username, password});

    console.log(res);

    if(res){
      const role = getRole();
      if(role === roles.admin){
        navigate('/homePageAdmin')
        return;
      }
      navigate('/homePageEmployee');
      return;
    }

    alert("Credenciales incorrectas")
  }

  return (
    <>
      <header>
        <h2>Inventario de vacunacion de empleados</h2>
      </header>
      <main>
        <form onSubmit={handlerSubmit}>
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
