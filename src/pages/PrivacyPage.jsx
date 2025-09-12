import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';

const PrivacyPage = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]">
        <SpotlightCard className="p-8">
          <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
          <p className="text-white/70 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-4 text-white/80">
            <p>We value your privacy. This policy explains what data we collect, how we use it, and your rights.</p>
            <h2 className="text-xl text-white">Information We Collect</h2>
            <ul className="list-disc list-inside">
              <li>Account and contact information you provide</li>
              <li>Usage data to improve our services</li>
              <li>Cookies for essential functionality</li>
            </ul>
            <h2 className="text-xl text-white">How We Use Data</h2>
            <ul className="list-disc list-inside">
              <li>Provide and maintain the service</li>
              <li>Improve performance and user experience</li>
              <li>Communicate updates and support</li>
            </ul>
          </div>
        </SpotlightCard>
      </section>
    </PageLayout>
  );
};

export default PrivacyPage;


