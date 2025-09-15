import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Freature from '../components/Freature';
import EmblaCarousel from '../components/Carousel';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import TeamName from '../components/TeamName';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage = () => {
  usePageMeta(
    'Student Management System',
    'Comprehensive student management software for schools, colleges, and universities. Features include attendance tracking, grade management, and analytics.',
    'student management system, education software, school management, attendance tracking, grade management'
  );
  return (
    <main  className="relative overflow-x-hidden">
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="" />
      <div className="h-0 w-[40rem] absolute top-[0%] right-[-20%] shadow-[0_0_900px_20px_#D4D4D4] -rotate-40 z-10"></div>
      <Header />
      <Hero />
      <Freature />
      <EmblaCarousel />
      <WhyUs />
      <Contact />
      <Footer />
      <TeamName />
      <GoToTop />
    </main>
  );
};

export default HomePage;
