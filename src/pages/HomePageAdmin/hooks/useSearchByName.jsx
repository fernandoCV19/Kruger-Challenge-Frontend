import { useState, useCallback } from "react";
import debounce from "just-debounce-it";

/**
 * Hook meant to updated the list of employees based on a search parameter. That hook update continuously the list of employees when detect a change in the search field.
 * @param updatedEmployeesList: function that update the list of employees
 * @returns search: search field, handleChangeSearch: function that update the search field
 */

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