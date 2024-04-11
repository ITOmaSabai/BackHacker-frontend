import { axios } from "../../../lib/axios";

export const deleteSpot = async ( currentUser, spotId ) => {
  const token = await currentUser?.getIdToken()

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  try {
    const res = await axios.delete(`/api/v1/spots/${spotId}`, config);
    return res.data.message;
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
