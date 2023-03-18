import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { roles } from "../../../enums/roles";

export function useLogin(){
  
  const navigate = useNavigate();
  const {login, getRole} = useContext(AuthContext);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const {username, password} = Object.fromEntries(new window.FormData(event.target));
    const res = await login({username, password});
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

  return {handlerSubmit};
}