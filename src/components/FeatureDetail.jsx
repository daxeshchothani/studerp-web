import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SpotlightCard from './SpotlightCard';
import { FEATURES } from '../constants/features';
import { usePageMeta } from '../hooks/usePageMeta';

const defaultIntegrations = [
  { name: 'Google Workspace', icon: 'bx-google' },
  { name: 'Microsoft 365', icon: 'bx-microsoft' },
  { name: 'Zoom', icon: 'bx-video' },
  { name: 'Canvas LMS', icon: 'bx-book-open' },
  { name: 'Slack', icon: 'bx-message' },
  { name: 'Stripe', icon: 'bx-credit-card' }
];

const defaultTabs = [
  { id: 'overview', label: 'Overview', icon: 'bx-grid-alt' },
  { id: 'features', label: 'Features', icon: 'bx-cog' },
  { id: 'analytics', label: 'Analytics', icon: 'bx-bar-chart' },
  { id: 'integrations', label: 'Integrations', icon: 'bx-link' }
];

const defaultStatsConfig = [
  { label: 'Usage', icon: 'bx-rocket', color: 'from-blue-500 to-cyan-500', gen: () => Math.floor(Math.random()*80)+20 },
  { label: 'Adoption', icon: 'bx-trending-up', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*30)+60 },
  { label: 'Satisfaction', icon: 'bx-happy', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*15)+80 },
  { label: 'Latency', icon: 'bx-timer', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*150)+50 }
];

const FeatureDetail = ({
  featureId,
  heroGradient = { from: 'from-blue-500/30', to: 'to-purple-500/30', border: 'border-blue-500/50', badgeText: 'text-blue-300', badgeBg: 'bg-blue-500/20', badgeBorder: 'border-blue-500/30', headingTo: 'to-blue-200' },
  statsConfig = defaultStatsConfig,
  tabs = defaultTabs,
  integrations = defaultIntegrations
}) => {
  const feature = useMemo(() => FEATURES.find(f => f.id === featureId), [featureId]);
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(Array.from({ length: statsConfig.length }, (_, i) => statsConfig[i].gen()));

  usePageMeta(
    feature?.title || 'Feature',
    feature?.description || 'Details coming soon.',
    `${feature?.title || 'feature'}, education software`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(statsConfig.map(cfg => cfg.gen()));
    }, 2500);
    return () => clearInterval(interval);
  }, [statsConfig]);

  if (!feature) return null;

  return (
    <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
      <div className='max-w-7xl'>
        <Link to='/' className='nav-a-link'>&larr; Back to home</Link>
      </div>

      {/* Hero */}
      <div className='mt-8 mb-12'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative'>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${heroGradient.from} ${heroGradient.to} ${heroGradient.border} border flex items-center justify-center backdrop-blur-sm`}>
              <i className={`bx ${feature.icon} text-3xl text-white`}></i>
            </div>
            <div className='absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
              <i className='bx bx-check text-xs text-white'></i>
            </div>
          </div>
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-white ${heroGradient.headingTo} bg-clip-text text-transparent`}>
              {feature.title}
            </h1>
            <span className={`text-sm ${heroGradient.badgeText} ${heroGradient.badgeBg} px-3 py-1 rounded-full ${heroGradient.badgeBorder} border`}>
              {feature.category}
            </span>
          </div>
        </div>
        <p className='text-xl text-white/80 leading-relaxed max-w-4xl'>
          {feature.description}
        </p>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
        {statsConfig.map((cfg, idx) => (
          <SpotlightCard key={idx} className='p-6 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br opacity-10' style={{ background: `linear-gradient(135deg, ${cfg.color.split(' ')[0]}, ${cfg.color.split(' ')[2]})` }}></div>
            <div className='relative z-10'>
              <div className='flex items-center justify-between mb-2'>
                <i className={`bx ${cfg.icon} text-2xl text-white/80`}></i>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              </div>
              <div className='text-2xl font-bold text-white mb-1'>
                {typeof stats[idx] === 'number' ? (cfg.label.includes('Latency') ? `${stats[idx]}ms` : `${stats[idx]}${cfg.label.includes('%') ? '%' : ''}`) : stats[idx]}
              </div>
              <div className='text-sm text-white/60'>{cfg.label}</div>
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

      {/* Content */}
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
                      {feature.benefits?.map((benefit, i) => (
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
                      {feature.capabilities?.map((capability, i) => (
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
                  <i className='bx bx-list-check text-green-400'></i>
                  Highlights
                </h3>
                <div className='grid md:grid-cols-2 gap-4'>
                  {["Fast onboarding", "Role-based access", "Compliant & secure", "Scales to thousands"].map((item, idx) => (
                    <div key={idx} className='p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300'>
                      <div className='flex items-center gap-3'>
                        <i className='bx bx-star text-yellow-400'></i>
                        <span className='text-white'>{item}</span>
                      </div>
                    </div>
                  ))}
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
                  { title: 'AI Insights', desc: 'Machine learning powered recommendations', icon: 'bx-brain' },
                  { title: 'Automation', desc: 'Reduce manual work with smart automations', icon: 'bx-bot' },
                  { title: 'Mobile Ready', desc: 'Fully responsive and PWA-ready', icon: 'bx-mobile' },
                  { title: 'Cloud Sync', desc: 'Real-time sync across devices', icon: 'bx-cloud' },
                  { title: 'Open APIs', desc: 'Integrate with your favorite tools', icon: 'bx-code-alt' },
                  { title: 'Enterprise Security', desc: 'Encryption, SSO, and audit logs', icon: 'bx-shield-check' }
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
                Analytics
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20'>
                  <h4 className='text-lg font-semibold text-white mb-4'>Performance</h4>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/80'>Throughput</span>
                      <span className='text-green-400 font-semibold'>+18%</span>
                    </div>
                    <div className='w-full bg-white/10 rounded-full h-2'>
                      <div className='bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-3/4'></div>
                    </div>
                  </div>
                </div>
                <div className='p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20'>
                  <h4 className='text-lg font-semibold text-white mb-4'>Reliability</h4>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/80'>Uptime</span>
                      <span className='text-green-400 font-semibold'>99.9%</span>
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
                {integrations.map((integration, index) => (
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
         <div> <SpotlightCard className='p-6'>
            <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
              <i className='bx bx-play-circle text-blue-400'></i>
              Get Started
            </h3>
            <p className='text-white/70 mb-4'>Experience the power of {feature.title}.</p>
            <Link to='/#contact' className='btn w-full text-center block'>Request Demo</Link>
          </SpotlightCard></div>

          <div><SpotlightCard className='p-6'>
            <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
              <i className='bx bx-help-circle text-green-400'></i>
              FAQ
            </h3>
            <div className='space-y-4'>
              {feature.faq?.map((item, i) => (
                <div key={i} className='border-b border-white/10 pb-3 last:border-b-0'>
                  <p className='font-medium text-white text-sm mb-1'>{item.q}</p>
                  <p className='text-white/70 text-xs'>{item.a}</p>
                </div>
              ))}
            </div>
          </SpotlightCard></div>

          <div><SpotlightCard className='p-6'>
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
  );
};

export default FeatureDetail;
