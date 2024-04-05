// import { useRoutes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProfile } from '../features/users/components/UserProfile';
import { MainLayout } from '../components/Layout/MainLayout';
import { CreateSpot } from '../features/spots/components/CreateSpot';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/spots" element={<CreateSpot />} />
    </Routes>
  )
}