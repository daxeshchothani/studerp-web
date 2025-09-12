import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const CourseManagementPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="course-management"
        heroGradient={{
          from: 'from-blue-500/30',
          to: 'to-indigo-500/30',
          border: 'border-blue-500/50',
          badgeText: 'text-indigo-300',
          badgeBg: 'bg-indigo-500/20',
          badgeBorder: 'border-indigo-500/30',
          headingTo: 'to-indigo-200'
        }}
        statsConfig={[
          { label: 'Courses', icon: 'bx-book', color: 'from-indigo-500 to-blue-500', gen: () => Math.floor(Math.random()*80)+20 },
          { label: 'Active Sections', icon: 'bx-grid-alt', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*120)+30 },
          { label: 'Conflicts Resolved', icon: 'bx-check-shield', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*60)+10 },
          { label: 'Latency', icon: 'bx-timer', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*120)+40 }
        ]}
      />
    </PageLayout>
  );
};

export default CourseManagementPage;
