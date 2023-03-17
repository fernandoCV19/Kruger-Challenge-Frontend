import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export function NavBar() {
  const { changePage } = useContext(PageContext);

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
    </nav>
  );
}
