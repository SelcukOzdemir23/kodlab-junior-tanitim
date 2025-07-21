import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Courses } from '@/components/Courses';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookDemo = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header onBookDemo={handleBookDemo} />
      <main>
        <Hero onBookDemo={handleBookDemo} />
        <Features />
        <Courses onBookDemo={handleBookDemo} />
        <Testimonials />
        <Footer onBookDemo={handleBookDemo} />
      </main>
      
      <DemoBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </motion.div>
  );
};

export default Index;
