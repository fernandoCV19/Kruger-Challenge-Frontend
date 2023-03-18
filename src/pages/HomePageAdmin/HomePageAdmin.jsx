import { useContext } from 'react';
import { EmployeeRegister } from './components/EmployeeRegister';
import { MoreInfoEmployee } from './components/MoreInfoEmployee';
import { NavBar } from './components/NavBar';
import { SeeEmployees } from './components/SeeEmployees';
import { PageContext } from './context/PageContext';

export function HomePageAdmin() {
  const { page, idEmployee } = useContext(PageContext);

  return (
    <div className='flex min-h-screen'>
      <NavBar />

      {page === 'register' ? (
        <EmployeeRegister />
      ) : page === 'view' ? (
        <SeeEmployees />
      ) : (
        <MoreInfoEmployee idEmployee={idEmployee} />
      )}
    </div>
  );
}
