import { createContext } from 'react';
import PropTypes from 'prop-types';
import { TOKEN_JWT } from '../data/TOKEN_JWT';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  let TOKEN = TOKEN_JWT;

  const getRole = () => {
    if (!TOKEN) return null;
    const {role} = jwtDecode(TOKEN);
    return role;
  };

  const getID = () => {
    if (!TOKEN) return null;
    const {id} = jwtDecode(TOKEN);
    return id;
  };

  const removeToken = () => {
    TOKEN = null;
  };

  const updateToken = ({newToken}) => {
    TOKEN = newToken
  };

  return (
    <AuthContext.Provider value={{ getRole, getID, removeToken, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};
