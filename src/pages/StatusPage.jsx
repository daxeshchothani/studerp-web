import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import SpotlightCard from '../components/SpotlightCard';
import { usePageMeta } from '../hooks/usePageMeta';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const StatusPage = () => {
  const [systemStatus, setSystemStatus] = useState('operational');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [incidents, setIncidents] = useState([]);

  usePageMeta(
    'System Status - STUERP',
    'Check the current status of STUERP Student Management System and view any ongoing incidents.',
    'system status, uptime, incidents, service status, monitoring'
  );

  // Simulate real-time status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    operational: {
      color: 'from-green-500 to-emerald-500',
      icon: 'bx-check-circle',
      text: 'All Systems Operational',
      description: 'All services are running normally'
    },
    degraded: {
      color: 'from-yellow-500 to-orange-500',
      icon: 'bx-error',
      text: 'Degraded Performance',
      description: 'Some services may be experiencing issues'
    },
    outage: {
      color: 'from-red-500 to-pink-500',
      icon: 'bx-x-circle',
      text: 'Service Outage',
      description: 'One or more services are currently down'
    }
  };

  const services = [
    {
      name: 'Student Management',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2 days ago'
    },
    {
      name: 'Attendance Tracking',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms',
      lastIncident: '1 week ago'
    },
    {
      name: 'Grade Management',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '110ms',
      lastIncident: '3 days ago'
    },
    {
      name: 'Parent Portal',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '140ms',
      lastIncident: '5 days ago'
    },
    {
      name: 'Faculty Dashboard',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '105ms',
      lastIncident: '1 week ago'
    },
    {
      name: 'Analytics & Reports',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '200ms',
      lastIncident: '4 days ago'
    },
    {
      name: 'Real-time Chat',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '80ms',
      lastIncident: '2 weeks ago'
    },
    {
      name: 'Notification System',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '90ms',
      lastIncident: '1 week ago'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Student Portal',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-01-15 02:00:00',
      endTime: '2024-01-15 04:00:00',
      description: 'Routine maintenance to improve system performance and security.'
    },
    {
      id: 2,
      title: 'Temporary API Slowdown',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-12 14:30:00',
      endTime: '2024-01-12 15:15:00',
      description: 'API response times were slower than usual due to high traffic.'
    },
    {
      id: 3,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-10 09:00:00',
      endTime: '2024-01-10 11:30:00',
      description: 'Intermittent database connection issues affecting some users.'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'maintenance': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'minor': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'major': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'critical': return 'bg-red-600/20 text-red-300 border-red-600/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <main className="relative overflow-x-hidden">
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />
      <div className="h-0 w-[40rem] absolute top-[0%] right-[-20%] shadow-[0_0_900px_20px_#D4D4D4] -rotate-40 z-10"></div>
      <Header />
      <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
        <div className='max-w-6xl mx-auto'>
          <Link to='/' className='nav-a-link' onClick={scrollToTop}>&larr; Back to home</Link>

        <div className='mt-8 mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6'>
            System Status
          </h1>
          <p className='text-xl text-white/80 leading-relaxed'>
            Real-time status of STUERP services and infrastructure. Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        {/* Overall Status */}
        <div className='mb-8'>
          <SpotlightCard className='p-8'>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-4'>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${statusConfig[systemStatus].color} flex items-center justify-center`}>
                  <i className={`bx ${statusConfig[systemStatus].icon} text-3xl text-white`}></i>
                </div>
                <div>
                  <h2 className='text-3xl font-bold text-white'>{statusConfig[systemStatus].text}</h2>
                  <p className='text-white/70'>{statusConfig[systemStatus].description}</p>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-2xl font-bold text-green-400'>99.9%</div>
                <div className='text-white/60'>Uptime (30 days)</div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Service Status */}
          <div className='lg:col-span-2'>
            <SpotlightCard className='p-8'>
              <h3 className='text-2xl font-bold text-white mb-6'>Service Status</h3>
              <div className='space-y-4'>
                {services.map((service, index) => (
                  <div key={index} className='p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'>
                    <div className='flex items-center justify-between mb-3'>
                      <h4 className='text-lg font-semibold text-white'>{service.name}</h4>
                      <div className={`flex items-center gap-2 ${getStatusColor(service.status)}`}>
                        <i className='bx bx-circle text-xs'></i>
                        <span className='text-sm font-medium capitalize'>{service.status}</span>
                      </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4 text-sm'>
                      <div>
                        <div className='text-white/60'>Uptime</div>
                        <div className='text-white font-semibold'>{service.uptime}</div>
                      </div>
                      <div>
                        <div className='text-white/60'>Response Time</div>
                        <div className='text-white font-semibold'>{service.responseTime}</div>
                      </div>
                      <div>
                        <div className='text-white/60'>Last Incident</div>
                        <div className='text-white font-semibold'>{service.lastIncident}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* System Metrics */}
          <div className='space-y-6'>
            <SpotlightCard className='p-6'>
              <h3 className='text-xl font-bold text-white mb-4'>System Metrics</h3>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/20'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-white/80'>CPU Usage</span>
                    <span className='text-green-400 font-semibold'>23%</span>
                  </div>
                  <div className='w-full bg-white/10 rounded-full h-2'>
                    <div className='bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full' style={{width: '23%'}}></div>
                  </div>
                </div>
                <div className='p-4 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-white/80'>Memory Usage</span>
                    <span className='text-blue-400 font-semibold'>67%</span>
                  </div>
                  <div className='w-full bg-white/10 rounded-full h-2'>
                    <div className='bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full' style={{width: '67%'}}></div>
                  </div>
                </div>
                <div className='p-4 rounded-lg bg-purple-500/10 border border-purple-500/20'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-white/80'>Database</span>
                    <span className='text-purple-400 font-semibold'>Healthy</span>
                  </div>
                  <div className='w-full bg-white/10 rounded-full h-2'>
                    <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full'></div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className='p-6'>
              <h3 className='text-xl font-bold text-white mb-4'>Quick Stats</h3>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-white/80'>Active Users</span>
                  <span className='text-white font-semibold'>2,847</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-white/80'>API Calls (24h)</span>
                  <span className='text-white font-semibold'>1.2M</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-white/80'>Data Processed</span>
                  <span className='text-white font-semibold'>45.2 GB</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-white/80'>Response Time</span>
                  <span className='text-white font-semibold'>112ms</span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Recent Incidents */}
        <div className='mt-8'>
          <SpotlightCard className='p-8'>
            <h3 className='text-2xl font-bold text-white mb-6'>Recent Incidents</h3>
            <div className='space-y-4'>
              {recentIncidents.map((incident) => (
                <div key={incident.id} className='p-4 rounded-lg bg-white/5 border border-white/10'>
                  <div className='flex items-start justify-between mb-3'>
                    <h4 className='text-lg font-semibold text-white'>{incident.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                  </div>
                  <p className='text-white/80 mb-3'>{incident.description}</p>
                  <div className='flex items-center gap-4 text-sm text-white/60'>
                    <span>Started: {incident.startTime}</span>
                    <span>Resolved: {incident.endTime}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      incident.status === 'resolved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Status History */}
        <div className='mt-8'>
          <SpotlightCard className='p-8'>
            <h3 className='text-2xl font-bold text-white mb-6'>Status History (Last 30 Days)</h3>
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-green-500'></div>
                <div className='flex-1'>
                  <div className='flex justify-between items-center'>
                    <span className='text-white font-medium'>All Systems Operational</span>
                    <span className='text-white/60 text-sm'>29 days</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                <div className='flex-1'>
                  <div className='flex justify-between items-center'>
                    <span className='text-white font-medium'>Degraded Performance</span>
                    <span className='text-white/60 text-sm'>1 day</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Contact Information */}
        <div className='mt-8'>
          <SpotlightCard className='p-8'>
            <h3 className='text-2xl font-bold text-white mb-6 text-center'>Need Help?</h3>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4'>
                  <i className='bx bx-support text-2xl text-white'></i>
                </div>
                <h4 className='font-semibold text-white mb-2'>Support</h4>
                <p className='text-white/70 text-sm mb-4'>Get help with any issues</p>
                <Link to='/support' className='btn'>Contact Support</Link>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4'>
                  <i className='bx bx-bell text-2xl text-white'></i>
                </div>
                <h4 className='font-semibold text-white mb-2'>Status Updates</h4>
                <p className='text-white/70 text-sm mb-4'>Subscribe to notifications</p>
                <a href='#' className='btn'>Subscribe</a>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4'>
                  <i className='bx bx-twitter text-2xl text-white'></i>
                </div>
                <h4 className='font-semibold text-white mb-2'>Twitter</h4>
                <p className='text-white/70 text-sm mb-4'>Follow for updates</p>
                <a href='#' className='btn'>Follow @STUERP</a>
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

export default StatusPage;
