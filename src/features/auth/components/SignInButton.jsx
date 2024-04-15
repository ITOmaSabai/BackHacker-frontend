import { axios } from '../../../lib/axios';
import { useFirebaseAuth } from '../../../hooks/useFirebaseAuth';
import { Button, Typography } from '@mui/material';
import { Login } from '@mui/icons-material';
import { useFlashMessage } from '../../../contexts/FlashMessageContext';

export const SignInButton = ({ text, currentUser }) => {
  const { loginWithGoogle } = useFirebaseAuth();
  const { setMessage } = useFlashMessage();

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
    };
    const res = verifyIdToken();
    setMessage(res.message);
  };

  return (
    <Button onClick={handleGoogleLogin} size="large"  >
      <Typography fontWeight={"bold"} >
        {text}
      </Typography>
      <Login />
    </Button>
  );
}