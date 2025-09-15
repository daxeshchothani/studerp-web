import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import SpotlightCard from '../components/SpotlightCard';
import { usePageMeta } from '../hooks/usePageMeta';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const PrivacyPage = () => {
  usePageMeta(
    'Privacy Policy - STUERP',
    'Privacy Policy for STUERP Student Management System. Learn how we protect and handle your data.',
    'privacy policy, data protection, student management, GDPR compliance'
  );

  return (
    <main className="relative overflow-x-hidden">
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />
      <div className="h-0 w-[40rem] absolute top-[0%] right-[-20%] shadow-[0_0_900px_20px_#D4D4D4] -rotate-40 z-10"></div>
      <Header />
      <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
        <div className='max-w-4xl mx-auto'>
          <Link to='/' className='nav-a-link' onClick={scrollToTop}>&larr; Back to home</Link>

        <div className='mt-8 mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6'>
            Privacy Policy
          </h1>
          <p className='text-xl text-white/80 leading-relaxed'>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className='space-y-8'>
          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-shield-check text-blue-400'></i>
              Information We Collect
            </h2>
            <div className='space-y-4 text-white/80'>
              <div>
                <h3 className='text-lg font-semibold text-white mb-2'>Student Information</h3>
                <ul className='list-disc list-inside space-y-1 ml-4'>
                  <li>Personal details (name, date of birth, contact information)</li>
                  <li>Academic records and performance data</li>
                  <li>Attendance and behavioral records</li>
                  <li>Parent/guardian contact information</li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white mb-2'>Faculty Information</h3>
                <ul className='list-disc list-inside space-y-1 ml-4'>
                  <li>Professional credentials and qualifications</li>
                  <li>Course assignments and teaching schedules</li>
                  <li>Performance evaluations and feedback</li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white mb-2'>System Usage Data</h3>
                <ul className='list-disc list-inside space-y-1 ml-4'>
                  <li>Login timestamps and session data</li>
                  <li>Feature usage analytics</li>
                  <li>Device and browser information</li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-lock-alt text-green-400'></i>
              How We Use Your Information
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-lg font-semibold text-white mb-3'>Educational Purposes</h3>
                <ul className='space-y-2 text-white/80'>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Manage student academic records</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Track attendance and performance</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Generate reports and analytics</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white mb-3'>System Operations</h3>
                <ul className='space-y-2 text-white/80'>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Provide technical support</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Improve system functionality</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Ensure system security</span>
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-shield text-purple-400'></i>
              Data Protection & Security
            </h2>
            <div className='space-y-4 text-white/80'>
              <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/20'>
                <h3 className='text-lg font-semibold text-white mb-2'>Encryption</h3>
                <p>All data is encrypted in transit and at rest using industry-standard AES-256 encryption.</p>
              </div>
              <div className='p-4 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                <h3 className='text-lg font-semibold text-white mb-2'>Access Controls</h3>
                <p>Role-based access controls ensure only authorized personnel can access sensitive information.</p>
              </div>
              <div className='p-4 rounded-lg bg-purple-500/10 border border-purple-500/20'>
                <h3 className='text-lg font-semibold text-white mb-2'>Compliance</h3>
                <p>We comply with GDPR, FERPA, and other educational data protection regulations.</p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-user-check text-orange-400'></i>
              Your Rights
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-lg font-semibold text-white mb-3'>Data Access</h3>
                <ul className='space-y-2 text-white/80'>
                  <li>• Request copies of your data</li>
                  <li>• View data processing activities</li>
                  <li>• Access audit logs</li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white mb-3'>Data Control</h3>
                <ul className='space-y-2 text-white/80'>
                  <li>• Request data correction</li>
                  <li>• Request data deletion</li>
                  <li>• Withdraw consent</li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-envelope text-teal-400'></i>
              Contact Us
            </h2>
            <div className='space-y-4 text-white/80'>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <h3 className='font-semibold text-white mb-2'>Email</h3>
                  <p>privacy@stuerp.com</p>
                </div>
                <div>
                  <h3 className='font-semibold text-white mb-2'>Data Protection Officer</h3>
                  <p>dpo@stuerp.com</p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        <div className='mt-12 text-center text-white/60'>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        </div>
      </section>
      <Footer />
      <GoToTop />
    </main>
  );
};

export default PrivacyPage;
