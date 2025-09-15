import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import SpotlightCard from '../components/SpotlightCard';
import { usePageMeta } from '../hooks/usePageMeta';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  
  usePageMeta(
    'Documentation - STUERP',
    'Complete documentation for STUERP Student Management System. Learn how to use all features.',
    'documentation, user guide, student management, tutorials'
  );

  const docSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: 'bx-rocket',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'core-modules',
      title: 'Core Modules',
      icon: 'bx-cog',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'user-management',
      title: 'User Management',
      icon: 'bx-user',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: 'bx-code-alt',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: 'bx-wrench',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const getSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'getting-started':
        return (
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>Quick Start Guide</h3>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                  <h4 className='font-semibold text-white mb-2'>1. Account Setup</h4>
                  <p className='text-white/80 text-sm'>Create your administrator account and configure basic settings.</p>
                </div>
                <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/20'>
                  <h4 className='font-semibold text-white mb-2'>2. Import Data</h4>
                  <p className='text-white/80 text-sm'>Upload student and faculty information using our CSV templates.</p>
                </div>
                <div className='p-4 rounded-lg bg-purple-500/10 border border-purple-500/20'>
                  <h4 className='font-semibold text-white mb-2'>3. Configure Modules</h4>
                  <p className='text-white/80 text-sm'>Set up attendance tracking, grading systems, and communication preferences.</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'core-modules':
        return (
          <div className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='p-6 rounded-lg bg-white/5 border border-white/10'>
                <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                  <i className='bx bx-user text-blue-400'></i>
                  Student Management
                </h4>
                <ul className='space-y-2 text-white/80 text-sm'>
                  <li>• Student registration and profiles</li>
                  <li>• Academic record management</li>
                  <li>• Parent portal access</li>
                  <li>• Document management</li>
                </ul>
              </div>
              <div className='p-6 rounded-lg bg-white/5 border border-white/10'>
                <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                  <i className='bx bx-calendar-check text-green-400'></i>
                  Attendance Tracking
                </h4>
                <ul className='space-y-2 text-white/80 text-sm'>
                  <li>• Real-time attendance marking</li>
                  <li>• Automated parent notifications</li>
                  <li>• Attendance reports and analytics</li>
                  <li>• Mobile-friendly interface</li>
                </ul>
              </div>
              <div className='p-6 rounded-lg bg-white/5 border border-white/10'>
                <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                  <i className='bx bx-award text-purple-400'></i>
                  Grade Management
                </h4>
                <ul className='space-y-2 text-white/80 text-sm'>
                  <li>• Digital gradebook</li>
                  <li>• Automated calculations</li>
                  <li>• Progress tracking</li>
                  <li>• Report generation</li>
                </ul>
              </div>
              <div className='p-6 rounded-lg bg-white/5 border border-white/10'>
                <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                  <i className='bx bx-bar-chart text-orange-400'></i>
                  Analytics & Reports
                </h4>
                <ul className='space-y-2 text-white/80 text-sm'>
                  <li>• Performance dashboards</li>
                  <li>• Custom report builder</li>
                  <li>• Data visualization</li>
                  <li>• Export capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'user-management':
        return (
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>User Roles & Permissions</h3>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                  <h4 className='font-semibold text-white mb-2'>Administrator</h4>
                  <p className='text-white/80 text-sm mb-2'>Full system access and configuration rights.</p>
                  <ul className='text-white/70 text-sm space-y-1'>
                    <li>• Manage all users and permissions</li>
                    <li>• Configure system settings</li>
                    <li>• Access all reports and analytics</li>
                  </ul>
                </div>
                <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/20'>
                  <h4 className='font-semibold text-white mb-2'>Faculty</h4>
                  <p className='text-white/80 text-sm mb-2'>Access to teaching-related features and student data.</p>
                  <ul className='text-white/70 text-sm space-y-1'>
                    <li>• Mark attendance and grades</li>
                    <li>• View student progress</li>
                    <li>• Communicate with parents</li>
                  </ul>
                </div>
                <div className='p-4 rounded-lg bg-purple-500/10 border border-purple-500/20'>
                  <h4 className='font-semibold text-white mb-2'>Student</h4>
                  <p className='text-white/80 text-sm mb-2'>Access to personal academic information.</p>
                  <ul className='text-white/70 text-sm space-y-1'>
                    <li>• View grades and attendance</li>
                    <li>• Access assignments and schedules</li>
                    <li>• Communicate with faculty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'api-reference':
        return (
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>API Endpoints</h3>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-gray-800/50 border border-gray-700'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span className='px-2 py-1 bg-green-500 text-white text-xs rounded'>GET</span>
                    <code className='text-blue-400'>/api/students</code>
                  </div>
                  <p className='text-white/80 text-sm'>Retrieve all students</p>
                </div>
                <div className='p-4 rounded-lg bg-gray-800/50 border border-gray-700'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span className='px-2 py-1 bg-blue-500 text-white text-xs rounded'>POST</span>
                    <code className='text-blue-400'>/api/attendance</code>
                  </div>
                  <p className='text-white/80 text-sm'>Mark student attendance</p>
                </div>
                <div className='p-4 rounded-lg bg-gray-800/50 border border-gray-700'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span className='px-2 py-1 bg-yellow-500 text-white text-xs rounded'>PUT</span>
                    <code className='text-blue-400'>/api/grades</code>
                  </div>
                  <p className='text-white/80 text-sm'>Update student grades</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'troubleshooting':
        return (
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>Common Issues</h3>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-red-500/10 border border-red-500/20'>
                  <h4 className='font-semibold text-white mb-2'>Login Issues</h4>
                  <p className='text-white/80 text-sm mb-2'>If you can't log in, try these solutions:</p>
                  <ul className='text-white/70 text-sm space-y-1'>
                    <li>• Check your internet connection</li>
                    <li>• Clear browser cache and cookies</li>
                    <li>• Reset your password</li>
                    <li>• Contact system administrator</li>
                  </ul>
                </div>
                <div className='p-4 rounded-lg bg-orange-500/10 border border-orange-500/20'>
                  <h4 className='font-semibold text-white mb-2'>Performance Issues</h4>
                  <p className='text-white/80 text-sm mb-2'>If the system is running slowly:</p>
                  <ul className='text-white/70 text-sm space-y-1'>
                    <li>• Check your internet speed</li>
                    <li>• Close unnecessary browser tabs</li>
                    <li>• Update your browser</li>
                    <li>• Try a different browser</li>
                  </ul>
                </div>
                <div className='p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20'>
                  <h4 className='font-semibold text-white mb-2'>Data Sync Issues</h4>
                  <p className='text-white/80 text-sm mb-2'>If data isn't syncing properly:</p>
                  <ul className='text-white/70 text-sm space-y-1'>
                    <li>• Refresh the page</li>
                    <li>• Check your internet connection</li>
                    <li>• Wait a few minutes and try again</li>
                    <li>• Contact support if issue persists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Select a section to view documentation.</div>;
    }
  };

  return (
    <main className="relative overflow-x-hidden">
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />
      <div className="h-0 w-[40rem] absolute top-[0%] right-[-20%] shadow-[0_0_900px_20px_#D4D4D4] -rotate-40 z-10"></div>
      <Header />
      <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
        <div className='max-w-7xl mx-auto'>
          <Link to='/' className='nav-a-link' onClick={scrollToTop}>&larr; Back to home</Link>

        <div className='mt-8 mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6'>
            Documentation
          </h1>
          <p className='text-xl text-white/80 leading-relaxed'>
            Complete guide to using STUERP Student Management System. Find everything you need to get started.
          </p>
        </div>

        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4'>Documentation Sections</h3>
              <nav className='space-y-2'>
                {docSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <i className={`bx ${section.icon} text-lg`}></i>
                    <span className='font-medium'>{section.title}</span>
                  </button>
                ))}
              </nav>
            </SpotlightCard>
          </div>

          {/* Content */}
          <div className='lg:col-span-3'>
            <SpotlightCard className='p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${docSections.find(s => s.id === activeSection)?.color} flex items-center justify-center`}>
                  <i className={`bx ${docSections.find(s => s.id === activeSection)?.icon} text-white text-lg`}></i>
                </div>
                <h2 className='text-2xl font-bold text-white'>
                  {docSections.find(s => s.id === activeSection)?.title}
                </h2>
              </div>
              {getSectionContent(activeSection)}
            </SpotlightCard>
          </div>
        </div>

        {/* Quick Links */}
        <div className='mt-12'>
          <SpotlightCard className='p-8'>
            <h3 className='text-xl font-bold text-white mb-6 text-center'>Need More Help?</h3>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4'>
                  <i className='bx bx-support text-2xl text-white'></i>
                </div>
                <h4 className='font-semibold text-white mb-2'>Support Center</h4>
                <p className='text-white/70 text-sm mb-4'>Get help from our support team</p>
                <Link to='/support' className='btn'>Contact Support</Link>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4'>
                  <i className='bx bx-video text-2xl text-white'></i>
                </div>
                <h4 className='font-semibold text-white mb-2'>Video Tutorials</h4>
                <p className='text-white/70 text-sm mb-4'>Watch step-by-step guides</p>
                <a href='#' className='btn'>Watch Videos</a>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4'>
                  <i className='bx bx-download text-2xl text-white'></i>
                </div>
                <h4 className='font-semibold text-white mb-2'>Download PDF</h4>
                <p className='text-white/70 text-sm mb-4'>Complete user manual</p>
                <a href='#' className='btn'>Download</a>
              </div>
            </div>
          </SpotlightCard>
        </div>
        </div>
      </section>
      <Footer />
      <GoToTop />
    </main>
  );
};

export default DocsPage;
