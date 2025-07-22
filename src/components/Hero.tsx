import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play, Star, Users, Trophy } from 'lucide-react';
import heroVideo from '@/assets/AnaSayfaVideo.mp4';

interface HeroProps {
  onBookDemo: () => void;
}

export const Hero = ({ onBookDemo }: HeroProps) => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Mutlu Öğrenci' },
    { icon: Trophy, value: '50+', label: 'Ödül Alan Proje' },
    { icon: Star, value: '4.9', label: 'Veli Memnuniyeti' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)'
    }}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-600/10 to-blue-400/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold leading-tight text-white"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
              >
                Dünün çocukları,{' '}
                <span className="text-yellow-300 font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
                  yarının
                </span>{' '}
                <span className="text-orange-400 font-extrabold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
                  MUCİTLERİ
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl max-w-xl text-white font-medium"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}
              >
                6-17 yaş arası çocuklar için eğlenceli ve etkili kodlama eğitimi. 
                Geleceğin teknolojisini bugünden öğrenmeye başlayın!
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                onClick={onBookDemo}
                className="font-semibold text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  color: 'white',
                  boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  border: 'none',
                  animation: 'gentleBounce 3s ease-in-out infinite'
                }}
              >
                Ücretsiz Deneme Dersi Al
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold text-lg px-8 py-6 group transform transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: '#fbbf24',
                  color: '#fbbf24',
                  background: 'rgba(251, 191, 36, 0.1)',
                  boxShadow: '0 4px 15px rgba(251, 191, 36, 0.3)',
                  textShadow: '1px 1px 1px rgba(0,0,0,0.2)'
                }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Tanıtım Videosu
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-yellow-300 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <div className="text-2xl font-bold text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>{stat.value}</div>
                  <div className="text-sm text-gray-200 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-brand">
              <video 
                src={heroVideo} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-16 -right-8 bg-accent text-accent-foreground p-4 rounded-2xl shadow-glow"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">4-17</div>
                <div className="text-sm">yaş arası</div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-4 rounded-2xl shadow-glow"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">%100</div>
                <div className="text-sm">Eğlenceli</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};