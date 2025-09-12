import { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    // Check if Crisp is already loaded
    if (window.$crisp) return;

    // Initialize Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID";

    // Load Crisp script
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);

    // Optional: Configure Crisp settings
    window.$crisp.push(['set', 'user:nickname', 'Visitor']);
    window.$crisp.push(['set', 'user:email', '']);
    window.$crisp.push(['set', 'session:segments', ['student', 'visitor']]);

    // Cleanup function
    return () => {
      if (window.$crisp) {
        window.$crisp.push(['do', 'chat:close']);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CrispChat;
