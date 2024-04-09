/* eslint-disable no-unused-vars */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: '`$(firstName)`',
    lastName: '`$(lastName)`',
  });
}
/* eslint-enable no-unused-vars */
