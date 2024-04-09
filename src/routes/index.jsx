import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProfile } from '../features/users/components/UserProfile';
import { MainLayout } from '../components/Layout/MainLayout';
import { CreateSpotLayout } from '../components/Layout/CreateSpotLayout';
import { IndexSpotLayout } from '../components/Layout/IndexSpotLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/spots" element={<CreateSpotLayout />} />
        <Route path="/map" element={<IndexSpotLayout />} />
        <Route path="spots/:spotId" element={<IndexSpotLayout />} />
      </Route>
    </Routes>
  )
}