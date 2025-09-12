import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';

const TermsPage = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]">
        <SpotlightCard className="p-8">
          <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
          <p className="text-white/70 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-4 text-white/80">
            <h2 className="text-xl text-white">Acceptance of Terms</h2>
            <p>By using this site, you agree to these terms. If you do not agree, please do not use the service.</p>
            <h2 className="text-xl text-white">Use of the Service</h2>
            <ul className="list-disc list-inside">
              <li>Do not misuse or attempt to disrupt the services.</li>
              <li>Respect intellectual property and privacy of others.</li>
              <li>Comply with applicable laws and regulations.</li>
            </ul>
          </div>
        </SpotlightCard>
      </section>
    </PageLayout>
  );
};

export default TermsPage;


