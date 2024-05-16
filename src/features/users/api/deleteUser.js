import { axios } from '../../../lib/axios'
import { isAxiosError } from 'axios';

export const deleteUser = async ( currentUser ) => {
  const token = await currentUser?.getIdToken()

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  try {
    const res = await axios.delete(`/api/v1/users/${currentUser.uid}`, config);
    if (res.status === 200) {
      // 成功時はレスポンスデータ全体を返す
      return { success: true, data: res.data, message: "退会しました" };
    } else {
      // ステータスコードが200以外の場合は、エラーメッセージを返す
      throw new Error("退会できませんでした");
    }
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      return { success: false, message: err.response.data.message || "エラーが発生しました" };
    } else {
      return { success: false, message: String(err) };
    }
  }
}
