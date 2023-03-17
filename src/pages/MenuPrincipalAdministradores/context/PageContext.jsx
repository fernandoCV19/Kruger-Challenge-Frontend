import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PageContext = createContext();

export function PageProvider({ children }) {
  const [page, setPage] = useState('register');
  const [idEmployee, setIdEmployee] = useState(null);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina === page) return;
    setPage(nuevaPagina);
  };

  return (
    <PageContext.Provider value={{ page, idEmployee, cambiarPagina, setIdEmployee }}>
      {children}
    </PageContext.Provider>
  );
}

PageProvider.propTypes = {
  children: PropTypes.func
}
