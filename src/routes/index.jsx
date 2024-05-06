import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { CreateSpotLayout } from '../components/Layout/CreateSpotLayout';
import { IndexSpotLayout } from '../components/Layout/IndexSpotLayout';
import { UserLayout } from '../components/Layout/UserLayout';
import { IndexLikedSpotLayout } from '../components/Layout/IndexLikedSpotLayout';
import { HeroLayout } from '../components/Layout/HeroLayout';
import { TermsOfService } from '../features/terms_of_services/components/TermsOfService';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path="/" element={<HeroLayout />} />
        <Route path="/spots" element={<CreateSpotLayout />} />
        <Route path="/map" element={<IndexSpotLayout />} />
        <Route path="spots/:spotId" element={<IndexSpotLayout />} />
        <Route path="/users/:userId" element={<UserLayout />} />
        <Route path="/users/:userId/likes" element={<IndexLikedSpotLayout />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Route>
    </Routes>
  )
}