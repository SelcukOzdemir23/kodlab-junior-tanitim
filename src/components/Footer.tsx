import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onBookDemo: () => void;
}

export const Footer = ({ onBookDemo }: FooterProps) => {
  const navigate = useNavigate();
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | 'kvkk' | null }>({ isOpen: false, type: null });

  const handleWhatsAppClick = () => {
    const phoneNumber = "905523877207"; // WhatsApp numarası
    const message = "Merhaba! KodLab Junior hakkında bilgi almak istiyorum.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579792173289', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/kodlab_junior/', label: 'Instagram' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@kodlab_junior', label: 'TikTok' }
  ];

  const quickLinks = [
    { label: 'Ana Sayfa', href: '#home', isScroll: true },
    { label: 'Kurslar', href: '#courses', isScroll: true },
    { label: 'Hakkımızda', href: '#about', isScroll: true },
    { label: 'İletişim', href: '#contact', isScroll: true },
    { label: 'SSS', href: '/sss', isScroll: false },
    { label: 'İade Politikası', href: '/iade-politikasi', isScroll: false }
  ];

  const legalLinks = [
    { label: 'Gizlilik Politikası', type: 'privacy' as const },
    { label: 'Kullanım Şartları', type: 'terms' as const },
    { label: 'KVKK Bilgileri', type: 'kvkk' as const }
  ];

  const handleLegalClick = (type: 'privacy' | 'terms' | 'kvkk') => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  const handleQuickLinkClick = (link: { label: string; href: string; isScroll: boolean }) => {
    if (link.isScroll) {
      // Ana sayfaya git ve scroll yap
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Route'a git ve en üste scroll yap
      navigate(link.href);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* WhatsApp Contact Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bizimle İletişime Geçin
            </h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Sorularınız için WhatsApp üzerinden hemen ulaşabilirsiniz
            </p>

            <div className="flex flex-col items-center space-y-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full max-w-sm bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="w-6 h-6 mr-3" />
                Bizimle İletişime Geçin
              </Button>

              <Button
                onClick={onBookDemo}
                size="lg"
                className="w-full max-w-sm bg-secondary text-secondary-foreground hover:bg-secondary-hover font-semibold text-lg px-8 py-6 shadow-glow"
              >
                Hemen Tanışma Dersi Al
              </Button>

              <p className="text-sm text-primary-foreground/60 mt-4">
                Ücretsiz deneme dersi için hemen kaydolun
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">K</span>
              </div>
              <span className="text-2xl font-bold">
                KodLab <span className="text-secondary">Junior</span>
              </span>
            </div>

            <p className="text-primary-foreground/80 leading-relaxed">
              10-17 yaş arası çocuklar için eğlenceli ve etkili kodlama eğitimi.
              Geleceğin teknolojisini bugünden öğrenmeye başlayın!
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">Hızlı Erişim</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLinkClick(link)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onBookDemo}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Tanışma Dersi
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Antalya,<br />
                    Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+90 552 387 72 07</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">kodlabjuniorofficial@gmail.com</span>
              </div>


            </div>
          </motion.div>

          {/* Kurslar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">Kurslarımız</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Scratch ile Başlangıç </li>
              <li>Python ile Kodlama </li>
              <li>Tinkercad </li>
              <li>Kodu </li>
              <li>GIMP </li>
              <li>Web Geliştirme</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 KodLab Junior. Tüm hakları saklıdır.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {legalLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLegalClick(link.type)}
                  className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={closeLegalModal}
        type={legalModal.type!}
      />
    </footer>
  );
};