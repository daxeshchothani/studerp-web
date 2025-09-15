import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import SpotlightCard from '../components/SpotlightCard';
import { usePageMeta } from '../hooks/usePageMeta';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const SupportPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    priority: 'medium',
    subject: '',
    message: ''
  });

  usePageMeta(
    'Support - STUERP',
    'Get help and support for STUERP Student Management System. Contact our support team.',
    'support, help, contact, student management, technical support'
  );

  const supportCategories = [
    { id: 'general', title: 'General Inquiry', icon: 'bx-help-circle', color: 'from-blue-500 to-cyan-500' },
    { id: 'technical', title: 'Technical Issue', icon: 'bx-wrench', color: 'from-red-500 to-orange-500' },
    { id: 'billing', title: 'Billing & Account', icon: 'bx-credit-card', color: 'from-green-500 to-emerald-500' },
    { id: 'feature', title: 'Feature Request', icon: 'bx-lightbulb', color: 'from-purple-500 to-pink-500' },
    { id: 'bug', title: 'Bug Report', icon: 'bx-bug', color: 'from-yellow-500 to-orange-500' }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low', description: 'General questions or minor issues' },
    { value: 'medium', label: 'Medium', description: 'Important issues affecting workflow' },
    { value: 'high', label: 'High', description: 'Critical issues blocking system use' },
    { value: 'urgent', label: 'Urgent', description: 'System down or data loss' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Support ticket submitted:', formData);
    alert('Support ticket submitted successfully! We\'ll get back to you within 24 hours.');
  };

  return (
    <main className="relative overflow-x-hidden">
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />
      <div className="h-0 w-[40rem] absolute top-[0%] right-[-20%] shadow-[0_0_900px_20px_#D4D4D4] -rotate-40 z-10"></div>
      <Header />
      <section className='container mx-auto px-4 lg:px-16 mt-[6rem] mb-[4rem]'>
        <div className='max-w-6xl mx-auto'>
          <Link to='/' className='nav-a-link' onClick={scrollToTop}>&larr; Back to home</Link>

        <div className='mt-8 mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6'>
            Support Center
          </h1>
          <p className='text-xl text-white/80 leading-relaxed'>
            Get help with STUERP. Our support team is here to assist you with any questions or issues.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Support Options */}
          <div className='lg:col-span-1 space-y-6'>
            <SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4'>Quick Support</h3>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-blue-500/10 border border-blue-500/20'>
                  <div className='flex items-center gap-3 mb-2'>
                    <i className='bx bx-phone text-blue-400'></i>
                    <h4 className='font-semibold text-white'>Phone Support</h4>
                  </div>
                  <p className='text-white/80 text-sm'>+1 (555) 123-4567</p>
                  <p className='text-white/60 text-xs'>Mon-Fri 9AM-6PM EST</p>
                </div>
                <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/20'>
                  <div className='flex items-center gap-3 mb-2'>
                    <i className='bx bx-envelope text-green-400'></i>
                    <h4 className='font-semibold text-white'>Email Support</h4>
                  </div>
                  <p className='text-white/80 text-sm'>support@stuerp.com</p>
                  <p className='text-white/60 text-xs'>24/7 response</p>
                </div>
                <div className='p-4 rounded-lg bg-purple-500/10 border border-purple-500/20'>
                  <div className='flex items-center gap-3 mb-2'>
                    <i className='bx bx-message text-purple-400'></i>
                    <h4 className='font-semibold text-white'>Live Chat</h4>
                  </div>
                  <p className='text-white/80 text-sm'>Available now</p>
                  <p className='text-white/60 text-xs'>Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-4'>Self-Service</h3>
              <div className='space-y-3'>
                <Link to='/docs' className='flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors'>
                  <i className='bx bx-book text-blue-400'></i>
                  <span className='text-white/80'>Documentation</span>
                </Link>
                <Link to='/status' className='flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors'>
                  <i className='bx bx-pulse text-green-400'></i>
                  <span className='text-white/80'>System Status</span>
                </Link>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors'>
                  <i className='bx bx-video text-purple-400'></i>
                  <span className='text-white/80'>Video Tutorials</span>
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors'>
                  <i className='bx bx-download text-orange-400'></i>
                  <span className='text-white/80'>Download Center</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <SpotlightCard className='p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>Submit a Support Ticket</h2>
              
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Category Selection */}
                <div>
                  <label className='block text-sm font-semibold text-white mb-3'>Support Category</label>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    {supportCategories.map((category) => (
                      <button
                        key={category.id}
                        type='button'
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setFormData(prev => ({ ...prev, category: category.id }));
                        }}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 text-white'
                            : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <div className='flex items-center gap-2'>
                          <i className={`bx ${category.icon}`}></i>
                          <span className='text-sm font-medium'>{category.title}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Basic Information */}
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-white mb-2'>Name *</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500'
                      placeholder='Your full name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-white mb-2'>Email *</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                {/* Priority Level */}
                <div>
                  <label className='block text-sm font-semibold text-white mb-3'>Priority Level</label>
                  <div className='grid md:grid-cols-2 gap-3'>
                    {priorityLevels.map((priority) => (
                      <label key={priority.value} className='flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/20 hover:bg-white/10 cursor-pointer'>
                        <input
                          type='radio'
                          name='priority'
                          value={priority.value}
                          checked={formData.priority === priority.value}
                          onChange={handleInputChange}
                          className='mt-1'
                        />
                        <div>
                          <div className='font-medium text-white'>{priority.label}</div>
                          <div className='text-sm text-white/70'>{priority.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className='block text-sm font-semibold text-white mb-2'>Subject *</label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500'
                    placeholder='Brief description of your issue'
                  />
                </div>

                {/* Message */}
                <div>
                  <label className='block text-sm font-semibold text-white mb-2'>Message *</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 resize-none'
                    placeholder='Please provide detailed information about your issue or question...'
                  />
                </div>

                {/* Submit Button */}
                <div className='flex justify-end'>
                  <button
                    type='submit'
                    className='px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105'
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            </SpotlightCard>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mt-12'>
          <SpotlightCard className='p-8'>
            <h3 className='text-2xl font-bold text-white mb-8 text-center'>Frequently Asked Questions</h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                  <h4 className='font-semibold text-white mb-2'>How do I reset my password?</h4>
                  <p className='text-white/80 text-sm'>Click "Forgot Password" on the login page and follow the instructions sent to your email.</p>
                </div>
                <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                  <h4 className='font-semibold text-white mb-2'>Can I access the system on mobile?</h4>
                  <p className='text-white/80 text-sm'>Yes, STUERP is fully responsive and works on all mobile devices and tablets.</p>
                </div>
                <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                  <h4 className='font-semibold text-white mb-2'>How do I import student data?</h4>
                  <p className='text-white/80 text-sm'>Use the CSV import feature in the Admin Dashboard. Download our template for proper formatting.</p>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                  <h4 className='font-semibold text-white mb-2'>Is my data secure?</h4>
                  <p className='text-white/80 text-sm'>Yes, we use enterprise-grade encryption and comply with all educational data protection regulations.</p>
                </div>
                <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                  <h4 className='font-semibold text-white mb-2'>How do I add new users?</h4>
                  <p className='text-white/80 text-sm'>Administrators can add users through the User Management section in the Admin Dashboard.</p>
                </div>
                <div className='p-4 rounded-lg bg-white/5 border border-white/10'>
                  <h4 className='font-semibold text-white mb-2'>Can I customize the system?</h4>
                  <p className='text-white/80 text-sm'>Yes, many features can be customized through the Settings panel to match your institution's needs.</p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        </div>
      </section>
      <Footer />
      <GoToTop />
    </main>
  );
};

export default SupportPage;
