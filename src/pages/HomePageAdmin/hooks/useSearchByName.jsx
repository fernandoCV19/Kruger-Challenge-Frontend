import { useState, useCallback } from "react";
import debounce from "just-debounce-it";

export function useSearchByName({updateEmployeesList}){
  const [search, setSearch] = useState('');

  const debouncedGetEmployees = useCallback(
    debounce((newSearch) => {
      setSearch(newSearch);
      updateEmployeesList({ newSearch });
    }, 200),
    [updateEmployeesList]
  );

  const handleChangeSearch = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetEmployees(newSearch);
  };

  return {search, handleChangeSearch}
}