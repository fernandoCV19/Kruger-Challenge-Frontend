import { useState, useEffect, useMemo } from 'react';
import { obtenerEmpleados } from '../services/obtenerEmpleados';

export function useEmpleados({ vacunado, tipo, rangoInicio, rangoFin }) {
  const [listaEmpleados, setListaEmpleados] = useState([]);

  const actualizarListaEmpleados = ({ nuevaBusqueda }) => {
    const empleadosFormated = obtenerEmpleados(nuevaBusqueda);
    setListaEmpleados(empleadosFormated);
  };

  useEffect(() => {
    const empleadosFormated = obtenerEmpleados('');
    setListaEmpleados(empleadosFormated);
  }, []);

  const listaEmpleadosFiltradaPorVacunas = useMemo(() => {
    return vacunado
      ? [...listaEmpleados].filter((empleado) => empleado.vacuna)
      : listaEmpleados;
  }, [vacunado]);

  const listaEmpleadosFiltradaPorTipoVacuna = useMemo(() => {
    return tipo
      ? [...listaEmpleadosFiltradaPorVacunas].filter(
          (empleado) => empleado.vacuna && empleado.vacuna.tipo === tipo
        )
      : listaEmpleados;
  }, [tipo]);

  const listaEmpleadosFiltradaPorFecha = useMemo(() => {
    return rangoFin && rangoInicio
      ? [...listaEmpleadosFiltradaPorTipoVacuna].filter(
          (empleado) =>
            empleado.vacuna &&
            empleado.vacuna.fecha >= rangoInicio &&
            empleado.vacuna.fecha <= rangoFin
        )
      : listaEmpleados;
  }, [rangoFin, rangoInicio]);

  return {
    listaEmpleados: listaEmpleadosFiltradaPorFecha,
    actualizarListaEmpleados,
  };
}
