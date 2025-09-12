import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const HostelManagementPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="hostel-management"
        heroGradient={{
          from: 'from-blue-500/30',
          to: 'to-sky-500/30',
          border: 'border-blue-500/50',
          badgeText: 'text-sky-300',
          badgeBg: 'bg-sky-500/20',
          badgeBorder: 'border-sky-500/30',
          headingTo: 'to-sky-200'
        }}
        statsConfig={[
          { label: 'Hostels', icon: 'bx-buildings', color: 'from-blue-500 to-sky-500', gen: () => Math.floor(Math.random()*8)+2 },
          { label: 'Rooms', icon: 'bx-door-open', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*300)+100 },
          { label: 'Occupancy %', icon: 'bx-user', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*10)+85 },
          { label: 'Open Tickets', icon: 'bx-wrench', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*20)+3 }
        ]}
      />
    </PageLayout>
  );
};

export default HostelManagementPage;
