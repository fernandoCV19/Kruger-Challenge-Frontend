import { useState, useEffect, useMemo, useRef } from 'react';
import { getEmployees } from '../services/getEmployees';


/**
 * hook that stores the employees list that is the shown in the section that displays all employees. This hook also filter that list based on the parameters that are passed to the constructor.
 * @param vaccinated: this parameter indicates if the admin wants to filter employees that are vaccinated or not
 * @param type: this parameter indicates the type of vaccine that we want to filter
 * @param starRange: this parameter indicates a point in time. Only employees that have been vaccinated after this point will pass the filter
 * @param endRange: this parameter indicates a point in time. Only employees that have been vaccinated before this point will pass the filter
 * @returns employeesList: a list of employees that have been filtered
 * @returns updateEmployeesList: a function that receive a name as a parameter. This function will search all employees that contains that name, and will update the list of employees stored in the hook.
 */

export function useEmployees({ vaccinated, type, startRange, endRange }) {
  const [employeesList, setEmployeesList] = useState([]);
  const lastSearch = useRef('');

  const updateEmployeesList = async ({ newSearch }) => {
    let searchToDo = newSearch;
    if (newSearch !== '' && !newSearch) {
      searchToDo = lastSearch.current;
    }

    lastSearch.current = searchToDo;
    const employeesFormatted = await getEmployees({ name: searchToDo });
    setEmployeesList(employeesFormatted);
  };

  useEffect(() => {
    getEmployees({ name: '' }).then((formattedEmployees) => {
      setEmployeesList(formattedEmployees);
    });
  }, []);

  const employeesListFilteredByVaccinated = useMemo(() => {
    if (vaccinated === 'both') {
      return employeesList;
    }

    if (vaccinated === 'vaccinated') {
      return [...employeesList].filter((e) => e.vaccine);
    }

    return [...employeesList].filter((e) => !e.vaccine);
  }, [vaccinated, employeesList]);

  const employeesListFilteredByVaccineType = useMemo(() => {
    return type !== 'all'
      ? [...employeesListFilteredByVaccinated].filter(
          (e) => e.vaccine && e.vaccine.type === type
        )
      : employeesListFilteredByVaccinated;
  }, [vaccinated, type, employeesList]);

  const employeesListFilteredByDate = useMemo(() => {
    if (!startRange && !endRange) {
      return employeesListFilteredByVaccineType;
    }

    if (startRange && !endRange) {
      return [...employeesListFilteredByVaccineType].filter(
        (e) =>
          e.vaccine &&
          e.vaccine.date.getTime() >= startRange.getTime()
      );
    }

    if (!startRange && endRange) {
      return [...employeesListFilteredByVaccineType].filter(
        (e) =>
          e.vaccine &&
          e.vaccine.date.getTime() <= endRange.getTime()
      );
    }

    return [...employeesListFilteredByVaccineType].filter(
      (e) =>
        e.vaccine &&
        e.vaccine.date.getTime() >= startRange.getTime() &&
        e.vaccine.date.getTime() <= endRange.getTime()
    );
  }, [vaccinated, type, endRange, startRange, employeesList]);

  return {
    employeesList: employeesListFilteredByDate,
    updateEmployeesList,
  };
}
