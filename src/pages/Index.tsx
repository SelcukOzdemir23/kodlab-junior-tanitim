import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Courses } from '@/components/Courses';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

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
        <section id="home">
          <Hero onBookDemo={handleBookDemo} />
        </section>
        <section id="about">
          <Features />
        </section>
        <section id="courses">
          <Courses onBookDemo={handleBookDemo} />
        </section>
        <Testimonials />
        <section id="contact">
          <Footer onBookDemo={handleBookDemo} />
        </section>
      </main>
      
      <DemoBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </motion.div>
  );
};

export default Index;
