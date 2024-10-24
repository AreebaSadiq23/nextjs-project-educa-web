"use client";
import { useState } from 'react';
import Header from './components/header';
import HomeSection from './components/index';
import About from './components/about';
import Courses from './components/courses';
import Contact from './components/contact';
import Footer from './components/footer';
import Form from './components/form';

const Home: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleRegisterClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <Header onRegisterClick={handleRegisterClick} />
      <main className="mt-[60px]">
        <HomeSection />
        <About />
        <Courses />
        <Contact />
      </main>
      <Footer />

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Form isVisible={isFormVisible} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default Home;
