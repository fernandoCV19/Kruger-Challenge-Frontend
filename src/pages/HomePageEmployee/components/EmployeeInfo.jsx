import { useEmployeeInfo } from '../hooks/useEmployeeInfo';
import { DisappearingFields } from './DisappearingFields';
import { StaticFields } from './StaticFields';

/**
 * Component that show the information of the employee. That component contains fields that can be edited by the employee and some fields that only can be edited by the administrator
 */

export function EmployeeInfo() {
  const { fields, isVaccinated, handlerIsVaccinated, updateInformation } =
    useEmployeeInfo();

  return (
    <main className='flex w-5/6 p-3'>
      <section className='w-full'>
        <h3 className='text-xl font-bold my-2'>Mi informacion</h3>

        <form onSubmit={updateInformation} className='w-full'>
          <StaticFields fields={fields} />
          <DisappearingFields
            fields={fields}
            isVaccinated={isVaccinated}
            handlerIsVaccinated={handlerIsVaccinated}
          />
          <button type='submit' className='general-button mt-3 block'>
            Actualizar
          </button>
        </form>
      </section>
    </main>
  );
}
