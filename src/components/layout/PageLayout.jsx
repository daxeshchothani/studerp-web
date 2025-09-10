import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageLayout = ({ children, className = '' }) => {
  return (
    <main className={`relative overflow-x-hidden ${className}`}>
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />
      <div className="h-0 w-[40rem] absolute top-[0%] right-[-20%] shadow-[0_0_900px_20px_#D4D4D4] -rotate-40 z-10"></div>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
