import PropTypes from 'prop-types'

export function MoreInfoEmployee({idEmployee}){
  
  return (<h1>{idEmployee} Empleado</h1>)
}

MoreInfoEmployee.propTypes = {
  idEmployee: PropTypes.number
}