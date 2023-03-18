import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { getInfo } from '../services/getInfo';
import { updateEmployee } from '../../../services/updateEmployee';

/**
 * Hook that stores the fields available in the view and edit information section available to the employee. It also gives the functions to modify that values.
 * @returns fields: fields available in the view and edit information section, isVaccinated: that indicates is the employee is vaccinated, handlerIsVaccinated: function to change the previous value, updateInformation: function to update the employee information on the api
 */

export function useEmployeeInfo() {
  const [id, setID] = useState('');
  const { getID } = useContext(AuthContext);
  const [isVaccinated, setIsVaccinated] = useState(false);
  const [fields, setFields] = useState({
    ci: '',
    names: '',
    lastNames: '',
    email: '',
    fullName: '',
    birthDate: '',
    address: '',
    phone: '',
    vaccine: '',
  });

  useEffect(() => {
    const idToken = getID();
    setID(idToken);
    getInfo({ id: idToken }).then((data) => {
      setFields(data);
      setIsVaccinated(!!data.vaccine);
    });
  }, []);

  const handlerIsVaccinated = (event) => {
    setIsVaccinated(!isVaccinated);
  };

  const updateInformation = async (event) => {
    event.preventDefault();
    const newFields = Object.fromEntries(new window.FormData(event.target));
    const regPhone =
      /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

    if (new Date(newFields.birthDate).getTime() > new Date().getTime()) {
      alert('La fecha de nacimiento no puede ser superior a la fecha actual');
      return;
    }

    if (!newFields.phone.match(regPhone)) {
      alert('Ingresa un numero de telefono en un formato valido');
      return;
    }

    if (
      newFields.dateVaccine &&
      new Date(newFields.dateVaccine).getTime() > new Date().getTime()
    ) {
      alert('La fecha de vacunacion no puede ser superior a la fecha actual');
      return;
    }

    const fieldsToUpdate = {
      ci: newFields.ci,
      names: newFields.names,
      lastNames: newFields.lastNames,
      email: newFields.email,
      birthDate: newFields.birthDate,
      address: newFields.address,
      phone: newFields.phone,
      vaccine: isVaccinated
        ? {
            type: newFields.type,
            date: newFields.dateVaccine,
            doseNumber: newFields.doseNumber,
          }
        : null,
    };

    await updateEmployee({ employee: fieldsToUpdate, id });
    getInfo({ id }).then((data) => {
      setFields(data);
      setIsVaccinated(!!data.vaccine);
    });

    alert('Los datos han sido actualizados');
  };

  return { fields, isVaccinated, handlerIsVaccinated, updateInformation };
}
