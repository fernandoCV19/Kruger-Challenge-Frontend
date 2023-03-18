import { useEmployeeInfo } from '../hooks/useEmployeeInfo';
import { DisappearingFields } from './DisappearingFields';
import { StaticFields } from './StaticFields';

export function EmployeeInfo() {
  const { fields, isVaccinated, handlerIsVaccinated, updateInformation } =
    useEmployeeInfo();

  return (
    <main>
      <form onSubmit={updateInformation}>
        <StaticFields fields={fields} />
        <DisappearingFields
          fields={fields}
          isVaccinated={isVaccinated}
          handlerIsVaccinated={handlerIsVaccinated}
        />
        <button type='submit'>Actualizar</button>
      </form>
    </main>
  );
}
