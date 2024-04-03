import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainLayout } from './features/auth/components/Layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
