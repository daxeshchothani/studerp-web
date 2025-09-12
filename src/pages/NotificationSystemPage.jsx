import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const NotificationSystemPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="notification-system"
        heroGradient={{
          from: 'from-teal-500/30',
          to: 'to-blue-500/30',
          border: 'border-teal-500/50',
          badgeText: 'text-teal-300',
          badgeBg: 'bg-teal-500/20',
          badgeBorder: 'border-teal-500/30',
          headingTo: 'to-teal-200'
        }}
        statsConfig={[
          { label: 'Notifications Sent', icon: 'bx-paper-plane', color: 'from-teal-500 to-blue-500', gen: () => Math.floor(Math.random()*2000)+500 },
          { label: 'Delivery Rate %', icon: 'bx-check-circle', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*5)+94 },
          { label: 'Channels Active', icon: 'bx-broadcast', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*3)+3 },
          { label: 'Latency', icon: 'bx-timer', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*80)+20 }
        ]}
      />
    </PageLayout>
  );
};

export default NotificationSystemPage;
