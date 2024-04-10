import { axios } from "../../../lib/axios";

export const getLikes = async (currentUser) => {
  const token = await currentUser?.getIdToken();

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  try {
    const res = await axios.get("/api/v1/spots", config);
    console.log(res.data)
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