import { AuthContextProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <Router>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </Router>
  );
};