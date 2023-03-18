import { EmployeeInfo } from './components/EmployeeInfo';
import { NavBar } from './components/NavBar';
import { useContext } from 'react';
import { PageContext } from './context/PageContext';

/**
 * Component that is the main page of the employee
 */


export function HomePageEmployee() {
  const { page } = useContext(PageContext);

  return (
    <div className='flex min-h-screen'>
      <NavBar/>

      {page === 'my-info' ? <EmployeeInfo /> : null}
    </div>
  );
}
