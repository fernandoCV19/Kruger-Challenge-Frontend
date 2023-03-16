import { vacunas } from '../enums/vacunas';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function Filtros({ funciones, actualizarListaEmpleados }) {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    const nuevaBusqueda = event.target.value;
    setBusqueda(nuevaBusqueda);
    actualizarListaEmpleados({nuevaBusqueda});
  }

  return (
    <section>
      <form>
        <label htmlFor='nombre'>Nombre empleado:</label>
        <input id='nombre' type='search' onChange={handleChange} value={busqueda}/>

        <label htmlFor='vacunado'>Vacunado</label>
        <input id='vacunado' type='checkbox' />

        <label htmlFor='tipo'>Tipo vacuna:</label>
        <select id='tipo'>
          {Object.entries(vacunas).map(([vacuna, valor]) => (
            <option value={vacuna} key={vacuna}>
              {valor}
            </option>
          ))}
        </select>

        <h4>Rangos</h4>
        <label htmlFor='rangoInicio'>Rango inicio:</label>
        <input id='rangoInicio' type='date' />

        <label htmlFor='rangoFin'>Rango fin:</label>
        <input id='rangoFIn' type='date' />
      </form>
    </section>
  );
}

Filtros.propTypes = {
  funciones: PropTypes.object,
  actualizarListaEmpleados: PropTypes.func
};
