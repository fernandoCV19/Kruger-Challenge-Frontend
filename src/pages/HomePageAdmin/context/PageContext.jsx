import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PageContext = createContext();

export function PageProvider({ children }) {
  const [page, setPage] = useState('register');
  const [idEmployee, setIdEmployee] = useState(null);

  const changePage = (newPage) => {
    if (newPage === page) return;
    setPage(newPage);
  };

  return (
    <PageContext.Provider value={{ page, idEmployee, changePage, setIdEmployee }}>
      {children}
    </PageContext.Provider>
  );
}

PageProvider.propTypes = {
  children: PropTypes.any
}
