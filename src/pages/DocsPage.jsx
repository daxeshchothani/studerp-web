import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';

const DocsPage = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]">
        <SpotlightCard className="p-8">
          <h1 className="text-3xl font-semibold mb-4">Documentation</h1>
          <p className="text-white/70 mb-6">Find guides, API references, and best practices.</p>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>Getting started with STUDERP</li>
            <li>Feature deep dives and workflows</li>
            <li>API usage and webhooks</li>
            <li>Deployment and environment setup</li>
          </ul>
        </SpotlightCard>
      </section>
    </PageLayout>
  );
};

export default DocsPage;


