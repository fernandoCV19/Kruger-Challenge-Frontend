import { useEmployeeInfo } from '../hooks/useEmployeeInfo';
import { DisappearingFields } from './DisappearingFields';
import { StaticFields } from './StaticFields';

export function EmployeeInfo() {
  const { fields, isVaccinated, handlerIsVaccinated, updateInformation } =
    useEmployeeInfo();

  return (
    <main  className='flex w-5/6 p-3'>
      <form onSubmit={updateInformation} className='w-full'>
        <StaticFields fields={fields}/>
        <DisappearingFields
          fields={fields}
          isVaccinated={isVaccinated}
          handlerIsVaccinated={handlerIsVaccinated}
        />
        <button type='submit' className='general-button mt-3 block'>Actualizar</button>
      </form>
    </main>
  );
}
