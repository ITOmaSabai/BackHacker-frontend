import { axios } from "../../../lib/axios";

export const createLike = async (currentUser, selectedSpot) => {
  const token = await currentUser?.getIdToken();

  if (!token) {
    throw new Error('No token found');
  }

  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  const data = {
    like: {
      spot_id: selectedSpot.id,
    }
  }

  try {
    const res = await axios.post("/api/v1/likes", data, config);
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