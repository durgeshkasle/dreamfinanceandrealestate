import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Loader from '../components/commonComponents/Loader';
import { PrivateLayout } from '../containers/LayoutContainer';
import NotFoundPage from '../pages/ErrorhandlerPages/NotFoundPage';

// Pages
import DashboardPage from '../pages/DashboardPage';
import AboutPage from '../pages/AboutPage';
import TechExpertisePage from '../pages/TechExpertisePage';
import ProjectsPage from '../pages/ProjectsPage';
import HomePage from '../pages/HomePage';

const PrivateRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Protect sign-in and sign-up if already logged in */}
        <Route path="/sign-in" element={<Navigate to="/dashboard" replace />} />
        <Route path="/sign-up" element={<Navigate to="/dashboard" replace />} />

        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tech-expertise" element={<TechExpertisePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;
