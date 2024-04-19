import { axios } from "../../../lib/axios";
import { isAxiosError } from 'axios';

export const createSpot = async (
    currentUser,
    spotName,
    spotDescription,
    spotLatLng,
    address
  ) => {
  const token = await currentUser?.getIdToken();

  if (!token) {
    throw new Error('No token found');
  }
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  const data = {
    spot: {
    name: spotName,
    description: spotDescription,
    lat: spotLatLng.lat,
    lng: spotLatLng.lng,
    address_components: address.address_components,
    formatted_address: address.formatted_address,
    }
  }

  try {
    const res = await axios.post("/api/v1/spots", data, config);

    if (res.status === 201) {
      // 成功時はレスポンスデータ全体を返す
      return { success: true, data: res.data };
    } else {
      // ステータスコードが201以外の場合は、エラーメッセージを返す
      throw new Error("スポットの投稿に失敗しました");
    }
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      return { success: false, message: err.response.data.message || "エラーが発生しました" };
    } else {
      return { success: false, message: String(err) };
    }
  }
}