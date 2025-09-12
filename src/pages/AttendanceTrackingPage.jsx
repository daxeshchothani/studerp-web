import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const AttendanceTrackingPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="attendance-tracking"
        heroGradient={{
          from: 'from-blue-500/30',
          to: 'to-emerald-500/30',
          border: 'border-blue-500/50',
          badgeText: 'text-emerald-300',
          badgeBg: 'bg-emerald-500/20',
          badgeBorder: 'border-emerald-500/30',
          headingTo: 'to-emerald-200'
        }}
        statsConfig={[
          { label: 'Daily Marked', icon: 'bx-calendar-check', color: 'from-emerald-500 to-green-500', gen: () => Math.floor(Math.random()*800)+200 },
          { label: 'Avg. Rate %', icon: 'bx-pie-chart-alt', color: 'from-blue-500 to-cyan-500', gen: () => Math.floor(Math.random()*8)+92 },
          { label: 'Alerts Sent', icon: 'bx-bell', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*120)+20 },
          { label: 'Latency', icon: 'bx-timer', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*150)+50 }
        ]}
      />
    </PageLayout>
  );
};

export default AttendanceTrackingPage;
