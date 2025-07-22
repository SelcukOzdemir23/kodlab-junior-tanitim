import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppFloat = ({ 
  phoneNumber = "905523877207", // Placeholder numara - sonra güncellenecek
  message = "Merhaba! KodLab Junior hakkında bilgi almak istiyorum." 
}: WhatsAppFloatProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2, // 2 saniye sonra görünür
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-5 shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Pulse animasyonu */}
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* WhatsApp ikonu */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <FaWhatsapp className="w-8 h-8 relative z-10" />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 10
          }}
          className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg"
        >
          WhatsApp ile iletişime geç
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </motion.div>

        {/* Notification badge (opsiyonel) */}
        <motion.div
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          1
        </motion.div>
      </motion.button>
    </motion.div>
  );
}; 