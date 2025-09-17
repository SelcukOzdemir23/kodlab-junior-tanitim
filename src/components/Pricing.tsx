import { useState } from 'react';
import React, { memo } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingProps {
  onBookDemo: () => void;
}

export const Pricing = memo(({ onBookDemo }: PricingProps) => {
  const [selectedFormat, setSelectedFormat] = useState<'standard' | 'premium'>('standard');

  const standardPlans = [
    {
      name: 'Tek Kurs',
      price: 18000,
      originalPrice: 18432,
      pricePerLesson: 576,
      duration: '32 ders',
      discount: 432,
      description: 'Bir kursu tamamlayın ve temel kodlama becerilerini öğrenin',
      popular: false
    },
    {
      name: 'İkili Paket',
      price: 32500,
      originalPrice: 36000,
      pricePerLesson: 508,
      duration: '64 ders',
      discount: 3500,
      description: 'İki kursu tamamlayın ve daha kapsamlı beceriler kazanın',
      popular: true
    },
    {
      name: 'Üçlü Paket',
      price: 48000,
      originalPrice: 54000,
      pricePerLesson: 500,
      duration: '96 ders',
      discount: 6000,
      description: 'Üç kursu tamamlayın ve ileri seviye projeler geliştirin',
      popular: false
    },
    {
      name: 'Dörtlü Paket',
      price: 62000,
      originalPrice: 72000,
      pricePerLesson: 486,
      duration: '128 ders',
      discount: 10000,
      description: 'Dört kursu tamamlayın ve profesyonel seviyeye ulaşın',
      popular: false
    }
  ];

  const premiumPlans = [
    {
      name: 'Tek Kurs Premium',
      price: 21000,
      originalPrice: 24000,
      pricePerLesson: 656,
      duration: '32 ders',
      discount: 3000,
      description: 'Maksimum 4 kişilik özel grupta bir kursu tamamlayın',
      popular: false
    },
    {
      name: 'İkili Paket Premium',
      price: 38000,
      originalPrice: 42000,
      pricePerLesson: 600,
      duration: '64 ders',
      discount: 4000,
      description: 'Maksimum 4 kişilik özel grupta iki kursu tamamlayın',
      popular: true
    },
    {
      name: 'Üçlü Paket Premium',
      price: 56000,
      originalPrice: 63000,
      pricePerLesson: 583,
      duration: '96 ders',
      discount: 7000,
      description: 'Maksimum 4 kişilik özel grupta üç kursu tamamlayın',
      popular: false
    },
    {
      name: 'Dörtlü Paket Premium',
      price: 72800,
      originalPrice: 84000,
      pricePerLesson: 568,
      duration: '128 ders',
      discount: 11200,
      description: 'Maksimum 4 kişilik özel grupta dört kursu tamamlayın',
      popular: false
    }
  ];

  const currentPlans = selectedFormat === 'standard' ? standardPlans : premiumPlans;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 relative overflow-hidden min-h-screen">
      {/* Floating lab equipment - CSS animated */}
      {[...Array(6)].map((_, i) => {
        const labItems = ['🧪', '⚗️', '🔬', '🧬', '⚛️', '🔭'];
        const item = labItems[i];
        return (
          <div
            key={i}
            className="absolute text-white/25 md:text-white/30"
            style={{
              left: `${(i * 15 + 8) % 85}%`,
              top: `${(i * 18 + 12) % 75}%`,
              fontSize: '28px',
              animation: `float${i % 3} ${7 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            {item}
          </div>
        );
      })}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">
            Fiyatlandırma
          </h2>
          <p className="text-xl text-white mb-8 drop-shadow-xl font-medium">
            Size en uygun öğrenme formatını seçin
          </p>

          {/* Format Seçici */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 rounded-full p-1 border border-white/30">
              <button
                onClick={() => setSelectedFormat('standard')}
                className={`px-6 py-2 rounded-full transition-all duration-200 font-semibold ${selectedFormat === 'standard'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
                  }`}
              >
                Standart Grup
              </button>
              <button
                onClick={() => setSelectedFormat('premium')}
                className={`px-6 py-2 rounded-full transition-all duration-200 font-semibold ${selectedFormat === 'premium'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
                  }`}
              >
                Premium (Max 4 kişi)
              </button>
            </div>
          </div>
        </div>

        <div
          key={selectedFormat}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {currentPlans.map((plan, index) => (
            <div
              key={`${selectedFormat}-${plan.name}`}
              className="relative group hover:-translate-y-2 transition-transform duration-200 animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    En Popüler!
                  </div>
                </div>
              )}

              <div className="bg-white/10 border border-white/20 rounded-3xl p-6 h-full shadow-xl group-hover:bg-white/15 transition-colors duration-200 flex flex-col">
                {plan.popular && (
                  <div className="text-center mb-4">

                  </div>
                )}

                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-2xl">{plan.name}</h3>
                  <div className="text-white text-sm mb-4 font-semibold drop-shadow-xl">{plan.duration}</div>
                  <div className="text-white text-sm leading-relaxed drop-shadow-xl font-medium">
                    {plan.description}
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-white text-sm font-medium">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>₺{plan.pricePerLesson}/ders başı ücret</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Her ders 80 dakika</span>
                  </div>
                  {plan.discount > 0 && (
                    <div className="flex items-center bg-red-500/20 rounded-lg p-2 border border-red-400/30">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <span className="text-red-200 font-bold">🔥 ₺{plan.discount.toLocaleString()} İNDİRİM!</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Detaylar ile ilgili bilgi almak için ⬇️</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={onBookDemo}
                    className={`w-full py-3 rounded-2xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                      }`}
                  >
                    ₺{plan.price.toLocaleString()} - Satın Al
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">
            Detaylar ile ilgili bilgi almak için ⬇️
          </p>
          <Button
            onClick={onBookDemo}
            className="bg-white/20 text-white border border-white/30 hover:bg-white/30"
          >
            Ücretsiz Demo Dersi Al
          </Button>
        </div>
      </div>
    </section>
  );
});