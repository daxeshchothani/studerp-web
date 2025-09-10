import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SpotlightCard from '../components/SpotlightCard';
import { FEATURES } from '../constants/features';
import { usePageMeta } from '../hooks/usePageMeta';

const AttendanceTrackingPage = () => {
  const feature = FEATURES.find(f => f.id === 'attendance-tracking');
  
  usePageMeta(
    feature.title,
    feature.description,
    'attendance tracking, student attendance, automated reports, parent notifications'
  );

  return (
    <PageLayout>
      <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
        <div className='max-w-3xl'>
          <Link to='/' className='nav-a-link'>&larr; Back to home</Link>
        </div>
        
        <div className='mt-6 grid md:grid-cols-3 gap-8 items-start'>
          <SpotlightCard className='md:col-span-2 p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center'>
                <i className={`bx ${feature.icon} text-2xl text-white`}></i>
              </div>
              <div>
                <h1 className='text-2xl md:text-3xl font-semibold'>{feature.title}</h1>
                <span className='text-sm text-white/60 bg-white/10 px-2 py-1 rounded'>{feature.category}</span>
              </div>
            </div>
            <p className='text-white/70 leading-relaxed'>{feature.description}</p>

            <div className='mt-6'>
              <p className='text-white/60 text-xs tracking-wider mb-2'>KEY BENEFITS</p>
              <ul className='space-y-2'>
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className='flex items-start gap-3 text-white/90'>
                    <span className='mt-1 h-5 w-5 rounded-md bg-white/10 border border-white/20 flex items-center justify-center'>
                      <i className='bx bx-check text-[12px]'></i>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-6'>
              <p className='text-white/60 text-xs tracking-wider mb-2'>WHAT YOU CAN DO</p>
              <ul className='list-disc list-inside text-white/80 space-y-1'>
                {feature.capabilities.map((capability, i) => (
                  <li key={i}>{capability}</li>
                ))}
              </ul>
            </div>

            <div className='mt-8'>
              <p className='text-white/60 text-xs tracking-wider mb-2'>FAQ</p>
              <div className='space-y-4'>
                {feature.faq.map((item, i) => (
                  <div key={i} className='rounded-lg bg-white/5 border border-white/10 p-4'>
                    <p className='font-medium text-white'>{item.q}</p>
                    <p className='text-white/70 mt-1'>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className='p-6 md:p-8'>
            <h3 className='text-lg font-semibold mb-3'>Get a demo</h3>
            <p className='text-white/70 mb-4'>See how this feature fits your workflow.</p>
            <Link to='/#contact' className='btn inline-block'>Request demo</Link>
          </SpotlightCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default AttendanceTrackingPage;
