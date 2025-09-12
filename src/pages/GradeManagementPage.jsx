import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const GradeManagementPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="grade-management"
        heroGradient={{
          from: 'from-blue-500/30',
          to: 'to-violet-500/30',
          border: 'border-blue-500/50',
          badgeText: 'text-violet-300',
          badgeBg: 'bg-violet-500/20',
          badgeBorder: 'border-violet-500/30',
          headingTo: 'to-violet-200'
        }}
        statsConfig={[
          { label: 'Gradebooks', icon: 'bx-book-content', color: 'from-violet-500 to-blue-500', gen: () => Math.floor(Math.random()*80)+20 },
          { label: 'Published Reports', icon: 'bx-news', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*400)+120 },
          { label: 'Imports', icon: 'bx-import', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*250)+50 },
          { label: 'Latency', icon: 'bx-timer', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*120)+40 }
        ]}
      />
    </PageLayout>
  );
};

export default GradeManagementPage;
