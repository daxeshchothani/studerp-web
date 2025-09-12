import React, {useRef, useState, useEffect} from "react";
import SpotlightCard from "./SpotlightCard";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-hide success message after 3 seconds with smooth animation
  useEffect(() => {
    if (message.text) {
      // Trigger fade in animation
      setTimeout(() => setIsVisible(true), 10);
      
      if (message.type === 'success') {
        // Show success tick animation
        setShowSuccess(true);
        
        const timer = setTimeout(() => {
          setIsVisible(false);
          setShowSuccess(false);
          // Wait for fade out animation to complete before clearing message
          setTimeout(() => {
            setMessage({ text: '', type: '' });
          }, 300);
        }, 3000);
        
        return () => clearTimeout(timer);
      }
    }
  }, [message.text, message.type]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });
    setIsVisible(false);
    setShowSuccess(false);

    emailjs.sendForm('service_q7m2l8x', 'template_cryys9e', form.current, '71xZzaWtT-bkFuReY').then(
      () => {
        setMessage({ text: 'Message sent successfully! We\'ll get back to you soon.', type: 'success' });
        form.current.reset();
        setIsLoading(false);
      },
      (error) => {
        setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
        setIsLoading(false);
      }
    )
  }
  return (
    <section id="Contact-Section" className="contact why-us mt-[8rem] my-[6rem] container mx-auto px-4 lg:px-16 flex flex-col justify-center items-center gap-12 text-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
        <p className="text-white/70 max-w-3xl mx-auto">Have questions or need a demo? Send us a message and we’ll get back to you.</p>
      </div>

      <SpotlightCard className="w-full max-w-3xl p-6 md:p-8 text-left">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-white/80">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Dev Patel"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-white/80">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm text-white/80">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="I’d like to request a demo"
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Tell us a bit about your needs..."
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 focus:ring-0 resize-y"
              required
            />
          </div>

          <div className="pt-2 flex justify-center md:justify-center items-center lg:justify-start">
            <button 
              type="submit" 
              disabled={isLoading || showSuccess}
              className={`btn flex items-center gap-2 transition-all duration-300 ${
                isLoading || showSuccess
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:scale-105 transition-transform'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : showSuccess ? (
                <>
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Send message
                </>
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
