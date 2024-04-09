import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  try {
    const signUpResult = await signUpPromise;
    const uploadResult = await uploadPromise;

    return [
      { status: 'fulfilled', value: signUpResult },
      { status: 'fulfilled', value: uploadResult },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error },
    ];
  }
}
