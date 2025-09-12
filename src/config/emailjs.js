// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // You'll need to get these from your EmailJS account
  SERVICE_ID: 'service_1gshxm3', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_ku5qnlk', // Replace with your actual template ID
  PUBLIC_KEY: 'O3wSoVcG7CDZbrV2x', // Replace with your EmailJS public key
  RECIPIENT_EMAIL: 'chothanidaxesh@gmail.com', // Your email for receiving messages
};

// EmailJS template parameters
export const EMAILJS_TEMPLATE_PARAMS = {
  to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
  reply_to: '',
};
