import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAILJS_TEMPLATE_PARAMS } from '../config/emailjs';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (formData) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage('');

    try {
      // Prepare template parameters
      const templateParams = {
        ...EMAILJS_TEMPLATE_PARAMS,
        to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
        from_name: formData.name || 'Anonymous',
        from_email: formData.email || 'no-reply@studerp.com',
        subject: formData.subject || 'New Contact Form Submission',
        message: formData.message || 'No message provided',
        reply_to: formData.email || 'no-reply@studerp.com',
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setIsSuccess(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

      return { success: true, result };
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsError(true);
      setErrorMessage(error.message || 'Failed to send email. Please try again.');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setIsError(false);
        setErrorMessage('');
      }, 5000);

      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage('');
  };

  return {
    sendEmail,
    isLoading,
    isSuccess,
    isError,
    errorMessage,
    resetState,
  };
};
