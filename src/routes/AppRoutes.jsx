import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from '../components/layout/PublicLayout';
import PatientDashboardLayout from '../components/layout/PatientDashboardLayout';

// Public Pages
import HomePage from '../pages/public/HomePage';
import AboutPage from '../pages/public/AboutPage';
import TreatmentsPage from '../pages/public/TreatmentsPage';
import TreatmentDetailPage from '../pages/public/TreatmentDetailPage';
import DoctorsPage from '../pages/public/DoctorsPage';
import HospitalsPage from '../pages/public/HospitalsPage';
import HowItWorksPage from '../pages/public/HowItWorksPage';
import SuccessStoriesPage from '../pages/public/SuccessStoriesPage';
import FaqPage from '../pages/public/FaqPage';
import ContactPage from '../pages/public/ContactPage';

// Auth Pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';

// Patient Dashboard Pages
import DashboardOverviewPage from '../pages/patient/DashboardOverviewPage';
import MyProfilePage from '../pages/patient/MyProfilePage';
import MyEnquiriesPage from '../pages/patient/MyEnquiriesPage';
import MyDocumentsPage from '../pages/patient/MyDocumentsPage';
import MyConsultationsPage from '../pages/patient/MyConsultationsPage';
import TreatmentProgressPage from '../pages/patient/TreatmentProgressPage';
import RecoveryFollowUpPage from '../pages/patient/RecoveryFollowUpPage';
import ReturnHomePage from '../pages/patient/ReturnHomePage';
import MessagesPage from '../pages/patient/MessagesPage';
import SettingsPage from '../pages/patient/SettingsPage';

// 8 Journey Stage Pages
import EnquiryStagePage from '../pages/journey/EnquiryStagePage';
import ConsultationStagePage from '../pages/journey/ConsultationStagePage';
import ConfirmationStagePage from '../pages/journey/ConfirmationStagePage';
import MedicalVisaStagePage from '../pages/journey/MedicalVisaStagePage';
import TravelStagePage from '../pages/journey/TravelStagePage';
import TreatmentStagePage from '../pages/journey/TreatmentStagePage';
import RecoveryStagePage from '../pages/journey/RecoveryStagePage';
import ReturnHomeStagePage from '../pages/journey/ReturnHomeStagePage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* Patient Area (Protected) */}
      <Route path="/patient" element={<PatientDashboardLayout />}>
        <Route index element={<Navigate to="/patient/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardOverviewPage />} />
        <Route path="profile" element={<MyProfilePage />} />
        <Route path="enquiries" element={<MyEnquiriesPage />} />
        <Route path="documents" element={<MyDocumentsPage />} />
        <Route path="consultations" element={<MyConsultationsPage />} />
        <Route path="treatment-progress" element={<TreatmentProgressPage />} />
        <Route path="recovery" element={<RecoveryFollowUpPage />} />
        <Route path="return-home" element={<ReturnHomePage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="settings" element={<SettingsPage />} />

        {/* 8-Stage Patient Journey Routes */}
        <Route path="journey/enquiry" element={<EnquiryStagePage />} />
        <Route path="journey/consultation" element={<ConsultationStagePage />} />
        <Route path="journey/confirmation" element={<ConfirmationStagePage />} />
        <Route path="journey/visa" element={<MedicalVisaStagePage />} />
        <Route path="journey/travel" element={<TravelStagePage />} />
        <Route path="journey/treatment" element={<TreatmentStagePage />} />
        <Route path="journey/recovery" element={<RecoveryStagePage />} />
        <Route path="journey/return-home" element={<ReturnHomeStagePage />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
