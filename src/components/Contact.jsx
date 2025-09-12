import React, { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import { useEmailJS } from "../hooks/useEmailJS";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { sendEmail, isLoading, isSuccess, isError, errorMessage } = useEmailJS();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Send email
    const result = await sendEmail(formData);
    
    if (result.success) {
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <section id="Contact-Section" className="contact why-us mt-[8rem] my-[6rem] container mx-auto px-4 lg:px-16 flex flex-col justify-center items-center gap-12 text-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
        <p className="text-white/70 max-w-3xl mx-auto">Have questions or need a demo? Send us a message and we'll get back to you.</p>
      </div>

      <SpotlightCard className="w-full max-w-3xl p-6 md:p-8 text-left">
        {/* Success Message */}
        {isSuccess && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
            ✅ Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center">
            ❌ {errorMessage || 'Failed to send message. Please try again.'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-white/80">Full name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Dev Patel"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0"
                required
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-white/80">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm text-white/80">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="I'd like to request a demo"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0"
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white/80">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us a bit about your needs..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0 resize-y"
              required
              disabled={isLoading}
            />
          </div>

          <div className="pt-2 flex justify-center md:justify-center items-center lg:justify-start">
            <button 
              type="submit" 
              className={`btn ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <i className="bx bx-loader-alt animate-spin"></i>
                  Sending...
                </span>
              ) : (
                'Send message'
              )}
            </button>
          </div>
        </form>
      </SpotlightCard>
    </section>
  );
};

export default Contact;