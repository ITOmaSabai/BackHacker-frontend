import { axios } from "../../../lib/axios";

export const createSpot = async (currentUser, spotName, spotDescription) => {
  const token = await currentUser?.getIdToken()

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  const data = {
    name: spotName,
    description: spotDescription,
    lat: 100,
    lng: 10
  }

  try {
    const res = await axios.post("/api/v1/spots", data, config);
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