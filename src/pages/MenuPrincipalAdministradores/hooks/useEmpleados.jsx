import { useState, useEffect, useMemo, useRef } from 'react';
import { obtenerEmpleados } from '../services/obtenerEmpleados';

export function useEmpleados({ vacunado, tipo, rangoInicio, rangoFin }) {
  const [listaEmpleados, setListaEmpleados] = useState([]);
  const ultimaBusqueda = useRef('');

  const actualizarListaEmpleados = async ({ nuevaBusqueda }) => {
    let busquedaARealizar = nuevaBusqueda;
    if(!nuevaBusqueda){
      busquedaARealizar = ultimaBusqueda.current;
    }

    ultimaBusqueda.current = busquedaARealizar;
    const empleadosFormated = await obtenerEmpleados({ nombre: busquedaARealizar });
    setListaEmpleados(empleadosFormated);
  };

  useEffect(() => {
    obtenerEmpleados({ nombre: '' }).then((empleadosFormateado) => {
      setListaEmpleados(empleadosFormateado);
    });
  }, []);

  const listaEmpleadosFiltradaPorVacunas = useMemo(() => {
    if (vacunado === 'ambos') {
      return listaEmpleados;
    }

    if (vacunado === 'vacunados') {
      return [...listaEmpleados].filter((empleado) => empleado.vacuna);
    }

    return [...listaEmpleados].filter((empleado) => !empleado.vacuna);
  }, [vacunado, listaEmpleados]);

  const listaEmpleadosFiltradaPorTipoVacuna = useMemo(() => {
    return tipo !== 'todos'
      ? [...listaEmpleadosFiltradaPorVacunas].filter(
          (empleado) => empleado.vacuna && empleado.vacuna.tipo === tipo
        )
      : listaEmpleadosFiltradaPorVacunas;
  }, [vacunado, tipo, listaEmpleados]);

  const listaEmpleadosFiltradaPorFecha = useMemo(() => {
    console.log();
    if (!rangoFin && !rangoInicio) {
      return listaEmpleadosFiltradaPorTipoVacuna;
    }

    if (rangoInicio && !rangoFin) {
      return [...listaEmpleadosFiltradaPorTipoVacuna].filter(
        (empleado) =>
          empleado.vacuna &&
          empleado.vacuna.fecha.getTime() >= rangoInicio.getTime()
      );
    }

    if (!rangoInicio && rangoFin) {
      return [...listaEmpleadosFiltradaPorTipoVacuna].filter(
        (empleado) =>
          empleado.vacuna &&
          empleado.vacuna.fecha.getTime() <= rangoFin.getTime()
      );
    }

    return [...listaEmpleadosFiltradaPorTipoVacuna].filter(
      (empleado) =>
        empleado.vacuna &&
        empleado.vacuna.fecha.getTime() >= rangoInicio.getTime() &&
        empleado.vacuna.fecha.getTime() <= rangoFin.getTime()
    );
  }, [vacunado, tipo, rangoFin, rangoInicio, listaEmpleados]);

  return {
    listaEmpleados: listaEmpleadosFiltradaPorFecha,
    actualizarListaEmpleados,
  };
}
