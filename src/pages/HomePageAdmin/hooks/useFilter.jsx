import { useState } from 'react';

/**
 * Hooks that store all the fields available in the filter. It algo give the functions to modify that values. 
 * @returns filterVariables: value of the fields in the filter,
    @returns  updateVaccinated: handler to change the vaccinated value,
    @returns  updateType: handler to change the type of vaccine value,
    @returns  updateStartRange: handler to change the startRange value,
    @returns  updateEndRange: handler to change the endRange value,
 */

export function useFilter() {
  const [vaccinated, setVaccinated] = useState('both');
  const [type, setType] = useState('all');
  const [startRange, setStartRange] = useState(null);
  const [endRange, setEndRange] = useState(null);

  const updateVaccinated = (event) => {
    const newValue = event.target.value;
    setVaccinated(newValue);
    if (newValue === 'without-vaccine') {
      setType('all');
      setStartRange(null);
      setEndRange(null);
    }
  };

  const updateType = (event) => {
    const newValue = event.target.value;
    setType(newValue);
  };

  const updateStartRange = (event) => {
    const newValue = event.target.value;
    if (newValue === '') {
      setStartRange(null);
      return;
    }
    setStartRange(new Date(newValue));
  };

  const updateEndRange = (event) => {
    const newValue = event.target.value;
    if (newValue === '') {
      setEndRange(null);
      return;
    }

    setEndRange(new Date(newValue));
  };

  return {
    filterVariables: { vaccinated, type, startRange, endRange },
    updateVaccinated,
    updateType,
    updateStartRange,
    updateEndRange,
  };
}
