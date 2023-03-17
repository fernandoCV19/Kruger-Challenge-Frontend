import { useState } from 'react';

export function useFiltro() {
  const [vacunado, setVacunado] = useState('ambos');
  const [tipo, setTipo] = useState('todos');
  const [rangoInicio, setRangoInicio] = useState(null);
  const [rangoFin, setRangoFin] = useState(null);

  const actualizarVacunado = (event) => {
    const nuevoValor = event.target.value;
    setVacunado(nuevoValor);
  };

  const actualizarTipo = (event) => {
    const valor = event.target.value;

    setTipo(valor);
  };

  const actualizarRangoInicio = (event) => {
    const valor = event.target.value;
    if (valor === '') {
      setRangoInicio(null);
      return;
    }
    setRangoInicio(new Date(valor));
  };

  const actualizarRangoFin = (event) => {
    const valor = event.target.value;
    if (valor === '') {
      setRangoFin(null);
      return;
    }

    setRangoFin(new Date(valor));
  };

  return {
    variables: { vacunado, tipo, rangoInicio, rangoFin },
    actualizarVacunado,
    actualizarTipo,
    actualizarRangoInicio,
    actualizarRangoFin,
  };
}
