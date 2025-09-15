import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentManagementPage from './pages/StudentManagementPage';
import AttendanceTrackingPage from './pages/AttendanceTrackingPage';
import GradeManagementPage from './pages/GradeManagementPage';
import CourseManagementPage from './pages/CourseManagementPage';
import AnalyticsReportsPage from './pages/AnalyticsReportsPage';
import FacultyManagementPage from './pages/FacultyManagementPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdmissionSystemPage from './pages/AdmissionSystemPage';
import RealTimeChatPage from './pages/RealTimeChatPage';
import NotificationSystemPage from './pages/NotificationSystemPage';
import HostelManagementPage from './pages/HostelManagementPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import DocsPage from './pages/DocsPage';
import SupportPage from './pages/SupportPage';
import StatusPage from './pages/StatusPage';
import ThemedPage from './components/ThemedPage';
import Lenis from 'lenis';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-management" element={<StudentManagementPage />} />
        <Route path="/attendance-tracking" element={<AttendanceTrackingPage />} />
        <Route path="/grade-management" element={<GradeManagementPage />} />
        <Route path="/course-management" element={<CourseManagementPage />} />
        <Route path="/analytics-reports" element={<AnalyticsReportsPage />} />
        <Route path="/faculty-management" element={<FacultyManagementPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/admission-system" element={<AdmissionSystemPage />} />
        <Route path="/real-time-chat" element={<RealTimeChatPage />} />
        <Route path="/notification-system" element={<NotificationSystemPage />} />
        <Route path="/hostel-management" element={<HostelManagementPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/feature/:slug" element={<ThemedPage />} />
      </Routes>
    </>
  )
}