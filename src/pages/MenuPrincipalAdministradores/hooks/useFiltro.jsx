import { useState } from 'react';

export function useFiltro() {
  const [vacunado, setVacunado] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [rangoInicio, setRangoInicio] = useState(null);
  const [rangoFin, setRangoFin] = useState(null);

  const actualizarVacunado = (valor) => {
    if (valor === 'ambos') {
      setVacunado(null);
      return;
    }

    if (valor === 'vacunado') {
      setVacunado(true);
      return;
    }

    setVacunado(false);
  };

  const actualizarTipo = (valor) => {
    if (valor === tipo) return;

    if (valor === 'todos') setTipo(null);

    setTipo(valor);
  };

  const actualizarRangoInicio = (valor) => {
    if (!valor) {
      setRangoInicio(null);
      return;
    }

    if (rangoFin && rangoInicio > rangoFin) {
      return;
    }

    setRangoInicio(rangoInicio);
  };

  const actualizarRangoFin = (valor) => {
    if (!valor) {
      setRangoFin(null);
      return;
    }

    if (rangoInicio && rangoInicio < rangoFin) {
      return;
    }

    setRangoFin(rangoFin);
  };

  return {
    variables: { vacunado, tipo, rangoInicio, rangoFin },
    funciones: {
      actualizarVacunado,
      actualizarTipo,
      actualizarRangoInicio,
      actualizarRangoFin,
    },
  };
}
