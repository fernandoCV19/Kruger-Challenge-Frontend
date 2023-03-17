export function getStaticFields(data) {
  return {
    fullName: data.fullName,
    birthDate: data.birthDate,
    address: data.address,
    phone: data.phone,
    vaccine: data.vaccine,
  }
}