import { axios } from "../../../lib/axios";

export const deleteLike = async (currentUser, id) => {
  const token = await currentUser?.getIdToken();

  if (!token) {
    throw new Error('No token found');
  }

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.delete(`/api/v1/likes/${id}`, config);
    return res.data;
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