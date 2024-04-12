import { axios } from "../../../lib/axios";

export const updateSpot = async (currentUser, spotInfo) => {
  const token = await currentUser?.getIdToken();

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  const data = {
    spot: {
      name: spotInfo.name,
      description: spotInfo.description,
    }
  }

  try {
    const res = await axios.put(`/api/v1/spots/${spotInfo.id}`, data, config);
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