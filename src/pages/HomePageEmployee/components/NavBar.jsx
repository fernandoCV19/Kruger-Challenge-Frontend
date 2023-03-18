import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../context/AuthContext';
import { PageContext } from '../context/PageContext';

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
              changePage('my-info');
            }}
          >
            Informacion
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
