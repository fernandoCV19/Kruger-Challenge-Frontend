import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export function NavBar() {
  const { changePage } = useContext(PageContext);

  return (
    <nav>
      <button
        onClick={() => {
          changePage('my-info');
        }}
      >
        Informacion
      </button>
    </nav>
  );
}
