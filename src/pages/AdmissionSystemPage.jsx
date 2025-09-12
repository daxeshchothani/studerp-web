import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const AdmissionSystemPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="admission-system"
        heroGradient={{
          from: 'from-orange-500/30',
          to: 'to-red-500/30',
          border: 'border-orange-500/50',
          badgeText: 'text-orange-300',
          badgeBg: 'bg-orange-500/20',
          badgeBorder: 'border-orange-500/30',
          headingTo: 'to-orange-200'
        }}
        statsConfig={[
          { label: 'Applications', icon: 'bx-file', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*900)+100 },
          { label: 'Approval Rate', icon: 'bx-like', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*20)+70 },
          { label: 'Avg. Review Time', icon: 'bx-time', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*36)+12 },
          { label: 'Active Campaigns', icon: 'bx-bullseye', color: 'from-blue-500 to-cyan-500', gen: () => Math.floor(Math.random()*6)+2 }
        ]}
      />
    </PageLayout>
  );
};

export default AdmissionSystemPage;
