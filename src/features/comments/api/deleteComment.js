import { axios } from "../../../lib/axios";
import { isAxiosError } from 'axios';

export const deleteComment = async ( currentUser, commentId, setIsSuccessMessage ) => {
  const token = await currentUser?.getIdToken()

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  try {
    const res = await axios.delete(`/api/v1/comments/${commentId}`, config);
    setIsSuccessMessage(true);
    return res.data.message;
  } catch (err) {
    let message = '削除に失敗しました';
    if (isAxiosError(err) && err.response) {
      message = err.response.data.message || message;
      throw new Error(message);
    } else {
      message = String(err);
      throw new Error(message);
    }
  }
}
