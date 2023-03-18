/**
 * Function that return an object only with the ci, names, lastNames and email.
 * @param data: object
 * @returns object
 */

export function getEditableFields(data){
  return {
    ci: data.ci,
    names: data.names,
    lastNames: data.lastNames,
    email: data.email,
  }
}