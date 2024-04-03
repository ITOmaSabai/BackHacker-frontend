import { axios } from '../../../lib/axios'
import { useFirebaseAuth } from '../../../hooks/useFirebaseAuth';
import { IconButton } from '@mui/material';
import { Login } from '@mui/icons-material';

export const SignInButton = ({ text }) => {
  const { loginWithGoogle } = useFirebaseAuth();

  const handleGoogleLogin = () => {
    const verifyIdToken = async () => {
      const user = await loginWithGoogle();
      const token = await user?.getIdToken();

      const config = {
        headers: { authorization: `Bearer ${token}` },
      };

      try {
        axios.post("/api/v1/authentication", null, config);
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
    verifyIdToken();
  };

  return (
    <IconButton onClick={handleGoogleLogin} >
      {text}
      <Login />
    </IconButton>
  );
}