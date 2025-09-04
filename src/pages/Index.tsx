import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Courses } from '@/components/Courses';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { useSEO, pageSEOConfigs } from '@/lib/seo';
import { usePaintSplash } from '@/hooks/usePaintSplash';
import { memo } from 'react';

const Index = memo(() => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { updateSEO, addStructuredData } = useSEO();
  usePaintSplash();

  useEffect(() => {
    // Ana sayfa için SEO ayarları
    updateSEO(pageSEOConfigs.home);

    // Structured data ekle
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "KodLab Junior Connect",
      "description": "7-17 yaş arası çocuklar için eğlenceli ve etkili kodlama eğitimleri",
      "url": "https://kodlabjunior.com",
      "logo": "https://kodlabjunior.com/logo.png",
      "image": "https://kodlabjunior.com/og-image.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "Turkish"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR"
      },
      "offers": {
        "@type": "Offer",
        "category": "Kodlama Eğitimi",
        "description": "Çocuklar için kodlama kursları",
        "availability": "https://schema.org/InStock"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Children",
        "suggestedMinAge": 10,
        "suggestedMaxAge": 17
      },
      "sameAs": [
        "https://www.instagram.com/kodlab_junior",
        "https://www.youtube.com/kodlab_junior",
        "https://www.linkedin.com/company/kodlab-junior"
      ]
    };

    addStructuredData(organizationData);
  }, [updateSEO, addStructuredData]);

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
      <main role="main">
        <section id="home" aria-label="Ana sayfa hero bölümü">
          <Hero onBookDemo={handleBookDemo} />
        </section>
        <section id="about" aria-label="Hakkımızda ve özellikler">
          <Features />
        </section>
        <section id="courses" aria-label="Kurslar ve eğitim programları">
          <Courses onBookDemo={handleBookDemo} />
        </section>
        <section id="pricing" aria-label="Fiyatlandırma planları">
          <Pricing onBookDemo={handleBookDemo} />
        </section>
        <section id="contact" aria-label="İletişim bilgileri">
          <Footer onBookDemo={handleBookDemo} />
        </section>
      </main>

      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <WhatsAppFloat />
    </motion.div>
  );
});

export default Index;