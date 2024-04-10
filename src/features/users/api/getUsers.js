import { axios } from '../../../lib/axios'

export const getUsers = async () => {
  try {
    const res = await axios.get("/api/v1/users", null);
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