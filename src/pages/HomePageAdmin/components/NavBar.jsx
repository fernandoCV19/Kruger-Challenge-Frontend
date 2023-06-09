import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { PageContext } from '../context/PageContext';
import { AuthContext } from '../../../context/AuthContext';

/**
 * Component meant to be used as the navigation bar in the admin section. It gives buttons to access to the different sections available to the admin, and a logout button.
 */

export function NavBar() {
  const { changePage } = useContext(PageContext);
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className='flex w-2/12 bg-slate-200 font-bold text-xl'>
      <ul className='w-full px-2'>
        <li className='general-nav-button'>
          <button
            onClick={() => {
              changePage('register');
            }}
          >
            Registrar
          </button>
        </li>
        <li className='general-nav-button'>
          <button
            onClick={() => {
              changePage('view');
            }}
          >
            Visualizar
          </button>
        </li>
        <li className='general-nav-button'>
          <button
            onClick={() => {
              logOut();
              navigate('/');
            }}
          >
            Cerrar sesion
          </button>
        </li>
      </ul>
    </nav>
  );
}
