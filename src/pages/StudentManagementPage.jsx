import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';
import { FEATURES } from '../constants/features';
import { usePageMeta } from '../hooks/usePageMeta';

const StudentManagementPage = () => {
  const feature = FEATURES.find(f => f.id === 'student-management');
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    newEnrollments: 0,
    attendanceRate: 0
  });

  usePageMeta(
    feature.title,
    feature.description,
    'student management, enrollment tracking, academic records, education software'
  );

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        totalStudents: Math.floor(Math.random() * 1000) + 5000,
        activeStudents: Math.floor(Math.random() * 800) + 4500,
        newEnrollments: Math.floor(Math.random() * 50) + 25,
        attendanceRate: Math.floor(Math.random() * 10) + 90
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bx-grid-alt' },
    { id: 'features', label: 'Features', icon: 'bx-cog' },
    { id: 'analytics', label: 'Analytics', icon: 'bx-bar-chart' },
    { id: 'integrations', label: 'Integrations', icon: 'bx-link' }
  ];

  const studentData = [
    { name: 'John Doe', id: 'STU001', grade: 'A+', attendance: '98%', status: 'Active' },
    { name: 'Jane Smith', id: 'STU002', grade: 'A', attendance: '95%', status: 'Active' },
    { name: 'Mike Johnson', id: 'STU003', grade: 'B+', attendance: '92%', status: 'Active' },
    { name: 'Sarah Wilson', id: 'STU004', grade: 'A-', attendance: '97%', status: 'Active' },
    { name: 'David Brown', id: 'STU005', grade: 'B', attendance: '89%', status: 'Warning' }
  ];

  return (
    <PageLayout>
      <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
        <div className='max-w-7xl'>
          <Link to='/' className='nav-a-link'>&larr; Back to home</Link>
        </div>
        
        {/* Hero Section */}
        <div className='mt-8 mb-12'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='relative'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/50 flex items-center justify-center backdrop-blur-sm'>
                <i className={`bx ${feature.icon} text-3xl text-white`}></i>
              </div>
              <div className='absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                <i className='bx bx-check text-xs text-white'></i>
              </div>
            </div>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent'>
                {feature.title}
              </h1>
              <span className='text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30'>
                {feature.category}
              </span>
            </div>
          </div>
          <p className='text-xl text-white/80 leading-relaxed max-w-4xl'>
            {feature.description}
          </p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
          {[
            { label: 'Total Students', value: stats.totalStudents.toLocaleString(), icon: 'bx-user', color: 'from-blue-500 to-cyan-500' },
            { label: 'Active Students', value: stats.activeStudents.toLocaleString(), icon: 'bx-user-check', color: 'from-green-500 to-emerald-500' },
            { label: 'New Enrollments', value: `+${stats.newEnrollments}`, icon: 'bx-user-plus', color: 'from-purple-500 to-pink-500' },
            { label: 'Attendance Rate', value: `${stats.attendanceRate}%`, icon: 'bx-calendar-check', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <SpotlightCard key={index} className='p-6 relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br opacity-10' style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[0]}, ${stat.color.split(' ')[2]})` }}></div>
              <div className='relative z-10'>
                <div className='flex items-center justify-between mb-2'>
                  <i className={`bx ${stat.icon} text-2xl text-white/80`}></i>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                </div>
                <div className='text-2xl font-bold text-white mb-1'>{stat.value}</div>
                <div className='text-sm text-white/60'>{stat.label}</div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Tabs */}
        <div className='mb-8'>
          <div className='flex flex-wrap gap-2 border-b border-white/10'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white border-b-2 border-blue-500'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className={`bx ${tab.icon}`}></i>
                <span className='font-medium'>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            {activeTab === 'overview' && (
              <div className='space-y-8'>
                <SpotlightCard className='p-8'>
                  <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                    <i className='bx bx-info-circle text-blue-400'></i>
                    System Overview
                  </h3>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>Key Benefits</h4>
                      <ul className='space-y-3'>
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className='flex items-start gap-3 text-white/90'>
                            <span className='mt-1 h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'>
                              <i className='bx bx-check text-sm text-white'></i>
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>Capabilities</h4>
                      <ul className='space-y-2'>
                        {feature.capabilities.map((capability, i) => (
                          <li key={i} className='flex items-center gap-2 text-white/80'>
                            <i className='bx bx-right-arrow-alt text-blue-400'></i>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard className='p-8'>
                  <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                    <i className='bx bx-data text-green-400'></i>
                    Live Student Data
                  </h3>
                  <div className='overflow-x-auto'>
                    <table className='w-full'>
                      <thead>
                        <tr className='border-b border-white/10'>
                          <th className='text-left py-3 px-4 text-white/80 font-semibold'>Student</th>
                          <th className='text-left py-3 px-4 text-white/80 font-semibold'>ID</th>
                          <th className='text-left py-3 px-4 text-white/80 font-semibold'>Grade</th>
                          <th className='text-left py-3 px-4 text-white/80 font-semibold'>Attendance</th>
                          <th className='text-left py-3 px-4 text-white/80 font-semibold'>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentData.map((student, index) => (
                          <tr key={index} className='border-b border-white/5 hover:bg-white/5 transition-colors'>
                            <td className='py-3 px-4 text-white'>{student.name}</td>
                            <td className='py-3 px-4 text-white/60'>{student.id}</td>
                            <td className='py-3 px-4'>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                student.grade.startsWith('A') ? 'bg-green-500/20 text-green-400' :
                                student.grade.startsWith('B') ? 'bg-blue-500/20 text-blue-400' :
                                'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {student.grade}
                              </span>
                            </td>
                            <td className='py-3 px-4 text-white/80'>{student.attendance}</td>
                            <td className='py-3 px-4'>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                student.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                              }`}>
                                {student.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </SpotlightCard>
              </div>
            )}

            {activeTab === 'features' && (
              <SpotlightCard className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <i className='bx bx-cog text-purple-400'></i>
                  Advanced Features
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  {[
                    { title: 'AI-Powered Analytics', desc: 'Machine learning insights for student performance', icon: 'bx-brain' },
                    { title: 'Biometric Integration', desc: 'Fingerprint and face recognition for attendance', icon: 'bx-fingerprint' },
                    { title: 'Mobile App', desc: 'Native iOS and Android applications', icon: 'bx-mobile' },
                    { title: 'Cloud Sync', desc: 'Real-time synchronization across devices', icon: 'bx-cloud' },
                    { title: 'API Integration', desc: 'Connect with third-party educational tools', icon: 'bx-code-alt' },
                    { title: 'Advanced Security', desc: 'End-to-end encryption and compliance', icon: 'bx-shield-check' }
                  ].map((item, index) => (
                    <div key={index} className='p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300'>
                      <div className='flex items-center gap-3 mb-2'>
                        <i className={`bx ${item.icon} text-xl text-blue-400`}></i>
                        <h4 className='font-semibold text-white'>{item.title}</h4>
                      </div>
                      <p className='text-white/70 text-sm'>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            )}

            {activeTab === 'analytics' && (
              <SpotlightCard className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <i className='bx bx-bar-chart text-green-400'></i>
                  Analytics Dashboard
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20'>
                    <h4 className='text-lg font-semibold text-white mb-4'>Performance Trends</h4>
                    <div className='space-y-3'>
                      <div className='flex justify-between items-center'>
                        <span className='text-white/80'>Academic Performance</span>
                        <span className='text-green-400 font-semibold'>+12%</span>
                      </div>
                      <div className='w-full bg-white/10 rounded-full h-2'>
                        <div className='bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-3/4'></div>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20'>
                    <h4 className='text-lg font-semibold text-white mb-4'>Attendance Rate</h4>
                    <div className='space-y-3'>
                      <div className='flex justify-between items-center'>
                        <span className='text-white/80'>Current Rate</span>
                        <span className='text-green-400 font-semibold'>94.2%</span>
                      </div>
                      <div className='w-full bg-white/10 rounded-full h-2'>
                        <div className='bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-5/6'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            )}

            {activeTab === 'integrations' && (
              <SpotlightCard className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <i className='bx bx-link text-orange-400'></i>
                  Integrations
                </h3>
                <div className='grid md:grid-cols-3 gap-4'>
                  {[
                    { name: 'Google Workspace', icon: 'bx-google' },
                    { name: 'Microsoft 365', icon: 'bx-microsoft' },
                    { name: 'Zoom', icon: 'bx-video' },
                    { name: 'Canvas LMS', icon: 'bx-book-open' },
                    { name: 'Slack', icon: 'bx-message' },
                    { name: 'Stripe', icon: 'bx-credit-card' }
                  ].map((integration, index) => (
                    <div key={index} className='p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center'>
                      <i className={`bx ${integration.icon} text-3xl text-white/80 mb-2`}></i>
                      <div className='text-white font-medium'>{integration.name}</div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            )}
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
          <div><SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                <i className='bx bx-play-circle text-blue-400'></i>
                Get Started
              </h3>
              <p className='text-white/70 mb-4'>Experience the power of our Student Management System.</p>
              <Link to='/#contact' className='btn w-full text-center block'>Request Demo</Link>
            </SpotlightCard>
            </div>

           <div><SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                <i className='bx bx-help-circle text-green-400'></i>
                FAQ
              </h3>
              <div className='space-y-4'>
                {feature.faq.map((item, i) => (
                  <div key={i} className='border-b border-white/10 pb-3 last:border-b-0'>
                    <p className='font-medium text-white text-sm mb-1'>{item.q}</p>
                    <p className='text-white/70 text-xs'>{item.a}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard></div>
<div>
            <SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                <i className='bx bx-shield-check text-purple-400'></i>
                Security
              </h3>
              <div className='space-y-2 text-sm text-white/80'>
                <div className='flex items-center gap-2'>
                  <i className='bx bx-check text-green-400'></i>
                  <span>End-to-end encryption</span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className='bx bx-check text-green-400'></i>
                  <span>GDPR compliant</span>
                </div>
                <div className='flex items-center gap-2'>
                  <i className='bx bx-check text-green-400'></i>
                  <span>SOC 2 certified</span>
                </div>
              </div>
            </SpotlightCard></div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StudentManagementPage;
