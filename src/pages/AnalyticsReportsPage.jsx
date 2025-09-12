import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const AnalyticsReportsPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="analytics-reports"
        heroGradient={{
          from: 'from-blue-500/30',
          to: 'to-cyan-500/30',
          border: 'border-blue-500/50',
          badgeText: 'text-blue-300',
          badgeBg: 'bg-blue-500/20',
          badgeBorder: 'border-blue-500/30',
          headingTo: 'to-blue-200'
        }}
        statsConfig={[
          { label: 'Dashboards', icon: 'bx-layout', color: 'from-blue-500 to-cyan-500', gen: () => Math.floor(Math.random()*12)+4 },
          { label: 'Reports Generated', icon: 'bx-bar-chart', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*900)+100 },
          { label: 'Exported', icon: 'bx-export', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*700)+50 },
          { label: 'Latency', icon: 'bx-timer', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*120)+40 }
        ]}
      />
    </PageLayout>
  );
};

export default AnalyticsReportsPage;
