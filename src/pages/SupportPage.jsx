import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]">
        <SpotlightCard className="p-8">
          <h1 className="text-3xl font-semibold mb-4">Support</h1>
          <p className="text-white/70 mb-6">We’re here to help you succeed with STUDERP.</p>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li><Link to="/docs" className="nav-a-link">Read the Docs</Link></li>
            <li>Community Q&A (coming soon)</li>
            <li>Priority support for enterprise plans</li>
          </ul>
        </SpotlightCard>
      </section>
    </PageLayout>
  );
};

export default SupportPage;


