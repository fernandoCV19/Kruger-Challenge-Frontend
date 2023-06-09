import { REQUEST_URL } from "../lib/requestURL";

/**
 * Fuction that request for a token.
 * @param username: username, password: password
 * @returns token that is a string or null if the credentials are not correct.
 */

export async function login({ username, password }) {
  let fetchData = await fetch(`${REQUEST_URL}/empleados?username=${username}&password=${password}`);
  let json = await fetchData.json();
  let token = json.length > 0?json[0].token:null;
  if (token) {
    return token;
  }
  fetchData = await fetch(`${REQUEST_URL}/administradores?username=${username}&password=${password}`);
  json = await fetchData.json();
  token =  json.length > 0?json[0].token:null;
  if (token) {
    return token;
  }

  return null;
}