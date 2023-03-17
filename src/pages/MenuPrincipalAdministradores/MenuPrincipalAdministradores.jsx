import { useContext } from 'react';
import { MoreInfoEmployee } from './components/MoreInfoEmployee';
import { NavBar } from './components/NavBar';
import { RegistrarEmpleado } from './components/RegistrarEmpleado';
import { VerEmpleados } from './components/VerEmpleados';
import { PageContext } from './context/PageContext';

export function MenuPrincipalAdministradores() {
  const { page, idEmployee } = useContext(PageContext);

  return (
    <>
      <NavBar />
      <main>
        {page === 'register' ? (
          <RegistrarEmpleado />
        ) : page === 'view' ? (
          <VerEmpleados />
        ) : (
          <MoreInfoEmployee idEmployee={idEmployee} />
        )}
      </main>
    </>
  );
}
