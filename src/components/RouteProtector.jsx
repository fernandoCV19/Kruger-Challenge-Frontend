import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import PropTypes from 'prop-types';

/* Component that verify if the user has the necessary role to access another component, if the user doesn't have the necessary token it is redirected to the login page */ 

export function RouteProtector({ children, role }) {
  const { getRole } = useContext(AuthContext);
  const tokenRole = getRole();

  if (!tokenRole) {
    alert('Primero debes iniciar sesion');
    return <Navigate to='/' />;
  }

  if (tokenRole !== role) {
    alert(`Debes tener permisos de ${role} para ingresar a esta seccion`);
    return <Navigate to='/' />;
  }

  return children;
}

RouteProtector.propTypes = {
  children: PropTypes.any,
  role: PropTypes.string,
};
