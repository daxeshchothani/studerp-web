import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import FeatureDetail from '../components/FeatureDetail';

const FacultyManagementPage = () => {
  return (
    <PageLayout>
      <FeatureDetail
        featureId="faculty-management"
        heroGradient={{
          from: 'from-blue-500/30',
          to: 'to-teal-500/30',
          border: 'border-blue-500/50',
          badgeText: 'text-teal-300',
          badgeBg: 'bg-teal-500/20',
          badgeBorder: 'border-teal-500/30',
          headingTo: 'to-teal-200'
        }}
        statsConfig={[
          { label: 'Faculty', icon: 'bx-chalkboard', color: 'from-teal-500 to-blue-500', gen: () => Math.floor(Math.random()*120)+40 },
          { label: 'Courses Assigned', icon: 'bx-task', color: 'from-purple-500 to-pink-500', gen: () => Math.floor(Math.random()*220)+60 },
          { label: 'Grades Uploaded', icon: 'bx-upload', color: 'from-green-500 to-emerald-500', gen: () => Math.floor(Math.random()*600)+150 },
          { label: 'Latency', icon: 'bx-timer', color: 'from-orange-500 to-red-500', gen: () => Math.floor(Math.random()*120)+40 }
        ]}
      />
    </PageLayout>
  );
};

export default FacultyManagementPage;
