import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import PropTypes from 'prop-types';

export function RouteProtector({ children, role }) {
  const { getRole } = useContext(AuthContext);
  const tokenRole = getRole();
  console.log(tokenRole);

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
