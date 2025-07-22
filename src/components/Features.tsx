import { motion } from 'framer-motion';
import { Code, Home, Users, Monitor, MessageCircle, Github } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Aktif Yazılımcı Eğitmenler',
      description: 'Sadece öğretmen değil, günlük kod yazan yazılım mühendisleri. Çocuğunuz sektörün gerçeklerini öğreniyor.',
      color: 'accent'
    },
    {
      icon: Home,
      title: 'Evden Güvenli Eğitim',
      description: 'Modern online platformlarla evinin konforunda öğreniyor. COVID endişesi yok, ulaşım yorgunluğu yok.',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Mini Gruplar (Max 4 Kişi)',
      description: 'Gerçekten küçük gruplarla birebir ilgi. Her çocuğun kodunu tek tek kontrol ediyoruz.',
      color: 'secondary'
    },
    {
      icon: Monitor,
      title: 'Interaktif Online Deneyim',
      description: 'Screen sharing, canlı kod yazma, anlık geri bildirim. Sanki yanında oturuyormuş gibi öğreniyor.',
      color: 'accent'
    },
    {
      icon: MessageCircle,
      title: '7/24 Aile İletişimi',
      description: 'WhatsApp üzerinden her soru anında cevaplanıyor. Ders sonrası detaylı veli raporu.',
      color: 'primary'
    },
    {
      icon: Github,
      title: 'Gerçek Proje Portföyü',
      description: 'Çocuğunuz sadece öğrenmiyor, kendi projelerini yapıyor. GitHub\'da portfolio oluşturuyor.',
      color: 'secondary'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-secondary">Geleceğe Hazırlanın </span><br />
            Çocuğunuzun Teknoloji Geleceği
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          
            Çocuğunuzun geleceğini inşa etmek için buradayız. 
            Çocuğunuzun kendini keşfetme yolculuğunu destek olmaya çalışan yardımcılarız. 
            Sektörün en güncel bilgilerini, gerçek deneyimlerimizle öğretiyoruz. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-glow transition-all duration-300 h-full border border-border hover:border-secondary/20">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  feature.color === 'accent' ? 'bg-accent/10 text-accent' :
                  feature.color === 'primary' ? 'bg-primary/10 text-primary' :
                  'bg-secondary/10 text-secondary'
                }`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Çocuğunuzun Yazılım ve Teknoloji Geleceğini Şekillendirin
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Kaliteli ve Eğlenceli derslerle çocuğunuzun teknoloji dünyasında kendine yer edinmesini sağlayın.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};