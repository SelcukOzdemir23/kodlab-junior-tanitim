import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingProps {
  onBookDemo: () => void;
}

export const Pricing = ({ onBookDemo }: PricingProps) => {
  const [selectedFormat, setSelectedFormat] = useState<'standard' | 'premium'>('standard');

  const standardPlans = [
    {
      name: 'Optimal',
      price: 14720,
      originalPrice: 20020,
      pricePerLesson: 460,
      duration: '30 ders',
      discount: 5300,
      description: 'Kendi seçtiğin bir kursu altı ay boyunca maksimum faydayla ve ders başına düşük fiyat ödeyerek tamamlayın',
      popular: false
    },
    {
      name: 'Klasik',
      price: 28800,
      originalPrice: 40040,
      pricePerLesson: 450,
      duration: '60 ders',
      discount: 11240,
      description: 'Çocuğunuzun geleceğine yatırım yapın ve ona iki büyük projeyi tamamlama ve üst düzey projeler başlatma fırsatını verin',
      popular: true
    },
    {
      name: 'Profesyonel',
      price: 55040,
      originalPrice: 80080,
      pricePerLesson: 430,
      duration: '120 ders',
      discount: 25040,
      description: 'Dört büyük kursu tamamlayın ve Kodlab\'deki 2 yıllık eğitim tecrübesinden sonra profesyonel bir uzmanlık kazanın',
      popular: false
    },
    {
      name: 'Temel',
      price: 7440,
      originalPrice: 10010,
      pricePerLesson: 465,
      duration: '16 ders',
      discount: 2570,
      description: 'Kursun yarısını en iyi fiyata satın al, böylece kursu aylık yenilemek zorunda kalmazsınız',
      popular: false
    }
  ];

  const premiumPlans = [
    {
      name: 'Optimal Premium',
      price: 22080,
      originalPrice: 30030,
      pricePerLesson: 690,
      duration: '30 ders',
      discount: 7950,
      description: '2-5 kişilik özel gruplarda kendi seçtiğin kursu maksimum faydayla tamamla',
      popular: false
    },
    {
      name: 'Klasik Premium',
      price: 43200,
      originalPrice: 60060,
      pricePerLesson: 675,
      duration: '60 ders',
      discount: 16860,
      description: '2-5 kişilik özel gruplarda iki büyük projeyi tamamlama ve üst düzey projeler başlatma fırsatı',
      popular: true
    },
    {
      name: 'Profesyonel Premium',
      price: 82560,
      originalPrice: 120120,
      pricePerLesson: 645,
      duration: '120 ders',
      discount: 37560,
      description: '2-5 kişilik özel gruplarda dört büyük kursu tamamlayın ve profesyonel uzmanlık kazanın',
      popular: false
    },
    {
      name: 'Temel Premium',
      price: 11160,
      originalPrice: 15015,
      pricePerLesson: 697,
      duration: '16 ders',
      discount: 3855,
      description: '2-5 kişilik özel gruplarda kursun yarısını en iyi fiyata satın al',
      popular: false
    }
  ];

  const currentPlans = selectedFormat === 'standard' ? standardPlans : premiumPlans;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 relative overflow-hidden min-h-screen">
      {/* Floating lab equipment */}
      {[...Array(20)].map((_, i) => {
        const labItems = ['🧪', '⚗️', '🔬', '🧬', '⚛️', '🔭', '📡', '💊', '🥽', '🔋'];
        const randomItem = labItems[Math.floor(Math.random() * labItems.length)];
        return (
          <motion.div
            key={i}
            className="absolute text-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${32 + Math.random() * 24}px`,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-25, 25, -25],
              rotate: [-15, 15, -15],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {randomItem}
          </motion.div>
        );
      })}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">
            Fiyatlandırma
          </h2>
          <p className="text-xl text-white mb-8 drop-shadow-xl font-medium">
            Size en uygun öğrenme formatını seçin
          </p>

          {/* Format Seçici */}
          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-md bg-white/20 rounded-full p-1 border border-white/30">
              <button
                onClick={() => setSelectedFormat('standard')}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold ${selectedFormat === 'standard'
                  ? 'bg-white text-blue-600 shadow-lg drop-shadow-lg'
                  : 'text-white hover:bg-white/20 drop-shadow-md'
                  }`}
              >
                Standart (8-14 kişi)
              </button>
              <button
                onClick={() => setSelectedFormat('premium')}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold ${selectedFormat === 'premium'
                  ? 'bg-white text-blue-600 shadow-lg drop-shadow-lg'
                  : 'text-white hover:bg-white/20 drop-shadow-md'
                  }`}
              >
                Premium (2-5 kişi)
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
                ease: "easeOut"
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute -top-3 -right-3 z-20"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    EN İYİSİ !!!
                  </div>
                </motion.div>
              )}

              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 h-full shadow-2xl group-hover:bg-white/15 transition-all duration-300 flex flex-col">
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      En Popüler
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-2xl text-shadow-lg">{plan.name}</h3>
                  <div className="text-white text-sm mb-4 font-semibold drop-shadow-xl">{plan.duration}</div>
                  <div className="text-white text-sm leading-relaxed drop-shadow-xl font-medium">
                    {plan.description}
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-white text-sm font-medium">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 drop-shadow-lg"></div>
                    <span className="drop-shadow-xl">₺{plan.pricePerLesson}/ders başı ücret</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 drop-shadow-lg"></div>
                    <span className="drop-shadow-xl">İndirim ₺{plan.discount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 drop-shadow-lg"></div>
                    <span className="drop-shadow-xl">30 gün para iade garantisi</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onBookDemo}
                    className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 drop-shadow-lg ${plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                      }`}
                  >
                    ₺{plan.price.toLocaleString()} - Satın Al
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 mb-4">
            Tüm planlar 30 gün para iade garantisi ile gelir
          </p>
          <Button
            onClick={onBookDemo}
            className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-md"
          >
            Ücretsiz Demo Dersi Al
          </Button>
        </motion.div>
      </div>
    </section>
  );
};