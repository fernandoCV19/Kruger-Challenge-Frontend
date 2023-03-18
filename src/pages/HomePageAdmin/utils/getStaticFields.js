/**
 * Function that return an object only with the fullname, birthdate, address, phone and vaccine.
 * @param data: object
 * @returns object
 */

export function getStaticFields(data) {
  return {
    fullName: data.fullName,
    birthDate: data.birthDate,
    address: data.address,
    phone: data.phone,
    vaccine: data.vaccine,
  }
}