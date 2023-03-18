import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const PageContext = createContext();

export function PageProvider({ children }) {
  const [page, setPage] = useState('my-info');
  const changePage = (newPage) => {
    if (newPage === page) return;
    setPage(newPage);
  };

  return (
    <PageContext.Provider value={{ page, changePage}}>
      {children}
    </PageContext.Provider>
  );
}

PageProvider.propTypes = {
  children: PropTypes.any
}