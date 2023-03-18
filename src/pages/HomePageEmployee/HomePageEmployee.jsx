import { EmployeeInfo } from './components/EmployeeInfo';
import { NavBar } from './components/NavBar';
import { useContext } from 'react';
import { PageContext } from './context/PageContext';

export function HomePageEmployee() {
  const { page } = useContext(PageContext);

  return (
    <>
      <NavBar />

      {page === 'my-info' ? <EmployeeInfo /> : null}
    </>
  );
}
