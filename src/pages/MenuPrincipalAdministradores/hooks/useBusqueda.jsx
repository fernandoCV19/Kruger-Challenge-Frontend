import { useState, useCallback } from "react";
import debounce from "just-debounce-it";

export function useBusqueda({actualizarListaEmpleados}){
  const [busqueda, setBusqueda] = useState('');

  const debouncedObtenerEmpleados = useCallback(
    debounce((nuevaBusqueda) => {
      setBusqueda(nuevaBusqueda);
      actualizarListaEmpleados({ nuevaBusqueda });
    }, 300),
    [actualizarListaEmpleados]
  );

  const handleChangeBusqueda = (event) => {
    const nuevaBusqueda = event.target.value;
    setBusqueda(nuevaBusqueda);
    debouncedObtenerEmpleados(nuevaBusqueda);
  };

  return {busqueda, handleChangeBusqueda}
}