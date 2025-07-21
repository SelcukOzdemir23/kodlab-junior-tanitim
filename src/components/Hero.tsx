import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play, Star, Users, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-kids-coding.jpg';

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
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      
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
                className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              >
                Dünün çocukları,{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  yarının
                </span>{' '}
                <span className="text-secondary">
                  MUCİTLERİ
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl"
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
                className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-lg px-8 py-6 shadow-glow animate-bounce-gentle"
              >
                Ücretsiz Deneme Dersi Al
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold text-lg px-8 py-6 group"
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
                    <stat.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              <img 
                src={heroImage} 
                alt="Çocuklar kodlama öğreniyor" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-glow"
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