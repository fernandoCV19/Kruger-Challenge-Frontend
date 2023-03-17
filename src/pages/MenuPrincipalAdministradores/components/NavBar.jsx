import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export function NavBar() {
  const { cambiarPagina } = useContext(PageContext);

  return (
    <nav>
      <button
        onClick={() => {
          cambiarPagina('register');
        }}
      >
        Registrar
      </button>
      <button
        onClick={() => {
          cambiarPagina('view');
        }}
      >
        Visualizar
      </button>
    </nav>
  );
}
