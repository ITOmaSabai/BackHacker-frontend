import { AuthContextProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';
import { SpotsContextProvider } from "../contexts/SpotsContext";
import { FlashMessageProvider } from "../contexts/FlashMessageContext";

export const AppProvider = ({ children }) => {
  return (
    <Router>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY} language='en'>
        <AuthContextProvider>
          <SpotsContextProvider>
            <FlashMessageProvider>
              {children}
            </FlashMessageProvider>
          </SpotsContextProvider>
        </AuthContextProvider>
      </APIProvider>
    </Router>
  );
};