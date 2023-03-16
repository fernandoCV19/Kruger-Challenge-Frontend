import { useState } from "react"
import { RegistrarEmpleado } from "./components/RegistrarEmpleado";
import { VerEmpleados } from "./components/VerEmpleados";

export function MenuPrincipalAdministradores(){

  const [page, setPage] = useState('register');

  const cambiarPagina = (nuevaPagina) => {
    if(nuevaPagina === page) return;
    setPage(nuevaPagina);
  }

  return (<>
    <nav>
      <button onClick={() => {cambiarPagina('register')}}>Registrar</button>
      <button onClick={() => {cambiarPagina('view')}}>Visualizar</button>
    </nav>
    <main>
      {page === 'register'? <RegistrarEmpleado />: <VerEmpleados />}
    </main>
  </>)
}