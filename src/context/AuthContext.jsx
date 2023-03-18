import { createContext } from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { login as lg} from '../services/login';

/**
 * Context that give access to the role and id stored in the token. Also, it has functions to login: that store the token if the user has the correct credentials, and logout: that remove the token.
 */

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  

  const getRole = () => {
    const TOKEN = window.localStorage.getItem('TOKEN');
    if (!TOKEN) return null;
    const {role} = jwtDecode(TOKEN);
    return role;
  };

  const getID = () => {
    const TOKEN = window.localStorage.getItem('TOKEN');
    if (!TOKEN) return null;
    const {id} = jwtDecode(TOKEN);
    return id;
  };

  const logOut = () => {
    window.localStorage.removeItem('TOKEN');
  };

  const updateToken = ({newToken}) => {
    
  };

  const login = async ({username, password}) => {
    const token = await lg({username, password});
    if(!token){
      return false;
    }
    window.localStorage.setItem('TOKEN',token);
    return true;
  }

  return (
    <AuthContext.Provider value={{ getRole, getID, logOut, updateToken, login }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};
