import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';
import { FEATURES } from '../constants/features';
import { usePageMeta } from '../hooks/usePageMeta';

const AdminDashboardPage = () => {
  const feature = FEATURES.find(f => f.id === 'admin-dashboard');
  const [activeTab, setActiveTab] = useState('overview');
  const [systemStats, setSystemStats] = useState({
    totalUsers: 0,
    activeSessions: 0,
    systemUptime: 0,
    dataProcessed: 0,
    alerts: 0,
    performance: 0
  });

  usePageMeta(
    feature.title,
    feature.description,
    'admin dashboard, system administration, analytics, user management, reporting'
  );

  // Simulate real-time system data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats(prev => ({
        totalUsers: Math.floor(Math.random() * 2000) + 8000,
        activeSessions: Math.floor(Math.random() * 500) + 1200,
        systemUptime: Math.floor(Math.random() * 5) + 99,
        dataProcessed: Math.floor(Math.random() * 1000) + 5000,
        alerts: Math.floor(Math.random() * 10) + 2,
        performance: Math.floor(Math.random() * 10) + 85
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bx-grid-alt' },
    { id: 'analytics', label: 'Analytics', icon: 'bx-bar-chart' },
    { id: 'users', label: 'User Management', icon: 'bx-user' },
    { id: 'system', label: 'System Health', icon: 'bx-cog' }
  ];

  const recentActivities = [
    { action: 'User Login', user: 'john.doe@school.edu', time: '2 minutes ago', status: 'success' },
    { action: 'Data Export', user: 'admin@school.edu', time: '5 minutes ago', status: 'success' },
    { action: 'System Backup', user: 'system', time: '15 minutes ago', status: 'success' },
    { action: 'Failed Login', user: 'unknown@email.com', time: '22 minutes ago', status: 'warning' },
    { action: 'User Created', user: 'jane.smith@school.edu', time: '1 hour ago', status: 'success' }
  ];

  const systemAlerts = [
    { type: 'info', message: 'System backup completed successfully', time: '5 min ago' },
    { type: 'warning', message: 'High memory usage detected', time: '12 min ago' },
    { type: 'success', message: 'Database optimization completed', time: '1 hour ago' },
    { type: 'error', message: 'Failed to sync with external API', time: '2 hours ago' }
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
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/50 flex items-center justify-center backdrop-blur-sm'>
                <i className={`bx ${feature.icon} text-3xl text-white`}></i>
              </div>
              <div className='absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                <i className='bx bx-check text-xs text-white'></i>
              </div>
            </div>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                {feature.title}
              </h1>
              <span className='text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30'>
                {feature.category}
              </span>
            </div>
          </div>
          <p className='text-xl text-white/80 leading-relaxed max-w-4xl'>
            {feature.description}
          </p>
        </div>

        {/* System Stats Cards */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12'>
          {[
            { label: 'Total Users', value: systemStats.totalUsers.toLocaleString(), icon: 'bx-user', color: 'from-blue-500 to-cyan-500' },
            { label: 'Active Sessions', value: systemStats.activeSessions.toLocaleString(), icon: 'bx-user-check', color: 'from-green-500 to-emerald-500' },
            { label: 'System Uptime', value: `${systemStats.systemUptime}%`, icon: 'bx-trending-up', color: 'from-purple-500 to-pink-500' },
            { label: 'Data Processed', value: `${systemStats.dataProcessed}GB`, icon: 'bx-data', color: 'from-orange-500 to-red-500' },
            { label: 'Alerts', value: systemStats.alerts.toString(), icon: 'bx-bell', color: 'from-yellow-500 to-orange-500' },
            { label: 'Performance', value: `${systemStats.performance}%`, icon: 'bx-tachometer', color: 'from-teal-500 to-blue-500' }
          ].map((stat, index) => (
            <SpotlightCard key={index} className='p-4 relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br opacity-10' style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[0]}, ${stat.color.split(' ')[2]})` }}></div>
              <div className='relative z-10'>
                <div className='flex items-center justify-between mb-2'>
                  <i className={`bx ${stat.icon} text-xl text-white/80`}></i>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                </div>
                <div className='text-lg font-bold text-white mb-1'>{stat.value}</div>
                <div className='text-xs text-white/60'>{stat.label}</div>
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
                    ? 'bg-white/10 text-white border-b-2 border-purple-500'
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
                    <i className='bx bx-info-circle text-purple-400'></i>
                    System Overview
                  </h3>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>Key Benefits</h4>
                      <ul className='space-y-3'>
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className='flex items-start gap-3 text-white/90'>
                            <span className='mt-1 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
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
                            <i className='bx bx-right-arrow-alt text-purple-400'></i>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard className='p-8'>
                  <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                    <i className='bx bx-activity text-green-400'></i>
                    Recent Activities
                  </h3>
                  <div className='space-y-4'>
                    {recentActivities.map((activity, index) => (
                      <div key={index} className='flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'>
                        <div className='flex items-center gap-3'>
                          <div className={`w-3 h-3 rounded-full ${
                            activity.status === 'success' ? 'bg-green-400' : 
                            activity.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></div>
                          <div>
                            <p className='text-white font-medium'>{activity.action}</p>
                            <p className='text-white/60 text-sm'>{activity.user}</p>
                          </div>
                        </div>
                        <span className='text-white/60 text-sm'>{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            )}

            {activeTab === 'analytics' && (
              <SpotlightCard className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <i className='bx bx-bar-chart text-blue-400'></i>
                  Analytics Dashboard
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20'>
                    <h4 className='text-lg font-semibold text-white mb-4'>User Growth</h4>
                    <div className='space-y-3'>
                      <div className='flex justify-between items-center'>
                        <span className='text-white/80'>Monthly Growth</span>
                        <span className='text-green-400 font-semibold'>+24%</span>
                      </div>
                      <div className='w-full bg-white/10 rounded-full h-2'>
                        <div className='bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-4/5'></div>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20'>
                    <h4 className='text-lg font-semibold text-white mb-4'>System Performance</h4>
                    <div className='space-y-3'>
                      <div className='flex justify-between items-center'>
                        <span className='text-white/80'>CPU Usage</span>
                        <span className='text-green-400 font-semibold'>45%</span>
                      </div>
                      <div className='w-full bg-white/10 rounded-full h-2'>
                        <div className='bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-1/2'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            )}

            {activeTab === 'users' && (
              <SpotlightCard className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <i className='bx bx-user text-cyan-400'></i>
                  User Management
                </h3>
                <div className='grid md:grid-cols-3 gap-4'>
                  {[
                    { role: 'Administrators', count: 12, color: 'from-red-500 to-pink-500' },
                    { role: 'Teachers', count: 156, color: 'from-blue-500 to-cyan-500' },
                    { role: 'Students', count: 2847, color: 'from-green-500 to-emerald-500' },
                    { role: 'Parents', count: 1923, color: 'from-purple-500 to-violet-500' },
                    { role: 'Staff', count: 89, color: 'from-orange-500 to-yellow-500' },
                    { role: 'Guests', count: 45, color: 'from-gray-500 to-slate-500' }
                  ].map((userType, index) => (
                    <div key={index} className='p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='text-white font-medium'>{userType.role}</span>
                        <span className='text-white/60 text-sm'>{userType.count}</span>
                      </div>
                      <div className='w-full bg-white/10 rounded-full h-2'>
                        <div className={`bg-gradient-to-r ${userType.color} h-2 rounded-full`} style={{ width: `${(userType.count / 3000) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            )}

            {activeTab === 'system' && (
              <SpotlightCard className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <i className='bx bx-cog text-orange-400'></i>
                  System Health
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20'>
                      <span className='text-white'>Database Status</span>
                      <span className='text-green-400 font-semibold'>Healthy</span>
                    </div>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                      <span className='text-white'>API Response</span>
                      <span className='text-blue-400 font-semibold'>Fast</span>
                    </div>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20'>
                      <span className='text-white'>Memory Usage</span>
                      <span className='text-yellow-400 font-semibold'>Moderate</span>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20'>
                      <span className='text-white'>Storage Space</span>
                      <span className='text-green-400 font-semibold'>Available</span>
                    </div>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20'>
                      <span className='text-white'>Backup Status</span>
                      <span className='text-green-400 font-semibold'>Updated</span>
                    </div>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/20'>
                      <span className='text-white'>Security Alerts</span>
                      <span className='text-red-400 font-semibold'>2 Active</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            )}
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
          <div>  <SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                <i className='bx bx-play-circle text-purple-400'></i>
                Get Started
              </h3>
              <p className='text-white/70 mb-4'>Experience the power of our Admin Dashboard.</p>
              <Link to='/#contact' className='btn w-full text-center block'>Request Demo</Link>
            </SpotlightCard></div>

            <div><SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                <i className='bx bx-bell text-yellow-400'></i>
                System Alerts
              </h3>
              <div className='space-y-3'>
                {systemAlerts.map((alert, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${
                    alert.type === 'error' ? 'bg-red-500/10 border-red-500/20' :
                    alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                    alert.type === 'success' ? 'bg-green-500/10 border-green-500/20' :
                    'bg-blue-500/10 border-blue-500/20'
                  }`}>
                    <p className='text-white text-sm mb-1'>{alert.message}</p>
                    <p className='text-white/60 text-xs'>{alert.time}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard></div>

        <div>    <SpotlightCard className='p-6'>
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

          <div>  <SpotlightCard className='p-6'>
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
            </SpotlightCard>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdminDashboardPage;
