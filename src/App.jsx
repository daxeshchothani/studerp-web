import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentManagementPage from './pages/StudentManagementPage';
import AttendanceTrackingPage from './pages/AttendanceTrackingPage';
import GradeManagementPage from './pages/GradeManagementPage';
import ParentPortalPage from './pages/ParentPortalPage';
import CourseManagementPage from './pages/CourseManagementPage';
import AnalyticsReportsPage from './pages/AnalyticsReportsPage';
import ThemedPage from './components/ThemedPage';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animations
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-management" element={<StudentManagementPage />} />
        <Route path="/attendance-tracking" element={<AttendanceTrackingPage />} />
        <Route path="/grade-management" element={<GradeManagementPage />} />
        <Route path="/parent-portal" element={<ParentPortalPage />} />
        <Route path="/course-management" element={<CourseManagementPage />} />
        <Route path="/analytics-reports" element={<AnalyticsReportsPage />} />
        <Route path="/feature/:slug" element={<ThemedPage />} />
      </Routes>
    </>
  )
}