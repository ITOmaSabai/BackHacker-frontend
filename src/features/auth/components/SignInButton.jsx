import { axios } from '../../../lib/axios';
import { isAxiosError } from 'axios';
import { useFirebaseAuth } from '../../../hooks/useFirebaseAuth';
import { Button, Typography } from '@mui/material';
import { Login } from '@mui/icons-material';
import { useFlashMessage } from '../../../contexts/FlashMessageContext';

export const SignInButton = ({ text, currentUser, variant, color }) => {
  const { loginWithGoogle } = useFirebaseAuth();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();

  const handleGoogleLogin = () => {
    const verifyIdToken = async () => {
      const user = await loginWithGoogle();
      const token = await user?.getIdToken();

      if (!token) {
        throw new Error('No token found');
      }

      const config = {
        headers: { authorization: `Bearer ${token}` },
      };

      try {
        const res = await axios.post("/api/v1/authentication", null, config);
        if (res.status === 200) {
          // 成功時はレスポンスデータ全体を返す
          setIsSuccessMessage(true);
          setMessage("ログインしました");
          return { success: true, data: res.data };
        } else {
          // ステータスコードが200以外の場合は、エラーメッセージを返す
          throw new Error("スポットの投稿に失敗しました");
        }
      } catch (err) {
        if (isAxiosError(err) && err.response) {
          return { success: false, message: err.response.data.message || "エラーが発生しました" };
        } else {
          return { success: false, message: String(err) };
        }
      }
    };
    const res = verifyIdToken();
    setMessage(res.message);
  };

  return (
    <Button onClick={handleGoogleLogin} size="large" variant={variant} color={color}  >
      <Typography fontWeight={"bold"} >
        {text}
      </Typography>
      <Login />
    </Button>
  );
}