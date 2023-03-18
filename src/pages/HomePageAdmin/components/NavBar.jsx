import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { PageContext } from '../context/PageContext';

export function NavBar() {
  const { changePage, logOut } = useContext(PageContext);
  const navigate = useNavigate();

  return (
    <nav>
      <button
        onClick={() => {
          changePage('register');
        }}
      >
        Registrar
      </button>
      <button
        onClick={() => {
          changePage('view');
        }}
      >
        Visualizar
      </button>
      <button onClick={() => {
        logOut();
        navigate('/');
      }}>
        Cerrar sesion
      </button>
    </nav>
  );
}
