import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { CreateSpotLayout } from '../components/Layout/CreateSpotLayout';
import { IndexSpotLayout } from '../components/Layout/IndexSpotLayout';
import { UserLayout } from '../components/Layout/UserLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/profile" element={<UserLayout />} />
        <Route path="/spots" element={<CreateSpotLayout />} />
        <Route path="/map" element={<IndexSpotLayout />} />
        <Route path="spots/:spotId" element={<IndexSpotLayout />} />
      </Route>
    </Routes>
  )
}