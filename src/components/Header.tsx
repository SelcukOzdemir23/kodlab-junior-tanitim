import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { smoothScrollTo } from '@/utils/smoothScroll';

interface HeaderProps {
  onBookDemo: () => void;
}

export const Header = ({ onBookDemo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Ana Sayfa', href: '#home', section: 'home' },
    { label: 'Hakkımızda', href: '#about', section: 'about' },
    { label: 'Kurslar', href: '#courses', section: 'courses' },
    { label: 'Fiyatlandırma', href: '#pricing', section: 'pricing' },
    { label: 'İletişim', href: '#contact', section: 'contact' },
    { label: 'İade Politikası', href: '/iade-politikasi', section: 'refund-policy', isPage: true },
    { label: 'SSS', href: '/sss', section: 'faq', isPage: true },
  ];

  const handleNavigation = (item: { label: string; href: string; section: string; isPage?: boolean }) => {
    // Eğer ayrı bir sayfa ise (İade Politikası, SSS)
    if (item.isPage) {
      navigate(item.href);
      return;
    }
    
    // Ana sayfa bölümleri için
    if (location.pathname !== '/') {
      // Farklı sayfadaysak önce ana sayfaya git
      navigate('/');
      setTimeout(() => {
        smoothScrollTo(item.section);
      }, 300);
    } else {
      // Ana sayfadaysak direkt scroll yap
      smoothScrollTo(item.section);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                smoothScrollTo('home');
              }
            }}
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              KodLab <span className="text-secondary">Junior</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigation(item)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <Button 
              onClick={onBookDemo}
              size="sm" 
              className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold shadow-brand"
            >
              Tanışma Dersi
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    handleNavigation(item);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    onBookDemo();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent-hover"
                >
                  Tanışma Dersi
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};