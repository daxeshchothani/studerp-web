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

const TermsPage = () => {
  usePageMeta(
    'Terms of Service - STUERP',
    'Terms of Service for STUERP Student Management System. Read our terms and conditions.',
    'terms of service, terms and conditions, student management, legal'
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
            Terms of Service
          </h1>
          <p className='text-xl text-white/80 leading-relaxed'>
            These terms govern your use of STUERP Student Management System. Please read them carefully.
          </p>
        </div>

        <div className='space-y-8'>
          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-file-doc text-blue-400'></i>
              Acceptance of Terms
            </h2>
            <div className='space-y-4 text-white/80'>
              <p>
                By accessing or using STUERP, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
              <p>
                These terms apply to all users of the service, including students, faculty, administrators, and parents.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-user-check text-green-400'></i>
              User Responsibilities
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-lg font-semibold text-white mb-3'>Account Security</h3>
                <ul className='space-y-2 text-white/80'>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Keep login credentials secure</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Use strong, unique passwords</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Report suspicious activity immediately</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white mb-3'>Appropriate Use</h3>
                <ul className='space-y-2 text-white/80'>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Use only for educational purposes</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Respect other users' privacy</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='bx bx-check text-green-400 mt-1'></i>
                    <span>Follow institutional policies</span>
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-shield-x text-red-400'></i>
              Prohibited Activities
            </h2>
            <div className='space-y-4 text-white/80'>
              <div className='p-4 rounded-lg bg-red-500/10 border border-red-500/20'>
                <h3 className='text-lg font-semibold text-white mb-2'>You may not:</h3>
                <ul className='space-y-1'>
                  <li>• Attempt to gain unauthorized access to the system</li>
                  <li>• Share your account credentials with others</li>
                  <li>• Use the system for any illegal activities</li>
                  <li>• Upload malicious software or harmful content</li>
                  <li>• Interfere with system operations or other users</li>
                  <li>• Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-copyright text-purple-400'></i>
              Intellectual Property
            </h2>
            <div className='space-y-4 text-white/80'>
              <p>
                STUERP and its original content, features, and functionality are owned by STUERP and are protected by 
                international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-3'>Our Rights</h3>
                  <ul className='space-y-2'>
                    <li>• Software and platform ownership</li>
                    <li>• Trademark and branding rights</li>
                    <li>• Patent rights for innovations</li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-3'>Your Rights</h3>
                  <ul className='space-y-2'>
                    <li>• Access to your educational data</li>
                    <li>• Export your personal information</li>
                    <li>• Use the service as intended</li>
                  </ul>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-error-circle text-orange-400'></i>
              Service Availability
            </h2>
            <div className='space-y-4 text-white/80'>
              <p>
                We strive to maintain high service availability, but we cannot guarantee uninterrupted access. 
                The service may be temporarily unavailable due to:
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='p-4 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                  <h3 className='font-semibold text-white mb-2'>Scheduled Maintenance</h3>
                  <p className='text-sm'>Regular updates and improvements</p>
                </div>
                <div className='p-4 rounded-lg bg-orange-500/10 border border-orange-500/20'>
                  <h3 className='font-semibold text-white mb-2'>Technical Issues</h3>
                  <p className='text-sm'>Unexpected system problems</p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-gavel text-teal-400'></i>
              Limitation of Liability
            </h2>
            <div className='space-y-4 text-white/80'>
              <p>
                To the maximum extent permitted by law, STUERP shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to loss of profits, data, 
                or other intangible losses.
              </p>
              <div className='p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20'>
                <h3 className='font-semibold text-white mb-2'>Important Notice</h3>
                <p className='text-sm'>
                  This limitation applies regardless of whether the damages arise from breach of contract, 
                  tort, or any other legal theory.
                </p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-edit text-cyan-400'></i>
              Changes to Terms
            </h2>
            <div className='space-y-4 text-white/80'>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes through the platform or via email. Continued use of the service after changes constitutes 
                acceptance of the new terms.
              </p>
              <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/20'>
                <h3 className='font-semibold text-white mb-2'>Notification Process</h3>
                <p className='text-sm'>
                  Users will be notified 30 days before significant changes take effect.
                </p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-8'>
            <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <i className='bx bx-envelope text-pink-400'></i>
              Contact Information
            </h2>
            <div className='space-y-4 text-white/80'>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <h3 className='font-semibold text-white mb-2'>General Inquiries</h3>
                  <p>legal@stuerp.com</p>
                </div>
                <div>
                  <h3 className='font-semibold text-white mb-2'>Support</h3>
                  <p>support@stuerp.com</p>
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

export default TermsPage;
