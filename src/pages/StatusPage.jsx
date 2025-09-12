import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';

const StatusPage = () => {
  const services = [
    { name: 'API', status: 'Operational', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
    { name: 'Database', status: 'Operational', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
    { name: 'Realtime', status: 'Degraded', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
    { name: 'Dashboard', status: 'Operational', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  ];

  return (
    <PageLayout>
      <section className="container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]">
        <SpotlightCard className="p-8">
          <h1 className="text-3xl font-semibold mb-4">System Status</h1>
          <p className="text-white/70 mb-6">Current health of STUDERP services.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div key={i} className={`p-4 rounded-lg border ${s.bg}`}>
                <div className="flex items-center justify-between">
                  <span className="text-white">{s.name}</span>
                  <span className={`${s.color} font-medium`}>{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </section>
    </PageLayout>
  );
};

export default StatusPage;


