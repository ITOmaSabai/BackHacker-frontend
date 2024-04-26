import { axios } from "../../../lib/axios";
import { isAxiosError } from 'axios';

export const updateUser = async (currentUser, userName, userId) => {
  const token = await currentUser?.getIdToken();

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  const data = {
    user: {
      name: userName,
      uid: currentUser.uid,
      avatar: currentUser.photoUrl
    }
  }

  try {
    const res = await axios.put(`/api/v1/users/${userId}`, data, config);
    return res.data;
  } catch (err) {
    let message = '編集に失敗しました';
    if (isAxiosError(err) && err.response) {
      message = err.response.data.message || message;
      throw new Error(message);
    } else {
      message = String(err);
      throw new Error(message);
    }
  }
}