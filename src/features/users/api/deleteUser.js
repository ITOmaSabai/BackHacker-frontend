import { axios } from '../../../lib/axios'

export const deleteUser = async ( currentUser ) => {
  const token = await currentUser?.getIdToken()

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  try {
    axios.delete(`/api/v1/users/${currentUser.uid}`, config);
  } catch (err) {
    let message;
    if (axios.isAxiosError(err) && err.response) {
      console.error(err.response.data.message);
    } else {
      message = String(err);
      console.error(message);
    }
  }
}
