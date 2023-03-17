import { useState, useEffect, useMemo, useRef } from 'react';
import { getEmployees } from '../services/getEmployees';

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
